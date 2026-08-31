import Link from "next/link";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AnalysisCard } from "@/components/analysis/analysis-card";
import { Button, Badge } from "@/components/ui";
import { recentAnalyses } from "@/lib/demo/data";
export default function AnalysesPage(){return <AppShell title="Analyses"><div className="space-y-7"><Breadcrumbs items={[{label:"Dashboard",href:"/dashboard"},{label:"Analyses"}]}/><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><Badge tone="info">DEMO HISTORY</Badge><h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Analysis history</h1><p className="mt-2 text-sm text-muted">Controlled demo records prepared for the Foundation experience.</p></div><Link href="/dashboard/scanner"><Button><Plus className="h-4 w-4"/>New analysis</Button></Link></div><div className="grid gap-3">{recentAnalyses.map(a=><AnalysisCard key={a.id} analysis={a}/>)}</div></div></AppShell>}
