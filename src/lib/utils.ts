/** Minimal className joiner — avoids pulling in a dependency for one function. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Zero-padded index used for editorial numbering: 1 → "01". */
export function pad(n: number, size = 2): string {
  return String(n).padStart(size, "0");
}

/** Absolute URL helper for metadata. */
export function absoluteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://keilaamada.dev").replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Placeholders are written as "[Add …]". */
export function isPlaceholder(value: string | null | undefined): boolean {
  return !value || /^\[.*\]$/.test(value.trim());
}
