import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { Topbar } from "./topbar";
export function AppShell({ children, title }: { children: React.ReactNode; title?: string }) { return <div className="min-h-screen bg-[var(--privacy-void)]"><Sidebar/><div className="lg:pl-64"><Topbar title={title}/><MobileNav/><main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main></div></div>; }
