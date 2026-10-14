"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Switches between the Day and Night editions. */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    setDark(next);
  }

  const label = dark ? "Switch to day edition (light theme)" : "Switch to night edition (dark theme)";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "label-mono inline-flex h-8 items-center gap-2 border border-rule px-2.5 text-ink-2 transition-colors hover:border-rule-strong hover:text-ink",
        className,
      )}
    >
      <span aria-hidden="true" className="relative inline-block size-3 overflow-hidden rounded-full border border-current">
        <span className={cn("absolute inset-y-0 left-1/2 right-0 bg-current transition-transform duration-500", dark && "-translate-x-full")} />
      </span>
      <span aria-hidden="true" className="hidden sm:inline">{dark === null ? "Edition" : dark ? "Night" : "Day"}</span>
    </button>
  );
}
