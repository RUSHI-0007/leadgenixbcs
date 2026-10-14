import type { Metadata } from "next";
import { servicesHeader } from "@/data/services";
import { Scribble } from "@/components/ui/Scribble";
import { BrushBg } from "@/components/ui/BrushBg";
import { ServicesPageView } from "@/components/sections/ServicesPageView";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Marketing Services | B2B Lead Generation & ABM",
  description:
    "Comprehensive B2B demand generation solutions: Appointment Setting, Lead Generation, Event & Webinar Marketing, ABM, Automation, and Sales Outsourcing.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Header (indigo accent) */}
      <section aria-label="Services Header" className="relative py-20 sm:py-28 bg-white border-b border-line overflow-hidden">
        <BrushBg tone="indigo" shape={3} className="-top-12 -right-20" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-ink tracking-tight leading-[1.02]">
              Marketing{" "}
              <span className="relative inline-block text-indigo">
                services.
                <Scribble variant="underline" tone="indigo" />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed font-normal">
              {servicesHeader.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Interactive Catalog */}
      <section aria-label="Service Catalog" className="py-20 sm:py-28 bg-mist">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesPageView />
        </div>
      </section>

      {/* 3. Closing CTA */}
      <CtaBand
        headline="Ready to build your qualified pipeline?"
        subheadline="Talk to our team about tailored demand generation programs designed for your specific IT products and partner networks."
        buttonLabel="Schedule Consultation →"
        scribbleWord="pipeline?"
      />
    </div>
  );
}
