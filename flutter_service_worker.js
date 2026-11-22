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
"capturas/a-home-na-janela.png": "b8f05f3b455fcbaf111fe24ba4facde3",
"capturas/a-home-no-celular.png": "15e4dcc8c29cc2f325055ad4dc096c86",
"capturas/apps/agenda-claro.webp": "b39a0700b3bed0cb909708d95517ffd0",
"capturas/apps/agenda.webp": "24e32e945a1fd6a2941bd4a7885286b2",
"capturas/apps/arquivos-claro.webp": "ea5347511e3e3a078e3d9d34e79d9497",
"capturas/apps/arquivos.webp": "fc9615244c45c94ca5dc3eef098aaa80",
"capturas/apps/canvas-livre-claro.webp": "9ffef5dff24b5bb30bae47b753c2b0f8",
"capturas/apps/canvas-livre.webp": "2c01233aef5e4c4a5784d2580d883893",
"capturas/apps/canvas-projetos-claro.webp": "077929b590cf01055b19a84cc00c9a76",
"capturas/apps/canvas-projetos.webp": "738de9eed70c700bda4ec860884bfd30",
"capturas/apps/chat-claro.webp": "111cca07230cbb9d0697f8ae16fa6779",
"capturas/apps/chat.webp": "42882e4558a70573a5e0d3a0932bac0f",
"capturas/apps/clientes-claro.webp": "aa90f6408a41d1e9e02aaaa78fa1745c",
"capturas/apps/clientes.webp": "51be05b9a2a093287a4931010ab0630a",
"capturas/apps/compras-claro.webp": "736ccbd1734fb499d0d3b64ff1b57708",
"capturas/apps/compras.webp": "f2f940536ee1e91a79ff095904f735fb",
"capturas/apps/financas-claro.webp": "d2802f730cb07cd39804c61f78f58e3e",
"capturas/apps/financas.webp": "1824e1c40afe7b3454e8ad348671d441",
"capturas/apps/kanban-claro.webp": "8fcd38364b21542c914288414c2ad2af",
"capturas/apps/kanban.webp": "9951720ed4b13adb82ef3b295231a1be",
"capturas/apps/metas-claro.webp": "2acab0518bbf9979c56e04469269ef7d",
"capturas/apps/metas.webp": "2c4f862021545d293c4af232490b1d50",
"capturas/apps/notas-claro.webp": "dd45194e2dd42c3c19a0f8592fc34f24",
"capturas/apps/notas.webp": "6a2e620c0fc263faa6b157a56629abd5",
"capturas/apps/pedidos-claro.webp": "95f67055ce7ab4eb30e72e173f91abfc",
"capturas/apps/pedidos.webp": "cd5d8426a1996ddbdabe4608ad9f24dc",
"capturas/apps/pessoas-claro.webp": "5ef500190c31448d35c652cf6438075f",
"capturas/apps/pessoas.webp": "c94b003f44d2de677bef41c2ad642280",
"capturas/apps/tarefas-claro.webp": "4ddf72249852af6d87e70b1cfc356a15",
"capturas/apps/tarefas.webp": "4149b35fab7820c0aed346568f4e285a",
"capturas/vitrine-agenda-celular-claro.png": "d789316ca27e8d3230f135414bfd1b75",
"capturas/vitrine-agenda-celular-claro.webp": "dc2a52fd795f00c0b65ede8521de086a",
"capturas/vitrine-agenda-celular-escuro.png": "9e57dcf6f271639dd0d286d86c12ba35",
"capturas/vitrine-agenda-celular-escuro.webp": "68d1699d07cc6c220a5214a3d6e71a20",
"capturas/vitrine-agenda-janela-claro.png": "f974a5355bbd952eff17cb4bfbb0b7f4",
"capturas/vitrine-agenda-janela-claro.webp": "4795cec521a13b15b59f562215cacf60",
"capturas/vitrine-agenda-janela-escuro.png": "23648f42c6c12062136ae195af615465",
"capturas/vitrine-agenda-janela-escuro.webp": "586ee4fea8e8bc30434f8a1f53a37fea",
"capturas/vitrine-arquivos-celular-claro.png": "73d2a70fe910ed309e1463f9f8b68cb0",
"capturas/vitrine-arquivos-celular-claro.webp": "27a31fe93dffbc042517453e84833f23",
"capturas/vitrine-arquivos-celular-escuro.png": "cfc9d45df959f998192a651b2eca52ba",
"capturas/vitrine-arquivos-celular-escuro.webp": "d6e4c62fbdd875349283317718c04c68",
"capturas/vitrine-arquivos-janela-claro.png": "5bbf466652be4c71ab03b0ab127a8246",
"capturas/vitrine-arquivos-janela-claro.webp": "d9889234250e60b76c684bd703236f86",
"capturas/vitrine-arquivos-janela-escuro.png": "a9975403dae3684a6442e318f19d4b0f",
"capturas/vitrine-arquivos-janela-escuro.webp": "246d6239d288ab3de2ec1038e3269f8f",
"capturas/vitrine-chat-celular-claro.png": "58b366fa5172b8a6a2ceaa3041061af2",
"capturas/vitrine-chat-celular-claro.webp": "c357dc536aad32b21e18020b4021b55e",
"capturas/vitrine-chat-celular-escuro.png": "0cea5e765bab8c0da28491f9cfc95dd2",
"capturas/vitrine-chat-celular-escuro.webp": "cc532f40d16b7d185dc330eccf26c564",
"capturas/vitrine-chat-janela-claro.png": "62709ead6c46c244a1d6c197da27d05b",
"capturas/vitrine-chat-janela-claro.webp": "9a5287aa6ab5d5d11858064f6d47225c",
"capturas/vitrine-chat-janela-escuro.png": "1de27aa46b32142ad29ed65b8291c13d",
"capturas/vitrine-chat-janela-escuro.webp": "0a33ac69e453e5f7f6860460e26c9716",
"capturas/vitrine-clientes-celular-claro.png": "e651dbd84815842767bdaf56d13ccdee",
"capturas/vitrine-clientes-celular-claro.webp": "0129d8ceb9b7e224d81c419f38f90aec",
"capturas/vitrine-clientes-celular-escuro.png": "a5645d05284f2f751452d425a1938bbc",
"capturas/vitrine-clientes-celular-escuro.webp": "af7960009fb68f406d45f951fdd4c91c",
"capturas/vitrine-clientes-janela-claro.png": "6b1c9bb3c5715d362f91b55b0787d3c6",
"capturas/vitrine-clientes-janela-claro.webp": "30be742b14e320f0bcc0a2a8aa16021f",
"capturas/vitrine-clientes-janela-escuro.png": "5aad50aca91d5d3248ee5c2bf7544305",
"capturas/vitrine-clientes-janela-escuro.webp": "82a027dab3200f62153c29218842e773",
"capturas/vitrine-compras-celular-claro.png": "c53b6c443444b0db0aef00fb842a50b0",
"capturas/vitrine-compras-celular-claro.webp": "56e87cccdaaf0e3dd67754413b77b1fc",
"capturas/vitrine-compras-celular-escuro.png": "273d15117842fb6789b0f732f38fc71c",
"capturas/vitrine-compras-celular-escuro.webp": "48d5a48d96a2199dceb02c4e1e167e83",
"capturas/vitrine-compras-janela-claro.png": "350aed3c95cd8d5eb84994a2a4f42087",
"capturas/vitrine-compras-janela-claro.webp": "97e61523670d590e06f9e60dec73ba11",
"capturas/vitrine-compras-janela-escuro.png": "882085e2aa6dab86b5d2faa6a9c52bcd",
"capturas/vitrine-compras-janela-escuro.webp": "ef77a04ad2e3857fe24b5c0dc11b81ae",
"capturas/vitrine-financas-caixa-celular-claro.png": "5fdee6e7d61dc36f17b4b630c7a601d8",
"capturas/vitrine-financas-caixa-celular-claro.webp": "b026c2550f93d2b9e6cb45c8d8d43f85",
"capturas/vitrine-financas-caixa-celular-escuro.png": "847268e5d092a1d4d2a5df3098822d64",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "631d5825f6644b462805dab372421f3a",
"capturas/vitrine-financas-caixa-janela-claro.png": "b135d2bfd20c5057662f02a8d56cd072",
"capturas/vitrine-financas-caixa-janela-claro.webp": "235159378c11105baaf99736904462fb",
"capturas/vitrine-financas-caixa-janela-escuro.png": "a9520186fef5df64a9f25c58e1a3b37d",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "6092b4accd0dfbc9fb374259ebb4fad4",
"capturas/vitrine-financas-celular-claro.png": "18ac2ae82f216a278df5499de565eb93",
"capturas/vitrine-financas-celular-claro.webp": "5696eb9c7b77f12d405ad26be67ce388",
"capturas/vitrine-financas-celular-escuro.png": "f2bebdadcbb2a0eaf4826a309b5ae7fe",
"capturas/vitrine-financas-celular-escuro.webp": "e38eb4ff9c6a21888a3c770c3c1e403f",
"capturas/vitrine-financas-janela-claro.png": "0f4f59e8445673ae83ce6b203ad3f7e1",
"capturas/vitrine-financas-janela-claro.webp": "08dbbcdddadf3f0e273531ad09d90aff",
"capturas/vitrine-financas-janela-escuro.png": "0c4bf6a2c4d6cc4456fbc42ada446db8",
"capturas/vitrine-financas-janela-escuro.webp": "f3acb9417794c3269bdaa2086f948cd4",
"capturas/vitrine-home-celular-claro.png": "4cead113437bae01a3fda2d1444c1179",
"capturas/vitrine-home-celular-claro.webp": "bdd8d851cc21c33e93feda3cffd3cdd1",
"capturas/vitrine-home-celular-escuro.png": "4195afd868042a74a50ed5a3c20fe05e",
"capturas/vitrine-home-celular-escuro.webp": "49dd27eaf8c47cfa9a7b68131e0c0711",
"capturas/vitrine-home-corporativo-celular-claro.png": "9c4875ae6de4919ff9ac777143311bf9",
"capturas/vitrine-home-corporativo-celular-claro.webp": "1891819bab08eaf93325d191b26e3f4b",
"capturas/vitrine-home-corporativo-celular-escuro.png": "3c378069176f7c4a3b3c7f63e6d91aa2",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "c4f9d00172ce762eca6d8f50c8a78b7f",
"capturas/vitrine-home-corporativo-janela-claro.png": "b44d7be644b6d86c4fe88fa404af0f1d",
"capturas/vitrine-home-corporativo-janela-claro.webp": "9a6ca2833fa56e8499babdb35a5cb448",
"capturas/vitrine-home-corporativo-janela-escuro.png": "e371214fab89026498d7296b38100a9a",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "3773a695d0ca1a475e6bad4b5df2b793",
"capturas/vitrine-home-janela-claro.png": "9792e238d45611b7e94c60a492308617",
"capturas/vitrine-home-janela-claro.webp": "7c49467a3acd8df3d832ff2ee5c8d22a",
"capturas/vitrine-home-janela-escuro.png": "562c462bd329bc58d840bc8c451d893e",
"capturas/vitrine-home-janela-escuro.webp": "9584cf055b0dcb31004acb6ef3527c17",
"capturas/vitrine-kanban-celular-claro.png": "a488666dd4abe21bc21e62dd6cfd400f",
"capturas/vitrine-kanban-celular-claro.webp": "5e06055e7777deefbf13eb79981d1b37",
"capturas/vitrine-kanban-celular-escuro.png": "a2e1e0a0e6a17ce1090bc430b00e119d",
"capturas/vitrine-kanban-celular-escuro.webp": "258c2cc62ed28e5cb88a2f4decfa0883",
"capturas/vitrine-kanban-janela-claro.png": "2faf4630180e22885b84a890f06b09c5",
"capturas/vitrine-kanban-janela-claro.webp": "955a2ecfea7cb60b9c4a47c829d30d03",
"capturas/vitrine-kanban-janela-escuro.png": "5536c7ecac3b686b6034d3c93eac0ad3",
"capturas/vitrine-kanban-janela-escuro.webp": "f254e6048371832a1afeefe98bd4e84f",
"capturas/vitrine-livre-celular-claro.png": "d6c3ce5178f5b098d9f133ad032658c0",
"capturas/vitrine-livre-celular-claro.webp": "790df668cf8c0b949393f0e9610093bb",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "182b2ad4e7b9244206fc5c4f01af84f2",
"capturas/vitrine-livre-janela-claro.webp": "bdf8a8b60b50be8613594cdcf1a36cad",
"capturas/vitrine-livre-janela-escuro.png": "6b2c8b98a5981705bcb4b2bbbd5e404d",
"capturas/vitrine-livre-janela-escuro.webp": "b6c6eb427ae0b7dfef238a59db81e135",
"capturas/vitrine-metas-celular-claro.png": "c8a2986f7cc86982b36f0252ae85b31d",
"capturas/vitrine-metas-celular-claro.webp": "33d794536e661f5a7020253e15a21f09",
"capturas/vitrine-metas-celular-escuro.png": "9a370158cc59d9c017ee1e5ce3bacb7a",
"capturas/vitrine-metas-celular-escuro.webp": "f4a823c95bb8450a880e5103ee1daab8",
"capturas/vitrine-metas-janela-claro.png": "748b14e67cf91c8841ec715b460a722d",
"capturas/vitrine-metas-janela-claro.webp": "79e69e5e7585d8d08cdb9886b6a9bdd7",
"capturas/vitrine-metas-janela-escuro.png": "0b6e1daeae770c2d2dee6da58aa6fb1d",
"capturas/vitrine-metas-janela-escuro.webp": "d94b202b2273ba8851fb0252b59c2cf1",
"capturas/vitrine-notas-celular-claro.png": "77e50e7d4dc01650e0aff189ce0afd04",
"capturas/vitrine-notas-celular-claro.webp": "2149ed23d8fe5dbc775433fc62a318b8",
"capturas/vitrine-notas-celular-escuro.png": "1393a061fd29be67f4837b6e3be7256e",
"capturas/vitrine-notas-celular-escuro.webp": "c447bb8be45fc3cbc01fd7f90c28d317",
"capturas/vitrine-notas-janela-claro.png": "cacb9755f7ef8a899d92a3651ff70ec8",
"capturas/vitrine-notas-janela-claro.webp": "54a535dec33947001d929ad72f9e0a4d",
"capturas/vitrine-notas-janela-escuro.png": "11d336862ce2b65240bdd53941419496",
"capturas/vitrine-notas-janela-escuro.webp": "5e24adc98381f3586a76f7528f9df79d",
"capturas/vitrine-pedidos-celular-claro.png": "381da4156bc4acd067a86c320c31f023",
"capturas/vitrine-pedidos-celular-claro.webp": "55f792eb7c39c9527592faa3e0f56646",
"capturas/vitrine-pedidos-celular-escuro.png": "a871c95ee4a456c505a952f359b1b30c",
"capturas/vitrine-pedidos-celular-escuro.webp": "e672207636eb5bf64393c8a55c58ee52",
"capturas/vitrine-pedidos-janela-claro.png": "be23f12517992b4d7e5c405ad6b325bf",
"capturas/vitrine-pedidos-janela-claro.webp": "816e1ed78b9ce6c7e39f9d770f212c20",
"capturas/vitrine-pedidos-janela-escuro.png": "7dc2f86e116d90387cfb2fdc900dd9a4",
"capturas/vitrine-pedidos-janela-escuro.webp": "92139f98eb345a044d009bf8727060e8",
"capturas/vitrine-pessoas-celular-claro.png": "3d16f3dd71b839872193730942c8052b",
"capturas/vitrine-pessoas-celular-claro.webp": "5406de88dc212888d745bcbf23e3f019",
"capturas/vitrine-pessoas-celular-escuro.png": "72c6c76d13933064abb9039ba4d0408a",
"capturas/vitrine-pessoas-celular-escuro.webp": "eaf03ebf83f2193b7b4b7d51c3da70cd",
"capturas/vitrine-pessoas-janela-claro.png": "2061499340fdfee81613e393b6c28898",
"capturas/vitrine-pessoas-janela-claro.webp": "4230add2fcac09342d41aa3a8738845e",
"capturas/vitrine-pessoas-janela-escuro.png": "9cba934c697342fff85b19ec409ba53a",
"capturas/vitrine-pessoas-janela-escuro.webp": "1ef81e8ca09efec0324c8b02613e1cc6",
"capturas/vitrine-projetos-celular-claro.png": "de61a57a82174fdbb7f54574483e37f8",
"capturas/vitrine-projetos-celular-claro.webp": "d97af0fa3a27440a8da4c091ac8a783a",
"capturas/vitrine-projetos-celular-escuro.png": "f2b9402fd2494590dde5862068905462",
"capturas/vitrine-projetos-celular-escuro.webp": "1f3b2ae32e8a738e56301e138a43ce46",
"capturas/vitrine-projetos-janela-claro.png": "7c81170182e73d2b13148f9102183151",
"capturas/vitrine-projetos-janela-claro.webp": "2b31f44137d0a90065aa1ed090c76054",
"capturas/vitrine-projetos-janela-escuro.png": "9db1d8ad9660d053aa65e541fa58be65",
"capturas/vitrine-projetos-janela-escuro.webp": "3c51c3d0bd32347ae4906b885a61e470",
"capturas/vitrine-tarefas-celular-claro.png": "f54143b12fe1c6e6f13c7c2c588e4b63",
"capturas/vitrine-tarefas-celular-claro.webp": "7032da117f7f38636a6be1369a921f4d",
"capturas/vitrine-tarefas-celular-escuro.png": "a554700510332f3578f511cad435f222",
"capturas/vitrine-tarefas-celular-escuro.webp": "b3192c8f7e5ed548c27b1cd87eb550ea",
"capturas/vitrine-tarefas-janela-claro.png": "fd36c5cedcacc694a0acc11ac67a59e3",
"capturas/vitrine-tarefas-janela-claro.webp": "d6d6bd24b9dff534b9eb81b25e98974a",
"capturas/vitrine-tarefas-janela-escuro.png": "97c33fdbec79cc654f84503a9267db16",
"capturas/vitrine-tarefas-janela-escuro.webp": "55741a6ec8d40fc261d12849eea93b8a",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "39e8910ff83d659cd8b41eabd4bb98c3",
"favicon.ico": "121284774efb56e63c397d0146468eee",
"favicon.png": "757cef3f7e6ac7d658dca3845dede7a8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "251941d177a74375fd4cea45c6273f96",
"fontes/atkinson.woff2": "735a32723ecb46d5ec45f3945d41af87",
"fontes/jetbrains-mono.woff2": "2c325bddecffefd9351563503c94a2b8",
"fontes/LICENCA-ATKINSON.txt": "6783603c82821e14899357132c46e567",
"icons/apple-touch-icon.png": "ac468910eb02ee717c7d2eefd0edd525",
"icons/atalho-agenda.png": "be875082995f28eeba330737b4330dcf",
"icons/atalho-despesa.png": "1ae7b22e9be916e821f098d0f1304587",
"icons/atalho-nota.png": "d64bf96aeae3cb7acf58682fe7b63865",
"icons/Icon-192.png": "b2fd8caa2b82069b12bad6f4999d9f7d",
"icons/Icon-512.png": "963abd398ed83b1f7e9b7909c482946b",
"icons/Icon-maskable-192.png": "34cb49c7399dd33794294c1d267418ad",
"icons/Icon-maskable-512.png": "60bb00cd59acba4ab10a3d824d496bca",
"index.html": "5541109946d9a28672e4b480db4f7a64",
"/": "5541109946d9a28672e4b480db4f7a64",
"main.dart.js": "2ee1edaf0d304bceefb34815b736eb67",
"manifest.json": "1bd8a2096c709610452fb785bd0492f2",
"novidades.json": "8a0fee1c486e8f922e2f0bbdd8c512ca",
"privacidade.html": "fac11710f4a3e34d18510ceb155232fa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "afab9e97e5ee7da4cf4a57c8f4f856f5",
"version.json": "391f790448a23718f2603e2636554e57"};
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
