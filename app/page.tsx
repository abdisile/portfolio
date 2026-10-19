import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] tracking-[0.14em] text-muted uppercase sm:px-8">
          <p>© 2026 {profile.fullName}</p>
          <p>{profile.location}</p>
          <a href="#home" className="text-foreground hover:underline">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
