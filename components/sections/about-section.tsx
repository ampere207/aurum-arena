import {
  Building2,
  Briefcase,
  CheckCircle2,
  Eye,
  Handshake,
  HeartPulse,
  Medal,
  ShieldCheck,
  UsersRound,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

const objectiveIcons = [Users, HeartPulse, Zap, Building2, Trophy];
const transparentIcons = [Handshake, ShieldCheck, Briefcase];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient background orbs */}
      <div className="ambient-orb absolute -right-20 top-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="ambient-orb absolute -left-16 bottom-20 h-56 w-56 rounded-full bg-brand-burgundy/8 blur-3xl" />
      <Reveal delay={160} className="sports-bg-icon right-12 top-24 hidden lg:block fast">
        <Medal className="h-7 w-7" />
      </Reveal>
      <Reveal delay={260} className="sports-bg-icon alt left-12 bottom-24 hidden lg:block slow">
        <UsersRound className="h-7 w-7" />
      </Reveal>

      <div className="section-shell relative z-10 space-y-20">
        {/* ─── Section Header ─── */}
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                {siteContent.about.heading}
              </p>
              <h2 className="section-heading max-w-2xl">{siteContent.about.subheading}</h2>
            </div>
            <div className="hidden h-[2px] flex-1 bg-gradient-to-r from-brand-gold/50 to-transparent md:ml-12 md:block" />
          </div>
        </Reveal>

        {/* ─── About Paragraph ─── */}
        <Reveal delay={60}>
          <div className="relative rounded-2xl border border-brand-gold/30 bg-white/60 px-7 py-6 backdrop-blur-sm md:px-10 md:py-8">
            <div className="absolute -left-3 top-6 hidden h-12 w-1 rounded-full bg-brand-gold md:block" />
            <p className="max-w-6xl text-base leading-8 text-brand-burgundy/95 md:text-lg md:leading-9">
              {siteContent.about.paragraph}
            </p>
          </div>
        </Reveal>

        {/* ─── OUR OBJECTIVE ─── */}
        <div className="space-y-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/60 bg-brand-soft/60">
                <Trophy className="h-5 w-5 text-brand-burgundy" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[0.08em] text-brand-burgundy md:text-3xl">
                  {siteContent.about.objectiveTitle}
                </h3>
                <p className="mt-1 text-sm text-brand-burgundy/80">{siteContent.about.objectivePrefix}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {siteContent.about.objectives.map((point, index) => {
              const Icon = objectiveIcons[index];
              const [title, description] = point.split(" — ");
              return (
                <Reveal key={point} delay={60 + index * 80}>
                  <div className="interactive-card premium-glow group h-full rounded-2xl border border-brand-burgundy/12 bg-white/78 p-5 backdrop-blur-sm hover:border-brand-gold/55 hover:shadow-premium">
                    {/* Icon circle */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-gold/55 bg-gradient-to-br from-brand-soft/85 to-white transition duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <Icon className="h-5 w-5 text-brand-burgundy transition duration-300 group-hover:text-brand-gold" />
                    </div>
                    {/* Title */}
                    <h4 className="mb-2 text-sm font-bold tracking-wide text-brand-burgundy">
                      {title}
                    </h4>
                    {/* Description */}
                    <p className="text-[13px] leading-relaxed text-brand-burgundy/80">
                      {description}
                    </p>
                    <div className="mt-4 h-[2px] w-12 rounded-full bg-brand-gold/45 transition-all duration-300 group-hover:w-full group-hover:bg-brand-gold/70" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ─── TRANSPARENT WORKING MODEL ─── */}
        <div className="space-y-8">
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/60 bg-brand-soft/60">
                <Eye className="h-5 w-5 text-brand-burgundy" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[0.08em] text-brand-burgundy md:text-3xl">
                {siteContent.about.transparentTitle}
              </h3>
            </div>
          </Reveal>

          <div className="mx-auto max-w-5xl space-y-4">
            {siteContent.about.transparentPoints.map((point, index) => (
              <Reveal key={point} delay={80 + index * 100}>
                <>
                  <div className={`interactive-card premium-glow group relative flex min-h-[11.2rem] flex-col overflow-hidden rounded-2xl border border-brand-gold/35 bg-white/72 p-6 backdrop-blur-sm hover:border-brand-gold/65 hover:shadow-premium ${index === 0 ? "mr-auto w-full md:w-[72%]" : index === 1 ? "mx-auto w-full md:w-[72%]" : "ml-auto w-full md:w-[72%]"}`}>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-burgundy text-sm font-bold text-white transition duration-300 group-hover:bg-brand-gold">
                        {index + 1}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-brand-gold/50 transition duration-300 group-hover:text-brand-gold" />
                    </div>

                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/55 bg-brand-soft/55">
                      {(() => {
                        const Icon = transparentIcons[index];
                        return <Icon className="h-5 w-5 text-brand-burgundy" />;
                      })()}
                    </div>

                    <p className="flex-1 text-sm leading-7 text-brand-burgundy/95 md:text-base">{point}</p>
                    <div className="mt-4 h-[2px] w-12 rounded-full bg-brand-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-brand-gold/60" />
                  </div>

                  {index < siteContent.about.transparentPoints.length - 1 ? (
                    <Reveal delay={130 + index * 100} className={`hidden md:flex ${index === 0 ? "justify-center pl-[20%]" : "justify-center pr-[20%]"}`}>
                      <div className={`workflow-link ${index === 0 ? "diag-right" : "diag-right-soft"}`} />
                    </Reveal>
                  ) : null}
                </>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
