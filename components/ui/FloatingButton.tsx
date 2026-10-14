import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export function FloatingButton() {
  return (
    <aside
      aria-label="Quick Consultation"
      className="floating-action-button fixed right-5 z-40 transition-opacity duration-200"
      style={{
        bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <Link
        href="/contact"
        aria-label="Book a consultation"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green text-white shadow-green hover:bg-green-dark hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green"
      >
        <Mail className="w-6 h-6 stroke-[2]" aria-hidden="true" />
      </Link>
    </aside>
  );
}
