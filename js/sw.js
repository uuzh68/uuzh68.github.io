var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    './css/bootstrap.min.css',
    './css/site.css',
    './js/start.js',
    './js/sw.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});