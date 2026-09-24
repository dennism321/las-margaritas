import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/**
 * Fades content in as it scrolls into view. The hidden state lives in CSS
 * (`.reveal-on .reveal`), which index.html only enables on larger screens, so
 * the pre-rendered HTML is always readable and phones never wait on it.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove("is-in");
        }
      },
      { rootMargin: "0px 0px -70px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-delay": `${Math.min(delay, 0.15)}s`,
  } as CSSProperties;

  return (
    <div ref={ref} className={className ? `reveal ${className}` : "reveal"} style={style}>
      {children}
    </div>
  );
}
