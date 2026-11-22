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
"capturas/a-home-na-janela.png": "c2dd2ea5ffded357faee810a6a71a7ee",
"capturas/a-home-no-celular.png": "202eac5586dfef55721cdae01160aaa0",
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
"capturas/apps/pessoas-claro.webp": "524d455aa41da8565f6aa1e1ec28afd8",
"capturas/apps/pessoas.webp": "905c98ae8feef4d28a2feccffea0e3dc",
"capturas/apps/tarefas-claro.webp": "4ddf72249852af6d87e70b1cfc356a15",
"capturas/apps/tarefas.webp": "4149b35fab7820c0aed346568f4e285a",
"capturas/vitrine-agenda-celular-claro.png": "8f397bb6497312611df1e6ffd088f975",
"capturas/vitrine-agenda-celular-claro.webp": "cb12f29791523fee99d3137d8bac9ed0",
"capturas/vitrine-agenda-celular-escuro.png": "c8551abdd074c5206ddcad95c7b9d770",
"capturas/vitrine-agenda-celular-escuro.webp": "656c0e96be78145d9d3d1781737587bc",
"capturas/vitrine-agenda-janela-claro.png": "08e1a193720f9ff8b0d28fe6216a41c8",
"capturas/vitrine-agenda-janela-claro.webp": "1bd972ddd58939ad587fa7f021db7523",
"capturas/vitrine-agenda-janela-escuro.png": "4fd57349aa734ff9e9c01ab4f26f55e5",
"capturas/vitrine-agenda-janela-escuro.webp": "ffe9908f37f7a15ac83f5bbdf270d37c",
"capturas/vitrine-arquivos-celular-claro.png": "73d2a70fe910ed309e1463f9f8b68cb0",
"capturas/vitrine-arquivos-celular-claro.webp": "27a31fe93dffbc042517453e84833f23",
"capturas/vitrine-arquivos-celular-escuro.png": "cfc9d45df959f998192a651b2eca52ba",
"capturas/vitrine-arquivos-celular-escuro.webp": "d6e4c62fbdd875349283317718c04c68",
"capturas/vitrine-arquivos-janela-claro.png": "e7d29ea86690a492e5698374d5f8832c",
"capturas/vitrine-arquivos-janela-claro.webp": "ebe0aa32dce2b5e69afe11c54f239752",
"capturas/vitrine-arquivos-janela-escuro.png": "bc90bb43715966d80ca8c756f55af91d",
"capturas/vitrine-arquivos-janela-escuro.webp": "766440a62055732c27fed807d8909a47",
"capturas/vitrine-chat-celular-claro.png": "1dac84a3a9f5f932822c78a12f4ac169",
"capturas/vitrine-chat-celular-claro.webp": "8e6fda37bc41eb9a73615c768746bf41",
"capturas/vitrine-chat-celular-escuro.png": "4befa068039a430e433f29b6286a4988",
"capturas/vitrine-chat-celular-escuro.webp": "ba3d6342c99fc530a039863198afcc59",
"capturas/vitrine-chat-janela-claro.png": "62dab86b8c51efd670dc9093e61965c2",
"capturas/vitrine-chat-janela-claro.webp": "96ceb5c0778607c19b97f45abeeded7e",
"capturas/vitrine-chat-janela-escuro.png": "39d0891e22acc342e8ccbdd73b65efd8",
"capturas/vitrine-chat-janela-escuro.webp": "8be106c8bdf2d0ece48385ecb402d2ec",
"capturas/vitrine-clientes-celular-claro.png": "7713a0719f5d33cfd54f3fd825ed32ef",
"capturas/vitrine-clientes-celular-claro.webp": "c95ba99103ebe3c2c18be9b1c5eb5163",
"capturas/vitrine-clientes-celular-escuro.png": "3e7b3f148d2f5452098b6992ce216f8a",
"capturas/vitrine-clientes-celular-escuro.webp": "36b3242b3c1495ddddd8f99205bb5e73",
"capturas/vitrine-clientes-janela-claro.png": "9d544f038424ac5fb74c8a00e7b7a0c7",
"capturas/vitrine-clientes-janela-claro.webp": "558f5011438b412e68e1b70a3832c84c",
"capturas/vitrine-clientes-janela-escuro.png": "a9404e69b6e2839a88b43764f57f3fe5",
"capturas/vitrine-clientes-janela-escuro.webp": "2b13683d033cae9d558c05e31cfd8966",
"capturas/vitrine-compras-celular-claro.png": "c53b6c443444b0db0aef00fb842a50b0",
"capturas/vitrine-compras-celular-claro.webp": "56e87cccdaaf0e3dd67754413b77b1fc",
"capturas/vitrine-compras-celular-escuro.png": "273d15117842fb6789b0f732f38fc71c",
"capturas/vitrine-compras-celular-escuro.webp": "48d5a48d96a2199dceb02c4e1e167e83",
"capturas/vitrine-compras-janela-claro.png": "2096f29a4d998906394e1d72e270fb00",
"capturas/vitrine-compras-janela-claro.webp": "8c639335b934e46c0620cef8ebfff2f1",
"capturas/vitrine-compras-janela-escuro.png": "485535d5a3fea1efda0479c18c58f3cb",
"capturas/vitrine-compras-janela-escuro.webp": "52bdac5932343781b83363059df83086",
"capturas/vitrine-financas-caixa-celular-claro.png": "c8cb165e7faf25af1e6ec53e2b152ab4",
"capturas/vitrine-financas-caixa-celular-claro.webp": "e8ec3323c040d9c8e855848f0334359e",
"capturas/vitrine-financas-caixa-celular-escuro.png": "afac855d3a44a82adbc8e8397b9c9636",
"capturas/vitrine-financas-caixa-celular-escuro.webp": "db8dcfd833e15f29262bafae8a898dc4",
"capturas/vitrine-financas-caixa-janela-claro.png": "b675a377d12df91e2eedad3e188c7d50",
"capturas/vitrine-financas-caixa-janela-claro.webp": "f6598cdd10ef9b0554d47dcd69249d33",
"capturas/vitrine-financas-caixa-janela-escuro.png": "bea0b3be19912a19d25636af36597c6e",
"capturas/vitrine-financas-caixa-janela-escuro.webp": "2eb40c7ff23a3d629b8284cbf723c3ca",
"capturas/vitrine-financas-celular-claro.png": "340d309a96f1efac6d4981b267d7b1f6",
"capturas/vitrine-financas-celular-claro.webp": "93205bd9de3b87491feb037110efbb00",
"capturas/vitrine-financas-celular-escuro.png": "644ed8fd856b2b3a42d3de31d6cdcef0",
"capturas/vitrine-financas-celular-escuro.webp": "afc02fb7fc1232409b01f17daa7871cb",
"capturas/vitrine-financas-janela-claro.png": "8b75314995ccb64768174b964a0cdae5",
"capturas/vitrine-financas-janela-claro.webp": "889c03f63c0cadb32198f895a1b2f2fc",
"capturas/vitrine-financas-janela-escuro.png": "f3041ebcbd875b3c26d2725d8e1442f1",
"capturas/vitrine-financas-janela-escuro.webp": "49bbf0195ab11efa4f5bb931b1839b5c",
"capturas/vitrine-home-celular-claro.png": "7f84713982c700930b535fad16090246",
"capturas/vitrine-home-celular-claro.webp": "d4f8974cf861f0e8a8244624a9d1bb4b",
"capturas/vitrine-home-celular-escuro.png": "1a39c21a6bef54b9beefa5960d73a045",
"capturas/vitrine-home-celular-escuro.webp": "4e54b07f820350513f42fdb1e42f7fa0",
"capturas/vitrine-home-corporativo-celular-claro.png": "7f43753a426aa791c60a0933a4299eff",
"capturas/vitrine-home-corporativo-celular-claro.webp": "425706c2f41189617648d517c6a9325a",
"capturas/vitrine-home-corporativo-celular-escuro.png": "652f45ef923828c41775f131ed848b58",
"capturas/vitrine-home-corporativo-celular-escuro.webp": "1e7aceb41b587fda544cf3cbdb8069a8",
"capturas/vitrine-home-corporativo-janela-claro.png": "4be0a8b8eb55ae4feccba4a877e5e90a",
"capturas/vitrine-home-corporativo-janela-claro.webp": "21da76e73edbfd02a4d8610dbee63857",
"capturas/vitrine-home-corporativo-janela-escuro.png": "77b7e45ec8eb432d08281d876c9b2694",
"capturas/vitrine-home-corporativo-janela-escuro.webp": "aa0cbda7b0efcea420f6bcace274010b",
"capturas/vitrine-home-janela-claro.png": "4a70b5d526a56b51005ea4f4d03945e6",
"capturas/vitrine-home-janela-claro.webp": "f01fa5461c8433aa6239359d426acd07",
"capturas/vitrine-home-janela-escuro.png": "9e3cbfcf992ebc918b8aea5b553cce19",
"capturas/vitrine-home-janela-escuro.webp": "ece5bcc7a45e4567723fded6bdb2a296",
"capturas/vitrine-kanban-celular-claro.png": "9bd3e793e1d58adbeff8f3078b15db06",
"capturas/vitrine-kanban-celular-claro.webp": "4c7cdea63644324b047ed03f95e95e54",
"capturas/vitrine-kanban-celular-escuro.png": "60dce5f53da9933e65b2eb342e8bc65b",
"capturas/vitrine-kanban-celular-escuro.webp": "78a6e10b71416f25f711d0190c79d770",
"capturas/vitrine-kanban-janela-claro.png": "34e1fcee7aad315ea9c015e26d03b1c4",
"capturas/vitrine-kanban-janela-claro.webp": "3eb645a5b98eb89c540dd1de137cf7f2",
"capturas/vitrine-kanban-janela-escuro.png": "01b23c34fa76a7b62838837fa0518317",
"capturas/vitrine-kanban-janela-escuro.webp": "15138f96868be7748f61ad100f085a7f",
"capturas/vitrine-livre-celular-claro.png": "26d6a8c93d34608598cabb98aa44cf98",
"capturas/vitrine-livre-celular-claro.webp": "89b88e4df5d10ae00bc359ed9eeaad86",
"capturas/vitrine-livre-celular-escuro.png": "4adc852f70ac16883914f7581dd2c8b6",
"capturas/vitrine-livre-celular-escuro.webp": "9754cdcefd4e004512e394b948ab1077",
"capturas/vitrine-livre-janela-claro.png": "92ea8eee820b5bd688dcfc9b3aa68249",
"capturas/vitrine-livre-janela-claro.webp": "ced6631439252001564210c0df35ea95",
"capturas/vitrine-livre-janela-escuro.png": "cfc39f7ad5bbcbff19a9ee0637088bb3",
"capturas/vitrine-livre-janela-escuro.webp": "607f46b7cca4077e5721a691a79bbb38",
"capturas/vitrine-metas-celular-claro.png": "077e02b9c91ce2d16f51de41426dd14e",
"capturas/vitrine-metas-celular-claro.webp": "2610b642004ed54e5678dc1c6031ffaa",
"capturas/vitrine-metas-celular-escuro.png": "23d7782bb35981a63ca3e2d37c0ea3c9",
"capturas/vitrine-metas-celular-escuro.webp": "842b4024065a9d83f0344bac5e3d0277",
"capturas/vitrine-metas-janela-claro.png": "0f3cefcfd9232436f242efaac0066cd0",
"capturas/vitrine-metas-janela-claro.webp": "bd9beba3850247b32b87dec090e7a0dc",
"capturas/vitrine-metas-janela-escuro.png": "c04f256cc2e5f6c6c9d5759b4be5d843",
"capturas/vitrine-metas-janela-escuro.webp": "9b266e18657df6134c78a4fe21cb063c",
"capturas/vitrine-notas-celular-claro.png": "c67da21ea3f74b30e70618d47f5bb851",
"capturas/vitrine-notas-celular-claro.webp": "a691cbfa6fdeb50e35a02ee7f6c91838",
"capturas/vitrine-notas-celular-escuro.png": "e2483d0e1f8954aa98a62ac85878667d",
"capturas/vitrine-notas-celular-escuro.webp": "ec6ebdc8bd873785ba8a609df6ba6943",
"capturas/vitrine-notas-janela-claro.png": "b3c9220bbfd8c204fdc44a48ea2632ec",
"capturas/vitrine-notas-janela-claro.webp": "79533a18f8c1cc1a24b014783f1eb919",
"capturas/vitrine-notas-janela-escuro.png": "2173816bc166825711d5204119899556",
"capturas/vitrine-notas-janela-escuro.webp": "f380594a0c3e6d4ed781e0f8623681b1",
"capturas/vitrine-pedidos-celular-claro.png": "ac82b82680528acd6081901e45c088a6",
"capturas/vitrine-pedidos-celular-claro.webp": "11811bb12b2657e610c738619038836e",
"capturas/vitrine-pedidos-celular-escuro.png": "23501ce8a471d5f3fe78166fb9bcaac1",
"capturas/vitrine-pedidos-celular-escuro.webp": "6bb50f1e21a62a9b05fa0b1b56cd293a",
"capturas/vitrine-pedidos-janela-claro.png": "3a16f864c8959e6c162072d67b532518",
"capturas/vitrine-pedidos-janela-claro.webp": "6c9cb6c9f198651af689f20f4c7bbb89",
"capturas/vitrine-pedidos-janela-escuro.png": "95b9a6f20e0d9de89821caa8eefce85d",
"capturas/vitrine-pedidos-janela-escuro.webp": "00069f58de122236b739dbcd966c2541",
"capturas/vitrine-pessoas-celular-claro.png": "a2f881ea413a08cfc006b7dff9ad8724",
"capturas/vitrine-pessoas-celular-claro.webp": "5cb41838ed960435c85b9ff833618ab8",
"capturas/vitrine-pessoas-celular-escuro.png": "6fdcf5d3ea4b2acb4786af340d727c6d",
"capturas/vitrine-pessoas-celular-escuro.webp": "d47929e397b1dde1f40fc37df83a5c4a",
"capturas/vitrine-pessoas-janela-claro.png": "40138cccb37b8a6cf8b0295c64b34865",
"capturas/vitrine-pessoas-janela-claro.webp": "527071aa994aa223383ec3541f37d93e",
"capturas/vitrine-pessoas-janela-escuro.png": "c46e72e5f0518bf747b32cb89586768b",
"capturas/vitrine-pessoas-janela-escuro.webp": "637306118a3350eb18533fc87365bd04",
"capturas/vitrine-projetos-celular-claro.png": "a789df01a124dbed027439e79b5a2443",
"capturas/vitrine-projetos-celular-claro.webp": "4d0390b2c2badc4c63bf4ec9e535f222",
"capturas/vitrine-projetos-celular-escuro.png": "c62d09c79301868ef64880ca6fb10576",
"capturas/vitrine-projetos-celular-escuro.webp": "43e50d53fe426889aa374d5c0908551f",
"capturas/vitrine-projetos-janela-claro.png": "182ba59430e5e8c76e90e5dee5733cfa",
"capturas/vitrine-projetos-janela-claro.webp": "fc136276583d66ae0402e1f503b98aeb",
"capturas/vitrine-projetos-janela-escuro.png": "9481e1028b763d837d8a28dc0164cc4f",
"capturas/vitrine-projetos-janela-escuro.webp": "fd7586dd479d0f68d5ef9d00b1211900",
"capturas/vitrine-tarefas-celular-claro.png": "9deb109eef3084982be3a253fb446df2",
"capturas/vitrine-tarefas-celular-claro.webp": "222aaf5e1c6f9cd4e3134571a6f6c9d3",
"capturas/vitrine-tarefas-celular-escuro.png": "47af134c1f040500842c8dc52f8ef9ab",
"capturas/vitrine-tarefas-celular-escuro.webp": "f643f08c1d03275cd45ac4f685bf6d4e",
"capturas/vitrine-tarefas-janela-claro.png": "a5e549ca8e1e96db5fda998dbefdf6df",
"capturas/vitrine-tarefas-janela-claro.webp": "1075eca751f0cd1541089ca809982a93",
"capturas/vitrine-tarefas-janela-escuro.png": "64a29335455407bca2c3d5a1c0aa6145",
"capturas/vitrine-tarefas-janela-escuro.webp": "55fbc45d7fd50471d4d2965d0e2ff940",
"documentos.css": "3fdcf8f3957a7eb96d147af42e9b521f",
"drift_worker.dart.js": "3c29e5eab0ee50b4d5f64f569a027535",
"excluir-conta.html": "39e8910ff83d659cd8b41eabd4bb98c3",
"favicon.ico": "121284774efb56e63c397d0146468eee",
"favicon.png": "757cef3f7e6ac7d658dca3845dede7a8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9c35835f8096306ee5b7ecccb93a7ca8",
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
"index.html": "1f0323c69c43516c4d8a0f638b1bc619",
"/": "1f0323c69c43516c4d8a0f638b1bc619",
"main.dart.js": "b0e92eb7a6ce68e30fc1d0a05b4df97d",
"manifest.json": "1bd8a2096c709610452fb785bd0492f2",
"novidades.json": "8a0fee1c486e8f922e2f0bbdd8c512ca",
"privacidade.html": "fac11710f4a3e34d18510ceb155232fa",
"sqlite3.wasm": "2e9fc1ccbb9d15199fccf405b0ceee53",
"termos.html": "afab9e97e5ee7da4cf4a57c8f4f856f5",
"version.json": "c14322106b75f8aa91a980191ad2b56b"};
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
