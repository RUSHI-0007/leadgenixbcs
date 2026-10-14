import type { Metadata } from "next";
import {
  contactHeader,
  whyChooseChecklist,
  letsGrowTogetherContent,
} from "@/data/contact";
import { Scribble } from "@/components/ui/Scribble";
import { BrushBg } from "@/components/ui/BrushBg";
import { ContactForm } from "@/components/sections/ContactForm";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation",
  description:
    "Schedule a free B2B lead generation consultation with Leadgenix BCS. Turn targeted accounts into sales-qualified pipeline.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Page Header (green accent, BrushBg) */}
      <section aria-label="Contact Header" className="relative py-20 sm:py-28 bg-white border-b border-line overflow-hidden">
        <BrushBg tone="green" shape={1} className="-top-12 -left-20" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-ink tracking-tight leading-[1.02]">
              Why{" "}
              <span className="relative inline-block text-green">
                Leadgenix?
                <Scribble variant="underline" tone="green" />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed font-normal">
              {contactHeader.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Layout */}
      <section aria-label="Consultation Booking" className="py-20 sm:py-28 bg-mist">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: Consultation Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* RIGHT COLUMN: Why Choose & Let's Grow Together */}
            <div className="lg:col-span-5 space-y-8">
              {/* Why Choose Leadgenix Checklist (bare green checks, no tinted boxes) */}
              <div className="p-6 sm:p-8 rounded-card bg-white border border-line shadow-sm space-y-5">
                <h2 className="font-heading font-extrabold text-2xl text-ink border-b border-line pb-3">
                  Why choose Leadgenix?
                </h2>

                <ul className="space-y-3.5">
                  {whyChooseChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-ink-soft">
                      {/* Bare green check (no tinted background) */}
                      <Check className="w-5 h-5 text-green stroke-[2.5] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Let's Grow Together Card in --green-tint (NOT dark!) */}
              <div className="p-6 sm:p-8 rounded-card bg-green-tint border border-green/20 text-ink space-y-4">
                <h3 className="font-heading font-extrabold text-2xl text-ink">
                  {letsGrowTogetherContent.title}
                </h3>

                <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-normal">
                  {letsGrowTogetherContent.body}
                </p>

                <div className="pt-4 border-t border-green/20 space-y-2 text-xs font-mono text-ink-soft">
                  <p>Email: {letsGrowTogetherContent.contactDetails.email}</p>
                  <p>Phone: {letsGrowTogetherContent.contactDetails.phone}</p>
                  <p>Operations: {letsGrowTogetherContent.contactDetails.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
