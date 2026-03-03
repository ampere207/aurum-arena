import { siteContent } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function WhyPartnerSection() {
  return (
    <section id="why-partner" className="py-14 md:py-24">
      <div className="section-shell space-y-8">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">{siteContent.partner.heading}</h2>
          <p className="section-subheading">{siteContent.partner.subheading}</p>
          <div className="gold-divider" />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {siteContent.partner.points.map((point, index) => (
            <Reveal key={point} delay={80 + index * 70}>
              <article className="interactive-card group relative overflow-hidden rounded-[1.25rem] border border-brand-burgundy/15 bg-white/80 p-4 sm:p-5 text-brand-burgundy shadow-premium hover:border-brand-gold/55">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-gold/80 transition duration-300 group-hover:w-2.5" />
                <p className="pl-4 text-sm leading-6 sm:text-base sm:leading-7">
                  <span className="mr-2 text-brand-gold">0{index + 1}</span>
                  {point}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
