import { experience, highlights } from "@/content/experience";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ExperienceEntry } from "@/types/content";
import { cn } from "@/lib/utils";

const ROW = "md:grid-cols-[11rem_1fr_1.4fr_2rem] md:gap-x-8";

/** The five verified numbers, as a ruled strip. */
export function HighlightsStrip() {
  return (
    <ul className="grid grid-cols-2 border-y border-rule-strong md:grid-cols-5">
      {highlights.map((h, i) => (
        <li
          key={h.value}
          className={cn(
            "border-rule px-1 py-6 md:px-5 md:py-8",
            i % 2 === 1 && "border-l pl-4 md:pl-5",
            i >= 2 && "border-t md:border-t-0",
            i > 0 && "md:border-l",
            i === highlights.length - 1 && "col-span-2 border-l-0 md:col-span-1 md:border-l",
          )}
        >
          {h.qualifier ? <MonoLabel className="block">{h.qualifier}</MonoLabel> : <span className="label-mono block">&nbsp;</span>}
          <span className="block font-serif text-[clamp(2.75rem,2rem+2.4vw,4rem)] leading-none tracking-[-0.03em]">{h.value}</span>
          <p className="mt-3 text-[0.875rem] leading-snug text-ink-2">{h.caption}</p>
        </li>
      ))}
    </ul>
  );
}

function RoleHeading({ job }: { job: ExperienceEntry }) {
  return (
    <>
      <MonoLabel className="col-span-2 md:col-span-1">
        {job.period}
        {job.end === null ? <span className="mt-1 block text-accent">● Now</span> : null}
      </MonoLabel>
      <span>
        <span className="block font-serif text-[1.625rem] leading-tight transition-colors group-hover:text-accent">{job.company}</span>
        <span className="text-[0.9375rem] text-ink-2">
          {job.role} · {job.workModel}
        </span>
      </span>
    </>
  );
}

function Contributions({ job }: { job: ExperienceEntry }) {
  return (
    <ul className="space-y-2">
      {job.contributions.map((c) => (
        <li key={c} className="grid grid-cols-[1rem_1fr] text-[0.9375rem]">
          <span aria-hidden="true" className="text-accent">
            —
          </span>
          {c}
        </li>
      ))}
    </ul>
  );
}

/**
 * `summary` (home): compact ledger, details collapse with native <details> (zero JS).
 * `full` (/experience): every role open, with summary, contributions and stack.
 */
export function ExperienceLedger({ variant = "summary" }: { variant?: "summary" | "full" }) {
  if (variant === "full") {
    return (
      <ol className="border-t border-rule-strong">
        {experience.map((job) => (
          <li key={job.company} className="border-b border-rule">
            <Reveal>
              <article className={cn("grid gap-x-4 gap-y-4 py-10 md:grid", ROW)}>
                <div className="grid grid-cols-[1fr_auto] gap-y-1 md:contents">
                  <RoleHeading job={job} />
                </div>
                <div className="space-y-5 md:col-start-3">
                  <p className="text-lede text-ink">{job.summary}</p>
                  <Contributions job={job} />
                  <MonoLabel as="p">Stack — {job.technologies.join(" / ")}</MonoLabel>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="border-t border-rule-strong">
      {experience.map((job) => (
        <li key={job.company} className="border-b border-rule">
          <details className="group">
            <summary className={cn("grid cursor-pointer list-none grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-6 md:items-baseline [&::-webkit-details-marker]:hidden", ROW)}>
              <RoleHeading job={job} />
              <span className="hidden text-[0.9375rem] text-ink-2 md:block">{job.summary}</span>
              <span aria-hidden="true" className="col-start-2 row-start-2 self-center justify-self-end font-mono md:col-start-auto text-lg text-ink-3 transition-transform group-open:rotate-45 md:row-start-auto">
                +
              </span>
              <span className="sr-only">Show details</span>
            </summary>
            <div className={cn("grid gap-6 pb-8", ROW)}>
              <p className="text-[0.9375rem] text-ink-2 md:hidden">{job.summary}</p>
              <MonoLabel as="p" className="hidden md:col-start-2 md:block">
                Stack — {job.technologies.join(" / ")}
              </MonoLabel>
              <div className="md:col-start-3">
                <Contributions job={job} />
              </div>
              <MonoLabel as="p" className="md:hidden">
                Stack — {job.technologies.join(" / ")}
              </MonoLabel>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

/** Home section: numbers + compact ledger + link to the full page. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y scroll-mt-24">
      <div className="container-edition">
        <SectionHeading
          number="01"
          label="Experience"
          id="experience-title"
          title={
            <>
              <em className="text-accent">Building and evolving</em> web products since 2022.
            </>
          }
          intro="From B2B platforms and production React apps to campaign products and internal tools for a US-based team."
          action={{ href: "/experience", label: "Full experience" }}
        />
        <Reveal>
          <HighlightsStrip />
        </Reveal>
        <div className="mt-16">
          <ExperienceLedger />
        </div>
      </div>
    </section>
  );
}
