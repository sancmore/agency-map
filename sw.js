const CACHE = 'agency-map-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', function(e){ self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS).catch(function(){}); })); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); })); })); self.clients.claim(); });
self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== location.origin) return; // 네이버 지도·CDN 등 외부는 네트워크 그대로
  e.respondWith(fetch(req).then(function(res){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); return res; }).catch(function(){ return caches.match(req).then(function(m){ return m || caches.match('./index.html'); }); }));
});
