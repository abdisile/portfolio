import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading index="01" label="About" title="What I do" />
        <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            I am {profile.fullName}, a software engineer and full-stack
            developer. I take a feature from the database and the API through
            to the screen, then make sure what ships is something another
            engineer can pick up.
          </p>
          <p>
            Alongside product work, I design and ship custom web apps for local
            businesses, from the first requirement through to something people
            can use.
          </p>
        </div>
      </div>
    </section>
  );
}
