import { useEffect, useRef, useState } from "react";
import { ArrowDown, Clock, MapPin, Pause, Phone, Play } from "lucide-react";
import PapelPicado from "./PapelPicado";
import { RESTAURANT } from "../data/info";
import { useOpenStatus } from "../hooks/useOpenStatus";
import { cn } from "../utils/cn";

// Hero video, re-encoded from Pexels clip 7772225: a 1280x720 version for wide
// screens and a 540x960 portrait crop for phones (about 1 MB and 280 KB instead
// of the 5.5 MB original). The still frames show until the video is ready.
const VIDEO_WIDE = "media/hero-1280.mp4";
const VIDEO_PORTRAIT = "media/hero-phone-540.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoShown, setVideoShown] = useState(false);
  const status = useOpenStatus();

  // Start the video only after the rest of the page has loaded, and skip it for
  // visitors who asked for less motion or less data.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData;
    if (reduceMotion || saveData) return;

    const start = () => {
      v.src = window.matchMedia("(orientation: portrait)").matches ? VIDEO_PORTRAIT : VIDEO_WIDE;
      v.play().catch(() => setPlaying(false));
    };
    if (document.readyState === "complete") start();
    else {
      window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      // The video may not have been loaded yet (reduced motion / data saver).
      if (!v.getAttribute("src"))
        v.src = window.matchMedia("(orientation: portrait)").matches ? VIDEO_PORTRAIT : VIDEO_WIDE;
      void v.play();
    }
    else v.pause();
  };

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-carbon text-crema"
    >
      {/* Still frame shown right away; the video fades in over it once playing */}
      <picture>
        <source
          media="(orientation: portrait)"
          srcSet="media/hero-poster-phone-540.webp"
          width={540}
          height={960}
        />
        <img
          src="media/hero-poster-1280.webp"
          alt=""
          aria-hidden="true"
          width={1280}
          height={720}
          fetchPriority="high"
          className="absolute inset-0 -z-40 h-full w-full object-cover"
        />
      </picture>
      <video
        ref={videoRef}
        className={cn(
          "absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-700",
          videoShown ? "opacity-100" : "opacity-0",
        )}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => {
          setPlaying(true);
          setVideoShown(true);
        }}
        onPause={() => setPlaying(false)}
      />

      {/* Colour grading: charcoal vignette + a wash of salsa red */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-carbon/80 via-carbon/45 to-carbon/90" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-tr from-chile/55 via-transparent to-transparent mix-blend-multiply" />

      <PapelPicado className="absolute inset-x-0 top-20 z-10 sm:top-22" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-10 pt-44 sm:px-8 sm:pt-48">
        <div className="flex flex-wrap items-center gap-3 animate-fade-up">
          <div
            className={cn(
              "inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-carbon/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur",
            )}
          >
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                status.isOpen ? "bg-lima shadow-[0_0_10px_2px_rgba(182,212,58,0.7)]" : "bg-marigold",
              )}
              aria-hidden="true"
            />
            {status.label}
          </div>

          <span className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-crema/10 px-3 py-1 text-xs font-medium text-crema/90 backdrop-blur sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
            Milford, CT • Cantina &amp; Kitchen
          </span>
        </div>

        {/* Hero Title & Signature Culinary Feature */}
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-display leading-[0.88] tracking-tight animate-fade-up [animation-delay:120ms]">
              <span className="block text-3xl font-bold italic text-marigold sm:text-5xl">Las</span>
              <span className="block text-[clamp(3.6rem,13vw,10.5rem)] font-extrabold text-crema drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
                Margaritas
              </span>
            </h1>
            <p className="mt-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-crema/90 animate-fade-up [animation-delay:220ms] sm:text-base">
              <span className="h-px w-10 bg-marigold" aria-hidden="true" />
              {RESTAURANT.tagline}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-crema/90 animate-fade-up [animation-delay:320ms] sm:text-xl">
              Sizzling fajitas, slow-cooked birria and a bar built for margaritas, served under a
              ceiling of paper flags in Milford, Connecticut.
            </p>
          </div>

          {/* Sizzling Platter Spotlight Card */}
          <div className="hidden shrink-0 animate-fade-up [animation-delay:260ms] lg:block">
            <div className="relative group w-72 overflow-hidden rounded-3xl border border-white/20 bg-carbon/60 p-3 shadow-2xl shadow-black/50 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-marigold/50">
              <div className="relative h-44 overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/32375355/pexels-photo-32375355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=350&w=500"
                  alt="Sizzling platter of Mexican fajitas"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-salsa/90 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-white shadow backdrop-blur">
                  Famous Sizzling Fajitas
                </span>
              </div>
              <div className="p-2 pt-3">
                <p className="font-display text-sm font-bold text-crema">Served Fresh to Your Table</p>
                <p className="text-xs text-crema/70">With rice, beans, guacamole &amp; warm tortillas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:420ms]">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-salsa px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-chile/40 transition hover:-translate-y-0.5 hover:bg-chile"
          >
            Explore the Menu
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-crema/50 bg-carbon/30 px-7 py-3.5 text-base font-semibold text-crema backdrop-blur transition hover:border-marigold hover:text-marigold"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {RESTAURANT.phone}
          </a>
        </div>
      </div>

      {/* Quick facts */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-8 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3">
          <div className="flex items-center gap-3 bg-carbon/60 px-5 py-4">
            <MapPin className="h-5 w-5 shrink-0 text-marigold" aria-hidden="true" />
            <div className="text-sm leading-snug">
              <p className="font-semibold">{RESTAURANT.street}</p>
              <p className="text-crema/70">{RESTAURANT.city}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-carbon/60 px-5 py-4">
            <Clock className="h-5 w-5 shrink-0 text-marigold" aria-hidden="true" />
            <div className="text-sm leading-snug">
              <p className="font-semibold">Tue – Thu 12 – 9 PM · Fri – Sat 12 – 10 PM</p>
              <p className="text-crema/70">Sun 12 – 8 PM · Mon closed</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 bg-carbon/60 px-5 py-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-marigold" aria-hidden="true" />
              <div className="text-sm leading-snug">
                <p className="font-semibold">{RESTAURANT.phone}</p>
                <p className="text-crema/70">Questions? Give us a call</p>
              </div>
            </div>
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause background video" : "Play background video"}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-crema transition hover:border-marigold hover:text-marigold"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
