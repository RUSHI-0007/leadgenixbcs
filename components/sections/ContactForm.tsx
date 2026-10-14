"use client";

import React, { useState } from "react";
import { consultationFormContent } from "@/data/contact";
import { validateContactForm, ContactFormData, ValidationErrors } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { WindowFrame } from "@/components/ui/WindowFrame";
import { Highlight } from "@/components/ui/Highlight";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    organizationName: "",
    contactName: "",
    mobileNumber: "",
    officialEmail: "",
    city: "",
    service: "",
    honeypot: "", // Bot protection trap
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot && formData.honeypot.trim() !== "") {
      return;
    }

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      element?.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate 1s network latency for client demo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Console log payload for debugging and verification
    console.log("LEADGENIX CONSULTATION SUBMISSION:", {
      organizationName: formData.organizationName,
      contactName: formData.contactName,
      mobileNumber: formData.mobileNumber,
      officialEmail: formData.officialEmail,
      city: formData.city,
      service: formData.service,
      timestamp: new Date().toISOString(),
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      organizationName: "",
      contactName: "",
      mobileNumber: "",
      officialEmail: "",
      city: "",
      service: "",
      honeypot: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <WindowFrame title="consultation-confirmed.status" className="shadow-window">
        <div
          className="py-10 px-4 sm:p-12 text-center space-y-6 flex flex-col items-center justify-center min-h-[420px] animate-fadeIn"
          role="status"
          aria-live="polite"
        >
          {/* Success state: ink check icon in a --tomato-tint circle with ink text. */}
          <div className="w-16 h-16 rounded-full bg-tomato-tint text-ink flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5] text-ink" aria-hidden="true" />
          </div>

          <div className="space-y-2 max-w-md">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">
              Consultation Request Received
            </h3>
            <p className="text-base text-ink-soft leading-relaxed font-medium">
              {consultationFormContent.successMessage}
            </p>
            <p className="text-xs text-ink-muted">
              We will contact you via{" "}
              <span className="font-semibold text-ink font-mono">{formData.officialEmail}</span>.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            onClick={handleReset}
          >
            Submit another request
          </Button>
        </div>
      </WindowFrame>
    );
  }

  return (
    <WindowFrame title="schedule-consultation.spec" className="shadow-window">
      {/* Top Session Badge */}
      <div className="mb-6 pb-4 border-b border-line flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-tomato-tint text-tomato-ink text-xs font-mono font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-tomato animate-pulse" />
          <span>Free Strategy Session</span>
        </div>
        <span className="text-[11px] font-mono text-ink-muted uppercase tracking-wider">
          Direct Marketing Expert Connect
        </span>
      </div>

      <div className="mb-8 space-y-2 text-left">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
          Book a Free Consultation with Our{" "}
          <Highlight>Marketing Expert</Highlight>
        </h2>
        <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-normal">
          {consultationFormContent.cardSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field (hidden) */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="honeypot">Leave this blank if you are human</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            tabIndex={-1}
            value={formData.honeypot}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            id="organizationName"
            label="Organization name"
            placeholder="Enter your company name"
            value={formData.organizationName}
            onChange={handleChange}
            error={errors.organizationName}
            required
            autoComplete="organization"
          />

          <FormField
            id="contactName"
            label="Point of contact"
            placeholder="Enter your full name"
            value={formData.contactName}
            onChange={handleChange}
            error={errors.contactName}
            required
            autoComplete="name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            id="mobileNumber"
            label="Mobile number"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={errors.mobileNumber}
            required
            autoComplete="tel"
          />

          <FormField
            id="officialEmail"
            label="Official email address"
            type="email"
            placeholder="name@company.com"
            value={formData.officialEmail}
            onChange={handleChange}
            error={errors.officialEmail}
            required
            autoComplete="email"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            id="city"
            label="City / Location"
            placeholder="e.g. Mumbai, Bengaluru, Delhi"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            required
            autoComplete="address-level2"
          />

          <FormField
            id="service"
            label="Interested service"
            type="select"
            options={consultationFormContent.serviceOptions}
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
            required
          />
        </div>

        {/* Action Button: ink-filled with paper text and tomato arrow */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="ink"
            size="lg"
            className="w-full text-center"
            disabled={isSubmitting}
            rightIcon={<span className="text-tomato font-black">→</span>}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
                <span>Processing Consultation Request...</span>
              </span>
            ) : (
              <span>{consultationFormContent.submitButtonLabel}</span>
            )}
          </Button>
        </div>

        {/* Security / Privacy notice */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-ink-muted">
          <ShieldCheck className="w-4 h-4 text-ink-soft shrink-0" aria-hidden="true" />
          <span>Strict Enterprise Confidentiality • No Spam Policy</span>
        </div>
      </form>
    </WindowFrame>
  );
}
