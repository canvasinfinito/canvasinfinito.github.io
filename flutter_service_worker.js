'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ARTEFATOS-DO-DRIFT.txt": "3715ed6f6538061d6b17e14909432bf6",
"assets/AssetManifest.bin": "c134ba27334132b5188a975512e2fcb4",
"assets/AssetManifest.bin.json": "0794f0bedc10ae26e52239b2c11a3881",
"assets/AssetManifest.json": "c5a8d450aceee5b612a70bc1ad6467d1",
"assets/assets/dicionario/en.bin.gz": "32d0f858e8280723dde8bb7e80c4b0fa",
"assets/assets/dicionario/LICENCA-DICIONARIO-EN.txt": "11a190c2e1940617c15c64b18b87151f",
"assets/assets/dicionario/LICENCA-DICIONARIO.txt": "f2daf4c3314b5f2926b374bef34db039",
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
"assets/NOTICES": "f5b29350b0a76ea70c1e0d075ad3ccae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-asr.js": "8e70b132898ba8c6f8483f58a860ea4b",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-kws.js": "e581736e025ef5304df069417d433f42",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-punctuation.js": "e0ad015fd2524d5936e81808c6d57f4b",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-speaker-diarization.js": "7f2f783e9ec10855e84cdc7c3384d952",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-speech-enhancement.js": "915642807b9798543c7ae9fbaa431a48",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-tts.js": "16baa681565e69b74a6ef27624cb4e28",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-vad.js": "11faca320f901dd7e5425c0c4ef05d81",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-wasm-web.js": "2de132b0ae08f8f81c338845923babad",
"assets/packages/sherpa_onnx_web/assets/sherpa-onnx-wasm-web.wasm": "68beb47d2ccceccede07a365a0610eda",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"avisos/sentinela.js": "40b4d4fdc9a67848f59b4c9d68efe4da",
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
"capturas/a-home-na-janela.png": "4eb92f0ec222df28bc0f55becba6d8b3",
"capturas/a-home-no-celular.png": "dc8c1f324fa64015069cc8507b71645a",
"capturas/apps/agenda.webp": "b39a0700b3bed0cb909708d95517ffd0",
"capturas/apps/arquivos.webp": "3a30234f4be65ce6a8805ccff365a19b",
"capturas/apps/canvas-livre.webp": "9ffef5dff24b5bb30bae47b753c2b0f8",
"capturas/apps/canvas-projetos.webp": "077929b590cf01055b19a84cc00c9a76",
"capturas/apps/chat.webp": "111cca07230cbb9d0697f8ae16fa6779",
"capturas/apps/clientes.webp": "d51a4f1dd3353d152af4322b14d61f50",
"capturas/apps/financas.webp": "d2802f730cb07cd39804c61f78f58e3e",
"capturas/apps/kanban.webp": "8fcd38364b21542c914288414c2ad2af",
"capturas/apps/metas.webp": "2acab0518bbf9979c56e04469269ef7d",
"capturas/apps/notas.webp": "dd45194e2dd42c3c19a0f8592fc34f24",
"capturas/apps/pedidos.webp": "dfa3d653cefdb15c6767b3a8e9e5486b",
"capturas/apps/tarefas.webp": "4ddf72249852af6d87e70b1cfc356a15",
"capturas/vitrine-agenda-celular-claro.png": "212f2e60b1491f66e8adc0431fa124e4",
"capturas/vitrine-agenda-celular-claro.webp": "bf75400bc53515c1a03367a5048e5fe2",
"capturas/vitrine-agenda-celular-escuro.png": "c28d6f858d5ad789b522473b0ea79f50",
"capturas/vitrine-agenda-celular-escuro.webp": "f6a15c445fdc4447b2988411d6a1b375",
"capturas/vitrine-agenda-janela-claro.png": "6768ad3eaaf3d5bc9e087547c7d8407f",
"capturas/vitrine-agenda-janela-claro.webp": "4be376c6eb4cfc85fabf843761cfe550",
"capturas/vitrine-agenda-janela-escuro.png": "04100d5de237f5df4e59fcbf2542f094",
"capturas/vitrine-agenda-janela-escuro.webp": "7f8f5b3d0f042ec8501a60e85dc32190",
"capturas/vitrine-arquivos-celular-claro.png": "cad627ac91b1a99a29354868b4744b76",
"capturas/vitrine-arquivos-celular-claro.webp": "ba405d4d2c3d32cc707b6f8c907d2ad2",
"capturas/vitrine-arquivos-celular-escuro.png": "dd99bd5a5097b050f59a6d6689dfe699",
"capturas/vitrine-arquivos-celular-escuro.webp": "a42a8eb2cafec1d78e69abe2a0c8328e",
"capturas/vitrine-arquivos-janela-claro.png": "3048fd8f7e3fe09be6cb89be9c1218f2",
"capturas/vitrine-arquivos-janela-claro.webp": "92d8ea10b3d24912e0b233632b88a6f6",
"capturas/vitrine-arquivos-janela-escuro.png": "f135585b5da2ffac0d71b66aff2667be",
"capturas/vitrine-arquivos-janela-escuro.webp": "edd12aa6899741b97c4dfff597d4c9ec",
"capturas/vitrine-chat-celular-claro.png": "3a240ffc1322c3315f5943eb4d56ce0e",
"capturas/vitrine-chat-celular-claro.webp": "1db158d949ff08b9eb93c39d989ad527",
"capturas/vitrine-chat-celular-escuro.png": "30f4eef695c62aee0b4b0696364aa4d8",
"capturas/vitrine-chat-celular-escuro.webp": "28ed9ddcd2f953bfb1b856a2927ef58d",
"capturas/vitrine-chat-janela-claro.png": "ba0e145ae8ad279ad7babec5b1595b7e",
"capturas/vitrine-chat-janela-claro.webp": "5f7e22c055885f48acac9d19d64c829a",
"capturas/vitrine-chat-janela-escuro.png": "bf5faa22655f0c4408b4df523ae22296",
"capturas/vitrine-chat-janela-escuro.webp": "306f6d0f0fd194910a8ed3c29312ff7c",
"capturas/vitrine-clientes-celular-claro.png": "dbc0ef277413eac462997855ee9b81f2",
"capturas/vitrine-clientes-celular-claro.webp": "e9b32f8746003bd66b45b4c43a1beaf2",
"capturas/vitrine-clientes-celular-escuro.png": "448b6705d25cc7faec326045d61e4604",
"capturas/vitrine-clientes-celular-escuro.webp": "98ef09a354460d5c95f3167bb2f76448",
"capturas/vitrine-clientes-janela-claro.png": "abc34d6633d3a29a8021a9b4e209c0c7",
"capturas/vitrine-clientes-janela-claro.webp": "37b99db97c9d160c55eb2c2d9ea75f2d",
"capturas/vitrine-clientes-janela-escuro.png": "86f479a91535c3553c2ad9881c367f12",
"capturas/vitrine-clientes-janela-escuro.webp": "85fdc0c6edddaf9d0b7829909595c7b9",
"capturas/vitrine-financas-caixa-celular-claro.png": "5fdee6e7d61dc36f17b4b630c7a601d8",
"capturas/vitrine-financas-caixa-celular-claro.webp": "b026c2550f93d2b9e6cb45c8d8d43f85",
"capturas/vitrine-financas-caixa-celular-escuro.png": "847268e5d092a1d4d2a5df3098822d64",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "631d5825f6644b462805dab372421f3a",
"capturas/vitrine-financas-caixa-janela-claro.png": "b135d2bfd20c5057662f02a8d56cd072",
"capturas/vitrine-financas-caixa-janela-claro.webp": "235159378c11105baaf99736904462fb",
"capturas/vitrine-financas-caixa-janela-escuro.png": "a9520186fef5df64a9f25c58e1a3b37d",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "6092b4accd0dfbc9fb374259ebb4fad4",
"capturas/vitrine-financas-celular-claro.png": "e8a9666e0c5e953056d91268b23e0e9a",
"capturas/vitrine-financas-celular-claro.webp": "05e6dde83aa3bf9b03557b0fb9223c8e",
"capturas/vitrine-financas-celular-escuro.png": "845938db515e09c5fe4d79e193d817e3",
"capturas/vitrine-financas-celular-escuro.webp": "b68f92bfa8e2802e0406d0f582a069c7",
"capturas/vitrine-financas-janela-claro.png": "a2aac2d6aa6d5f4e6ac1d0d33b274bd3",
"capturas/vitrine-financas-janela-claro.webp": "4959742a42ba372a3602bf7d8ffeb72f",
"capturas/vitrine-financas-janela-escuro.png": "fb2100b189f2ca19ddb1a5618d0d50b5",
"capturas/vitrine-financas-janela-escuro.webp": "6ff78278b0da746d6987ce259b737b5c",
"capturas/vitrine-home-celular-claro.png": "2386ed56234d2f43da6917412cc412d5",
"capturas/vitrine-home-celular-claro.webp": "da08943087d5a8e1f8826ccf58b6405a",
"capturas/vitrine-home-celular-escuro.png": "08d183073673d85979706ad8787556ec",
"capturas/vitrine-home-celular-escuro.webp": "9a9949e8e0861e66432f88216ddd6fa6",
"capturas/vitrine-home-corporativo-celular-claro.png": "2e7efed0739efc063b91063226facda0",
"capturas/vitrine-home-corporativo-celular-claro.webp": "4ed78f4f931d1c7b090362db2258569c",
"capturas/vitrine-home-corporativo-celular-escuro.png": "54f97101b1b4899322a152b9b873f2f3",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "ee8c942ee07c3eb0c8ca23fa5bb445c1",
"capturas/vitrine-home-corporativo-janela-claro.png": "507832f199e798cdfa5b456d3ddc6b6e",
"capturas/vitrine-home-corporativo-janela-claro.webp": "171aa4b0d27c49e84250510a3717fdc3",
"capturas/vitrine-home-corporativo-janela-escuro.png": "f13a24baa174aa1acdd766900f218a3b",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "d246df7479e73745ae4b17677cf345b9",
"capturas/vitrine-home-janela-claro.png": "8963172cff79d2f8b3cd5d6af2f80244",
"capturas/vitrine-home-janela-claro.webp": "419398de5704892e934e0f76a606e324",
"capturas/vitrine-home-janela-escuro.png": "c38102d7de847b55cde3f411487be8eb",
"capturas/vitrine-home-janela-escuro.webp": "32f74d21141c45f56c3d65e4b7b9a76f",
"capturas/vitrine-kanban-celular-claro.png": "198cddd817e91eef4ed115288dc6ec96",
"capturas/vitrine-kanban-celular-claro.webp": "955e1c854b118bede9684a79cfa5e6cd",
"capturas/vitrine-kanban-celular-escuro.png": "efca1ad73bb9947290daf2587c7e5d14",
"capturas/vitrine-kanban-celular-escuro.webp": "6a074a984c7ef5726f6fcb5c288ba734",
"capturas/vitrine-kanban-janela-claro.png": "732ed537849cc85f25498481d1b72462",
"capturas/vitrine-kanban-janela-claro.webp": "740cad427a8833d96a9ee407a32ca15e",
"capturas/vitrine-kanban-janela-escuro.png": "6252ba9c7ff4b81fd6f37004e37c7b89",
"capturas/vitrine-kanban-janela-escuro.webp": "bf20ff73b0a03bfd4c6ee9bf547ea631",
"capturas/vitrine-livre-celular-claro.png": "4151bf4b9af7fd0ed9e6adb3d929ad1c",
"capturas/vitrine-livre-celular-claro.webp": "204293bfdc8ac0c0748a4ea0a2461c41",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "2c201f8d75698f15641a9ec16c5d922f",
"capturas/vitrine-livre-janela-claro.webp": "8ccd46fc5c97c64b2c7cab4fdf3a55d3",
"capturas/vitrine-livre-janela-escuro.png": "20d0ac7fc024494d50914e748da20b57",
"capturas/vitrine-livre-janela-escuro.webp": "76e022b4440486d785a896187ed9b56b",
"capturas/vitrine-metas-celular-claro.png": "517ec65f671d28236fc929e5a302163e",
"capturas/vitrine-metas-celular-claro.webp": "d3e3349569a8b776aa3f0b2ebfee79ad",
"capturas/vitrine-metas-celular-escuro.png": "3a6e0a7d591f8a5cfc1039fb547c0905",
"capturas/vitrine-metas-celular-escuro.webp": "4c10c12451cfe5d8a1a8337c5e7b56d0",
"capturas/vitrine-metas-janela-claro.png": "ae0a414484f291af4cf9f88ee5a2561b",
"capturas/vitrine-metas-janela-claro.webp": "7fb04ce95f6b57f2c0982fd5dc096df1",
"capturas/vitrine-metas-janela-escuro.png": "88ca28397c8ba3f709afd4beaeedab56",
"capturas/vitrine-metas-janela-escuro.webp": "78c771100a32ea69820deb92c525cbe8",
"capturas/vitrine-notas-celular-claro.png": "a12806679d3c6f341704f878de96037c",
"capturas/vitrine-notas-celular-claro.webp": "36ca4f14ebbc30b265ad307bf14cef12",
"capturas/vitrine-notas-celular-escuro.png": "d4621d075bbacd2ca30166cd13c03552",
"capturas/vitrine-notas-celular-escuro.webp": "2d9059616c21390f1a7fb4aadcd13432",
"capturas/vitrine-notas-janela-claro.png": "b2eeebb9033ac7adc551c83ebc200bea",
"capturas/vitrine-notas-janela-claro.webp": "4b38efde3399f36b2bd6fcf466533634",
"capturas/vitrine-notas-janela-escuro.png": "d0a91d64e6b54adf52838f4eb3dce7b3",
"capturas/vitrine-notas-janela-escuro.webp": "e5511b6894c20b01a7cf9b25611ca3d9",
"capturas/vitrine-pedidos-celular-claro.png": "78aa8c13ccfb54bbbabf1fd9e52ccdfb",
"capturas/vitrine-pedidos-celular-claro.webp": "846d507791a9308042273919f29a1e94",
"capturas/vitrine-pedidos-celular-escuro.png": "d2cd6efb2cbf4c726378729daf99cabd",
"capturas/vitrine-pedidos-celular-escuro.webp": "8afc40598c06f226335808cfc1f8c435",
"capturas/vitrine-pedidos-janela-claro.png": "789a4af5c7e7b6db2f905a1b9d7fd476",
"capturas/vitrine-pedidos-janela-claro.webp": "47f34cbd106f25d58f266b5a760380aa",
"capturas/vitrine-pedidos-janela-escuro.png": "843f5d5e75148efa57c0a639fe51b2ff",
"capturas/vitrine-pedidos-janela-escuro.webp": "af1c07010ad5cdf53c0c8b3e80424164",
"capturas/vitrine-projetos-celular-claro.png": "883e2e6950c3fdd20d913f3e483513f1",
"capturas/vitrine-projetos-celular-claro.webp": "a66a9e96d5ecc9013154f93ece795cd0",
"capturas/vitrine-projetos-celular-escuro.png": "abac399fbd4656f7abf37b4f3958e27d",
"capturas/vitrine-projetos-celular-escuro.webp": "580390c19bf459788413086d8a6f2748",
"capturas/vitrine-projetos-janela-claro.png": "3265bc76c2ce6ca52d616fb7aa24734b",
"capturas/vitrine-projetos-janela-claro.webp": "6491e836357baab2e866bc6da52ed5ef",
"capturas/vitrine-projetos-janela-escuro.png": "d6b3b3a94c668c5c98063e9855760cf9",
"capturas/vitrine-projetos-janela-escuro.webp": "298bfe6dd98ab25f484e50a963455011",
"capturas/vitrine-tarefas-celular-claro.png": "92e8162b29dad23efaedf03c2d2bac41",
"capturas/vitrine-tarefas-celular-claro.webp": "277eac405728e151c0c87a28c9b94c06",
"capturas/vitrine-tarefas-celular-escuro.png": "6e2c8ffc347b87dc2f8d71d34d6f9bbe",
"capturas/vitrine-tarefas-celular-escuro.webp": "fbf989e59f5f6d2b8463ae382b18d5f9",
"capturas/vitrine-tarefas-janela-claro.png": "8fbb055bdbdc686d8d99447d46bb8a7d",
"capturas/vitrine-tarefas-janela-claro.webp": "3bfea6d6556170fcaff4944789c96fd3",
"capturas/vitrine-tarefas-janela-escuro.png": "db8df5267dcbb4a8bc09919ab1879833",
"capturas/vitrine-tarefas-janela-escuro.webp": "77b9a802112ff277f49c412d294ad595",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "fd7c58f2fe856f9afe5c867e86566541",
"favicon.ico": "c1350bb3e8ab56976f68a951ce3c6d61",
"favicon.png": "2c3d6ce9639343d5fab1f522fcb93d54",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8fa8da0682b77529eb2ec3f225baa48a",
"fontes/atkinson.woff2": "735a32723ecb46d5ec45f3945d41af87",
"fontes/jetbrains-mono.woff2": "2c325bddecffefd9351563503c94a2b8",
"fontes/LICENCA-ATKINSON.txt": "6783603c82821e14899357132c46e567",
"icons/apple-touch-icon.png": "e9509e25d1982954d93fcc78daf28d64",
"icons/atalho-agenda.png": "be875082995f28eeba330737b4330dcf",
"icons/atalho-despesa.png": "1ae7b22e9be916e821f098d0f1304587",
"icons/atalho-nota.png": "d64bf96aeae3cb7acf58682fe7b63865",
"icons/Icon-192.png": "2821a01e9298d427ace80ffefb607498",
"icons/Icon-512.png": "c7b7dc9c44b8f3c84d6bf20d9745e1e0",
"icons/Icon-maskable-192.png": "277e1e0b21406ef08c79bb469433290d",
"icons/Icon-maskable-512.png": "2fa116330446e9b2f9a578f5e422db27",
"index.html": "6dae1abf916997810ef5ff0e80140a73",
"/": "6dae1abf916997810ef5ff0e80140a73",
"main.dart.js": "d92bdd43d237005743c05cb5623e7f25",
"manifest.json": "34bd3bd5cb9b75ed1bfaa4678ac42516",
"novidades.json": "80633a3240f13feb94c172efde783ea9",
"privacidade.html": "55ca32fcd0ad2834ddb4f167aff01cfa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "5af6edf90b03da4ccc9b13f128a8bdc4",
"version.json": "be57ca92df1e87038d6fd860f57c5b79"};
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
