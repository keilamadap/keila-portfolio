"use client";

import { LazyMotion, domAnimation, m, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Subtle reveal-on-scroll. Renders content visible on the server; the
 * animation only adds a 12px lift + fade once, and respects reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const Component = m[as];
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Component
          className={className}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </Component>
      </MotionConfig>
    </LazyMotion>
  );
}
