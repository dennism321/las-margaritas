import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { HOURS, RESTAURANT, formatHour } from "../data/info";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";
import BuildingPhoto from "./BuildingPhoto";

export default function Visit() {
  const status = useOpenStatus();

  return (
    <section id="visit" className="relative bg-crema">
      <div className="talavera-strip" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-jade">Visítanos</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Come hungry.
            <span className="italic text-salsa"> Stay awhile.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-[2rem] bg-carbon p-7 text-crema shadow-xl sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold">
                  <Clock className="h-6 w-6 text-marigold" aria-hidden="true" />
                  Hours
                </h3>
                {status.known !== false && (
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
                      status.isOpen ? "bg-lima text-carbon" : "bg-marigold text-carbon",
                    )}
                  >
                    {status.isOpen ? "Open now" : "Closed"}
                  </span>
                )}
              </div>

              <ul className="mt-6 divide-y divide-white/10">
                {HOURS.map((h) => {
                  const isToday = h.day === status.today;
                  return (
                    <li
                      key={h.day}
                      className={cn(
                        "flex items-center justify-between py-3 text-base",
                        isToday ? "font-bold text-marigold" : "text-crema/85",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && <span className="h-2 w-2 rounded-full bg-marigold" aria-hidden="true" />}
                        {h.day}
                      </span>
                      <span className="tabular-nums">
                        {h.open !== undefined && h.close !== undefined
                          ? `${formatHour(h.open)} – ${formatHour(h.close)}`
                          : "Closed"}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-sm text-crema/60">
                {status.label}
                {status.known !== false && " (Eastern Time)"}
              </p>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-marigold" aria-hidden="true" />
                  <address className="not-italic leading-snug">
                    <p className="font-semibold">{RESTAURANT.street}</p>
                    <p className="text-crema/70">{RESTAURANT.city}</p>
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-marigold" aria-hidden="true" />
                  <a href={RESTAURANT.phoneHref} className="font-semibold hover:text-marigold">
                    {RESTAURANT.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={RESTAURANT.mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-salsa px-6 py-3 font-semibold text-white transition hover:bg-chile"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get directions
                </a>
                <a
                  href={RESTAURANT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:border-marigold hover:text-marigold"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-5 lg:col-span-3" delay={120}>
            {/* Google Maps Container */}
            <div className="overflow-hidden rounded-[2rem] border-4 border-jade bg-hueso shadow-xl">
              <iframe
                title="Map showing Las Margaritas at 501 New Haven Ave, Milford, CT"
                src={RESTAURANT.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 sm:h-72"
                allowFullScreen
              />
            </div>

            {/* Restaurant Exterior Photo placed directly below Google Maps with Las Margaritas sign */}
            <div className="group relative overflow-hidden rounded-[2rem] border-4 border-jade/70 bg-carbon shadow-xl transition-all duration-300 hover:border-jade">
              <BuildingPhoto />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
