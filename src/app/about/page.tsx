import Image from "next/image";
import portrait from "@/assets/images/keila-amada-portrait.jpg";
import { EventItem } from "@/components/features/events/EventItem";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/content/community";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  path: "/about",
  description: "About Keila Amada — Frontend Engineer based in Natal, Brazil, building production web products since 2022.",
});

export default function AboutPage() {
  const [lede, ...bio] = site.about;
  return (
    <>
      {/* Opener */}
      <section aria-labelledby="about-heading" className="container-edition pb-20 pt-12 md:pt-16">
        <div className="flex items-center justify-between border-t border-rule-strong pt-3">
          <MonoLabel tone="ink">
            <span className="text-accent">§ 03</span>
            <span aria-hidden="true" className="mx-2 text-ink-3">
              —
            </span>
            About
          </MonoLabel>
          <MonoLabel>{site.location}</MonoLabel>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
          <figure className="md:col-span-5 md:row-span-2">
            <div className="relative aspect-[4/5] overflow-hidden border border-rule-strong bg-paper-2 shadow-print">
              <Image
                src={portrait}
                alt="Portrait of Keila Amada smiling, arms crossed, wearing a navy polo shirt."
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[50%_18%] [filter:sepia(0.12)_saturate(0.92)_contrast(1.02)]"
              />
            </div>
            <figcaption className="label-mono mt-3 flex justify-between text-ink-3">
              <span>{site.name}</span>
              <span>{site.role}</span>
            </figcaption>
          </figure>

          <div className="md:col-span-7">
            <h1 id="about-heading" className="text-h1">
              Product-minded, <em className="text-accent">detail-driven</em>, building for real users.
            </h1>
            <p className="mt-8 text-lede">
              {lede}
            </p>
            <div className="mt-6 space-y-4 text-ink-2 md:columns-2 md:gap-8 md:space-y-0 [&>p]:mb-4 [&>p]:break-inside-avoid">
              {bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <aside aria-label="Off the clock" className="mt-8 border-t border-dashed border-rule pt-4">
              <MonoLabel as="p">Off the clock</MonoLabel>
              <p className="mt-1 font-serif text-[1.125rem] italic text-ink-2">{site.personal}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* Languages + interests */}
      <section aria-labelledby="languages-title" className="container-edition pb-20">
        <div className="grid gap-12 border-t border-rule-strong pt-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 id="languages-title" className="label-mono !font-mono text-ink">
              Languages
            </h2>
            <dl className="mt-4">
              {site.languages.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between gap-4 border-b border-rule py-3">
                  <dt className="font-serif text-[1.25rem]">{l.name}</dt>
                  <dd className="label-mono text-right text-ink-3">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <MonoLabel as="p" tone="ink">
              Professional interests
            </MonoLabel>
            <p className="mt-4 font-serif text-[1.375rem] leading-snug">{site.interests.join(" · ")}</p>
            <ArrowLink href="/experience" className="mt-8">
              Experience, capabilities & education
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Community */}
      {events.length ? (
        <section aria-labelledby="about-events-title" className="section-y bg-paper-2/60">
          <div className="container-edition">
            <SectionHeading number="A" label="Community" id="about-events-title" title={<>Events & community.</>} />
            <div className="grid gap-14 md:grid-cols-2 md:gap-8">
              {events.map((e, i) => (
                <EventItem key={`${e.name}-${i}`} event={e} showAllPhotos />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section aria-label="Links" className="container-edition section-y">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="font-serif text-h2 md:col-span-6">
            Let’s <em className="text-accent">talk</em>.
          </p>
          <div className="md:col-span-5 md:col-start-8">
            <SocialLinks variant="list" />
          </div>
        </div>
      </section>
    </>
  );
}
