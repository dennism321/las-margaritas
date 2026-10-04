import { useEffect, useState } from "react";
import { getOpenStatus, type OpenStatus } from "../data/info";

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => getOpenStatus());

  useEffect(() => {
    const id = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
