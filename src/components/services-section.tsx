import { services } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="services">
      <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Services
          </p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Lean production. Expensive result.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                0{index + 1}
              </p>
              <h3 className="mt-5 font-serif text-2xl text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
