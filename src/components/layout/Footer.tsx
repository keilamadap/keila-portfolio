import Link from "next/link";
import { navigation, site } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule-strong">
      <div className="container-edition grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-h3">
            Keila <em className="text-accent">Amada</em>
          </p>
          <p className="mt-3 max-w-sm text-ink-2">{site.positioning}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="label-mono text-ink-3">Pages</p>
          <ul className="mt-3 space-y-1.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-editorial text-ink-2 hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/colophon" className="link-editorial text-ink-2 hover:text-ink">
                Colophon
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="label-mono text-ink-3">Elsewhere</p>
          <SocialLinks className="mt-3" />
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="container-edition label-mono flex flex-col gap-2 py-4 text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name} · {site.hero.status}
          </span>
          <span>
            Set in Fraunces, Instrument Sans &amp; IBM Plex Mono ·{" "}
            <Link href="/colophon" className="link-editorial hover:text-accent">
              Colophon
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
