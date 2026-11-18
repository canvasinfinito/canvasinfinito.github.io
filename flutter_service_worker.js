'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ARTEFATOS-DO-DRIFT.txt": "3715ed6f6538061d6b17e14909432bf6",
"assets/AssetManifest.bin": "c134ba27334132b5188a975512e2fcb4",
"assets/AssetManifest.bin.json": "0794f0bedc10ae26e52239b2c11a3881",
"assets/AssetManifest.json": "c5a8d450aceee5b612a70bc1ad6467d1",
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
"capturas/a-home-na-janela.png": "d0e1d5f2d58ee7799521c1d1fdce1bde",
"capturas/a-home-no-celular.png": "a96894ede1bc9e54934c01722a54ed95",
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
"capturas/vitrine-agenda-celular-claro.png": "72084e1c492b4eab9fa07e2ac46704a2",
"capturas/vitrine-agenda-celular-claro.webp": "3bf240d8ce9b3da2152acb3a314223c7",
"capturas/vitrine-agenda-celular-escuro.png": "a0bf79b96fefa80396f385d8d36ae34f",
"capturas/vitrine-agenda-celular-escuro.webp": "e74a97bc7b1b8008c7fc7413acb17b63",
"capturas/vitrine-agenda-janela-claro.png": "bf4119d5d88fcda11aa6f36e87540924",
"capturas/vitrine-agenda-janela-claro.webp": "84b3f3294f7fac90faff8f932def0fb7",
"capturas/vitrine-agenda-janela-escuro.png": "b46103b4aed31fe07281f5e8d78ac906",
"capturas/vitrine-agenda-janela-escuro.webp": "125382c61e0bf3d59cdcc7c3a26d9644",
"capturas/vitrine-arquivos-celular-claro.png": "f960eb0e9dfb5009bc726390b1348c12",
"capturas/vitrine-arquivos-celular-claro.webp": "ae5effe2753b2ebc1605e9e6db48b34a",
"capturas/vitrine-arquivos-celular-escuro.png": "7fb3184a35b864564a8994d6a47c77f4",
"capturas/vitrine-arquivos-celular-escuro.webp": "87bfe516bc34af8220351a239f7ee0d2",
"capturas/vitrine-arquivos-janela-claro.png": "66ef8bd61cc09d30e0c9a5023e20abff",
"capturas/vitrine-arquivos-janela-claro.webp": "6a457355d2b58e784183e541c71f7cfe",
"capturas/vitrine-arquivos-janela-escuro.png": "f27d018fa74a636b136d98332113c8c3",
"capturas/vitrine-arquivos-janela-escuro.webp": "c3d4305adc17fb90092d25671c947086",
"capturas/vitrine-chat-celular-claro.png": "f36829d9a2b7026f09a2fe0d52767f10",
"capturas/vitrine-chat-celular-claro.webp": "49deb99b469bce514c21f13a26c2f637",
"capturas/vitrine-chat-celular-escuro.png": "d9f5ee5a3d39b0bf49459cb5e273d05f",
"capturas/vitrine-chat-celular-escuro.webp": "6f936e4d3a34c23fbb2f323daae5e524",
"capturas/vitrine-chat-janela-claro.png": "7ba0769f05c44e5210fc6107865cdf51",
"capturas/vitrine-chat-janela-claro.webp": "6c208618fca20b5b3e2a1cadc2fd866e",
"capturas/vitrine-chat-janela-escuro.png": "06d0cb8861879d2c9bee1fdd612731ef",
"capturas/vitrine-chat-janela-escuro.webp": "25dfeb7dc9250f227f5d7b48a0670037",
"capturas/vitrine-clientes-celular-claro.png": "306f57a9a5d119bac7c662c369baf9ca",
"capturas/vitrine-clientes-celular-claro.webp": "6918b78eb317c71458e58c6bfa8f9133",
"capturas/vitrine-clientes-celular-escuro.png": "3f0a9206fbebc54e4c62df4d6568ee4e",
"capturas/vitrine-clientes-celular-escuro.webp": "c22ae2c9efa61e02f5718a483ba20c02",
"capturas/vitrine-clientes-janela-claro.png": "7feba2ffa57e8637a672c8bfc19af6de",
"capturas/vitrine-clientes-janela-claro.webp": "580c0dc80ae407c3f478c23a6ed14fc8",
"capturas/vitrine-clientes-janela-escuro.png": "5798d58b4c9699995f6cc6e11b90e8b6",
"capturas/vitrine-clientes-janela-escuro.webp": "09e5550840a4f9355d410f6888e12aeb",
"capturas/vitrine-financas-caixa-celular-claro.png": "5fdee6e7d61dc36f17b4b630c7a601d8",
"capturas/vitrine-financas-caixa-celular-claro.webp": "b026c2550f93d2b9e6cb45c8d8d43f85",
"capturas/vitrine-financas-caixa-celular-escuro.png": "847268e5d092a1d4d2a5df3098822d64",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "631d5825f6644b462805dab372421f3a",
"capturas/vitrine-financas-caixa-janela-claro.png": "b135d2bfd20c5057662f02a8d56cd072",
"capturas/vitrine-financas-caixa-janela-claro.webp": "235159378c11105baaf99736904462fb",
"capturas/vitrine-financas-caixa-janela-escuro.png": "a9520186fef5df64a9f25c58e1a3b37d",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "6092b4accd0dfbc9fb374259ebb4fad4",
"capturas/vitrine-financas-celular-claro.png": "f2a96bbf972575db6833b6eacc43c27a",
"capturas/vitrine-financas-celular-claro.webp": "b484e5b1d34df1a95d6f043a4f0e3f50",
"capturas/vitrine-financas-celular-escuro.png": "37be070838cf07ee634b8330d82c5518",
"capturas/vitrine-financas-celular-escuro.webp": "dcfd1bd60d3c47ae60e1db9c23f042dc",
"capturas/vitrine-financas-janela-claro.png": "fce8fb3cd7270660c66cbdd9e3ad2839",
"capturas/vitrine-financas-janela-claro.webp": "85437659528cfa1898cc6404a195eda4",
"capturas/vitrine-financas-janela-escuro.png": "0dfa30ab9ed39f1d7ab4e2b907337cd9",
"capturas/vitrine-financas-janela-escuro.webp": "fb7c24cda134cda8bcbb676e4a69daf9",
"capturas/vitrine-home-celular-claro.png": "c822c0a26da960415fba042f2fd4d549",
"capturas/vitrine-home-celular-claro.webp": "4f8384fdecd5184efabae4c6f858ba98",
"capturas/vitrine-home-celular-escuro.png": "c13c61c9d62d30b083227b458e721fe7",
"capturas/vitrine-home-celular-escuro.webp": "546e5edeaa9c09133c2ec7c51d82822e",
"capturas/vitrine-home-corporativo-celular-claro.png": "44c3b8952a87e3a5d775bc58f4935e8a",
"capturas/vitrine-home-corporativo-celular-claro.webp": "6c16851dbedae777a506e161dbfcb59b",
"capturas/vitrine-home-corporativo-celular-escuro.png": "24a98962a7d6c0156c2a3d0ae1f475d0",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "e1ed3bbead82b3a4df43eaaaaa368148",
"capturas/vitrine-home-corporativo-janela-claro.png": "3fa59e225cca18cff9db228b4dffdc09",
"capturas/vitrine-home-corporativo-janela-claro.webp": "45ceb8eee99cb174ada2f08e05152dc3",
"capturas/vitrine-home-corporativo-janela-escuro.png": "1d47c3a46984da6e60525f06e4c5f28b",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "527e1d9b0c3d1ae87789496eba078e1d",
"capturas/vitrine-home-janela-claro.png": "986026b3240c8c1d42bceb4c87937ea9",
"capturas/vitrine-home-janela-claro.webp": "1b4b48d42f53f6dbf9f7950c15bc6326",
"capturas/vitrine-home-janela-escuro.png": "8db23c2e7b2d76af7a6b4e272cbddfdd",
"capturas/vitrine-home-janela-escuro.webp": "1dce53a072ad18d8345963d33501dc67",
"capturas/vitrine-kanban-celular-claro.png": "8dfdd8f198e9feda7b2c20f766c6cd10",
"capturas/vitrine-kanban-celular-claro.webp": "16f3ef51d0427dc0be33fe978279ec68",
"capturas/vitrine-kanban-celular-escuro.png": "482057d70e2a192dfc7b383dee9146a4",
"capturas/vitrine-kanban-celular-escuro.webp": "5e14bbf061ab62dbbf59c81fd144bb3c",
"capturas/vitrine-kanban-janela-claro.png": "dc46af8d903b8ff3c88c67f8d9fb6468",
"capturas/vitrine-kanban-janela-claro.webp": "d23a9faedab8b0cc119bec94b1afee2f",
"capturas/vitrine-kanban-janela-escuro.png": "0b9ced445b09301bf1d65862f6c5f443",
"capturas/vitrine-kanban-janela-escuro.webp": "30a82af8af9ad75f91869bee05062329",
"capturas/vitrine-livre-celular-claro.png": "d6c3ce5178f5b098d9f133ad032658c0",
"capturas/vitrine-livre-celular-claro.webp": "790df668cf8c0b949393f0e9610093bb",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "bb1d6a519dce42cf56950cee0bf7bcc2",
"capturas/vitrine-livre-janela-claro.webp": "73c5ba813daf629a710990611150a2f2",
"capturas/vitrine-livre-janela-escuro.png": "e538dc83f47d3bbc2e31e67952ed58c6",
"capturas/vitrine-livre-janela-escuro.webp": "d0c8798b9bcd2b0812d079cbe172c17b",
"capturas/vitrine-metas-celular-claro.png": "1cf9a0c64659ccfde35205bdefedf313",
"capturas/vitrine-metas-celular-claro.webp": "070a1ae717e6725c6247cc34334e9168",
"capturas/vitrine-metas-celular-escuro.png": "c1e8c87494397c1020d63a3866cecccd",
"capturas/vitrine-metas-celular-escuro.webp": "8f1852d97a45a4fb4b4ae14ba718d9ca",
"capturas/vitrine-metas-janela-claro.png": "5685fcbba001eca5f34bdbc09a67fbb6",
"capturas/vitrine-metas-janela-claro.webp": "ab640805f0ddad615e9bf5d93e7f6aff",
"capturas/vitrine-metas-janela-escuro.png": "0cf367b40d117db621db50b34b01daef",
"capturas/vitrine-metas-janela-escuro.webp": "d2dfa46f7bef8f8681794a79bdb8f416",
"capturas/vitrine-notas-celular-claro.png": "927021a9271e249a9a4ebb42eb5e68c8",
"capturas/vitrine-notas-celular-claro.webp": "38e1e469ecee5c3264c0aee3d1b47456",
"capturas/vitrine-notas-celular-escuro.png": "cf52deb6316db681b64cb1e1f41fd7bb",
"capturas/vitrine-notas-celular-escuro.webp": "a4e26dbe8fc7dd4162dabd8cf6c10c42",
"capturas/vitrine-notas-janela-claro.png": "d6d7fa16acfd91dce89414c65e29bdcf",
"capturas/vitrine-notas-janela-claro.webp": "d93a62bcd3ba60b9722025539ada713e",
"capturas/vitrine-notas-janela-escuro.png": "360f9286206cf211aa130fe06baa5660",
"capturas/vitrine-notas-janela-escuro.webp": "69bdaa30f015013c85541f8ee80448a8",
"capturas/vitrine-pedidos-celular-claro.png": "2d95069ecf2b54cbd381fccd467f8138",
"capturas/vitrine-pedidos-celular-claro.webp": "6d797936ba55098ce54ca03124ef31fc",
"capturas/vitrine-pedidos-celular-escuro.png": "451d5f44709d18deb28785bc62b475d9",
"capturas/vitrine-pedidos-celular-escuro.webp": "691a2ce02a9d5443b251d644451bec2f",
"capturas/vitrine-pedidos-janela-claro.png": "57def4e48060f83dbd16988584c5cec0",
"capturas/vitrine-pedidos-janela-claro.webp": "68f6917f6f7bbbb34856743529020f93",
"capturas/vitrine-pedidos-janela-escuro.png": "c4618a91c2cad24f227869b257284163",
"capturas/vitrine-pedidos-janela-escuro.webp": "f9a646079ce08f0b26486d50138bb418",
"capturas/vitrine-projetos-celular-claro.png": "fd6c51a4203fef317cde90fc530893c1",
"capturas/vitrine-projetos-celular-claro.webp": "a61e7e8522b54ec85c9c03ea2579d01d",
"capturas/vitrine-projetos-celular-escuro.png": "abac399fbd4656f7abf37b4f3958e27d",
"capturas/vitrine-projetos-celular-escuro.webp": "580390c19bf459788413086d8a6f2748",
"capturas/vitrine-projetos-janela-claro.png": "2bf711b8e3a1c2001520a3f15e6f877e",
"capturas/vitrine-projetos-janela-claro.webp": "32533d32fbbe8a18089c7d987f9229f4",
"capturas/vitrine-projetos-janela-escuro.png": "22b060080624dbcef2b6da28d8bb62a8",
"capturas/vitrine-projetos-janela-escuro.webp": "b14503e5162a690a21b1503499c11902",
"capturas/vitrine-tarefas-celular-claro.png": "1947f3977be12141a71408a9fd557793",
"capturas/vitrine-tarefas-celular-claro.webp": "22869859f9c806c2af9e88e0cec15786",
"capturas/vitrine-tarefas-celular-escuro.png": "42b0d2d70f8203680eeca155fdf98b80",
"capturas/vitrine-tarefas-celular-escuro.webp": "a99121839963cbbd28a1b3e682348037",
"capturas/vitrine-tarefas-janela-claro.png": "5c4c74bb93f8b5b1e640a2859cab8024",
"capturas/vitrine-tarefas-janela-claro.webp": "a3270f2e2f4dfa3727b42b80688903db",
"capturas/vitrine-tarefas-janela-escuro.png": "03348cae167c43833cb39b2b0ebd7734",
"capturas/vitrine-tarefas-janela-escuro.webp": "365650ada247fb50bf6fa3d7671ca16f",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "39e8910ff83d659cd8b41eabd4bb98c3",
"favicon.ico": "4ac807f85159c56d4ebd94b23b6c99d5",
"favicon.png": "7747c557a5c4784267de01711a8a566a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d7735d5b675bfeea0dc61d48dd716bb2",
"fontes/atkinson.woff2": "735a32723ecb46d5ec45f3945d41af87",
"fontes/jetbrains-mono.woff2": "2c325bddecffefd9351563503c94a2b8",
"fontes/LICENCA-ATKINSON.txt": "6783603c82821e14899357132c46e567",
"icons/apple-touch-icon.png": "a864950a12dda6c14d96256eb65f9f7d",
"icons/atalho-agenda.png": "be875082995f28eeba330737b4330dcf",
"icons/atalho-despesa.png": "1ae7b22e9be916e821f098d0f1304587",
"icons/atalho-nota.png": "d64bf96aeae3cb7acf58682fe7b63865",
"icons/Icon-192.png": "a6e76bc1fbed6d58db94fb835752be83",
"icons/Icon-512.png": "d818aee05171cbc45826a4a92310f285",
"icons/Icon-maskable-192.png": "2c5934f82ca62242d3b061a563fd381c",
"icons/Icon-maskable-512.png": "8207d0f4e9f868c22d3efa272809feb0",
"index.html": "5dacd4d82bdc8777d67b3637ae5a6134",
"/": "5dacd4d82bdc8777d67b3637ae5a6134",
"main.dart.js": "797909bf4747d6d24cb4720508cac015",
"manifest.json": "1bd8a2096c709610452fb785bd0492f2",
"novidades.json": "a4d68ea5160127579a64981d443f10e0",
"privacidade.html": "fac11710f4a3e34d18510ceb155232fa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "afab9e97e5ee7da4cf4a57c8f4f856f5",
"version.json": "7ff92c25d3ded4d3df74e8e8e91c78ce"};
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
