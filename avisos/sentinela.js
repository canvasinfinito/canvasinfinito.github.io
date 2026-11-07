/*
 * Canvas Infinito — Sentinela de avisos (service worker)
 * ======================================================
 *
 * No navegador, o service worker é o único código que continua existindo
 * depois que a aba é fechada. Ele é a nossa Sentinela na web: guarda a fila de
 * avisos num banco local (IndexedDB) e mostra o aviso na hora marcada.
 *
 * O que ele consegue e o que não consegue — dito sem enfeite:
 *
 *  ✔ aba aberta ....... avisa sempre, na hora
 *  ✔ aba fechada, navegador aberto ....... avisa (o navegador nos acorda)
 *  ✔ instalado como aplicativo (PWA) ..... avisa com mais folga, porque o
 *                                          navegador mantém o worker elegível
 *  ✘ navegador totalmente fechado ........ ninguém executa nada; só um
 *                                          servidor de push resolveria, e isso
 *                                          exigiria uma conta e um servidor
 *
 * Escopo próprio (`/avisos/`) de propósito: o Flutter já registra um service
 * worker em `/` para funcionar offline, e dois workers não podem dividir o
 * mesmo escopo. Um worker fora do escopo da página continua podendo mostrar
 * notificações e trocar mensagens — é só não controlar a navegação.
 */

const VERSAO = '2';
const NOME_DB = 'canvas-infinito-avisos';
const LOJA = 'avisos';

/** Um aviso muito atrasado é ruído, não lembrete. Doze horas é o limite. */
const TOLERANCIA_MS = 12 * 60 * 60 * 1000;

/** Só um cronômetro por vez: o próximo aviso a vencer. */
let cronometro = null;

// ─────────────────────────────────────────────
// BANCO LOCAL
// ─────────────────────────────────────────────

function abrirBanco() {
  return new Promise((ok, erro) => {
    const req = indexedDB.open(NOME_DB, 1);
    req.onupgradeneeded = () => {
      const banco = req.result;
      if (!banco.objectStoreNames.contains(LOJA)) {
        banco.createObjectStore(LOJA, { keyPath: 'id' });
      }
    };
    req.onsuccess = () => ok(req.result);
    req.onerror = () => erro(req.error);
  });
}

async function lerTodos() {
  try {
    const banco = await abrirBanco();
    return await new Promise((ok, erro) => {
      const pedido = banco.transaction(LOJA, 'readonly').objectStore(LOJA).getAll();
      pedido.onsuccess = () => ok(pedido.result || []);
      pedido.onerror = () => erro(pedido.error);
    });
  } catch (e) {
    return [];
  }
}

/**
 * Substitui a fila pela que o app mandou, mas **preserva os recibos**: se este
 * worker já entregou um aviso, ele continua marcado como entregue. É isso que
 * impede o mesmo aviso de aparecer duas vezes quando o app reabre e reenvia a
 * fila.
 */
async function mesclar(avisos) {
  const anteriores = await lerTodos();
  const entregues = new Map();
  for (const a of anteriores) {
    if (a && a.id && a.entregueEm) entregues.set(a.id, a.entregueEm);
  }
  try {
    const banco = await abrirBanco();
    await new Promise((ok, erro) => {
      const tx = banco.transaction(LOJA, 'readwrite');
      const loja = tx.objectStore(LOJA);
      loja.clear();
      for (const a of avisos) {
        if (!a || !a.id) continue;
        const antigo = entregues.get(a.id);
        loja.put(antigo ? Object.assign({}, a, { entregueEm: antigo }) : a);
      }
      tx.oncomplete = () => ok();
      tx.onerror = () => erro(tx.error);
    });
  } catch (e) {
    /* Banco indisponível (modo privado, cota): segue sem persistir. */
  }
  return Array.from(entregues.keys());
}

async function assinarRecibo(id) {
  try {
    const banco = await abrirBanco();
    await new Promise((ok) => {
      const tx = banco.transaction(LOJA, 'readwrite');
      const loja = tx.objectStore(LOJA);
      const pedido = loja.get(id);
      pedido.onsuccess = () => {
        const a = pedido.result;
        if (a) {
          a.entregueEm = new Date().toISOString();
          loja.put(a);
        }
      };
      tx.oncomplete = () => ok();
      tx.onerror = () => ok();
    });
  } catch (e) {
    /* idem */
  }
}

// ─────────────────────────────────────────────
// O TRABALHO
// ─────────────────────────────────────────────

function urlDoEscopo(relativo) {
  try {
    return new URL(relativo, self.registration.scope).href;
  } catch (e) {
    return relativo;
  }
}

/** Mostra os avisos vencidos e assina o recibo de cada um. */
async function conferir() {
  const agora = Date.now();
  const lista = await lerTodos();
  const disparados = [];

  for (const a of lista) {
    if (!a || !a.id || a.entregueEm) continue;
    const quando = Date.parse(a.quando);
    if (isNaN(quando)) continue;
    if (quando > agora) continue;
    if (quando < agora - TOLERANCIA_MS) continue;
    try {
      await self.registration.showNotification(a.titulo || 'Canvas Infinito', {
        body: a.corpo || 'Abra o Canvas Infinito para ver os detalhes.',
        tag: 'canvas-aviso-' + a.id,
        icon: urlDoEscopo('../icons/Icon-192.png'),
        badge: urlDoEscopo('../icons/Icon-192.png'),
        renotify: false,
        requireInteraction: false,
        data: { id: a.id },
      });
      await assinarRecibo(a.id);
      disparados.push(a.id);
    } catch (e) {
      /* Permissão revogada no meio do caminho: nada a fazer aqui. */
    }
  }

  agendarProximo(lista);
  if (disparados.length) await contarAoApp(disparados);
  return disparados;
}

/**
 * Marca o próximo despertar. O teto de 5 minutos é intencional: enquanto o
 * worker estiver vivo ele reconfere de tempo em tempo, e se o navegador o
 * encerrar (o que é normal), o próximo evento que o acordar já reconfere.
 */
function agendarProximo(lista) {
  if (cronometro) {
    clearTimeout(cronometro);
    cronometro = null;
  }
  const agora = Date.now();
  let proximo = Infinity;
  for (const a of lista) {
    if (!a || a.entregueEm) continue;
    const quando = Date.parse(a.quando);
    if (!isNaN(quando) && quando > agora && quando < proximo) proximo = quando;
  }
  if (proximo === Infinity) return;
  const espera = Math.min(proximo - agora + 400, 5 * 60 * 1000);
  cronometro = setTimeout(() => {
    conferir();
  }, espera);
}

/** Conta ao app o que foi entregue, para o histórico ficar honesto. */
async function contarAoApp(ids) {
  try {
    const clientes = await self.clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    });
    const recado = JSON.stringify({ tipo: 'entregues', ids: ids, versao: VERSAO });
    for (const c of clientes) c.postMessage(recado);
  } catch (e) {
    /* Nenhuma janela aberta: o app descobre na próxima vez que enviar a fila. */
  }
}

function responder(evento, objeto) {
  const recado = JSON.stringify(objeto);
  try {
    if (evento.ports && evento.ports[0]) evento.ports[0].postMessage(recado);
  } catch (e) {
    /* sem porta de resposta */
  }
  try {
    if (evento.source && evento.source.postMessage) {
      evento.source.postMessage(recado);
      return;
    }
  } catch (e) {
    /* sem remetente */
  }
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => {
    for (const c of cs) c.postMessage(recado);
  });
}

// ─────────────────────────────────────────────
// TUDO O QUE ACORDA O WORKER
// ─────────────────────────────────────────────

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    (async () => {
      try {
        await self.clients.claim();
      } catch (e) {
        /* fora do escopo da página: normal, e não impede notificar */
      }
      await conferir();
    })(),
  );
});

self.addEventListener('message', (evento) => {
  let recado = null;
  try {
    recado = typeof evento.data === 'string' ? JSON.parse(evento.data) : evento.data;
  } catch (e) {
    return;
  }
  if (!recado || !recado.tipo) return;

  if (recado.tipo === 'fila') {
    evento.waitUntil(
      (async () => {
        const jaEntregues = await mesclar(recado.avisos || []);
        const agora = await conferir();
        responder(evento, {
          tipo: 'recibos',
          ids: jaEntregues.concat(agora),
          versao: VERSAO,
        });
      })(),
    );
    return;
  }
  if (recado.tipo === 'conferir') {
    evento.waitUntil(conferir());
    return;
  }
  if (recado.tipo === 'ping') {
    responder(evento, { tipo: 'pong', versao: VERSAO });
  }
});

// Sincronização periódica: no Chrome/Edge, um app instalado ganha despertares
// de fundo. É o que mais aproxima a web do comportamento nativo.
self.addEventListener('periodicsync', (evento) => {
  if (evento.tag === 'canvas-avisos') evento.waitUntil(conferir());
});

self.addEventListener('sync', (evento) => {
  if (evento.tag === 'canvas-avisos') evento.waitUntil(conferir());
});

// Qualquer push acorda o worker — aproveitamos a carona para reconferir.
self.addEventListener('push', (evento) => {
  evento.waitUntil(conferir());
});

self.addEventListener('notificationclick', (evento) => {
  evento.notification.close();
  const dados = evento.notification.data || {};
  evento.waitUntil(
    (async () => {
      const recado = JSON.stringify({ tipo: 'abrir', id: dados.id || '' });
      const clientes = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });
      for (const c of clientes) {
        if ('focus' in c) {
          try {
            c.postMessage(recado);
          } catch (e) {
            /* janela morrendo */
          }
          return c.focus();
        }
      }
      return self.clients.openWindow(urlDoEscopo('../'));
    })(),
  );
});
