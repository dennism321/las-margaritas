import { CalendarCheck, Clock, Phone } from "lucide-react";
import Reveal from "./Reveal";

const hours = [
  { day: "Tuesday – Thursday", time: "12 – 9 PM" },
  { day: "Friday – Saturday", time: "12 – 10 PM" },
  { day: "Sunday", time: "12 – 8 PM" },
  { day: "Monday", time: "Closed" },
];

export default function CTA({ onReserve }: { onReserve: () => void }) {
  return (
    <section id="visit" aria-labelledby="cta-heading" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/50">
            <img
              src="images/events.webp"
              alt=""
              aria-hidden
              width={1100}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-night-950/85 via-night-950/55 to-night-950/90"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 animate-pulse-soft rounded-full bg-marigold-500/15 blur-[100px]"
            />

            <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-marigold-400/25 bg-marigold-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-marigold-300">
                <span className="h-1.5 w-1.5 rounded-full bg-marigold-400 shadow-[0_0_12px_rgba(240,191,79,0.9)]" aria-hidden />
                Las Margaritas · Milford, CT
              </span>
              <h2
                id="cta-heading"
                className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-cream-50 sm:text-5xl lg:text-6xl"
              >
                Your table is{" "}
                <em className="text-gold-gradient font-medium italic">waiting.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-300 sm:text-lg">
                Request a table or give us a call. Find us at 501 New Haven Ave in Milford — we
                can't wait to welcome you.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={onReserve}
                  className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-8 py-4 text-sm font-bold text-night-950 shadow-[0_12px_40px_-8px_rgba(240,191,79,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-8px_rgba(240,191,79,0.85)] active:translate-y-0"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Reserve a Table
                </button>
                <a
                  href="tel:+12038781910"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-cream-50 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-marigold-300" aria-hidden />
                  (203) 878-1910
                </a>
              </div>

              <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="rounded-2xl glass px-4 py-5 text-center transition-colors duration-300 hover:border-marigold-400/30"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-cream-500">
                      {h.day}
                    </dt>
                    <dd className="mt-2 flex items-center justify-center gap-2 text-sm font-bold text-cream-50">
                      <Clock className="h-3.5 w-3.5 text-marigold-300" aria-hidden />
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
