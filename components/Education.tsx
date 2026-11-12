import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="05" label="Education" title="Degree" />
        <article
          data-reveal
          className="mt-10 grid gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="label text-muted">May 2022 – Jul 2026</p>
            <h3 className="display-sm mt-4 text-4xl text-balance sm:text-6xl">
              B.Eng. Software Engineering
            </h3>
            <p className="mt-4 text-lg text-muted">
              Adama Science and Technology University · Adama
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Coursework included data structures, databases, distributed
              systems, and machine learning.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="flex flex-col-reverse justify-between gap-10 rounded-3xl bg-accent p-5 text-accent-ink sm:p-6">
              <dd>
                <span className="display block text-7xl sm:text-8xl">3.89</span>
                <span className="label mt-2 block">out of 4.00</span>
              </dd>
              <dt className="label font-semibold">CGPA</dt>
            </div>
            <div className="flex flex-col-reverse justify-between gap-10 rounded-3xl border border-foreground p-5 sm:p-6">
              <dd>
                <span className="display block text-7xl sm:text-8xl">2nd</span>
                <span className="label mt-2 block text-muted">in class</span>
              </dd>
              <dt className="label font-semibold">Class rank</dt>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}
