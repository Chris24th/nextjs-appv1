import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from './components/footer';
import { Navbar } from './components/nav'
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { CommonBGText } from "@/utils/utils";

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
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${CommonBGText}`}>
          <Navbar />
        {children}
          <Footer />
      </body>
      </html>
    </ThemeProvider>
  );
}
