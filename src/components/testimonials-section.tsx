import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Quiet confidence, clear results.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm leading-7 text-white/72">
                “{testimonial.quote}”
              </p>
              <footer className="mt-8 text-xs uppercase tracking-[0.22em] text-white/42">
                {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
