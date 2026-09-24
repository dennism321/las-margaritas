import { useEffect, useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  Loader2,
  Minus,
  Phone,
  Plus,
  X,
} from "lucide-react";
import { LogoMark } from "./Logo";
import { usePresence } from "../utils/usePresence";

const times = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const occasions = [
  "Just dinner",
  "Birthday",
  "Anniversary",
  "Date night",
  "Business dinner",
  "A big fiesta",
];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream-50 outline-none transition-colors placeholder:text-cream-500 focus:border-marigold-400/60 focus:bg-white/[0.08] [color-scheme:dark]";

const labelCls =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-cream-300";

type Props = { open: boolean; onClose: () => void };

export default function ReservationModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("7:00 PM");
  const [occasion, setOccasion] = useState("Just dinner");
  const [party, setParty] = useState(4);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const dialog = usePresence(open, 450);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) setStatus("idle");
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 1300);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {dialog.mounted && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reservation-title"
        >
          <button
            aria-label="Close reservation dialog"
            className={`absolute inset-0 bg-night-950/80 backdrop-blur-md ${
              dialog.closing ? "anim-fade-out" : "anim-fade-in"
            }`}
            onClick={onClose}
          />

          <div
            className={`${dialog.closing ? "anim-dialog-out" : "anim-dialog-in"} glass-deep relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] shadow-2xl shadow-black/70`}
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-marigold-400 via-chili-400 to-marigold-400"
            />

            {status !== "done" ? (
              <div className="p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <LogoMark className="lm-logo-dialog" />
                    <div>
                      <h2
                        id="reservation-title"
                        className="font-display text-2xl font-semibold text-cream-50"
                      >
                        Reserve a table
                      </h2>
                      <p className="text-xs font-medium text-cream-500">
                        Send a request and we'll get back to you to confirm.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close reservation dialog"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-300 transition-colors hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <form onSubmit={submit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="res-name" className={labelCls}>
                        Name
                      </label>
                      <input
                        id="res-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={inputCls}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="res-phone" className={labelCls}>
                        Mobile
                      </label>
                      <input
                        id="res-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(203) 555-0000"
                        className={inputCls}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="res-date" className={labelCls}>
                        Date
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="res-time" className={labelCls}>
                        Time
                      </label>
                      <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={inputCls}
                      >
                        {times.map((t) => (
                          <option key={t} value={t} className="bg-night-900">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <span id="party-label" className={labelCls}>
                      Party size
                    </span>
                    <div
                      role="group"
                      aria-labelledby="party-label"
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <button
                        type="button"
                        onClick={() => setParty((p) => Math.max(1, p - 1))}
                        aria-label="Remove one guest"
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-100 transition-all hover:border-marigold-400/40 hover:text-marigold-300 active:scale-90"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span
                        className="font-display text-lg font-medium text-cream-50"
                        aria-live="polite"
                      >
                        {party >= 16
                          ? "16+ guests"
                          : `${party} ${party === 1 ? "guest" : "guests"}`}
                      </span>
                      <button
                        type="button"
                        onClick={() => setParty((p) => Math.min(16, p + 1))}
                        aria-label="Add one guest"
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-cream-100 transition-all hover:border-marigold-400/40 hover:text-marigold-300 active:scale-90"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    {party >= 16 && (
                      <p className="mt-2 text-xs text-marigold-300">
                        For parties of 16 or more, please call us at (203)
                        878-1910.
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="res-occasion" className={labelCls}>
                      Occasion{" "}
                      <span className="text-cream-500">(optional)</span>
                    </label>
                    <select
                      id="res-occasion"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className={inputCls}
                    >
                      {occasions.map((o) => (
                        <option key={o} value={o} className="bg-night-900">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-shine inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-6 py-4 text-sm font-bold text-night-950 shadow-[0_12px_36px_-8px_rgba(240,191,79,0.7)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-80"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        Sending your request…
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="h-4 w-4" aria-hidden />
                        Request reservation
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-cream-500">
                    Prefer the phone? Call (203) 878-1910.
                  </p>
                </form>
              </div>
            ) : (
              <div className="anim-pop-in p-9 text-center sm:p-12">
                <span className="anim-spring-in mx-auto grid h-20 w-20 place-items-center rounded-full bg-agave-400/15 text-agave-300">
                  <CheckCircle2 className="h-10 w-10" aria-hidden />
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold text-cream-50">
                  ¡Listo{name ? `, ${name.split(" ")[0]}` : ""}!
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-cream-300">
                  Your request for{" "}
                  <span className="font-bold text-cream-50">
                    {party >= 16 ? "16+" : party}{" "}
                    {party === 1 ? "guest" : "guests"}
                  </span>{" "}
                  on{" "}
                  <span className="font-bold text-cream-50">
                    {date
                      ? new Date(`${date}T12:00:00`).toLocaleDateString(
                          "en-US",
                          { weekday: "long", month: "long", day: "numeric" },
                        )
                      : "tonight"}
                  </span>{" "}
                  at <span className="font-bold text-cream-50">{time}</span> is
                  in.
                  {occasion !== "Just dinner" &&
                    ` We'll make it ${occasion.toLowerCase()}-worthy.`}{" "}
                  We'll contact {phone || "you"} to confirm.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <button
                    onClick={onClose}
                    className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-marigold-300 to-marigold-500 px-7 py-3.5 text-sm font-bold text-night-950 shadow-[0_10px_30px_-8px_rgba(240,191,79,0.65)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Done
                  </button>
                  <a
                    href="tel:+12038781910"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-marigold-300" aria-hidden />
                    Prefer to talk?
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
