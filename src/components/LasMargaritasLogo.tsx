/**
 * Las Margaritas logo: the restaurant's own artwork (originals/logo.png),
 * cut out of its white background and saved as public/images/logo-las-margaritas.webp.
 */
export default function LasMargaritasLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img
      src="images/logo-las-margaritas.webp"
      alt="Las Margaritas Mexican Restaurant"
      width={560}
      height={480}
      className={`${className} [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.85))_drop-shadow(0_3px_10px_rgba(0,0,0,0.5))]`}
    />
  );
}
