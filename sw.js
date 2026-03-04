const CACHE_NAME = 'fazgame-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',        // if you separate CSS, otherwise include the HTML above
  '/script.js',         // if you separate JS
  '/stock.js',
  '/images/logo1.png',
  '/images/trade.webp',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap',
  'https://api.fontshare.com/v2/css?f[]=clash-display@400,700,600&display=swap',
  'https://api.iconify.design/simple-icons/playstation.svg',
  'https://api.iconify.design/simple-icons/xbox.svg',
  'https://api.iconify.design/simple-icons/nintendoswitch.svg',
  'https://api.iconify.design/mdi/desktop-classic.svg',
  'https://cdn.simpleicons.org/shopee/ee4d2d',
  'https://cdn.simpleicons.org/visa/1a1f71'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});