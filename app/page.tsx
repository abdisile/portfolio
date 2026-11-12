import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PointerEffects } from "@/components/PointerEffects";
import { Projects } from "@/components/Projects";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { FlowerMark, Mark } from "@/components/icons";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Opening curtain: a yellow panel and a dark one lift away in turn. */}
      <div aria-hidden="true" className="intro-panel intro-back" />
      <div aria-hidden="true" className="intro-panel intro-front">
        <FlowerMark className="size-16" />
      </div>

      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="overflow-x-clip border-t border-line">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:px-8 sm:pt-16">
          <div className="@container">
            <p
              aria-hidden="true"
              className="display footer-name whitespace-nowrap"
            >
              {profile.name}
            </p>
          </div>
          <div className="label mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-muted">
            <p className="flex items-center gap-2.5">
              <Mark className="size-5" />© 2026 {profile.fullName}
            </p>
            <p>{profile.location}</p>
            <a href="#home" className="text-foreground hover:underline">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
      <ScrollReveal />
      <PointerEffects />
    </>
  );
}
