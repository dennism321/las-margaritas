import { useState } from "react";
import { Check, Globe, Heart, MapPin, Phone, Send } from "lucide-react";
import Logo from "./Logo";

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const explore = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Dine In & Takeout", href: "#events" },
  { label: "Our Promise", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Reserve a Table", href: "#visit" },
];

const socials = [
  { icon: InstagramIcon, label: "Las Margaritas on Instagram" },
  { icon: FacebookIcon, label: "Las Margaritas on Facebook" },
  { icon: YoutubeIcon, label: "Las Margaritas on YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) setDone(true);
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-night-900/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* Newsletter */}
        <div className="flex flex-col gap-8 rounded-3xl border border-white/[0.07] bg-night-950/60 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h3 className="font-display text-2xl font-semibold text-cream-50">
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-300">
              Specials, events, and news from Las Margaritas in Milford. No
              spam, solo sabor.
            </p>
          </div>
          <div className="w-full max-w-md">
            {done ? (
              <p className="anim-rise-in flex items-center gap-3 rounded-full border border-agave-400/30 bg-agave-400/10 px-6 py-4 text-sm font-bold text-agave-300">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-agave-400/20">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                You're on the list — ¡nos vemos pronto!
              </p>
            ) : (
              <form onSubmit={submit} className="flex gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 rounded-full border border-white/12 bg-white/5 px-5 py-3.5 text-sm text-cream-50 outline-none transition-colors placeholder:text-cream-500 focus:border-marigold-400/50 focus:bg-white/[0.08]"
                />
                <button
                  type="submit"
                  className="btn-shine inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-6 py-3.5 text-sm font-bold text-night-950 shadow-[0_8px_28px_-8px_rgba(240,191,79,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  <span className="hidden sm:inline">Sign up</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-300">
              Authentic Mexican food with genuine ingredients and vibrant
              flavors, on New Haven Avenue in Milford, CT.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-marigold-400/40 hover:text-marigold-300"
                >
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explore">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-500">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-cream-300 transition-colors hover:text-marigold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-500">
              Visit Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-cream-300">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-marigold-400"
                  aria-hidden
                />
                <span>
                  501 New Haven Ave
                  <br />
                  Milford, CT 06460
                </span>
              </li>
              <li>
                <a
                  href="tel:+12038781910"
                  className="flex items-center gap-3 transition-colors hover:text-marigold-300"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-marigold-400"
                    aria-hidden
                  />
                  (203) 878-1910
                </a>
              </li>
              <li>
                <a
                  href="https://lasmargaritas203.com"
                  className="flex items-center gap-3 transition-colors hover:text-marigold-300"
                >
                  <Globe
                    className="h-4 w-4 shrink-0 text-marigold-400"
                    aria-hidden
                  />
                  lasmargaritas203.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-cream-500">
              Hours
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-300">
              <li className="flex items-center justify-between gap-4">
                <span>Tue – Thu</span>
                <span className="font-semibold text-cream-50">12 – 9 PM</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Fri – Sat</span>
                <span className="font-semibold text-cream-50">12 – 10 PM</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Sunday</span>
                <span className="font-semibold text-cream-50">12 – 8 PM</span>
              </li>
              <li className="flex items-center justify-between gap-4 border-t border-white/[0.07] pt-3">
                <span>Monday</span>
                <span className="font-semibold text-marigold-300">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 text-xs text-cream-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Las Margaritas Mexican Restaurant. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="transition-colors hover:text-cream-100">
              Privacy
            </a>
            <a href="#top" className="transition-colors hover:text-cream-100">
              Terms
            </a>
            <span className="inline-flex items-center gap-1.5">
              Hecho con
              <Heart
                className="h-3.5 w-3.5 fill-chili-400 text-chili-400"
                aria-hidden
              />
              in Milford, CT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
