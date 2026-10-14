import type { Metadata } from "next";
import { heroContent } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Scribble } from "@/components/ui/Scribble";
import { BrushBg } from "@/components/ui/BrushBg";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Marquee } from "@/components/ui/Marquee";
import { HomeStats } from "@/components/sections/HomeStats";
import { AlternatingRows } from "@/components/sections/AlternatingRows";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ResultsStrip } from "@/components/sections/ResultsStrip";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "B2B Lead Generation & Account-Based Marketing",
  description:
    "We help technology companies and channel partners identify high-value accounts, reach the right decision-makers, and turn conversations into qualified sales opportunities.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 2. HERO: --paper background with tomato (9%) and ink (4%) BrushBg */}
      <section
        aria-label="Hero"
        className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 overflow-hidden bg-paper paper-grain"
      >
        {/* Large tomato swoosh behind the windows (9% opacity) */}
        <BrushBg tone="tomato" shape={1} className="-top-12 -left-20" />
        {/* Second smaller brush swoosh in ink (4% opacity) */}
        <BrushBg tone="ink" shape={3} className="top-1/3 -right-24 scale-90" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Single H1 on page with tight grotesk styling, ink text, and "Qualified Pipeline" in tomato (>=64px) */}
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.04em] leading-[1.02] text-ink">
                B2B Lead Generation That Delivers{" "}
                <span className="relative inline-block text-tomato-ink">
                  Qualified Pipeline.
                  <Scribble variant="underline" tone="tomato" isHero={true} />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl font-normal">
                {heroContent.subheadline}
              </p>

              {/* Action Buttons: Primary tomato fill + ink label (18.7px+ 800) and Secondary transparent + 2px ink border */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  href={heroContent.primaryCta.href}
                  variant="tomato"
                  size="hero"
                >
                  {heroContent.primaryCta.label} →
                </Button>

                <Button
                  href={heroContent.secondaryCta.href}
                  variant="secondary"
                  size="hero"
                >
                  {heroContent.secondaryCta.label}
                </Button>
              </div>
            </div>

            {/* Right Side: Two overlapping WindowFrames at ±1.5deg angles */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLIENT STRIP: --paper-deep with TornEdge */}
      <Marquee />

      {/* 4. STATS: DARK section (--ink), TornEdge top, 4 big figures */}
      <HomeStats />

      {/* 5, 6, 7. ALTERNATING ROWS:
          Row A (--paper) → Row B (--paper-deep) → Row C (--paper) */}
      <AlternatingRows />

      {/* 8. SERVICES GRID: DARK section (--ink-deep), tomato underline scribble, dark SegmentedTabs */}
      <ServicesGrid />

      {/* 9. RESULTS STRIP: --paper, white cards, ink figures with tomato marker highlight */}
      <ResultsStrip />

      {/* 10. PROCESS: --paper-deep, numerals 01-04 in tomato, ink dashed line */}
      <ProcessTimeline />

      {/* 11. FAQ ACCORDION: --paper, ink 700 questions, 3px tomato left border on open, +/x icon */}
      <HomeFaq />

      {/* 12. CLOSING CTA: SOLID TOMATO band (--tomato), TornEdge top, ink heading and ink button */}
      <CtaBand />
    </div>
  );
}
