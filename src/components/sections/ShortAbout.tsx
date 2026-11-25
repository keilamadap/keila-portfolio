import { site } from "@/content/site";
import { events } from "@/content/community";
import { education } from "@/content/skills";
import { EventItem } from "@/components/features/events/EventItem";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Degrees only (the exchange and technical degree live on /experience). */
const DEGREES = 2;

/** About + community, in one section: the quote, a short bio and the events strip. */
export function ShortAbout() {
  const homeEvents = events.filter((e) => !e.hideOnHome);

  return (
    <section id="about" aria-labelledby="about-title" className="section-y scroll-mt-24 bg-paper-2/60">
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
              {site.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <aside aria-label="Off the clock" className="mt-6 border-t border-dashed border-rule pt-4">
              <MonoLabel as="p">Off the clock</MonoLabel>
              <p className="mt-1 font-serif text-[1.125rem] italic text-ink-2">{site.personal}</p>
            </aside>
            <dl className="mt-6 space-y-3 border-t border-rule pt-6 text-[0.9375rem]">
              <div>
                <MonoLabel as="dt">Languages</MonoLabel>
                <dd className="mt-1">
                  {site.languages.map((l, i) => (
                    <span key={l.name}>
                      {i > 0 ? <span className="text-ink-3"> · </span> : null}
                      {l.name} <span className="text-ink-3">({l.level.toLowerCase()})</span>
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <MonoLabel as="dt">Education</MonoLabel>
                <dd className="mt-1">
                  {education.slice(0, DEGREES).map((e, i) => (
                    <span key={e.title}>
                      {i > 0 ? <span className="text-ink-3"> · </span> : null}
                      {e.title} <span className="text-ink-3">— {e.institution}</span>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {homeEvents.length ? (
          <div className="mt-20 border-t border-rule-strong pt-3">
            <MonoLabel tone="ink" as="p">
              <span id="community-label">In the room</span> <span className="text-ink-3">— events & community</span>
            </MonoLabel>
            <ul aria-labelledby="community-label" className="mt-8 grid gap-14 md:grid-cols-2 md:gap-10">
              {homeEvents.map((e, i) => (
                <Reveal as="li" key={`${e.name}-${i}`} delay={0.06 * i}>
                  <EventItem event={e} compact />
                </Reveal>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
