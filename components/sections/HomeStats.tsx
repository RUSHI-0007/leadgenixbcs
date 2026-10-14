"use client";

import React from "react";
import { TornEdge } from "@/components/ui/TornEdge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HomeStats() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* TornEdge on top transitioning from white to mist */}
      <TornEdge position="top" fill="#F6F7FC" />

      <section aria-label="Key Performance Figures" className="py-16 sm:py-28 bg-mist text-ink">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2x2 on Mobile and Tablet, 4 across on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-8">
            {/* Stat 1 */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-ink flex items-baseline flex-wrap">
                <AnimatedCounter value={10} duration={1.8} />
                <span className="text-green text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">+ Years</span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-ink-soft leading-snug">
                B2B Marketing & Sales Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-ink flex items-baseline flex-wrap">
                <AnimatedCounter value={250} prefix="$" duration={2.2} />
                <span className="text-green text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">M+</span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-ink-soft leading-snug">
                Business Pipeline Generated
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-ink flex items-baseline flex-wrap">
                <AnimatedCounter value={14} duration={1.8} />
                <span className="text-green text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">%</span>
              </div>
              <p className="text-xs sm:text-base font-semibold text-ink-soft leading-snug">
                Successful Closure Rate
              </p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[72px] leading-none tracking-tight text-ink flex items-baseline flex-wrap">
                <AnimatedCounter value={6} duration={1.5} />
                <span className="text-green text-xl sm:text-3xl lg:text-5xl font-extrabold ml-1">+ Industries</span>
              </div>
              <p className="text-[11px] sm:text-sm text-ink-soft leading-relaxed font-normal">
                Technology, IT Infrastructure, Healthcare, Education, Real Estate, Retail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TornEdge bottom transitioning from mist back to white */}
      <TornEdge position="bottom" fill="#F6F7FC" />
    </div>
  );
}
