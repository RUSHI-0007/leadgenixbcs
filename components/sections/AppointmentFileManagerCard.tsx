"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { WindowFrame } from "@/components/ui/WindowFrame";
import {
  Target,
  CalendarCheck,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Filter,
  Calendar,
  Bell,
  Users,
  CheckCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DeliverableItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const deliverables: DeliverableItem[] = [
  { id: "icp", label: "ICP & Account Validation", icon: ShieldCheck },
  { id: "intent", label: "Interest & Intent Qualification", icon: Filter },
  { id: "scheduling", label: "Meeting Scheduling & Confirmation", icon: Calendar },
  { id: "followup", label: "Follow-Ups & Reminders", icon: Bell },
  { id: "partner", label: "Meeting With Partner", icon: Users },
  { id: "delivered", label: "Appointment Delivered", icon: CheckCheck },
];

export function AppointmentFileManagerCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  // Track tab visibility
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Advance highlight every 1.6s
  useEffect(() => {
    if (shouldReduceMotion || isHoveredOrFocused || !isInView || !isTabVisible) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % deliverables.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isHoveredOrFocused, isInView, isTabVisible]);

  return (
    <div
      ref={containerRef}
      className="mockup-container relative w-full max-w-lg mx-auto min-h-[380px] sm:min-h-[420px] flex items-center justify-center py-4"
    >
      {/* 1. Base WindowFrame: "Appointment campaign — Rubrik Inc." */}
      <motion.div
        initial={shouldReduceMotion ? {} : { x: -40, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : shouldReduceMotion ? {} : { x: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full sm:w-[92%] shadow-window"
      >
        <WindowFrame title="Appointment campaign — Rubrik Inc.">
          <div className="divide-y divide-line/70">
            {/* Row 1 */}
            <div className="flex items-center justify-between py-2.5 sm:py-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-ink-soft">
                <Target className="w-4 h-4 text-indigo shrink-0" />
                <span>ICP accounts reached</span>
              </div>
              <span className="font-bold text-ink font-mono">250+</span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between py-2.5 sm:py-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-ink-soft">
                <CalendarCheck className="w-4 h-4 text-indigo shrink-0" />
                <span>Appointments booked</span>
              </div>
              <span className="font-bold text-ink font-mono">25</span>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-between py-2.5 sm:py-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-ink-soft">
                <CheckCircle2 className="w-4 h-4 text-indigo shrink-0" />
                <span>Appointments completed</span>
              </div>
              <span className="font-bold text-ink font-mono">18</span>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between py-2.5 sm:py-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-ink-soft">
                <TrendingUp className="w-4 h-4 text-green shrink-0" />
                <span className="font-semibold text-ink">Success rate</span>
              </div>
              <span className="font-black text-green text-sm sm:text-base font-mono">
                72%
              </span>
            </div>
          </div>
        </WindowFrame>
      </motion.div>

      {/* 2. Floating Popover Panel: "Deliverables" */}
      <motion.div
        initial={shouldReduceMotion ? {} : { x: 80, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : shouldReduceMotion ? {} : { x: 80, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHoveredOrFocused(true)}
        onMouseLeave={() => setIsHoveredOrFocused(false)}
        onFocus={() => setIsHoveredOrFocused(true)}
        onBlur={() => setIsHoveredOrFocused(false)}
        className={cn(
          "absolute right-0 sm:-right-4 bottom-2 sm:bottom-0",
          "w-[94%] sm:w-[58%] max-w-[280px]",
          "rounded-[14px] bg-white border border-line",
          "shadow-[0_16px_40px_-10px_rgba(75,85,216,0.24)] z-20 p-2.5 sm:p-3"
        )}
      >
        {/* Popover Header */}
        <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-line/60">
          <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
            Deliverables
          </span>
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
        </div>

        {/* Deliverables Rows */}
        <div className="space-y-0.5 relative">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;
            const showDividerAfter = idx === 2 || idx === 4;

            return (
              <React.Fragment key={item.id}>
                <div
                  onMouseEnter={() => {
                    setIsHoveredOrFocused(true);
                    setActiveIndex(idx);
                  }}
                  className={cn(
                    "relative flex items-center justify-between px-2 py-1.5 sm:py-2 rounded-lg cursor-pointer transition-colors duration-150 text-[11px] sm:text-xs",
                    isActive ? "text-green font-bold" : "text-ink hover:text-ink font-medium"
                  )}
                >
                  {/* Active highlight pill advancing down rows via layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="popover-highlight"
                      className="absolute inset-0 bg-green-tint rounded-lg z-0"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-2 truncate">
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 shrink-0 transition-colors",
                        isActive ? "text-green" : "text-ink-soft"
                      )}
                    />
                    <span className="truncate">{item.label}</span>
                  </div>

                  <span className="relative z-10 text-[10px] font-mono text-ink-muted shrink-0 ml-1">
                    0{idx + 1}
                  </span>
                </div>

                {/* Group divider lines after row 3 and before last row */}
                {showDividerAfter && (
                  <div className="my-1 border-b border-line/60 mx-1" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
