const CACHE = "mosaico-cache-v1"

const archivos = [
"/index.html",
  "/main.js",
  "/carga.js",
  "/inicio.js",
  "/juego.js",

  // IMÁGENES
  "/1.jpg",
  "/2.jpeg",
  "/3.jpg",
  "/fondo.jpg",
  "/icono.png"
];

self.addEventListener("install", (event) => {

event.waitUntil(
caches.open(CACHE).then(cache => cache.addAll(archivos))
)
});

self.addEventListener("fetch", (event) => {

event.respondWith(
caches.match(event.request).then(res => res || fetch(event.request))
)

});
