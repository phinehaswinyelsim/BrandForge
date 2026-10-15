"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

type Status = { open: boolean; time: string } | null;

function getStatus(): NonNullable<Status> {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: siteConfig.hours.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const currentMinutes = hour * 60 + minute;
  const [openHour, openMinute] = siteConfig.hours.open.split(":").map(Number);
  const [closeHour, closeMinute] = siteConfig.hours.close.split(":").map(Number);
  const opensAt = openHour * 60 + openMinute;
  const closesAt = closeHour * 60 + closeMinute;
  const time = new Intl.DateTimeFormat("en-GH", {
    timeZone: siteConfig.hours.timezone,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  return { open: currentMinutes >= opensAt && currentMinutes < closesAt, time };
}

export function OpenStatus() {
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const update = () => setStatus(getStatus());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="open-status" aria-live="polite">
      <span className={`status-dot${status?.open ? " is-open" : ""}`} aria-hidden="true" />
      <span>
        {status
          ? status.open
            ? `Open now · Tarkwa time ${status.time}`
            : `Closed now · Opens at ${siteConfig.hours.open}`
          : "Checking today’s hours"}
      </span>
    </div>
  );
}
