import React from "react";
import { clientMarquee } from "@/data/home";
import { EdgeFadeMarquee } from "@/components/ui/EdgeFadeMarquee";

export function Marquee() {
  const { clients } = clientMarquee;

  return (
    <section
      aria-label="Worked With"
      className="w-full py-12 sm:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
          WORKED WITH
        </p>
      </div>

      <EdgeFadeMarquee>
        {clients.map((client) => (
          <div
            key={client}
            className="flex items-center shrink-0 px-4 py-2 cursor-default"
          >
            <span className="font-heading font-extrabold text-xl sm:text-2xl text-ink-muted/50 hover:text-ink transition-colors tracking-tight whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </EdgeFadeMarquee>
    </section>
  );
}
