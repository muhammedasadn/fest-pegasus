import type { Metadata } from "next";
import { Archivo_Black, Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flame burger — Crafted With Fire.",
  description: "Build burgers that look premium, taste unforgettable, and become the city's favorite comfort food.",
  openGraph: {
    title: "Flame burger — Crafted With Fire.",
    description: "Build burgers that look premium, taste unforgettable, and become the city's favorite comfort food.",
    type: "website",
    url: "https://real-project-691891.framer.app/",
    images: [
      {
        url: "https://framerusercontent.com/images/xlDL1YNcyAl3fgLpk0wzOY9lB4.png",
        width: 1200,
        height: 630,
        alt: "Flame burger — Crafted With Fire.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flame burger — Crafted With Fire.",
    description: "Build burgers that look premium, taste unforgettable, and become the city's favorite comfort food.",
    images: ["https://framerusercontent.com/images/xlDL1YNcyAl3fgLpk0wzOY9lB4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-flame-cream text-flame-dark">
        {children}
      </body>
    </html>
  );
}
