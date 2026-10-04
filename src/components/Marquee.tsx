const WORDS = [
  "Tacos",
  "Fajitas",
  "Birria",
  "Enchiladas",
  "Margaritas",
  "Chimichangas",
  "Guacamole",
  "Churros",
  "Mole Poblano",
  "Ceviche",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {WORDS.map((w) => (
        <li key={w} className="flex items-center">
          <span className="px-6 font-display text-2xl font-bold italic tracking-tight sm:text-3xl">
            {w}
          </span>
          <span className="h-2.5 w-2.5 rotate-45 bg-marigold" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-salsa py-4 text-white">
      <p className="sr-only">
        Tacos, fajitas, birria, enchiladas, margaritas, chimichangas, guacamole, churros, mole
        poblano and ceviche.
      </p>
      <div className="animate-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
