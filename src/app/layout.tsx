import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { bodyFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Tamer Digital GM SEO Calculator",
  description: "App for search and find strenged points in your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", bodyFont.className)}>{children}</body>
    </html>
  );
}
