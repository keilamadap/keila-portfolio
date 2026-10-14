import { ExperienceLedger, HighlightsStrip } from "@/components/sections/Experience";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, skills } from "@/content/skills";
import { pageMetadata } from "@/lib/metadata";
import { pad } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Experience",
  path: "/experience",
  description:
    "Professional frontend experience since 2022 — internal platforms, production React applications, campaign products and B2B systems. Capabilities and education.",
});

export default function ExperiencePage() {
  return (
    <>
      <div className="container-edition pb-16 pt-12 md:pt-16">
        <SectionHeading
          as="h1"
          number="02"
          label="Experience"
          title={
            <>
              Building and evolving <em className="text-accent">production</em> web products since 2022.
            </>
          }
          intro="Four frontend roles across internal tools, B2B platforms, a production React application and more than twenty campaign products — all remote."
        />
        <Reveal>
          <HighlightsStrip />
        </Reveal>
      </div>

      <section aria-label="Roles" className="container-edition pb-20">
        <ExperienceLedger variant="full" />
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <ArrowLink href="/#contact">Get in touch</ArrowLink>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-title" className="section-y bg-paper-2/60">
        <div className="container-edition">
          <SectionHeading
            number="A"
            label="Capabilities"
            id="capabilities-title"
            title={
              <>
                Organized by <em className="text-accent">what I do</em>, not by logo.
              </>
            }
          />
          <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((group, i) => (
              <Reveal as="li" key={group.title} delay={0.04 * i}>
                <div className="border-t border-rule-strong pt-3">
                  <MonoLabel tone="accent">{pad(i + 1)}</MonoLabel>
                  <h3 className="mt-2 text-[1.375rem] leading-tight">{group.title}</h3>
                  <p className="mt-2 text-[0.875rem] text-ink-3">{group.description}</p>
                  <ul className="mt-4 space-y-1.5 text-[0.9375rem]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="education-title" className="section-y">
        <div className="container-edition">
          <SectionHeading number="B" label="Education" id="education-title" title="Education" />
          <ol className="border-t border-rule-strong">
            {education.map((e) => (
              <li key={e.title} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[8rem_1fr] sm:gap-8 md:grid-cols-[11rem_1fr]">
                <MonoLabel className="pt-1">{e.completed}</MonoLabel>
                <div>
                  <p className="font-serif text-[1.375rem] leading-snug">{e.title}</p>
                  <p className="text-[0.9375rem] text-ink-2">
                    {e.institution}
                    {e.location ? ` · ${e.location}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
