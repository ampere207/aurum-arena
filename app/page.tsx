import { AboutSection } from "@/components/sections/about-section";
import { IntroGate } from "@/components/intro-gate";
import { ContactFooterSection } from "@/components/sections/contact-footer-section";
import { EngagementSection } from "@/components/sections/engagement-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { PricingSection } from "@/components/sections/pricing-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyPartnerSection } from "@/components/sections/why-partner-section";

export default function HomePage() {
  return (
    <IntroGate>
      <main className="min-h-screen bg-gradient-to-b from-brand-ivory via-white/90 to-brand-soft/55">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EngagementSection />
        <ServicesSection />
        <WhyPartnerSection />
        <PricingSection />
        <ContactFooterSection />
      </main>
    </IntroGate>
  );
}
