import { RESTAURANT } from "../data/info";
import LasMargaritasLogo from "./LasMargaritasLogo";

export default function Footer() {
  return (
    <footer className="bg-carbon text-crema">
      <div className="talavera-strip" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <a href="#top" className="group block transition" aria-label="Las Margaritas Home">
            {/* Restaurant logo */}
            <LasMargaritasLogo
              className="h-32 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-crema/70">
            Authentic Mexican recipes, sizzling fajitas, and handcrafted margaritas served with
            genuine hospitality in Milford, Connecticut.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-marigold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["#casa", "The Casa"],
              ["#menu", "Menu"],
              ["#cantina", "Cantina"],
              ["#visit", "Hours & Location"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-crema/80 transition hover:text-marigold">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESTAURANT.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-crema/80 transition hover:text-marigold"
              >
                Official website ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-marigold">Find us</h3>
          <address className="mt-4 space-y-1 text-sm not-italic text-crema/80">
            <p>{RESTAURANT.street}</p>
            <p>{RESTAURANT.city}</p>
            <p className="pt-2">
              <a href={RESTAURANT.phoneHref} className="font-semibold text-crema hover:text-marigold">
                {RESTAURANT.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-crema/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Las Margaritas Mexican Restaurant &amp; Cantina. All rights reserved.</p>
          <p>Stock video &amp; food photography via Pexels. Menu and hours from lasmargaritas203.com.</p>
        </div>
      </div>
    </footer>
  );
}
