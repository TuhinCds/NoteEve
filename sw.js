const CACHE_NAME = "noteeve-v5";

const APP_ROOT = "/NoteEve/";

const ASSETS = [
  APP_ROOT,
  APP_ROOT + "index.html",
  APP_ROOT + "manifest.json",

  // CSS & JS
  APP_ROOT + "css/style.css",
  APP_ROOT + "js/app.js",

  // Font Awesome
  APP_ROOT + "fontawesome-free-7.0.0-web/css/all.min.css",
  APP_ROOT + "fontawesome-free-7.0.0-web/webfonts/fa-solid-900.woff2",
  APP_ROOT + "fontawesome-free-7.0.0-web/webfonts/fa-regular-400.woff2",
  APP_ROOT + "fontawesome-free-7.0.0-web/webfonts/fa-brands-400.woff2",

  // Icons
  APP_ROOT + "img/icon-192.png",
  APP_ROOT + "img/icon-512.png"
];

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// FETCH (🔥 refresh + offline safe)
self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches.match(APP_ROOT + "index.html")
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
