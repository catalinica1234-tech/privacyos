"use client";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-privacy-cyan text-[#061012] shadow-glow hover:-translate-y-0.5 hover:brightness-105": variant === "primary",
          "surface-2 border border-subtle text-[var(--privacy-text)] hover:-translate-y-0.5 hover:surface-3": variant === "secondary",
          "border border-subtle bg-transparent text-[var(--privacy-text)] hover:surface-2": variant === "outline",
          "bg-transparent text-muted hover:text-[var(--privacy-text)] hover:surface-2": variant === "ghost",
          "bg-risk-critical text-white hover:brightness-110": variant === "danger",
          "px-3 py-2 text-sm": size === "sm",
          "px-4 py-2.5 text-sm": size === "md",
          "px-5 py-3 text-base": size === "lg",
        },
        className,
      )}
      {...props}
    />
  );
});
