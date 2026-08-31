import { AppShell } from "@/components/layout/app-shell";
import { ScannerProgress } from "@/components/scanner/scanner-progress";
export default function ProgressPage(){return <AppShell title="Scanning"><div className="py-6 sm:py-12"><ScannerProgress/></div></AppShell>}
