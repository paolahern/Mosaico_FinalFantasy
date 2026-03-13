// Nombre de la caché
const CACHE = "mosaico-cache-v2";

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
caches.open(CACHE)
.then(cache => cache.addAll(archivos))
);

});

// Intercepta las peticiones y busca primero en caché
self.addEventListener("fetch", (event) => {

event.respondWith(
caches.match(event.request)
.then(res => res || fetch(event.request))
);

});
