import type { Metadata } from "next";
import { caseStudiesHeader } from "@/data/case-studies";
import { Scribble } from "@/components/ui/Scribble";
import { BrushBg } from "@/components/ui/BrushBg";
import { CaseStudiesView } from "@/components/sections/CaseStudiesView";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Case Studies | Results That Speak",
  description:
    "Explore how our account-based strategies and targeted campaigns deliver measurable sales pipeline and revenue across enterprise technology ecosystems.",
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Header (green accent) */}
      <section aria-label="Case Studies Header" className="relative py-20 sm:py-28 bg-white border-b border-line overflow-hidden">
        <BrushBg tone="green" shape={1} className="-top-12 -left-20" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-ink tracking-tight leading-[1.02]">
              Results that{" "}
              <span className="relative inline-block text-green">
                speak.
                <Scribble variant="underline" tone="green" />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed font-normal">
              {caseStudiesHeader.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Filterable Grid */}
      <section aria-label="Campaign Case Studies" className="py-20 sm:py-28 bg-mist">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesView />
        </div>
      </section>

      {/* 3. Closing CTA */}
      <CtaBand
        headline="Ready to achieve similar results?"
        subheadline="Let's build a dedicated, metric-driven demand generation strategy tailored to your target accounts and growth goals."
        buttonLabel="Schedule Consultation →"
        scribbleWord="results?"
      />
    </div>
  );
}
