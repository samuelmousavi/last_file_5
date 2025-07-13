// const CACHE_NAME = 'htcp-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/manifest.json',
//   '/icons/icon-192.png',
//   '/icons/icon-512.png'
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(response => response || fetch(event.request))
//   );
// });
// const input = "123456789012";
// const encoded = encodeHTCP(input);
// console.log("Encoded:", encoded);
// function encodeHTCP(input) {
//   if (!/^\d{12}$/.test(input)) {
//     throw new Error("Input must be exactly 12 digits");
//   }

//   let seed = 987654321;
//   for (let i = 0; i < input.length; i++) {
//     seed ^= (parseInt(input[i]) + i) * 37;
//     seed = (seed * 31 + i * 17) % 1e9;
//   }

//   const chars = "1234567890";
//   let encoded = "";

//   for (let i = 0; i < 12; i++) {
//     seed = (seed * 33 + i * 13) % 1e9;
//     const index = Math.abs(seed % chars.length);
//     encoded += chars[index];
//   }

//   return encoded;
// }
// const inputEl = document.getElementById("codeInput");
// const buttonEl = document.getElementById("generateBtn");

// inputEl.addEventListener("input", () => {
//   if (/^\d{12}$/.test(inputEl.value)) {
//     buttonEl.disabled = false;
//   } else {
//     buttonEl.disabled = true;
//   }
// });
// const CACHE_NAME = 'htcp-cache-v3';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/manifest.json',
//   '/service-worker.js',
//   '/icons/icon-192.png',
//   '/icons/icon-512.png'
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
//   );
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(keys =>
//       Promise.all(keys.map(key => {
//         if (key !== CACHE_NAME) return caches.delete(key);
//       }))
//     )
//   );
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(response => response || fetch(event.request))
//   );
// });
const CACHE_NAME = "htcp-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
