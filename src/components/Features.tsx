import { ArrowUpRight, ChefHat, HeartHandshake, Martini, Music, Timer } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Martini,
    title: "Refreshing margaritas",
    text: "Pair your plate with a margarita from the cantina bar — the drink we're named for.",
  },
  {
    icon: ChefHat,
    title: "Genuine ingredients",
    text: "Exquisite meats, fresh vegetables, and the bounty of the sea — from wild-caught shrimp to New York Angus steaks.",
  },
  {
    icon: HeartHandshake,
    title: "Family recipes",
    text: "Chef Carmelo Garcia cooks from recipes passed down through his family for generations.",
  },
  {
    icon: Timer,
    title: "Mild to muy picante",
    text: "Dishes from different regions of Mexico and a vast array of peppers, each with its own heat and flavor.",
  },
];

export default function Features() {
  return (
    <section aria-labelledby="features-heading" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Las Margaritas"
          title={
            <>
              A little more <em className="text-gold-gradient font-medium italic">fiesta</em> in
              every visit
            </>
          }
          sub="We don't serve Tex-Mex. We serve rich, fresh, and flavorful Mexican dishes that celebrate the depth of the cuisine."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Tall image card */}
          <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2" delay={0.05}>
            <article className="group relative h-full min-h-[26rem] overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/40">
              <img
                src="images/interior.webp"
                alt="Warm restaurant interior with string lights, dark wood tables, and a bar"
                width={1100}
                height={600}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-night-950/95 via-night-950/35 to-night-950/10 transition-opacity duration-500"
              />
              <span className="absolute left-5 top-5 rounded-full glass px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-marigold-300">
                Tue – Sun · from 12 PM
              </span>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-marigold-300 to-marigold-500 text-night-950 shadow-lg shadow-marigold-500/30">
                  <Music className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-cream-50">
                  A true taste of Mexico
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream-300">
                  Genuine ingredients, vibrant flavors, and a warm welcome at 501 New Haven Ave. We
                  can't wait to see you.
                </p>
              </div>
            </article>
          </Reveal>

          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.07}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-night-900/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-marigold-400/30 hover:bg-night-800/70 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)]">
                <ArrowUpRight
                  aria-hidden
                  className="absolute right-6 top-6 h-5 w-5 translate-y-1 text-marigold-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-marigold-400/20 bg-marigold-400/10 text-marigold-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-cream-50">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream-300">{f.text}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-marigold-400/[0.07] blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
