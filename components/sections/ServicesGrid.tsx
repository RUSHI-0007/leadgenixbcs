"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { servicesList } from "@/data/services";
import { SegmentedTabs, TabOption } from "@/components/ui/SegmentedTabs";
import { BrushBg } from "@/components/ui/BrushBg";
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
    const props = { className: "w-7 h-7 text-indigo stroke-[1.5]", "aria-hidden": true };
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
    <section
      ref={containerRef}
      aria-label="Services Catalog"
      className="relative py-24 sm:py-32 bg-mist overflow-hidden border-t border-line"
    >
      {/* Indigo organic brush background shape */}
      <BrushBg tone="indigo" shape={1} className="-top-20 -right-20" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Everything we run for you.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft">
            Eight services, one team.
          </p>
        </div>

        {/* Segmented Tabs Control (scrollable if overflow) */}
        <div className="flex justify-center mb-12 sm:mb-16 overflow-x-auto max-w-full no-scrollbar px-2">
          <SegmentedTabs
            options={tabs}
            activeTab={activeTab}
            onChange={(tab) => setActiveTab(tab)}
            tone="indigo"
          />
        </div>

        {/* Cards Grid: 4 cols ≥1200, 3 ≥1024, 2 ≥640, 1 below */}
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
                className="rounded-card border border-line bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-indigo/50 hover:shadow-card group"
              >
                <div className="space-y-4">
                  {/* Bare line icon (no tinted square) */}
                  <div className="mb-2">
                    {renderIcon(service.iconName)}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-ink group-hover:text-indigo transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-ink-soft leading-relaxed">
                    {firstSentence}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-line/60">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo hover:text-indigo-dark group-hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
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
  );
}
