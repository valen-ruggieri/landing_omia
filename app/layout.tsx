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

export const metadata: Metadata = {
  title: "Omia",
  description: "Transforma tu negocio con inteligencia artificial",
  icons: { 
    icon: "/omia-icon.svg", 
    shortcut: "/omia-icon.svg", 
    apple: "/omia-icon.svg", 
  }, 
  metadataBase: new URL("https://omia.io"), 

  openGraph: {  
    title: "Omia", 
    description: "Transforma tu negocio con inteligencia artificial", 
    images: [ 
      { url: "/omia-icon.svg", width: 1200, height: 630, alt: "Omia" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omia",
    description: "Transforma tu negocio con inteligencia artificial",
    images: ["/omia-icon.svg"], 
    site: "@omia.io", 


  }, 
  keywords: ["omia", "inteligencia artificial", "transformacion", "negocio", "consultoria", "asesoria", "gestion", "ventas", "marketing", "soporte", "tecnico", "administracion", "administrativo", "operaciones", "operacional", "operacionales", "operacionales de negocios", "operacionales de negocios en linea", "operacionales de negocios en linea en argentina", "operacionales de negocios en linea en argentina 2026", "operacionales de negocios en linea en argentina 2027", "operacionales de negocios en linea en argentina 2028", "operacionales de negocios en linea en argentina 2029", "operacionales de negocios en linea en argentina 2030"],
  authors: [{ name: "Omia", url: "https://omia.io" }],
  creator: "Omia",
  publisher: "Omia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }, 
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
