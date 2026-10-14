import React from "react";
import Link from "next/link";

interface LeadGenixLogoProps {
  className?: string;
}

export function LeadGenixLogo({ className = "" }: LeadGenixLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group font-heading text-2xl tracking-tight leading-none select-none ${className}`}
      aria-label="Leadgenix BCS - Home"
    >
      <span className="font-extrabold text-ink tracking-tight">
        leadgeni
        <span className="text-green font-black">x</span>
      </span>
      <span className="ml-1.5 font-normal text-ink-muted/70 text-lg lowercase tracking-normal">
        bcs
      </span>
    </Link>
  );
}
