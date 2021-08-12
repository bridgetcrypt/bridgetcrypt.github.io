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
"bridgetcrypt.github.io/.git/COMMIT_EDITMSG": "0fb0d71eae074101d9fe24940d1efbf7",
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
"bridgetcrypt.github.io/.git/index": "d4226617c49b4ad703fbdaa84145c47d",
"bridgetcrypt.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"bridgetcrypt.github.io/.git/logs/HEAD": "5c433cb695ac1fb9b2f628afefd91c5a",
"bridgetcrypt.github.io/.git/logs/refs/heads/master": "5c433cb695ac1fb9b2f628afefd91c5a",
"bridgetcrypt.github.io/.git/logs/refs/remotes/origin/master": "9455e5f751f261b524978c55b59b9829",
"bridgetcrypt.github.io/.git/objects/00/0576a82af9ef26ea2ed7acc8bb2bfef117b99f": "a418a874051499684888b5d07f0974c9",
"bridgetcrypt.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"bridgetcrypt.github.io/.git/objects/05/7d51453ea5596c3d5909e1ed3334e51cda6087": "1e162118db8681b5ecdc66f7359182ab",
"bridgetcrypt.github.io/.git/objects/12/4c9f72b758ac56b4364dac6d697edc6b4f889f": "41f10a374e13942757d12839b8969f6b",
"bridgetcrypt.github.io/.git/objects/16/7e7e4cf23fb62a899b7fcece1cf72918e26406": "ba67e69f56a61dc0f0aeee3d25abc7a2",
"bridgetcrypt.github.io/.git/objects/19/704769797d5fb95c3aea2e65756a1b21686157": "d435119f7de53158c266af098781dacb",
"bridgetcrypt.github.io/.git/objects/1d/d8fb911981afb2cfeecc5367f4120c4eb80311": "6dd4c0ba5131f3b71eb0f5f9d26b17b0",
"bridgetcrypt.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"bridgetcrypt.github.io/.git/objects/21/cab6fb01d9076c25320b70b488acc0878ca885": "51de2fab98f5ad4831df557c84702c4c",
"bridgetcrypt.github.io/.git/objects/22/fd89086026f0e157cdea1fa10b3bffc5e69169": "031585688ba9274bca95f9a64ef31141",
"bridgetcrypt.github.io/.git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
"bridgetcrypt.github.io/.git/objects/25/c5c8af47c4bddad23ac8c84351e37c8a6c34e7": "a2ab1aeef8758e40ebeee83f6bfa7182",
"bridgetcrypt.github.io/.git/objects/2c/537256e1e4f8863a92f7ebc20a6e8bb832190a": "121c648db402a3148709b33c86272a47",
"bridgetcrypt.github.io/.git/objects/30/820f839a6d03723b0d086b638c64bb93f2ef63": "19c894693a2f42c089dc490d59c1fd4d",
"bridgetcrypt.github.io/.git/objects/31/e6e66c02a3f07e3bc166e4373a527767b5d5c3": "a9fe1ac1590e494c13f4de239c635cef",
"bridgetcrypt.github.io/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"bridgetcrypt.github.io/.git/objects/3b/5e0a719368bc43f8433468493c4f3e83f45f87": "7fd2ca1c8d73162fca17afc95f8604af",
"bridgetcrypt.github.io/.git/objects/3e/9e879db323279d546ef8c0d1e9e5de0d3b425b": "bbde3bc31eb7affeb572d26e961774e9",
"bridgetcrypt.github.io/.git/objects/3f/93de131b77053f4d5165535c5012e7f7ab9376": "4df7bb4ad1f694901cd3885d33166dbd",
"bridgetcrypt.github.io/.git/objects/3f/ad8d0b9859a8b07004352edc79c882b587f5eb": "1a8768f9ef25a4d879590607409c9de1",
"bridgetcrypt.github.io/.git/objects/45/f05c70044da07540bb2cba9a700b568c61f69d": "06815f8bb5857c5025965d1a0bb145a0",
"bridgetcrypt.github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"bridgetcrypt.github.io/.git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
"bridgetcrypt.github.io/.git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
"bridgetcrypt.github.io/.git/objects/58/6a50b8e9257e58b0a89c694a5f8584d47a30f2": "6446db12741e463f70d3e315978d2b12",
"bridgetcrypt.github.io/.git/objects/67/a936aa04098e3141f2fd8c4ded7802aac66a98": "b693fc9056e39c7c97f077c096c1b825",
"bridgetcrypt.github.io/.git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
"bridgetcrypt.github.io/.git/objects/78/5b9f4cb736f36ceb81dba228e66e78f7b8fa02": "a6a8e5131ca2205d276b7a166f61fab6",
"bridgetcrypt.github.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"bridgetcrypt.github.io/.git/objects/7a/73d047e3c877c9ba30828af478654a9ce2b91d": "b91f10bf2e6035f21f524c16c8ce5cf7",
"bridgetcrypt.github.io/.git/objects/7d/8a5b23a6ae573c5ce04bb182543f5556fcfd8f": "b40bc76776b8e65336442160c4d3ea51",
"bridgetcrypt.github.io/.git/objects/83/cebb6d5394d407ac885da081bece8da05f6a3c": "5c752f234fc78f9b22067e9af6048c29",
"bridgetcrypt.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"bridgetcrypt.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"bridgetcrypt.github.io/.git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
"bridgetcrypt.github.io/.git/objects/96/5f980a1fb1961482861a4339625d71e510df55": "03027d7015bd4bc6b496b7b4a7e0bc02",
"bridgetcrypt.github.io/.git/objects/9c/c9945525d2b356b1df2fe35fd6359c29f5d887": "ad288947c172331078ad94aa3585f4c3",
"bridgetcrypt.github.io/.git/objects/9f/99722976effddef8e514dd5925bc99df4f0635": "89205065bac143067c1005c6c059b5c6",
"bridgetcrypt.github.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"bridgetcrypt.github.io/.git/objects/a2/0e1181479cbb17838e6e60e4b7faa6f2cd74fd": "a0d1fca8ffda2c3821578068e2958a50",
"bridgetcrypt.github.io/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"bridgetcrypt.github.io/.git/objects/a9/609f34d40bb4a641555be8cb40c161b0b23c0e": "3eab779769c40ab4c3238ebd82624264",
"bridgetcrypt.github.io/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"bridgetcrypt.github.io/.git/objects/ad/55458e0ede9e9612c474eb281b04043a33d69b": "1fc2ccdc1a1413856a9b4ff02e40ed81",
"bridgetcrypt.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"bridgetcrypt.github.io/.git/objects/bb/31a40b67f221f29cc2fc9e9a757e19f69ee8ba": "d6377435121d4c2b20f7d9039d55a916",
"bridgetcrypt.github.io/.git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
"bridgetcrypt.github.io/.git/objects/bf/20996083d43e6ab90f824609c400a695114836": "a46076be1e8a2795fd7417817761df41",
"bridgetcrypt.github.io/.git/objects/c0/3ec2ba0a73d849c18c114e50ea200795a6d24d": "03eefcd82c64d95b4dcf3cdbe8b365f3",
"bridgetcrypt.github.io/.git/objects/c3/8c763a83d9b7db2c1223ab94d8060fa0c6da30": "67cb65a7ab998840436ae4b383cc4947",
"bridgetcrypt.github.io/.git/objects/c5/361da3753bd90400b4c1546660ded4d93cd046": "07372b409c5abfd86ff1f830ab1aec68",
"bridgetcrypt.github.io/.git/objects/c6/12512f4264c1cfb0bbc7c3dec16f66fdb46b5a": "8a218c3daecd44bd8af5008e8852c934",
"bridgetcrypt.github.io/.git/objects/c6/fbcfa81f33b49af836636a55dcd7d25caa0db0": "caa85aa2643099cedd9238502bf870c1",
"bridgetcrypt.github.io/.git/objects/cc/9fa8588dbbcdeacf1b37440f1122b22442da27": "e2d50bb506110c6a75164872740db2cd",
"bridgetcrypt.github.io/.git/objects/d7/168639f06fb9856363beef7ff28837f26108f2": "3e836a3058c865ad881ff55c5b8d270d",
"bridgetcrypt.github.io/.git/objects/d8/db0af1f9508a98b7cc341d6977b31251d1d24b": "4e9ff8023520d6684aa2bb961b2a7919",
"bridgetcrypt.github.io/.git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
"bridgetcrypt.github.io/.git/objects/de/7f3ba468510ea50faea74baac24eeffaf88cbe": "ec421c5ad23f6107d138759e4284865f",
"bridgetcrypt.github.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"bridgetcrypt.github.io/.git/objects/e8/21910ffd7f44996e2ac3750f06d7203d5febcf": "58b76c5ceeb7b9f1478e9bd575756760",
"bridgetcrypt.github.io/.git/objects/eb/958640651e4e9697f086bd8b997db031488c55": "609d62a53c3a3f73b91534d59d12f212",
"bridgetcrypt.github.io/.git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
"bridgetcrypt.github.io/.git/objects/f0/279e832f0372247de00ecbb110d540e9485e3f": "d8a9b2248cf182ea43ebb998a610cd06",
"bridgetcrypt.github.io/.git/objects/f1/5f192d35a10d4be1c8ac14fa385889f0fab14c": "01a51a4b43470e1c9ee07bc1a06cc1e6",
"bridgetcrypt.github.io/.git/objects/fa/6bc2f82618d70b7d065cf4067132bc75b32730": "67d98c081de90b1e6bf2f6587800c565",
"bridgetcrypt.github.io/.git/objects/fe/ccf2a2c661db349276bb15644bd6e56c6761c5": "2d1abdefea94ee95d0834429703583c3",
"bridgetcrypt.github.io/.git/refs/heads/master": "5adc627a33c07d355a6e22c0993d16c2",
"bridgetcrypt.github.io/.git/refs/remotes/origin/master": "5adc627a33c07d355a6e22c0993d16c2",
"bridgetcrypt.github.io/assets/AssetManifest.json": "eab1e4c8cd243feb0f1b7ab3ed35e10d",
"bridgetcrypt.github.io/assets/assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"bridgetcrypt.github.io/assets/assets/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"bridgetcrypt.github.io/assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"bridgetcrypt.github.io/assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"bridgetcrypt.github.io/assets/FontManifest.json": "1277f246a93f4d6bdc7c4011220969cf",
"bridgetcrypt.github.io/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"bridgetcrypt.github.io/assets/NOTICES": "535fa6146d9e29b3b981176e4716be3b",
"bridgetcrypt.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"bridgetcrypt.github.io/assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"bridgetcrypt.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"bridgetcrypt.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"bridgetcrypt.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"bridgetcrypt.github.io/index.html": "6d20330d02e6728258a836b59f9cd804",
"/": "21787036066ce341ff71850a316bab17",
"bridgetcrypt.github.io/main.dart.js": "920fac45940c5dc4de0e43f5185bc80c",
"bridgetcrypt.github.io/manifest.json": "bfad8aeb2570ce81095ce6ccdffd2704",
"bridgetcrypt.github.io/version.json": "4e29f8df78389d3d7cd8173221918218",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "21787036066ce341ff71850a316bab17",
"main.dart.js": "ed966a4343d28a364547abc736cfe601",
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
