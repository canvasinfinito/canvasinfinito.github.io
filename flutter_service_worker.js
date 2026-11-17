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
"capturas/a-home-na-janela.png": "94db6654e5251cbc4b7981ddf68cb104",
"capturas/a-home-no-celular.png": "9d6fde1b122f91384884b3edf80e2954",
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
"capturas/vitrine-agenda-celular-claro.png": "6185e235ae52b48919768c2b8eb2088e",
"capturas/vitrine-agenda-celular-claro.webp": "adfc1f19161a28468c447b87dc9f8979",
"capturas/vitrine-agenda-celular-escuro.png": "72df213c9dec4b0b10cb442a0b16f933",
"capturas/vitrine-agenda-celular-escuro.webp": "f5d5a6c0f8d17a62a1b43722dd1ac07e",
"capturas/vitrine-agenda-janela-claro.png": "64085f924ef44ef9c997b3d68a0a22a1",
"capturas/vitrine-agenda-janela-claro.webp": "8b462448960a0507d3b1d6f94d9aa5aa",
"capturas/vitrine-agenda-janela-escuro.png": "dca6b04ad088fd9233b46563d51b8671",
"capturas/vitrine-agenda-janela-escuro.webp": "67a9989ad5fb150af892600588ee15d9",
"capturas/vitrine-arquivos-celular-claro.png": "a97b9edf3fc25a64937cf29628a30a03",
"capturas/vitrine-arquivos-celular-claro.webp": "a64c2a743302246a4d54c7bb19dd9e9f",
"capturas/vitrine-arquivos-celular-escuro.png": "79a8135251e79387210920c6a4bf9358",
"capturas/vitrine-arquivos-celular-escuro.webp": "7792a6b3a61232556a8def673a5ebd48",
"capturas/vitrine-arquivos-janela-claro.png": "8365959c073637b1c01ec2d9e104bfeb",
"capturas/vitrine-arquivos-janela-claro.webp": "50ef41cc46dfd9b733ce4173d93876da",
"capturas/vitrine-arquivos-janela-escuro.png": "550d2cfc51ceb72169b6b1412a67d8a7",
"capturas/vitrine-arquivos-janela-escuro.webp": "5b492f422c93e5f67089479fe0352c51",
"capturas/vitrine-chat-celular-claro.png": "ebf5722ea91b79878fe38b74deb1b3a8",
"capturas/vitrine-chat-celular-claro.webp": "26352f866fcf8a0e03bebb1e47551155",
"capturas/vitrine-chat-celular-escuro.png": "7bc3e98a053e77e579de8436a8e7c4a3",
"capturas/vitrine-chat-celular-escuro.webp": "1d445b78b5b9c1e4a941ed131a866839",
"capturas/vitrine-chat-janela-claro.png": "abea38963ae6f81434d05b86c58cb6ef",
"capturas/vitrine-chat-janela-claro.webp": "cc00dc0ae94ca381c8b0b7dc2996dd92",
"capturas/vitrine-chat-janela-escuro.png": "f23b64250b7222f2d2e81bcbae102a66",
"capturas/vitrine-chat-janela-escuro.webp": "f5319a4c46f970934d434eea062a6aa8",
"capturas/vitrine-clientes-celular-claro.png": "b513c4dfd41c2030f1681996a788d349",
"capturas/vitrine-clientes-celular-claro.webp": "64fe6db5aca22f5820e73bc057792e62",
"capturas/vitrine-clientes-celular-escuro.png": "4ee6b92b2783a3a108659c57782c9aee",
"capturas/vitrine-clientes-celular-escuro.webp": "65c61f7a3eca5ebbfbef262ebfbb0ff0",
"capturas/vitrine-clientes-janela-claro.png": "36fd5115d39c85e6f9140e3cfd86f79f",
"capturas/vitrine-clientes-janela-claro.webp": "fa0910a62961bf9e3d53778e711f6bc2",
"capturas/vitrine-clientes-janela-escuro.png": "0003c1fba1851436e2f91cf5492c9ec3",
"capturas/vitrine-clientes-janela-escuro.webp": "fd67efae0cbfa3364386dd423444e45c",
"capturas/vitrine-financas-caixa-celular-claro.png": "5fdee6e7d61dc36f17b4b630c7a601d8",
"capturas/vitrine-financas-caixa-celular-claro.webp": "b026c2550f93d2b9e6cb45c8d8d43f85",
"capturas/vitrine-financas-caixa-celular-escuro.png": "847268e5d092a1d4d2a5df3098822d64",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "631d5825f6644b462805dab372421f3a",
"capturas/vitrine-financas-caixa-janela-claro.png": "b135d2bfd20c5057662f02a8d56cd072",
"capturas/vitrine-financas-caixa-janela-claro.webp": "235159378c11105baaf99736904462fb",
"capturas/vitrine-financas-caixa-janela-escuro.png": "a9520186fef5df64a9f25c58e1a3b37d",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "6092b4accd0dfbc9fb374259ebb4fad4",
"capturas/vitrine-financas-celular-claro.png": "1da37c0fba5093c703cf97b980d291f2",
"capturas/vitrine-financas-celular-claro.webp": "4c312acbffbb6e69442ad64b33d7416a",
"capturas/vitrine-financas-celular-escuro.png": "b7b135cfc99e6955a6b238ac17a60e1b",
"capturas/vitrine-financas-celular-escuro.webp": "62f95b77ce17a95e637caaf942015cc7",
"capturas/vitrine-financas-janela-claro.png": "cd331ad9ccd3b531cba9f95c1c5be8a4",
"capturas/vitrine-financas-janela-claro.webp": "07d3e6613a831c11d099e1b09cb7dd4d",
"capturas/vitrine-financas-janela-escuro.png": "9143aa1cf048a7bbbab81723d6f7f3b8",
"capturas/vitrine-financas-janela-escuro.webp": "f1b07ac25fdc08f423335600a0a8504a",
"capturas/vitrine-home-celular-claro.png": "77b0a5163142fab54e4ef235a536080c",
"capturas/vitrine-home-celular-claro.webp": "3e2859fbb2296396604e38fe5bd40cd3",
"capturas/vitrine-home-celular-escuro.png": "5d2b1bdae5ddf944a02473698435dbd7",
"capturas/vitrine-home-celular-escuro.webp": "4cf72cb59c009fdb2f28ebcf98fa7ad2",
"capturas/vitrine-home-corporativo-celular-claro.png": "f325b7005c7c8c3e7e689ca56ebc5e8f",
"capturas/vitrine-home-corporativo-celular-claro.webp": "d23a1b03aab5beb9a1fa64106da149ba",
"capturas/vitrine-home-corporativo-celular-escuro.png": "c60dcfcc9cb965e01bc407ce9b65afef",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "2e6c878ed4a6d40a163a0e0bdd9081ff",
"capturas/vitrine-home-corporativo-janela-claro.png": "14c3d024486325b56091daaafc187949",
"capturas/vitrine-home-corporativo-janela-claro.webp": "06387d28375c54ebcb937775ebf6f570",
"capturas/vitrine-home-corporativo-janela-escuro.png": "cae45a5895f6f9e9f6f866d1e00a3684",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "09b86cee3091d03b221385c2cd32a1ef",
"capturas/vitrine-home-janela-claro.png": "34c29eda1289d013e293cb729715a46a",
"capturas/vitrine-home-janela-claro.webp": "00abdcb4eef2c88f8674e63fa928eef9",
"capturas/vitrine-home-janela-escuro.png": "161fd714a3482884835a294efb48b069",
"capturas/vitrine-home-janela-escuro.webp": "d75ad62f01eace3aef246825f8382af6",
"capturas/vitrine-kanban-celular-claro.png": "235832c19b4844f1cad10a4e6bb5b96c",
"capturas/vitrine-kanban-celular-claro.webp": "3e29f9f9323a9ce9451062862cb1fa86",
"capturas/vitrine-kanban-celular-escuro.png": "087bbb9ea2471d905633391696ebc6b2",
"capturas/vitrine-kanban-celular-escuro.webp": "75587244c9f90a687540fe9309a96c91",
"capturas/vitrine-kanban-janela-claro.png": "fea18fb924f98cb1586bb12d073d087c",
"capturas/vitrine-kanban-janela-claro.webp": "1e4e201635215d3b949cb9de9a71c700",
"capturas/vitrine-kanban-janela-escuro.png": "b63fb35b8e8551622131f481597bdb2f",
"capturas/vitrine-kanban-janela-escuro.webp": "43b1e38cf72a83cd637abd27e4a0e0f7",
"capturas/vitrine-livre-celular-claro.png": "4151bf4b9af7fd0ed9e6adb3d929ad1c",
"capturas/vitrine-livre-celular-claro.webp": "204293bfdc8ac0c0748a4ea0a2461c41",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "90f949f784e48e527e5bcd75907f114f",
"capturas/vitrine-livre-janela-claro.webp": "19d102bb0f96edb7fa7164e9ea144e07",
"capturas/vitrine-livre-janela-escuro.png": "4afa9700081770ccd99fd7e61e5a26df",
"capturas/vitrine-livre-janela-escuro.webp": "d7cf582a8317a4fbb798647ea90c5bbc",
"capturas/vitrine-metas-celular-claro.png": "aa0379b08ea5f91f3f625360e6573a35",
"capturas/vitrine-metas-celular-claro.webp": "f22f6c43b1a5b4aebfb3bfc777bde507",
"capturas/vitrine-metas-celular-escuro.png": "ae611dc0ecf45d5e9e57fc75ed6b5f15",
"capturas/vitrine-metas-celular-escuro.webp": "0997a2524983b8a0d6bcbcf46075a88d",
"capturas/vitrine-metas-janela-claro.png": "56011765982d7219f49ed8b132b38e6b",
"capturas/vitrine-metas-janela-claro.webp": "204d3c42be92179dd4af99062a7ddad7",
"capturas/vitrine-metas-janela-escuro.png": "511a47a3b2c1ade79f669eaf6883eb09",
"capturas/vitrine-metas-janela-escuro.webp": "25062787c8b98aaeaece39be4d2cc0da",
"capturas/vitrine-notas-celular-claro.png": "b8dd57859a2d2f3353ae158c57d8b890",
"capturas/vitrine-notas-celular-claro.webp": "91c609a1b9189872f4a9cc2f03750be2",
"capturas/vitrine-notas-celular-escuro.png": "1393a061fd29be67f4837b6e3be7256e",
"capturas/vitrine-notas-celular-escuro.webp": "c447bb8be45fc3cbc01fd7f90c28d317",
"capturas/vitrine-notas-janela-claro.png": "b7dabcd2be316a06c3ba3ae3c886a1bf",
"capturas/vitrine-notas-janela-claro.webp": "eb515cf6bedc89463ec4b277200be77d",
"capturas/vitrine-notas-janela-escuro.png": "7ae61b99c3e6596dfa34f25a3d4c7770",
"capturas/vitrine-notas-janela-escuro.webp": "9117c17d4ee300997b9164626fe3146d",
"capturas/vitrine-pedidos-celular-claro.png": "f86177cabd0a56541124e6d60144f9fc",
"capturas/vitrine-pedidos-celular-claro.webp": "31f99343044f5bd8000a3395471ff8a3",
"capturas/vitrine-pedidos-celular-escuro.png": "40cad89dbf782aa800d5945b1d093fa9",
"capturas/vitrine-pedidos-celular-escuro.webp": "4ca65c90f59e8d582b4a46056edf25f4",
"capturas/vitrine-pedidos-janela-claro.png": "45a10daf6f2a09e29a68fa08c1490570",
"capturas/vitrine-pedidos-janela-claro.webp": "2febdae53423b882688c6bc43b0fb054",
"capturas/vitrine-pedidos-janela-escuro.png": "fe758073513b37f7a5aa065581084c4b",
"capturas/vitrine-pedidos-janela-escuro.webp": "815bcd6d328ee9c121cbb0c01c5091ce",
"capturas/vitrine-projetos-celular-claro.png": "883e2e6950c3fdd20d913f3e483513f1",
"capturas/vitrine-projetos-celular-claro.webp": "a66a9e96d5ecc9013154f93ece795cd0",
"capturas/vitrine-projetos-celular-escuro.png": "abac399fbd4656f7abf37b4f3958e27d",
"capturas/vitrine-projetos-celular-escuro.webp": "580390c19bf459788413086d8a6f2748",
"capturas/vitrine-projetos-janela-claro.png": "1a96ff3d5d5b13656ac079b6a5987c5a",
"capturas/vitrine-projetos-janela-claro.webp": "6db27edebb0921b4c25540a3e3bf56db",
"capturas/vitrine-projetos-janela-escuro.png": "f3a5f935046ebb764ca108efa59ac8bc",
"capturas/vitrine-projetos-janela-escuro.webp": "d6b9b18d2686d8c62fc4ace2e46a5261",
"capturas/vitrine-tarefas-celular-claro.png": "c29fc8981c8c82f876fa2c5b1949bfb9",
"capturas/vitrine-tarefas-celular-claro.webp": "b2bfbdb3ab267c1d4aab19707ac1cf20",
"capturas/vitrine-tarefas-celular-escuro.png": "3aa0674f6f0f51439c7c3fc5069b10e0",
"capturas/vitrine-tarefas-celular-escuro.webp": "bacc43a818ba6141918c3795809d063a",
"capturas/vitrine-tarefas-janela-claro.png": "7c58e0bf44d49accf681cb904a9f963b",
"capturas/vitrine-tarefas-janela-claro.webp": "fcdf0845f2bab4f9c348e9cc2016883a",
"capturas/vitrine-tarefas-janela-escuro.png": "4407f8e6195ecf0c30b5aa50e5b2e2b0",
"capturas/vitrine-tarefas-janela-escuro.webp": "0afb5317b92135772d5e27d81e43ef85",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "fd7c58f2fe856f9afe5c867e86566541",
"favicon.ico": "c1350bb3e8ab56976f68a951ce3c6d61",
"favicon.png": "2c3d6ce9639343d5fab1f522fcb93d54",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "605361acd7c0272dc7a8e84ded30d73c",
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
"index.html": "d810ba54b963c12d9d1319c746f1c71a",
"/": "d810ba54b963c12d9d1319c746f1c71a",
"main.dart.js": "1ccc5b115d08506d0f8c4ed4cb72f573",
"manifest.json": "34bd3bd5cb9b75ed1bfaa4678ac42516",
"novidades.json": "069d4c9eadac05164b3e93f04fb7a98b",
"privacidade.html": "55ca32fcd0ad2834ddb4f167aff01cfa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "41fc2763637746de16fece983cab4cb9",
"version.json": "bcac7cea40fbcdd81d3d0630148c4783"};
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
