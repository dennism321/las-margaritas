import { ArrowRight, Check, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Package = {
  name: string;
  tagline: string;
  price: number | null;
  per: string;
  headline: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const packages: Package[] = [
  {
    name: "Dine In",
    tagline: "Lunch or dinner, Tuesday through Sunday",
    price: null,
    per: "Open from noon",
    headline: "Stay a while",
    features: [
      "The full Mexican menu",
      "Refreshing margaritas from the cantina",
      "Dishes from mild to spicy",
      "Kids' menu available",
      "501 New Haven Ave, Milford",
    ],
    cta: "Request a Table",
    featured: false,
  },
  {
    name: "Takeout & Delivery",
    tagline: "Your favorites, wherever you are",
    price: null,
    per: "Order by phone or app",
    headline: "Take it home",
    features: [
      "Call ahead: (203) 878-1910",
      "Delivery on Grubhub, Seamless & Postmates",
      "Birria, enchiladas & combinaciones",
      "Taco salads and seafood del mar",
      "Shakes, juices & Jarritos",
    ],
    cta: "Get in Touch",
    featured: true,
  },
  {
    name: "Groups & Celebrations",
    tagline: "Birthdays, family dinners & get-togethers",
    price: null,
    per: "Call to plan",
    headline: "Bring everyone",
    features: [
      "Call us to plan ahead",
      "Choose from the full menu",
      "Botana & sampler platters for the table",
      "Margaritas for the group",
      "Ask about upcoming events",
    ],
    cta: "Plan a Visit",
    featured: false,
  },
];

export default function Events({ onReserve }: { onReserve: () => void }) {
  return (
    <section id="events" aria-labelledby="events-heading" className="relative py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-20 h-[26rem] w-[26rem] rounded-full bg-marigold-500/[0.06] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dine In, Take Out & Groups"
          title={
            <>
              Bring your <em className="text-gold-gradient font-medium italic">fiesta</em> to us
            </>
          }
          sub="Stay for dinner, take it home, or bring the whole family. We'll take care of the food."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={0.05 + i * 0.1} className="h-full">
              <article className="h-full">
                {p.featured ? (
                  <div className="relative h-full rounded-[1.8rem] bg-gradient-to-b from-marigold-400/70 via-chili-400/40 to-transparent p-[1.5px] shadow-[0_30px_70px_-30px_rgba(240,191,79,0.35)]">
                    <span className="absolute -top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-marigold-400 to-chili-400 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-night-950 shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                      Easy Ordering
                    </span>
                    <div className="flex h-full flex-col rounded-[calc(1.8rem-1.5px)] bg-night-900/95 p-8">
                      <CardBody p={p} onReserve={onReserve} />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col rounded-[1.8rem] border border-white/[0.08] bg-night-900/70 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.16]">
                    <CardBody p={p} onReserve={onReserve} />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-cream-500">
            Questions about groups or events? Call (203) 878-1910 and we'll help you plan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CardBody({
  p,
  onReserve,
}: {
  p: Package;
  onReserve: () => void;
}) {
  return (
    <>
      <h3 className="font-display text-2xl font-semibold text-cream-50">{p.name}</h3>
      <p className="mt-1.5 text-sm font-medium text-cream-500">{p.tagline}</p>
      <div className="mt-6 flex items-baseline gap-2">
        {p.price !== null ? (
          <>
            <span className="font-display text-5xl font-semibold text-cream-50">${p.price}</span>
            <span className="text-sm font-semibold text-cream-500">{p.per}</span>
          </>
        ) : (
          <span className="font-display text-4xl font-semibold text-gold-gradient">{p.headline}</span>
        )}
      </div>
      <ul className="mt-7 flex-1 space-y-3.5">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-cream-300">
            <span
              aria-hidden
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                p.featured
                  ? "bg-marigold-400/20 text-marigold-300"
                  : "bg-agave-400/15 text-agave-300"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={onReserve}
        className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
          p.featured
            ? "btn-shine bg-gradient-to-b from-marigold-300 to-marigold-500 text-night-950 shadow-[0_10px_30px_-8px_rgba(240,191,79,0.65)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-8px_rgba(240,191,79,0.8)]"
            : "border border-white/15 bg-white/5 text-cream-50 hover:-translate-y-0.5 hover:border-marigold-400/40 hover:bg-white/10"
        }`}
      >
        {p.cta}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </button>
    </>
  );
}
