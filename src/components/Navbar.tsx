import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "../utils/cn";
import { RESTAURANT } from "../data/info";
import LasMargaritasLogo from "./LasMargaritasLogo";

const links = [
  { href: "#casa", label: "The Casa" },
  { href: "#menu", label: "Menu" },
  { href: "#cantina", label: "Cantina" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-carbon/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-22 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center transition"
          onClick={() => setOpen(false)}
          aria-label="Las Margaritas Mexican Restaurant Home"
        >
          {/* Restaurant logo (transparent background) */}
          <LasMargaritasLogo
            className="h-[4.5rem] w-auto transition-transform duration-300 group-hover:scale-105 sm:h-20"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-crema/85 transition-colors hover:text-marigold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={RESTAURANT.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-salsa px-4 py-2 text-sm font-semibold text-white transition hover:bg-chile sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {RESTAURANT.phone}
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-crema ring-1 ring-white/25 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden transition-all duration-300 md:hidden",
          open ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]",
        )}
      >
        <ul className="min-h-0 space-y-1 px-5 pb-5 pt-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-2xl font-bold text-crema hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={RESTAURANT.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-salsa px-4 py-3 font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {RESTAURANT.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
