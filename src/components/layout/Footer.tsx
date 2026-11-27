import { site } from "@/content/site";

/** A single closing line — contact already carries every link. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule-strong">
      <div className="container-edition label-mono flex flex-col gap-2 py-6 text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {site.name} · {site.hero.status}
        </span>
        <span>Set in Fraunces, Instrument Sans &amp; IBM Plex Mono</span>
      </div>
    </footer>
  );
}
