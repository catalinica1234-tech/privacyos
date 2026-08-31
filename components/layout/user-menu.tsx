import Link from "next/link";
import { Avatar } from "@/components/ui";
export function UserMenu(){return <Link href="/dashboard/profile" className="flex items-center gap-2 rounded-xl p-1.5 hover:surface-2"><Avatar/><span className="hidden text-sm font-medium xl:block">Isabel</span></Link>}
