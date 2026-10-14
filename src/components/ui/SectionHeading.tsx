import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowLink } from "./ArrowLink";
import { MonoLabel } from "./MonoLabel";

type SectionHeadingProps = {
  /** Editorial section number, e.g. "01" */
  number: string;
  /** Running head, e.g. "Selected Work" */
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: { href: string; label: string };
  id?: string;
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Magazine-style section opener:
 * a running head (§ 01 — Label · action) over a large serif title and a short intro.
 */
export function SectionHeading({ number, label, title, intro, action, id, as: Heading = "h2", className }: SectionHeadingProps) {
  return (
    <header className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center justify-between gap-4 border-t border-rule-strong pt-3">
        <MonoLabel tone="ink">
          <span className="text-accent">§ {number}</span>
          <span aria-hidden="true" className="mx-2 text-ink-3">
            —
          </span>
          {label}
        </MonoLabel>
        {action ? (
          <span className="hidden sm:block">
            <ArrowLink href={action.href} className="label-mono">
              {action.label}
            </ArrowLink>
          </span>
        ) : null}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
        <Heading id={id} className="text-h2 md:col-span-7 lg:col-span-8">
          {title}
        </Heading>
        {intro ? <div className="text-ink-2 md:col-span-5 lg:col-span-4 md:pb-2">{intro}</div> : null}
      </div>
      {action ? (
        <span className="mt-6 block sm:hidden">
          <ArrowLink href={action.href} className="label-mono">
            {action.label}
          </ArrowLink>
        </span>
      ) : null}
    </header>
  );
}
