import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: "PRIVACYOS — Inteligencia para la privacidad digital",
  description:
    "Plataforma demostrativa de inteligencia de privacidad basada en evidencia para servicios digitales.",
  keywords: [
    "privacidad digital",
    "ciberseguridad",
    "protección de datos",
    "GDPR",
    "Chile",
    "PRIVACYOS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
