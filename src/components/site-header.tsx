import Link from "next/link";

import { siteConfig } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link className="font-serif text-xl tracking-[0.24em] text-white" href="/">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/72 md:flex">
          <a href="#portfolio">Работы</a>
          <a href="#about">Обо мне</a>
          <a href="#services">Услуги</a>
          <a href="#contact">Контакты</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="hidden text-sm text-white/72 sm:inline" href={siteConfig.instagram}>
            Instagram
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            href="#contact"
          >
            Связаться
          </a>
        </div>
      </div>
    </header>
  );
}
