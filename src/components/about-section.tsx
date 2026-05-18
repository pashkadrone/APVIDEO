import Image from "next/image";

import { Badge } from "@/components/ui/badge";

const tools = ["DaVinci Resolve", "Premiere Pro", "After Effects"];

export function AboutSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.45fr_0.55fr] lg:px-8" id="about">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative aspect-[4/5]">
          <Image
            alt="Portrait"
            className="object-cover grayscale"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
          />
        </div>
      </div>
      <div className="space-y-6">
        <Badge>About</Badge>
        <h2 className="font-serif text-4xl text-white md:text-5xl">
          Built for precise edits, rich contrast, and strong visual rhythm.
        </h2>
        <p className="max-w-2xl text-sm leading-8 text-white/64">
          I create commercial edits, short-form social content, and cinematic
          stories with a premium finish. My workflow balances speed, structure,
          and detail so every frame looks intentional and every cut carries
          momentum.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/46">
                Tool
              </p>
              <p className="mt-3 text-white">{tool}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-white/46">
            Experience
          </p>
          <p className="mt-3 text-sm leading-7 text-white/64">
            Short-form campaigns, branded reels, fashion edits, product
            storytelling, and polished commercial delivery for creators, studios,
            and modern businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
