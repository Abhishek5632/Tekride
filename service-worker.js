const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = 'offline.html';

// List of assets to cache
const ASSETS_TO_CACHE = [
  OFFLINE_URL,
  './styles.css',
  './scripts.js',
  './images/img1.jpeg', // Example image assets
  './images/img2.jpeg',
  './images/img3.jpeg',
  './images/img4.jpeg',
  './images/img5.jpeg',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  console.log('Service Worker installed and assets cached.');
});

// Fetch event
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // For navigation requests, serve the offline page if offline
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      })
    );
  } else {
    // For other requests, try the network first, then cache
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the response dynamically
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  console.log('Service Worker activated.');
});
