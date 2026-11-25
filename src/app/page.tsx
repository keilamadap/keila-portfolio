import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ShortAbout } from "@/components/sections/ShortAbout";

/**
 * The whole edition on one page, in reading order:
 * Hero · 01 Experience · 02 About (with events & community) · 03 Contact
 * /experience keeps the full record; /colophon is linked from the footer.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <ShortAbout />
      <Contact />
    </>
  );
}
