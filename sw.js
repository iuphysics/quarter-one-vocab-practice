// Increment this version whenever any cached application file changes.
const VERSION = 'wordcraft-offline-v1';
const PREFIX = `wordcraft:${self.registration.scope}:`;
const CACHE = PREFIX + VERSION;
const ASSETS = ['./', 'index.html', 'style.css', 'app.js', 'data.js', 'engine.js', 'extra-questions.js', 'offline.js', 'manifest.webmanifest', 'icon.svg'];
const assetURLs = ASSETS.map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
 // Installation succeeds only after the complete app is available offline.
 event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(
  assetURLs.map(url => new Request(url, {cache: 'reload'}))
 )));
 // An update waits for existing app tabs to close, preserving active quizzes.
});
self.addEventListener('activate', event => {
 event.waitUntil((async () => {
  for (const key of await caches.keys()) {
   if (key.startsWith(PREFIX) && key !== CACHE) await caches.delete(key);
  }
  await self.clients.claim();
 })());
});
self.addEventListener('message', event => {
 if (event.data?.type !== 'OFFLINE_STATUS') return;
 event.waitUntil((async () => {
  const cache = await caches.open(CACHE);
  const ready = (await Promise.all(assetURLs.map(url => cache.match(url)))).every(Boolean);
  event.ports[0]?.postMessage({ready});
 })());
});
self.addEventListener('fetch', event => {
 if (event.request.method !== 'GET') return;
 const url = new URL(event.request.url);
 if (!url.href.startsWith(self.registration.scope)) return;
 // Only serve the app's own known URLs; do not cache arbitrary downloads.
 const cleanURL = new URL(url); cleanURL.search = ''; cleanURL.hash = '';
 if (!assetURLs.includes(cleanURL.href)) return;
 event.respondWith((async () => {
  const cache = await caches.open(CACHE);
  return (await cache.match(cleanURL.href)) || fetch(event.request);
 })());
});
