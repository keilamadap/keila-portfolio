import Image from "next/image";
import Link from "next/link";
import portrait from "@/assets/images/keila-amada-portrait.jpg";
import { site } from "@/content/site";
import { ExploringTicker } from "@/components/features/hero/ExploringTicker";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { RetroWindow } from "@/components/ui/RetroWindow";

/**
 * Front-page opener. Server-rendered and animation-free for a fast LCP;
 * only the small "currently exploring" ticker is interactive.
 */
export function Hero() {
  const { headline } = site.hero;
  return (
    <section
      aria-labelledby="hero-title"
      className="container-edition pb-4 pt-8 md:pb-8 md:pt-14"
    >
      {/* Running head */}
      <div className="flex items-center justify-between border-b border-rule-strong pb-3">
        <MonoLabel tone="ink">
          {site.name} <span className="text-ink-3">— {site.hero.eyebrow}</span>
        </MonoLabel>
        <MonoLabel className="hidden sm:inline">No. 01 · Front page</MonoLabel>
      </div>

      <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12 md:gap-8">
        {/* Headline */}
        <div className="md:col-span-8">
          <h1 id="hero-title" className="text-display">
            {headline.before}{" "}
            <em className="text-accent [font-variation-settings:'SOFT'_100,'opsz'_144]">
              {headline.emphasis}
            </em>{" "}
            {headline.after}
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-8">
            <p className="text-lede text-ink-2 lg:col-span-6">
              {site.hero.supporting}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-3 bg-ink px-5 py-3 text-[0.9375rem] text-paper transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-accent hover:text-accent-ink hover:shadow-print"
            >
              Explore my experience
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="#contact"
              className="link-editorial text-[0.9375rem] text-ink hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Portrait + status */}
        <div className="grid grid-cols-[1fr_1.1fr] items-start gap-4 sm:gap-6 md:col-span-4 md:grid-cols-1">
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-rule-strong bg-paper-2">
              <Image
                src={portrait}
                alt="Portrait of Keila Amada smiling, arms crossed, wearing a navy polo shirt."
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover object-[50%_20%] [filter:sepia(0.12)_saturate(0.92)_contrast(1.02)]"
              />
            </div>
            <figcaption className="label-mono mt-2 text-ink-3">
              Keila — {site.location}
            </figcaption>
          </figure>

          <RetroWindow
            title="status.txt"
            meta={
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="relative inline-flex size-1.5">
                  <span className="live-pulse absolute inset-0 rounded-full bg-live" />
                  <span className="relative size-1.5 rounded-full bg-live" />
                </span>
                live
              </span>
            }
            className="md:mt-2"
          >
            <dl className="space-y-3 text-[0.875rem]">
              <div>
                <MonoLabel as="dt">Location</MonoLabel>
                <dd className="mt-0.5">{site.hero.status}</dd>
              </div>
              <div>
                <MonoLabel as="dt">{site.hero.exploringLabel}</MonoLabel>
                <dd className="mt-0.5 font-serif text-[1.125rem] italic leading-snug text-accent">
                  <ExploringTicker items={site.hero.exploring} />
                </dd>
              </div>
              <div className="hidden sm:block">
                <MonoLabel as="dt">Stack</MonoLabel>
                <dd className="mt-0.5 text-ink-2">
                  React · Next.js · TypeScript
                </dd>
              </div>
            </dl>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}
