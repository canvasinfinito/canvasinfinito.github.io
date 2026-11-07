'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ARTEFATOS-DO-DRIFT.txt": "3715ed6f6538061d6b17e14909432bf6",
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
"capturas/a-home-na-janela.png": "342c652bb89cc049f239cf053e2013ba",
"capturas/a-home-no-celular.png": "81f3259e5dda883cb6924ac4f29f71ab",
"capturas/apps/agenda.webp": "fefc25c7a42b85415b0955fda5744d23",
"capturas/apps/arquivos.webp": "5fd895f6a8b5e011e2cf3b720c111af1",
"capturas/apps/canvas-livre.webp": "e50f97ffe2261941c6d21324b8216cfe",
"capturas/apps/canvas-projetos.webp": "d8c880ad105d63ac274d14366e903874",
"capturas/apps/chat.webp": "df353502f29946e7a8217e863a8efde0",
"capturas/apps/financas.webp": "508f36b600837272709e84cf211fd035",
"capturas/apps/kanban.webp": "2ab91cb8052051d3f186e6cbf899d069",
"capturas/apps/notas.webp": "a4c36a0f7b1596daac54f42226a3ed71",
"capturas/apps/tarefas.webp": "fb81c9b70b0d717dd2460dcfa45a8ec8",
"capturas/vitrine-agenda-celular-claro.png": "1b46b55af5b1103bf4222dd908d80a6a",
"capturas/vitrine-agenda-celular-claro.webp": "acaced946023213000043cc93d3ce411",
"capturas/vitrine-agenda-celular-escuro.png": "1859ae11ee2878fe4876cac78215bd7c",
"capturas/vitrine-agenda-celular-escuro.webp": "71a568129dca2729c710c94c9e29ecbd",
"capturas/vitrine-agenda-janela-claro.png": "ea1868995dd157497c5c197604abb22a",
"capturas/vitrine-agenda-janela-claro.webp": "34a2c04002992df08582ba033777f8fa",
"capturas/vitrine-agenda-janela-escuro.png": "81fe9b5932a4d0f9c30f1e1d9830cfc5",
"capturas/vitrine-agenda-janela-escuro.webp": "e9c9063cb746b7b43a768394bb423be3",
"capturas/vitrine-arquivos-celular-claro.png": "92a9aa0bb089b2f6f2bbe52f4cfebdd4",
"capturas/vitrine-arquivos-celular-claro.webp": "188a3fc97d2f89dd86e55c42ece1f3b9",
"capturas/vitrine-arquivos-celular-escuro.png": "d77890133cd1907b84da0674554f39f0",
"capturas/vitrine-arquivos-celular-escuro.webp": "0c72350b24d7338b94217b96a78ce7ba",
"capturas/vitrine-arquivos-janela-claro.png": "68bd6488be57c3141db9b3f3492cf23f",
"capturas/vitrine-arquivos-janela-claro.webp": "719aedc1922b044598096449d722e227",
"capturas/vitrine-arquivos-janela-escuro.png": "2be7650163e29fd92ac4ffebf5d9ee0d",
"capturas/vitrine-arquivos-janela-escuro.webp": "025ddf59858868358ff15354760bd430",
"capturas/vitrine-chat-celular-claro.png": "92a9aa0bb089b2f6f2bbe52f4cfebdd4",
"capturas/vitrine-chat-celular-claro.webp": "188a3fc97d2f89dd86e55c42ece1f3b9",
"capturas/vitrine-chat-celular-escuro.png": "d77890133cd1907b84da0674554f39f0",
"capturas/vitrine-chat-celular-escuro.webp": "0c72350b24d7338b94217b96a78ce7ba",
"capturas/vitrine-chat-janela-claro.png": "b52a137532bfb19c5edef4439e373557",
"capturas/vitrine-chat-janela-claro.webp": "aea1aead0e11845745a7e911b79c4dc1",
"capturas/vitrine-chat-janela-escuro.png": "5fd9d9ee33ce2c30ec83be421bc8290b",
"capturas/vitrine-chat-janela-escuro.webp": "8c30d78536465dd65de79fa3f7d099a8",
"capturas/vitrine-financas-caixa-celular-claro.png": "191175c0e6704454891c275bbf6245ea",
"capturas/vitrine-financas-caixa-celular-claro.webp": "d5774159114204b00f7cbdb24f75cb98",
"capturas/vitrine-financas-caixa-celular-escuro.png": "191175c0e6704454891c275bbf6245ea",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "d5774159114204b00f7cbdb24f75cb98",
"capturas/vitrine-financas-caixa-janela-claro.png": "f67bac0e5ea923d35759596a453d9d75",
"capturas/vitrine-financas-caixa-janela-claro.webp": "488189cec37f0a6d017ac66e272abad6",
"capturas/vitrine-financas-caixa-janela-escuro.png": "f67bac0e5ea923d35759596a453d9d75",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "488189cec37f0a6d017ac66e272abad6",
"capturas/vitrine-financas-celular-claro.png": "8559dea3a3a631ada92dc04fd5162e78",
"capturas/vitrine-financas-celular-claro.webp": "738a0f392deb519b44ceff9b4b22b734",
"capturas/vitrine-financas-celular-escuro.png": "c02cbbf96e4aa964a788f9a9bf1d70cc",
"capturas/vitrine-financas-celular-escuro.webp": "6ce0325c6ad2b5f2696e34db06816acc",
"capturas/vitrine-financas-janela-claro.png": "6939a88e106454bcac9707b1dbc54ffc",
"capturas/vitrine-financas-janela-claro.webp": "5158998e13a15c676277ccea66bf3f15",
"capturas/vitrine-financas-janela-escuro.png": "d661a021eed929b6d21af67b7df78126",
"capturas/vitrine-financas-janela-escuro.webp": "d3e41c10161ed0d224ada510a4103e97",
"capturas/vitrine-home-celular-claro.png": "73f1e1325d22888d14bfb1d8742b6d77",
"capturas/vitrine-home-celular-claro.webp": "b51f7cbac0059912d26b3dce7c87a386",
"capturas/vitrine-home-celular-escuro.png": "28a2be0031e7028f4425ac3a4c5aad44",
"capturas/vitrine-home-celular-escuro.webp": "4fd083264f2043f047f50e7c5683b955",
"capturas/vitrine-home-corporativo-janela-claro.png": "0f0cf01e61a81f2c8b503ad06d34c272",
"capturas/vitrine-home-corporativo-janela-claro.webp": "4fe3ab0cc93437d9b15f4aaef0d55288",
"capturas/vitrine-home-corporativo-janela-escuro.png": "0f0cf01e61a81f2c8b503ad06d34c272",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "4fe3ab0cc93437d9b15f4aaef0d55288",
"capturas/vitrine-home-janela-claro.png": "936602caad822d016539ba53b216fd4f",
"capturas/vitrine-home-janela-claro.webp": "d3b1f4e8cbb1c29ba47593221c285b2a",
"capturas/vitrine-home-janela-escuro.png": "34fb0e0fefeb60afc793daf1f03933f6",
"capturas/vitrine-home-janela-escuro.webp": "5128f2b9cafeabe7835282fb0ce7bae9",
"capturas/vitrine-kanban-celular-claro.png": "3feaba18cbfbc53d5165078e09e7ae12",
"capturas/vitrine-kanban-celular-claro.webp": "471e84a48a2d44c9d6c66c43a4de66ca",
"capturas/vitrine-kanban-celular-escuro.png": "807dbc8281298dc3c6c24db6e47bcb2b",
"capturas/vitrine-kanban-celular-escuro.webp": "80e62cbeaa34f258e323c2c096d63926",
"capturas/vitrine-kanban-janela-claro.png": "e074175f9dd43fe13b0845d23a8a5d62",
"capturas/vitrine-kanban-janela-claro.webp": "0d670b6750272942939d4ed47ab74af1",
"capturas/vitrine-kanban-janela-escuro.png": "f656829b0e3d565e1d5dcd948db843a9",
"capturas/vitrine-kanban-janela-escuro.webp": "30c4d3e2145dd6e3e2493fd8e51fe7f6",
"capturas/vitrine-livre-celular-claro.png": "98257cb0dd5df334a5633dcd0064c853",
"capturas/vitrine-livre-celular-claro.webp": "fa1a36e275be868ffcaf9ef3f1bb95e6",
"capturas/vitrine-livre-celular-escuro.png": "b242a04375da3314b71de259b4f0ef05",
"capturas/vitrine-livre-celular-escuro.webp": "4f4affbeabf6cbee33e774a14c7df6ee",
"capturas/vitrine-livre-janela-claro.png": "26b31bcb688a9e40cba83fad132a7781",
"capturas/vitrine-livre-janela-claro.webp": "6859f497be653530dec9117f277303e9",
"capturas/vitrine-livre-janela-escuro.png": "b5967215d441acba3e6f16ec27b0ea20",
"capturas/vitrine-livre-janela-escuro.webp": "3aaa32da2b87a3c55f7efd8ba7c67a76",
"capturas/vitrine-notas-celular-claro.png": "8c4d66d4e5c112a7883671ba7c4e4440",
"capturas/vitrine-notas-celular-claro.webp": "055eb09596784f0dca2410e1605ef111",
"capturas/vitrine-notas-celular-escuro.png": "99217c52a0ac55b3164afd7e6d36d83d",
"capturas/vitrine-notas-celular-escuro.webp": "f48be1769de952f85bdb9879b4525d70",
"capturas/vitrine-notas-janela-claro.png": "517272f9fa2a0e37e00c7b53db4235eb",
"capturas/vitrine-notas-janela-claro.webp": "9230fb2a4edda1bc6bf91aaa61a173af",
"capturas/vitrine-notas-janela-escuro.png": "854f497efa38dea321a6fedffda60ee7",
"capturas/vitrine-notas-janela-escuro.webp": "7d22e8d36167d096f73b19b5eedcc853",
"capturas/vitrine-projetos-celular-claro.png": "e73395c4c1995321b10d0e87f3a5e484",
"capturas/vitrine-projetos-celular-claro.webp": "1c54a5d3035f793acf25d12e26476869",
"capturas/vitrine-projetos-celular-escuro.png": "79538cac8b49557bcc6371b85cbf37b5",
"capturas/vitrine-projetos-celular-escuro.webp": "b57050e656ce716ef19cec2204b0d55a",
"capturas/vitrine-projetos-janela-claro.png": "5793f547cfae091db8201302317def79",
"capturas/vitrine-projetos-janela-claro.webp": "078283c751d5da22ddb6f87a6e4b34b2",
"capturas/vitrine-projetos-janela-escuro.png": "b977d925be155b12e74ebec823cc58af",
"capturas/vitrine-projetos-janela-escuro.webp": "aff1d452cadee523466df90dec3cd759",
"capturas/vitrine-tarefas-celular-claro.png": "0f60bbd0f514dabdbd052166f5c42a4b",
"capturas/vitrine-tarefas-celular-claro.webp": "21bcd1b0856dc9189c58a38a5a32ebec",
"capturas/vitrine-tarefas-celular-escuro.png": "6d51283f5b8b71a0b3a39effaf38e8fd",
"capturas/vitrine-tarefas-celular-escuro.webp": "2dc2819a5d995056b60223fe01ca7422",
"capturas/vitrine-tarefas-janela-claro.png": "93c2c6c754709083f055657aa2fcb29b",
"capturas/vitrine-tarefas-janela-claro.webp": "6c758c1a1a499d08e4f150785d368362",
"capturas/vitrine-tarefas-janela-escuro.png": "435d8701f7c91bdfb30cc57e8fddd786",
"capturas/vitrine-tarefas-janela-escuro.webp": "33440f254719bddd958d0ab055561aa1",
"documentos.css": "224f2b8f72af299e65d6345b44231567",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "c52770633eb2c14eaac68a6a24179b9f",
"favicon.ico": "6edf0be2da26256bb3193bae293f687e",
"favicon.png": "3b0f17230b1948b9b5c2a5261e20fcce",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "04c0e1b8cd1b7b05b6b00500ddd3440c",
"fontes/bricolage.woff2": "df001e33d4b185531fdea484e528995f",
"fontes/inter.woff2": "a1556ee0eca68f4417ba5bb157748db8",
"fontes/jetbrains-mono.woff2": "2c325bddecffefd9351563503c94a2b8",
"icons/apple-touch-icon.png": "a848f0f3abd8a53cd6e914e5f7d1cb24",
"icons/atalho-agenda.png": "3e3afb3696f181f84997b68e3952bf14",
"icons/atalho-despesa.png": "b4ba6e4bffa591276c02d24d4fd3a0d7",
"icons/atalho-nota.png": "7ab4e96df78942a1018915c49826e536",
"icons/Icon-192.png": "a2d0f280a35c75c248ae6a457b51f65e",
"icons/Icon-512.png": "82120e2efdfee9fac776740d2a95ab29",
"icons/Icon-maskable-192.png": "ea9df7290cb28ab764d4739c77a7a4dc",
"icons/Icon-maskable-512.png": "c43b43ad77e3769fcace98127b0822cb",
"index.html": "ade5c11080f758255e4fc46fb991aaad",
"/": "ade5c11080f758255e4fc46fb991aaad",
"main.dart.js": "af6639e881f406e7530e761a87b40ca8",
"manifest.json": "419a37073aabe87411f034262ec63708",
"novidades.json": "aa241d5031c69f33b8dc7473c491d9bd",
"privacidade.html": "b4ec875c92883f90497cad795ddd319f",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "3c38e183a32dea799703fd7cbf29728e",
"version.json": "8ed139e70f5384ed7d657728c5ab87e0"};
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
