import { Martini, Paintbrush, Sun, Trees, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

type Card = {
  icon: LucideIcon;
  title: string;
  text: string;
  className: string;
  accent: string;
};

const cards: Card[] = [
  {
    icon: Paintbrush,
    title: "Hand-Painted Murals",
    text: "Vibrant murals and authentic Mexican street art anchor the dining room, beside an ornate carved fireplace.",
    className: "bg-chile text-white",
    accent: "text-marigold",
  },
  {
    icon: Martini,
    title: "The Cantina Bar",
    text: "A jade-green bar with a granite top, red-cushioned stools and a back shelf lined with tequila, whiskey and Mexican beer.",
    className: "bg-jade text-white",
    accent: "text-marigold",
  },
  {
    icon: Sun,
    title: "The Sunroom",
    text: "Vaulted wood beams, big windows and rows of papel picado fluttering overhead. Bright, festive and warm.",
    className: "bg-roble text-crema",
    accent: "text-marigold",
  },
  {
    icon: Trees,
    title: "Window Seats",
    text: "Tall picture windows and French doors look out over green marshland and the back deck.",
    className: "bg-nopal text-crema",
    accent: "text-lima",
  },
];

export default function Experience() {
  return (
    <section id="casa" className="relative bg-crema">
      <div className="talavera-strip" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-salsa/20 bg-salsa/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-salsa">
            Bienvenidos a Milford
          </div>

          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-carbon sm:text-6xl">
            A casa painted in{" "}
            <span className="italic text-salsa">every color</span> of the fiesta
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-carbon/70">
            Tomato-red walls, jade wainscoting, crisp white linens and napkins folded in red and
            green. Every table at Las Margaritas is set for a celebration, whether it's a quick
            lunch or a long family dinner.
          </p>

          {/* Featured Sizzling Fajitas Culinary Showcase */}
          <div className="group relative mt-10 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-carbon/15">
            <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[2.6/1]">
              <img
                src="https://images.pexels.com/photos/32375355/pexels-photo-32375355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1400"
                alt="Sizzling platter of famous fajitas with grilled peppers, onions, tortillas, rice and beans"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/25 to-transparent" />
              <div className="talavera-strip absolute inset-x-0 top-0 opacity-80" aria-hidden="true" />

              <div className="absolute inset-x-6 bottom-5 flex flex-wrap items-end justify-between gap-3 text-left sm:inset-x-8 sm:bottom-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-salsa px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                    Famous Fajitas
                  </span>
                  <p className="mt-2 font-display text-xl font-bold text-white sm:text-3xl">
                    Served Sizzling to Your Table
                  </p>
                  <p className="mt-1 text-xs text-crema/85 sm:text-sm">
                    Marinated in house spices, served with rice, beans, guacamole, sour cream &amp; warm flour tortillas
                  </p>
                </div>
                <div className="hidden items-center gap-2 rounded-full bg-carbon/80 px-4 py-1.5 text-xs font-semibold text-crema backdrop-blur sm:flex">
                  <span className="h-2 w-2 rounded-full bg-lima animate-pulse" />
                  House Favorite
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article
                className={cn(
                  "dots group relative flex h-full min-h-72 flex-col overflow-hidden rounded-[1.75rem] p-7 shadow-lg shadow-carbon/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl",
                  c.className,
                )}
              >
                <span
                  className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125"
                  aria-hidden="true"
                />
                <c.icon className={cn("relative h-9 w-9", c.accent)} aria-hidden="true" />
                <h3 className="relative mt-auto pt-10 font-display text-2xl font-bold leading-tight">
                  {c.title}
                </h3>
                <p className="relative mt-3 text-[0.95rem] leading-relaxed opacity-90">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
