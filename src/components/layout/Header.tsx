import Link from "next/link";
import { site } from "@/content/site";
import { SiteNav } from "./SiteNav";
import { ThemeToggle } from "./ThemeToggle";

/** Masthead: a thin dateline over the name and navigation. */
export function Header() {
  const edition = new Date().getFullYear();
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper [--header-h:4rem]">
      <div className="hidden border-b border-rule md:block">
        <div className="container-edition label-mono flex h-8 items-center justify-between text-ink-3">
          <span>
            {site.locationShort} · {site.timezone}
          </span>
          <span className="hidden lg:inline">Product-minded frontend engineering</span>
          <span>Edition {edition}</span>
        </div>
      </div>
      <div className="container-edition flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-3" aria-label={`${site.name} — home`}>
          <span className="font-serif text-[1.375rem] leading-none tracking-[-0.01em] [font-variation-settings:'SOFT'_100,'opsz'_36]">
            Keila <em className="text-accent">Amada</em>
          </span>
          <span className="label-mono hidden text-ink-3 sm:inline">{site.role}</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-7">
          <SiteNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
