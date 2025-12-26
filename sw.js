const CACHE = "noteeve-shell-v1";
const APP_SHELL = "/NoteEve/index.html";

const ASSETS = [
  "/NoteEve/",
  "/NoteEve/index.html",
  "/NoteEve/manifest.json",
  "/NoteEve/css/style.css",
  "/NoteEve/js/app.js",
  "/NoteEve/fontawesome-free-7.0.0-web/css/all.min.css",
  "/NoteEve/fontawesome-free-7.0.0-web/webfonts/fa-solid-900.woff2",
  "/NoteEve/fontawesome-free-7.0.0-web/webfonts/fa-regular-400.woff2",
  "/NoteEve/fontawesome-free-7.0.0-web/webfonts/fa-brands-400.woff2",
  "/NoteEve/img/icon-192.png",
  "/NoteEve/img/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", e => {
  // 🔥 THIS is the magic
  if (e.request.mode === "navigate") {
    e.respondWith(
      caches.match(APP_SHELL)
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
