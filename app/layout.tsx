import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: "PRIVACYOS — The intelligence layer for digital privacy",
  description: "Evidence-based privacy intelligence for digital services.",
  keywords: ["privacy", "privacy intelligence", "cybersecurity", "GDPR", "Chile", "PRIVACYOS"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
