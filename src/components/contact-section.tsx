import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="contact">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Contact
          </p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Let&apos;s build something that feels premium from frame one.
          </h2>
          <p className="max-w-md text-sm leading-7 text-white/62">
            On GitHub Pages the cleanest setup is direct contact links or an
            external form endpoint. No VPS, no mail server, no background process.
          </p>
          <div className="space-y-3 text-sm text-white/64">
            <a className="block hover:text-white" href={siteConfig.telegram}>
              Telegram
            </a>
            <a className="block hover:text-white" href={siteConfig.instagram}>
              Instagram
            </a>
            <a className="block hover:text-white" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
