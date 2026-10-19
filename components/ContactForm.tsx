"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/content";

const fieldClass =
  "w-full border border-line bg-background px-4 py-3 text-base outline-none transition focus:border-foreground";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-[11px] tracking-[0.16em] uppercase"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-[11px] tracking-[0.16em] uppercase"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[11px] tracking-[0.16em] uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="What would you like to talk about?"
        />
      </div>
      <button
        type="submit"
        className="bg-foreground px-5 py-3 text-sm text-background transition-opacity hover:opacity-80"
      >
        Send message
      </button>
      {opened ? (
        <p className="text-sm leading-relaxed text-muted">
          Your email app should open with this note. If it does not, write
          directly to{" "}
          <a className="underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      ) : (
        <p className="text-sm text-muted">
          Sending opens your email app. Nothing is stored on this site.
        </p>
      )}
    </form>
  );
}
