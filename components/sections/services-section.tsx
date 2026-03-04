import {
  Award,
  Camera,
  CheckCircle2,
  Medal,
  Mic2,
  Sparkles,
  Shirt,
  Soup,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

const serviceIcons = [Mic2, Soup, Camera, Shirt, Medal];
const serviceTags = [
  "Event Operations",
  "Hospitality",
  "Media Production",
  "Brand Presence",
  "Recognition",
];
const serviceSignalWidths = ["w-[44%]", "w-[56%]", "w-[62%]", "w-[52%]", "w-[48%]"];
const serviceOrder = [0, 2, 1, 3, 4] as const;
const servicePlacementClasses = [
  "xl:col-start-1 xl:row-start-1",
  "xl:col-start-2 xl:row-start-1",
  "xl:col-start-3 xl:row-start-1",
  "xl:col-start-1 xl:row-start-2",
  "xl:col-start-3 xl:row-start-2",
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-24">
      <div className="ambient-orb absolute -left-12 top-16 h-44 w-44 rounded-full bg-brand-gold/12 blur-3xl" />
      <div className="ambient-orb absolute -right-10 bottom-12 h-52 w-52 rounded-full bg-brand-burgundy/12 blur-3xl" />
      <Reveal delay={160} className="sports-bg-icon right-10 top-20 hidden lg:block fast">
        <Sparkles className="h-7 w-7" />
      </Reveal>
      <Reveal delay={250} className="sports-bg-icon alt left-10 bottom-24 hidden lg:block slow">
        <Award className="h-7 w-7" />
      </Reveal>

      <div className="section-shell space-y-8 md:space-y-10">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">{siteContent.services.heading}</h2>
          <p className="section-subheading mx-auto max-w-4xl">{siteContent.services.intro}</p>
          <div className="gold-divider" />
        </Reveal>

        <Reveal delay={70}>
          <div className="mx-auto max-w-4xl rounded-2xl border border-brand-gold/35 bg-white/75 px-4 py-3 text-center text-sm leading-6 text-brand-burgundy/90 shadow-premium backdrop-blur-sm md:px-6 md:py-4 md:text-base">
            End-to-end execution support across planning, hospitality, media, and recognition — crafted to elevate participation and brand recall.
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:grid-rows-2">
          {serviceOrder.map((categoryIndex, displayIndex) => {
            const category = siteContent.services.categories[categoryIndex];
            const Icon = serviceIcons[categoryIndex] ?? Medal;
            return (
              <Reveal key={category.title} delay={90 + displayIndex * 70} className={servicePlacementClasses[displayIndex]}>
                <article className="interactive-card group relative overflow-hidden rounded-[1rem] border border-brand-burgundy/15 bg-white/80 p-3 sm:p-3.5 md:rounded-[1.25rem] md:p-5 text-brand-burgundy shadow-premium hover:border-brand-gold/55 hover:shadow-[0_20px_44px_rgba(114,56,61,0.20)]">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-gold/25 via-brand-gold/85 to-brand-gold/20" />
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand-gold/15 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-brand-gold/25" />
                  <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(212,175,55,0.12),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 space-y-2.5 md:space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-gold/60 bg-brand-soft/60 transition duration-300 group-hover:scale-110 group-hover:border-brand-gold group-hover:bg-white md:h-10 md:w-10 md:rounded-xl">
                          <span className="absolute inset-0 rounded-xl border border-brand-gold/50 opacity-0 transition duration-300 group-hover:opacity-100" />
                          <Icon className="h-3.5 w-3.5 text-brand-burgundy transition duration-300 group-hover:text-brand-gold md:h-4 md:w-4" />
                        </div>
                        <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.04em] text-brand-burgundy/85 transition duration-300 group-hover:border-brand-gold/70 group-hover:bg-brand-gold/20 group-hover:text-brand-burgundy md:px-2.5 md:py-1 md:text-[11px] md:tracking-[0.08em]">
                          {serviceTags[categoryIndex]}
                        </span>
                      </div>

                      <span className="text-xs font-semibold tracking-[0.05em] text-brand-gold transition duration-300 group-hover:scale-110 md:text-sm md:tracking-[0.08em]">0{displayIndex + 1}</span>
                    </div>

                    <div className="space-y-1.5 pl-0.5 transition duration-300 group-hover:translate-x-0.5">
                      <h3 className="text-xs font-semibold tracking-[0.01em] text-brand-burgundy transition duration-300 group-hover:text-brand-burgundy sm:text-sm md:text-base">
                        {category.title}
                      </h3>
                      <p className="text-[11px] leading-5 text-brand-burgundy/78 sm:text-xs sm:leading-5 md:text-sm md:leading-6">
                        Curated execution support tailored for this service track.
                      </p>
                    </div>

                    <ul className="relative space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="group/item flex items-start gap-2 rounded-lg border border-brand-burgundy/10 bg-brand-ivory/55 px-2.5 py-1.5 text-xs leading-5 text-brand-burgundy/92 transition duration-300 hover:border-brand-gold/45 hover:bg-white/80 md:px-3 md:py-2 md:text-sm md:leading-6"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold/80 transition duration-300 group-hover/item:scale-105 group-hover/item:text-brand-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                    </ul>

                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-[4px] flex-1 rounded-full bg-brand-burgundy/12" />
                      <div className={`h-[4px] rounded-full bg-brand-gold/70 transition-all duration-500 group-hover:bg-brand-gold ${serviceSignalWidths[categoryIndex]}`} />
                      <div className="h-2 w-2 rounded-full bg-brand-gold/55 transition duration-500 group-hover:scale-125 group-hover:bg-brand-gold" />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
