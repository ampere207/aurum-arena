import Image from "next/image";
import { Goal, Medal, Trophy } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function HeroSection() {
  const heroIllustrations = [
    "/illustrations/plan.svg",
    "/illustrations/coordinate.svg",
    "/illustrations/execute.svg"
  ];

  const renderHeroCard = (item: string, index: number, delay: number) => (
    <Reveal key={item} delay={delay}>
      <Card
        className="interactive-card relative overflow-hidden border-brand-gold/35 bg-white/70 hover:border-brand-gold/65 hover:shadow-premium"
      >
        <div className="pointer-events-none absolute -right-7 -top-7 h-20 w-20 rounded-full bg-brand-gold/20 blur-2xl" />
        <div className="pointer-events-none absolute -left-7 bottom-0 h-16 w-16 rounded-full bg-brand-gold/15 blur-2xl" />
        <CardContent className="space-y-3 py-3 md:space-y-4 md:py-4">
          <div className="illustration-frame h-28 p-2 sm:h-32 md:h-40">
            <Image
              src={heroIllustrations[index]}
              alt={`${item} illustration`}
              width={640}
              height={420}
              className="illustration-fit"
            />
          </div>
          <p className="text-lg font-semibold tracking-[0.1em] text-brand-burgundy md:text-2xl">{item}</p>
        </CardContent>
      </Card>
    </Reveal>
  );

  return (
    <section id="top" className="relative overflow-hidden bg-brand-beige py-8 md:py-14">
      <div className="ambient-orb absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl" />
      <div className="ambient-orb absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-brand-burgundy/15 blur-3xl" />
      <Reveal delay={120} className="sports-bg-icon left-4 top-14 z-20 md:left-10 md:top-16">
        <Trophy className="h-8 w-8" />
      </Reveal>
      <Reveal delay={220} className="sports-bg-icon alt right-4 top-20 z-20 slow md:right-12 md:top-28">
        <Goal className="h-7 w-7" />
      </Reveal>
      <Reveal delay={300} className="sports-bg-icon left-[42%] bottom-8 hidden lg:block fast z-10">
        <Medal className="h-7 w-7" />
      </Reveal>

      <div className="section-shell relative">
        <div className="luxury-panel luxury-outline space-y-6 px-4 py-6 text-center sm:px-6 md:space-y-8 md:px-10 md:py-10">
          <Reveal className="flex justify-center">
            <div className="rounded-full border border-brand-gold/80 bg-white/85 p-3 shadow-premium">
              <Image
                src="/logo.png"
                alt={siteContent.company.name}
                width={180}
                height={180}
                priority
                className="float-soft h-24 w-24 rounded-full md:h-28 md:w-28"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-4" delay={80}>
            <h1 className="text-2xl font-bold tracking-[0.14em] text-brand-burgundy sm:text-3xl md:text-5xl lg:text-6xl">
              {siteContent.company.name}
            </h1>
            <p className="mx-auto max-w-3xl text-sm font-medium text-brand-burgundy/95 sm:text-base md:text-xl">
              {siteContent.company.subtitle}
            </p>
            <div className="gold-divider" />
          </Reveal>

          <div className="space-y-4 md:hidden">
            <div className="mx-auto max-w-[15.5rem]">{renderHeroCard(siteContent.hero.blocks[0], 0, 150)}</div>
            <div className="grid grid-cols-2 gap-3">
              {renderHeroCard(siteContent.hero.blocks[1], 1, 230)}
              {renderHeroCard(siteContent.hero.blocks[2], 2, 320)}
            </div>
          </div>

          <div className="hidden gap-5 md:grid md:grid-cols-3">
            {siteContent.hero.blocks.map((item, index) => renderHeroCard(item, index, 150 + index * 90))}
          </div>

        </div>
      </div>
    </section>
  );
}
