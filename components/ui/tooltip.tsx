"use client";
import { Info } from "lucide-react";
export function Tooltip({ text }: { text: string }) { return <span className="group relative inline-flex"><Info className="h-4 w-4 text-muted"/><span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 hidden w-64 -translate-x-1/2 rounded-lg border border-subtle surface-3 p-2 text-xs text-muted shadow-card group-hover:block">{text}</span></span>; }
