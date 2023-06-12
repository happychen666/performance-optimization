// Service worker code goes in here!
console.log("ffffff");
var cacheVersion = "v1";
cachedAssets = [
  "/css/global.css",
  "/js/debounce.js",
  "/js/nav.js",
  "/js/attach-nav.js",
  "/img/global/jeremy.svg",
  "/img/global/icon-github.svg",
  "/img/global/icon-linked-in.svg",
  "/img/global/icon-twitter.svg",
  "/img/global/icon-email.svg",
];

// const self = this;
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheVersion)
      .then(function (cache) {
        return cache.addAll(cachedAssets);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  console.log("activate");
  return self.clients.claim();
});

// 拦截网络请求
self.addEventListener("fetch", function (event) {
  //拦截符合
  var allowedHosts = /(localhost|fonts\.googleapis\.com|fonts\.gtatic\.com)/i,
    //阻止符合这个正则表达式的资源存储到service worker缓存
    deniedAssets = /(sw\.js|sw-install\.js)$/i;
  if (
    allowedHosts.test(event.request.url) === true &&
    deniedAssets.test(event.request.url) === false
  ) {
    //使用event对象的respondWith方法拦截请求，绕过这个方法就会发生默认浏览器行为
    event.respondWith(
      caches.match(event.request).then(function (cachedResponse) {
        return (
          // 遇到不在缓存中的资源请求，则用 fetch 方法从网络中检索
          cachedResponse ||
          fetch(event.request).then(function (fetchedResponse) {
            caches.open(cacheVersion).then(function (cache) {
              cache.put(event.request, fetchedResponse.clone());
            });
            return fetchedResponse;
          })
        );
      })
    );
  }
});
