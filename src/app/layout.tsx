import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ke-Tomate | Simplemente la Michelada Perfecta",
  description:
    "Bar de micheladas en Cuernavaca, Morelos. Micheladas, escarchados, tragos y botanas. 4 sucursales. Simplemente la Michelada Perfecta.",
  keywords:
    "Ke-Tomate, micheladas, Cuernavaca, bar, botanas, escarchados, cerveza preparada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased bg-dark`}>
        {children}
      </body>
    </html>
  );
}
