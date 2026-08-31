import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
export function Alert({ tone="info", title, children }: { tone?: "info"|"success"|"warning"|"error"; title: string; children?: React.ReactNode }) {
 const Icon = tone === "success" ? CheckCircle2 : tone === "warning" ? AlertTriangle : tone === "error" ? XCircle : Info;
 return <div className={cn("flex gap-3 rounded-2xl border p-4", tone === "info" && "border-privacy-cyan/20 bg-privacy-cyan/5", tone === "success" && "border-risk-low/20 bg-risk-low/5", tone === "warning" && "border-risk-medium/20 bg-risk-medium/5", tone === "error" && "border-risk-critical/20 bg-risk-critical/5")}><Icon className="mt-0.5 h-5 w-5 shrink-0" /><div><p className="text-sm font-semibold">{title}</p>{children && <div className="mt-1 text-sm text-muted">{children}</div>}</div></div>;
}
