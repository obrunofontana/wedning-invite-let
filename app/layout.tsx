import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leticia & Willian - Convite de Casamento",
  description: "Convite para o casamento de Leticia e Willian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${playfair.variable}`}>
      <body
        className="font-sans"
      >
        {children}
      </body>
    </html>
  );
}
