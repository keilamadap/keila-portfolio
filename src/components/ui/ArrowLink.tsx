import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  direction?: "right" | "left" | "up-right";
};

const ARROWS = { right: "→", left: "←", "up-right": "↗" } as const;

/** Text link with an arrow that nudges on hover (CSS only). */
export function ArrowLink({ href, children, className, external, direction = external ? "up-right" : "right" }: ArrowLinkProps) {
  const arrow = (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block transition-transform duration-300 ease-[var(--ease-editorial)]",
        direction === "right" && "group-hover:translate-x-1",
        direction === "left" && "group-hover:-translate-x-1",
        direction === "up-right" && "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
      )}
    >
      {ARROWS[direction]}
    </span>
  );
  const content = (
    <>
      {direction === "left" ? arrow : null}
      <span className="link-editorial">{children}</span>
      {direction !== "left" ? arrow : null}
    </>
  );
  const classes = cn("group inline-flex items-center gap-2 text-ink hover:text-accent transition-colors", className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
