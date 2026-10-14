import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Colophon",
  path: "/colophon",
  description: "How this site is designed and built — typography, color, stack and principles.",
});

const swatches = [
  { name: "Paper", token: "--paper", note: "Background" },
  { name: "Paper 2", token: "--paper-2", note: "Surfaces" },
  { name: "Ink", token: "--ink", note: "Text" },
  { name: "Graphite", token: "--ink-2", note: "Secondary" },
  { name: "Wine", token: "--accent", note: "Accent" },
  { name: "Dusty pink", token: "--blush", note: "Tint only" },
];

const stack = [
  ["Framework", "Next.js (App Router), React Server Components"],
  ["Language", "TypeScript"],
  ["Styling", "Tailwind CSS with CSS-variable design tokens"],
  ["Content", "Typed TS content files"],
  ["Motion", "Motion (LazyMotion), reduced-motion aware"],
  ["Images", "next/image — AVIF/WebP, blur placeholders"],
  ["Fonts", "next/font — self-hosted, no layout shift"],
];

export default function ColophonPage() {
  return (
    <div className="container-edition section-y pt-12 md:pt-16">
      <SectionHeading
        as="h1"
        number="05"
        label="Colophon"
        title={
          <>
            How this <em className="text-accent">edition</em> is made.
          </>
        }
        intro="The site is designed like a small technical publication: a masthead, numbered sections and ruled ledgers — with a few quiet references to early desktop interfaces."
      />

      {/* Typography */}
      <section aria-labelledby="type-title" className="border-t border-rule-strong pt-6">
        <h2 id="type-title" className="label-mono text-ink">
          Typography
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-[5rem] leading-none">
              Aa<em className="text-accent">a</em>
            </p>
            <p className="mt-4 text-[1.125rem]">Fraunces</p>
            <MonoLabel as="p">Display & headings · variable, optical size</MonoLabel>
          </div>
          <div>
            <p className="font-sans text-[5rem] leading-none">Aa</p>
            <p className="mt-4 text-[1.125rem]">Instrument Sans</p>
            <MonoLabel as="p">Body & interface</MonoLabel>
          </div>
          <div>
            <p className="font-mono text-[5rem] leading-none">Aa</p>
            <p className="mt-4 text-[1.125rem]">IBM Plex Mono</p>
            <MonoLabel as="p">Labels & technical details only</MonoLabel>
          </div>
        </div>
      </section>

      {/* Color */}
      <section aria-labelledby="color-title" className="mt-20 border-t border-rule-strong pt-6">
        <h2 id="color-title" className="label-mono text-ink">
          Color — day & night editions
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map((s) => (
            <li key={s.token}>
              <div className="aspect-[4/5] border border-rule-strong" style={{ background: `var(${s.token})` }} />
              <p className="mt-2 text-[0.9375rem]">{s.name}</p>
              <MonoLabel as="p">
                {s.token} · {s.note}
              </MonoLabel>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[60ch] text-ink-2">
          One accent carries the identity. Dusty pink is never used for text — only for selection, highlights and placeholders. All text pairs meet WCAG AA contrast in both themes.
        </p>
      </section>

      {/* Stack */}
      <section aria-labelledby="stack-title" className="mt-20 grid gap-8 border-t border-rule-strong pt-6 md:grid-cols-12">
        <h2 id="stack-title" className="label-mono text-ink md:col-span-3">
          Built with
        </h2>
        <dl className="md:col-span-9">
          {stack.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-rule py-3 sm:grid-cols-[12rem_1fr]">
              <MonoLabel as="dt" className="pt-1">
                {k}
              </MonoLabel>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-title" className="mt-20 grid gap-8 border-t border-rule-strong pt-6 md:grid-cols-12">
        <h2 id="principles-title" className="label-mono text-ink md:col-span-3">
          Principles
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:col-span-9">
          <p className="text-ink-2">
            <span className="block font-serif text-[1.375rem] text-ink">Server-first.</span>
            Pages are React Server Components. Only navigation, the theme toggle, scroll reveals and the small hero status ticker ship JavaScript.
          </p>
          <p className="text-ink-2">
            <span className="block font-serif text-[1.375rem] text-ink">Accessible by structure.</span>
            Semantic landmarks, one h1 per page, visible focus, native details/summary, keyboard-reachable rails and reduced-motion support.
          </p>
          <p className="text-ink-2">
            <span className="block font-serif text-[1.375rem] text-ink">Content as data.</span>
            All copy lives in typed content files, so updating the site never means touching layout code.
          </p>
          <p className="text-ink-2">
            <span className="block font-serif text-[1.375rem] text-ink">Honest numbers.</span>
            Only real, verifiable results appear on this site. Anything unwritten is marked as a placeholder.
          </p>
        </div>
      </section>
    </div>
  );
}
