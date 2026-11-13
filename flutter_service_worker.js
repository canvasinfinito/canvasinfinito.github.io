'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ARTEFATOS-DO-DRIFT.txt": "3715ed6f6538061d6b17e14909432bf6",
"assets/AssetManifest.bin": "122b0864f091eddd241e7cf00596b63a",
"assets/AssetManifest.bin.json": "17ee19a5f9ca76e1a01107215c3b37ec",
"assets/AssetManifest.json": "afee21c75b0fd78e7246129a4e955b29",
"assets/assets/dicionario/en.bin.gz": "32d0f858e8280723dde8bb7e80c4b0fa",
"assets/assets/dicionario/LICENCA-DICIONARIO-EN.txt": "8fa7758c8dfa8dd492519990025e4943",
"assets/assets/dicionario/LICENCA-DICIONARIO.txt": "d7a2db707fdd2f73ba68da72269a4d98",
"assets/assets/dicionario/pt-br.bin.gz": "e2c2be051b5c637dc4748f744cffe9d4",
"assets/assets/dicionario/vero-en.bin.gz": "320fbfd0c7221543389a43748ade499c",
"assets/assets/dicionario/vero-pt.bin.gz": "67da15693a1a2dbcd7715228fa1f4f2b",
"assets/assets/fonts/AtkinsonHyperlegibleNext-Variable.ttf": "4cb8eaa42c20e9c16b242d2fd5be4d7d",
"assets/assets/fonts/JetBrainsMono-Variable.ttf": "4d05bb0e4a6903fc39fac52353f8e3d9",
"assets/assets/fonts/LICENCA-ATKINSON-HYPERLEGIBLE.txt": "6783603c82821e14899357132c46e567",
"assets/assets/fonts/LICENCA-INTER.txt": "9764b71aaf18c8009383b73ba7f7dc46",
"assets/assets/fonts/LICENCA-JETBRAINS-MONO.txt": "a3c0bd543d9c4224a1af07527a88e497",
"assets/assets/fonts/pdf/AtkinsonDoc-Bold.ttf": "406e2fec92066b7e0a7ac4d5978a0a3b",
"assets/assets/fonts/pdf/AtkinsonDoc-Regular.ttf": "f4bbb769c6e33c06bb67025ff3e1ff31",
"assets/FontManifest.json": "bb8e89403a1cef738d8a4b7bf47dd0f2",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "46342b2391b79747b7899ab5efad7801",
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
"capturas/a-home-na-janela.png": "665d5ba51f4690110335324cec71ba51",
"capturas/a-home-no-celular.png": "4ca40dcc6ecd68f7ea554e932c254334",
"capturas/apps/agenda.webp": "b77f0cd9776ca99ce790b14e5e189dbd",
"capturas/apps/arquivos.webp": "19a53b7cec9338b13610d13c0b37aa1b",
"capturas/apps/canvas-livre.webp": "0653ae054a08a0106a7d98e32765aac3",
"capturas/apps/canvas-projetos.webp": "f5452cb6a198da6237dcdd6cf1b2401f",
"capturas/apps/chat.webp": "cff288ecb3fed32d724115a0a87bf77b",
"capturas/apps/clientes.webp": "10e67c6bcff1ffd8e6923553d12f0dee",
"capturas/apps/financas.webp": "e619de066c5fa1a660ec4c37125b0c99",
"capturas/apps/kanban.webp": "30913abaac3c9c8b8e0d22b0df2f6d12",
"capturas/apps/metas.webp": "224e66c497064586bf0cb8fddbb0d231",
"capturas/apps/notas.webp": "731ee9b8e26374f9e880df0a06152ad0",
"capturas/apps/pedidos.webp": "a2fdbce47f4bbedd01f8983c29136e72",
"capturas/apps/tarefas.webp": "b5b79a76e5f82a6777ea0e6204c4a666",
"capturas/vitrine-agenda-celular-claro.png": "4f1d63961a11b79fcc3472ec06969ae5",
"capturas/vitrine-agenda-celular-claro.webp": "ee24034973edd929f4e4f0525667f22d",
"capturas/vitrine-agenda-celular-escuro.png": "0d80e263a5d1d33e22a8082c44500fe7",
"capturas/vitrine-agenda-celular-escuro.webp": "589ba2f3923bc83384124ce53da67a73",
"capturas/vitrine-agenda-janela-claro.png": "bf89970f106e99a05aba92ac2ea0360d",
"capturas/vitrine-agenda-janela-claro.webp": "3990902f0e060ba97c773e4d2b4deaec",
"capturas/vitrine-agenda-janela-escuro.png": "61770a3aaa9a6c5d17a06dfc77a2263b",
"capturas/vitrine-agenda-janela-escuro.webp": "84db63f2e7bc5fc027055b28187bf101",
"capturas/vitrine-arquivos-celular-claro.png": "8faac7ae6b2cc6f0ab276e1dfde271cf",
"capturas/vitrine-arquivos-celular-claro.webp": "99936c717c052e14a50449f25c04f11b",
"capturas/vitrine-arquivos-celular-escuro.png": "c25105b9ce762e4e769a386fcfd25e5c",
"capturas/vitrine-arquivos-celular-escuro.webp": "29bebcae63c3dcc6d01a87402035ee21",
"capturas/vitrine-arquivos-janela-claro.png": "3195deb339db36de6990a882ae17d11c",
"capturas/vitrine-arquivos-janela-claro.webp": "b527dd4e8dfb81b4d4783370c9733f0a",
"capturas/vitrine-arquivos-janela-escuro.png": "76478427a9cd87349bffd6e54559c118",
"capturas/vitrine-arquivos-janela-escuro.webp": "c5d509a3f4f09be4bed66c58cefe8af0",
"capturas/vitrine-chat-celular-claro.png": "8faac7ae6b2cc6f0ab276e1dfde271cf",
"capturas/vitrine-chat-celular-claro.webp": "99936c717c052e14a50449f25c04f11b",
"capturas/vitrine-chat-celular-escuro.png": "c25105b9ce762e4e769a386fcfd25e5c",
"capturas/vitrine-chat-celular-escuro.webp": "29bebcae63c3dcc6d01a87402035ee21",
"capturas/vitrine-chat-janela-claro.png": "9f16049c61a91a4260f5ed77cb7ff47d",
"capturas/vitrine-chat-janela-claro.webp": "c0c50c09cbe0938f0fb009798424e66e",
"capturas/vitrine-chat-janela-escuro.png": "645b851565954e4ecaf9c85c5e4cac5d",
"capturas/vitrine-chat-janela-escuro.webp": "b974899ccc1de96a0f5a21c9b20ca445",
"capturas/vitrine-clientes-celular-claro.png": "45cd1eb8ced8ad08e61e713601731ded",
"capturas/vitrine-clientes-celular-claro.webp": "3f1abf8090052ec32a1a7d0bd920ab0e",
"capturas/vitrine-clientes-celular-escuro.png": "024f81a978190f50065f2c55821f6822",
"capturas/vitrine-clientes-celular-escuro.webp": "1ced3d2ba6815fdfc4c22111af5366ca",
"capturas/vitrine-clientes-janela-claro.png": "53c583df17cf28a34f0a0f222db7b22a",
"capturas/vitrine-clientes-janela-claro.webp": "a631127aeab242ed9174e13c8756b60a",
"capturas/vitrine-clientes-janela-escuro.png": "10fc331bc2e540da61a9effb0a1bcdba",
"capturas/vitrine-clientes-janela-escuro.webp": "4eea59d1e1944f3c9823f0506643a596",
"capturas/vitrine-financas-caixa-celular-claro.png": "2689983ac21468e909a0ab8dd1a2a2bf",
"capturas/vitrine-financas-caixa-celular-claro.webp": "ef7ace221514a819fe1491edf68c09a7",
"capturas/vitrine-financas-caixa-celular-escuro.png": "d5a5881031a6f7c1c31d95148d25571c",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "228d74903ec59776aaae5b843054c015",
"capturas/vitrine-financas-caixa-janela-claro.png": "276313f85dc943a478748b8ab49cbf1b",
"capturas/vitrine-financas-caixa-janela-claro.webp": "d0f2cb25286b97a409422b4cdd993c15",
"capturas/vitrine-financas-caixa-janela-escuro.png": "15d8a627eacdefa47d25ab6c2cc9c3c6",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "71ea314cc78368cc01d4294f4c6e32e3",
"capturas/vitrine-financas-celular-claro.png": "21b2136691b3f6f76aada3b570d5ad13",
"capturas/vitrine-financas-celular-claro.webp": "c056267570a9589db35dc4097b9dbe5f",
"capturas/vitrine-financas-celular-escuro.png": "82f10e4474e31b58e64b3be1a98f605c",
"capturas/vitrine-financas-celular-escuro.webp": "9136d9f44450b9e041647c04787d7c38",
"capturas/vitrine-financas-janela-claro.png": "9edb6cba77298b0b21c7fb805ce66352",
"capturas/vitrine-financas-janela-claro.webp": "8dd046fc88d45cae8a36f82f6da7a3f8",
"capturas/vitrine-financas-janela-escuro.png": "77a3b3e1cf9510f021f097ed3d3f0868",
"capturas/vitrine-financas-janela-escuro.webp": "f7543da4c6833905d2a055458aa72a02",
"capturas/vitrine-home-celular-claro.png": "2c631f4e9f67465866b797abcc9819cf",
"capturas/vitrine-home-celular-claro.webp": "3a17ac67a4bb213f57815b878a1f5986",
"capturas/vitrine-home-celular-escuro.png": "f6fc114031eb831f631e1db629e36cf4",
"capturas/vitrine-home-celular-escuro.webp": "f0bf27a1220ba733fe5a6c6548e43506",
"capturas/vitrine-home-corporativo-janela-claro.png": "83bbb158b1c7652495cb2d2c6b940e12",
"capturas/vitrine-home-corporativo-janela-claro.webp": "9a30e4a631cbbf1d3bfecd3571c5343f",
"capturas/vitrine-home-corporativo-janela-escuro.png": "59ac0d97074f46ef6b2e8973877071da",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "c55818c7e04fecda76affc396aa50594",
"capturas/vitrine-home-janela-claro.png": "39d944e53e62ba5e5c253ea35a661a3f",
"capturas/vitrine-home-janela-claro.webp": "c26f35d375d33615c248c2a14e577692",
"capturas/vitrine-home-janela-escuro.png": "63a84cf6101d36627bcdf10b69eb8d07",
"capturas/vitrine-home-janela-escuro.webp": "6db86f8fc313597a77d94eb53d8324cf",
"capturas/vitrine-kanban-celular-claro.png": "b97f346925a151fb3c6837238998552d",
"capturas/vitrine-kanban-celular-claro.webp": "c6c07d5b873571da62ed7f5ad9770597",
"capturas/vitrine-kanban-celular-escuro.png": "94ca339899a3d9067c860c4b66ae53f2",
"capturas/vitrine-kanban-celular-escuro.webp": "c5aff59972590bd74d509d8278520f93",
"capturas/vitrine-kanban-janela-claro.png": "e60534c919596aceab5054348b734ef1",
"capturas/vitrine-kanban-janela-claro.webp": "b62bd1304ec2fa6324c832377d442985",
"capturas/vitrine-kanban-janela-escuro.png": "00ec7a631e58757a3664e1bd4811c883",
"capturas/vitrine-kanban-janela-escuro.webp": "65dfd16666a476f02c1c42300f7ce4ff",
"capturas/vitrine-livre-celular-claro.png": "c033c6cfd94f94570cd30fe4946f635b",
"capturas/vitrine-livre-celular-claro.webp": "53a434769ccc6ea9615aa34e7e7d1174",
"capturas/vitrine-livre-celular-escuro.png": "09f91399cfcde64bb2290771d7b33757",
"capturas/vitrine-livre-celular-escuro.webp": "81494d9368d658de5fdef5c73c4d01f6",
"capturas/vitrine-livre-janela-claro.png": "c177119f096f3869b64289cf4e4185ac",
"capturas/vitrine-livre-janela-claro.webp": "83711a23f39b5a443668894893a1c7b3",
"capturas/vitrine-livre-janela-escuro.png": "9840a8aace8205f97f2466d410e0e49a",
"capturas/vitrine-livre-janela-escuro.webp": "7f689ae110f166142bb58746e47f4ad4",
"capturas/vitrine-metas-celular-claro.png": "d4efd7d17b2c8102db6d97b4850a9321",
"capturas/vitrine-metas-celular-claro.webp": "08b3d6b069677d16ad9002445d3173c2",
"capturas/vitrine-metas-celular-escuro.png": "57dac413095c409b676d6ff29c725e25",
"capturas/vitrine-metas-celular-escuro.webp": "3794e99c6d548e8587adeeae46244e12",
"capturas/vitrine-metas-janela-claro.png": "7842675dea6443b218f7a730a76a8f77",
"capturas/vitrine-metas-janela-claro.webp": "0c6dd5b6507ea6bee257365fd644c985",
"capturas/vitrine-metas-janela-escuro.png": "27769614c288f4d299f305b9472dbac3",
"capturas/vitrine-metas-janela-escuro.webp": "012e4d6c23b03b27a7aa9ede71dc7edc",
"capturas/vitrine-notas-celular-claro.png": "dfe599b80576617dceb9e1fef7a35738",
"capturas/vitrine-notas-celular-claro.webp": "cdeca1a8b4623b60c22f7ba9d08219d8",
"capturas/vitrine-notas-celular-escuro.png": "11519ce074fca059184f85312c775567",
"capturas/vitrine-notas-celular-escuro.webp": "1504a9fe185138b0eb9d7ecb33cb2180",
"capturas/vitrine-notas-janela-claro.png": "0521660e5096e38143eb87ae2da116d7",
"capturas/vitrine-notas-janela-claro.webp": "3e8f73fcce5a8b93cd8d3fb52acd7db2",
"capturas/vitrine-notas-janela-escuro.png": "515a5c7fa10033a7ec9e07f5ab6a4086",
"capturas/vitrine-notas-janela-escuro.webp": "e5419135f858750a9a1e5c581b7481f9",
"capturas/vitrine-pedidos-celular-claro.png": "b758151ba473cd248581036989f59ba8",
"capturas/vitrine-pedidos-celular-claro.webp": "2574abeb2a04cee607da14535aa89ba5",
"capturas/vitrine-pedidos-celular-escuro.png": "92a21b2b67c06f7b6040eb90bbee26e5",
"capturas/vitrine-pedidos-celular-escuro.webp": "62ecdec852b5a198b392d8f52bdcf458",
"capturas/vitrine-pedidos-janela-claro.png": "b4eb6a182fb537f901c5d897456a7175",
"capturas/vitrine-pedidos-janela-claro.webp": "37b0e0712467e9aca293b41cb764e77f",
"capturas/vitrine-pedidos-janela-escuro.png": "abf1cc044b8b1e0d49c1adcecc50524e",
"capturas/vitrine-pedidos-janela-escuro.webp": "d670f5b3bacc9221d805eeeae604e3f2",
"capturas/vitrine-projetos-celular-claro.png": "4b61e4e81339c4555db6a4bd12edd762",
"capturas/vitrine-projetos-celular-claro.webp": "7767cb377830d95f92a4099a6056a240",
"capturas/vitrine-projetos-celular-escuro.png": "bf57a2b586179f69f2490d559b874808",
"capturas/vitrine-projetos-celular-escuro.webp": "fe1dfd7af42780fb275c83bb7c80bfc6",
"capturas/vitrine-projetos-janela-claro.png": "7576c2ed3f20e20020fce78f43006df3",
"capturas/vitrine-projetos-janela-claro.webp": "16da6889b116e6a425ae916a8a4b43b1",
"capturas/vitrine-projetos-janela-escuro.png": "9f74ca231bcb618d7a1f487e693e05ad",
"capturas/vitrine-projetos-janela-escuro.webp": "73bf458fa42a4179e74248f1f9f201a1",
"capturas/vitrine-tarefas-celular-claro.png": "e0bd4825b3ab9cf91db5b3e8e4d06cf5",
"capturas/vitrine-tarefas-celular-claro.webp": "bcedba2b2609ae520486972bb569af45",
"capturas/vitrine-tarefas-celular-escuro.png": "b649cb631390393d482544e9d50be03f",
"capturas/vitrine-tarefas-celular-escuro.webp": "c75acfd27714d35ff13655100ba85206",
"capturas/vitrine-tarefas-janela-claro.png": "0f71b2753497ee34eab8b40ded24c61b",
"capturas/vitrine-tarefas-janela-claro.webp": "61cded83cfdbe6fd4482290aa378ba5e",
"capturas/vitrine-tarefas-janela-escuro.png": "04085281133d15ed10dec5787aa12f5a",
"capturas/vitrine-tarefas-janela-escuro.webp": "a69b3b503c01e1b8d34f52c2026aa8b3",
"documentos.css": "79f6a3e405aa434d90be64db1632256e",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "c52770633eb2c14eaac68a6a24179b9f",
"favicon.ico": "6edf0be2da26256bb3193bae293f687e",
"favicon.png": "c240a9b39cc32c631c52aabb73538af1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0c578cf3e5396f4910dc8f3549d8ba6f",
"fontes/atkinson.woff2": "735a32723ecb46d5ec45f3945d41af87",
"fontes/jetbrains-mono.woff2": "2c325bddecffefd9351563503c94a2b8",
"fontes/LICENCA-ATKINSON.txt": "6783603c82821e14899357132c46e567",
"icons/apple-touch-icon.png": "a848f0f3abd8a53cd6e914e5f7d1cb24",
"icons/atalho-agenda.png": "be875082995f28eeba330737b4330dcf",
"icons/atalho-despesa.png": "1ae7b22e9be916e821f098d0f1304587",
"icons/atalho-nota.png": "d64bf96aeae3cb7acf58682fe7b63865",
"icons/Icon-192.png": "4030c93dd01a56d1ffdd31966713edb4",
"icons/Icon-512.png": "1cdc4c565f2fb4d213d147598cdb3de1",
"icons/Icon-maskable-192.png": "ea3a7ccad283a2d47610d1b755bdc817",
"icons/Icon-maskable-512.png": "e21ad500f758b647168e2a2e9e2877f4",
"index.html": "be876d8bd96e47caf4bd0487193a53bd",
"/": "be876d8bd96e47caf4bd0487193a53bd",
"main.dart.js": "44973d38c5a82d7265314d591fe1bbc0",
"manifest.json": "c9b1d9e71ba6e6908eec896e05e52339",
"novidades.json": "907563e0b153f0b5008f818de8df9cf9",
"privacidade.html": "b4ec875c92883f90497cad795ddd319f",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "3c38e183a32dea799703fd7cbf29728e",
"version.json": "75cd616f9b1c5986d478729354972128"};
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
