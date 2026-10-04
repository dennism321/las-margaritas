import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "../data/info";

/**
 * Shown in the pre-built HTML (and for the instant before the script runs),
 * since "open now" depends on the visitor's current time.
 */
const BEFORE_CLOCK: OpenStatus = {
  isOpen: false,
  today: "",
  label: "Open Tue – Sun from 12 PM",
  known: false,
};

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(BEFORE_CLOCK);

  useEffect(() => {
    setStatus(getOpenStatus());
    const id = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
