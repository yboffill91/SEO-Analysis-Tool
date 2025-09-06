import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { bodyFont } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import DashboardLayout from "@/modules/ui/layout/Dashboard.Layout";

export const metadata: Metadata = {
  title: "Tamer Digital GMB SEO Tool",
  description: "App for search and find strenged points in your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", bodyFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
