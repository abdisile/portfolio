import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading index="06" label="Contact" title="Let's connect" />

        <div className="mt-10 space-y-8">
          {/* Top: Quick Connect Channels */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex flex-col justify-between rounded-xl border border-line bg-card/60 p-3 sm:p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-line bg-background text-foreground transition-colors group-hover:border-foreground/40">
                    <MailIcon className="size-4" />
                  </div>
                  <ArrowUpRightIcon className="size-3.5 sm:size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="mt-3 sm:mt-4 min-w-0">
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] text-muted uppercase">
                    Direct Email
                  </p>
                  <p className="mt-0.5 truncate text-xs sm:text-sm font-medium text-foreground">
                    {profile.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-line bg-card/60 p-3 sm:p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-line bg-background text-foreground transition-colors group-hover:border-foreground/40">
                    <LinkedinIcon className="size-4" />
                  </div>
                  <ArrowUpRightIcon className="size-3.5 sm:size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="mt-3 sm:mt-4 min-w-0">
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] text-muted uppercase">
                    LinkedIn
                  </p>
                  <p className="mt-0.5 truncate text-xs sm:text-sm font-medium text-foreground">
                    {profile.linkedinLabel}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-line bg-card/60 p-3 sm:p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-line bg-background text-foreground transition-colors group-hover:border-foreground/40">
                    <GithubIcon className="size-4" />
                  </div>
                  <ArrowUpRightIcon className="size-3.5 sm:size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="mt-3 sm:mt-4 min-w-0">
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] text-muted uppercase">
                    GitHub
                  </p>
                  <p className="mt-0.5 truncate text-xs sm:text-sm font-medium text-foreground">
                    {profile.githubLabel}
                  </p>
                </div>
              </a>

              {/* Telegram */}
              <a
                href={profile.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-line bg-card/60 p-3 sm:p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-line bg-background text-foreground transition-colors group-hover:border-foreground/40">
                    <TelegramIcon className="size-4" />
                  </div>
                  <ArrowUpRightIcon className="size-3.5 sm:size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="mt-3 sm:mt-4 min-w-0">
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] text-muted uppercase">
                    Telegram
                  </p>
                  <p className="mt-0.5 truncate text-xs sm:text-sm font-medium text-foreground">
                    {profile.telegramLabel}
                  </p>
                </div>
              </a>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3.5 py-1.5 shadow-xs backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-foreground uppercase">
                  Open for work & conversations
                </span>
              </div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                Available worldwide · Remote
              </p>
            </div>
          </div>

          {/* Bottom: Spacious Full-Width Contact Form */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-card/80 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-foreground/30 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">Send a note</h3>
                <p className="mt-1 text-sm text-muted">
                  Have an opportunity or project in mind? Drop a message directly.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-card/60 px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.16em] text-foreground uppercase shadow-xs backdrop-blur-xs">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Direct inbox
              </div>
            </div>
            <div className="mt-8 border-t border-line/80 pt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.8v-7.6h-2.8M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function TelegramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.674c.458 0 .66-.21.916-.458l2.199-2.138 4.574 3.379c.843.464 1.448.225 1.658-.783l2.997-14.125c.307-1.23-.469-1.787-1.507-1.316z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}
