import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

// Favicon & PWA metadata (paste your generated links/paths)
export const metadata: Metadata = {
  title: "Hafiz M Fasieh",
  icons: {
    icon: [
      // Browser tab icons
      { url: "https://i.postimg.cc/jSZ3qMVM/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "https://i.postimg.cc/jSZ3qMVM/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "https://i.postimg.cc/jSZ3qMVM/favicon.ico" },
    ],
    // iOS home screen icon
    apple: [{ url: "https://i.postimg.cc/jSZ3qMVM/favicon-32x32.png", sizes: "180x180", type: "image/png" }],
    // Optional extras (remove if you don't have them)
    shortcut: ["PASTE_FAVICON_ICO"],
    other: [{ rel: "mask-icon", url: "PASTE_SAFARI_PINNED_TAB_SVG", color: "#5bbad5" }],
  },
  manifest: "PASTE_SITE_WEBMANIFEST_URL", // optional; remove if not used
  themeColor: "#ffffff",
};

// Ensure proper scaling on mobile devices
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function Page() {
  const year = new Date().getFullYear();

  // Refined, light-only design tokens with professional spacing and micro-interactions.
  const navLink =
    "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 min-h-[44px]";
  const ctaPrimary =
    "inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:bg-indigo-500 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 min-h-[44px] touch-manipulation";
  const ctaSecondary =
    "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-xs transition-colors duration-200 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 min-h-[44px] touch-manipulation";
  // Refined card shapes
  const card =
    "group relative rounded-[24px] border border-gray-200 bg-white p-4 sm:p-5 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-gray-200 before:pointer-events-none before:absolute before:inset-0 before:rounded-[24px] before:content-[''] before:shadow-[inset_0_0_0_1px_rgba(17,24,39,0.04)]";
  const cardTitle = "mb-1 text-base sm:text-base font-semibold text-gray-900";
  const cardText = "text-sm leading-6 text-gray-600";
  const pill =
    "inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-700 mr-1.5 mb-1.5";
  // New beveled variant
  const cardBevel =
    "rounded-none [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_16px,100%_calc(100%-16px),calc(100%-16px)_100%,16px_100%,0_calc(100%-16px),0_16px)]";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased scroll-smooth selection:bg-indigo-600/10 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm transition-shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 min-h-[44px]">
            {/* Replace the SVG badge with your picture (square image recommended) */}
            <img
              src="https://i.postimg.cc/jSZ3qMVM/favicon-32x32.png"
              alt="Hafiz M Fasieh"
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-md object-cover ring-1 ring-gray-200 shadow-sm flex-shrink-0"
              width={32}
              height={32}
            />
            <span className="text-xs sm:text-sm font-semibold tracking-tight truncate">Hafiz M Fasieh</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#home" className={navLink}>Home</a>
            <a href="#about" className={navLink}>About</a>
            <a href="#projects" className={navLink}>Projects</a>
            <a href="#experience" className={navLink}>Experience</a>
            <a href="#skills" className={navLink}>Skills</a>
            <a href="#contact" className={navLink}>Contact</a>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary
                aria-label="Toggle navigation"
                className="inline-flex items-center rounded-md px-2.5 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 [&::-webkit-details-marker]:hidden min-h-[44px] touch-manipulation"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg ring-1 ring-gray-100 overflow-hidden">
                <div className="p-2">
                  <a href="#home" className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center touch-manipulation">Home</a>
                  <a href="#about" className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center touch-manipulation">About</a>
                  <a href="#projects" className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center touch-manipulation">Projects</a>
                  <a href="#experience" className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center touch-manipulation">Experience</a>
                  <a href="#skills" className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center touch-manipulation">Skills</a>
                  <a href="#contact" className="block rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px] flex items-center touch-manipulation">Contact</a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Main */}
      <main>
        {/* Home */}
        <section
          id="home"
          className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-24 sm:px-6 scroll-mt-16 overflow-hidden isolate"
        >
          {/* Animated background */}
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
            <div className="hero-gradient" />
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
            <div className="hero-blob hero-blob-3" />

            {/* Floating code snippets (background) */}
            <div className="hero-code hidden sm:block">
              <pre className="code-float code-1">const dev = &quot;Hafiz M Fasieh&quot;;</pre>
              <pre className="code-float code-2">Stack&lt;Flutter, Next.js, Firebase&gt;</pre>
              <pre className="code-float code-3">interface Developer &#123; fullStack: true &#125;</pre>
              <pre className="code-float code-4">prisma.connect() // PostgreSQL</pre>
              <pre className="code-float code-5">class CubixByte extends Agency &#123;&#125;</pre>
              <pre className="code-float code-6">TypeScript | Dart | Python</pre>
            </div>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Hafiz M Fasieh — Full‑Stack & Mobile Developer
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-700 leading-relaxed">
                Building modern web and mobile experiences. Passionate about performance,
                accessibility, and delightful UX.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <a href="#projects" className={ctaPrimary}>View My Work</a>
                <a href="#contact" className={ctaSecondary}>Contact Me</a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              {/* Subtle gradient accent behind avatar for depth */}
              <div className="relative">
                <div aria-hidden className="pointer-events-none absolute -inset-4 sm:-inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-100 via-white to-fuchsia-100 blur-xl" />
                <img
                  src="https://i.postimg.cc/65F8BpWT/1758704032760.jpg"
                  alt="Hafiz M Fasieh"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-2xl object-cover ring-1 ring-gray-200 shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Scoped animations: switched from styled-jsx to a plain <style> tag */}
          <style>{`
            .hero-gradient {
              position: absolute;
              inset: -30%;
              background: radial-gradient(120% 80% at 10% 10%, #eef2ff 0%, transparent 60%),
                radial-gradient(120% 80% at 90% 20%, #f5f3ff 0%, transparent 60%),
                linear-gradient(115deg, #e0e7ff, #fde7ff 40%, #fff 70%);
              filter: blur(40px);
              opacity: 0.55;
              animation: gradientShift 18s ease-in-out infinite alternate;
              background-size: 200% 200%;
            }
            .hero-blob {
              position: absolute;
              width: 26rem;
              height: 26rem;
              border-radius: 9999px;
              filter: blur(64px);
              opacity: 0.25;
              mix-blend-mode: multiply;
            }
            .hero-blob-1 {
              top: -4rem;
              left: -6rem;
              background: radial-gradient(circle at 30% 30%, #c7d2fe, transparent 60%);
              animation: blobFloat1 24s ease-in-out infinite;
            }
            .hero-blob-2 {
              top: 30%;
              right: -8rem;
              background: radial-gradient(circle at 70% 40%, #e9d5ff, transparent 60%);
              animation: blobFloat2 28s ease-in-out infinite;
              animation-delay: 0.6s;
            }
            .hero-blob-3 {
              bottom: -6rem;
              left: 35%;
              background: radial-gradient(circle at 50% 50%, #fce7f3, transparent 60%);
              animation: blobFloat3 26s ease-in-out infinite;
              animation-delay: 1.2s;
            }

            /* Floating code layer */
            .hero-code {
              position: absolute;
              inset: 0;
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
              user-select: none;
            }
            .hero-code .code-float {
              position: absolute;
              color: #0f172a;
              opacity: 0.18;
              font-size: 14px;
              letter-spacing: 0.2px;
              white-space: pre;
              line-height: 1.4;
              text-shadow: 0 1px 0 rgba(255,255,255,0.6);
              will-change: transform;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
              animation-name: codeFloat;
            }
            .hero-code .code-1 { top: 10%; right: 8%;  animation-duration: 16s; animation-delay: 0s;  }
            .hero-code .code-2 { top: 28%; right: 20%; animation-duration: 20s; animation-delay: 0.6s; }
            .hero-code .code-3 { top: 52%; right: 6%;  animation-duration: 18s; animation-delay: 1.2s; }
            .hero-code .code-4 { top: 68%; right: 18%; animation-duration: 22s; animation-delay: 0.9s; }
            .hero-code .code-5 { top: 38%; right: 28%; animation-duration: 17s; animation-delay: 0.3s; }
            .hero-code .code-6 { top: 16%; right: 32%; animation-duration: 21s; animation-delay: 1.4s; }

            @keyframes gradientShift {
              0% {
                transform: translate3d(0%, 0%, 0) scale(1.02);
                background-position: 0% 50%;
              }
              50% {
                transform: translate3d(1%, -1%, 0) scale(1.03);
                background-position: 50% 100%;
              }
              100% {
                transform: translate3d(-1%, 1%, 0) scale(1.02);
                background-position: 100% 50%;
              }
            }
            @keyframes blobFloat1 {
              0% { transform: translate3d(0, 0, 0) scale(1); }
              50% { transform: translate3d(30px, -20px, 0) scale(1.05); }
              100% { transform: translate3d(-10px, 10px, 0) scale(1); }
            }
            @keyframes blobFloat2 {
              0% { transform: translate3d(0, 0, 0) scale(1); }
              50% { transform: translate3d(-25px, 15px, 0) scale(1.06); }
              100% { transform: translate3d(10px, -10px, 0) scale(1); }
            }
            @keyframes blobFloat3 {
              0% { transform: translate3d(0, 0, 0) scale(1); }
              50% { transform: translate3d(20px, 20px, 0) scale(1.04); }
              100% { transform: translate3d(-15px, -10px, 0) scale(1); }
            }
            @keyframes codeFloat {
              0%   { transform: translate3d(0, 0, 0) rotate(0deg); }
              33%  { transform: translate3d(16px, -20px, 0) rotate(-0.8deg); }
              66%  { transform: translate3d(-12px, 16px, 0) rotate(0.9deg); }
              100% { transform: translate3d(4px, -8px, 0) rotate(-0.5deg); }
            }

            @media (prefers-reduced-motion: reduce) {
              .hero-gradient,
              .hero-blob-1,
              .hero-blob-2,
              .hero-blob-3,
              .hero-code .code-float {
                animation: none !important;
              }
            }
          `}</style>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 scroll-mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold">About Me</h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-gray-700 leading-relaxed">
            I&#39;m a full‑stack and mobile developer focused on crafting reliable, scalable,
            and well‑designed products. I enjoy shipping end‑to‑end features, from clean
            APIs to polished UIs.
          </p>
          <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className={card}>
              <h3 className={cardTitle}>Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">B.S. Software Engineering</p>
                  <p className="text-xs text-gray-600">Superior University</p>
                  <p className="text-xs text-gray-500">2022 — 2026</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Intermediate</p>
                  <p className="text-xs text-gray-600">Superior College</p>
                  <p className="text-xs text-gray-500">2020 — 2022</p>
                </div>
              </div>
            </div>
            <div className={card}>
              <h3 className={cardTitle}>Expertise</h3>
              <p className={cardText}>
                Web apps, mobile apps, backend APIs, databases, performance, and DX.
              </p>
            </div>
          </div>

          {/* Tools & Tech */}
          <div className="mt-8">
            <h3 className="text-base font-semibold">Tools & Technologies</h3>
            <div className="mt-3 flex flex-wrap -mr-1.5">
              <span className={pill}>Next.js</span>
              <span className={pill}>React</span>
              <span className={pill}>Flutter</span>
              <span className={pill}>Firebase</span>
              <span className={pill}>Prisma</span>
              <span className={pill}>PostgreSQL</span>
              <span className={pill}>Flask</span>
              <span className={pill}>Tailwind</span>
              <span className={pill}>TypeScript</span>
              <span className={pill}>Git</span>
            </div>
            <div className="mt-4">
              <a href="/resume.pdf" className={`${ctaSecondary} w-full sm:w-auto`}>Download Resume (PDF)</a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 scroll-mt-16"
        >
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold">Projects</h2>
            <span className="text-xs sm:text-sm text-gray-500">Featured work</span>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Mobile App Developer — Smart Library */}
            <div className={`${card} ${cardBevel}`}>
              <div className="aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[20px] bg-gray-100 transition-transform duration-300 ease-out group-hover:scale-[1.01]">
                <img 
                  src="https://i.postimg.cc/NjHLBt3n/Untitled-design-2.png"
                  alt="Smart Library"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className={`${cardTitle} mt-4`}>Mobile App Developer — Smart Library</h3>
              <p className={cardText}>Flutter app for exploring and saving books with a calm, elegant UI.</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
                <li>OpenLibrary API integration for dynamic book data</li>
                <li>Auth and cloud storage via Firebase</li>
                <li>Re-engineered backend with Supabase (hybrid local + API)</li>
              </ul>
              <div className="mt-2 flex flex-wrap -mr-1.5">
                <span className={pill}>Flutter</span>
                <span className={pill}>Firebase</span>
                <span className={pill}>OpenLibrary API</span>
                <span className={pill}>Supabase</span>
              </div>
              <div className="mt-3 flex gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} flex-1 justify-center`}>GitHub</a>
              </div>
            </div>

            {/* Mobile Developer — Flutter Chat App */}
            <div className={`${card} ${cardBevel}`}>
              <div className="aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[20px] bg-gray-100 transition-transform duration-300 ease-out group-hover:scale-[1.01]" />
              <h3 className={`${cardTitle} mt-4`}>Mobile Developer — Flutter Chat App</h3>
              <p className={cardText}>Real-time chat with clean, minimal UI and one-on-one messaging.</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
                <li>Firebase Auth sign-in</li>
                <li>Firestore for instant updates</li>
                <li>StreamBuilder & state management for live states</li>
              </ul>
              <div className="mt-2 flex flex-wrap -mr-1.5">
                <span className={pill}>Flutter</span>
                <span className={pill}>Firebase Auth</span>
                <span className={pill}>Firestore</span>
              </div>
              <div className="mt-3 flex gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} flex-1 justify-center`}>GitHub</a>
              </div>
            </div>

            {/* Python Developer — URL Link Shortener */}
            <div className={card}>
              <div className="aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[20px] bg-gray-100 transition-transform duration-300 ease-out group-hover:scale-[1.01]" />
              <h3 className={`${cardTitle} mt-4`}>Python Developer — URL Link Shortener</h3>
              <p className={cardText}>Flask-based URL shortening service with custom short codes and analytics.</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
                <li>RESTful API for link creation and redirection</li>
                <li>Custom short code generation and validation</li>
                <li>Click tracking and basic analytics</li>
                <li>SQLite database for persistent storage</li>
              </ul>
              <div className="mt-2 flex flex-wrap -mr-1.5">
                <span className={pill}>Flask</span>
                <span className={pill}>Python</span>
                <span className={pill}>SQLite</span>
                <span className={pill}>REST API</span>
              </div>
              <div className="mt-3 flex gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} flex-1 justify-center`}>GitHub</a>
              </div>
            </div>

            {/* Full-Stack Developer — Online Course Platform */}
            <div className={card}>
              <div className="aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[20px] bg-gray-100 transition-transform duration-300 ease-out group-hover:scale-[1.01]">
                <img 
                  src="https://i.postimg.cc/CLtRf7bx/Screenshot-2025-10-15-124324.png" 
                  alt="Online Course Platform"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className={`${cardTitle} mt-4`}>Full-Stack Developer — Online Course Platform</h3>
              <p className={cardText}>Next.js + Prisma + PostgreSQL + JWT. Scalable LMS with role-based auth.</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
                <li>Role-based auth with JWT and refresh tokens</li>
                <li>Secure REST APIs for students and admins</li>
                <li>Dashboard for course management and enrollments</li>
                <li>Reusable UI with Tailwind components</li>
                <li>Prisma schema optimized for performance</li>
              </ul>
              <div className="mt-2 flex flex-wrap -mr-1.5">
                <span className={pill}>Next.js</span>
                <span className={pill}>TypeScript</span>
                <span className={pill}>Tailwind</span>
                <span className={pill}>Prisma</span>
                <span className={pill}>PostgreSQL</span>
                <span className={pill}>JWT</span>
              </div>
              <div className="mt-3 flex gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} flex-1 justify-center`}>GitHub</a>
              </div>
            </div>

            {/* Java Developer — Crypto Trading Console App */}
            <div className={card}>
              <div className="aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[20px] bg-gray-100 transition-transform duration-300 ease-out group-hover:scale-[1.01]" />
              <h3 className={`${cardTitle} mt-4`}>Java Developer — Crypto Trading Console App</h3>
              <p className={cardText}>OOP-focused trading simulation demonstrating solid design.</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
                <li>Encapsulation, Inheritance, Polymorphism</li>
                <li>Classes for User, Wallet, Trade with abstraction</li>
              </ul>
              <div className="mt-2 flex flex-wrap -mr-1.5">
                <span className={pill}>Java</span>
                <span className={pill}>OOP</span>
              </div>
              <div className="mt-3 flex gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} flex-1 justify-center`}>GitHub</a>
              </div>
            </div>

            {/* Frontend Developer — Portfolio & Personal Projects */}
            <div className={`${card} ${cardBevel}`}>
              <div className="aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[20px] bg-gray-100 transition-transform duration-300 ease-out group-hover:scale-[1.01]" />
              <h3 className={`${cardTitle} mt-4`}>Frontend Developer — Portfolio & Personal Projects</h3>
              <p className={cardText}>Polished portfolio with smooth scroll animations and reusable components.</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
                <li>Clean component structure for scalability</li>
                <li>Interactive hover and scroll effects</li>
              </ul>
              <div className="mt-2 flex flex-wrap -mr-1.5">
                <span className={pill}>Next.js</span>
                <span className={pill}>Tailwind</span>
              </div>
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaSecondary} flex-1 justify-center`}>Live Site</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} flex-1 justify-center`}>GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience / Agency */}
        <section
          id="experience"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 scroll-mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold">Experience / Agency</h2>

          <div className={`${card} mt-4`}>
            <h3 className={cardTitle}>Founder & Lead Developer — CubixByte</h3>
            <p className={cardText}>Web & App Development Solutions</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
              <li>Managed client projects, technical development, and product design</li>
              <li>WhatsApp marketing for Urdu-speaking communities</li>
              <li>Delivered scalable software for small businesses and startups</li>
            </ul>
            <div className="mt-3 flex flex-wrap -mr-1.5">
              <span className={pill}>Web Apps</span>
              <span className={pill}>Mobile Apps</span>
              <span className={pill}>Databases</span>
              <span className={pill}>Management Systems</span>
            </div>
            <div className="mt-4">
              <a href="#contact" className={`${ctaPrimary} w-full sm:w-auto`}>Get a Quote</a>
            </div>
          </div>

          <div className={`${card} mt-4`}>
            <h3 className={cardTitle}>Additional Academic Projects</h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-gray-600">
              <li>Flask mini projects: routing, forms, and API handling</li>
              <li>Python data analysis: cleaning and visualization with Pandas & NumPy</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 scroll-mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Skills & Expertise</h2>
          
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            {/* Frontend Development */}
            <div className="rounded-xl sm:rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-4 sm:p-6">
              <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="rounded-lg bg-indigo-100 p-2 flex-shrink-0">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Frontend Development</h3>
                  <span className="block sm:hidden text-xs font-medium text-indigo-600 mt-0.5">8 Projects • 2+ years</span>
                </div>
                <span className="hidden sm:inline text-xs font-medium text-indigo-600 whitespace-nowrap">8 Projects • 2+ years</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Next.js</span>
                    <span className="text-gray-500">90%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">React</span>
                    <span className="text-gray-500">70%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Tailwind CSS</span>
                    <span className="text-gray-500">90%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">TypeScript / JavaScript</span>
                    <span className="text-gray-500">80%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="rounded-xl sm:rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-white p-4 sm:p-6">
              <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="rounded-lg bg-emerald-100 p-2 flex-shrink-0">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Mobile Development</h3>
                  <span className="block sm:hidden text-xs font-medium text-emerald-600 mt-0.5">6 Projects • 1.5+ years</span>
                </div>
                <span className="hidden sm:inline text-xs font-medium text-emerald-600 whitespace-nowrap">6 Projects • 1.5+ years</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Flutter</span>
                    <span className="text-gray-500">85%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Dart</span>
                    <span className="text-gray-500">80%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">React Native</span>
                    <span className="text-gray-500">70%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Backend & Database */}
            <div className="rounded-xl sm:rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-white p-4 sm:p-6">
              <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="rounded-lg bg-violet-100 p-2 flex-shrink-0">
                  <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Backend & Database</h3>
                  <span className="block sm:hidden text-xs font-medium text-violet-600 mt-0.5">10 Projects • 2+ years</span>
                </div>
                <span className="hidden sm:inline text-xs font-medium text-violet-600 whitespace-nowrap">10 Projects • 2+ years</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Firebase</span>
                    <span className="text-gray-500">90%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Prisma + PostgreSQL</span>
                    <span className="text-gray-500">75%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Supabase</span>
                    <span className="text-gray-500">70%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-700">Flask / Python</span>
                    <span className="text-gray-500">75%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-violet-500 to-violet-600 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Collaboration - spans full width on its own row */}
            <div className="rounded-xl sm:rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/50 to-white p-4 sm:p-6 lg:col-span-3">
              <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="rounded-lg bg-amber-100 p-2 flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Tools & Collaboration</h3>
                  <span className="block sm:hidden text-xs font-medium text-amber-600 mt-0.5">Essential skills</span>
                </div>
                <span className="hidden sm:inline text-xs font-medium text-amber-600 whitespace-nowrap">Essential skills</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-gray-700">Git / GitHub</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-gray-700">Communication</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-gray-700">Leadership</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-medium text-gray-700">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 scroll-mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold">Certifications</h2>
          <div className="mt-4 grid gap-4 sm:gap-5 sm:grid-cols-2">
            <div className={card}>
              <h3 className={cardTitle}>SQL Fundamentals Certificate</h3>
              <p className={cardText}>SoloLearn</p>
              <p className="mt-2 text-sm text-gray-600">
                Demonstrated proficiency in relational databases, data queries, joins, and aggregate operations using SQL.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 scroll-mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Lets build something together.
          </p>

          <div className="mt-6 grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className={card}>
              <h3 className={cardTitle}>Details</h3>
              <ul className="mt-2 space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="break-words">
                  Email:{" "}
                  <a className="text-indigo-600 hover:underline" href="mailto:fasiehk@proton.me">
                    fasiehk@proton.me
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a className="text-indigo-600 hover:underline" href="tel:+923003527066">
                    +92 300 3527066
                  </a>
                </li>
                <li className="break-words">
                  Telegram:{" "}
                  <a className="text-indigo-600 hover:underline" href="https://t.me/fasiehk" target="_blank">
                    @fasiehk
                  </a>
                </li>
                <li className="flex flex-wrap gap-3 pt-1">
                  <a href="https://github.com/" target="_blank" className="hover:text-gray-900 touch-manipulation">GitHub</a>
                  <a href="https://www.linkedin.com/" target="_blank" className="hover:text-gray-900 touch-manipulation">LinkedIn</a>
                  <a href="https://www.instagram.com/" target="_blank" className="hover:text-gray-900 touch-manipulation">Instagram</a>
                </li>
              </ul>
            </div>

            {/* Simple email form without backend */}
            {/* Replace the mailto form with the API-backed form */}
            <ContactForm card={card} cardTitle={cardTitle} ctaPrimary={ctaPrimary} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-6 text-center text-xs sm:text-sm text-gray-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <span>© {year} Hafiz M Fasieh</span>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900 min-h-[44px] flex items-center touch-manipulation">Home</a>
            <a href="#contact" className="hover:text-gray-900 min-h-[44px] flex items-center touch-manipulation">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}