"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#007AFF] text-white hover:bg-[#0071E3] " +
    "bg-gradient-to-b from-white/10 to-transparent " +
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_1px_2px_0_rgba(0,0,0,0.1)] " +
    "active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1)]",
  secondary:
    "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED] " +
    "border border-[#E8E8ED]",
  outline: "border border-[#D2D2D7] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7]",
  ghost: "text-[#007AFF] font-medium hover:bg-[#F5F5F7] rounded-lg",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-7 px-3 text-[11px]",
  md: "h-9 px-4 text-[13px]",
  lg: "h-11 px-6 text-[15px]",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] font-semibold tracking-tight transition-all duration-200 " +
          "focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 " +
          "disabled:opacity-50 disabled:pointer-events-none " +
          "active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Procesando...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
