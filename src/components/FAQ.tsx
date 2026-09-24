import { useState } from "react";
import { Phone, Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Where are you located?",
    a: "We're at 501 New Haven Avenue in Milford, CT 06460, near Old Gate Lane.",
  },
  {
    q: "What are your hours?",
    a: "Tuesday through Thursday 12 – 9 PM, Friday and Saturday 12 – 10 PM, and Sunday 12 – 8 PM. We're closed on Mondays.",
  },
  {
    q: "Do I need a reservation?",
    a: "Give us a call at (203) 878-1910 to check availability, especially if you're planning ahead for a larger group.",
  },
  {
    q: "Do you offer takeout or delivery?",
    a: "Yes. Call us for takeout, or order delivery through Grubhub, Seamless, or Postmates.",
  },
  {
    q: "Is your food Tex-Mex?",
    a: "No. We serve authentic Mexican dishes made with genuine ingredients, from exquisite meats and fresh vegetables to seafood, with flavors from mild to spicy.",
  },
  {
    q: "Do you have a kids' menu?",
    a: "Yes, we have a kids' menu, plus shakes, juices, and Mexican sodas for the whole family.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <Reveal delay={0.05 + index * 0.05}>
      <div
        className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
          open
            ? "border-marigold-400/30 bg-night-850/80"
            : "border-white/[0.08] bg-night-900/70"
        }`}
      >
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-lg font-medium text-cream-50">
            {q}
          </span>
          <span
            aria-hidden
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
              open
                ? "rotate-45 border-marigold-400/50 bg-marigold-400/15 text-marigold-300"
                : "border-white/10 bg-white/5 text-cream-300"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
        {/* Grid rows 0fr → 1fr animates the panel's height without measuring it */}
        <div
          id={`faq-panel-${index}`}
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-6 text-sm leading-relaxed text-cream-300">
              {a}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative border-t border-white/[0.06] bg-night-900/40 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Good to Know"
              title={
                <>
                  Questions,{" "}
                  <em className="text-gold-gradient font-medium italic">
                    answered
                  </em>
                </>
              }
              sub="Everything guests ask us most — hours, location, takeout, and what makes our food different."
            />
            <Reveal delay={0.15} className="mt-10">
              <div className="rounded-3xl border border-white/[0.08] bg-night-950/70 p-7">
                <p className="font-display text-xl font-medium text-cream-50">
                  Still curious?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream-300">
                  A real human answers our phone during open hours — usually
                  someone who can also tell you tonight's special.
                </p>
                <a
                  href="tel:+12038781910"
                  className="btn-shine mt-5 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-6 py-3 text-sm font-bold text-night-950 shadow-[0_10px_30px_-8px_rgba(240,191,79,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  (203) 878-1910
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
