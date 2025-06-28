// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Minimal Next.js PWA",
    short_name: "NextPWA",
    description: "Simple PWA with Next.js 15 and React 19",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#317EFB",
    icons: [
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
