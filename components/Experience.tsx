import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="02" label="Experience" title="Roles" />
        <ol className="rail mt-10">
          {experience.map((role) => {
            const current = role.dates.includes("Present");
            return (
              <li
                key={`${role.org}-${role.dates}`}
                data-reveal
                className="group relative grid gap-x-10 gap-y-2 py-7 pl-8 md:grid-cols-[calc(var(--rail-x)-2.5rem)_1fr] md:pl-0"
              >
                <p className="label pt-1.5 text-muted">{role.dates}</p>

                <div className="relative md:pl-10">
                  {/* Node on the rail. Filled for roles still running. */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-2 -left-8 z-10 size-3 rounded-full border-2 border-signal transition-transform duration-300 group-hover:scale-125 md:left-0 md:-ml-1.5 ${
                      current ? "bg-accent" : "bg-background"
                    }`}
                  />
                  <div className="grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                    <div>
                      <h3 className="display-sm flex flex-wrap items-center gap-x-3 gap-y-1 text-3xl transition-transform duration-500 ease-out group-hover:translate-x-1.5 sm:text-4xl">
                        {role.role}
                        {current ? (
                          <span className="label rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-ink">
                            Now
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        {role.orgUrl ? (
                          <a
                            href={role.orgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                          >
                            {role.org}
                          </a>
                        ) : (
                          <span className="font-semibold text-foreground">
                            {role.org}
                          </span>
                        )}
                        <span> · {role.place}</span>
                      </p>
                    </div>
                    <ul className="space-y-2 text-[15px] leading-relaxed">
                      {role.points.map((point) => (
                        <li key={point} className="relative pl-5">
                          <span
                            aria-hidden="true"
                            className="absolute top-[0.7em] left-0 h-px w-2.5 bg-muted"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
