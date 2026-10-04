import { useId } from "react";
import { cn } from "../utils/cn";

// Banner colours taken from the papel picado hanging in the sunroom
const COLORS = [
  "#27a9c6", // turquesa
  "#f5b82e", // marigold
  "#e8456f", // rosa
  "#1e2d5c", // marino
  "#b6d43a", // lima
  "#d9301a", // salsa
  "#17795c", // jade
];

const RING = Array.from({ length: 8 }, (_, i) => {
  const angle = (i / 8) * Math.PI * 2;
  return { x: 32 + Math.cos(angle) * 12, y: 26 + Math.sin(angle) * 12 };
});

function Flag({ color, delay }: { color: string; delay: number }) {
  const rawId = useId();
  const maskId = `pp-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div
      className="animate-sway shrink-0"
      style={{ animationDelay: `${delay}s`, animationDuration: `${4.5 + (delay % 2)}s` }}
    >
      <svg
        viewBox="0 0 64 56"
        aria-hidden="true"
        className="h-auto w-9 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] sm:w-12"
      >
        <defs>
          <mask id={maskId}>
            <rect width="64" height="56" fill="#fff" />
            <circle cx="32" cy="26" r="5" fill="#000" />
            {RING.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.7" fill="#000" />
            ))}
            <path d="M9 9l3.5 3.5L9 16 5.5 12.5z" fill="#000" />
            <path d="M55 9l3.5 3.5L55 16l-3.5-3.5z" fill="#000" />
            {[8, 24, 40, 56].map((x) => (
              <circle key={x} cx={x} cy="40" r="2" fill="#000" />
            ))}
          </mask>
        </defs>
        <path
          d="M0 0H64V46L56 56L48 46L40 56L32 46L24 56L16 46L8 56L0 46Z"
          fill={color}
          mask={`url(#${maskId})`}
        />
        <rect width="64" height="4" fill="#000" opacity="0.12" />
      </svg>
    </div>
  );
}

export default function PapelPicado({
  count = 36,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none select-none", className)}>
      <div className="h-px w-full bg-crema/60" />
      <div className="-mt-px flex gap-1 overflow-hidden px-1">
        {Array.from({ length: count }, (_, i) => (
          <Flag key={i} color={COLORS[i % COLORS.length]} delay={(i % 7) * 0.35} />
        ))}
      </div>
    </div>
  );
}
