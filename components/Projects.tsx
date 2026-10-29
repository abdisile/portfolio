import { profile, projects } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading index="03" label="Projects" title="Selected work" />
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Older repositories are on my previous account,{" "}
          <a
            href={profile.githubPrevious}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            {profile.githubPreviousLabel}
          </a>
          . New work is on{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            {profile.githubLabel}
          </a>
          .
        </p>
        <div>
          {projects.map((project, index) => {
            const extra = "extra" in project ? project.extra : undefined;
            return (
              <article
                key={project.title}
                className="group border-b border-line py-7 transition-colors hover:border-foreground"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-serif text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    <span className="mr-3 font-mono text-xs tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                    <span className="ml-3 font-sans text-sm font-normal text-muted">
                      {project.subtitle}
                    </span>
                  </h3>
                  <div className="flex gap-4 font-mono text-[11px] tracking-[0.16em] uppercase">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      Code
                    </a>
                    {extra ? (
                      <a
                        href={extra.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                      >
                        {extra.label}
                      </a>
                    ) : null}
                  </div>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <p className="mt-3 font-mono text-[11px] tracking-wide text-muted">
                  {project.stack.join("  ·  ")}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
