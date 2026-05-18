import { services } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="services">
      <div className="space-y-10">
        <div className="max-w-2xl border-b border-white/8 pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Услуги
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Что я делаю
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                0{index + 1}
              </p>
              <h3 className="mt-8 font-serif text-2xl text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
