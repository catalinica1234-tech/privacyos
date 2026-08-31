import { Badge } from "@/components/ui";
import type { RiskLevel } from "@/lib/demo/data";
export function RiskBadge({ level }: { level: RiskLevel }) { const tone=level.toLowerCase() as "low"|"medium"|"high"|"critical"; return <Badge tone={tone}><span className="h-1.5 w-1.5 rounded-full bg-current"/>{level}</Badge>; }
