import { cn } from "@/lib/utils";

type Tone = "live" | "draft" | "neutral";

/** Tiny status indicator: dot + mono label. */
export function StatusBadge({ children, tone = "neutral", className }: { children: string; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center gap-2 rounded-full border px-2.5 py-1",
        tone === "live" && "border-accent/40 text-accent",
        tone === "draft" && "border-dashed border-rule-strong/40 text-ink-2",
        tone === "neutral" && "border-rule text-ink-2",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          tone === "live" && "bg-accent",
          tone === "draft" && "border border-ink-2",
          tone === "neutral" && "bg-ink-3",
        )}
      />
      {children}
    </span>
  );
}
