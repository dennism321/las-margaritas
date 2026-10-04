import { Martini, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { RESTAURANT } from "../data/info";
import { pexelsSrcSet } from "../utils/pexels";

const MARGARITA_IMG =
  "https://images.pexels.com/photos/19841842/pexels-photo-19841842.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=1300";

export default function Cantina() {
  return (
    <section
      id="cantina"
      className="relative overflow-hidden bg-chile text-white"
    >
      <div className="dots absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-salsa/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-lg">
          <div className="relative rotate-[-2deg] overflow-hidden rounded-[2rem] border-8 border-crema shadow-2xl shadow-black/40">
            <img
              src={MARGARITA_IMG}
              srcSet={pexelsSrcSet(MARGARITA_IMG, [480, 720, 1200])}
              sizes="(min-width: 1024px) 520px, 92vw"
              alt="A classic margarita with a salted rim and lime on a red background"
              loading="lazy"
              className="aspect-[4/4.4] w-full object-cover"
            />
          </div>

          <div
            className="absolute -bottom-8 -right-4 grid h-36 w-36 place-items-center rounded-full bg-marigold text-carbon shadow-xl sm:-right-8 sm:h-40 sm:w-40"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 120 120"
              className="animate-spin-slow absolute inset-0 h-full w-full"
            >
              <defs>
                <path
                  id="badge-circle"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <text
                fontSize="10.5"
                fontWeight="700"
                fill="currentColor"
                className="font-sans uppercase"
              >
                <textPath
                  href="#badge-circle"
                  textLength="270"
                  lengthAdjust="spacing"
                >
                  Mexican Restaurant &amp; Cantina • Milford CT •
                </textPath>
              </text>
            </svg>
            <Martini className="h-10 w-10" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-marigold">
            La Cantina
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
            Salt on the rim.
            <br />
            <span className="italic text-marigold">Lime on the side.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Pull up a red-cushioned stool at the granite-topped bar, where a
            back shelf is lined with premium tequila, mezcal and ice-cold
            Mexican beer, then raise a glass to good company. The carved
            fireplace and warm cantina lights are right there with you.
          </p>

          <ul className="mt-8 grid gap-3 text-base font-medium sm:grid-cols-2">
            {[
              "Full cantina bar",
              "Tequila, whiskey & Mexican beer",
              "Dine-in sunroom and dining room",
              "Fajitas that arrive sizzling",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rotate-45 bg-marigold"
                  aria-hidden="true"
                />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-crema px-7 py-3.5 font-semibold text-chile transition hover:-translate-y-0.5 hover:bg-marigold hover:text-carbon"
            >
              See what pairs well
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-semibold transition hover:border-marigold hover:text-marigold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {RESTAURANT.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
