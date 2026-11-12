"use client";

import { useEffect } from "react";

/** How far, in degrees, a [data-tilt] element leans toward the pointer. */
const MAX_TILT = 9;

/**
 * Everything that follows the mouse, driven from one listener:
 * the soft glow behind the page, the light inside [data-spot] cards,
 * and the lean of [data-tilt] elements.
 *
 * Does nothing on touch screens or when the visitor asks for reduced motion.
 */
export function PointerEffects() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const root = document.documentElement;
    let frame = 0;
    let x = 0;
    let y = 0;
    let target: EventTarget | null = null;
    let tilted: HTMLElement | null = null;

    function release() {
      tilted?.style.removeProperty("--rx");
      tilted?.style.removeProperty("--ry");
      tilted = null;
    }

    // Pointer events can fire several times per frame; write styles once per frame.
    function apply() {
      frame = 0;
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
      root.classList.add("has-pointer");

      const element = target instanceof Element ? target : null;

      const spot = element?.closest<HTMLElement>("[data-spot]");
      if (spot) {
        const box = spot.getBoundingClientRect();
        spot.style.setProperty("--sx", `${x - box.left}px`);
        spot.style.setProperty("--sy", `${y - box.top}px`);
      }

      const tilt = element?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilted !== tilt) release();
      if (tilt) {
        const box = tilt.getBoundingClientRect();
        const across = (x - box.left) / box.width - 0.5;
        const down = (y - box.top) / box.height - 0.5;
        tilt.style.setProperty("--ry", `${(across * MAX_TILT).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-down * MAX_TILT).toFixed(2)}deg`);
        tilted = tilt;
      }
    }

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      target = event.target;
      if (!frame) frame = requestAnimationFrame(apply);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", release);
    return () => {
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", release);
      cancelAnimationFrame(frame);
      release();
      root.classList.remove("has-pointer");
    };
  }, []);

  return <div aria-hidden="true" className="pointer-glow" />;
}
