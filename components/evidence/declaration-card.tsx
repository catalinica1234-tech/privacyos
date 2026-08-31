import { FileText } from "lucide-react";
import { Card } from "@/components/ui";
export function DeclarationCard({children}:{children:React.ReactNode}){return <Card className="h-full border-privacy-blue/15 p-5"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-privacy-blue"><FileText className="h-4 w-4"/> Declaration</div><blockquote className="mt-5 text-sm leading-7 text-muted">“{children}”</blockquote><p className="mt-5 text-xs text-muted">Source: privacy policy representation</p></Card>}
