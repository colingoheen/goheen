import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StaticTransition } from "@/components/ui/static-transition";
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
  title: "director/best friend",
  description: "Colin Goheen — director and best friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StaticTransition />
        {children}
      </body>
    </html>
  );
}
