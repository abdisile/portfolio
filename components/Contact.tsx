import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/lib/content";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    note: "Current account",
    previous: {
      value: profile.githubPreviousLabel,
      href: profile.githubPrevious,
    },
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    label: "Telegram",
    value: profile.telegramLabel,
    href: profile.telegram,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's connect"
          summary="Addis Ababa. Open to a conversation about engineering work."
        />
        <div className="mt-10 grid gap-12">
          <ul>
            {channels.map((channel) => (
              <li
                key={channel.label}
                className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[8rem_minmax(0,1fr)]"
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {channel.label}
                </p>
                <div className="min-w-0">
                  {"note" in channel && channel.note ? (
                    <p className="mb-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                      {channel.note}
                    </p>
                  ) : null}
                  <a
                    href={channel.href}
                    className="underline decoration-foreground/30 underline-offset-4 break-words hover:decoration-foreground"
                    {...(channel.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {channel.value}
                  </a>
                  {"previous" in channel && channel.previous ? (
                    <p className="mt-2 text-sm text-muted">
                      <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
                        Previous
                      </span>{" "}
                      <a
                        href={channel.previous.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                      >
                        {channel.previous.value}
                      </a>
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          <div className="border border-foreground bg-card p-6 sm:p-8">
            <h3 className="font-serif text-2xl tracking-tight">Send a note</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
