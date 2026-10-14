import React from "react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-paper">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="font-heading font-black text-7xl sm:text-8xl text-tomato tracking-tight">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            Page not found.
          </h1>
          <p className="text-base text-ink-soft leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. Use the navigation below to return to the active website.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="ink"
            size="md"
            rightIcon={<span>→</span>}
          >
            Back to Home
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="md"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
