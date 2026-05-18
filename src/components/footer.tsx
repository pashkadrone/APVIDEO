import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-6 text-sm text-white/42 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.name}. Cinematic portfolio for videography and editing.</p>
        <p>Powered by Next.js static export, GitHub Pages, and external video embeds.</p>
      </div>
    </footer>
  );
}
