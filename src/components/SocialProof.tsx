import { Award, Star, UtensilsCrossed } from "lucide-react";

const badges = [
  { icon: Star, text: "Now open in Milford, CT" },
  { icon: UtensilsCrossed, text: "Authentic Mexican — never Tex-Mex" },
  { icon: Award, text: "Family recipes from Chef Carmelo Garcia" },
  { icon: UtensilsCrossed, text: "Dishes from across Mexico" },
  { icon: Star, text: "Famous sizzling fajitas" },
  { icon: Award, text: "Fresh seafood del mar" },
  { icon: Star, text: "Takeout on Grubhub, Seamless & Postmates" },
];

export default function SocialProof() {
  return (
    <section aria-label="Reviews and recognition" className="border-y border-white/[0.06] bg-night-900/60 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.32em] text-cream-500">
          501 New Haven Ave · Milford, CT
        </p>
        <div className="marquee-fade pause-on-hover mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-4 pr-4">
                {badges.map((b) => (
                  <span
                    key={`${copy}-${b.text}`}
                    className="glass flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold text-cream-100 transition-colors duration-300 hover:border-marigold-400/30"
                  >
                    <b.icon className="h-4 w-4 shrink-0 text-marigold-400" aria-hidden />
                    {b.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
