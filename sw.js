const CACHE='chugaku-test-v7';
const FILES=['./','./index.html','./style.css?v=2.7.0','./app.js?v=2.7.0','./questions.js?v=2.7.0','./challenge-questions.js?v=2.7.0','./version.json','./manifest.webmanifest','./icon.svg','./favicon.svg','./assets/equations-p58-59.jpg','./assets/equations-p60-61.jpg','./assets/equations-p62-63.jpg','./assets/equations-p64-65.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)))});
