import Link from "next/link";
import { FileSearch } from "lucide-react";
import { Button } from "@/components/ui";
import { Logo } from "@/components/layout/logo";
export default function NotFound(){return <main className="grid min-h-screen place-items-center p-6"><div className="text-center"><Logo/><div className="mx-auto mt-16 grid h-14 w-14 place-items-center rounded-2xl surface-2 text-muted"><FileSearch/></div><h1 className="mt-5 font-display text-4xl font-semibold">Page not found</h1><p className="mt-2 text-sm text-muted">The requested PRIVACYOS view does not exist.</p><Link href="/" className="mt-6 inline-block"><Button>Back home</Button></Link></div></main>}
