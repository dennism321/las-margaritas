/**
 * BuildingPhoto component:
 * The restaurant's storefront photo with a location label overlaid.
 */
export default function BuildingPhoto() {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[2.6/1]">
      {/* Photo of the restaurant at 501 New Haven Ave */}
      <img
        src="images/building-las-margaritas.webp"
        alt="Las Margaritas restaurant building exterior at 501 New Haven Ave, Milford, CT"
        width={1400}
        height={788}
        loading="lazy"
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent pointer-events-none" />

      {/* Subtle talavera accent strip on top of the photo card */}
      <div className="talavera-strip absolute inset-x-0 top-0 opacity-80" aria-hidden="true" />

      {/* Information overlay */}
      <div className="absolute inset-x-5 bottom-4 flex flex-wrap items-end justify-between gap-3 text-crema sm:inset-x-6 sm:bottom-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-salsa px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow">
            Our Location
          </span>
          <p className="mt-1 font-display text-lg font-bold sm:text-xl">
            501 New Haven Ave, Milford, CT 06460
          </p>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full bg-carbon/80 px-3 py-1 text-xs font-semibold text-crema/90 backdrop-blur sm:inline-flex">
          <span className="h-2 w-2 rounded-full bg-lima animate-pulse" />
          Free On-Site Guest Parking
        </span>
      </div>
    </div>
  );
}
