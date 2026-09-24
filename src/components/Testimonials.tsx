import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Review = { quote: string; name: string; source: string; initials: string };

const rowOne: Review[] = [
  {
    quote: "Be good to our customers, treat them like family, and make them leave with a smile.",
    name: "Our house rule",
    source: "Las Margaritas",
    initials: "LM",
  },
  {
    quote: "Many of our recipes have been handed down through Chef Carmelo Garcia's family for generations.",
    name: "Family recipes",
    source: "From our kitchen",
    initials: "CG",
  },
  {
    quote: "Flavors from mild to spicy, with dishes from different regions of Mexico.",
    name: "Across Mexico",
    source: "Partner Jose Lucero",
    initials: "JL",
  },
  {
    quote: "We don't serve Tex-Mex. We serve rich, fresh, and flavorful Mexican food.",
    name: "The real thing",
    source: "Las Margaritas",
    initials: "LM",
  },
];

const rowTwo: Review[] = [
  {
    quote: "Mexican cuisine is so much more than tacos, enchiladas, and tostadas.",
    name: "Beyond the basics",
    source: "Las Margaritas",
    initials: "LM",
  },
  {
    quote: "From wild-caught shrimp to New York Angus steaks, cooked to perfection.",
    name: "Del mar y la tierra",
    source: "From our kitchen",
    initials: "CG",
  },
  {
    quote: "Every pepper brings its own level of heat and its own flavor.",
    name: "Chiles",
    source: "From our kitchen",
    initials: "CG",
  },
  {
    quote: "Bold flavors, refreshing margaritas, and a great time. We can't wait to welcome you!",
    name: "Now open",
    source: "Las Margaritas",
    initials: "LM",
  },
];

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-marigold-400 text-marigold-400" aria-hidden />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="w-[19rem] shrink-0 rounded-3xl border border-white/[0.08] bg-night-900/80 p-6 transition-colors duration-300 hover:border-marigold-400/25 sm:w-[23rem]">
      <Stars />
      <blockquote className="mt-4 text-sm leading-relaxed text-cream-100">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          aria-hidden
          className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-marigold-400/30 to-chili-400/30 text-xs font-bold text-marigold-200"
        >
          {review.initials}
        </span>
        <span>
          <span className="block text-sm font-bold text-cream-50">{review.name}</span>
          <span className="block text-xs font-medium text-cream-500">{review.source}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, reverse }: { items: Review[]; reverse?: boolean }) {
  return (
    <div className="marquee-fade pause-on-hover overflow-hidden">
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex gap-5 pr-5">
            {items.map((r) => (
              <ReviewCard key={`${copy}-${r.name}`} review={r} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden border-y border-white/[0.06] bg-night-900/40 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chili-500/[0.05] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Promise"
          title={
            <>
              Treat every guest like{" "}
              <em className="text-gold-gradient font-medium italic">family</em>
            </>
          }
        />

        <Reveal delay={0.1} className="mt-10">
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
            <p className="font-display text-6xl font-semibold text-cream-50">
              Est.<span className="text-2xl text-cream-500"> 2025</span>
            </p>
            <Stars />
            <p className="text-sm font-medium text-cream-500">
              Proudly serving Milford, CT since December 2025
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 space-y-5">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </Reveal>
      </div>
    </section>
  );
}
