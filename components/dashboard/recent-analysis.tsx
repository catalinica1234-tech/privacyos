import { recentAnalyses } from "@/lib/demo/data";
import { AnalysisCard } from "@/components/analysis/analysis-card";
export function RecentAnalysis(){return <div className="space-y-3">{recentAnalyses.map(a=><AnalysisCard key={a.id} analysis={a}/>)}</div>}
