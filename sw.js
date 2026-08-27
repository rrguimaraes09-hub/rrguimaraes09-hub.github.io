/* Service worker mínimo - existe só para o navegador oferecer "instalar o
   app". NÃO guarda nada em cache de propósito: os portais mudam por commit
   e cache aqui já causou dor de cabeça em outros projetos. Tudo passa
   direto para a rede. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => { /* passa direto */ });
