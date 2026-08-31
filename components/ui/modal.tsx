"use client";
import { X } from "lucide-react";
export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
 if (!open) return null;
 return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onMouseDown={onClose}><div className="surface w-full max-w-lg rounded-2xl border border-subtle p-6 shadow-card" onMouseDown={(e: React.MouseEvent<HTMLDivElement>)=>e.stopPropagation()}><div className="mb-5 flex items-center justify-between"><h2 className="font-display text-xl font-semibold">{title}</h2><button onClick={onClose} aria-label="Close" className="rounded-lg p-2 text-muted hover:surface-2 hover:text-[var(--privacy-text)]"><X className="h-5 w-5"/></button></div>{children}</div></div>;
}
