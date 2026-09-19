"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { CloudOff, RefreshCw } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"

/** PWA plumbing for offline fieldwork mode (improvement #10):
 *  - registers the service worker in production builds
 *  - offers a reload when a new version is waiting
 *  - shows an honest offline pill so the team knows what works without a signal */
export function PwaProvider() {
  const lang = useAppStore((s) => s.lang)
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    // online/offline indicator (both states)
    const sync = () => setOffline(!navigator.onLine)
    sync()
    window.addEventListener("online", sync)
    window.addEventListener("offline", sync)
    return () => {
      window.removeEventListener("online", sync)
      window.removeEventListener("offline", sync)
    }
  }, [])

  useEffect(() => {
    // service workers are a footgun in dev (stale caches over HMR) — prod only
    if (process.env.NODE_ENV !== "production") return
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return

    let reg: ServiceWorkerRegistration | undefined

    const onWaiting = (waiting: ServiceWorker | null) => {
      if (!waiting) return
      // read the language lazily so the registration effect stays mount-only
      const l = useAppStore.getState().lang
      toast(tt("pwa.updateTitle", l), {
        icon: <RefreshCw className="h-4 w-4" />,
        description: tt("pwa.updateDesc", l),
        action: {
          label: tt("pwa.reload", l),
          onClick: () => void waiting.postMessage("SKIP_WAITING"),
        },
        duration: 12_000,
      })
      waiting.addEventListener("statechange", () => {
        if (waiting.state === "activated") window.location.reload()
      })
    }

    void navigator.serviceWorker
      .register("/sw.js")
      .then((r) => {
        reg = r
        onWaiting(r.waiting)
        r.addEventListener("updatefound", () => {
          const nw = r.installing
          nw?.addEventListener("statechange", () => {
            if (nw.state === "installed") onWaiting(r.waiting ?? nw)
          })
        })
      })
      .catch((e) => console.warn("sw registration failed", e))
  }, [])

  return (
    <AnimatePresence>
      {offline && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-4 start-4 z-40 flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-3.5 py-2 text-[11.5px] font-medium text-gold-deep shadow-pop print:hidden"
          role="status"
        >
          <CloudOff className="h-3.5 w-3.5" />
          {tt("pwa.offline", lang)}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
