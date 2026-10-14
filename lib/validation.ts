/**
 * Form validation schemas and helpers for Contact Consultation Form
 */

const FREE_EMAIL_PROVIDERS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.co.in",
  "rediffmail.com",
  "aol.com",
  "icloud.com",
];

// Indian mobile regex: allows optional +91 or 0 prefix, requires 10 digits starting with 6, 7, 8, or 9
const INDIAN_PHONE_REGEX = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/;

// Standard RFC-compliant email regex pattern
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export interface ContactFormData {
  organizationName: string;
  contactName: string;
  mobileNumber: string;
  officialEmail: string;
  city: string;
  service: string;
  honeypot?: string;
}

export interface ValidationErrors {
  organizationName?: string;
  contactName?: string;
  mobileNumber?: string;
  officialEmail?: string;
  city?: string;
  service?: string;
}

export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.organizationName || data.organizationName.trim().length < 2) {
    errors.organizationName = "Please enter your organization name.";
  }

  if (!data.contactName || data.contactName.trim().length < 2) {
    errors.contactName = "Please enter your full name.";
  }

  const cleanPhone = data.mobileNumber.replace(/\s+/g, "");
  if (!cleanPhone) {
    errors.mobileNumber = "Please enter your contact number.";
  } else if (!INDIAN_PHONE_REGEX.test(cleanPhone)) {
    errors.mobileNumber = "Please enter a valid 10-digit Indian mobile number (e.g., +91 9876543210).";
  }

  const cleanEmail = data.officialEmail.trim().toLowerCase();
  if (!cleanEmail) {
    errors.officialEmail = "Please enter your business email address.";
  } else if (!EMAIL_REGEX.test(cleanEmail)) {
    errors.officialEmail = "Please enter a valid email address.";
  } else {
    const domain = cleanEmail.split("@")[1];
    if (domain && FREE_EMAIL_PROVIDERS.includes(domain)) {
      errors.officialEmail = "Please use your official business email.";
    }
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = "Please enter your city.";
  }

  if (!data.service || data.service.trim() === "") {
    errors.service = "Please select the required service.";
  }

  return errors;
}
