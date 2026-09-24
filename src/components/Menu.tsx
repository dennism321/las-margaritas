import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Leaf, Star, WheatOff } from "lucide-react";
import Reveal, { EASE } from "./Reveal";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    img: "images/guacamole.webp",
    alt: "Fresh guacamole in a stone bowl with tortilla chips",
    name: "El Guacamole Especial",
    price: "$19",
    desc: "Avocado, onion, tomato, and cilantro, served with chips.",
    tag: "For the table",
  },
  {
    img: "images/tacos.webp",
    alt: "Soft corn tacos topped with onion and cilantro",
    name: "Birria",
    price: "",
    desc: "Slow-cooked birria from our Birria menu. Ask your server about today's options.",
    tag: null,
  },
  {
    img: "images/carne-asada.webp",
    alt: "Grilled steak plate with peppers, guacamole, and warm tortillas",
    name: "New York Strip Steak",
    price: "$27.95",
    desc: "Served on a sizzling bed of sautéed onions, with rice & beans or salad.",
    tag: "Carnes",
  },
  {
    img: "images/margaritas-real.webp",
    alt: "A frozen mango margarita and a red frozen margarita with lime wheels at Las Margaritas",
    name: "Margaritas",
    price: "",
    desc: "Refreshing margaritas from the cantina bar. Ask about today's flavors.",
    tag: "Cantina",
  },
];

type MenuItem = { name: string; price: number; desc: string; veg?: boolean; gf?: boolean; hot?: boolean };

const tacoSalad =
  "Crispy flour tortilla basket with mixed greens, Jack & cheddar, onion, tomato, sour cream, avocado";
const nachos = "Cheese, beans, jalapeños, tomatoes, sour cream, and guacamole";

const menu: Record<string, { label: string; items: MenuItem[] }> = {
  antojitos: {
    label: "Antojitos",
    items: [
      { name: "Botana", price: 17, desc: "Nachos, cheese quesadilla, chicken flauta, guacamole, sour cream" },
      {
        name: "Sampler Platter",
        price: 19,
        desc: "Nachos, chicken quesadilla, spicy wings, and beef enchilada, with sour cream and guacamole",
      },
      { name: "El Guacamole Especial", price: 19, desc: "Avocado, onion, tomato, cilantro, and chips" },
      { name: "Super Nachos · Beef or Chicken", price: 18, desc: nachos },
      { name: "Super Nachos · Chorizo or Steak", price: 22.79, desc: nachos },
      { name: "Chori-queso", price: 17.99, desc: "Melted cheese with chorizo, served with tortillas" },
      { name: "Cóctel de Camarón", price: 17.99, desc: "Mexican-style chilled shrimp cocktail in a tomato-based sauce" },
      { name: "Ceviche", price: 24, desc: "Citrus-marinated seafood, served chilled" },
      { name: "Empanadas", price: 15, desc: "An order of four crispy empanadas" },
      { name: "Wings · Half Dozen", price: 10.99, desc: "Spicy or mild, served with blue cheese" },
    ],
  },
  ensaladas: {
    label: "Ensaladas",
    items: [
      { name: "Ground Beef Taco Salad", price: 23, desc: tacoSalad },
      { name: "Shredded Chicken Taco Salad", price: 23, desc: tacoSalad },
      { name: "Chicken Breast Taco Salad", price: 24, desc: tacoSalad },
      { name: "Steak Taco Salad", price: 26, desc: tacoSalad },
      { name: "Shrimp Taco Salad", price: 26, desc: tacoSalad },
      { name: "Garden Salad", price: 11.94, desc: "Mixed greens, tomatoes, onions, and peppers with your choice of dressing" },
    ],
  },
  delmar: {
    label: "Del Mar & Carnes",
    items: [
      { name: "Mariscos Combo", price: 33, desc: "Fish and shrimp sautéed in salsa, with beans, rice, and salad" },
      {
        name: "Camarones con Salsa Verde",
        price: 33,
        desc: "Gulf shrimp broiled in tomatillo salsa, with rice, fresh vegetables, and salad",
      },
      { name: "New York Strip Steak", price: 27.95, desc: "On a sizzling bed of sautéed onions, with rice & beans or salad" },
    ],
  },
  postres: {
    label: "Postres & Bebidas",
    items: [
      { name: "Flan", price: 6, desc: "Classic Mexican caramel custard" },
      { name: "Churros", price: 6, desc: "Golden and crispy, dusted with cinnamon sugar" },
      { name: "Tres Leches", price: 6, desc: "Sponge cake soaked in three milks" },
      { name: "Fried Ice Cream", price: 6, desc: "A crispy coating around cold, creamy ice cream" },
      { name: "Shakes", price: 6.95, desc: "Mango, passionfruit, chocolate, vanilla, or strawberry" },
      { name: "Jarritos", price: 3.5, desc: "Mexican sodas in a variety of flavors" },
    ],
  },
};

const tabs = Object.keys(menu);

function DietChip({ icon: Icon, label }: { icon: typeof Leaf; label: string }) {
  return (
    <span
      title={label}
      className="inline-flex items-center gap-1 rounded-full border border-agave-400/25 bg-agave-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-agave-300"
    >
      <Icon className="h-3 w-3" aria-hidden />
      {label}
    </span>
  );
}

export default function Menu() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative border-y border-white/[0.06] bg-night-900/40 py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-marigold-500/[0.05] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Menu"
          title={
            <>
              Rich, fresh &amp;{" "}
              <em className="text-gold-gradient font-medium italic">full of flavor</em>
            </>
          }
          sub="A few favorites from our kitchen. The full menu also includes carnes, pollo, famous sizzling fajitas, enchiladas, birria, combinations, and a kids' menu."
        />

        {/* Featured cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((f, i) => (
            <Reveal key={f.name} delay={0.05 + i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-night-900/80 transition-all duration-500 hover:-translate-y-2 hover:border-marigold-400/30 hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.alt}
                    width={1100}
                    height={f.img.includes("margaritas-real") ? 1467 : 600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-night-950/70 via-transparent to-transparent"
                  />
                  {f.tag && (
                    <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-marigold-200">
                      <Star className="h-3 w-3 fill-marigold-400 text-marigold-400" aria-hidden />
                      {f.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-snug text-cream-50">
                      {f.name}
                    </h3>
                    {f.price && (
                      <span className="shrink-0 font-display text-xl font-semibold text-marigold-300">
                        {f.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream-300">{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tabbed full menu */}
        <Reveal delay={0.1} className="mt-20">
          <div className="rounded-[2rem] border border-white/[0.08] bg-night-950/60 p-5 sm:p-9">
            <div
              className="flex flex-wrap items-center justify-center gap-2"
              role="tablist"
              aria-label="Menu categories"
            >
              {tabs.map((key) => {
                const active = tab === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(key)}
                    className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 ${
                      active ? "text-night-950" : "text-cream-100/70 hover:text-cream-50"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="menu-tab-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 shadow-[0_8px_24px_-8px_rgba(240,191,79,0.7)]"
                        transition={{ duration: 0.45, ease: EASE }}
                      />
                    )}
                    <span className="relative z-10">{menu[key].label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={tab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-10 grid gap-x-12 sm:grid-cols-2"
              >
                {menu[tab].items.map((item) => (
                  <li
                    key={item.name}
                    className="group border-b border-white/[0.06] py-5 last:border-b-0 sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                  >
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-display text-lg font-medium text-cream-50 transition-colors duration-300 group-hover:text-marigold-300">
                        {item.name}
                      </h4>
                      <span className="flex shrink-0 items-center gap-1.5">
                        {item.veg && <DietChip icon={Leaf} label="Veg" />}
                        {item.gf && <DietChip icon={WheatOff} label="GF" />}
                        {item.hot && (
                          <span
                            title="Spicy"
                            className="inline-flex items-center gap-1 rounded-full border border-chili-400/25 bg-chili-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-chili-300"
                          >
                            <Flame className="h-3 w-3" aria-hidden />
                            Spicy
                          </span>
                        )}
                      </span>
                      <span
                        aria-hidden
                        className="mx-1 flex-1 -translate-y-1 border-b border-dotted border-cream-500/35"
                      />
                      <span className="shrink-0 font-display text-lg font-semibold text-marigold-300">
                        ${item.price % 1 ? item.price.toFixed(2) : item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream-500">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <p className="mt-8 text-center text-xs font-medium text-cream-500">
              Prices reflect our current menu and may change · Please ask your server about
              allergens.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
