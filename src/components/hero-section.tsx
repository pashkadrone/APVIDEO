import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/constants";

const highlights = ["Коммерция", "Reels", "Цвет", "Монтаж"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(180deg,#080808_0%,#050505_40%,#020202_100%)]" />
      <div className="absolute inset-0 bg-grain opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="animate-fade-up max-w-4xl">
          <Badge>Кинематографичная визуальная подача</Badge>
          <h1 className="mt-6 font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/68 md:text-2xl">
            {siteConfig.title}. Коммерческие ролики, reels, монтаж и цвет с
            дорогим визуальным ощущением в каждом кадре.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio">
              <Button>Смотреть работы</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Контакты</Button>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/62"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
