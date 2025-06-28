// public/sw.js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("app-cache")
      .then((cache) => cache.addAll(["/", "/favicon.ico", "/icon-192x192.png"]))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
