'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eab1e4c8cd243feb0f1b7ab3ed35e10d",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/FontManifest.json": "1277f246a93f4d6bdc7c4011220969cf",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "535fa6146d9e29b3b981176e4716be3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"bridgetcrypt.github.io/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"bridgetcrypt.github.io/.git/config": "0fc74e949bc12466b941229a7ea889cd",
"bridgetcrypt.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"bridgetcrypt.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"bridgetcrypt.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"bridgetcrypt.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"bridgetcrypt.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"bridgetcrypt.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"bridgetcrypt.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"bridgetcrypt.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"bridgetcrypt.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"bridgetcrypt.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"bridgetcrypt.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"bridgetcrypt.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"bridgetcrypt.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"bridgetcrypt.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"bridgetcrypt.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"bridgetcrypt.github.io/.git/index": "b06e3737fb836870723934f58457d2f8",
"bridgetcrypt.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"bridgetcrypt.github.io/.git/logs/HEAD": "739cd49109a66b42d97a7cc4e4183577",
"bridgetcrypt.github.io/.git/logs/refs/heads/master": "739cd49109a66b42d97a7cc4e4183577",
"bridgetcrypt.github.io/.git/logs/refs/remotes/origin/master": "9e89b4ffaa4183fd8f17da894820dd77",
"bridgetcrypt.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"bridgetcrypt.github.io/.git/objects/1d/d8fb911981afb2cfeecc5367f4120c4eb80311": "6dd4c0ba5131f3b71eb0f5f9d26b17b0",
"bridgetcrypt.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"bridgetcrypt.github.io/.git/objects/21/cab6fb01d9076c25320b70b488acc0878ca885": "51de2fab98f5ad4831df557c84702c4c",
"bridgetcrypt.github.io/.git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
"bridgetcrypt.github.io/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"bridgetcrypt.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"bridgetcrypt.github.io/.git/objects/58/6a50b8e9257e58b0a89c694a5f8584d47a30f2": "6446db12741e463f70d3e315978d2b12",
"bridgetcrypt.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"bridgetcrypt.github.io/.git/objects/7a/73d047e3c877c9ba30828af478654a9ce2b91d": "b91f10bf2e6035f21f524c16c8ce5cf7",
"bridgetcrypt.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"bridgetcrypt.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"bridgetcrypt.github.io/.git/objects/9f/99722976effddef8e514dd5925bc99df4f0635": "89205065bac143067c1005c6c059b5c6",
"bridgetcrypt.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"bridgetcrypt.github.io/.git/objects/a2/0e1181479cbb17838e6e60e4b7faa6f2cd74fd": "a0d1fca8ffda2c3821578068e2958a50",
"bridgetcrypt.github.io/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"bridgetcrypt.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"bridgetcrypt.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"bridgetcrypt.github.io/.git/objects/c6/12512f4264c1cfb0bbc7c3dec16f66fdb46b5a": "8a218c3daecd44bd8af5008e8852c934",
"bridgetcrypt.github.io/.git/objects/de/7f3ba468510ea50faea74baac24eeffaf88cbe": "ec421c5ad23f6107d138759e4284865f",
"bridgetcrypt.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"bridgetcrypt.github.io/.git/objects/f0/279e832f0372247de00ecbb110d540e9485e3f": "d8a9b2248cf182ea43ebb998a610cd06",
"bridgetcrypt.github.io/.git/refs/heads/master": "dc5d15fb871af07c8e920b0f49739074",
"bridgetcrypt.github.io/.git/refs/remotes/origin/master": "dc5d15fb871af07c8e920b0f49739074",
"bridgetcrypt.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"bridgetcrypt.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"bridgetcrypt.github.io/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"bridgetcrypt.github.io/assets/NOTICES": "db725e32f36725f0e6fe1f192a6a4ff4",
"bridgetcrypt.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"bridgetcrypt.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"bridgetcrypt.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"bridgetcrypt.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"bridgetcrypt.github.io/index.html": "468e5ce7391129c072fa31c48017c07c",
"/": "ed418251d33e9f58bcf5e5ac2f179c7d",
"bridgetcrypt.github.io/main.dart.js": "8032a7629f957e07f7ed04bd08f1cc39",
"bridgetcrypt.github.io/manifest.json": "bfad8aeb2570ce81095ce6ccdffd2704",
"bridgetcrypt.github.io/version.json": "4e29f8df78389d3d7cd8173221918218",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ed418251d33e9f58bcf5e5ac2f179c7d",
"main.dart.js": "dce7a4a9a4b508b50c3d2eca5e2e0971",
"manifest.json": "bfad8aeb2570ce81095ce6ccdffd2704",
"version.json": "4e29f8df78389d3d7cd8173221918218"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
