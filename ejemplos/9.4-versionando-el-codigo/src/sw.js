/* eslint-disable no-undef, no-restricted-globals */

// Esperamos al evento "install" para confirmar que el service-worker se ha
// instalado.
self.addEventListener('install', (event) => {
  console.log("El service worker ha sido instalado!");
  // Ya no necesitamos gestionar la caché
});

// No necesitamos Interceptar las peticiones. En su lugar,
// llamamos al método de workbox
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// Evento activate
self.addEventListener('activate', (e) => {
  console.log('activado');
  // Informa al navegador que va a tomar el control
  // del sitio web
  return self.clients.claim();
});

// Evento de mensajes
self.addEventListener('message', (e) => {
  // Comprobamos que la acción sea la de saltar
  // el estado de espera
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
