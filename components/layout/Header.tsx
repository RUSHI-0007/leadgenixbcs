"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/navigation";
import { LeadGenixLogo } from "@/components/ui/LeadGenixLogo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-paper transition-all duration-200",
        isScrolled
          ? "border-b border-line shadow-sm py-3.5"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Wordmark */}
        <LeadGenixLogo />

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-7">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-[0.08em] text-ink transition-colors py-1 relative",
                  isActive && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-tomato"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button: Ink fill, paper text, tomato '→' */}
        <div className="hidden lg:flex items-center">
          <Link
            href={siteConfig.ctaButton.href}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-ink text-paper text-[13px] font-bold uppercase tracking-[0.06em] hover:bg-ink-deep transition-all duration-150 active:scale-95 shadow-sm"
          >
            <span>SCHEDULE CONSULTATION</span>
            <span
              className="text-tomato font-bold text-base transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-ink hover:bg-paper-deep transition-colors"
          aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-paper z-50 flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3 pt-3">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 rounded-lg text-base font-bold uppercase tracking-[0.08em] transition-colors",
                    isActive
                      ? "text-ink bg-tomato-tint/50 border-l-[3px] border-tomato font-extrabold"
                      : "text-ink hover:bg-paper-deep"
                  )}
                >
                  <span>{link.label}</span>
                  <span className="text-tomato font-bold text-base" aria-hidden="true">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 pb-4 border-t border-line flex flex-col space-y-4">
            <Link
              href={siteConfig.ctaButton.href}
              className="group w-full text-center py-3.5 rounded-button bg-ink text-paper text-sm font-bold uppercase tracking-wider hover:bg-ink-deep transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>SCHEDULE CONSULTATION</span>
              <span className="text-tomato font-bold text-base transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <p className="text-center text-xs text-ink-muted">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
