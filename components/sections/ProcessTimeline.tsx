"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { processContent } from "@/data/home";

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "start 40%"],
  });

  const pathProgress = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0]), {
    stiffness: 100,
    damping: 24,
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Our Process"
      className="py-24 sm:py-32 bg-paper-deep paper-grain border-y border-line overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-3">
            Our process.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft">
            {processContent.sectionIntro}
          </p>
        </div>

        {/* 1. Desktop Layout (≥1024px): 4 Columns with arrows in the numeral header row */}
        <div className="hidden lg:grid grid-cols-4 gap-8 xl:gap-10">
          {processContent.steps.map((step, idx) => {
            const isLast = idx === processContent.steps.length - 1;

            return (
              <div key={step.step} className="flex flex-col text-left">
                {/* Top Row: Numerals 01-04 in tomato (>=48px) + Hand-drawn dashed line in --ink at 40% with ink arrowheads */}
                <div className="flex items-center gap-3 mb-6 min-h-[52px]">
                  <span className="font-heading font-extrabold text-5xl text-tomato tracking-tight shrink-0">
                    {step.step}
                  </span>

                  {/* Connecting dashed line in ink at 40% + arrowhead in ink */}
                  {!isLast && (
                    <div className="flex-1 pr-2 pointer-events-none select-none" aria-hidden="true">
                      <svg
                        viewBox="0 0 140 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-5 text-ink overflow-visible"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 4 14 C 40 6, 80 20, 132 12"
                          stroke="#3F3F3F"
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                          opacity="0.4"
                          pathLength={1}
                          style={{
                            pathLength: 1,
                            strokeDashoffset: shouldReduceMotion ? 0 : pathProgress,
                          }}
                        />
                        <path
                          d="M 132 12 L 122 7 M 132 12 L 124 18"
                          stroke="#3F3F3F"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="font-heading font-bold text-xl text-ink mb-2.5 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2. Mobile & Tablet Layout (<1024px): Vertical timeline */}
        <div className="block lg:hidden relative pl-6 sm:pl-8">
          {/* Vertical dashed line in --ink at 40% */}
          <div
            className="absolute left-2.5 sm:left-3 top-3 bottom-6 w-0.5 border-l-2 border-dashed border-ink/40 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {processContent.steps.map((step) => (
              <div key={step.step} className="relative flex items-start gap-5 sm:gap-6">
                {/* Numeral Badge positioned on the line */}
                <div className="relative -ml-6 sm:-ml-8 flex items-center justify-center shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border-2 border-tomato flex items-center justify-center shadow-sm">
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-tomato">
                      {step.step}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="font-heading font-bold text-xl text-ink">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
