import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "select";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
  autoComplete?: string;
}

export function FormField({
  id,
  label,
  error,
  required = true,
  type = "text",
  placeholder,
  value,
  onChange,
  options = [],
  autoComplete,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const isInvalid = Boolean(error);

  // 52px tall, 1px --line border, radius 10px, sentence case label weight 600 15px, focus ring 2px --indigo
  const baseInputStyles =
    "w-full h-[52px] px-4 rounded-button border bg-white text-ink text-[15px] placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-indigo focus:border-indigo transition-colors";

  return (
    <div className="flex flex-col space-y-1.5 w-full text-left">
      <label htmlFor={id} className="text-[15px] font-semibold text-ink flex items-center justify-between">
        <span>
          {label}
          {required && (
            <span className="text-xs font-normal text-ink-muted ml-1.5">(required)</span>
          )}
        </span>
      </label>

      {type === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required={required}
            aria-invalid={isInvalid}
            aria-describedby={isInvalid ? errorId : undefined}
            className={cn(
              baseInputStyles,
              "appearance-none pr-10 cursor-pointer bg-white",
              isInvalid ? "border-red-500" : "border-line"
            )}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {/* Custom Chevron icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink-muted">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          className={cn(
            baseInputStyles,
            isInvalid ? "border-red-500 bg-red-50/20" : "border-line"
          )}
        />
      )}

      {error && (
        <div
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-1 animate-fadeIn"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
