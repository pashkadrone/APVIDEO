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
            alt="Портрет"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            src="/profile.png"
          />
        </div>
      </div>
      <div className="space-y-6">
        <Badge>Обо мне</Badge>
        <h2 className="font-serif text-4xl text-white md:text-5xl">
          Точный монтаж, выразительный контраст и сильный визуальный ритм.
        </h2>
        <p className="max-w-2xl text-sm leading-8 text-white/64">
          Я создаю коммерческие ролики, короткий вертикальный контент и
          кинематографичные истории с чистой, дорогой подачей. Мой подход
          сочетает скорость, структуру и внимание к деталям, чтобы каждый кадр
          выглядел собранно и работал на общее впечатление.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/46">
                Софт
              </p>
              <p className="mt-3 text-white">{tool}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-white/46">
            Опыт
          </p>
          <p className="mt-3 text-sm leading-7 text-white/64">
            Коммерческие съёмки, брендовые reels, fashion edits, продуктовые
            ролики и визуальные истории для создателей, студий и современных
            брендов.
          </p>
        </div>
      </div>
    </section>
  );
}
