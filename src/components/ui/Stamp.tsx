import { cn } from "@/lib/utils";

/** Rubber-stamp mark. Decorative by default — text is repeated elsewhere for screen readers. */
export function Stamp({
  children,
  className,
  rotate = -4,
  decorative = true,
}: {
  children: string;
  className?: string;
  rotate?: number;
  decorative?: boolean;
}) {
  return (
    <span
      aria-hidden={decorative || undefined}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        "label-mono inline-block select-none border-[1.5px] border-accent px-2 py-1 text-accent",
        "outline-1 outline-offset-2 outline-accent/50 [outline-style:solid]",
        "mix-blend-multiply dark:mix-blend-normal",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Circular stamp with text on a path. */
export function SealStamp({ text, center, className }: { text: string; center: string; className?: string }) {
  const id = `seal-${center.replace(/\W/g, "")}`;
  return (
    <svg viewBox="0 0 120 120" className={cn("text-accent", className)} aria-hidden="true">
      <defs>
        <path id={id} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <text fill="currentColor" style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.22em" }}>
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
      <text
        x="60"
        y="67"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontStyle: "italic" }}
      >
        {center}
      </text>
    </svg>
  );
}
