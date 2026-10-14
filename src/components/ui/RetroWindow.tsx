import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A small framed "window" — a nod to early desktop UIs without copying any OS.
 * Title bar: three hollow squares, a filename and optional meta.
 */
export function RetroWindow({
  title,
  meta,
  children,
  className,
  bodyClassName,
  as: Tag = "div",
}: {
  title: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  as?: "div" | "article" | "aside" | "section";
}) {
  return (
    <Tag className={cn("border border-rule-strong bg-paper shadow-print", className)}>
      <div className="flex items-center gap-3 border-b border-rule-strong bg-paper-2 px-3 py-1.5">
        <span aria-hidden="true" className="flex gap-1">
          <span className="size-2 border border-ink-2" />
          <span className="size-2 border border-ink-2" />
          <span className="size-2 border border-ink-2" />
        </span>
        <span className="label-mono flex-1 truncate normal-case tracking-normal text-ink-2">{title}</span>
        {meta ? <span className="label-mono text-ink-3">{meta}</span> : null}
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </Tag>
  );
}
