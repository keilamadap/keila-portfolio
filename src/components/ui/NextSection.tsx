import { MonoLabel } from "./MonoLabel";

/**
 * The only way forward at the end of a section: a single cue pointing down
 * to the next one, so the page reads as one guided path.
 */
export function NextSection({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group mt-16 flex items-center justify-between gap-4 border-t border-rule-strong pt-4 text-ink transition-colors hover:text-accent md:mt-20"
    >
      <MonoLabel className="group-hover:text-accent">Continue</MonoLabel>
      <span className="flex items-center gap-3 font-serif text-h3">
        {label}
        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-y-1">
          ↓
        </span>
      </span>
    </a>
  );
}
