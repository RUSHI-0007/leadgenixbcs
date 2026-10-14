import React from "react";
import { CaseStudyData } from "@/data/case-studies";
import { Highlight } from "@/components/ui/Highlight";

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
  onOpenDetails: (caseStudy: CaseStudyData) => void;
}

export function CaseStudyCard({ caseStudy, onOpenDetails }: CaseStudyCardProps) {
  const getClientInitials = (client: string) => {
    return client
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };

  const getKeyFigure = () => {
    if (caseStudy.id === "cs-5-dell-csg") return "INR 2.15 Cr";
    if (caseStudy.computedRates[0]) return caseStudy.computedRates[0].formatted;
    return caseStudy.headlineKpis[0].metric;
  };

  const initials = getClientInitials(caseStudy.client);
  const keyMetric = getKeyFigure();

  return (
    <div
      onClick={() => onOpenDetails(caseStudy)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails(caseStudy);
        }
      }}
      role="button"
      tabIndex={0}
      className="p-6 sm:p-7 rounded-[20px] bg-mint transition-all duration-200 hover:-translate-y-1 hover:shadow-cardGreen cursor-pointer select-none text-left flex flex-col justify-between"
      aria-label={`View details for ${caseStudy.client} case study`}
    >
      <div className="space-y-4">
        {/* Monogram circle + Client + Category */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-paper border border-line flex items-center justify-center font-heading font-bold text-xs text-ink shrink-0">
            {initials}
          </div>
          <div>
            <h3 className="font-heading font-bold text-base text-ink line-clamp-1">
              {caseStudy.client}
            </h3>
            <span className="text-xs font-mono text-ink-muted">
              {caseStudy.category}
            </span>
          </div>
        </div>

        {/* Big figure with yellow highlight */}
        <div className="pt-2">
          <div className="font-heading font-black text-3xl sm:text-4xl text-ink tracking-tight">
            <Highlight>{keyMetric}</Highlight>
          </div>
          <p className="text-xs text-ink-muted mt-1 font-mono uppercase tracking-wider">
            {caseStudy.headlineKpis[0].label}
          </p>
        </div>

        {/* Campaign title & Outcome */}
        <div>
          <p className="text-sm font-bold text-ink mb-1">
            {caseStudy.title}
          </p>
          <p className="text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
            {caseStudy.outcome}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between text-xs font-bold text-green">
        <span>View campaign breakdown</span>
        <span aria-hidden="true">→</span>
      </div>
    </div>
  );
}
