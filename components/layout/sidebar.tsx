"use client";
import Link from "next/link";
import { Activity, BarChart3, BookOpen, FileSearch, LayoutDashboard, Settings, ShieldCheck, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
const items=[
 {href:"/dashboard",label:"Overview",icon:LayoutDashboard},
 {href:"/dashboard/scanner",label:"Scanner",icon:FileSearch},
 {href:"/dashboard/analyses",label:"Analyses",icon:BarChart3},
 {href:"/dashboard/risks",label:"Risks",icon:ShieldCheck},
 {href:"/dashboard/regulations",label:"Regulatory",icon:BookOpen},
 {href:"/dashboard/rights",label:"Rights",icon:Activity},
];
export function Sidebar(){const path=usePathname();return <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-subtle surface lg:flex"><div className="flex h-16 items-center px-6"><Logo href="/dashboard"/></div><nav className="flex-1 space-y-1 px-3 py-5">{items.map(({href,label,icon:Icon})=>{const active=path===href||path.startsWith(href+"/");return <Link key={href} href={href} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",active?"bg-privacy-cyan/10 text-privacy-cyan":"text-muted hover:surface-2 hover:text-[var(--privacy-text)]")}><Icon className="h-4 w-4"/>{label}</Link>})}<div className="my-5 border-t border-subtle"/><Link href="/dashboard/settings" className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",path==="/dashboard/settings"?"bg-privacy-cyan/10 text-privacy-cyan":"text-muted hover:surface-2")}><Settings className="h-4 w-4"/>Settings</Link><Link href="/dashboard/profile" className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",path==="/dashboard/profile"?"bg-privacy-cyan/10 text-privacy-cyan":"text-muted hover:surface-2")}><UserCircle className="h-4 w-4"/>Profile</Link></nav><div className="m-4 rounded-xl border border-subtle surface-2 p-3"><div className="flex items-center gap-2 text-xs font-medium"><span className="h-2 w-2 rounded-full bg-risk-low"/>System operational</div><p className="mt-1 text-[11px] text-muted">Foundation / Demo environment</p></div></aside>}
