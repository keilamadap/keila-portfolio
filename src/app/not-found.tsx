import { ArrowLink } from "@/components/ui/ArrowLink";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Stamp } from "@/components/ui/Stamp";

export default function NotFound() {
  return (
    <div className="container-edition section-y">
      <MonoLabel tone="accent">Error 404</MonoLabel>
      <h1 className="mt-4 text-h1">
        Not in this <em className="text-accent">edition</em>.
      </h1>
      <p className="mt-6 max-w-[46ch] text-lede text-ink-2">The page you’re looking for was moved, renamed or never printed.</p>
      <Stamp className="mt-8" rotate={-4}>
        Return to sender
      </Stamp>
      <div className="mt-10">
        <ArrowLink href="/" direction="left">
          Back to the front page
        </ArrowLink>
      </div>
    </div>
  );
}
