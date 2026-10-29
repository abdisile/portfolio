"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 sm:px-8">
        <a href="#home" className="text-sm tracking-tight">
          <span className="font-serif text-lg">{profile.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 font-mono text-[11px] tracking-[0.16em] text-muted uppercase md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            Resume ↗
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg border border-line bg-card/60 text-foreground transition-colors hover:border-foreground"
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

      {/* Enhanced Mobile Drawer */}
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-background/95 px-6 py-4 shadow-lg backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-4xl flex-col space-y-1 font-mono text-xs tracking-[0.14em] uppercase">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/40 py-2.5 text-muted transition-colors hover:text-foreground"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-muted/60">→</span>
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 font-medium text-foreground transition-colors hover:text-foreground"
            >
              <span>Resume</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </nav>
      ) : null}
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
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
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
