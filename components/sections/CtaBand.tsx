"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Scribble } from "@/components/ui/Scribble";
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
  buttonLabel = "Schedule Consultation",
  buttonHref = "/contact",
  scribbleWord,
}: CtaBandProps) {
  const cleanButtonLabel = buttonLabel.replace(/\s*→\s*$/, "");

  const renderHeadline = () => {
    if (!headline) {
      return (
        <>
          Ready to talk{" "}
          <span className="relative inline-block text-ink">
            strategy
            <Scribble variant="underline" tone="ink" />
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
          <span className="relative inline-block text-ink">
            {scribbleWord}
            <Scribble variant="underline" tone="ink" />
          </span>
          {parts.slice(1).join(scribbleWord)}
        </>
      );
    }

    return headline;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* TornEdge top transitioning into solid tomato band */}
      <TornEdge position="top" fill="#FE5E56" />

      <section
        aria-label="Call to Action"
        className="relative py-24 sm:py-32 bg-tomato text-ink overflow-hidden text-center"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Heading in --ink (large, 800) with ink underline scribble */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.05]">
              {renderHeadline()}
            </h2>

            {/* Sub text --ink; must be >= 20px weight 600 for contrast */}
            <p className="text-xl sm:text-2xl font-semibold text-ink leading-relaxed max-w-xl mx-auto">
              {subheadline}
            </p>

            {/* Button INK fill with paper text and tomato arrow (inverted CTA) */}
            <div className="pt-4 flex justify-center">
              <Button
                href={buttonHref}
                variant="ink"
                size="hero"
                className="w-full sm:w-auto text-center shadow-md hover:bg-ink-deep font-extrabold text-[19px]"
                rightIcon={<span className="text-tomato font-black">→</span>}
              >
                {cleanButtonLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
