"use client";

import { useState } from "react";

import { Award, CircleDollarSign, Crown } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function PricingSection() {
  const priceIcons = [CircleDollarSign, Crown, Award];
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

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
              <Card
                onMouseEnter={() => setActiveHoverIndex(index)}
                onMouseLeave={() => setActiveHoverIndex(null)}
                className={`pricing-card group relative flex h-full flex-col overflow-hidden bg-white/82 transition-all duration-300 md:hover:z-20 md:hover:scale-[1.07] md:hover:-translate-y-3 md:hover:border-brand-gold/80 md:hover:shadow-[0_24px_50px_rgba(114,56,61,0.25)] ${index === 1 && (activeHoverIndex === null || activeHoverIndex === 1) ? "border-brand-gold/80 premium-glow xl:z-10 xl:scale-[1.05] xl:-translate-y-2" : ""} ${index === 1 && activeHoverIndex !== null && activeHoverIndex !== 1 ? "xl:scale-100 xl:translate-y-0 border-brand-gold/50" : ""}`}
              >
                <div className="absolute right-4 top-4 rounded-full border border-brand-gold/60 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-brand-gold">
                  0{index + 1}
                </div>

                {index === 1 ? (
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-brand-gold/55 bg-brand-gold/20 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-brand-burgundy">
                    MOST POPULAR
                  </div>
                ) : null}

                <CardHeader className="border-b border-brand-burgundy/10 pt-10 pb-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/55 bg-brand-soft/60">
                    {(() => {
                      const Icon = priceIcons[index];
                      return <Icon className="h-5 w-5 text-brand-burgundy" />;
                    })()}
                  </div>
                  <CardTitle className="max-w-[95%] text-xl text-brand-burgundy sm:text-2xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-3.5">
                  {card.lines.map((line, lineIndex) => (
                    <p key={line} className={`text-sm leading-6 text-brand-burgundy/95 sm:text-base sm:leading-7 ${lineIndex === card.lines.length - 1 ? "font-semibold text-brand-burgundy" : ""}`}>
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
