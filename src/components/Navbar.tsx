import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu as MenuIcon, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { EASE } from "./Reveal";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Dine & Order", href: "#events" },
  { label: "Our Promise", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onReserve }: { onReserve: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-night-950/85 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-semibold text-cream-100/75 transition-colors duration-300 hover:text-cream-50"
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-marigold-400 to-chili-400 transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="tel:+12038781910"
              className="hidden items-center gap-2 text-sm font-semibold text-cream-100/80 transition-colors hover:text-marigold-300 xl:flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              (203) 878-1910
            </a>
            <button
              onClick={onReserve}
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-5 py-2.5 text-sm font-bold text-night-950 shadow-[0_8px_28px_-8px_rgba(240,191,79,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-8px_rgba(240,191,79,0.75)] active:translate-y-0"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden />
              Reserve a Table
            </button>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-100 transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <motion.button
              aria-label="Close navigation menu"
              className="absolute inset-0 bg-night-950/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-white/10 bg-night-950/95 p-7 backdrop-blur-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-100 transition-colors hover:bg-white/10"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.nav
                aria-label="Mobile"
                className="mt-12 flex flex-col gap-2"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
                }}
              >
                {links.map((l) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 font-display text-3xl font-medium text-cream-100 transition-colors hover:bg-white/5 hover:text-marigold-300"
                    variants={{
                      hidden: { opacity: 0, x: 28 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
                    }}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-marigold-400 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </motion.nav>

              <div className="mt-auto space-y-4 pt-10">
                <button
                  onClick={() => {
                    setOpen(false);
                    onReserve();
                  }}
                  className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-5 py-3.5 text-sm font-bold text-night-950 shadow-[0_8px_28px_-8px_rgba(240,191,79,0.6)]"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Reserve a Table
                </button>
                <a
                  href="tel:+12038781910"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3.5 text-sm font-semibold text-cream-100"
                >
                  <Phone className="h-4 w-4 text-marigold-300" aria-hidden />
                  (203) 878-1910
                </a>
                <p className="text-center text-xs text-cream-500">
                  Tue – Sun from 12 PM · 501 New Haven Ave, Milford
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
