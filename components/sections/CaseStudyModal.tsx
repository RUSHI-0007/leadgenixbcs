"use client";

import React from "react";
import { CaseStudyData } from "@/data/case-studies";
import { Modal } from "@/components/ui/Modal";
import { WindowFrame } from "@/components/ui/WindowFrame";

interface CaseStudyModalProps {
  caseStudy: CaseStudyData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${caseStudy.client} — ${caseStudy.title}`}
    >
      <div className="space-y-6">
        {/* WindowFrame Detail Container */}
        <WindowFrame title={`${caseStudy.client} Campaign Analysis`} className="border border-line shadow-none">
          {/* Objective */}
          <div className="space-y-1 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
              Objective
            </span>
            <p className="text-sm sm:text-base font-medium text-ink leading-relaxed">
              {caseStudy.objective}
            </p>
          </div>

          {/* Solutions Promoted as small mono tag chips */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              Solutions promoted
            </span>
            <div className="flex flex-wrap gap-2">
              {caseStudy.solutions.map((sol) => (
                <span
                  key={sol}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-tomato-tint text-tomato-ink border border-tomato-tint/80 font-bold"
                >
                  {sol}
                </span>
              ))}
            </div>
          </div>

          {/* Metric Rows */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              Campaign metrics & results
            </span>
            <div className="divide-y divide-line border-y border-line">
              <div className="flex justify-between py-2 text-xs sm:text-sm text-ink-soft">
                <span>Duration</span>
                <span className="font-bold text-ink">{caseStudy.rawMetrics.duration}</span>
              </div>
              <div className="flex justify-between py-2 text-xs sm:text-sm text-ink-soft">
                <span>Accounts targeted</span>
                <span className="font-bold text-ink">{caseStudy.rawMetrics.accountsTargeted}</span>
              </div>
              {caseStudy.headlineKpis.map((kpi, idx) => (
                <div key={idx} className="flex justify-between py-2 text-xs sm:text-sm text-ink-soft">
                  <span>{kpi.label}</span>
                  <span className="font-bold text-ink">{kpi.metric}</span>
                </div>
              ))}
              {caseStudy.computedRates.map((cr, idx) => (
                <div key={idx} className="flex justify-between py-2 text-xs sm:text-sm text-ink-soft bg-tomato-tint/50 px-2 rounded">
                  <span>{cr.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-tomato-ink font-mono">{cr.formatted}</span>
                    {cr.comment && (
                      <span className="text-[11px] text-ink-muted font-mono">
                        ({cr.comment})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Numbered Process */}
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              Execution process
            </span>
            <ol className="divide-y divide-line/60 border-y border-line text-xs sm:text-sm">
              {caseStudy.process.map((step, idx) => (
                <li key={idx} className="py-2 flex items-center justify-between text-ink-soft">
                  <span>{step}</span>
                  <span className="font-mono text-xs text-ink-muted">0{idx + 1}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Business Outcome */}
          <div className="p-4 rounded-card bg-paper-deep border border-line space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-ink-muted block">
              Business outcome
            </span>
            <p className="text-sm text-ink leading-relaxed font-medium">
              {caseStudy.outcome}
            </p>
          </div>
        </WindowFrame>
      </div>
    </Modal>
  );
}
