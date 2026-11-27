import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ShortAbout } from "@/components/sections/ShortAbout";

/**
 * A single landing page with one path, top to bottom:
 * Hero → 01 Experience → 02 About → 03 Contact.
 * Each section ends with one "Continue ↓" cue to the next; there is no menu.
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
