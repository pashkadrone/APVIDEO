import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-serif text-xl tracking-[0.24em] text-white/72">
          {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
