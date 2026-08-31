import { Card } from "@/components/ui";
import { PrivacyScore } from "@/components/privacy/privacy-score";
export function ScoreOverview(){return <Card className="p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Privacy overview</p><p className="mt-1 text-xs text-muted">Current demo workspace score</p></div><span className="text-xs text-muted">7 day</span></div><div className="mt-3"><PrivacyScore score={78}/></div></Card>}
