import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.omia.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Omia | Automatiza tu atención sin perder clientes",
    template: "%s | Omia",
  },
  description:
    "Diseñamos asistentes de IA, sistemas personalizados y automatizaciones para que tu empresa funcione 24/7 sin depender de vos. Transforma tu negocio con inteligencia artificial.",
  applicationName: "Omia",
  keywords: [
    "omia",
    "inteligencia artificial",
    "IA",
    "asistentes de IA",
    "automatización",
    "transformación digital",
    "negocio",
    "consultoría",
    "asesoría",
    "gestión",
    "ventas",
    "marketing",
    "soporte técnico",
    "operaciones",
    "Argentina",
  ],
  authors: [{ name: "Omia", url: SITE_URL }],
  creator: "Omia",
  publisher: "Omia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/omia-icon.svg",
    shortcut: "/omia-icon.svg",
    apple: "/omia-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Omia",
    title: "Omia | Automatiza tu atención sin perder clientes",
    description:
      "Diseñamos asistentes de IA, sistemas personalizados y automatizaciones para que tu empresa funcione 24/7 sin depender de vos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omia - Asistentes de IA y automatización para tu empresa",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@omia.ia",
    creator: "@omia.ia",
    title: "Omia | Automatiza tu atención sin perder clientes",
    description:
      "Diseñamos asistentes de IA, sistemas personalizados y automatizaciones para que tu empresa funcione 24/7.",
    images: ["/og-image.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
