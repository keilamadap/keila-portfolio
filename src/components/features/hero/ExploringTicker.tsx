"use client";

import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Cycles through what I'm currently exploring with a soft text transition.
 * The full list is always available to screen readers; the animation is visual only.
 */
export function ExploringTicker({ items }: { items: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 3200);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  return (
    <span
      className="relative inline-flex min-h-[1.6em] items-baseline"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="sr-only">{items.join(", ")}</span>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={items[index]}
              aria-hidden="true"
              initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {items[index]}
            </m.span>
          </AnimatePresence>
        </MotionConfig>
      </LazyMotion>
      <span aria-hidden="true" className="caret ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-accent" />
    </span>
  );
}
