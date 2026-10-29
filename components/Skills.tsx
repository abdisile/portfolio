import { skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading index="04" label="Skills" title="Tools" />
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {group.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
