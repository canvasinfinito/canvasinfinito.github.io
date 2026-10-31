'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ARTEFATOS-DO-DRIFT.txt": "59f6f7550f6e947bab97463472983802",
"assets/AssetManifest.bin": "109a340a0a1616a785b8949c12ee58bf",
"assets/AssetManifest.bin.json": "95fc79fd586044c1f6abc89fcc43c6f6",
"assets/AssetManifest.json": "ceed640124223e1db9b49da58ccb4b41",
"assets/assets/dicionario/en.bin.gz": "32d0f858e8280723dde8bb7e80c4b0fa",
"assets/assets/dicionario/LICENCA-DICIONARIO-EN.txt": "8fa7758c8dfa8dd492519990025e4943",
"assets/assets/dicionario/LICENCA-DICIONARIO.txt": "d7a2db707fdd2f73ba68da72269a4d98",
"assets/assets/dicionario/pt-br.bin.gz": "e2c2be051b5c637dc4748f744cffe9d4",
"assets/assets/dicionario/vero-en.bin.gz": "320fbfd0c7221543389a43748ade499c",
"assets/assets/dicionario/vero-pt.bin.gz": "67da15693a1a2dbcd7715228fa1f4f2b",
"assets/assets/fonts/BricolageGrotesque-Variable.ttf": "7225c9dea7fc51c0d8d2b9929dba6247",
"assets/assets/fonts/Inter-Variable.ttf": "bff0f6e3b9e2259a28313168a907054f",
"assets/assets/fonts/JetBrainsMono-Variable.ttf": "4d05bb0e4a6903fc39fac52353f8e3d9",
"assets/assets/fonts/LICENCA-BRICOLAGE.txt": "ca124d9da1494f1d3c650b05144c8ceb",
"assets/assets/fonts/LICENCA-JETBRAINS-MONO.txt": "a3c0bd543d9c4224a1af07527a88e497",
"assets/assets/fonts/pdf/Inter-Doc-Bold.ttf": "1b2683346da97760fc005a87ca947d5f",
"assets/assets/fonts/pdf/Inter-Doc-Regular.ttf": "ce76d4d295666c5cccfc8c5b6872b993",
"assets/FontManifest.json": "d5a11114ca0e7c36afeef0c39493357f",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "5c5dea6ea024cd395bdcafc4750d8ea3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"avisos/sentinela.js": "33d2f3b4150bf28abd06db5514192d7e",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"capturas/a-home-na-janela.png": "d7740377f2345c5dacdeeb0780bda1ac",
"capturas/a-home-no-celular.png": "52286bcdabdecd6914891f914275b171",
"capturas/apps/agenda-claro.webp": "2c89b7db9122f193789aa76e8f2befd0",
"capturas/apps/agenda-escuro.webp": "2c89b7db9122f193789aa76e8f2befd0",
"capturas/apps/arquivos-claro.webp": "e72712f7c2ac78b18b166c38a096666c",
"capturas/apps/arquivos-escuro.webp": "e72712f7c2ac78b18b166c38a096666c",
"capturas/apps/canvas-livre-claro.webp": "e9fe38a00fab3b05166d3f735965a525",
"capturas/apps/canvas-livre-escuro.webp": "e9fe38a00fab3b05166d3f735965a525",
"capturas/apps/canvas-projetos-claro.webp": "9d410c66a4e15c30cf446999f7cf85c9",
"capturas/apps/canvas-projetos-escuro.webp": "9d410c66a4e15c30cf446999f7cf85c9",
"capturas/apps/chat-claro.webp": "d9e19f835246c7419dbb37f2d33ebcf2",
"capturas/apps/chat-escuro.webp": "d9e19f835246c7419dbb37f2d33ebcf2",
"capturas/apps/financas-claro.webp": "bfef123e084fb23d231ee007d9138c80",
"capturas/apps/financas-escuro.webp": "bfef123e084fb23d231ee007d9138c80",
"capturas/apps/kanban-claro.webp": "36004b43b38c4cd488daddad764ce6b5",
"capturas/apps/kanban-escuro.webp": "36004b43b38c4cd488daddad764ce6b5",
"capturas/apps/notas-claro.webp": "9c1c44b847f2f73f7181c4731e2b2237",
"capturas/apps/notas-escuro.webp": "9c1c44b847f2f73f7181c4731e2b2237",
"capturas/apps/tarefas-claro.webp": "179450a5d3b2c4767a10a553e184bc20",
"capturas/apps/tarefas-escuro.webp": "179450a5d3b2c4767a10a553e184bc20",
"capturas/vitrine-agenda-celular-claro.png": "a277835663991419a527afed1e9a4bd1",
"capturas/vitrine-agenda-celular-claro.webp": "d6edb2d9ebe1b48b7088fe6e8c498b93",
"capturas/vitrine-agenda-celular-escuro.png": "36d0e8c6954a54a9627de520635c3684",
"capturas/vitrine-agenda-celular-escuro.webp": "20796efa54ab0e3903fa7fa007f70c50",
"capturas/vitrine-agenda-janela-claro.png": "625ad8c478579f3b2b052fcacfc9b155",
"capturas/vitrine-agenda-janela-claro.webp": "57f29cbf3468a3389758869ab72b9f25",
"capturas/vitrine-agenda-janela-escuro.png": "1f45adc29f9d6d76f04f0603df39babe",
"capturas/vitrine-agenda-janela-escuro.webp": "691d4f528bf40b263c6a8743e1df0d83",
"capturas/vitrine-arquivos-janela-claro.png": "e5c6869066d894f2b859d1ccb2e9b847",
"capturas/vitrine-arquivos-janela-claro.webp": "5f8fb0eda28e3846b72b6dcab5decd35",
"capturas/vitrine-arquivos-janela-escuro.png": "4ea811f77c3161a3ae4f45198dd4d554",
"capturas/vitrine-arquivos-janela-escuro.webp": "2d1e8ef654333d1f8cb4ff87da2fc0ed",
"capturas/vitrine-chat-janela-claro.png": "3621ba8f74d2f4846a365995533d255f",
"capturas/vitrine-chat-janela-claro.webp": "327df03d8ea570ccd199771cfb1ac608",
"capturas/vitrine-chat-janela-escuro.png": "2cd5a46ae8edb4074bc2b048bcd808bf",
"capturas/vitrine-chat-janela-escuro.webp": "1ac10544c54da07a7f26564470b348d8",
"capturas/vitrine-financas-janela-claro.png": "cf0acba5e4f99dd2a41ee901dda68655",
"capturas/vitrine-financas-janela-claro.webp": "00dc3588a40d8d20ca487f259f693b1e",
"capturas/vitrine-financas-janela-escuro.png": "6b1bfa18cf0d8cde751cb75f9b1a6034",
"capturas/vitrine-financas-janela-escuro.webp": "0f00c68e1330a58953198e4a54a43eb3",
"capturas/vitrine-home-celular-claro.png": "79e649a069a59cfce3702e0a13a5131a",
"capturas/vitrine-home-celular-claro.webp": "8e388cd48e4c2b9a044c5c1c1edff1f3",
"capturas/vitrine-home-celular-escuro.png": "893e4c843b17262d59ff77c81014dfc1",
"capturas/vitrine-home-celular-escuro.webp": "63bf649359b735fd7abc44b15dcc70b7",
"capturas/vitrine-home-corporativo-janela-claro.png": "41a250624ad2165b8a3c0e56cba027df",
"capturas/vitrine-home-corporativo-janela-claro.webp": "e5b380415b4c8386fd847d704943dcbd",
"capturas/vitrine-home-corporativo-janela-escuro.png": "41a250624ad2165b8a3c0e56cba027df",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "e5b380415b4c8386fd847d704943dcbd",
"capturas/vitrine-home-janela-claro.png": "402c24c9201151a22378f734b1be20c2",
"capturas/vitrine-home-janela-claro.webp": "3d05f023cf121818cc7c812382520832",
"capturas/vitrine-home-janela-escuro.png": "e8f5dbb6f04485b4228e883f783a71a8",
"capturas/vitrine-home-janela-escuro.webp": "394a2f91eddaefcf9ecb201168a51f5c",
"capturas/vitrine-kanban-celular-claro.png": "07700ab443deb17d4a4c972e84c7ef43",
"capturas/vitrine-kanban-celular-claro.webp": "2839c38fef5c27f1cc3140ee2bbb03af",
"capturas/vitrine-kanban-celular-escuro.png": "75287cd8312dbfa046debbd2214e3de7",
"capturas/vitrine-kanban-celular-escuro.webp": "4c690899d7dc8234d913ca168d0ddb2e",
"capturas/vitrine-kanban-janela-claro.png": "7bc13b8b1dd7afb64583fbd625568bb6",
"capturas/vitrine-kanban-janela-claro.webp": "87a30e1c35fe0bfe171291b2adcc1934",
"capturas/vitrine-kanban-janela-escuro.png": "03b92f00f8ef83fd2a60cf461d8c732f",
"capturas/vitrine-kanban-janela-escuro.webp": "3a3d6be96a04b65f18d1c1adda1247a9",
"capturas/vitrine-livre-janela-claro.png": "86f9a52131396fbd67c1ceb47d572af1",
"capturas/vitrine-livre-janela-claro.webp": "64601ba887c1c24460e8fe64b41689b5",
"capturas/vitrine-livre-janela-escuro.png": "61f55d419fc1ff5a1120599058dd861c",
"capturas/vitrine-livre-janela-escuro.webp": "2764b638082910f52cd2c784f1ecd710",
"capturas/vitrine-notas-janela-claro.png": "6ced351e18eb360330bbe7fe6ac2fd88",
"capturas/vitrine-notas-janela-claro.webp": "07328bfac647983bbf0daad69288ec05",
"capturas/vitrine-notas-janela-escuro.png": "c6a5f3e963f62173e1c041162859b949",
"capturas/vitrine-notas-janela-escuro.webp": "a82825d8ded6f8c94440a3e14bb97519",
"capturas/vitrine-projetos-celular-claro.png": "56638b588040250585ff2122fec0d89d",
"capturas/vitrine-projetos-celular-claro.webp": "14d3328f49ade7ea1ddf8c9dc109e3af",
"capturas/vitrine-projetos-celular-escuro.png": "b7e2fba641e63681719ae3b70c7bf0a8",
"capturas/vitrine-projetos-celular-escuro.webp": "46f9f654649d18e1bdb97a26a93525a0",
"capturas/vitrine-projetos-janela-claro.png": "7c3c12ba24901ed4b61c2bac9bfbdb03",
"capturas/vitrine-projetos-janela-claro.webp": "add2e572aab549536db281f2ab5c15a9",
"capturas/vitrine-projetos-janela-escuro.png": "5f589592949b891b00c69c05aba9a44f",
"capturas/vitrine-projetos-janela-escuro.webp": "18247a4b29fb0facfbdd8c9744bf6246",
"capturas/vitrine-tarefas-janela-claro.png": "84a192be755b3e10a1466111c15974dc",
"capturas/vitrine-tarefas-janela-claro.webp": "589beb12d4b308263b4638ae0ad5cd76",
"capturas/vitrine-tarefas-janela-escuro.png": "26225439a080381dd86fd5acd5809730",
"capturas/vitrine-tarefas-janela-escuro.webp": "8614b4194b75d3b2923817bd954f91ab",
"drift_worker.dart.js": "c78e333ea2ccf17596dbae6e63c9336e",
"favicon.png": "73507381802f5089c6b0456396f19595",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ff84f1c6e8827ee40672d00bdbc00261",
"icons/atalho-agenda.png": "3e3afb3696f181f84997b68e3952bf14",
"icons/atalho-despesa.png": "b4ba6e4bffa591276c02d24d4fd3a0d7",
"icons/atalho-nota.png": "7ab4e96df78942a1018915c49826e536",
"icons/Icon-192.png": "a2d0f280a35c75c248ae6a457b51f65e",
"icons/Icon-512.png": "82120e2efdfee9fac776740d2a95ab29",
"icons/Icon-maskable-192.png": "ea9df7290cb28ab764d4739c77a7a4dc",
"icons/Icon-maskable-512.png": "c43b43ad77e3769fcace98127b0822cb",
"index.html": "0161bdbae07e1e9f811fe7658af1ee67",
"/": "0161bdbae07e1e9f811fe7658af1ee67",
"main.dart.js": "0f7b0c07a6c2057f04e8eb64ea83d7da",
"manifest.json": "419a37073aabe87411f034262ec63708",
"novidades.json": "44c5e65ff6668a012997c2f3152a0419",
"sqlite3.wasm": "37f9207919949cbd1ab7b81907e9f1f9",
"version.json": "fecb2719e600829b45bf5633455d9fcf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
