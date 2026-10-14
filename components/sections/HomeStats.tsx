"use client";

import React from "react";
import { TornEdge } from "@/components/ui/TornEdge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HomeStats() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* TornEdge on top transitioning into dark --ink section */}
      <TornEdge position="top" fill="#3F3F3F" />

      <section aria-label="Key Performance Figures" className="relative py-16 sm:py-28 bg-ink text-paper overflow-hidden">
        {/* Oversized outlined numeral behind content: 1px --line-dark outline at 6% opacity */}
        <div
          aria-hidden="true"
          className="decorative-outline absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 text-[130px] sm:text-[220px] lg:text-[280px] font-black"
        >
          250M+
        </div>

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 2x2 on Mobile/Tablet, 4 across with vertical hairlines on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-0 lg:divide-x lg:divide-line-dark">
            {/* Stat 1 */}
            <div className="space-y-1.5 sm:space-y-2 lg:px-6 first:pl-0">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-paper flex items-baseline flex-wrap">
                <AnimatedCounter value={10} duration={1.8} />
                <span className="text-tomato text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">+ Years</span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-paper/75 leading-snug">
                B2B Marketing & Sales Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1.5 sm:space-y-2 lg:px-6">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-paper flex items-baseline flex-wrap">
                <AnimatedCounter value={250} prefix="$" duration={2.2} />
                <span className="text-tomato text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">M+</span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-paper/75 leading-snug">
                Business Pipeline Generated
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1.5 sm:space-y-2 lg:px-6">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-paper flex items-baseline flex-wrap">
                <AnimatedCounter value={14} duration={1.8} />
                <span className="text-tomato text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">%</span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-paper/75 leading-snug">
                Successful Closure Rate
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1.5 sm:space-y-2 lg:px-6 last:pr-0">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-paper flex items-baseline flex-wrap">
                <AnimatedCounter value={6} duration={1.5} />
                <span className="text-tomato text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">+ Industries</span>
              </div>
              <p className="text-[11px] sm:text-sm text-paper/75 leading-relaxed font-normal">
                Technology, IT Infrastructure, Healthcare, Education, Real Estate, Retail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TornEdge bottom transitioning from dark --ink into paper */}
      <TornEdge position="bottom" fill="#3F3F3F" />
    </div>
  );
}
