import { useEffect, useState } from "react";

/**
 * Keeps something on screen for `exitMs` after `open` turns false, so it can
 * play a closing animation. `closing` is true during that time.
 */
export function usePresence(open: boolean, exitMs: number) {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      return;
    }
    const t = window.setTimeout(() => setMounted(false), exitMs);
    return () => window.clearTimeout(t);
  }, [open, exitMs]);

  return { mounted: open || mounted, closing: !open && mounted };
}
