import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Next Blog",
  description: "A blog platform where one can share their views.",
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
