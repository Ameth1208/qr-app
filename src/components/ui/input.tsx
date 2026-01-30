"use client";

import React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "md";
};

const sizes = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-[14px]",
};

export function Input({ className, inputSize = "md", ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-[10px] border border-[#D2D2D7] bg-white text-[#1C1C1E] " +
          "placeholder:text-[#86868B] transition-all duration-200 " +
          "focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] " +
          "disabled:cursor-not-allowed disabled:opacity-50 shadow-sm",
        sizes[inputSize],
        className
      )}
      {...props}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-[10px] border border-[#D2D2D7] bg-white px-4 py-3 text-[#1C1C1E] text-[14px] " +
          "placeholder:text-[#86868B] transition-all duration-200 " +
          "focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] " +
          "disabled:cursor-not-allowed disabled:opacity-50 resize-none shadow-sm",
        className
      )}
      {...props}
    />
  );
}
