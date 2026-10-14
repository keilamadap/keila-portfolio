import { site } from "@/content/site";
import { exploring } from "@/content/community";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ShortAbout() {
  return (
    <section aria-labelledby="about-title" className="section-y bg-paper-2/60">
      <div className="container-edition">
        <SectionHeading number="02" label="About" id="about-title" title={<>Beyond the interface.</>} />

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-6">
            <blockquote className="font-serif text-[clamp(1.625rem,1.3rem+1.3vw,2.5rem)] leading-[1.2] [font-variation-settings:'SOFT'_100,'opsz'_72]">
              <span aria-hidden="true" className="mr-1 text-accent">“</span>
              I care about building interfaces that are technically solid, maintainable and{" "}
              <em className="text-accent">genuinely useful</em> to the people using them.
            </blockquote>
          </Reveal>

          <Reveal className="md:col-span-5 md:col-start-8" delay={0.08}>
            <div className="space-y-4 text-ink-2">
              {site.aboutShort.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-rule pt-6">
              <div>
                <MonoLabel as="dt">Currently exploring</MonoLabel>
                <dd className="mt-2 space-y-1 text-[0.9375rem]">
                  {exploring.map((e) => (
                    <p key={e.title}>{e.title}</p>
                  ))}
                </dd>
              </div>
              <div>
                <MonoLabel as="dt">Languages</MonoLabel>
                <dd className="mt-2 space-y-1 text-[0.9375rem]">
                  {site.languages.map((l) => (
                    <p key={l.name}>
                      {l.name} <span className="block text-[0.8125rem] text-ink-3">{l.level}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
            <ArrowLink href="/about" className="mt-8">
              More about me
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
