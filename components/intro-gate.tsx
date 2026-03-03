"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useMemo, useState } from "react";

import { siteContent } from "@/lib/constants";
import badmintonAnimation from "@/public/illustrations/Badminton Animation.json";
import cricketBatBallAnimation from "@/public/illustrations/Cricket bat & ball.json";
import tableTennisAnimation from "@/public/illustrations/Olympics_ Table tennis.json";

type IntroGateProps = {
  children: React.ReactNode;
};

const INTRO_DURATION_MS = 900;

type IntroVariant =
  | { id: "fusion"; type: "css" }
  | { id: "cricket" | "badminton" | "table-tennis"; type: "lottie"; label: string; animationData: object };

const INTRO_VARIANTS: IntroVariant[] = [
  { id: "fusion", type: "css" },
  { id: "cricket", type: "lottie", label: "Cricket intro animation", animationData: cricketBatBallAnimation },
  { id: "badminton", type: "lottie", label: "Badminton intro animation", animationData: badmintonAnimation },
  { id: "table-tennis", type: "lottie", label: "Table tennis intro animation", animationData: tableTennisAnimation }
];

export function IntroGate({ children }: IntroGateProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [variant, setVariant] = useState<IntroVariant | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const pickIntro = () => {
      if (typeof window === "undefined") {
        return INTRO_VARIANTS[0];
      }

      try {
        const key = "aurum-last-intro-variant";
        const lastVariantId = window.sessionStorage.getItem(key);
        const candidates = INTRO_VARIANTS.filter((item) => item.id !== lastVariantId);
        const source = candidates.length > 0 ? candidates : INTRO_VARIANTS;
        const picked = source[Math.floor(Math.random() * source.length)];
        window.sessionStorage.setItem(key, picked.id);
        return picked;
      } catch {
        return INTRO_VARIANTS[Math.floor(Math.random() * INTRO_VARIANTS.length)];
      }
    };

    const chosenVariant = pickIntro();
    setVariant(chosenVariant);

    const startedAt = performance.now();
    let frameId = 0;

    const updateProgress = () => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / INTRO_DURATION_MS) * 100));
      setProgress(nextProgress);
      if (elapsed < INTRO_DURATION_MS) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, INTRO_DURATION_MS);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const progressLabel = useMemo(() => `${progress}%`, [progress]);

  if (isLoading) {
    if (!variant) {
      return <main className="intro-screen" aria-label="Aurum Arena intro loading screen" />;
    }

    return (
      <main className="intro-screen" aria-label="Aurum Arena intro loading screen">
        <div className="intro-glow intro-glow-left" />
        <div className="intro-glow intro-glow-right" />

        {variant.type === "lottie" ? (
          <div className="intro-video-open" role="img" aria-label={variant.label}>
            <Lottie
              animationData={variant.animationData}
              autoplay
              loop
              className="intro-lottie"
            />
          </div>
        ) : (
          <div className="intro-stage" role="img" aria-label="Cricket to football goal loading animation">
            <div className="fusion-scene">
              <div className="pitch-line" />
              <div className="bat">
                <span className="bat-blade" />
                <span className="bat-handle" />
              </div>
              <div className="impact-burst" />
              <div className="fusion-ball cricket-ball" />
              <div className="arc-trail" />
              <div className="goal-post">
                <span className="net net-a" />
                <span className="net net-b" />
                <span className="net net-c" />
              </div>
              <p className="scene-badge six">6!</p>
              <p className="scene-badge goal">Goal!</p>
            </div>
          </div>
        )}

        <div className="intro-brand-overlay" aria-hidden="true">
          <Image src="/logo.png" alt={siteContent.company.name} width={68} height={68} className="intro-logo" priority />
          <h1>{siteContent.company.name}</h1>
          <p className="intro-sub">Loading...</p>
        </div>

        <div className="intro-progress" aria-hidden="true">
          <div className="intro-progress-bar" style={{ width: progressLabel }} />
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
