const CACHE_NAME = "noteeve-v2";

const urlsToCache = [
  "/NoteEve/",
  "/NoteEve/index.html",
  "/NoteEve/manifest.json",
  "/NoteEve/css/style.css",
  "/NoteEve/js/app.js",
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
