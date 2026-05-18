import { siteConfig } from "@/lib/constants";

const contactLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagram,
    value: "@pas_hochek"
  },
  {
    label: "Telegram",
    href: siteConfig.telegram,
    value: "@PASHKADRONE"
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email
  }
];

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="contact">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Контакты
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Открыт к новым проектам, коммерческим съёмкам и монтажу.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
            Если вам нужен визуально сильный ролик, reels или монтаж с дорогой
            подачей, напишите удобным способом.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
              href={item.href}
              rel="noreferrer"
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                {item.label}
              </p>
              <p className="mt-6 font-serif text-2xl text-white">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
