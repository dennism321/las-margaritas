type Variant = "header" | "footer";

/** The margarita-glasses logo image on its own (used in the reservation dialog). */
export function LogoMark({ className }: { className: string }) {
  return (
    <img
      src="images/logo.webp"
      alt=""
      width={285}
      height={216}
      className={`lm-logo ${className}`}
    />
  );
}

/** Logo + "Las Margaritas / Restaurant & Cantina" wordmark, linking back to the top. */
export default function Logo({ variant = "header" }: { variant?: Variant }) {
  const header = variant === "header";
  return (
    <a
      href="#top"
      className={header ? "group flex items-center gap-3" : "flex items-center gap-3"}
      aria-label="Las Margaritas — back to top"
    >
      <LogoMark
        className={
          header
            ? "lm-logo-header transition-transform duration-300 group-hover:rotate-6"
            : "lm-logo-footer"
        }
      />
      <span className="leading-tight">
        <span
          className={`lm-brand-name lm-brand-${variant} block font-display font-semibold tracking-tight text-cream-50`}
        >
          Las Margaritas
        </span>
        <span
          className={`lm-brand-sub lm-brand-${variant}-sub block font-bold uppercase text-marigold-300/90`}
        >
          Restaurant &amp; Cantina
        </span>
      </span>
    </a>
  );
}
