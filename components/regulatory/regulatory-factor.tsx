import { Badge } from "@/components/ui";
export function RegulatoryFactor({name,status="Requires review"}:{name:string;status?:string}){return <div className="flex items-center justify-between rounded-xl border border-subtle surface-2 p-4"><span className="text-sm font-medium">{name}</span><Badge tone="medium">{status}</Badge></div>}
