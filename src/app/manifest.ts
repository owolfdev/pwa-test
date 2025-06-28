import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Next.js PWA",
    short_name: "NextPWA",
    description: "A Progressive Web App built with Next.js 15",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#317EFB",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
