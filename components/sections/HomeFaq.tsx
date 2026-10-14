"use client";

import React, { useState } from "react";
import Link from "next/link";
import { homeFaqItems } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HomeFaq() {
  const [openId, setOpenId] = useState<string | null>(homeFaqItems[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section aria-label="Frequently Asked Questions" className="py-20 sm:py-28 bg-white border-t border-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-10">
            Good questions, answered.
          </h2>

          <div className="divide-y divide-line border-y border-line">
            {homeFaqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full text-left flex items-center justify-between gap-4 group focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg sm:text-xl font-bold text-ink group-hover:text-green transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-ink-muted transition-transform duration-200 shrink-0",
                        isOpen && "rotate-180 text-green"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-base text-ink-soft leading-relaxed animate-fadeIn">
                      <p>{item.answer}</p>
                      {item.linkText && item.linkHref && (
                        <div className="pt-2">
                          <Link
                            href={item.linkHref}
                            className="inline-flex items-center gap-1 font-bold text-green hover:underline"
                          >
                            <span>{item.linkText}</span>
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
