// src/app/layout.tsx
import type { Metadata } from "next";
import SWRegister from "@/components/sw-register";

export const metadata: Metadata = {
  title: "Minimal Next.js PWA",
  description: "A minimal PWA using Next.js 15",
  themeColor: "#317EFB",
  // ...other metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </head>
      <SWRegister />
      <body>{children}</body>
    </html>
  );
}
