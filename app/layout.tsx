import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Providers } from "./providers";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio",
  },
  description: "My portfolio website showcasing my projects and work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <Providers>
          <div className="flex min-h-screen">
            <div className="border-r bg-background">
              <Sidebar />
            </div>
            <div className="flex-1">
              <main className="h-full py-6">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
