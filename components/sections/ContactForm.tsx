"use client";

import React, { useState } from "react";
import { consultationFormContent } from "@/data/contact";
import { validateContactForm, ContactFormData, ValidationErrors } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

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

    /**
     * TODO: Connect this submission to your production API endpoint / email dispatch service.
     */

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
      <div
        className="p-8 sm:p-12 rounded-card bg-white border border-line shadow-card text-center space-y-6 flex flex-col items-center justify-center min-h-[420px] animate-fadeIn"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-green-tint text-green flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" aria-hidden="true" />
        </div>

        <div className="space-y-2 max-w-md">
          <h3 className="font-heading font-extrabold text-2xl text-ink">
            Consultation Request Received
          </h3>
          <p className="text-base text-ink-soft leading-relaxed font-medium">
            {consultationFormContent.successMessage}
          </p>
          <p className="text-xs text-ink-muted">
            We will contact you via{" "}
            <span className="font-semibold text-ink">{formData.officialEmail}</span>.
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
    );
  }

  return (
    <div className="rounded-card bg-white border border-line shadow-card p-6 sm:p-10">
      <div className="mb-8 space-y-2 text-left">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
          {consultationFormContent.cardTitle}
        </h2>
        <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
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
            placeholder="Enter your contact number"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={errors.mobileNumber}
            required
            autoComplete="tel"
          />

          <FormField
            id="officialEmail"
            label="Official email"
            type="email"
            placeholder="Enter your business email address"
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
            label="City"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            required
            autoComplete="address-level2"
          />

          <FormField
            id="service"
            label="Select required service"
            type="select"
            placeholder="Select a service"
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
            options={consultationFormContent.serviceOptions}
            required
          />
        </div>

        <div className="pt-3 text-left">
          <Button
            type="submit"
            variant="green"
            size="hero"
            isLoading={isSubmitting}
            className="w-full sm:w-auto"
          >
            {consultationFormContent.submitButtonLabel} →
          </Button>
        </div>
      </form>
    </div>
  );
}
