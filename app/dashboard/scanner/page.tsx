import { AppShell } from "@/components/layout/app-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge, Alert } from "@/components/ui";
import { ScannerForm } from "@/components/scanner/scanner-form";
export default function ScannerPage(){return <AppShell title="Scanner"><div className="space-y-7"><Breadcrumbs items={[{label:"Dashboard",href:"/dashboard"},{label:"Scanner"}]}/><div><Badge tone="info">DEMO MODE</Badge><h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Analyze a digital service</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Configure the experience now. The live scanner, AI engine and evidence collection will be connected in later phases.</p></div><ScannerForm/><div className="mx-auto max-w-3xl"><Alert title="What happens in Foundation?">Start Analysis launches a controlled visual demo. It does not request or inspect the URL you enter.</Alert></div></div></AppShell>}
