"use client";

import { useEffect } from "react";

/**
 * Fades in every [data-reveal] element as it scrolls into view.
 *
 * Elements already on screen are marked first, and only then does the page
 * opt in to hiding the rest. If this never runs, nothing is hidden.
 */
export function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!("IntersectionObserver" in window)) return;

    for (const node of nodes) {
      if (node.getBoundingClientRect().top < window.innerHeight) {
        node.setAttribute("data-in", "");
      }
    }
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    for (const node of nodes) {
      if (!node.hasAttribute("data-in")) observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
