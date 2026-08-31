import { Skeleton } from "@/components/ui";
export default function Loading(){return <div className="space-y-5 p-6 lg:pl-72"><Skeleton className="h-8 w-48"/><Skeleton className="h-24 w-full"/><div className="grid gap-4 md:grid-cols-3"><Skeleton className="h-32"/><Skeleton className="h-32"/><Skeleton className="h-32"/></div><Skeleton className="h-80 w-full"/></div>}
