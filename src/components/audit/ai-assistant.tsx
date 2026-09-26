"use client"

import { useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { useAiChat, type AiImageAttachment } from "@/hooks/use-ai-chat"
import { prepareImage } from "@/lib/image-attach"
import { Markdown } from "./markdown"
import { StatusLine } from "./ai-tutor"
import { SpeakButton } from "./speak-button"
import { MicButton } from "./mic-button"
import { AutoSpeaker } from "./auto-speaker"
import { ModelPicker } from "./model-picker"
import { VoicePicker } from "./voice-picker"
import { stopAllTts } from "@/lib/tts-playback"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { ArrowUp, FolderOpen, Globe, ImagePlus, Maximize2, Sparkles, Square, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { tt } from "@/lib/i18n"

/** Floating AI tutor — available on every view beside the full AI tab. */
export function AiAssistant() {
  const view = useAppStore((s) => s.view)
  const aiContext = useAppStore((s) => s.aiContext)
  const open = useAppStore((s) => s.aiPopupOpen)
  const closeAiPopup = useAppStore((s) => s.closeAiPopup)
  const navigate = useAppStore((s) => s.navigate)
  const setAiConversationId = useAppStore((s) => s.setAiConversationId)
  const lang = useAppStore((s) => s.lang)

  const chat = useAiChat()
  const [input, setInput] = useState("")
  const [forceSearch, setForceSearch] = useState(false)
  const [attachment, setAttachment] = useState<AiImageAttachment | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const aiModel = useAppStore((s) => s.aiModel)
  // automatic read-aloud honors the same persisted pref as the full tutor
  const aiAutoSpeak = useAppStore((s) => s.aiAutoSpeak)
  const [speakSignal, setSpeakSignal] = useState<{ nonce: number; text: string } | null>(null)

  const data = useAppStore((s) => s.data)

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        const el = scrollRef.current
        if (el) el.scrollTop = el.scrollHeight
      }, 50)
      return () => clearTimeout(t)
    }
  }, [open])

  const lastMsg = chat.messages[chat.messages.length - 1]
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lastMsg?.content, chat.status, chat.messages.length, open])

  // don't render on the full AI tab
  if (view === "ai") return null

  const contextCourse = aiContext?.courseId
    ? data?.courses.find((c) => c.id === aiContext.courseId)
    : undefined
  const contextLesson = contextCourse?.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.id === aiContext?.lessonId)

  const chips = contextLesson
    ? [tt("ai.stExplainSimple", lang), tt("ai.stTakeaways", lang), tt("ai.stQuizMe", lang)]
    : lang === "ar"
      ? [tt("ai.stEgyptReg", lang), tt("ai.stPracticeQ", lang), tt("ai.stMateriality", lang)]
      : ["What's new in Egyptian audit regulation?", "Give me one practice question", "Explain ISA 320 materiality"]

  const submit = async (text?: string) => {
    const content = (text ?? input).trim()
    if ((!content && !attachment) || chat.busy) return
    const image = attachment
    setInput("")
    setAttachment(null)
    stopAllTts() // a new question interrupts any playing answer
    const res = await chat.send(
      content || tt("ai.imgFallbackQ", lang),
      aiContext,
      { model: aiModel, forceSearch, image }
    )
    if (res.ok && res.text?.trim() && aiAutoSpeak) {
      setSpeakSignal({ nonce: Date.now(), text: res.text })
    }
  }

  const pickImage = async (file: File | undefined) => {
    if (!file) return
    const res = await prepareImage(file)
    if (res.ok) {
      setAttachment(res.attachment)
      return
    }
    if (res.reason === "type") {
      toast.error(lang === "ar" ? "صيغة الصورة غير مدعومة" : "Unsupported image format")
    } else if (res.reason === "size") {
      toast.error(lang === "ar" ? "الصورة كبيرة جدًا (الحد 12 ميجابايت)" : "Image too large (max 12MB)")
    } else {
      toast.error(lang === "ar" ? "تعذر قراءة الصورة" : "Could not read this image")
    }
  }

  const expandToFullChat = () => {
    // keep any in-flight speech playing — the full tutor picks up the thread
    if (chat.conversationId) setAiConversationId(chat.conversationId)
    closeAiPopup()
    navigate("ai")
  }

  return (
    <>
      {/* automatic answer reading — same pipeline + voice as the tutor */}
      <AutoSpeaker signal={speakSignal} />

      {/* floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            onClick={() => useAppStore.getState().openAiPopup()}
            className="fixed bottom-5 end-5 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop transition-all hover:scale-105 hover:ring-4 hover:ring-primary/20 focus-ring"
            aria-label={tt("ai.openTutor", lang)}
            title={`${tt("ai.openTutor", lang)} (Alt+T)`}
          >
            <Sparkles className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sage text-[8px] font-bold text-white ring-2 ring-background">
              AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* popup panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label={tt("ai.title", lang)}
            className="fixed bottom-4 end-4 z-50 flex h-[min(72vh,560px)] w-[min(calc(100vw-2rem),400px)] flex-col overflow-hidden rounded-2xl border bg-card shadow-pop sm:bottom-6 sm:end-6"
          >
            {/* header */}
            <div className="flex items-center gap-2.5 border-b bg-secondary/40 px-3.5 py-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <div className="text-[13.5px] font-semibold">{tt("ai.title", lang)}</div>
                <div dir="auto" className="truncate text-[10.5px] text-muted-foreground">
                  {contextLesson
                    ? `${tt("ai.context", lang)} ${contextLesson.title}`
                    : tt("ai.askAnything", lang)}
                </div>
              </div>
              <ModelPicker lang={lang} variant="chip" />
              <button
                onClick={expandToFullChat}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
                aria-label={tt("ai.openFull", lang)}
                title={tt("ai.openFullTitle", lang)}
              >
                <Maximize2 className="h-4 w-4" />
              </button>
              <button
                onClick={closeAiPopup}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
                aria-label={tt("ai.closeTutor", lang)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-3.5 py-4 scroll-thin">
              {chat.messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center px-2 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                    <Sparkles className="h-[22px] w-[22px] text-primary" />
                  </div>
                  <p className="mt-4 text-[13.5px] font-medium">
                    {tt("ai.hi", lang)} {data?.user?.name?.split(" ")[0] ?? tt("ai.there", lang)} 👋
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                    {tt("ai.popupIntro", lang)}
                  </p>
                  <div className="mt-5 flex w-full flex-col gap-1.5">
                    {chips.map((c) => (
                      <button
                        key={c}
                        dir="auto"
                        onClick={() => void submit(c)}
                        className="group flex items-center gap-2 rounded-xl border bg-card/60 px-3 py-2.5 text-start text-[12px] leading-snug text-foreground/80 transition-all hover:-translate-y-px hover:border-primary/35 hover:text-foreground hover:shadow-soft focus-ring"
                      >
                        <Sparkles className="h-3 w-3 shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                        <span className="min-w-0 flex-1">{c}</span>
                        <ArrowUp className="h-3 w-3 shrink-0 rotate-45 text-muted-foreground/40 transition-all group-hover:text-primary rtl:-rotate-45" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {chat.messages.map((m, i) =>
                    m.role === "user" ? (
                      <div key={m.id} className="flex justify-end">
                        <div
                          dir="auto"
                          className="max-w-[88%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary/[0.08] px-3.5 py-2 text-[13px] leading-relaxed text-foreground/85 ring-1 ring-primary/10"
                        >
                          {m.content}
                        </div>
                      </div>
                    ) : (
                      <div key={m.id} className="min-w-0">
                        {m.sources.length > 0 && (
                          <div className="mb-2 flex flex-wrap gap-1">
                            {m.sources.map((s, si) => (
                              <a
                                key={si}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex max-w-[180px] items-center gap-1 rounded-full border bg-secondary/60 px-2 py-0.5 text-[10px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
                                title={s.name}
                              >
                                {s.host_name === "Office Library" ? (
                                  <FolderOpen className="h-2.5 w-2.5 shrink-0 text-primary/70" />
                                ) : (
                                  <Globe className="h-2.5 w-2.5 shrink-0 text-primary/70" />
                                )}
                                <span className="truncate">[{si + 1}] {s.host_name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                        {m.content ? (
                          <div>
                            <Markdown content={m.content} className="text-[13px]" />
                            <div className="mt-1">
                              <SpeakButton text={m.content} className="p-0.5" />
                            </div>
                          </div>
                        ) : (
                          chat.busy &&
                          i === chat.messages.length - 1 && (
                            <StatusLine status={chat.status} query={chat.searchQuery} scope={chat.searchScope} />
                          )
                        )}
                      </div>
                    )
                  )}
                  {chat.error && (
                    <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-[12px] text-destructive">
                      {chat.error}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* composer */}
            <div className="border-t p-2.5">
              <div className="rounded-xl border bg-background p-1.5 transition-colors focus-within:border-primary/40">
                {/* image attachment preview */}
                {attachment && (
                  <div className="mb-1 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/[0.04] p-1.5">
                    <img src={attachment.thumb} alt="" className="h-9 w-9 rounded-md border object-cover" />
                    <p className="min-w-0 flex-1 truncate text-[11px] font-medium">
                      {tt("ai.imgAttached", lang)}
                    </p>
                    <button
                      type="button"
                      onClick={() => setAttachment(null)}
                      aria-label={tt("ai.removeImage", lang)}
                      className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-ring"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => {
                    void pickImage(e.target.files?.[0])
                    e.target.value = ""
                  }}
                />
                <Textarea
                  dir="auto"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      void submit()
                    }
                  }}
                  placeholder={tt("ai.askShortPh", lang)}
                  className="max-h-[110px] min-h-[38px] resize-none border-0 bg-transparent p-1.5 text-[13px] leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0"
                  rows={1}
                />
                <div className="flex items-center justify-between gap-1.5 px-1 pb-0.5">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      aria-label={tt("ai.attach", lang)}
                      title={tt("ai.attachHint", lang)}
                      className={cn(
                        "inline-flex h-7 w-7 items-center justify-center rounded-full border transition-colors focus-ring",
                        attachment
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <ImagePlus className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setForceSearch((v) => !v)}
                      aria-pressed={forceSearch}
                      title={forceSearch ? tt("ai.webOn", lang) : tt("ai.webAuto", lang)}
                      className={cn(
                        "inline-flex h-7 w-7 items-center justify-center rounded-full border transition-colors focus-ring",
                        forceSearch
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <Globe className="h-3.5 w-3.5" />
                    </button>
                    <MicButton
                      compact
                      onTranscript={(t) => setInput((prev) => (prev ? prev.trim() + " " + t : t))}
                    />
                    <VoicePicker lang={lang} variant="icon" />
                  </div>
                  {chat.busy ? (
                    <Button size="sm" variant="outline" onClick={chat.stop} className="h-7 gap-1 text-[11.5px]">
                      <Square className="h-2.5 w-2.5 fill-current" /> {tt("ai.stop", lang)}
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => void submit()}
                      disabled={!input.trim() && !attachment}
                      className="h-7 w-7 rounded-full p-0"
                      aria-label={tt("ai.send", lang)}
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>
              {chat.messages.length > 0 && (
                <button
                  onClick={() => {
                    void chat.load(null)
                    chat.setMessages([])
                  }}
                  className="mt-1.5 w-full text-center text-[10.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
                >
                  {tt("ai.clearConversation", lang)}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
