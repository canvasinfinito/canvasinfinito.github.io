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
"capturas/vitrine-agenda-janela-claro.png": "b47e1999fcfbdedecbd19f574f7653b8",
"capturas/vitrine-agenda-janela-claro.webp": "ba4de43c419b9795868e6c2e5e5e7af1",
"capturas/vitrine-agenda-janela-escuro.png": "42525624457c371a1e40a927b877cff5",
"capturas/vitrine-agenda-janela-escuro.webp": "78ded7edb7a415525d80748a5fa6a67a",
"capturas/vitrine-arquivos-celular-claro.png": "282e5bf0dfa2ec0425c0642f602c208d",
"capturas/vitrine-arquivos-celular-claro.webp": "e4b6e6d23bd59145606b708c9887b37d",
"capturas/vitrine-arquivos-celular-escuro.png": "1692e96e4e82e90c9770ae85846b254f",
"capturas/vitrine-arquivos-celular-escuro.webp": "943f63e37888f4ad7f4a1a8914a3f26c",
"capturas/vitrine-arquivos-janela-claro.png": "f5bfbb63c1228cc24326cde306fb2032",
"capturas/vitrine-arquivos-janela-claro.webp": "32efde7ff1b09120ad454dba44fa1ae1",
"capturas/vitrine-arquivos-janela-escuro.png": "e144cc8d826dbe2dea280bb1043921fe",
"capturas/vitrine-arquivos-janela-escuro.webp": "f6ac6402af3bcd0fd60252fbf908d3e0",
"capturas/vitrine-chat-celular-claro.png": "507496e34124d17669447e573b4b8a3c",
"capturas/vitrine-chat-celular-claro.webp": "3ef1bc1af4f07ffd50bc8cede7d205c0",
"capturas/vitrine-chat-celular-escuro.png": "f127c6aa01221be70ad14503a65b92b0",
"capturas/vitrine-chat-celular-escuro.webp": "6c4f33dd882c97e23aef0d2398ad4a23",
"capturas/vitrine-chat-janela-claro.png": "6d19e3b2fc0e80688941470859083804",
"capturas/vitrine-chat-janela-claro.webp": "4d5dcff68ec12f7d68a3614ffc694b5d",
"capturas/vitrine-chat-janela-escuro.png": "e4f99d2b7a366e527e2f71dbfaf74ab4",
"capturas/vitrine-chat-janela-escuro.webp": "bab369e4cf4efd486343f5c4cae4c8a9",
"capturas/vitrine-clientes-celular-claro.png": "306f57a9a5d119bac7c662c369baf9ca",
"capturas/vitrine-clientes-celular-claro.webp": "6918b78eb317c71458e58c6bfa8f9133",
"capturas/vitrine-clientes-celular-escuro.png": "3f0a9206fbebc54e4c62df4d6568ee4e",
"capturas/vitrine-clientes-celular-escuro.webp": "c22ae2c9efa61e02f5718a483ba20c02",
"capturas/vitrine-clientes-janela-claro.png": "cc29922c3b17b3db0f651ab709a78bf9",
"capturas/vitrine-clientes-janela-claro.webp": "786914c180a4e5cf257f8720d6658cb1",
"capturas/vitrine-clientes-janela-escuro.png": "52212685216528b8155c3fea39a2f2a3",
"capturas/vitrine-clientes-janela-escuro.webp": "aed4036106467f2402abf587062895fd",
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
"capturas/vitrine-financas-janela-claro.png": "0f12c579f0ec660a13128e252fc37893",
"capturas/vitrine-financas-janela-claro.webp": "c6f5cb8e01b62d737b1927c14b8500e6",
"capturas/vitrine-financas-janela-escuro.png": "3c3fceee02d1f377dd12820b312c1578",
"capturas/vitrine-financas-janela-escuro.webp": "906fae100614c57ae4d81857647f2ae6",
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
"capturas/vitrine-kanban-janela-claro.png": "16f6be2c237e5b116dc812d01ce95c9f",
"capturas/vitrine-kanban-janela-claro.webp": "5e9a4342f04ceb5db3ea7e9d5d324eb5",
"capturas/vitrine-kanban-janela-escuro.png": "3d7239ebde25245aeb0e0054087f5080",
"capturas/vitrine-kanban-janela-escuro.webp": "5768578352587f5a9def45a72d7ea0d6",
"capturas/vitrine-livre-celular-claro.png": "d6c3ce5178f5b098d9f133ad032658c0",
"capturas/vitrine-livre-celular-claro.webp": "790df668cf8c0b949393f0e9610093bb",
"capturas/vitrine-livre-celular-escuro.png": "8d599fb8a2cdd6d75abea6cc7213337a",
"capturas/vitrine-livre-celular-escuro.webp": "40652e170c37e69f8fc074ad6bdf0cfa",
"capturas/vitrine-livre-janela-claro.png": "f75b525b845852e10fb8f59576f852e1",
"capturas/vitrine-livre-janela-claro.webp": "fe341dbc5abcbe398cfaa69e05480c93",
"capturas/vitrine-livre-janela-escuro.png": "abb572d0b8ee154dbfd20aa8fdb62c7c",
"capturas/vitrine-livre-janela-escuro.webp": "b2c6614d2eaa529fb4d90b169326db78",
"capturas/vitrine-metas-celular-claro.png": "601872de38662c26c8fa3a0efb8a8ef5",
"capturas/vitrine-metas-celular-claro.webp": "2c319e0d68cb05831cf6614d8232d691",
"capturas/vitrine-metas-celular-escuro.png": "2fc95a5298f2b2862ef13268dd81c73c",
"capturas/vitrine-metas-celular-escuro.webp": "b1616b73caef9e4daf1c14e7850b657d",
"capturas/vitrine-metas-janela-claro.png": "772e06a2a3626b900835ce746fcfa3ef",
"capturas/vitrine-metas-janela-claro.webp": "73ae18005e02115c3208a2acb960d697",
"capturas/vitrine-metas-janela-escuro.png": "dcd0f0fb42199d6fec4fb242fcd3740c",
"capturas/vitrine-metas-janela-escuro.webp": "8976be8d35566f8f7f956bbd4688400d",
"capturas/vitrine-notas-celular-claro.png": "927021a9271e249a9a4ebb42eb5e68c8",
"capturas/vitrine-notas-celular-claro.webp": "38e1e469ecee5c3264c0aee3d1b47456",
"capturas/vitrine-notas-celular-escuro.png": "cf52deb6316db681b64cb1e1f41fd7bb",
"capturas/vitrine-notas-celular-escuro.webp": "a4e26dbe8fc7dd4162dabd8cf6c10c42",
"capturas/vitrine-notas-janela-claro.png": "327a7249e58be36b4604f456a57783d5",
"capturas/vitrine-notas-janela-claro.webp": "df066298088a0d3550f238d812163b09",
"capturas/vitrine-notas-janela-escuro.png": "b5b35b052ab362f8492bbe5c54475624",
"capturas/vitrine-notas-janela-escuro.webp": "80172bcb0effa034abd89b5c716e7b4c",
"capturas/vitrine-pedidos-celular-claro.png": "2d95069ecf2b54cbd381fccd467f8138",
"capturas/vitrine-pedidos-celular-claro.webp": "6d797936ba55098ce54ca03124ef31fc",
"capturas/vitrine-pedidos-celular-escuro.png": "451d5f44709d18deb28785bc62b475d9",
"capturas/vitrine-pedidos-celular-escuro.webp": "691a2ce02a9d5443b251d644451bec2f",
"capturas/vitrine-pedidos-janela-claro.png": "3798b3831bcb92b75aabdbb0fa7041c5",
"capturas/vitrine-pedidos-janela-claro.webp": "3a88c5cf32bd90609953b528996dbf4a",
"capturas/vitrine-pedidos-janela-escuro.png": "e79ca613973c8cbe6e7db66fb728c105",
"capturas/vitrine-pedidos-janela-escuro.webp": "f147fb7cb358ad455fec52400e7d395d",
"capturas/vitrine-projetos-celular-claro.png": "de61a57a82174fdbb7f54574483e37f8",
"capturas/vitrine-projetos-celular-claro.webp": "d97af0fa3a27440a8da4c091ac8a783a",
"capturas/vitrine-projetos-celular-escuro.png": "f2b9402fd2494590dde5862068905462",
"capturas/vitrine-projetos-celular-escuro.webp": "1f3b2ae32e8a738e56301e138a43ce46",
"capturas/vitrine-projetos-janela-claro.png": "c3044911bae2ac04c62cb73232b47a45",
"capturas/vitrine-projetos-janela-claro.webp": "92442e6e313a8738f749bf3e8f9c6937",
"capturas/vitrine-projetos-janela-escuro.png": "7499643d9f102710364210b71812f132",
"capturas/vitrine-projetos-janela-escuro.webp": "7472cdee40aa530618193a088e6ff7db",
"capturas/vitrine-tarefas-celular-claro.png": "cae9dc3a7e442a661df47c7127e35732",
"capturas/vitrine-tarefas-celular-claro.webp": "117e97d0cabd037abef8b5a318f6162c",
"capturas/vitrine-tarefas-celular-escuro.png": "4d8d8ee3c1c771df0ef4f7193a652d68",
"capturas/vitrine-tarefas-celular-escuro.webp": "7278c05413bf70d02c1abf0ee21633f2",
"capturas/vitrine-tarefas-janela-claro.png": "f07fa425e5cd9e7431c43f995ab85cb7",
"capturas/vitrine-tarefas-janela-claro.webp": "d922734ffea3a8a45270993906974e31",
"capturas/vitrine-tarefas-janela-escuro.png": "94fc57cde7f94c57b57b82bc01c45344",
"capturas/vitrine-tarefas-janela-escuro.webp": "c3ad300eaf782592f8ef9b68551d09aa",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "39e8910ff83d659cd8b41eabd4bb98c3",
"favicon.ico": "121284774efb56e63c397d0146468eee",
"favicon.png": "757cef3f7e6ac7d658dca3845dede7a8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "30d20080b743b61a6375635c4cacecf2",
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
"index.html": "0398b77fdfb445a312579acfeabe310d",
"/": "0398b77fdfb445a312579acfeabe310d",
"main.dart.js": "c841bd91b4fd0abeaa74a30e1d5bf770",
"manifest.json": "1bd8a2096c709610452fb785bd0492f2",
"novidades.json": "a4d68ea5160127579a64981d443f10e0",
"privacidade.html": "fac11710f4a3e34d18510ceb155232fa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "afab9e97e5ee7da4cf4a57c8f4f856f5",
"version.json": "f5ffc1dd552c1cd32310a35daa877b9a"};
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
