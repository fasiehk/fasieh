"use client";

import React from "react";

interface ContactFormProps {
  card: string;
  cardTitle: string;
  ctaPrimary: string;
}

export default function ContactForm({ card, cardTitle, ctaPrimary }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // This prevents page redirect
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 5000); // Clear success message after 5 seconds
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={card} onSubmit={handleSubmit}>
      <h3 className={cardTitle}>Send a Message</h3>
      <div className="mt-3 grid gap-3">
        <label className="sr-only" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-50"
        />
        <label className="sr-only" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-50"
        />
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your message..."
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-50"
        />
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className={`${ctaPrimary} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {submitStatus === 'success' && (
          <p className="text-sm text-green-600 font-medium">✓ Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-sm text-red-600 font-medium">✗ Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  );
}
