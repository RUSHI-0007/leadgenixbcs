"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Scribble } from "@/components/ui/Scribble";
import { BrushBg } from "@/components/ui/BrushBg";
import { TornEdge } from "@/components/ui/TornEdge";

interface CtaBandProps {
  headline?: string;
  subheadline?: string;
  buttonLabel?: string;
  buttonHref?: string;
  scribbleWord?: string;
}

export function CtaBand({
  headline,
  subheadline = "Let's discuss how a structured lead generation and ABM program can strengthen your pipeline and drive measurable growth.",
  buttonLabel = "Schedule Consultation →",
  buttonHref = "/contact",
  scribbleWord,
}: CtaBandProps) {
  const renderHeadline = () => {
    if (!headline) {
      return (
        <>
          Ready to talk{" "}
          <span className="relative inline-block text-green">
            strategy
            <Scribble variant="underline" tone="green" />
          </span>
          ?
        </>
      );
    }

    if (scribbleWord && headline.includes(scribbleWord)) {
      const parts = headline.split(scribbleWord);
      return (
        <>
          {parts[0]}
          <span className="relative inline-block text-green">
            {scribbleWord}
            <Scribble variant="underline" tone="green" />
          </span>
          {parts.slice(1).join(scribbleWord)}
        </>
      );
    }

    return headline;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* TornEdge top */}
      <TornEdge position="top" fill="#F4FAF7" />

      <section
        aria-label="Call to Action"
        className="relative py-24 sm:py-32 bg-mint text-ink overflow-hidden text-center"
      >
        {/* Faint green organic brush background */}
        <BrushBg
          tone="green"
          shape={2}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125"
        />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.05]">
              {renderHeadline()}
            </h2>

            <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto font-normal">
              {subheadline}
            </p>

            <div className="pt-4 flex justify-center">
              <Button
                href={buttonHref}
                variant="green"
                size="hero"
                className="w-full sm:w-auto text-center"
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
