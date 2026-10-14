"use client";

import React, { useState } from "react";
import { caseStudiesList, CaseStudyData } from "@/data/case-studies";
import { Scribble } from "@/components/ui/Scribble";
import { Highlight } from "@/components/ui/Highlight";
import { CaseStudyModal } from "@/components/sections/CaseStudyModal";
import { cn } from "@/lib/utils";

export function ResultsStrip() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudyData | null>(null);

  const getClientInitials = (client: string) => {
    return client
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };

  const getKeyFigure = (study: CaseStudyData) => {
    if (study.id === "cs-5-dell-csg") return "INR 2.15 Cr";
    if (study.computedRates[0]) return study.computedRates[0].formatted;
    return study.headlineKpis[0].metric;
  };

  // Render a single card component
  const renderCard = (study: CaseStudyData, keyPrefix: string) => {
    const initials = getClientInitials(study.client);
    const keyMetric = getKeyFigure(study);

    return (
      <div
        key={`${keyPrefix}-${study.id}`}
        onClick={() => setActiveModalStudy(study)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActiveModalStudy(study);
          }
        }}
        role="button"
        tabIndex={0}
        className={cn(
          "w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 p-6 sm:p-7 rounded-[20px] bg-card",
          "border border-line transition-all duration-200",
          "hover:-translate-y-1.5 hover:shadow-card hover:border-tomato",
          "cursor-pointer select-none text-left flex flex-col justify-between"
        )}
        aria-label={`View ${study.client} case study results`}
      >
        <div className="space-y-4">
          {/* Monogram circle --tomato-tint with --tomato-ink initials */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-tomato-tint flex items-center justify-center font-heading font-extrabold text-xs text-tomato-ink shrink-0">
              {initials}
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-ink line-clamp-1">
                {study.client}
              </h3>
              <p className="text-xs text-ink-muted line-clamp-1">
                {study.title}
              </p>
            </div>
          </div>

          {/* Big figure at 40px 800 in ink with tomato marker highlight behind it */}
          <div className="pt-2">
            <div className="font-heading font-extrabold text-[36px] sm:text-[40px] text-ink leading-tight tracking-tight">
              <Highlight>{keyMetric}</Highlight>
            </div>
            <p className="text-xs text-ink-muted mt-1 font-mono uppercase tracking-wider">
              {study.headlineKpis[0].label}
            </p>
          </div>

          {/* Real business outcome from /data */}
          <p className="text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
            {study.outcome}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between text-xs font-bold text-tomato-ink">
          <span>View campaign data</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    );
  };

  return (
    <section
      aria-label="Campaign Results"
      className="py-24 sm:py-32 bg-paper overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
          Results, not{" "}
          <span className="relative inline-block text-ink">
            promises.
            <Scribble variant="underline" tone="tomato" />
          </span>
        </h2>
      </div>

      {/* Infinite continuously moving strip (all the time, pause on hover) */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-4">
        <div
          className={cn(
            "flex gap-6 w-max items-stretch",
            "animate-marquee hover:[animation-play-state:paused]"
          )}
          style={{
            animationDuration: "42s",
          }}
        >
          {/* First set of 7 cards */}
          {caseStudiesList.map((study) => renderCard(study, "set1"))}

          {/* Duplicated set of 7 cards for seamless continuous looping */}
          {caseStudiesList.map((study) => renderCard(study, "set2"))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalStudy && (
        <CaseStudyModal
          caseStudy={activeModalStudy}
          isOpen={Boolean(activeModalStudy)}
          onClose={() => setActiveModalStudy(null)}
        />
      )}
    </section>
  );
}
