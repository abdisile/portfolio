import type { CSSProperties } from "react";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { LocalTime } from "@/components/LocalTime";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TelegramIcon,
} from "@/components/icons";
import { profile } from "@/lib/content";

const channels = [
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    Icon: GithubIcon,
  },
  {
    label: "Telegram",
    value: profile.telegramLabel,
    href: profile.telegram,
    Icon: TelegramIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="06" label="Contact" title="Let's connect">
          <span className="inline-flex items-center gap-2 text-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open for work and conversations
          </span>
          <br />
          Available worldwide, remote. It is{" "}
          <LocalTime variant="compact" className="text-xs text-foreground" /> in
          Addis Ababa.
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex min-w-0 flex-col gap-4 lg:col-span-5">
            <div
              data-reveal
              className="rounded-3xl bg-accent p-6 text-accent-ink sm:p-8"
            >
              <p className="label flex items-center gap-2 font-semibold">
                <MailIcon className="size-4" />
                Direct email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="display-sm mt-8 block text-[clamp(1.3rem,5.9vw,2.1rem)] break-all normal-case underline decoration-accent-ink/30 decoration-2 underline-offset-[6px] hover:decoration-accent-ink lg:text-[1.75rem]"
              >
                {profile.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-accent-ink px-5 text-sm font-semibold text-accent transition-opacity hover:opacity-85"
                >
                  Write to me
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
                <CopyEmail email={profile.email} />
              </div>
            </div>

            {/* grid-cols-1 keeps a long handle from stretching the column wider than the screen. */}
            <ul className="grid grid-cols-1 gap-3">
              {channels.map(({ label, value, href, Icon }, index) => (
                <li
                  key={label}
                  data-reveal
                  style={{ "--reveal-i": index + 1 } as CSSProperties}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-spot
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 transition-colors hover:border-foreground/40"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="label block text-muted">{label}</span>
                      <span className="mt-0.5 block truncate text-sm font-medium">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-reveal
            data-spot
            style={{ "--reveal-i": 1 } as CSSProperties}
            className="rounded-3xl border border-line bg-card p-6 sm:p-8 lg:col-span-7"
          >
            <h3 className="display-sm text-3xl sm:text-4xl">Send a note</h3>
            <p className="mt-2 text-sm text-muted">
              Have an opportunity or project in mind? Drop a message directly.
            </p>
            <div className="mt-7 border-t border-line pt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
