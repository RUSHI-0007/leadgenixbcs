"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { caseStudiesList } from "@/data/case-studies";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { Highlight } from "@/components/ui/Highlight";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScreenData {
  id: string;
  title: string;
  caption: string;
  content: React.ReactNode;
}

export function HeroVisual() {
  const dellStudy = caseStudiesList.find((c) => c.id === "cs-5-dell-csg");
  const rubrikStudy = caseStudiesList.find((c) => c.id === "cs-1-rubrik");
  const nobelStudy = caseStudiesList.find((c) => c.id === "cs-6-event-audience");

  const [activeScreen, setActiveScreen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothLeftX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -24]), {
    stiffness: 100,
    damping: 24,
  });
  const smoothRightX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 24]), {
    stiffness: 100,
    damping: 24,
  });
  const smoothFrontY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -12]), {
    stiffness: 100,
    damping: 24,
  });

  const screens: ScreenData[] = [
    {
      id: "screen-dell",
      title: "Campaign summary",
      caption: "Dell CSG distributor campaign, one monthly cycle.",
      content: (
        <div className="divide-y divide-line/70">
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Target accounts reached</span>
            <span className="font-bold text-ink font-mono">{dellStudy?.rawMetrics.accountsTargeted || "350+"}</span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Requirements identified</span>
            <span className="font-bold text-ink font-mono">{dellStudy?.rawMetrics.requirementsIdentified || 82}</span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Qualified & accepted leads</span>
            <span className="font-bold text-ink font-mono">{dellStudy?.rawMetrics.qualifiedLeads || 76}</span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Deals closed</span>
            <span className="font-bold text-ink font-mono">{dellStudy?.rawMetrics.dealsClosed || 5}</span>
          </div>
          <div className="flex items-center justify-between pt-2.5 sm:pt-3 pb-1">
            <span className="text-xs sm:text-sm font-semibold text-ink">Total business generated</span>
            <span className="font-heading font-black text-lg sm:text-xl text-ink">
              <Highlight isHero={true}>{dellStudy?.rawMetrics.totalBusinessGenerated || "INR 2.15 Crore"}</Highlight>
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "screen-rubrik",
      title: "Appointment campaign",
      caption: "Rubrik enterprise data security appointment campaign.",
      content: (
        <div className="divide-y divide-line/70">
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">ICP accounts reached</span>
            <span className="font-bold text-ink font-mono">{rubrikStudy?.rawMetrics.accountsTargeted || "250+"}</span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Appointments booked</span>
            <span className="font-bold text-ink font-mono">{rubrikStudy?.rawMetrics.appointmentsBooked || 25}</span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Completed meetings</span>
            <span className="font-bold text-ink font-mono">{rubrikStudy?.rawMetrics.appointmentsCompleted || 18}</span>
          </div>
          <div className="flex items-center justify-between pt-2.5 sm:pt-3 pb-1">
            <span className="text-xs sm:text-sm font-semibold text-ink">Success rate</span>
            <span className="font-heading font-black text-lg sm:text-xl text-green font-mono">
              <Highlight isHero={true}>{rubrikStudy?.computedRates[0].formatted || "72%"}</Highlight>
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "screen-nobel",
      title: "Event campaign",
      caption: "Nobel IT partner roundtable live event campaign.",
      content: (
        <div className="divide-y divide-line/70">
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Registrations</span>
            <span className="font-bold text-ink font-mono">{nobelStudy?.rawMetrics.registrations || 105}</span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Confirmations</span>
            <span className="font-bold text-ink font-mono">
              {nobelStudy?.rawMetrics.attendanceConfirmations || 86}{" "}
              <span className="text-green text-xs">({nobelStudy?.computedRates[0].formatted || "81.9%"})</span>
            </span>
          </div>
          <div className="flex items-center justify-between py-2 sm:py-2.5 text-xs sm:text-sm">
            <span className="text-ink-soft">Actual participants</span>
            <span className="font-bold text-ink font-mono">
              {nobelStudy?.rawMetrics.actualParticipants || 52}{" "}
              <span className="text-green text-xs">({nobelStudy?.computedRates[1].formatted || "60.47%"})</span>
            </span>
          </div>
          <div className="flex items-center justify-between pt-2.5 sm:pt-3 pb-1">
            <span className="text-xs sm:text-sm font-semibold text-ink">Opportunities generated</span>
            <span className="font-heading font-black text-lg sm:text-xl text-ink">
              <Highlight isHero={true}>7 Qualified Deals</Highlight>
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Pause conditions
  const isPaused = shouldReduceMotion || isHovered || isManualPaused || !isTabVisible || !isIntersecting;

  // Visibility & Intersection observers
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();
    };
  }, []);

  const nextScreen = useCallback(() => {
    setActiveScreen((prev) => (prev + 1) % screens.length);
    setProgress(0);
  }, [screens.length]);

  // Timer loop via requestAnimationFrame
  useEffect(() => {
    if (isPaused) return;

    let lastTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      setProgress((prev) => {
        const nextVal = prev + (delta / 4500) * 100;
        if (nextVal >= 100) {
          nextScreen();
          return 0;
        }
        return nextVal;
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, nextScreen]);

  const prevScreenIdx = (activeScreen + screens.length - 1) % screens.length;
  const nextScreenIdx = (activeScreen + 1) % screens.length;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mockup-container relative w-full max-w-[480px] mx-auto py-8 sm:py-12 select-none"
    >
      {/* Back-left Window (rotated -4deg, slightly offset left) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: shouldReduceMotion ? 0 : smoothLeftX,
        }}
        className={cn(
          "absolute -left-4 sm:-left-10 top-3 sm:top-5 w-[92%] sm:w-[94%]",
          "-rotate-2 sm:-rotate-4 pointer-events-none z-0",
          "opacity-40 sm:opacity-55 filter blur-[0.6px]"
        )}
      >
        <WindowFrame title={screens[prevScreenIdx].title} className="bg-mist/95 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={`back-left-${screens[prevScreenIdx].id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none"
            >
              {screens[prevScreenIdx].content}
            </motion.div>
          </AnimatePresence>
        </WindowFrame>
      </motion.div>

      {/* Back-right Window (rotated +4deg, slightly offset right/down) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: shouldReduceMotion ? 0 : smoothRightX,
        }}
        className={cn(
          "absolute -right-4 sm:-right-10 top-7 sm:top-9 w-[92%] sm:w-[94%]",
          "rotate-2 sm:rotate-4 pointer-events-none z-0",
          "opacity-40 sm:opacity-55 filter blur-[0.6px]"
        )}
      >
        <WindowFrame title={screens[nextScreenIdx].title} className="bg-mist/95 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={`back-right-${screens[nextScreenIdx].id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none"
            >
              {screens[nextScreenIdx].content}
            </motion.div>
          </AnimatePresence>
        </WindowFrame>
      </motion.div>

      {/* Front Window (centered, z-10) */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : smoothFrontY,
        }}
        className="relative z-10 w-full shadow-window"
      >
        <WindowFrame title={screens[activeScreen].title} className="bg-white">
          <div aria-live="off" className="min-h-[220px] sm:min-h-[240px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={screens[activeScreen].id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {screens[activeScreen].content}
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] text-ink-muted">
              <span className="truncate pr-2">{screens[activeScreen].caption}</span>

              {/* Step indicator dots & accessible pause control */}
              <div className="flex items-center gap-1.5 shrink-0">
                {screens.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveScreen(idx);
                      setProgress(0);
                    }}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-200",
                      activeScreen === idx
                        ? "bg-green w-5"
                        : "bg-line hover:bg-ink-muted"
                    )}
                    aria-label={`Show screen ${idx + 1}`}
                  />
                ))}

                <button
                  type="button"
                  onClick={() => setIsManualPaused(!isManualPaused)}
                  className="ml-1 p-1 rounded hover:bg-mist text-ink-muted hover:text-ink transition-colors"
                  aria-pressed={isManualPaused}
                  aria-label={isManualPaused ? "Resume screen cycling" : "Pause screen cycling"}
                >
                  {isManualPaused ? (
                    <Play className="w-3 h-3 text-green" />
                  ) : (
                    <Pause className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 4px Green Progress Bar filling along the bottom edge */}
          <div className="w-full h-1 bg-line/60 overflow-hidden rounded-b-[18px] -mx-4 -mb-4 mt-3 w-[calc(100%+2rem)]">
            <div
              className="h-full bg-green transition-[width] ease-linear"
              style={{
                width: shouldReduceMotion ? "100%" : `${progress}%`,
                transitionDuration: isPaused ? "0ms" : "80ms",
              }}
            />
          </div>
        </WindowFrame>
      </motion.div>
    </div>
  );
}
