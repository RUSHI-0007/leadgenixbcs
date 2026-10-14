import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/navigation";
import { LeadGenixLogo } from "@/components/ui/LeadGenixLogo";

export function Footer() {
  return (
    <footer className="w-full bg-ink-deep border-t border-line-dark text-paper/85">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Wordmark on dark + factual description */}
          <div className="md:col-span-6 space-y-4">
            <LeadGenixLogo isDark={true} />
            <p className="text-paper/75 text-base max-w-md leading-relaxed">
              We help technology companies and channel partners identify high-value accounts, reach the right decision-makers, and turn conversations into qualified sales opportunities.
            </p>
            <div className="text-xs text-paper/60 space-y-1 pt-1 font-mono">
              <p>Email: {siteConfig.email}</p>
              <p>Phone: {siteConfig.phone}</p>
              <p>Presence: Pan-India outreach</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-paper/60 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm font-medium">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/85 hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-paper/60 mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-sm font-medium text-paper/85">
              <li>
                <Link
                  href="/services#appointment-setting"
                  className="hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
                >
                  Appointment Setting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#lead-generation"
                  className="hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#account-based-marketing"
                  className="hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
                >
                  Account-Based Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#event-marketing"
                  className="hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
                >
                  Event & Webinar Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#sales-outsourcing"
                  className="hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
                >
                  Sales Outsourcing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-line-dark flex flex-col sm:flex-row items-center justify-between text-xs text-paper/60 gap-3">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center space-x-6">
            <span>Founded in 2026</span>
            <span>•</span>
            <Link
              href="/contact"
              className="text-paper/85 hover:text-paper hover:underline hover:decoration-tomato hover:underline-offset-4 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
