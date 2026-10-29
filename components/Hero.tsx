import Image from "next/image";
import { highlights, profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-24 flex-col"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-between px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid flex-1 content-center items-center gap-8 sm:grid-cols-[minmax(0,1fr)_16rem] sm:gap-14 lg:gap-16">
          <div className="rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3.5 py-1.5 shadow-xs backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-foreground uppercase">
                Available for work & roles
              </span>
            </div>

            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl sm:leading-none lg:text-6xl">
              {profile.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-3.5 sm:gap-3">
              <h2 className="font-serif text-xl tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Software Engineer
              </h2>
              <span className="text-line select-none">/</span>
              <span className="font-mono text-xs tracking-[0.12em] text-muted uppercase sm:text-sm">
                Full-Stack Developer
              </span>
            </div>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Full-stack engineer building fast, reliable web applications and products end to end, from robust APIs to polished interfaces.
            </p>

            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-3">
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:opacity-85 active:scale-[0.98]"
                >
                  View projects
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-line bg-card/60 px-4.5 text-sm font-medium text-foreground transition-all hover:border-foreground/50 hover:bg-card active:scale-[0.98]"
                >
                  <span>Resume</span>
                  <span className="text-xs text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground">
                    ↗
                  </span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-9.5 items-center gap-2 rounded-full border border-line bg-card/60 px-4 text-xs font-mono tracking-wider text-muted uppercase transition-all hover:border-foreground hover:text-foreground active:scale-95 sm:size-10 sm:h-10 sm:justify-center sm:p-0"
                >
                  <GithubIcon className="size-4" />
                  <span className="sm:hidden">GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-9.5 items-center gap-2 rounded-full border border-line bg-card/60 px-4 text-xs font-mono tracking-wider text-muted uppercase transition-all hover:border-foreground hover:text-foreground active:scale-95 sm:size-10 sm:h-10 sm:justify-center sm:p-0"
                >
                  <LinkedinIcon className="size-4" />
                  <span className="sm:hidden">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <figure className="group rise rise-delay relative w-full max-w-[13.5rem] justify-self-center sm:max-w-none sm:justify-self-end">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-card/80 p-2 shadow-xs transition-all duration-500 group-hover:border-foreground/30 sm:rounded-3xl sm:p-2.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted/10 sm:rounded-2xl">
                <Image
                  src="/portrait.jpg"
                  alt={`Portrait of ${profile.name}`}
                  width={896}
                  height={1111}
                  priority
                  className="h-full w-full object-cover grayscale contrast-[1.02] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </div>
          </figure>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-end sm:justify-between">
          <dl className="grid grid-cols-3 gap-3 sm:flex sm:gap-12">
            {highlights.map((item) => (
              <div key={item.label}>
                <dd className="font-serif text-3xl leading-none tracking-tight sm:text-4xl">
                  {item.value}
                </dd>
                <dt className="mt-1.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase sm:text-[11px]">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="pt-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase sm:pt-0">
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.8v-7.6h-2.8M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}
