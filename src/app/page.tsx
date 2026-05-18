import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { categories, projects } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioSection categories={categories} projects={projects} />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
