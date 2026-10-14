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
      {/* 1. HERO (green, BrushBg green behind) */}
      <section
        aria-label="Hero"
        className="relative pt-12 sm:pt-20 pb-16 sm:pb-28 overflow-hidden bg-white"
      >
        {/* Large green organic brush background */}
        <BrushBg tone="green" shape={1} className="-top-12 -left-20" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Single H1 on page with tight grotesk styling and underline scribble */}
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.04em] leading-[1.02] text-ink">
                B2B Lead Generation That Delivers{" "}
                <span className="relative inline-block text-green">
                  Qualified Pipeline.
                  <Scribble variant="underline" tone="green" isHero={true} />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl font-normal">
                {heroContent.subheadline}
              </p>

              {/* Action Buttons: Primary green + Secondary white with border */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  href={heroContent.primaryCta.href}
                  variant="green"
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

      {/* 2. CLIENT MARQUEE STRIP */}
      <Marquee />

      {/* 3. STATS (mist background, TornEdge on top, 4 big 72px figures) */}
      <HomeStats />

      {/* 4. ALTERNATING ROWS A, B, C */}
      <AlternatingRows />

      {/* 5. SERVICES GRID (mist/indigo, BrushBg indigo, SegmentedTabs) */}
      <ServicesGrid />

      {/* 6. RESULTS STRIP (green, replaces testimonials, mint cards with highlight) */}
      <ResultsStrip />

      {/* 7. PROCESS (indigo, 4 columns, big numerals, hand-drawn dashed curve) */}
      <ProcessTimeline />

      {/* 8. FAQ ACCORDION (plain, left-aligned, only client doc Q&As) */}
      <HomeFaq />

      {/* 9. CLOSING CTA (TornEdge top, BrushBg green, light background) */}
      <CtaBand />
    </div>
  );
}
