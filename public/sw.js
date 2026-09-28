/* AuditEdge service worker — offline fieldwork mode (improvement #10).
 *
 * Strategy:
 *  - Precache the app shell so the SPA opens with no network.
 *  - Network-first for the bootstrap API (courses, lessons, library, team):
 *    fresh when online, cached copy when the field has no signal.
 *  - Cache-first for immutable static assets (_next/static) and YouTube
 *    thumbnails.
 *  - Never touch POSTs, the AI chat/tts/asr streams, or other APIs —
 *    generative features are online-only, honestly so.
 */

const VERSION = "auditedge-v23"
const SHELL_CACHE = `${VERSION}-shell`
const DATA_CACHE = `${VERSION}-data`
const ASSET_CACHE = `${VERSION}-assets`

const SHELL_URLS = ["/", "/manifest.webmanifest", "/favicon.png", "/icon-192.png", "/icon-512.png"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE)
      // addAll fails the whole install if one URL fails — add individually
      await Promise.allSettled(SHELL_URLS.map((u) => cache.add(new Request(u, { cache: "reload" }))))
      await self.skipWaiting()
    })()
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))
      await self.clients.claim()
    })()
  )
})

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting()
})

const IMMUTABLE = /_next\/static\//
const THUMBNAIL = /^https:\/\/(i\.ytimg\.com|img\.youtube\.com)\//
const BOOTSTRAP_API = /\/api\/(bootstrap|ai\/conversations|materials)(\/|$|\?)/
const AI_STREAM = /\/api\/ai\/(chat|tts|asr|kam)/

self.addEventListener("fetch", (event) => {
  const req = event.request
  const url = new URL(req.url)

  // only same-origin GETs + YouTube thumbnails are cacheable here
  if (req.method !== "GET") return
  if (AI_STREAM.test(url.pathname)) return // generative: online-only
  const isThumb = THUMBNAIL.test(url.href)
  if (!isThumb && url.origin !== self.location.origin) return

  // static assets & thumbnails: cache-first
  if (IMMUTABLE.test(url.pathname) || isThumb) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(ASSET_CACHE)
        const hit = await cache.match(req)
        if (hit) return hit
        try {
          const res = await fetch(req)
          if (res.ok) cache.put(req, res.clone())
          return res
        } catch {
          return hit ?? Response.error()
        }
      })()
    )
    return
  }

  // page navigations: network first, cached shell offline
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req)
          const cache = await caches.open(SHELL_CACHE)
          if (res.ok) cache.put("/", res.clone())
          return res
        } catch {
          const cache = await caches.open(SHELL_CACHE)
          const shell = (await cache.match("/")) || (await cache.match(req))
          return (
            shell ??
            new Response("Offline and the app shell is not cached yet — go online once, then retry.", {
              status: 503,
              headers: { "Content-Type": "text/plain; charset=utf-8" },
            })
          )
        }
      })()
    )
    return
  }

  // workspace data APIs: network-first, fall back to the last good copy
  if (BOOTSTRAP_API.test(url.pathname)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(DATA_CACHE)
        try {
          const res = await fetch(req)
          if (res.ok) cache.put(req, res.clone())
          return res
        } catch {
          const hit = await cache.match(req)
          if (hit) {
            // tell the page this is stale offline data
            const body = await hit.clone().arrayBuffer()
            return new Response(body, {
              status: 200,
              headers: { ...hit.headers, "X-AuditEdge-Offline": "1" },
            })
          }
          return new Response(JSON.stringify({ error: "offline" }), {
            status: 503,
            headers: { "Content-Type": "application/json" },
          })
        }
      })()
    )
  }
})
