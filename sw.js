const CACHE_NAME = "noteeve-v3";

const urlsToCache = [
  "/NoteEve/",
  "/NoteEve/index.html",
  "/NoteEve/manifest.json",

  // CSS & JS
  "/NoteEve/css/style.css",
  "/NoteEve/js/app.js",

  // Font Awesome CSS
  "/NoteEve/fontawesome-free-7.0.0-web/css/all.min.css",

  // Font Awesome Fonts (most common)
  "/NoteEve/fontawesome-free-7.0.0-web/webfonts/fa-solid-900.woff2",
  "/NoteEve/fontawesome-free-7.0.0-web/webfonts/fa-regular-400.woff2",
  "/NoteEve/fontawesome-free-7.0.0-web/webfonts/fa-brands-400.woff2",

  // Icons
  "/NoteEve/img/icon-192.png",
  "/NoteEve/img/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match("/NoteEve/index.html")
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
