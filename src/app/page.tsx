import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ShortAbout } from "@/components/sections/ShortAbout";

/**
 * Front page, in reading order:
 * Hero · 01 Experience · 02 About · 03 Events / Community · 04 Contact
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <ShortAbout />
      <Community />
      <Contact />
    </>
  );
}
