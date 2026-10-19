import Image from "next/image";
import { highlights, profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-24 flex-col"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-between px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid flex-1 content-center items-center gap-8 sm:grid-cols-[minmax(0,1fr)_15rem] sm:gap-14">
          <div className="rise">
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              Software engineer
              <span className="mx-2 text-foreground/30">/</span>
              Full-stack developer
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-none tracking-tight sm:text-6xl">
              Abdi Sileshi
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              I build web products end to end: schema, API, and the screen a
              person actually uses.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-80"
              >
                View projects
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line px-5 py-3 text-sm transition-colors hover:border-foreground"
              >
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="px-3 py-3 text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>

          <figure className="rise rise-delay w-full max-w-[11.5rem] sm:max-w-none sm:justify-self-end">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Abdi Sileshi"
              width={896}
              height={1111}
              priority
              className="h-auto w-full grayscale transition duration-500 ease-out hover:grayscale-0"
            />
          </figure>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-line pt-5 sm:flex-row sm:items-end sm:justify-between">
          <dl className="flex gap-10 sm:gap-14">
            {highlights.map((item) => (
              <div key={item.value}>
                <dd className="font-serif text-4xl leading-none tracking-tight">
                  {item.value}
                </dd>
                <dt className="mt-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
