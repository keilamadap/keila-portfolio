import Image from "next/image";
import type { EventEntry } from "@/types/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { RichText } from "@/components/ui/RichText";
import { cn } from "@/lib/utils";

/**
 * One event, styled like a captioned photo in a magazine spread.
 * `layout="feature"` gives the photo more room; `compact` is a log line.
 */
export function EventItem({
  event,
  showAllPhotos = false,
  className,
}: {
  event: EventEntry;
  /** Show every photo in an even grid (used on /about). Default shows the cover only. */
  showAllPhotos?: boolean;
  className?: string;
}) {
  const photos = showAllPhotos ? (event.photos ?? []) : (event.photos ?? []).slice(0, 1);

  return (
    <article className={cn("group", className)}>
      {photos.length ? (
        <div className={cn("grid gap-3", photos.length > 1 && "grid-cols-2")}>
          {photos.map((photo) => (
            <figure key={photo.alt} className="relative aspect-[4/3] overflow-hidden border border-rule bg-paper-2">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                sizes={photos.length > 1 ? "(min-width: 768px) 25vw, 45vw" : "(min-width: 768px) 45vw, 90vw"}
                className="object-cover saturate-[0.82] transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.015]"
                style={{ objectPosition: photo.focus ?? "50% 50%" }}
              />
            </figure>
          ))}
        </div>
      ) : null}

      <div className={photos.length ? "mt-5" : ""}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <MonoLabel tone="accent">{event.kind}</MonoLabel>
          <MonoLabel>
            <RichText text={event.date} /> · <RichText text={event.location} />
          </MonoLabel>
        </div>
        <h3 className="mt-2 text-h3">
          {event.url ? (
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="link-editorial hover:text-accent">
              <RichText text={event.name} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <RichText text={event.name} />
          )}
        </h3>
        <p className="mt-2 text-[0.9375rem] text-ink-2">
          <RichText text={event.note} />
        </p>
        <p className="mt-3 border-l border-accent pl-3 text-[0.9375rem] text-ink">
          <span className="label-mono text-ink-3">Takeaway — </span>
          <RichText text={event.takeaway} />
        </p>
      </div>
    </article>
  );
}
