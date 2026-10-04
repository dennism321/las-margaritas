import { useMemo, useState } from "react";
import { ArrowUpRight, Flame, Search, X } from "lucide-react";
import { categories, type MenuItem } from "../data/menu";
import { RESTAURANT } from "../data/info";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";

function TagBadge({ tag }: { tag: NonNullable<MenuItem["tag"]> }) {
  const styles: Record<NonNullable<MenuItem["tag"]>, string> = {
    Popular: "bg-marigold/25 text-roble",
    "Chef's Special": "bg-jade/15 text-jade",
    Spicy: "bg-salsa/15 text-chile",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider",
        styles[tag],
      )}
    >
      {tag === "Spicy" && <Flame className="h-3 w-3" aria-hidden="true" />}
      {tag}
    </span>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-4 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-lg font-bold leading-snug text-carbon">{item.name}</h4>
        {item.tag && <TagBadge tag={item.tag} />}
        {item.price && (
          <>
            <span
              className="mb-1 min-w-4 flex-1 self-end border-b-2 border-dotted border-carbon/25"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-bold tabular-nums text-chile">
              ${item.price}
            </span>
          </>
        )}
      </div>

      {item.desc && (
        <p className="mt-1 max-w-prose text-[0.92rem] leading-relaxed text-carbon/70">{item.desc}</p>
      )}

      {item.variants && (
        <ul className="mt-2.5 space-y-1.5">
          {item.variants.map((v) => (
            <li key={v.label} className="flex items-baseline gap-3 text-sm text-carbon/85">
              <span className="font-medium">{v.label}</span>
              <span
                className="mb-1 min-w-4 flex-1 self-end border-b border-dotted border-carbon/25"
                aria-hidden="true"
              />
              {v.price && (
                <span className="font-display font-bold tabular-nums text-chile">${v.price}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MenuSection() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [query, setQuery] = useState("");

  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return categories
      .map((category) => ({
        category,
        items: category.items.filter((i) =>
          [i.name, i.desc, ...(i.variants?.map((v) => v.label) ?? [])]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(q),
        ),
      }))
      .filter((r) => r.items.length > 0);
  }, [q]);

  const selectCategory = (id: string, el: HTMLElement) => {
    setActiveId(id);
    setQuery("");
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    const panel = document.getElementById("menu-panel");
    if (panel && panel.getBoundingClientRect().top < 110) {
      requestAnimationFrame(() => panel.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };

  return (
    <section id="menu" className="relative bg-hueso/60">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-28">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-jade">La Carta</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-carbon sm:text-7xl">
              The <span className="italic text-salsa">Menu</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-carbon/70">
              From antojitos to sizzling fajitas, birria and churros: the full menu from our kitchen
              at {RESTAURANT.street}.
            </p>
          </div>

          <div className="w-full lg:w-80">
            <label htmlFor="menu-search" className="sr-only">
              Search the menu
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-carbon/50"
                aria-hidden="true"
              />
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tacos, shrimp, mole…"
                className="w-full rounded-full border-2 border-carbon/15 bg-white py-3.5 pl-12 pr-12 text-base text-carbon shadow-sm outline-none transition placeholder:text-carbon/40 focus:border-jade"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-carbon/60 hover:bg-carbon/10"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sticky category tabs */}
      <div className="sticky top-16 z-30 mt-10 border-y border-carbon/10 bg-crema/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-3 sm:px-8"
          >
            {categories.map((c) => {
              const isActive = !q && c.id === activeId;
              return (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls="menu-panel"
                  onClick={(e) => selectCategory(c.id, e.currentTarget)}
                  className={cn(
                    "shrink-0 rounded-full border-2 px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "border-salsa bg-salsa text-white shadow-md shadow-salsa/30"
                      : "border-jade/25 bg-white text-jade hover:border-jade hover:bg-jade hover:text-white",
                  )}
                >
                  {c.short}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div id="menu-panel" role="tabpanel" className="scroll-mt-32">
          {q ? (
            <div className="animate-fade-in">
              <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-carbon/60">
                {results.reduce((n, r) => n + r.items.length, 0)} result
                {results.reduce((n, r) => n + r.items.length, 0) === 1 ? "" : "s"} for “{query.trim()}”
              </p>
              {results.length === 0 ? (
                <div className="rounded-3xl border-2 border-dashed border-carbon/20 bg-white/60 p-12 text-center">
                  <p className="font-display text-2xl font-bold">Nothing on the menu matches that.</p>
                  <p className="mt-2 text-carbon/70">
                    Try a different word, or browse the categories above.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 lg:grid-cols-2">
                  {results.map(({ category, items }) => (
                    <div
                      key={category.id}
                      className="rounded-[1.75rem] border border-carbon/10 bg-white p-6 shadow-sm sm:p-8"
                    >
                      <button
                        type="button"
                        onClick={(e) => selectCategory(category.id, e.currentTarget)}
                        className="mb-5 flex w-full items-center justify-between border-b-2 border-salsa pb-3 text-left"
                      >
                        <span className="font-display text-2xl font-extrabold text-salsa">
                          {category.name}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-carbon/50">
                          View all
                        </span>
                      </button>
                      <ul className="divide-y divide-carbon/10">
                        {items.map((item, i) => (
                          <ItemRow key={`${item.name}-${i}`} item={item} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div key={active.id} className="grid gap-8 lg:grid-cols-12 lg:gap-12 animate-fade-in">
              {/* Visual */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-40">
                  <div className="relative overflow-hidden rounded-[2rem] bg-carbon text-crema shadow-2xl shadow-carbon/25">
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-marigold">
                        {active.subtitle}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                        {active.name}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-crema/85">
                        {active.blurb}
                      </p>
                    </div>
                    <div className="talavera-strip absolute inset-x-0 top-0 talavera-strip-down" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="lg:col-span-7">
                <div className="rounded-[2rem] border border-carbon/10 bg-white p-6 shadow-sm sm:p-10">
                  <ul className="divide-y divide-carbon/10">
                    {active.items.map((item, i) => (
                      <ItemRow key={`${item.name}-${i}`} item={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-jade/25 bg-jade/10 p-6 text-sm leading-relaxed text-carbon/80 sm:flex-row sm:items-center">
          <p className="max-w-3xl">
            Full menu and prices verified against <span className="font-semibold text-carbon">lasmargaritas203.com</span> (501 New Haven Ave, Milford, CT). For takeout orders or daily chef specials, give us a call at{" "}
            <a href={RESTAURANT.phoneHref} className="font-semibold text-chile underline-offset-2 hover:underline">
              {RESTAURANT.phone}
            </a>.
          </p>
          <a
            href={RESTAURANT.menuUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-jade px-5 py-2.5 font-semibold text-white transition hover:bg-nopal"
          >
            Official menu
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
