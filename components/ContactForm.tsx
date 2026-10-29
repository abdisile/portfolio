"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

const fieldClass =
  "w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition focus:border-foreground focus:bg-background focus:ring-1 focus:ring-foreground/20 outline-none";

const WEB3FORMS_ACCESS_KEY = "ae571f37-8e03-4b62-a37a-c558f552db2e";

type ToastState = {
  type: "success" | "error";
  title: string;
  message: string;
} | null;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  function triggerToast(type: "success" | "error", title: string, message: string) {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ type, title, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 5500);
  }

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        triggerToast(
          "success",
          "Note delivered successfully",
          "Thank you for reaching out! Your message was sent to my inbox and I will get back to you shortly."
        );
      } else {
        triggerToast(
          "error",
          "Submission error",
          data.message || `Could not deliver your note. Please write directly to ${profile.email}.`
        );
      }
    } catch {
      triggerToast(
        "error",
        "Connection error",
        `Could not reach the server. Please write directly to ${profile.email}.`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-5">
        {/* Spam Prevention Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <input
          type="hidden"
          name="from_name"
          value="Portfolio Contact Form"
        />
        <input
          type="hidden"
          name="subject"
          value="New message from portfolio visitor"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
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
              placeholder="Alex Johnson"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
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
              placeholder="alex@company.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${fieldClass} resize-y`}
            placeholder="Tell me about your project, timeline, or open role..."
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <LoadingSpinner className="size-4 animate-spin" />
                <span>Sending note...</span>
              </>
            ) : (
              <>
                <span>Send note</span>
                <span className="font-mono text-xs">→</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Floating Web-level Toast Notification */}
      {toast ? (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex w-[calc(100vw-3rem)] max-w-sm items-start gap-3.5 rounded-2xl border border-line bg-card/95 p-4 shadow-2xl backdrop-blur-md sm:w-[23rem]"
        >
          <div
            className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
              toast.type === "success"
                ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                : "bg-rose-500/15 text-rose-600 dark:text-rose-400"
            }`}
          >
            {toast.type === "success" ? (
              <CheckIcon className="size-5" />
            ) : (
              <AlertIcon className="size-5" />
            )}
          </div>
          <div className="min-w-0 flex-1 pr-1">
            <p className="font-serif text-sm font-medium tracking-tight text-foreground">
              {toast.title}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted">
              {toast.message}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="shrink-0 p-1 text-muted transition-colors hover:text-foreground"
            aria-label="Dismiss notification"
          >
            <CloseIcon className="size-4" />
          </button>
        </aside>
      ) : null}
    </>
  );
}

function CheckIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AlertIcon({ className = "size-4" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CloseIcon({ className = "size-4" }: { className?: string }) {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function LoadingSpinner({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
