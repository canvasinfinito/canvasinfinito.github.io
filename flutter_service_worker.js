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
"capturas/a-home-na-janela.png": "a5b029ab232ac00704cb6c3b8319b69c",
"capturas/a-home-no-celular.png": "ecb30a99e10cf930d714568b663d73c8",
"capturas/apps/agenda-claro.webp": "b39a0700b3bed0cb909708d95517ffd0",
"capturas/apps/agenda.webp": "24e32e945a1fd6a2941bd4a7885286b2",
"capturas/apps/arquivos-claro.webp": "3a30234f4be65ce6a8805ccff365a19b",
"capturas/apps/arquivos.webp": "2b291764f905ad4cb8db1698cd29b9b2",
"capturas/apps/canvas-livre-claro.webp": "9ffef5dff24b5bb30bae47b753c2b0f8",
"capturas/apps/canvas-livre.webp": "2c01233aef5e4c4a5784d2580d883893",
"capturas/apps/canvas-projetos-claro.webp": "077929b590cf01055b19a84cc00c9a76",
"capturas/apps/canvas-projetos.webp": "738de9eed70c700bda4ec860884bfd30",
"capturas/apps/chat-claro.webp": "111cca07230cbb9d0697f8ae16fa6779",
"capturas/apps/chat.webp": "42882e4558a70573a5e0d3a0932bac0f",
"capturas/apps/clientes-claro.webp": "d51a4f1dd3353d152af4322b14d61f50",
"capturas/apps/clientes.webp": "8598cf1191d6152246418f13fb650d07",
"capturas/apps/financas-claro.webp": "d2802f730cb07cd39804c61f78f58e3e",
"capturas/apps/financas.webp": "1824e1c40afe7b3454e8ad348671d441",
"capturas/apps/kanban-claro.webp": "8fcd38364b21542c914288414c2ad2af",
"capturas/apps/kanban.webp": "9951720ed4b13adb82ef3b295231a1be",
"capturas/apps/metas-claro.webp": "2acab0518bbf9979c56e04469269ef7d",
"capturas/apps/metas.webp": "2c4f862021545d293c4af232490b1d50",
"capturas/apps/notas-claro.webp": "dd45194e2dd42c3c19a0f8592fc34f24",
"capturas/apps/notas.webp": "6a2e620c0fc263faa6b157a56629abd5",
"capturas/apps/pedidos-claro.webp": "dfa3d653cefdb15c6767b3a8e9e5486b",
"capturas/apps/pedidos.webp": "3d38be2af38399e6ead87d0c8d290e23",
"capturas/apps/tarefas-claro.webp": "4ddf72249852af6d87e70b1cfc356a15",
"capturas/apps/tarefas.webp": "4149b35fab7820c0aed346568f4e285a",
"capturas/vitrine-agenda-celular-claro.png": "4e0867c7144aee193a31ca9aad48c840",
"capturas/vitrine-agenda-celular-claro.webp": "0367256352879aa6dce0621d55ada873",
"capturas/vitrine-agenda-celular-escuro.png": "0a0cfc562ad33f49e251a30c01720037",
"capturas/vitrine-agenda-celular-escuro.webp": "47444b77246e7b8602aeba9749e7ed3f",
"capturas/vitrine-agenda-janela-claro.png": "5ae46a18ac3be1c2f7e7184a03aae3b6",
"capturas/vitrine-agenda-janela-claro.webp": "0cdbefd6f7a28f997e5067256bb6a6d5",
"capturas/vitrine-agenda-janela-escuro.png": "2a4d8e2c25b02e385d4feb230cd6c6d7",
"capturas/vitrine-agenda-janela-escuro.webp": "fbffbed87c8616c151afa5776c0c6049",
"capturas/vitrine-arquivos-celular-claro.png": "282e5bf0dfa2ec0425c0642f602c208d",
"capturas/vitrine-arquivos-celular-claro.webp": "e4b6e6d23bd59145606b708c9887b37d",
"capturas/vitrine-arquivos-celular-escuro.png": "1692e96e4e82e90c9770ae85846b254f",
"capturas/vitrine-arquivos-celular-escuro.webp": "943f63e37888f4ad7f4a1a8914a3f26c",
"capturas/vitrine-arquivos-janela-claro.png": "3cf91041a4ffaf6bd63c7975a0fa6b20",
"capturas/vitrine-arquivos-janela-claro.webp": "dd20a50ba6e44c15a3f5b7dbd2ee2b31",
"capturas/vitrine-arquivos-janela-escuro.png": "82d7314f037ef979e1fd8f701ce9d741",
"capturas/vitrine-arquivos-janela-escuro.webp": "76e952ec691d5de9f8ea5de5e4e3e7e1",
"capturas/vitrine-chat-celular-claro.png": "53cd175b853df4f7f7fea150431cfd6e",
"capturas/vitrine-chat-celular-claro.webp": "0153a6405420709ac10d89a0d4aeba48",
"capturas/vitrine-chat-celular-escuro.png": "101e4e06c51b5869154684530135a5ef",
"capturas/vitrine-chat-celular-escuro.webp": "897fd2078568bc4098e4a60c3b308711",
"capturas/vitrine-chat-janela-claro.png": "4aa10f81f181c70b832c04fbc03ee462",
"capturas/vitrine-chat-janela-claro.webp": "1a7a0be1170a024b04bfe4f952ad99cd",
"capturas/vitrine-chat-janela-escuro.png": "a9145dedbc3e4f116af78ef07ec64f83",
"capturas/vitrine-chat-janela-escuro.webp": "5e5cd61e29906501fe22f775dd339d85",
"capturas/vitrine-clientes-celular-claro.png": "306f57a9a5d119bac7c662c369baf9ca",
"capturas/vitrine-clientes-celular-claro.webp": "6918b78eb317c71458e58c6bfa8f9133",
"capturas/vitrine-clientes-celular-escuro.png": "3f0a9206fbebc54e4c62df4d6568ee4e",
"capturas/vitrine-clientes-celular-escuro.webp": "c22ae2c9efa61e02f5718a483ba20c02",
"capturas/vitrine-clientes-janela-claro.png": "eb987ed3a41cb46504c4ce83e06438ac",
"capturas/vitrine-clientes-janela-claro.webp": "90ed446622d0a82345e6f7435b143c09",
"capturas/vitrine-clientes-janela-escuro.png": "64d11c542619dbf79a6722f7e7f3c3ce",
"capturas/vitrine-clientes-janela-escuro.webp": "3189087fc91e70ea35d3fcddceb94a42",
"capturas/vitrine-financas-caixa-celular-claro.png": "5fdee6e7d61dc36f17b4b630c7a601d8",
"capturas/vitrine-financas-caixa-celular-claro.webp": "b026c2550f93d2b9e6cb45c8d8d43f85",
"capturas/vitrine-financas-caixa-celular-escuro.png": "847268e5d092a1d4d2a5df3098822d64",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "631d5825f6644b462805dab372421f3a",
"capturas/vitrine-financas-caixa-janela-claro.png": "b135d2bfd20c5057662f02a8d56cd072",
"capturas/vitrine-financas-caixa-janela-claro.webp": "235159378c11105baaf99736904462fb",
"capturas/vitrine-financas-caixa-janela-escuro.png": "a9520186fef5df64a9f25c58e1a3b37d",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "6092b4accd0dfbc9fb374259ebb4fad4",
"capturas/vitrine-financas-celular-claro.png": "960358dc6dbc931bb5b649c22b5f9dfd",
"capturas/vitrine-financas-celular-claro.webp": "f3429aad4b6cf9c957ab5596917f9976",
"capturas/vitrine-financas-celular-escuro.png": "049a5e34e86ea3de602b73d242140112",
"capturas/vitrine-financas-celular-escuro.webp": "20b384b1258222391f1b1d4dda7874ab",
"capturas/vitrine-financas-janela-claro.png": "1aae15ec298f77220f787e9a835c79eb",
"capturas/vitrine-financas-janela-claro.webp": "91b90812a5328791b0fd78c80588e7ff",
"capturas/vitrine-financas-janela-escuro.png": "1d64cbe2b07f1dd70822db63e75abe86",
"capturas/vitrine-financas-janela-escuro.webp": "9fc21a906b07a963c8e5937e6ce758b0",
"capturas/vitrine-home-celular-claro.png": "0213a7d5882b63b1408552f1054701bf",
"capturas/vitrine-home-celular-claro.webp": "0c0fffe896380602b85db636fe3fa5ed",
"capturas/vitrine-home-celular-escuro.png": "cba2aa09adbca013ed3e7140334448ab",
"capturas/vitrine-home-celular-escuro.webp": "2e969c2cf1f0a8f200812ed50232e326",
"capturas/vitrine-home-corporativo-celular-claro.png": "3e18405b4159cf90b60fe152dbef51cb",
"capturas/vitrine-home-corporativo-celular-claro.webp": "d877c2b5a3f0901bae85c43787ffee9b",
"capturas/vitrine-home-corporativo-celular-escuro.png": "dbb830166fa4fe23332cabd8ada284fc",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "589622dc056eaf163b61747286b48ef2",
"capturas/vitrine-home-corporativo-janela-claro.png": "fe6ac7f4f8bd99206a1eb6f86095974e",
"capturas/vitrine-home-corporativo-janela-claro.webp": "fa4bf960bc2fd5724f3965f3de465899",
"capturas/vitrine-home-corporativo-janela-escuro.png": "ab3e0168e777e0368ad4cd6c76bb12b4",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "028753413766001bb8e0dc0aa5a15b33",
"capturas/vitrine-home-janela-claro.png": "5fb9b77a5118e927cebeaafd93545391",
"capturas/vitrine-home-janela-claro.webp": "fc571f4230f28177b5778891d16f2a39",
"capturas/vitrine-home-janela-escuro.png": "1f700c2b9d0b54c345b6e81464f1f624",
"capturas/vitrine-home-janela-escuro.webp": "370b294994bfbee868ba349b38db41b5",
"capturas/vitrine-kanban-celular-claro.png": "ab5dcff5cc96bf4310e3a275f1587604",
"capturas/vitrine-kanban-celular-claro.webp": "0c25c603b0d5cbfe8c40f9ee68cb6d1d",
"capturas/vitrine-kanban-celular-escuro.png": "e57276643efd9e2ad75a5b3b6d120c7c",
"capturas/vitrine-kanban-celular-escuro.webp": "2475289668600b8624eecf13b761170a",
"capturas/vitrine-kanban-janela-claro.png": "1021889fd89fcd3789fdde79d2f1e267",
"capturas/vitrine-kanban-janela-claro.webp": "bbcf39f9e441d64dd178dd965a91822d",
"capturas/vitrine-kanban-janela-escuro.png": "a99e795b1e1a874fdd6f86599894b9de",
"capturas/vitrine-kanban-janela-escuro.webp": "f41ebc189b789bc24dff38463482e833",
"capturas/vitrine-livre-celular-claro.png": "d6c3ce5178f5b098d9f133ad032658c0",
"capturas/vitrine-livre-celular-claro.webp": "790df668cf8c0b949393f0e9610093bb",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "5d6491edece6b19cc96e15f5843d2222",
"capturas/vitrine-livre-janela-claro.webp": "d499bb35809d2480ea6d48bda4720252",
"capturas/vitrine-livre-janela-escuro.png": "21e07cdec37eaa263b60d63fdff7fdc9",
"capturas/vitrine-livre-janela-escuro.webp": "1a27088f17eb4fc1d36ad33a62df26b5",
"capturas/vitrine-metas-celular-claro.png": "601872de38662c26c8fa3a0efb8a8ef5",
"capturas/vitrine-metas-celular-claro.webp": "2c319e0d68cb05831cf6614d8232d691",
"capturas/vitrine-metas-celular-escuro.png": "2fc95a5298f2b2862ef13268dd81c73c",
"capturas/vitrine-metas-celular-escuro.webp": "b1616b73caef9e4daf1c14e7850b657d",
"capturas/vitrine-metas-janela-claro.png": "11de015bfe2cc243c6e90a748804d5c8",
"capturas/vitrine-metas-janela-claro.webp": "cf2d1d8b07c86192bb7fe5d5c95394c5",
"capturas/vitrine-metas-janela-escuro.png": "c9983f5387b1549d23152e06c522a1b3",
"capturas/vitrine-metas-janela-escuro.webp": "eaa560bb99a8e7e93a115b5c8040b019",
"capturas/vitrine-notas-celular-claro.png": "927021a9271e249a9a4ebb42eb5e68c8",
"capturas/vitrine-notas-celular-claro.webp": "38e1e469ecee5c3264c0aee3d1b47456",
"capturas/vitrine-notas-celular-escuro.png": "cf52deb6316db681b64cb1e1f41fd7bb",
"capturas/vitrine-notas-celular-escuro.webp": "a4e26dbe8fc7dd4162dabd8cf6c10c42",
"capturas/vitrine-notas-janela-claro.png": "409cf4ddd57273788d6a04b4b13b442d",
"capturas/vitrine-notas-janela-claro.webp": "bdab5ad6b89458e9f44f004574e1ea8a",
"capturas/vitrine-notas-janela-escuro.png": "b0b29d52ffefa4a4ac7ff54474027b74",
"capturas/vitrine-notas-janela-escuro.webp": "ce63b7c016eb8655149de2fa80c413f5",
"capturas/vitrine-pedidos-celular-claro.png": "2d95069ecf2b54cbd381fccd467f8138",
"capturas/vitrine-pedidos-celular-claro.webp": "6d797936ba55098ce54ca03124ef31fc",
"capturas/vitrine-pedidos-celular-escuro.png": "451d5f44709d18deb28785bc62b475d9",
"capturas/vitrine-pedidos-celular-escuro.webp": "691a2ce02a9d5443b251d644451bec2f",
"capturas/vitrine-pedidos-janela-claro.png": "b451c2ebdefa2e919eb7c4891dcd72d4",
"capturas/vitrine-pedidos-janela-claro.webp": "ae2f4d1479e70aa5b961b4ffb37d2231",
"capturas/vitrine-pedidos-janela-escuro.png": "a05dd80ac167513a1106d85e9fd23fcd",
"capturas/vitrine-pedidos-janela-escuro.webp": "9bff7a3fdee419ae5d061597149de28b",
"capturas/vitrine-projetos-celular-claro.png": "de61a57a82174fdbb7f54574483e37f8",
"capturas/vitrine-projetos-celular-claro.webp": "d97af0fa3a27440a8da4c091ac8a783a",
"capturas/vitrine-projetos-celular-escuro.png": "f2b9402fd2494590dde5862068905462",
"capturas/vitrine-projetos-celular-escuro.webp": "1f3b2ae32e8a738e56301e138a43ce46",
"capturas/vitrine-projetos-janela-claro.png": "973207c1e0002856b852588acd568be7",
"capturas/vitrine-projetos-janela-claro.webp": "1b8ced6789ddad5423fb5df7b2bf8d24",
"capturas/vitrine-projetos-janela-escuro.png": "80b4b026ca562cbb9c9e6d93e4594599",
"capturas/vitrine-projetos-janela-escuro.webp": "986d9afadeafad93bad95b6f9018e433",
"capturas/vitrine-tarefas-celular-claro.png": "cae9dc3a7e442a661df47c7127e35732",
"capturas/vitrine-tarefas-celular-claro.webp": "117e97d0cabd037abef8b5a318f6162c",
"capturas/vitrine-tarefas-celular-escuro.png": "4d8d8ee3c1c771df0ef4f7193a652d68",
"capturas/vitrine-tarefas-celular-escuro.webp": "7278c05413bf70d02c1abf0ee21633f2",
"capturas/vitrine-tarefas-janela-claro.png": "0940c7e3e76f489f9c44362a94a24b6e",
"capturas/vitrine-tarefas-janela-claro.webp": "580d8fb411ad301f3e3604ebace84d65",
"capturas/vitrine-tarefas-janela-escuro.png": "a348027727e56526543c6dbb98e3696a",
"capturas/vitrine-tarefas-janela-escuro.webp": "7c288532d12232a47c06c28f20c82e6a",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "39e8910ff83d659cd8b41eabd4bb98c3",
"favicon.ico": "121284774efb56e63c397d0146468eee",
"favicon.png": "757cef3f7e6ac7d658dca3845dede7a8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6699d72bafebd83e5809d951843453f9",
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
"index.html": "24a93bfc28f123c6bfcf3f286b44be83",
"/": "24a93bfc28f123c6bfcf3f286b44be83",
"main.dart.js": "2b1a83f78a8cd6f751042754fce8ff68",
"manifest.json": "1bd8a2096c709610452fb785bd0492f2",
"novidades.json": "8a0fee1c486e8f922e2f0bbdd8c512ca",
"privacidade.html": "fac11710f4a3e34d18510ceb155232fa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "afab9e97e5ee7da4cf4a57c8f4f856f5",
"version.json": "34c7c19d631b1dd1225481516af2507e"};
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
