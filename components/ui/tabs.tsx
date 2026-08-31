"use client";
import { cn } from "@/lib/utils";
export function Tabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange?: (tab: string)=>void }) { return <div className="flex max-w-full gap-1 overflow-x-auto rounded-xl surface-2 p-1">{tabs.map(tab=><button key={tab} onClick={()=>onChange?.(tab)} className={cn("shrink-0 rounded-lg px-3 py-2 text-sm transition", active===tab ? "surface text-[var(--privacy-text)] shadow-sm" : "text-muted hover:text-[var(--privacy-text)]")}>{tab}</button>)}</div>; }
