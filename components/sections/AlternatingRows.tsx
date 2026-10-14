"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { capabilitiesContent } from "@/data/home";
import { servicesList } from "@/data/services";
import { caseStudiesList } from "@/data/case-studies";
import { Scribble } from "@/components/ui/Scribble";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { Button } from "@/components/ui/Button";
import { AppointmentFileManagerCard } from "@/components/sections/AppointmentFileManagerCard";

export function AlternatingRows() {
  // Data for Row B (Event & Webinar campaigns CS6 and CS7)
  const eventStudy = caseStudiesList.find((c) => c.id === "cs-6-event-audience");
  const webinarStudy = caseStudiesList.find((c) => c.id === "cs-7-webinar-audience");

  // Data for Row C (Sales Outsourcing deliverables)
  const salesDeliverables =
    servicesList.find((s) => s.id === "sales-outsourcing")?.deliverables || [];

  const rowBRef = useRef<HTMLDivElement>(null);
  const rowBInView = useInView(rowBRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full space-y-24 sm:space-y-36 py-16 sm:py-24 overflow-x-clip">
      {/* ROW A: INDIGO (Text Left / Visual Right) */}
      <section
        aria-label="Target Account Discovery"
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Left (order-1 always on mobile) */}
          <div className="lg:col-span-6 order-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Find the{" "}
              <span className="relative inline-block px-1 text-indigo">
                right
                <Scribble variant="circle" tone="indigo" />
              </span>{" "}
              accounts.
            </h2>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed font-normal">
              {capabilitiesContent.items[0].description}
            </p>
            <div className="pt-2">
              <Button
                href="/services"
                variant="indigo"
                size="md"
                className="w-full sm:w-auto text-center"
              >
                See our services →
              </Button>
            </div>
          </div>

          {/* Right Visual (order-2 on mobile): Appointment file manager card */}
          <div className="lg:col-span-6 order-2">
            <AppointmentFileManagerCard />
          </div>
        </div>
      </section>

      {/* ROW B: GREEN (Flipped on desktop: Visual Left / Text Right, Mobile: Text first) */}
      <section
        ref={rowBRef}
        aria-label="Events and Webinars"
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Right on desktop, Order-1 on mobile */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Events and webinars,{" "}
              <span className="relative inline-block text-green">
                filled.
                <Scribble variant="underline" tone="green" />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed font-normal">
              {capabilitiesContent.items[1].description}
            </p>
            <div className="pt-2">
              <Button
                href="/contact"
                variant="green"
                size="md"
                className="w-full sm:w-auto text-center"
              >
                Plan an event drive →
              </Button>
            </div>
          </div>

          {/* Left Visual on desktop, Order-2 on mobile: Staggered entrance from right */}
          <div className="lg:col-span-6 order-2 lg:order-1 mockup-container relative min-h-[320px] sm:min-h-[360px] flex items-center justify-center">
            {/* Back Card: Solid --green with white text */}
            <motion.div
              initial={shouldReduceMotion ? {} : { x: 60, opacity: 0 }}
              animate={rowBInView ? { x: 0, opacity: 1 } : shouldReduceMotion ? {} : { x: 60, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-4 sm:right-10 w-[85%] sm:w-[320px] p-5 sm:p-6 rounded-card bg-green text-white shadow-cardGreen -rotate-2 z-0"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-green-tint/90 mb-3">
                Webinar campaign
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/20 pb-1.5">
                  <span className="text-white/80">Registrations</span>
                  <span className="font-bold">{webinarStudy?.rawMetrics.registrations}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-1.5">
                  <span className="text-white/80">Confirmed</span>
                  <span className="font-bold">
                    {webinarStudy?.rawMetrics.confirmedAttendees}{" "}
                    <span className="text-green-tint">
                      ({webinarStudy?.computedRates[0].formatted})
                    </span>
                  </span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-white/80">Live participants</span>
                  <span className="font-bold">
                    {webinarStudy?.rawMetrics.liveParticipants}{" "}
                    <span className="text-green-tint">
                      ({webinarStudy?.computedRates[1].formatted})
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Front Card: White card overlapping it */}
            <motion.div
              initial={shouldReduceMotion ? {} : { x: 60, opacity: 0 }}
              animate={rowBInView ? { x: 0, opacity: 1 } : shouldReduceMotion ? {} : { x: 60, opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative top-12 left-0 sm:left-4 w-[90%] sm:w-[340px] p-5 sm:p-6 rounded-card bg-white border border-line shadow-window rotate-1 z-10"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">
                Event campaign
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-line pb-1.5">
                  <span className="text-ink-soft">Registrations</span>
                  <span className="font-bold text-ink">{eventStudy?.rawMetrics.registrations}</span>
                </div>
                <div className="flex justify-between border-b border-line pb-1.5">
                  <span className="text-ink-soft">Confirmations</span>
                  <span className="font-bold text-ink">
                    {eventStudy?.rawMetrics.attendanceConfirmations}{" "}
                    <span className="text-green font-mono">
                      ({eventStudy?.computedRates[0].formatted})
                    </span>
                  </span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-ink-soft">Actual participants</span>
                  <span className="font-bold text-ink">
                    {eventStudy?.rawMetrics.actualParticipants}{" "}
                    <span className="text-green font-mono">
                      ({eventStudy?.computedRates[1].formatted})
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROW C: INDIGO (Text Left / Visual Right, Mobile: Text first) */}
      <section
        aria-label="Sales Outsourcing"
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text (order-1 always on mobile) */}
          <div className="lg:col-span-6 order-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Sales,{" "}
              <span className="relative inline-block text-indigo">
                handled.
                <Scribble variant="underline" tone="indigo" />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-ink-soft leading-relaxed font-normal">
              {capabilitiesContent.items[2].description}
            </p>
            <div className="pt-2">
              <Button
                href="/services#sales-outsourcing"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto text-center"
              >
                Learn about sales outsourcing →
              </Button>
            </div>
          </div>

          {/* Right Visual (order-2 on mobile): WindowFrame "Sales outsourcing" vertical stepper */}
          <div className="lg:col-span-6 order-2 mockup-container">
            <WindowFrame title="Sales outsourcing" className="max-w-md mx-auto shadow-card">
              <div className="space-y-3.5 pl-2">
                {salesDeliverables.map((item, idx) => {
                  const isLast = idx === salesDeliverables.length - 1;
                  return (
                    <div key={item} className="relative flex items-center gap-3">
                      {/* Stepper Dot & Vertical Line */}
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`w-3.5 h-3.5 rounded-full border-2 ${
                            idx < 3
                              ? "bg-indigo border-indigo"
                              : "bg-white border-indigo"
                          }`}
                        />
                        {!isLast && (
                          <div className="w-0.5 h-4 bg-line absolute top-3.5" />
                        )}
                      </div>

                      <span className="text-xs sm:text-sm font-medium text-ink">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </WindowFrame>
          </div>
        </div>
      </section>
    </div>
  );
}
