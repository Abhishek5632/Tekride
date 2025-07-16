const CACHE_NAME = 'tekride-cache-v2';
const OFFLINE_URL = './offline.html';

// Install event: cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './offline.html',
        './styles.css', // Add all external styles
        './scripts.js', // Add all external scripts
        './images/car-image.jpg',
        './fonts/Montserrat-Regular.woff2',
        './fonts/Raleway-Regular.woff2',
      ]);
    })
  );
  self.skipWaiting();
});

// Activate event: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Serve cached content or offline page
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Network available, return fetched response
        return response;
      })
      .catch(() => {
        // Network unavailable, return cached response or offline page
        return caches.match(event.request).then(cachedResponse => {
          return cachedResponse || caches.match(OFFLINE_URL);
        });
      })
  );
});
