import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small uppercase monospace label — the "metadata" voice of the site. */
export function MonoLabel({
  children,
  className,
  as: Tag = "span",
  tone = "muted",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "dt" | "dd" | "div" | "li";
  tone?: "muted" | "ink" | "accent";
}) {
  return (
    <Tag
      className={cn(
        "label-mono",
        tone === "muted" && "text-ink-3",
        tone === "ink" && "text-ink",
        tone === "accent" && "text-accent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
