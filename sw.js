const CACHE = "desktop-files-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./favicon.svg",
  "./music.html",
  "./png.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response =>
        response || fetch(event.request)
      )
  );
});