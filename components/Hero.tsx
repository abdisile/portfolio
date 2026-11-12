import type { CSSProperties } from "react";
import Image from "next/image";
import { LocalTime } from "@/components/LocalTime";
import {
  ArrowUpRightIcon,
  FlowerMark,
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons";
import { highlights, profile } from "@/lib/content";

const [firstName, lastName] = profile.name.split(" ");

/** Shorthand for the --i stagger index the entrance animations read. */
const order = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 overflow-x-clip">
      <div className="mx-auto w-full max-w-6xl px-5 pt-6 pb-12 sm:px-8 sm:pt-10 sm:pb-16">
        <div className="@container relative">
          {/* On phones the portrait sits in the gap beside the first name, so this row reserves its height. */}
          <div className="flex min-h-[16cqi] max-w-[58cqi] flex-col items-start justify-end gap-2.5 pb-2 sm:min-h-0 sm:max-w-none sm:flex-row sm:items-center sm:justify-between sm:pb-0">
            <p className="rise label text-muted">Hello, I&apos;m</p>
            <p
              className="rise inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1.5"
              style={order(1)}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] font-medium tracking-[0.1em] whitespace-nowrap uppercase sm:text-[11px] sm:tracking-[0.14em]">
                Available for work
                <span className="max-sm:hidden"> & roles</span>
              </span>
            </p>
          </div>

          <h1
            aria-label={profile.name}
            className="display hero-name whitespace-nowrap sm:mt-3"
          >
            <span aria-hidden="true" className="block sm:inline">
              <Letters text={firstName} start={0} />
            </span>{" "}
            <span aria-hidden="true" className="block sm:inline">
              <Letters text={lastName} start={firstName.length} />
            </span>
          </h1>

          <div className="mt-5 grid gap-x-8 gap-y-10 sm:mt-7 sm:grid-cols-12">
            <div className="flex flex-col justify-between gap-12 sm:col-span-7">
              <div>
                <p className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  <span className="display pop-in inline-block origin-left -rotate-2 bg-accent px-3 pt-2 pb-1.5 text-3xl text-accent-ink sm:px-4 sm:text-5xl">
                    Software Engineer
                  </span>
                  <span
                    className="rise label text-muted sm:text-xs"
                    style={order(3)}
                  >
                    / Full-Stack Developer
                  </span>
                </p>

                <p
                  className="rise mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
                  style={order(4)}
                >
                  Full-stack engineer building fast, reliable web applications
                  and products end to end, from robust APIs to polished
                  interfaces.
                </p>

                <Actions />
              </div>

              <dl
                className="rise grid grid-cols-3 gap-4 sm:flex sm:gap-14"
                style={order(6)}
              >
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col-reverse justify-end"
                  >
                    <dt className="label mt-2 text-[10px] text-muted sm:text-[11px]">
                      {item.label}
                    </dt>
                    <dd className="display text-5xl tabular-nums sm:text-6xl">
                      <CountUp value={item.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="group pop-in absolute top-0 right-0 w-[38cqi] sm:static sm:col-span-5 sm:w-full sm:max-w-80 sm:justify-self-end lg:col-span-4 lg:col-start-9 lg:max-w-none">
              <div data-tilt className="relative">
                {/* Black-and-white photo multiplied onto yellow gives the two-colour print look; hover shows the original. */}
                <div className="relative isolate aspect-[1/1.14] overflow-hidden rounded-xl bg-accent transition-transform duration-500 ease-out sm:aspect-[4/5] sm:rotate-2 sm:rounded-3xl sm:group-hover:rotate-0">
                  <Image
                    src="/portrait.jpg"
                    alt={`Portrait of ${profile.name}`}
                    width={896}
                    height={1111}
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 40vw"
                    className="size-full object-cover object-top mix-blend-multiply brightness-110 contrast-125 grayscale"
                  />
                  <Image
                    src="/portrait.jpg"
                    alt=""
                    aria-hidden="true"
                    width={896}
                    height={1111}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 40vw"
                    className="absolute inset-0 size-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <OpenToWorkBadge />
              </div>
            </figure>
          </div>

          <LocalTime className="mt-12 border-t border-line pt-5 sm:mt-16" />
        </div>
      </div>
    </section>
  );
}

const outlineButton =
  "rounded-full border border-foreground/25 transition-colors hover:border-foreground";

function Actions() {
  return (
    <div
      className="rise mt-7 flex flex-wrap items-center gap-2.5"
      style={order(5)}
    >
      {/* The two main actions share a full row on phones; the profile links drop below. */}
      <div className="flex w-full gap-2.5 sm:w-auto">
        <a href="#projects" className="btn-primary flex-1 sm:flex-none">
          View projects
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/resume inline-flex h-11 flex-1 items-center justify-center gap-1.5 px-5 text-sm font-semibold active:scale-[0.98] sm:flex-none ${outlineButton}`}
        >
          Resume
          <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 group-hover/resume:translate-x-0.5 group-hover/resume:-translate-y-0.5" />
        </a>
      </div>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className={`inline-flex size-11 items-center justify-center text-muted hover:text-foreground active:scale-95 ${outlineButton}`}
      >
        <GithubIcon className="size-4.5" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className={`inline-flex size-11 items-center justify-center text-muted hover:text-foreground active:scale-95 ${outlineButton}`}
      >
        <LinkedinIcon className="size-4.5" />
      </a>
    </div>
  );
}

function Letters({ text, start }: { text: string; start: number }) {
  return text.split("").map((letter, index) => (
    <span key={index} className="hero-letter" style={order(start + index)}>
      {letter}
    </span>
  ));
}

/**
 * A stat such as "3.89" or "20+" whose digits count up from zero when the page opens.
 * The animation is CSS only; the real value stays in the page for screen readers.
 */
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(?:\.(\d+))?(.*)$/);
  if (!match) return value;
  const [, whole, fraction, suffix] = match;
  const target = (n: string) => ({ "--to": Number(n) }) as CSSProperties;

  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        <span className="count" style={target(whole)} />
        {fraction ? (
          <>
            .
            <span className="count count-padded" style={target(fraction)} />
          </>
        ) : null}
        {suffix}
      </span>
    </>
  );
}

/** Rotating seal pinned to the corner of the portrait. */
function OpenToWorkBadge() {
  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-9 -left-11 hidden size-28 place-items-center rounded-full bg-foreground text-background sm:grid"
    >
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0">
        <defs>
          <path
            id="badge-ring"
            d="M60 60m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0"
          />
        </defs>
        <text
          fill="currentColor"
          className="font-mono text-[10.5px] font-medium tracking-[0.08em] uppercase"
        >
          <textPath href="#badge-ring" textLength="264">
            Open to work ✦ Remote worldwide ✦ Addis Ababa ✦
          </textPath>
        </text>
      </svg>
      <FlowerMark className="size-9 text-accent" />
    </div>
  );
}
