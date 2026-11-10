import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo Gallego | Fullstack Engineer & AI-Augmented Developer",
  description:
    "Portafolio profesional de Leo Gallego. Creador de Atalaya ERP. Desarrollo Fullstack (.NET, Next.js, Cloudflare, Python) y soluciones de software aceleradas con Inteligencia Artificial.",
  keywords: [
    "Leo Gallego",
    "Fullstack Developer",
    "Software Engineer",
    "Atalaya ERP",
    ".NET Developer",
    "Next.js",
    "Cloud Architect",
    "AI Development",
    "Freelance Developer Colombia"
  ],
  authors: [{ name: "Leo Gallego" }],
  openGraph: {
    title: "Leo Gallego | Fullstack Engineer & AI-Augmented Developer",
    description:
      "Desarrollo Fullstack (.NET, Next.js, Cloudflare, Python) y soluciones de software aceleradas con Inteligencia Artificial. Creador de Atalaya ERP.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="bg-[#08090d] text-zinc-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
