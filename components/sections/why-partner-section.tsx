import {
  Activity,
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  ShieldCheck,
  Users2,
} from "lucide-react";

import { siteContent } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";

export function WhyPartnerSection() {
  const pointIcons = [
    BriefcaseBusiness,
    ClipboardCheck,
    Users2,
    BarChart3,
    Activity,
    ShieldCheck,
  ];

  const benefitTags = [
    "Less HR dependency",
    "Structured process",
    "Inclusive by design",
    "Higher participation",
    "Flexible formats",
    "Trust & transparency",
  ];

  const signalWidths = ["w-[44%]", "w-[58%]", "w-[52%]", "w-[68%]", "w-[56%]", "w-[64%]"];

  return (
    <section id="why-partner" className="py-14 md:py-24">
      <div className="section-shell space-y-8 md:space-y-10">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">{siteContent.partner.heading}</h2>
          <p className="section-subheading">{siteContent.partner.subheading}</p>
          <div className="gold-divider" />
        </Reveal>

        <Reveal delay={60}>
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-gold/35 bg-white/70 px-4 py-3 text-center text-sm leading-6 text-brand-burgundy/90 backdrop-blur-sm md:text-base">
            We design outcomes, not just events — each engagement format below maps directly to measurable culture and productivity impact.
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {siteContent.partner.points.map((point, index) => (
            <Reveal key={point} delay={80 + index * 70}>
              <article className="interactive-card group relative overflow-hidden rounded-[1rem] border border-brand-burgundy/15 bg-white/80 p-3 sm:p-4 md:rounded-[1.25rem] md:p-5 text-brand-burgundy shadow-premium hover:border-brand-gold/55 hover:shadow-[0_20px_44px_rgba(114,56,61,0.20)]">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-gold/25 via-brand-gold/85 to-brand-gold/20" />
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand-gold/15 blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-brand-gold/25" />
                <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(212,175,55,0.12),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10 space-y-2.5 md:space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-gold/60 bg-brand-soft/60 transition duration-300 group-hover:scale-110 group-hover:border-brand-gold group-hover:bg-white md:h-10 md:w-10 md:rounded-xl">
                        <span className="absolute inset-0 rounded-xl border border-brand-gold/50 opacity-0 transition duration-300 group-hover:opacity-100" />
                        {(() => {
                          const Icon = pointIcons[index];
                          return <Icon className="h-3.5 w-3.5 text-brand-burgundy transition duration-300 group-hover:text-brand-gold md:h-4 md:w-4" />;
                        })()}
                      </div>
                      <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.04em] text-brand-burgundy/85 transition duration-300 group-hover:border-brand-gold/70 group-hover:bg-brand-gold/20 group-hover:text-brand-burgundy md:px-2.5 md:py-1 md:text-[11px] md:tracking-[0.08em]">
                        {benefitTags[index]}
                      </span>
                    </div>

                    <span className="text-xs font-semibold tracking-[0.05em] text-brand-gold transition duration-300 group-hover:scale-110 md:text-sm md:tracking-[0.08em]">0{index + 1}</span>
                  </div>

                  <div className="space-y-1.5 pl-0.5 transition duration-300 group-hover:translate-x-0.5">
                    <h3 className="text-xs font-semibold tracking-[0.01em] text-brand-burgundy transition duration-300 group-hover:text-brand-burgundy sm:text-sm md:text-base">
                      {point.split(" — ")[0]}
                    </h3>
                    <p className="text-[11px] leading-5 text-brand-burgundy/88 sm:text-xs sm:leading-5 md:text-base md:leading-7">
                      {point.split(" — ")[1]}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <div className="h-[4px] flex-1 rounded-full bg-brand-burgundy/12" />
                    <div className={`h-[4px] rounded-full bg-brand-gold/70 transition-all duration-500 group-hover:bg-brand-gold ${signalWidths[index]}`} />
                    <div className="h-2 w-2 rounded-full bg-brand-gold/55 transition duration-500 group-hover:scale-125 group-hover:bg-brand-gold" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
