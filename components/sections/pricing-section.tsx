import { Award, CircleDollarSign, Crown } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function PricingSection() {
  const priceIcons = [CircleDollarSign, Crown, Award];

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <Reveal delay={200} className="sports-bg-icon right-12 top-20 hidden lg:block">
        <CircleDollarSign className="h-7 w-7" />
      </Reveal>
      <Reveal delay={280} className="sports-bg-icon alt left-16 bottom-16 hidden lg:block">
        <Award className="h-7 w-7" />
      </Reveal>
      <div className="section-shell space-y-10">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">{siteContent.pricing.heading}</h2>
          <div className="gold-divider" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.pricing.cards.map((card, index) => (
            <Reveal key={card.title} delay={80 + index * 120}>
              <Card className={`interactive-card pricing-card group relative flex h-full flex-col overflow-hidden bg-white/82 hover:border-brand-gold/70 hover:shadow-premium ${index === 1 ? "scale-[1.01] premium-glow" : ""}`}>
                <div className="absolute right-4 top-4 rounded-full border border-brand-gold/60 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-brand-gold">
                  0{index + 1}
                </div>

                {index === 1 ? (
                  <div className="absolute left-4 top-4 rounded-full border border-brand-gold/55 bg-brand-gold/20 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-brand-burgundy">
                    MOST POPULAR
                  </div>
                ) : null}

                <CardHeader className="border-b border-brand-burgundy/10 pt-8">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/55 bg-brand-soft/60">
                    {(() => {
                      const Icon = priceIcons[index];
                      return <Icon className="h-5 w-5 text-brand-burgundy" />;
                    })()}
                  </div>
                  <CardTitle className="max-w-[90%] text-2xl text-brand-burgundy">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  {card.lines.map((line, lineIndex) => (
                    <p key={line} className={`leading-7 text-brand-burgundy/95 ${lineIndex === card.lines.length - 1 ? "font-semibold text-brand-burgundy" : ""}`}>
                      {line}
                    </p>
                  ))}

                  <div className="mt-5 h-[2px] w-14 rounded-full bg-brand-gold/55 transition-all duration-300 group-hover:w-full" />
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
