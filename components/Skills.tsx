import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, FlowerMark } from "@/components/icons";
import { skillBasics, skillStages } from "@/lib/content";

const chip =
  "rounded-full border border-line px-3 py-1.5 text-[13px] leading-none font-medium";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="04" label="Skills" title="Tools">
          Laid out in the order a feature travels: from the database, through
          the API, to the screen, and out to users.
        </SectionHeading>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillStages.map((stage, index) => {
            const last = index === skillStages.length - 1;
            return (
              <li
                key={stage.title}
                data-reveal
                data-spot
                style={{ "--reveal-i": index } as CSSProperties}
                className="group relative overflow-hidden rounded-3xl border border-line bg-card p-6 transition-colors hover:border-foreground/40"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <p className="label flex items-center justify-between text-muted">
                  <span>Step {String(index + 1).padStart(2, "0")}</span>
                  {last ? (
                    <FlowerMark className="size-4 text-signal" />
                  ) : (
                    <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </p>
                <h3 className="display mt-8 text-6xl">{stage.title}</h3>
                <p className="mt-2 text-sm text-muted">{stage.caption}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {stage.items.map((item) => (
                    <li key={item} className={chip}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {skillBasics.map((group, index) => (
            <div
              key={group.title}
              data-reveal
              data-spot
              style={{ "--reveal-i": index } as CSSProperties}
              className="rounded-3xl border border-line p-6"
            >
              <h3 className="label text-muted">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className={chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
