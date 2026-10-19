"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6 sm:px-8">
        <a href="#home" className="text-sm tracking-tight">
          <span className="font-serif text-lg">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-6 font-mono text-[11px] tracking-[0.16em] text-muted uppercase md:flex">
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
            className="border border-foreground bg-foreground px-3 py-2 text-background transition-opacity hover:opacity-80"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="border border-foreground px-3 py-2 font-mono text-[11px] tracking-[0.16em] uppercase"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <ThemeToggle />
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-3 px-1 font-mono text-[11px] tracking-[0.16em] uppercase">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1"
            >
              Resume
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
