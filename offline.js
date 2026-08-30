const CACHE_NAME = 'offline-notepad-v2';
const ASSETS = [
    "./",
    "./todolist.html",
    "./sched.jpg",
    "./cloud.png",
    "./clouds2.png",
    "./clouds3.png",
    "./galit.gif",
    "./cry.gif",
    "./squishy.png"
];

// Install event: Caches all critical app files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch event: Serves files from cache when network is unavailable
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
