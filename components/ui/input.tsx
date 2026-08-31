import { cn } from "@/lib/utils";
export function Input({ label, error, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }) {
  return <label className="block space-y-2"><span className="text-sm font-medium">{label}</span><input className={cn("focus-ring w-full rounded-xl border border-subtle surface-2 px-4 py-3 text-sm outline-none placeholder:text-muted", error && "border-risk-critical/60", className)} {...props} />{error && <span className="text-xs text-risk-critical">{error}</span>}</label>;
}
