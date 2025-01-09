"use client";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from 'react';

const sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata: Metadata = {
  title: "Medora | New Gen Healthcare",
  description:  "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.body.classList.add('dark');
    document.body.style.colorScheme = 'dark';
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title?.toString() || "Default Title"}</title>
      </head>
      <body  
      className={cn(
          "min-h-screen font-sans antialiased",
          sans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};