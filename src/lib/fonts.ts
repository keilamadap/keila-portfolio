import localFont from "next/font/local";

/**
 * Fonts are self-hosted (files in src/assets/fonts, from Fontsource — SIL OFL).
 * next/font/local adds preload hints, font-display: swap and metric-matched
 * fallbacks to avoid layout shift, and no request leaves your domain.
 */

/** Editorial serif — carries the identity. Variable: wght, opsz, SOFT, WONK. */
export const fraunces = localFont({
  src: [
    { path: "../assets/fonts/fraunces-latin-full-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../assets/fonts/fraunces-latin-full-italic.woff2", weight: "100 900", style: "italic" },
  ],
  display: "swap",
  variable: "--font-fraunces",
  fallback: ["Iowan Old Style", "Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

/** Clean sans for body copy and interface text. */
export const instrumentSans = localFont({
  src: [{ path: "../assets/fonts/instrument-sans-latin-wght-normal.woff2", weight: "400 700", style: "normal" }],
  display: "swap",
  variable: "--font-instrument",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/** Monospace — reserved for small technical details and labels. */
export const plexMono = localFont({
  src: [
    { path: "../assets/fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plex-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
  adjustFontFallback: false,
});

export const fontVariables = [fraunces.variable, instrumentSans.variable, plexMono.variable].join(" ");
