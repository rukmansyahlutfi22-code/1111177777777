const CACHE_NAME = 'absen-desa-v1';
const assets = [
  './',
  './index.html',
  './logo_desa.png'
];

// Tahap Install Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Tahap Aktivasi
self.addEventListener('activate', e => {
  console.log('Service Worker Aktif');
});

// SYARAT MUTLAK PWA: Harus ada Fetch Handler
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
