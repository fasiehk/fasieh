import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Quick health check for manual testing
export async function GET() {
  return NextResponse.json({ ok: true });
}

const apiKey = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  try {
    // Strict timeout for reading the request body to avoid hanging on bad clients
    const body = await Promise.race([
      request.json(),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error('BodyTimeout')), 5000)),
    ]);
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Hard timeout for the external request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['fasiehklasson@gmail.com'],
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    if (!res.ok) {
      const err = await res.text().catch(() => '');
      console.error('Resend API error:', res.status, err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 });
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.name === 'AbortError') {
        console.error('Email send timeout');
        return NextResponse.json({ error: 'Email service timeout' }, { status: 504 });
      }
      if (err.message === 'BodyTimeout') {
        console.error('Request body parse timeout');
        return NextResponse.json({ error: 'Request body timeout' }, { status: 408 });
      }
    }
    console.error('Email send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
