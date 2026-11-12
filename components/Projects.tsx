"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { profile, projects, type Project } from "@/lib/content";

const AI_TOOLS = ["OpenAI", "Gemini"];

const filters = ["All", "AI", "Next.js", "TypeScript", "React", "Express"];

function matches(project: Project, filter: string) {
  if (filter === "All") return true;
  if (filter === "AI") return project.stack.some((s) => AI_TOOLS.includes(s));
  return project.stack.includes(filter);
}

const underline =
  "underline decoration-current/30 underline-offset-4 hover:decoration-current";

/** Code and API links. project-secondary is what hides the trailing disc while they are hovered. */
const secondaryLink = `project-secondary label inline-flex items-center gap-1.5 ${underline}`;

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((project) => matches(project, filter));

  // Feeds the pointer position to the disc that trails it across the list.
  function trackPointer(event: PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const { style } = event.currentTarget;
    style.setProperty("--cx", `${event.clientX - box.left}px`);
    style.setProperty("--cy", `${event.clientY - box.top}px`);
  }

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="03" label="Projects" title="Selected work">
          Older repositories are on my previous account,{" "}
          <a
            href={profile.githubPrevious}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-foreground ${underline}`}
          >
            {profile.githubPreviousLabel}
          </a>
          . New work is on{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-foreground ${underline}`}
          >
            {profile.githubLabel}
          </a>
          .
        </SectionHeading>

        <div
          data-reveal
          role="group"
          aria-label="Filter projects by technology"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {filters.map((name) => {
            const selected = name === filter;
            const count = projects.filter((p) => matches(p, name)).length;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(name)}
                className={`label inline-flex h-9 items-center gap-2 rounded-full border px-4 transition-colors ${
                  selected
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-foreground/25 text-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                {name}
                <span className={selected ? "opacity-60" : "opacity-50"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="project-list relative mt-8"
          onPointerMove={trackPointer}
        >
          {/* Keyed by filter so the rows replay their entrance when the selection changes. */}
          <ol key={filter} className="border-t border-line">
            {visible.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                number={projects.indexOf(project) + 1}
                order={index}
              />
            ))}
          </ol>
          <div aria-hidden="true" className="project-cursor">
            <span className="label flex flex-col items-center gap-1 text-[10px]">
              <ArrowUpRightIcon className="size-5" />
              Open
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * One project as a full-width row. The whole row opens the live site;
 * the Code and API links sit above that so they stay clickable on their own.
 */
function ProjectRow({
  project,
  number,
  order,
}: {
  project: Project;
  number: number;
  order: number;
}) {
  return (
    <li
      className="project-row relative border-b border-line"
      style={{ "--i": order } as CSSProperties}
    >
      <span aria-hidden="true" className="project-fill" />
      <div className="relative grid gap-x-8 gap-y-4 py-7 sm:py-9 lg:grid-cols-12 lg:items-center lg:px-5">
        <p className="project-soft label lg:col-span-1">
          {String(number).padStart(2, "0")}
        </p>

        <h3 className="project-name display text-[clamp(2.75rem,13vw,4.5rem)] lg:col-span-4 lg:text-[clamp(3rem,5vw,4.5rem)]">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {project.title}
            <span className="sr-only">: open the live site</span>
          </a>
        </h3>

        <div className="lg:col-span-4">
          <p className="project-soft label">{project.subtitle}</p>
          <p className="mt-2 text-[15px] leading-relaxed">{project.summary}</p>
          <p className="project-soft mt-3 font-mono text-[11px] tracking-wide">
            {project.stack.join("  ·  ")}
          </p>
        </div>

        <div className="flex items-center justify-between gap-5 lg:col-span-3 lg:justify-end">
          <div className="relative z-10 flex gap-4">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryLink}
            >
              <GithubIcon className="size-3.5" />
              Code
            </a>
            {project.extra ? (
              <a
                href={project.extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryLink}
              >
                <GithubIcon className="size-3.5" />
                {project.extra.label}
              </a>
            ) : null}
          </div>
          <span
            aria-hidden="true"
            className="project-arrow grid size-11 shrink-0 place-items-center rounded-full"
          >
            <ArrowUpRightIcon className="size-4" />
          </span>
        </div>
      </div>
    </li>
  );
}
