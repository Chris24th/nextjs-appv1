'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from './components/footer';
import { Navbar } from './components/nav'
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "わたしのPortfolioです",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider >
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color1)] text-[var(--color4)]`}>
          <Navbar />
          <div className="flex justify-center items-center min-h-screen">
        {children}
          </div>
          <Footer />
      </body>
      </html>
    </ThemeProvider>
  );
}
