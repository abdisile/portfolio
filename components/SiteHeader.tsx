"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUpRightIcon, Mark } from "@/components/icons";
import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

/** The section currently crossing the middle of the screen, as a hash like "#projects". */
function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["#home", ...links.map((link) => link.href)]
      .map((hash) => document.querySelector(hash))
      .filter((node) => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <Mark className="size-7 transition-transform duration-500 group-hover:rotate-90" />
          <span className="display-sm text-xl tracking-tight">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const current = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={`label rounded-full px-3 py-2 transition-colors ${
                  current
                    ? "bg-accent text-accent-ink"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="label ml-2 inline-flex items-center gap-1.5 rounded-full border border-foreground/25 px-3.5 py-2 transition-colors hover:border-foreground"
          >
            Resume
            <ArrowUpRightIcon className="size-3" />
          </a>
          <ThemeToggle className="ml-1" />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-colors hover:border-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="size-4.5" />
            ) : (
              <MenuIcon className="size-4.5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-background px-5 pt-2 pb-5 shadow-lg sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-line py-3"
              >
                <span className="display-sm text-3xl">{link.label}</span>
                <span className="label text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-5"
            >
              Resume
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          </div>
        </nav>
      ) : null}

      <span
        aria-hidden="true"
        className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-signal"
      />
    </header>
  );
}

function MenuIcon({ className = "size-4" }: { className?: string }) {
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
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
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
