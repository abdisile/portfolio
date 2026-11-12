"use client";

import { useSyncExternalStore } from "react";

const ZONE = "Africa/Addis_Ababa";
// Ethiopia is UTC+3 all year; it does not observe daylight saving.
const ADDIS_OFFSET_MINUTES = 180;

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: ZONE,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

// The server has no "now" to render, so the clock starts empty and fills in
// on the client. That keeps the current time out of the prerendered page.
const getSecond = () => Math.floor(Date.now() / 1000);
const getServerSecond = () => null;

/** How far Addis Ababa is from the visitor's own clock. */
function offsetFromVisitor(date: Date): string {
  const diff = ADDIS_OFFSET_MINUTES + date.getTimezoneOffset();
  if (diff === 0) return "Same time as you";
  const total = Math.abs(diff);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  const span = [hours ? `${hours}h` : "", minutes ? `${minutes}m` : ""]
    .filter(Boolean)
    .join(" ");
  return diff > 0 ? `${span} ahead of you` : `${span} behind you`;
}

type LocalTimeProps = {
  /** "full" adds the offset from the visitor; "compact" is the time alone. */
  variant?: "full" | "compact";
  className?: string;
};

export function LocalTime({ variant = "full", className = "" }: LocalTimeProps) {
  const second = useSyncExternalStore<number | null>(
    subscribe,
    getSecond,
    getServerSecond,
  );
  const date = second === null ? null : new Date(second * 1000);
  const time = date ? clock.format(date) : "--:--:--";

  if (variant === "compact") {
    return (
      <span className={`font-mono tabular-nums ${className}`}>{time}</span>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 ${className}`}
    >
      <p className="flex items-baseline gap-4">
        <span className="label text-muted">Addis Ababa now</span>
        <span className="display text-4xl tabular-nums sm:text-5xl">{time}</span>
      </p>
      <p className="label min-h-4 text-muted">
        {date ? `${offsetFromVisitor(date)} · UTC+3` : null}
      </p>
    </div>
  );
}
