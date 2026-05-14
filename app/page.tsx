import Image from "next/image";
import Link from "next/link";
import { Doctors } from "@/constants";

// ─── Feature data ──────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure Patient Records",
    description:
      "End-to-end encrypted medical records ensure your data stays private and accessible only by authorised personnel.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-7">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Smart Scheduling",
    description:
      "Book, reschedule, and cancel appointments in seconds. Automated reminders keep everyone on time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Real-time Monitoring",
    description:
      "Live dashboards give administrators instant visibility into appointment status, wait-times, and clinic throughput.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-7">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 10-16 0" />
      </svg>
    ),
    title: "Seamless Onboarding",
    description:
      "Patients register once with full medical history. No paperwork, no repetition — just care.",
  },
];

// ─── Checker background (reusable) ─────────────────────────────────────────
const CheckerBg = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div
      className="absolute inset-0 opacity-[0.045]"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  </div>
);

// ─── Page ───────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-dark-300 text-white overflow-x-hidden font-sans">

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-dark-300/80 backdrop-blur-md border-b border-dark-500/40">
        <Image
          src="/assets/icons/logo-full.png"
          width={140}
          height={40}
          alt="Medora"
          className="h-9 w-auto"
          style={{ height: 'auto' }}
        />
        <div className="flex items-center gap-3">
          {/* Glassmorphic green Admin button */}
          <Link
            href="/admin-access"
            id="nav-admin-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-14-medium text-green-500 border border-green-500/30 bg-green-500/10 backdrop-blur-md hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Admin
          </Link>
          <Link
            href="/register"
            id="nav-cta-btn"
            className="text-14-medium px-5 py-2.5 rounded-lg bg-green-500 text-white hover:brightness-110 transition-all duration-200 shadow-lg shadow-green-500/20"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <CheckerBg />
        {/* Glow blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 size-[600px] rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 size-[500px] rounded-full bg-green-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-8 pt-20 pb-24">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-12-semibold uppercase tracking-widest">
            <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
            New Gen Healthcare
          </span>

          {/* Title */}
          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[76px] font-bold leading-[1.06] tracking-tight">
            Modern{" "}
            <span className="text-green-500">Healthcare</span>
            ,<br />
            <span className="whitespace-nowrap">simplified for everyone.</span>
          </h1>

          {/* Subtitle — shorter, balanced */}
          <p className="text-[17px] leading-relaxed text-dark-600 max-w-xl">
            Intelligent registration, seamless scheduling, and unified medical records.
            Eliminate admin friction and put patient care first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/register"
              id="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-white font-display font-semibold text-[15px] hover:brightness-110 transition-all duration-200 shadow-xl shadow-green-500/25 group"
            >
              Book an Appointment
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#features"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-dark-500 text-dark-700 font-sans text-[15px] font-semibold hover:border-dark-600 hover:text-white transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>

      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[12px] font-semibold uppercase tracking-widest text-green-500">Why Medora</span>
          <h2 className="font-display text-[36px] font-bold text-white">Built for modern care</h2>
          <p className="text-[16px] text-dark-600 max-w-xl leading-relaxed">
            Every feature is designed to reduce admin overhead and let clinicians focus on what matters most, our patients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col gap-5 p-6 rounded-2xl bg-dark-400 border border-dark-500/60 hover:border-green-500/40 hover:bg-dark-400/80 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors">
                {f.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-[16px] font-semibold text-white">{f.title}</h3>
                <p className="text-[14px] text-dark-600 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section id="team" className="py-24 bg-dark-400/20 border-y border-dark-500/40">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-green-500">Our Physicians</span>
            <h2 className="font-display text-[36px] font-bold text-white">Meet the team</h2>
            <p className="text-[16px] text-dark-600 max-w-xl leading-relaxed">
              World-class specialists dedicated to delivering exceptional patient outcomes.
            </p>
          </div>

          {/* All 9 doctors + Book Now card in one unified 5-col grid (2 rows of 5) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {Doctors.map((doc) => (
              <div
                key={doc.name}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-dark-400 border border-dark-500/60 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="relative size-16 rounded-full overflow-hidden ring-2 ring-dark-500 group-hover:ring-green-500/40 transition-all">
                  <Image src={doc.image} fill alt={doc.name} className="object-cover" sizes="64px" />
                </div>
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <span className="font-display text-[14px] font-medium text-white">{doc.name}</span>
                  <span className="text-[12px] text-dark-600">{doc.specialty}</span>
                </div>
              </div>
            ))}

            {/* Book Now — 10th card, same grid slot */}
            <Link
              href="/register"
              id="team-book-now-card"
              className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-7">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-center">
                <span className="font-display text-[14px] font-medium text-green-500">Book Now</span>
                <span className="text-[12px] text-dark-600">Get started</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 overflow-hidden">
        {/* Checker background towards footer */}
        <CheckerBg />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-green-500/8 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-8">
          <span className="text-[12px] font-semibold uppercase tracking-widest text-green-500">Ready to start?</span>
          <h2 className="font-display text-[40px] md:text-[52px] font-bold leading-[1.1] text-white">
            Your <span className="text-green-500">health</span> journey<br />
            begins with a single step.
          </h2>
          <p className="text-[16px] text-dark-600 max-w-lg leading-relaxed">
            Join thousands of patients who trust Medora for seamless, secure healthcare management.
          </p>
          <Link
            href="/register"
            id="footer-cta-btn"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-green-500 text-white font-display font-semibold text-[16px] hover:brightness-110 transition-all duration-200 shadow-xl shadow-green-500/30 group"
          >
            Get Started — it&apos;s free
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-dark-500/40 py-8 px-6 md:px-16 overflow-hidden">
        <CheckerBg />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/assets/icons/logo-full.png"
            height={32}
            width={160}
            alt="Medora"
            className="h-8 w-fit"
            style={{ aspectRatio: '5/1', height: 'auto' }}
            sizes="160px"
          />
          <p className="text-[14px] text-dark-600">© 2024 Medora. All rights reserved.</p>
          <Link
            href="/admin-access"
            className="inline-flex items-center gap-1.5 text-[14px] text-dark-600 hover:text-green-500 transition-colors"
          >
            Admin Portal
          </Link>
        </div>
      </footer>
    </main>
  );
}