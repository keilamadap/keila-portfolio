import { Fragment } from "react";

const PLACEHOLDER = /(\[[^\]]+\])/g;

/**
 * Renders plain text and highlights "[Add …]" placeholders so they are
 * easy to find (and impossible to ship unnoticed).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(PLACEHOLDER);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="placeholder" title="Placeholder — replace in /src/content">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
