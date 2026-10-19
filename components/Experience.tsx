import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading index="02" label="Experience" title="Roles" />
        <ol>
          {experience.map((role) => {
            const orgUrl = "orgUrl" in role ? role.orgUrl : undefined;
            return (
              <li
                key={`${role.org}-${role.dates}`}
                className="grid gap-3 border-b border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  {role.dates}
                </p>
                <div className="group">
                  <h3 className="font-serif text-2xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {role.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {orgUrl ? (
                      <a
                        href={orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                      >
                        {role.org}
                      </a>
                    ) : (
                      <span className="text-foreground">{role.org}</span>
                    )}
                    <span> · {role.place}</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
