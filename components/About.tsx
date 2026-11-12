import type { CSSProperties } from "react";
import { LocalTime } from "@/components/LocalTime";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/lib/content";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Now", value: `${profile.role} at ${profile.company}` },
  { label: "Degree", value: "B.Eng. Software Engineering, 2nd in class" },
  { label: "Works", value: "Remote, available worldwide" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="01" label="About" title="What I do" />
        <div className="mt-10 grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div data-reveal className="space-y-6 lg:col-span-7">
            <p className="text-2xl leading-snug font-medium tracking-tight text-pretty sm:text-[2rem] sm:leading-[1.25]">
              I am {profile.fullName}, a software engineer and full-stack
              developer. I take a feature from{" "}
              <span className="mark">
                the database and the API through to the screen
              </span>
              , then make sure what ships is something another engineer can
              pick up.
            </p>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Alongside product work, I design and ship custom web apps for
              local businesses, from the first requirement through to something
              people can use.
            </p>
          </div>

          <dl
            data-reveal
            style={{ "--reveal-i": 1 } as CSSProperties}
            className="self-start border-t border-line lg:col-span-4 lg:col-start-9"
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3.5"
              >
                <dt className="label pt-0.5 text-muted">{fact.label}</dt>
                <dd className="text-sm leading-snug font-medium">
                  {fact.value}
                </dd>
              </div>
            ))}
            <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3.5">
              <dt className="label pt-0.5 text-muted">Clock</dt>
              <dd className="text-sm leading-snug font-medium">
                <LocalTime variant="compact" className="text-[13px]" /> in
                Addis Ababa
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
