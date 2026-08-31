import { FileSearch } from "lucide-react";
import { Card, Button } from "@/components/ui";
import Link from "next/link";
export function EmptyState({title="No analyses yet",description="Start your first analysis to see privacy intelligence here."}:{title?:string;description?:string}){return <Card className="p-10 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl surface-2 text-muted"><FileSearch className="h-6 w-6"/></div><h2 className="mt-5 font-display text-xl font-semibold">{title}</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">{description}</p><Link href="/dashboard/scanner" className="mt-6 inline-block"><Button>Start analysis →</Button></Link></Card>}
