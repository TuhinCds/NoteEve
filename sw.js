// const CACHE = "noteeve-shell-v1";
// const APP_SHELL = "index.html";

// const ASSETS = [
//   "index.html",
//   "manifest.json",
//   "css/style.css",
//   "js/app.js",
//   "fontawesome-free-7.0.0-web/css/all.min.css",
//   "fontawesome-free-7.0.0-web/webfonts/fa-solid-900.woff2",
//   "fontawesome-free-7.0.0-web/webfonts/fa-regular-400.woff2",
//   "fontawesome-free-7.0.0-web/webfonts/fa-brands-400.woff2",
//   "img/icon-512.png",
//   "audios"
// ];

// self.addEventListener("install", e => {
//   e.waitUntil(
//     caches.open(CACHE).then(c => c.addAll(ASSETS))
//   );
//   self.skipWaiting();
// });

// self.addEventListener("activate", e => {
//   e.waitUntil(self.clients.claim());
// });

// self.addEventListener("fetch", e => {
//   // is the magic
//   if (e.request.mode === "navigate") {
//     e.respondWith(
//       caches.match(APP_SHELL)
//     );
//     return;
//   }

//   e.respondWith(
//     caches.match(e.request).then(res => {
//       return res || fetch(e.request);
//     })
//   );
// });
