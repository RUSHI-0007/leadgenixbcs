import type { Metadata } from "next";
import {
  aboutStoryContent,
  philosophyContent,
  whatDrivesUsContent,
  teamContent,
} from "@/data/about";
import { Scribble } from "@/components/ui/Scribble";
import { Highlight } from "@/components/ui/Highlight";
import { BrushBg } from "@/components/ui/BrushBg";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CtaBand } from "@/components/sections/CtaBand";
import { Target, Layers, BarChart3, Briefcase, TrendingUp, Sparkles, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Marketing Experts",
  description:
    "LEADGENIX BCS was founded in 2026 by B2B marketing professionals with 10+ years of collective experience across technology partner ecosystems and sales pipeline development.",
};

export default function AboutPage() {
  const philosophyIcons = [
    <Target key="1" className="w-7 h-7 text-green stroke-[1.5]" aria-hidden="true" />,
    <Layers key="2" className="w-7 h-7 text-green stroke-[1.5]" aria-hidden="true" />,
    <BarChart3 key="3" className="w-7 h-7 text-green stroke-[1.5]" aria-hidden="true" />,
  ];

  const driveIcons = [
    <Briefcase key="1" className="w-6 h-6 text-indigo stroke-[1.5]" aria-hidden="true" />,
    <TrendingUp key="2" className="w-6 h-6 text-indigo stroke-[1.5]" aria-hidden="true" />,
    <Sparkles key="3" className="w-6 h-6 text-indigo stroke-[1.5]" aria-hidden="true" />,
    <Award key="4" className="w-6 h-6 text-indigo stroke-[1.5]" aria-hidden="true" />,
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO (green, BrushBg) */}
      <section aria-label="About Hero" className="relative py-20 sm:py-28 bg-white border-b border-line overflow-hidden">
        <BrushBg tone="green" shape={1} className="-top-10 -right-20" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-ink tracking-tight leading-[1.02]">
              Marketing{" "}
              <span className="relative inline-block text-green">
                experts.
                <Scribble variant="underline" tone="green" />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-ink-soft font-medium">
              Built on Experience. Driven by Growth.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY: Single Column Left + Huge Pull-Stat Right */}
      <section aria-label="Our Story" className="py-20 sm:py-28 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Story */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                {aboutStoryContent.title}.
              </h2>
              <p className="text-base sm:text-lg text-ink-soft leading-relaxed font-normal">
                {aboutStoryContent.paragraph}
              </p>
            </div>

            {/* Right Column: Huge Pull-Stat */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="p-8 sm:p-10 rounded-[20px] bg-mint border border-line/80 max-w-sm w-full text-center space-y-2">
                <div className="font-heading font-black text-6xl sm:text-7xl text-ink tracking-tight">
                  <Highlight>
                    $<AnimatedCounter value={250} />M+
                  </Highlight>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                  business pipeline generated
                </p>
                <p className="text-xs text-ink-soft pt-2">
                  10+ years collective industry experience across technology ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY (3 white cards with bare line icons) */}
      <section aria-label="Our Philosophy" className="py-20 sm:py-28 bg-mist border-y border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
              {philosophyContent.sectionTitle}.
            </h2>
            <p className="text-base sm:text-lg text-ink-soft">
              {philosophyContent.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {philosophyContent.items.map((item, idx) => (
              <div
                key={item.number}
                className="rounded-card border border-line bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-green/40 hover:shadow-cardGreen"
              >
                <div className="space-y-4">
                  <div className="mb-2">
                    {philosophyIcons[idx]}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-ink">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT DRIVES US (2x2 cards, indigo accent) */}
      <section aria-label="What Drives Us" className="py-20 sm:py-28 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
              {whatDrivesUsContent.sectionTitle}.
            </h2>
            <p className="text-base sm:text-lg text-ink-soft">
              {whatDrivesUsContent.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {whatDrivesUsContent.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="rounded-card border border-line bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-indigo/40 hover:shadow-card"
              >
                <div className="space-y-3">
                  <div className="mb-2">
                    {driveIcons[idx]}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-ink">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-ink-soft leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM (4 cards with large circular monogram avatars on tint fills) */}
      <section aria-label="Meet The Team" className="py-20 sm:py-28 bg-mist border-t border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
              {teamContent.sectionTitle}.
            </h2>
            <p className="text-base sm:text-lg text-ink-soft">
              {teamContent.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamContent.members.map((member, idx) => (
              <div
                key={`${member.name}-${idx}`}
                className="rounded-card border border-line bg-white p-6 text-center flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
              >
                {/* Large circular monogram avatar on tint fill */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center font-heading font-extrabold text-xl mb-4 border transition-colors ${
                    member.isJoiningSoon
                      ? "bg-mist text-ink-muted border-line border-dashed"
                      : "bg-green-tint text-green border-green/30"
                  }`}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>

                <h3 className="font-heading font-bold text-lg text-ink">
                  {member.name}
                </h3>

                <p className="text-xs text-ink-muted font-medium mt-1">
                  {member.role}
                </p>

                {member.isJoiningSoon && (
                  <span className="mt-3 text-[11px] font-mono text-ink-muted bg-mist px-2.5 py-0.5 rounded-full border border-line">
                    Joining soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <CtaBand
        headline="Ready To Partner?"
        subheadline="Let's discuss how Leadgenix can help you generate qualified opportunities and build lasting pipeline."
        buttonLabel="Schedule Consultation →"
        scribbleWord="Partner?"
      />
    </div>
  );
}
