"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { servicesList } from "@/data/services";
import { SegmentedTabs, TabOption } from "@/components/ui/SegmentedTabs";
import { BrushBg } from "@/components/ui/BrushBg";
import { Scribble } from "@/components/ui/Scribble";
import { TornEdge } from "@/components/ui/TornEdge";
import {
  CalendarCheck,
  Target,
  Ticket,
  Layers,
  Database,
  Handshake,
  Workflow,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

type ServiceTab = "demand" | "automate";

const tabs: TabOption<ServiceTab>[] = [
  { id: "demand", label: "Generate demand" },
  { id: "automate", label: "Sell and automate" },
];

const demandServiceIds = [
  "appointment-setting",
  "lead-generation",
  "event-audience-acquisition",
  "account-based-marketing",
  "database-solutions",
];

const automateServiceIds = [
  "sales-outsourcing",
  "marketing-automation",
  "digital-marketing",
];

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("demand");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const currentServices = servicesList.filter((s) =>
    activeTab === "demand"
      ? demandServiceIds.includes(s.id)
      : automateServiceIds.includes(s.id)
  );

  const renderIcon = (name: string) => {
    const props = { className: "w-7 h-7 text-tomato stroke-[1.5]", "aria-hidden": true };
    switch (name) {
      case "CalendarCheck":
        return <CalendarCheck {...props} />;
      case "Target":
        return <Target {...props} />;
      case "Ticket":
        return <Ticket {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Database":
        return <Database {...props} />;
      case "Handshake":
        return <Handshake {...props} />;
      case "Workflow":
        return <Workflow {...props} />;
      case "TrendingUp":
      default:
        return <TrendingUp {...props} />;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* TornEdge top transitioning from paper into dark --ink-deep */}
      <TornEdge position="top" fill="#2E2E2E" />

      <section
        ref={containerRef}
        aria-label="Services Catalog"
        className="relative py-24 sm:py-32 bg-ink-deep text-paper overflow-hidden"
      >
        {/* Paper tone brush background on dark section */}
        <BrushBg tone="paper" shape={1} className="-top-20 -right-20" />

        {/* Oversized outlined numeral behind content: 1px --line-dark outline at 6% opacity */}
        <div
          aria-hidden="true"
          className="decorative-outline absolute -left-6 top-1/3 text-[140px] sm:text-[240px] font-black"
        >
          08
        </div>

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Heading: paper with tomato underline scribble (thicker 9px stroke) */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-paper tracking-tight">
              <span className="relative inline-block">
                Everything we run for you.
                <Scribble variant="underline" tone="tomato" isDark={true} />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-paper/75">
              Eight services, one team.
            </p>
          </div>

          {/* Segmented Tabs Control: track --ink-deep, active pill --paper with ink text */}
          <div className="flex justify-center mb-12 sm:mb-16 overflow-x-auto max-w-full no-scrollbar px-2">
            <SegmentedTabs
              options={tabs}
              activeTab={activeTab}
              onChange={(tab) => setActiveTab(tab)}
              isDark={true}
            />
          </div>

          {/* Cards Grid: Cards --ink with 1px --line-dark border, paper text, bare tomato icons, hover: border tomato and 2px lift */}
          <div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentServices.map((service, idx) => {
              const firstSentence = service.shortDescription.split(". ")[0] + ".";

              return (
                <motion.div
                  key={service.id}
                  initial={shouldReduceMotion ? {} : { x: 60, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : shouldReduceMotion ? {} : { x: 60, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-card border border-line-dark bg-ink p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-tomato hover:shadow-cardDark group text-left"
                >
                  <div className="space-y-4">
                    {/* Bare tomato line icon */}
                    <div className="mb-2">
                      {renderIcon(service.iconName)}
                    </div>

                    <h3 className="font-heading font-bold text-xl text-paper group-hover:text-tomato transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-paper/75 leading-relaxed">
                      {firstSentence}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-line-dark/70">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-paper/90 group-hover:text-tomato transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-tomato transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TornEdge bottom transitioning from --ink-deep back to paper */}
      <TornEdge position="bottom" fill="#2E2E2E" />
    </div>
  );
}
