"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navigation, socials } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Desktop: inline links with an active marker.
 * Mobile: a full-screen "Contents" page, like a magazine's table of contents.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-6 xl:gap-7">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative inline-flex items-baseline gap-1.5 py-1 text-[0.9375rem] transition-colors",
                    active ? "text-ink" : "text-ink-2 hover:text-ink",
                  )}
                >
                  <span className="label-mono text-[0.625rem] text-ink-3 group-hover:text-accent">{item.folio}</span>
                  <span className="link-editorial">{item.label}</span>
                  {active ? <span aria-hidden="true" className="absolute -bottom-[1px] left-0 right-0 h-px bg-accent" /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        ref={buttonRef}
        type="button"
        className="label-mono inline-flex h-8 items-center gap-2 border border-rule-strong px-3 text-ink md:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Contents"}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-paper md:hidden"
      >
        <nav aria-label="Mobile" className="container-edition flex min-h-full flex-col py-8">
          <p className="label-mono border-b border-rule-strong pb-3 text-ink-3">Contents</p>
          <ul>
            {[{ label: "Front page", href: "/", folio: "01" }, ...navigation, { label: "Colophon", href: "/colophon", folio: "05" }].map(
              (item, i) => {
                const active = item.href === "/" ? pathname === "/" : !item.href.includes("#") && isActive(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-rule">
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className={cn("font-serif text-[2.25rem] leading-none", active && "italic text-accent")}>
                        {item.label}
                      </span>
                      <span className="label-mono text-ink-3">p. {item.folio}</span>
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
          <ul className="mt-auto flex gap-6 pt-10">
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="label-mono text-ink-2">
                  {s.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
