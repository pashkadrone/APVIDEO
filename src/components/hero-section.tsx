import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(180deg,#080808_0%,#050505_40%,#020202_100%)]" />
      <div className="absolute inset-0 bg-grain opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-fade-up max-w-3xl">
          <Badge>Premium Visual Storytelling</Badge>
          <h1 className="mt-6 font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/68 md:text-xl">
            {siteConfig.title}. Branded edits, cinematic reels, commercials, and
            color-forward storytelling built to feel expensive on every screen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio">
              <Button>View Projects</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Contact</Button>
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay relative ml-auto flex w-full max-w-md items-end">
          <div className="w-full rounded-[2rem] border border-white/12 bg-white/[0.03] p-4 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/8 bg-black/60 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/44">
                Selected Discipline
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span className="text-white/55">Editing</span>
                  <span className="text-white">Narrative Pace</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span className="text-white/55">Color</span>
                  <span className="text-white">Luxury Contrast</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-white/55">Format</span>
                  <span className="text-white">Social + Commercial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
