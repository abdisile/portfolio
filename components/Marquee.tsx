import type { CSSProperties } from "react";
import { FlowerMark } from "@/components/icons";
import { skillStages } from "@/lib/content";

const phrases = [
  "From database to screen",
  "Product features",
  "APIs",
  "AI-enabled web apps",
  "Addis Ababa → Remote",
  "Available for work",
];

const tools = skillStages.flatMap((stage) => stage.items);

/**
 * Two tilted bands running in opposite directions between the hero and the page:
 * what Abdi builds on yellow, and what he builds it with underneath.
 */
export function Marquee() {
  return (
    <div className="overflow-x-clip py-6 sm:py-10">
      <div className="-mx-6 -rotate-[1.4deg]">
        <Band
          items={phrases}
          seconds={38}
          className="bg-accent py-3.5 text-accent-ink sm:py-5"
          textClass="display text-3xl sm:text-5xl"
          markClass="size-6 sm:size-9"
        />
        <Band
          items={tools}
          seconds={70}
          reverse
          className="bg-foreground py-2.5 text-background"
          textClass="label text-xs sm:text-sm"
          markClass="size-3.5 text-accent"
        />
      </div>
    </div>
  );
}

type BandProps = {
  items: string[];
  /** Time for one full loop. Longer lists need longer to move at the same pace. */
  seconds: number;
  reverse?: boolean;
  className: string;
  textClass: string;
  markClass: string;
};

function Band({
  items,
  seconds,
  reverse = false,
  className,
  textClass,
  markClass,
}: BandProps) {
  // The list is repeated so the loop has no gap; only the first copy is read out.
  const track = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="marquee-track">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10">
          <span className={`whitespace-nowrap ${textClass}`}>{item}</span>
          <FlowerMark className={markClass} />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee ${reverse ? "marquee-reverse" : ""} ${className}`}
      style={{ "--duration": `${seconds}s` } as CSSProperties}
    >
      {track(false)}
      {track(true)}
      {track(true)}
    </div>
  );
}
