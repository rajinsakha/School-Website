import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Shree Janak Secondary School",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
