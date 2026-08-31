"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers";
export function ThemeToggle() { const {theme,toggleTheme}=useTheme(); return <button aria-label="Toggle theme" onClick={toggleTheme} className="focus-ring rounded-xl border border-subtle surface-2 p-2 text-muted transition hover:text-[var(--privacy-text)]">{theme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}</button>; }
