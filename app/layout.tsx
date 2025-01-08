// layout.tsx

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
  description: "The ultimate healthcare management system",
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