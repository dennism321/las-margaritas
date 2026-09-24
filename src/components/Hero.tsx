import type { CSSProperties } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  CarFront,
  Clock,
  Flame,
  Sparkles,
  Star,
} from "lucide-react";

const stats = [
  { value: "2025", label: "Opened in Milford" },
  { value: "501", label: "New Haven Ave" },
  { value: "6", label: "Days a week, from noon" },
  { value: "100%", label: "Mexican, never Tex-Mex" },
];

/** Staggered CSS entrance (larger screens only — see .hero-in in index.css). */
const enter = (step: number): CSSProperties =>
  ({ "--hero-delay": `${0.1 + step * 0.08}s` }) as CSSProperties;

export default function Hero({ onReserve }: { onReserve: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[36rem] w-[36rem] animate-pulse-soft rounded-full bg-marigold-500/[0.09] blur-[130px]" />
        <div className="absolute bottom-[-25%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-agave-500/[0.07] blur-[130px]" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-marigold-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div
              className="hero-in inline-flex flex-wrap items-center gap-3 rounded-full glass px-4 py-2"
              style={enter(0)}
            >
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-marigold-400 text-marigold-400" />
                ))}
              </span>
              <span className="text-xs font-bold tracking-wide text-cream-100">
                Now open · 501 New Haven Ave, Milford CT
              </span>
            </div>

            <h1
              className="hero-in mt-7 font-display text-[2.9rem] font-semibold leading-[1.03] tracking-tight text-cream-50 sm:text-6xl xl:text-[4.6rem]"
              style={enter(1)}
            >
              The true taste of Mexico,{" "}
              <em className="text-gold-gradient font-medium italic">right in Milford.</em>
            </h1>

            <p
              className="hero-in mt-6 max-w-xl text-base leading-relaxed text-cream-300 sm:text-lg"
              style={enter(2)}
            >
              Genuine ingredients and vibrant flavors, from wild-caught shrimp to New York Angus
              steaks. Family recipes from Chef Carmelo Garcia, dishes from across Mexico, and
              refreshing margaritas.
            </p>

            <div className="hero-in mt-9 flex flex-wrap items-center gap-4" style={enter(3)}>
              <button
                onClick={onReserve}
                className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-7 py-3.5 text-sm font-bold text-night-950 shadow-[0_10px_36px_-8px_rgba(240,191,79,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-8px_rgba(240,191,79,0.8)] active:translate-y-0"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Reserve a Table
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </button>
              <a
                href="#menu"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                Explore the Menu
                <ArrowDown
                  className="h-4 w-4 text-marigold-300 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>

            <ul
              className="hero-in mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-cream-300"
              style={enter(4)}
            >
              {[
                { icon: Clock, text: "Open Tue – Sun from 12 PM" },
                { icon: CarFront, text: "Near Old Gate Lane" },
                { icon: Sparkles, text: "Takeout & delivery available" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-agave-400" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="hero-in relative mx-auto w-full max-w-md lg:max-w-none" style={enter(1)}>
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-marigold-500/15 via-transparent to-chili-500/10 blur-2xl"
            />
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              fill="none"
              className="absolute -right-6 -top-8 z-10 h-24 w-24 animate-spin-slower text-marigold-400/40 sm:-right-8 sm:h-28 sm:w-28"
            >
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" />
            </svg>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60">
              <img
                src="images/hero-margarita.webp"
                alt="A margarita with a chili-lime rim and a fresh lime wheel on the bar at Las Margaritas"
                width={768}
                height={1376}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-night-950/10"
              />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl glass px-5 py-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-marigold-300">
                    From the Cantina
                  </p>
                  <p className="mt-0.5 font-display text-lg font-medium text-cream-50">
                    Refreshing Margaritas
                  </p>
                </div>
                <span className="font-display text-2xl font-semibold text-marigold-300">¡Salud!</span>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-3 top-12 hidden animate-float sm:block lg:-left-8">
              <div className="flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-xl shadow-black/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-chili-400/20 text-chili-300">
                  <Flame className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-cream-500">
                    Now Open
                  </span>
                  <span className="block text-sm font-bold text-cream-50">Milford, Connecticut</span>
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-2 hidden animate-float-slow sm:block lg:-right-6">
              <div className="rounded-2xl glass px-4 py-3 shadow-xl shadow-black/40">
                <span className="flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-marigold-400 text-marigold-400" />
                  ))}
                </span>
                <span className="mt-1 block text-xs font-semibold text-cream-100">
                  “Treat them like family.”
                </span>
                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-cream-500">
                  Our house rule
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <dl
          className="hero-in mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.08] pt-9 sm:grid-cols-4"
          style={enter(5)}
        >
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "sm:border-l sm:border-white/[0.08] sm:pl-6" : ""}>
              <dd className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cream-500">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
