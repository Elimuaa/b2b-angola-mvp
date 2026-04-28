import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B2B Angola — Marketplace Profissional",
  description: "A plataforma líder de serviços profissionais B2B em Angola. Conecte-se com freelancers verificados e empresas de confiança.",
  keywords: ["B2B", "Angola", "marketplace", "freelancer", "serviços", "profissional"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
