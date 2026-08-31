import { cn } from "@/lib/utils";
export type BadgeTone = "neutral" | "low" | "medium" | "high" | "critical" | "info" | "success";
export function Badge({ children, tone="neutral", className }: { children: React.ReactNode; tone?: BadgeTone; className?: string }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", {
    "border-subtle surface-2 text-muted": tone === "neutral",
    "border-risk-low/20 bg-risk-low/10 text-risk-low": tone === "low" || tone === "success",
    "border-risk-medium/20 bg-risk-medium/10 text-risk-medium": tone === "medium",
    "border-risk-high/20 bg-risk-high/10 text-risk-high": tone === "high",
    "border-risk-critical/20 bg-risk-critical/10 text-risk-critical": tone === "critical",
    "border-privacy-cyan/20 bg-privacy-cyan/10 text-privacy-cyan": tone === "info",
  }, className)}>{children}</span>;
}
