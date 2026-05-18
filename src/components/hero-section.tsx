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
          <Badge>Кинематографичная визуальная подача</Badge>
          <h1 className="mt-6 font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/68 md:text-xl">
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
        </div>

        <div className="animate-fade-up-delay relative ml-auto flex w-full max-w-md items-end">
          <div className="w-full rounded-[2rem] border border-white/12 bg-white/[0.03] p-4 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/8 bg-black/60 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/44">
                Основной фокус
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span className="text-white/55">Монтаж</span>
                  <span className="text-white">Ритм и структура</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <span className="text-white/55">Цвет</span>
                  <span className="text-white">Контраст и глубина</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="text-white/55">Формат</span>
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
