import { site, socials } from "@/content/site";
import { cn } from "@/lib/utils";

/** Social + contact links. `variant="list"` shows handles; `inline` is compact. */
export function SocialLinks({ variant = "inline", className }: { variant?: "inline" | "list"; className?: string }) {
  const links = [
    ...socials,
    ...(site.email ? [{ label: "Email", handle: site.email, href: `mailto:${site.email}` }] : []),
  ];

  if (variant === "list") {
    return (
      <ul className={cn("divide-y divide-rule border-y border-rule", className)}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accent"
            >
              <span className="font-serif text-h3">{link.label}</span>
              <span className="label-mono flex items-center gap-2 text-ink-3 group-hover:text-accent">
                <span className="hidden sm:inline">{link.handle}</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </span>
              {link.href.startsWith("http") ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="link-editorial label-mono text-ink-2 hover:text-accent"
          >
            {link.label}
            <span aria-hidden="true"> ↗</span>
            {link.href.startsWith("http") ? <span className="sr-only"> (opens in a new tab)</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
