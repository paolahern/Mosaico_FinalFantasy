// Nombre de la caché
const CACHE = "mosaico-cache-v4";

// Archivos que se guardarán para que la app funcione instalada u offline
const archivos = [
"./",
"./index.html",
"./main.js",
"./carga.js",
"./inicio.js",
"./juego.js",

// IMÁGENES
"./1.jpg",
"./2.jpeg",
"./3.jpg",
"./fondo.jpg",
"./icono.png"
];

// Instalación del Service Worker
self.addEventListener("install", (event) => {
event.waitUntil(
caches.open(CACHE).then(cache => cache.addAll(archivos))
);
});

self.addEventListener("fetch", (event) => {

event.respondWith(
fetch(event.request)
.then(response => {

const copia = response.clone();

caches.open(CACHE).then(cache => {
cache.put(event.request, copia);
});

return response;

})
.catch(() => caches.match(event.request))
);
});
