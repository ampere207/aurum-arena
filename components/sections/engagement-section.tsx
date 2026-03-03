import {
  Award,
  BarChart3,
  Building2,
  Calendar,
  CircleDot,
  Crown,
  Gamepad2,
  GitBranch,
  Goal,
  MapPin,
  Medal,
  Shield,
  Table2,
  Target,
  Trophy,
  Users,
  Waves
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/constants";

export function EngagementSection() {
  const formatVisuals = [Building2, Waves];

  const activityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Table Tennis": Table2,
    Carrom: CircleDot,
    Chess: Crown,
    Foosball: Goal,
    "Board Games": Gamepad2,
    "Mini Tournaments": Medal,
    "Cricket Tournaments": Trophy,
    "Badminton Tournaments": CircleDot,
    "Football / Futsal": Goal,
    "Box Cricket": Shield,
    "Multi-Team Sports Days": Users
  };

  const leftFlowIcons = [Calendar, GitBranch, Users, BarChart3];
  const rightFlowIcons = [MapPin, Building2, Trophy, Award];

  const flowSteps = [
    { label: siteContent.engagement.leftColumn[0], icon: leftFlowIcons[0], number: 1 },
    { label: siteContent.engagement.leftColumn[1], icon: leftFlowIcons[1], number: 2 },
    { label: siteContent.engagement.leftColumn[2], icon: leftFlowIcons[2], number: 3 },
    { label: siteContent.engagement.leftColumn[3], icon: leftFlowIcons[3], number: 4 },
    { label: siteContent.engagement.rightColumn[0], icon: rightFlowIcons[0], number: 5 },
    { label: siteContent.engagement.rightColumn[1], icon: rightFlowIcons[1], number: 6 },
    { label: siteContent.engagement.rightColumn[2], icon: rightFlowIcons[2], number: 7 },
    { label: siteContent.engagement.rightColumn[3], icon: rightFlowIcons[3], number: 8 }
  ];

  const snakeRows = [
    [flowSteps[0], flowSteps[1]],
    [flowSteps[3], flowSteps[2]],
    [flowSteps[4], flowSteps[5]],
    [flowSteps[7], flowSteps[6]]
  ];

  const rowTimings = [
    { first: 0, connector: 1, second: 2, down: 3 },
    { first: 6, connector: 5, second: 4, down: 7 },
    { first: 8, connector: 9, second: 10, down: 11 },
    { first: 14, connector: 13, second: 12, down: null }
  ];

  return (
    <section id="engagement-formats" className="relative overflow-hidden py-16 md:py-24">
      <div className="ambient-orb absolute left-4 top-16 h-36 w-36 rounded-full bg-brand-gold/10 blur-3xl" />
      <Reveal delay={180} className="sports-bg-icon right-10 top-20 hidden lg:block fast">
        <Target className="h-7 w-7" />
      </Reveal>
      <Reveal delay={260} className="sports-bg-icon alt left-10 bottom-24 hidden lg:block slow">
        <Waves className="h-7 w-7" />
      </Reveal>
      <Reveal delay={220} className="sports-bg-icon right-[22%] bottom-10 hidden xl:block">
        <Trophy className="h-6 w-6" />
      </Reveal>

      <div className="section-shell relative z-10 space-y-9">
        <Reveal className="space-y-3 text-center">
          <h2 className="section-heading">{siteContent.engagement.heading}</h2>
          <p className="section-subheading">{siteContent.engagement.subheading}</p>
          <div className="gold-divider" />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {siteContent.engagement.formats.map((format, index) => (
            <Reveal key={format.title} delay={80 + index * 120}>
              <Card className="interactive-card h-full overflow-hidden border-brand-burgundy/15 bg-white/75 hover:border-brand-gold/55 hover:shadow-premium">
                <CardHeader className="space-y-4 border-b border-brand-burgundy/10">
                  <CardTitle className="flex items-center gap-3 text-2xl tracking-[0.08em] text-brand-burgundy">
                    {(() => {
                      const Icon = formatVisuals[index];
                      return <Icon className="h-5 w-5 text-brand-gold" />;
                    })()}
                    {format.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <ul className="grid gap-3 text-brand-burgundy sm:grid-cols-2">
                    {format.activities.map((activity) => (
                      <li key={activity} className="interactive-card rounded-lg border border-brand-burgundy/10 bg-brand-ivory/55 p-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/55 bg-white">
                            {(() => {
                              const Icon = activityIcons[activity] ?? CircleDot;
                              return <Icon className="h-4 w-4 text-brand-burgundy" />;
                            })()}
                          </div>
                          <span className="text-sm md:text-base">{activity}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="rounded-xl border border-brand-gold/45 bg-brand-soft/60 p-3.5 font-medium text-brand-burgundy">
                    {format.note}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <Card className="interactive-card border-brand-gold/35 bg-white/75 hover:border-brand-gold/60">
            <CardHeader className="border-b border-brand-burgundy/10">
              <CardTitle className="text-2xl tracking-[0.08em] text-brand-burgundy">{siteContent.engagement.handleTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-7">
              <div className="relative rounded-2xl border border-brand-gold/35 bg-white/65 p-4 md:p-6 xl:p-7">
                <div className="space-y-5 xl:hidden">
                  {flowSteps
                    .slice()
                    .sort((a, b) => a.number - b.number)
                    .map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <Reveal key={step.label} delay={120 + index * 140}>
                          <div className="snake-node p-3.5">
                            <div className="flex items-start gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/55 bg-white">
                                <Icon className="h-4 w-4 text-brand-burgundy" />
                              </div>
                              <div>
                                <p className="text-sm font-bold tracking-[0.08em] text-brand-gold">0{step.number}</p>
                                <p className="text-base font-medium text-brand-burgundy">{step.label}</p>
                              </div>
                            </div>
                          </div>
                          {index < 7 ? (
                            <Reveal delay={180 + index * 140} className="flex justify-center py-0.5">
                              <div className="snake-link-v ttb" />
                            </Reveal>
                          ) : null}
                        </Reveal>
                      );
                    })}
                </div>

                <div className="relative hidden space-y-5 xl:block">
                  {snakeRows.map((row, rowIndex) => {
                    const isLTR = rowIndex % 2 === 0;
                    const FirstIcon = row[0].icon;
                    const SecondIcon = row[1].icon;
                    const timing = rowTimings[rowIndex];

                    return (
                      <div key={`row-${rowIndex}`} className="space-y-3">
                        <div className="grid grid-cols-[1fr_5.5rem_1fr] items-stretch gap-3">
                          {isLTR ? (
                            <>
                              <Reveal delay={120 + timing.first * 120}>
                                <div className="snake-node min-h-[7.6rem] p-3.5">
                                  <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/55 bg-white">
                                      <FirstIcon className="h-4 w-4 text-brand-burgundy" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold tracking-[0.08em] text-brand-gold">0{row[0].number}</p>
                                      <p className="text-base font-medium text-brand-burgundy">{row[0].label}</p>
                                    </div>
                                  </div>
                                </div>
                              </Reveal>
                              <Reveal delay={120 + timing.connector * 120} className="snake-link-wrap -mx-2.5">
                                <div className="snake-link-h ltr" />
                              </Reveal>
                              <Reveal delay={120 + timing.second * 120}>
                                <div className="snake-node min-h-[7.6rem] p-3.5">
                                  <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/55 bg-white">
                                      <SecondIcon className="h-4 w-4 text-brand-burgundy" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold tracking-[0.08em] text-brand-gold">0{row[1].number}</p>
                                      <p className="text-base font-medium text-brand-burgundy">{row[1].label}</p>
                                    </div>
                                  </div>
                                </div>
                              </Reveal>
                            </>
                          ) : (
                            <>
                              <Reveal delay={120 + timing.first * 120}>
                                <div className="snake-node min-h-[7.6rem] p-3.5">
                                  <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/55 bg-white">
                                      <FirstIcon className="h-4 w-4 text-brand-burgundy" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold tracking-[0.08em] text-brand-gold">0{row[0].number}</p>
                                      <p className="text-base font-medium text-brand-burgundy">{row[0].label}</p>
                                    </div>
                                  </div>
                                </div>
                              </Reveal>
                              <Reveal delay={120 + timing.connector * 120} className="snake-link-wrap -mx-2.5">
                                <div className="snake-link-h rtl" />
                              </Reveal>
                              <Reveal delay={120 + timing.second * 120}>
                                <div className="snake-node min-h-[7.6rem] p-3.5">
                                  <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/55 bg-white">
                                      <SecondIcon className="h-4 w-4 text-brand-burgundy" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-bold tracking-[0.08em] text-brand-gold">0{row[1].number}</p>
                                      <p className="text-base font-medium text-brand-burgundy">{row[1].label}</p>
                                    </div>
                                  </div>
                                </div>
                              </Reveal>
                            </>
                          )}
                        </div>

                        {timing.down !== null ? (
                          <Reveal delay={120 + timing.down * 120} className={`flex ${isLTR ? "justify-end pr-[20%]" : "justify-start pl-[20%]"}`}>
                            <div className="snake-link-v ttb" />
                          </Reveal>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-2 rounded-xl border border-brand-gold/50 bg-white/80 p-4 text-brand-burgundy md:grid-cols-2">
                {siteContent.engagement.notes.map((note) => (
                  <p key={note} className="rounded-lg border border-brand-burgundy/10 bg-brand-ivory/50 px-3 py-2">
                    {note}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
