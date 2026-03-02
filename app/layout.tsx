import type { Metadata } from "next";

import "./globals.css";

import { siteContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${siteContent.company.name} | ${siteContent.company.subtitle}`,
  description: siteContent.company.repeatingLine,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
