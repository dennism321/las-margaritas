import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <span className="inline-flex items-center gap-2.5 rounded-full border border-marigold-400/25 bg-marigold-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-marigold-300">
        <span
          className="h-1.5 w-1.5 rounded-full bg-marigold-400 shadow-[0_0_12px_rgba(240,191,79,0.9)]"
          aria-hidden
        />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream-50 sm:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-base leading-relaxed text-cream-300 sm:text-lg">{sub}</p>
      )}
    </Reveal>
  );
}
