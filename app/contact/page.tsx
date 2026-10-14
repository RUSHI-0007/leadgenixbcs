import type { Metadata } from "next";
import {
  contactHeader,
  whyChooseChecklist,
  letsGrowTogetherContent,
} from "@/data/contact";
import { Scribble } from "@/components/ui/Scribble";
import { Highlight } from "@/components/ui/Highlight";
import { BrushBg } from "@/components/ui/BrushBg";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { ContactForm } from "@/components/sections/ContactForm";
import { Check, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation",
  description:
    "Schedule a free B2B lead generation consultation with Leadgenix BCS. Turn targeted accounts into sales-qualified pipeline.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Page Header (--paper) */}
      <section
        aria-label="Contact Header"
        className="relative py-20 sm:py-28 bg-paper paper-grain border-b border-line overflow-hidden"
      >
        <BrushBg tone="tomato" shape={1} className="-top-12 -left-20" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-ink tracking-tight leading-[1.02]">
              Why{" "}
              <span className="relative inline-block text-tomato-ink">
                Leadgenix?
                <Scribble variant="underline" tone="tomato" isHero={true} />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed font-normal">
              {contactHeader.paragraph}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Layout (--paper-deep) */}
      <section aria-label="Consultation Booking" className="py-20 sm:py-28 bg-paper-deep paper-grain">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: Consultation Form inside WindowFrame */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* RIGHT COLUMN: Rich WindowFrame Checklist & Stacked Partner Card */}
            <div className="lg:col-span-5 space-y-8">
              {/* Card 1: Why Choose Leadgenix styled as WindowFrame */}
              <div className="sm:-rotate-1 sm:hover:rotate-0 transition-transform duration-300">
                <WindowFrame title="why-leadgenix.checklist" className="shadow-card">
                  <div className="mb-4 pb-3 border-b border-line flex items-center justify-between">
                    <div>
                      <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                        Why choose{" "}
                        <span className="relative inline-block text-ink">
                          Leadgenix?
                          <Scribble variant="underline" tone="tomato" />
                        </span>
                      </h2>
                      <p className="text-xs text-ink-muted mt-1 font-mono uppercase tracking-wider">
                        Enterprise Execution Framework
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-tomato animate-pulse" />
                  </div>

                  <div className="divide-y divide-line/70">
                    {whyChooseChecklist.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2.5 sm:py-3 px-2 rounded-lg hover:bg-paper-deep transition-colors group cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-tomato-tint text-tomato-ink flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                          </div>
                          <span className="font-medium text-xs sm:text-sm text-ink group-hover:text-tomato-ink transition-colors">
                            {item}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-ink-muted shrink-0 ml-2">
                          0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </WindowFrame>
              </div>

              {/* Card 2: Let's Grow Together in White Card with CLI snippet */}
              <div className="sm:rotate-1 sm:hover:rotate-0 transition-transform duration-300">
                <div className="p-6 sm:p-8 rounded-card bg-card border border-line shadow-card text-ink space-y-5 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-heading font-extrabold text-2xl text-ink tracking-tight">
                        Let&apos;s Grow{" "}
                        <Highlight>Together</Highlight>
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-tomato-ink font-bold">
                        Your Trusted B2B Growth Partner
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-tomato-tint text-tomato-ink border border-tomato-tint flex items-center justify-center font-heading font-black text-sm shadow-sm shrink-0">
                      LG
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-normal">
                    {letsGrowTogetherContent.body}
                  </p>

                  {/* CLI-style direct connection snippet */}
                  <div className="p-4 rounded-xl bg-paper border border-line font-mono text-xs text-ink space-y-2.5 shadow-sm">
                    <div className="flex items-center justify-between pb-1.5 border-b border-line/60">
                      <span className="text-[11px] text-ink-muted">DIRECT CONNECT</span>
                      <span className="text-[10px] font-bold text-tomato-ink px-1.5 py-0.5 rounded bg-tomato-tint">
                        ACTIVE
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <Mail className="w-3.5 h-3.5 text-tomato-ink shrink-0" aria-hidden="true" />
                      <span className="text-ink-muted shrink-0">EMAIL:</span>
                      <a
                        href={`mailto:${letsGrowTogetherContent.contactDetails.email}`}
                        className="text-ink hover:text-tomato-ink underline underline-offset-2 transition-colors truncate"
                      >
                        {letsGrowTogetherContent.contactDetails.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-tomato-ink shrink-0" aria-hidden="true" />
                      <span className="text-ink-muted shrink-0">PHONE:</span>
                      <span className="text-ink">{letsGrowTogetherContent.contactDetails.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-tomato-ink shrink-0" aria-hidden="true" />
                      <span className="text-ink-muted shrink-0">REACH:</span>
                      <span className="text-ink">{letsGrowTogetherContent.contactDetails.location}</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-mono uppercase tracking-wider text-ink-muted flex items-center justify-between">
                    <span>PAN-INDIA OUTREACH</span>
                    <span>•</span>
                    <span>DEDICATED ABM TEAM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
