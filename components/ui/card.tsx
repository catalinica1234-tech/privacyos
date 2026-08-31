import { cn } from "@/lib/utils";
export function Card({ className, children, interactive=false }: { className?: string; children: React.ReactNode; interactive?: boolean }) {
  return <div className={cn("surface rounded-2xl border border-subtle shadow-card", interactive && "transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10 dark:hover:border-white/10", className)}>{children}</div>;
}
