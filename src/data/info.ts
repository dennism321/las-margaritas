export const RESTAURANT = {
  name: "Las Margaritas",
  tagline: "Mexican Restaurant & Cantina",
  street: "501 New Haven Ave",
  city: "Milford, CT 06460",
  phone: "(203) 878-1910",
  phoneHref: "tel:+12038781910",
  menuUrl: "https://lasmargaritas203.com/menu/",
  siteUrl: "https://lasmargaritas203.com/",
  mapsEmbed:
    "https://www.google.com/maps?q=501+New+Haven+Ave,+Milford,+CT+06460&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=501+New+Haven+Ave,+Milford,+CT+06460",
};

export type DayHours = {
  day: string;
  short: string;
  /** 24h opening hour, undefined = closed */
  open?: number;
  close?: number;
};

// Hours as listed on lasmargaritas203.com (checked Oct 2026)
export const HOURS: DayHours[] = [
  { day: "Monday", short: "Mon" },
  { day: "Tuesday", short: "Tue", open: 12, close: 21 },
  { day: "Wednesday", short: "Wed", open: 12, close: 21 },
  { day: "Thursday", short: "Thu", open: 12, close: 21 },
  { day: "Friday", short: "Fri", open: 12, close: 22 },
  { day: "Saturday", short: "Sat", open: 12, close: 22 },
  { day: "Sunday", short: "Sun", open: 12, close: 20 },
];

export function formatHour(h: number) {
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:00 ${suffix}`;
}

export type OpenStatus = {
  isOpen: boolean;
  today: string;
  label: string;
};

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const mins = hour * 60 + minute;

  const index = HOURS.findIndex((h) => h.day === weekday);
  const today = HOURS[index] ?? HOURS[0];

  if (today.open !== undefined && today.close !== undefined) {
    if (mins >= today.open * 60 && mins < today.close * 60) {
      return {
        isOpen: true,
        today: today.day,
        label: `Open now · until ${formatHour(today.close).replace(":00", "")}`,
      };
    }
    if (mins < today.open * 60) {
      return {
        isOpen: false,
        today: today.day,
        label: `Opens today at ${formatHour(today.open).replace(":00", "")}`,
      };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = HOURS[(index + i) % 7];
    if (next.open !== undefined) {
      return {
        isOpen: false,
        today: today.day,
        label: `Closed · opens ${i === 1 ? "tomorrow" : next.day} at ${formatHour(next.open).replace(":00", "")}`,
      };
    }
  }

  return { isOpen: false, today: today.day, label: "Closed" };
}
