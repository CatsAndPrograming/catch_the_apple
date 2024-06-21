const staticCacheName = 'catch_the_apple';
const assets = [
  './js/animation.js',
  './js/class.js',
  './js/images.js',
  './css/main.css',
  './img/apple.png', './img/apple_tree.png', './img/apple_worm.png', './img/arrow.png', './img/arrow2.png', './img/basket.png', './img/basket_flip.png', './img/dirt.png', './img/favicon.ico', './img/fullscreen.png', './img/pause.png', './img/play.png', './img/tree_1.png', './img/tree_2.png', './img/tree_3.png', './img/unfullscreen.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});