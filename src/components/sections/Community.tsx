import { eventTopics, events } from "@/content/community";
import { EventItem } from "@/components/features/events/EventItem";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Community() {
  return (
    <section aria-labelledby="community-title" className="section-y">
      <div className="container-edition">
        <SectionHeading
          number="03"
          label="Events / Community"
          id="community-title"
          title={
            <>
              In the <em className="text-accent">room</em> where it’s discussed.
            </>
          }
          intro={
            <>
              <p>I enjoy taking part in technology events, conferences and meetups — a habit that keeps my work connected to the wider ecosystem.</p>
              <MonoLabel as="p" className="mt-4">
                Usually around: {eventTopics.join(" · ")}
              </MonoLabel>
            </>
          }
        />

        {events.length ? (
          <ul className="grid gap-14 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
            {events.map((e, i) => (
              <Reveal as="li" key={`${e.name}-${i}`} delay={0.06 * i}>
                <EventItem event={e} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className="border border-dashed border-rule-strong/40 p-6 text-ink-2">
            <span className="placeholder">[Add events in src/content/community.ts]</span>
          </p>
        )}
      </div>
    </section>
  );
}
