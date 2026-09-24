import { useEffect, useRef, useState } from "react";
import { Wheat } from "lucide-react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Counts up to `to` when scrolled into view. The pre-rendered HTML carries the
 * final number, so it reads correctly before (or without) JavaScript.
 */
function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Already on screen when the page loads: leave the final number alone.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setVal(0);
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1700;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(to * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const counters = [
  { to: 2025, suffix: "", label: "The year we opened in Milford", decimals: 0 },
  { to: 501, suffix: "", label: "New Haven Ave — come find us", decimals: 0 },
  { to: 6, suffix: "", label: "Days a week, from noon", decimals: 0 },
  { to: 100, suffix: "%", label: "Mexican — never Tex-Mex", decimals: 0 },
];

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Image collage */}
          <Reveal className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-agave-500/10 via-transparent to-marigold-500/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
                <Photo
                  src="images/interior.webp"
                  alt="Warm string lights over dark wood tables and a bar"
                  width={1100}
                  height={600}
                  sizes="(min-width: 1024px) 600px, (min-width: 512px) 512px, 100vw"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-10 -right-3 w-44 rotate-3 overflow-hidden rounded-2xl border-4 border-night-950 shadow-2xl shadow-black/60 sm:-right-8 sm:w-56">
                <Photo
                  src="images/churros.webp"
                  alt="Golden churros dusted with cinnamon sugar"
                  width={1100}
                  height={600}
                  sizes="(min-width: 640px) 224px, 176px"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Rotating stamp */}
              <div className="absolute -bottom-8 -left-4 hidden h-28 w-28 sm:block lg:-left-8">
                <div className="relative grid h-full w-full place-items-center">
                  <svg
                    viewBox="0 0 120 120"
                    className="absolute inset-0 h-full w-full animate-spin-slower"
                    aria-hidden
                  >
                    <defs>
                      <path
                        id="stamp-circle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text className="fill-cream-300 text-[10px] font-bold uppercase" letterSpacing="3.5">
                      <textPath href="#stamp-circle">
                        Milford, CT · Since 2025 · Las Margaritas ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="grid h-14 w-14 place-items-center rounded-full glass text-center font-display text-sm font-semibold italic leading-none text-marigold-300">
                    Est.<br />2025
                  </span>
                </div>
              </div>

              {/* Floating chip */}
              <div className="absolute -top-6 right-6 hidden animate-float items-center gap-2.5 rounded-2xl glass px-4 py-3 shadow-xl shadow-black/40 sm:flex">
                <Wheat className="h-5 w-5 text-agave-400" aria-hidden />
                <span className="text-xs font-bold text-cream-50">
                  Recipes handed down for generations
                </span>
              </div>
            </div>
          </Reveal>

          {/* Copy + counters */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Family recipes.{" "}
                  <em className="text-gold-gradient font-medium italic">Real Mexican flavor.</em>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-cream-300">
                Las Margaritas began with a passion for Mexican cuisine and a commitment to
                authenticity. Chef Carmelo Garcia cooks from recipes passed down through his family
                for generations, and with his partner Jose Lucero, he built a menu that runs from
                mild to spicy, with dishes from different regions of Mexico.
              </p>
              <p className="mt-4 leading-relaxed text-cream-300">
                We opened our doors at 501 New Haven Avenue, near Old Gate Lane, in December 2025.
                Mexican cooking is so much more than tacos, enchiladas, and tostadas — and our rule
                is simple: be good to our customers, treat them like family, and make sure they
                leave with a smile.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9">
                {counters.map((c) => (
                  <div key={c.label} className="border-l-2 border-marigold-400/30 pl-5">
                    <dd className="font-display text-4xl font-semibold text-cream-50 sm:text-[2.6rem]">
                      <Counter to={c.to} suffix={c.suffix} decimals={c.decimals} />
                    </dd>
                    <dt className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cream-500">
                      {c.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
