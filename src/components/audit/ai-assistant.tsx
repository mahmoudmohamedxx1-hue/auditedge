"use client"

import { useEffect } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { AnimatePresence, motion } from "framer-motion"
import { Sparkles } from "lucide-react"

/** Floating AI-tutor launcher (v25).
 *
 *  The learner asked for the tutor to open the FULL chat page by default —
 *  so every entry point (this floating button, Alt+T, and the lesson
 *  "Ask the tutor" buttons) now lands on the full AI page instead of the
 *  old corner popup. The full page keeps the conversation rail, model
 *  picker, thinking panel and voice tools; lesson context set right
 *  before opening carries over automatically. */
export function AiAssistant() {
  const view = useAppStore((s) => s.view)
  const lang = useAppStore((s) => s.lang)

  // Alt+T opens the full tutor page from anywhere
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "t" || e.key === "T") && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        useAppStore.getState().openTutor()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // the launcher hides on the full AI page itself
  if (view === "ai") return null

  return (
    <AnimatePresence>
      <motion.button
        key="ai-launcher"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        onClick={() => useAppStore.getState().openTutor()}
        className="fixed bottom-5 end-5 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop transition-all hover:scale-105 hover:ring-4 hover:ring-primary/20 focus-ring"
        aria-label={tt("ai.openTutor", lang)}
        title={`${tt("ai.openTutor", lang)} (Alt+T)`}
      >
        <Sparkles className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sage text-[8px] font-bold text-white ring-2 ring-background">
          AI
        </span>
      </motion.button>
    </AnimatePresence>
  )
}
