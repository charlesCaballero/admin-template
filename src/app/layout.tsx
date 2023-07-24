import ThemeProvider from "@/_components/layout/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "PWMS",
  description: "PhilHealth Warehouse Management System",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
