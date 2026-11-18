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
"capturas/a-home-na-janela.png": "9cc36af19c7e9ac386cab42a146095f2",
"capturas/a-home-no-celular.png": "fe0d014e17b0c7f629bf14e1fa2df3b0",
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
"capturas/vitrine-agenda-celular-claro.png": "477b68ef976b516dd48077483cdbc578",
"capturas/vitrine-agenda-celular-claro.webp": "dcffd7a8f6373815a826d3a5d88c966e",
"capturas/vitrine-agenda-celular-escuro.png": "32fee597b0d467131e847eddf821b649",
"capturas/vitrine-agenda-celular-escuro.webp": "a18362e7afec041ef05613a3bde48126",
"capturas/vitrine-agenda-janela-claro.png": "cd69eda79f8d80dabf8e3c47e5c595ad",
"capturas/vitrine-agenda-janela-claro.webp": "7024dbd69ccc8b61b2b9c02b65c621d0",
"capturas/vitrine-agenda-janela-escuro.png": "b5f9a0c37294aa04600989ec48367db0",
"capturas/vitrine-agenda-janela-escuro.webp": "4a6a205abc0a749394c12c992b1d2162",
"capturas/vitrine-arquivos-celular-claro.png": "282e5bf0dfa2ec0425c0642f602c208d",
"capturas/vitrine-arquivos-celular-claro.webp": "e4b6e6d23bd59145606b708c9887b37d",
"capturas/vitrine-arquivos-celular-escuro.png": "1692e96e4e82e90c9770ae85846b254f",
"capturas/vitrine-arquivos-celular-escuro.webp": "943f63e37888f4ad7f4a1a8914a3f26c",
"capturas/vitrine-arquivos-janela-claro.png": "fe0097a5b6a75a91d53a2526ea9bf347",
"capturas/vitrine-arquivos-janela-claro.webp": "7ac34e761f827e5903b0ea6f6f84edf4",
"capturas/vitrine-arquivos-janela-escuro.png": "5ffce99384d49c7c7601d133df542c68",
"capturas/vitrine-arquivos-janela-escuro.webp": "0d144cea6ed5ead345b38faed46b725d",
"capturas/vitrine-chat-celular-claro.png": "a094ca00f54b9fb4a0b1756e396fcb14",
"capturas/vitrine-chat-celular-claro.webp": "a3ea36f2b70f5d10d880961e9229b4e9",
"capturas/vitrine-chat-celular-escuro.png": "acf74264ae4167fcc50e1d2dd7b6d7f8",
"capturas/vitrine-chat-celular-escuro.webp": "01d27fbb9f540a5f5f4cc41853e82528",
"capturas/vitrine-chat-janela-claro.png": "2ece1d2f2dd9425d72ebba63ee4b1ada",
"capturas/vitrine-chat-janela-claro.webp": "8ebc9b1c913d3016ef34f5e2d8fc5409",
"capturas/vitrine-chat-janela-escuro.png": "26bf2606fb454dec75a068f89cc46528",
"capturas/vitrine-chat-janela-escuro.webp": "3ac1cfe9452fea863d09c5731061a75f",
"capturas/vitrine-clientes-celular-claro.png": "306f57a9a5d119bac7c662c369baf9ca",
"capturas/vitrine-clientes-celular-claro.webp": "6918b78eb317c71458e58c6bfa8f9133",
"capturas/vitrine-clientes-celular-escuro.png": "3f0a9206fbebc54e4c62df4d6568ee4e",
"capturas/vitrine-clientes-celular-escuro.webp": "c22ae2c9efa61e02f5718a483ba20c02",
"capturas/vitrine-clientes-janela-claro.png": "e0b21de21c9dd62376b0c4121c7a0066",
"capturas/vitrine-clientes-janela-claro.webp": "b2e38ca351c8c46212c092c4504f540a",
"capturas/vitrine-clientes-janela-escuro.png": "12b1285edf6a733a43f3a87f1493d245",
"capturas/vitrine-clientes-janela-escuro.webp": "b5929ae2e92b1ab27e5cf363826c0161",
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
"capturas/vitrine-financas-janela-claro.png": "3c5a09dc02ad8208c29514614e5d1e47",
"capturas/vitrine-financas-janela-claro.webp": "5a6e14ee9443218a067be9cd5fa83b04",
"capturas/vitrine-financas-janela-escuro.png": "1b21bcb212fb40ac2acd2b3bf02348d3",
"capturas/vitrine-financas-janela-escuro.webp": "a322fe08d5ea6fea4f2f03ae834034e5",
"capturas/vitrine-home-celular-claro.png": "be1fc5746ed61858c04b6f5c948f4c64",
"capturas/vitrine-home-celular-claro.webp": "392d2d342a2c4794a3287e6861f3fe92",
"capturas/vitrine-home-celular-escuro.png": "e1b33407aab01fe9b8f654d61ffd65ef",
"capturas/vitrine-home-celular-escuro.webp": "12e10ff292e9406fd64029af95c9886e",
"capturas/vitrine-home-corporativo-celular-claro.png": "6a5dfb64940a0cbe8eec7ac4d9479a4a",
"capturas/vitrine-home-corporativo-celular-claro.webp": "fd8a092339c02b5d5d02340d2726a364",
"capturas/vitrine-home-corporativo-celular-escuro.png": "488b53d2ba46a805a578313c3aaa87d1",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "0241b05529312ffab5cd3e177f9c627c",
"capturas/vitrine-home-corporativo-janela-claro.png": "71d2e3b038b7be7febdee6310617cdf4",
"capturas/vitrine-home-corporativo-janela-claro.webp": "26d7f568f923e8576d61cd8235834c26",
"capturas/vitrine-home-corporativo-janela-escuro.png": "3e0059f0563ec554c856278c0a808667",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "9fab1e181bad2fb8f05121de1b11593d",
"capturas/vitrine-home-janela-claro.png": "a7b9cf40c41e110b482a19b964322751",
"capturas/vitrine-home-janela-claro.webp": "3fa22a1147ef970ae0872565a9a29d87",
"capturas/vitrine-home-janela-escuro.png": "656ce5ee2da9632dea08465abb20e12d",
"capturas/vitrine-home-janela-escuro.webp": "0143ae791fdae47220c60613757fab53",
"capturas/vitrine-kanban-celular-claro.png": "b149d6cf3cfcde7e31114243f627a2ac",
"capturas/vitrine-kanban-celular-claro.webp": "32032e4190600c9e3933cc48bf3623fa",
"capturas/vitrine-kanban-celular-escuro.png": "ef0403abda12e13560b11de07629ed16",
"capturas/vitrine-kanban-celular-escuro.webp": "dc45a92fcca0f55c1c7d116755a98075",
"capturas/vitrine-kanban-janela-claro.png": "697f2803a5f788db4c4ffb6a572274c1",
"capturas/vitrine-kanban-janela-claro.webp": "e5397b4a2fd4b0211b24d87329596652",
"capturas/vitrine-kanban-janela-escuro.png": "6a10011384088006985eb786ab40b7f1",
"capturas/vitrine-kanban-janela-escuro.webp": "e9ff55b9bd9c28f0d10ffca2ab1c8bb3",
"capturas/vitrine-livre-celular-claro.png": "d6c3ce5178f5b098d9f133ad032658c0",
"capturas/vitrine-livre-celular-claro.webp": "790df668cf8c0b949393f0e9610093bb",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "def4614f35ad7f0abb730c535c77414f",
"capturas/vitrine-livre-janela-claro.webp": "4c1bb32cd633d9441509d0a85fcf2fad",
"capturas/vitrine-livre-janela-escuro.png": "226356434dc57527c84f2e85af334808",
"capturas/vitrine-livre-janela-escuro.webp": "e55d2723b70114ca9137a64c0bd1b84a",
"capturas/vitrine-metas-celular-claro.png": "813e34bb47fc07c9c8eef2f395ccb96d",
"capturas/vitrine-metas-celular-claro.webp": "c0dd35d6b91509f92d6f2a8a4079dbf1",
"capturas/vitrine-metas-celular-escuro.png": "3b7d0668934798f37d949b5bfa938566",
"capturas/vitrine-metas-celular-escuro.webp": "8afa7368a66a995afc0f1b3731dce48d",
"capturas/vitrine-metas-janela-claro.png": "d9c22687b08078452e234f71b1385df5",
"capturas/vitrine-metas-janela-claro.webp": "9d99d10d985189aed4d03774f8b8d27e",
"capturas/vitrine-metas-janela-escuro.png": "be48b3862d4c6ac9dc3e3fbf1fd95387",
"capturas/vitrine-metas-janela-escuro.webp": "e0559908988796fad56e705f911076a6",
"capturas/vitrine-notas-celular-claro.png": "927021a9271e249a9a4ebb42eb5e68c8",
"capturas/vitrine-notas-celular-claro.webp": "38e1e469ecee5c3264c0aee3d1b47456",
"capturas/vitrine-notas-celular-escuro.png": "cf52deb6316db681b64cb1e1f41fd7bb",
"capturas/vitrine-notas-celular-escuro.webp": "a4e26dbe8fc7dd4162dabd8cf6c10c42",
"capturas/vitrine-notas-janela-claro.png": "11e246c433e22201fb5e68541c1c36ed",
"capturas/vitrine-notas-janela-claro.webp": "5c86e4f2e5cc4a9ceea6484b5d7c7ffa",
"capturas/vitrine-notas-janela-escuro.png": "116e4d29babf3d85b5a4db818d6536e4",
"capturas/vitrine-notas-janela-escuro.webp": "c54a21ac52f3299841a51b63b7c16323",
"capturas/vitrine-pedidos-celular-claro.png": "2d95069ecf2b54cbd381fccd467f8138",
"capturas/vitrine-pedidos-celular-claro.webp": "6d797936ba55098ce54ca03124ef31fc",
"capturas/vitrine-pedidos-celular-escuro.png": "451d5f44709d18deb28785bc62b475d9",
"capturas/vitrine-pedidos-celular-escuro.webp": "691a2ce02a9d5443b251d644451bec2f",
"capturas/vitrine-pedidos-janela-claro.png": "a4a0faa62a0fde7f806a78aaa02c56e2",
"capturas/vitrine-pedidos-janela-claro.webp": "30f269842d0b8eabb8c750fc95807c64",
"capturas/vitrine-pedidos-janela-escuro.png": "ba67a8a67e32e5f48661db4e644c02a0",
"capturas/vitrine-pedidos-janela-escuro.webp": "e1954705f996f0eaa34ead94fd40e806",
"capturas/vitrine-projetos-celular-claro.png": "290d3f211fc5ba603433ce53b6cad922",
"capturas/vitrine-projetos-celular-claro.webp": "db94d45f1027ffbd1e3c92fee4474c97",
"capturas/vitrine-projetos-celular-escuro.png": "117800093f355bd1bbf2a471e8c14aaf",
"capturas/vitrine-projetos-celular-escuro.webp": "086a6c0ac5d862ed1e030fc0bac185c2",
"capturas/vitrine-projetos-janela-claro.png": "f3ebaa8dbf1024c00b62416c418eb726",
"capturas/vitrine-projetos-janela-claro.webp": "704a75e025fdc6073adcbf2ccaa9420b",
"capturas/vitrine-projetos-janela-escuro.png": "8967a2b2198ac4556eb225bb22da27c6",
"capturas/vitrine-projetos-janela-escuro.webp": "e694a3a3f0237f24b3f72861a8acf376",
"capturas/vitrine-tarefas-celular-claro.png": "6a1abf844efe647c2b450fbc7ae4a1e9",
"capturas/vitrine-tarefas-celular-claro.webp": "edf62c01462748925fef0e0494d3f112",
"capturas/vitrine-tarefas-celular-escuro.png": "608b07475dafe488a3d99c888186bdb1",
"capturas/vitrine-tarefas-celular-escuro.webp": "1633b3435a136c51ec6ef4e9480578ed",
"capturas/vitrine-tarefas-janela-claro.png": "e331e0de98d70f943182a5a6050d2134",
"capturas/vitrine-tarefas-janela-claro.webp": "4073b7e15af1d9ab86b01631527ca0a6",
"capturas/vitrine-tarefas-janela-escuro.png": "33f226a2a5577101f239583003e9424f",
"capturas/vitrine-tarefas-janela-escuro.webp": "bf6a0d03a03590d56787707614af3b76",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "39e8910ff83d659cd8b41eabd4bb98c3",
"favicon.ico": "4ac807f85159c56d4ebd94b23b6c99d5",
"favicon.png": "7747c557a5c4784267de01711a8a566a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "67f04b82ed7109aa2af3ff51472816cf",
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
"main.dart.js": "507f2a83d58e0c8aa19f64e251552291",
"manifest.json": "1bd8a2096c709610452fb785bd0492f2",
"novidades.json": "a4d68ea5160127579a64981d443f10e0",
"privacidade.html": "fac11710f4a3e34d18510ceb155232fa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "afab9e97e5ee7da4cf4a57c8f4f856f5",
"version.json": "6a735b1ee1495a4030e7fb982aa8b362"};
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
