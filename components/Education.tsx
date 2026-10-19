import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading index="05" label="Education" title="Degree" />
        <article className="mt-8 grid gap-3 border-b border-line pb-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            May 2022
            <span className="mt-1 block">Jul 2026</span>
          </p>
          <div>
            <h3 className="font-serif text-2xl tracking-tight">
              B.Eng. Software Engineering
            </h3>
            <p className="mt-1 text-sm text-muted">
              Adama Science and Technology University · Adama
            </p>
            <dl className="mt-5 grid max-w-xs grid-cols-2 gap-6 border-t border-line pt-5">
              <div>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  CGPA
                </dt>
                <dd className="mt-1 font-serif text-xl tracking-tight">
                  3.89 / 4.00
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  Class rank
                </dt>
                <dd className="mt-1 font-serif text-xl tracking-tight">
                  2nd in class
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Coursework included data structures, databases, distributed
              systems, and machine learning.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
