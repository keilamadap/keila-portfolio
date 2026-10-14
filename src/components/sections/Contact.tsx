import { site } from "@/content/site";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { RichText } from "@/components/ui/RichText";
import { Stamp } from "@/components/ui/Stamp";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y scroll-mt-24">
      <div className="container-edition">
        <div className="flex items-center justify-between border-t border-rule-strong pt-3">
          <MonoLabel tone="ink">
            <span className="text-accent">§ 04</span>
            <span aria-hidden="true" className="mx-2 text-ink-3">
              —
            </span>
            Contact
          </MonoLabel>
          <MonoLabel>{site.hero.status}</MonoLabel>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="relative md:col-span-7">
            <h2 id="contact-title" className="text-h1">
              {site.contact.headline.before} <em className="text-accent">{site.contact.headline.emphasis}</em>
            </h2>
            <p className="mt-6 max-w-[48ch] text-lede text-ink-2">{site.contact.body}</p>
            {!site.email ? (
              <p className="mt-4 text-[0.875rem]">
                <RichText text="[Add contact email in src/content/site.ts]" />
              </p>
            ) : null}
            <Stamp className="mt-8" rotate={-3}>
              Natal, BR → Worldwide
            </Stamp>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-4">
            <SocialLinks variant="list" />
          </div>
        </div>
      </div>
    </section>
  );
}
