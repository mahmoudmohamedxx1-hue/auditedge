"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { useAiChat, useAiConversations, type AiImageAttachment } from "@/hooks/use-ai-chat"
import { Markdown } from "./markdown"
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
import type { AiChatMessage } from "@/lib/audit-types"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  AudioLines,
  BookOpen,
  Check,
  Copy,
  FolderOpen,
  Globe,
  History,
  ImagePlus,
  Loader2,
  MessageSquarePlus,
  Sparkles,
  Square,
  Trash2,
  Volume2,
  X,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { tt } from "@/lib/i18n"

/** Downscale an image file for the vision model (max 1024px) + a small
 *  thumbnail (max 160px) persisted with the conversation history. */
async function prepareImage(file: File): Promise<AiImageAttachment | null> {
  const img = await new Promise<HTMLImageElement | null>((resolve) => {
    const url = URL.createObjectURL(file)
    const el = new Image()
    el.onload = () => {
      URL.revokeObjectURL(url)
      resolve(el)
    }
    el.onerror = () => {
      URL.revokeObjectURL(url)
      resolve(null)
    }
    el.src = url
  })
  if (!img) return null

  const draw = (source: HTMLImageElement, max: number, quality: number) => {
    const scale = Math.min(1, max / Math.max(source.width, source.height))
    const w = Math.max(1, Math.round(source.width * scale))
    const h = Math.max(1, Math.round(source.height * scale))
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    canvas.getContext("2d")?.drawImage(source, 0, 0, w, h)
    return canvas.toDataURL("image/jpeg", quality)
  }

  return { dataUrl: draw(img, 1024, 0.85), thumb: draw(img, 160, 0.7) }
}

/** Full-page AI tutor — the chat fills the whole viewport:
 *  a conversation rail on the left (desktop) and an edge-to-edge chat column. */
export function AiTutor() {
  const data = useAppStore((s) => s.data)
  const aiContext = useAppStore((s) => s.aiContext)
  const setAiContext = useAppStore((s) => s.setAiContext)
  const setAiConversationId = useAppStore((s) => s.setAiConversationId)
  const lang = useAppStore((s) => s.lang)

  const { conversations, refresh, remove } = useAiConversations()
  const chat = useAiChat({ conversationsRefresh: refresh })
  const [input, setInput] = useState("")
  const [forceSearch, setForceSearch] = useState(false)
  const [forceLibrary, setForceLibrary] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [atBottom, setAtBottom] = useState(true)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [attachment, setAttachment] = useState<AiImageAttachment | null>(null)
  // voice: automatic answer reading (persisted pref) + hands-free conversation
  // mode (session-only — the mic must never surprise-open after a reload)
  const aiAutoSpeak = useAppStore((s) => s.aiAutoSpeak)
  const setAiAutoSpeak = useAppStore((s) => s.setAiAutoSpeak)
  const [handsFree, setHandsFree] = useState(false)
  const handsFreeRef = useRef(false)
  handsFreeRef.current = handsFree
  const [speakSignal, setSpeakSignal] = useState<{ nonce: number; text: string } | null>(null)
  const [micSignal, setMicSignal] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const aiModel = useAppStore((s) => s.aiModel)

  // restore the conversation opened from the popup
  const popupConversationId = useAppStore((s) => s.aiConversationId)
  const aiPresetQuestion = useAppStore((s) => s.aiPresetQuestion)
  const setAiPresetQuestion = useAppStore((s) => s.setAiPresetQuestion)
  useEffect(() => {
    if (popupConversationId && chat.conversationId !== popupConversationId) {
      void chat.load(popupConversationId)
      setAiConversationId(null)
    }
    // question sent over from the Audit Program — pre-fill the composer
    if (aiPresetQuestion) {
      const q = aiPresetQuestion
      setAiPresetQuestion(null)
      requestAnimationFrame(() => {
        setInput(q)
        textareaRef.current?.focus()
      })
    }
  }, [])

  // track whether the reader is at the bottom of the transcript
  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setAtBottom(el.scrollHeight - el.scrollTop - el.clientHeight < 90)
  }, [])

  // auto-scroll while streaming — only if the reader hasn't scrolled up
  const lastMsg = chat.messages[chat.messages.length - 1]
  useEffect(() => {
    if (!atBottom) return
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lastMsg?.content, chat.status, chat.messages.length, atBottom])

  const scrollToBottom = () => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
    setAtBottom(true)
  }

  // auto-grow composer
  const autoGrow = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`
  }, [])

  const contextCourse = useMemo(
    () =>
      aiContext?.courseId
        ? data?.courses.find((c) => c.id === aiContext.courseId)
        : undefined,
    [aiContext, data?.courses]
  )
  const contextLesson = useMemo(() => {
    if (!aiContext?.lessonId || !contextCourse) return undefined
    return contextCourse.modules
      .flatMap((m) => m.lessons)
      .find((l) => l.id === aiContext.lessonId)
  }, [aiContext, contextCourse])

  const starters = contextLesson
    ? [
        lang === "ar"
          ? `اشرح درس «${contextLesson.title}" ببساطة`
          : `Explain the lesson "${contextLesson.title}" in simple terms`,
        tt("ai.stQuizMe", lang),
        tt("ai.stExamPoints", lang),
        tt("ai.stFieldExample", lang),
      ]
    : lang === "ar"
      ? [
          "اشرح تقييم المخاطر في معيار المراجعة الدولي 315 (2019) كأنني مبتدئ",
          "ما الجديد في معايير المراجعة والتنظيم المصري؟",
          "اختبرني في الاستمرارية وفق ISA 570",
          "اشرح محاسبة التأجير وفق IFRS 16 بمثال قيود يومية",
          "اشرح مثلث التزييف بمثال واقعي",
          "Explain ISA 315 (2019) risk assessment like I'm new to auditing",
        ]
      : [
          "Explain ISA 315 (2019) risk assessment like I'm new to auditing",
          "What's new in Egyptian auditing standards and regulation?",
          "Quiz me on going concern under ISA 570",
          "اشرح معيار المراجعة المصري 570 الخاص بالاستمرارية",
          "Walk me through IFRS 16 lease accounting with a journal-entry example",
          "Explain the fraud triangle with a real-world example",
        ]

  const submit = async (text?: string) => {
    const content = (text ?? input).trim()
    if ((!content && !attachment) || chat.busy) return
    const image = attachment
    setInput("")
    setAttachment(null)
    if (textareaRef.current) textareaRef.current.style.height = "auto"
    setAtBottom(true)
    // a new question interrupts whatever answer is still being read aloud
    stopAllTts()
    const res = await chat.send(
      content || (lang === "ar" ? "حلل هذه الصورة." : "Analyze this image."),
      aiContext,
      {
        forceSearch,
        forceLibrary,
        model: aiModel,
        image,
      }
    )
    // automatic read-aloud: speak the finished answer (voice from the picker)
    if (res.ok && res.text?.trim() && (aiAutoSpeak || handsFree)) {
      setSpeakSignal({ nonce: Date.now(), text: res.text })
    }
  }

  const pickImage = async (file: File | undefined) => {
    if (!file) return
    if (!/^image\/(png|jpe?g|webp|gif)$/i.test(file.type)) {
      toast.error(lang === "ar" ? "صيغة الصورة غير مدعومة" : "Unsupported image format")
      return
    }
    if (file.size > 12 * 1024 * 1024) {
      toast.error(lang === "ar" ? "الصورة كبيرة جدًا (الحد 12 ميجابايت)" : "Image too large (max 12MB)")
      return
    }
    const prepared = await prepareImage(file)
    if (prepared) setAttachment(prepared)
  }

  const newConversation = () => {
    stopAllTts()
    void chat.load(null)
    setAiConversationId(null)
    setHistoryOpen(false)
    setAtBottom(true)
  }

  /** A spoken answer just finished — in hands-free mode, open the mic for
   *  the next question (also after a TTS failure, so the loop never stalls;
   *  but not when another playback took over — the user is busy elsewhere). */
  const onSpeakDone = (completed: boolean, hadError: boolean) => {
    if (handsFreeRef.current && (completed || hadError)) {
      setMicSignal((n) => n + 1)
    }
  }

  const copyMessage = async (m: AiChatMessage) => {
    try {
      await navigator.clipboard.writeText(m.content)
      setCopiedId(m.id)
      setTimeout(() => setCopiedId(null), 1600)
    } catch {
      toast.error(tt("ai.copyBlocked", lang))
    }
  }

  const ConversationList = (
    <div className="space-y-1">
      {conversations === null ? (
        <div className="space-y-2 px-2 pt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-9 animate-pulse rounded-lg bg-secondary/60" />
          ))}
        </div>
      ) : conversations.length === 0 ? (
        <p className="px-3 pt-3 text-[12px] leading-relaxed text-muted-foreground">
          {tt("ai.noConversations", lang)}
        </p>
      ) : (
        conversations.map((c) => (
          <div key={c.id} className="group relative">
            <button
              onClick={() => {
                stopAllTts()
                void chat.load(c.id)
                setHistoryOpen(false)
                setAtBottom(true)
              }}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 pr-8 text-left transition-colors focus-ring",
                chat.conversationId === c.id
                  ? "bg-card font-medium text-foreground shadow-soft ring-1 ring-border"
                  : "text-foreground/70 hover:bg-secondary/70"
              )}
            >
              <MessageSquarePlus className="h-3.5 w-3.5 shrink-0 rotate-45 text-muted-foreground" />
              <span dir="auto" className="min-w-0 truncate text-[12.5px]">
                {c.title}
              </span>
            </button>
            <button
              aria-label={`Delete ${c.title}`}
              onClick={async () => {
                await remove(c.id)
                if (chat.conversationId === c.id) void chat.load(null)
                toast.success(tt("ai.deleted", lang))
              }}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive focus-ring lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))
      )}
    </div>
  )

  return (
    <div className="flex h-full min-h-0">
      {/* conversation rail (desktop) */}
      <aside className="hidden w-[264px] shrink-0 flex-col border-r bg-sidebar/40 lg:flex">
        <div className="flex h-14 shrink-0 items-center border-b px-3">
          <Button
            variant="outline"
            size="sm"
            onClick={newConversation}
            className="h-9 w-full justify-start gap-2 bg-card"
          >
            <MessageSquarePlus className="h-4 w-4" /> {tt("ai.newConversation", lang)}
          </Button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2 scroll-thin">
          {ConversationList}
        </div>
        <p className="flex items-center gap-1.5 border-t px-4 py-3 text-[10.5px] leading-relaxed text-muted-foreground">
          <Sparkles className="h-3 w-3 shrink-0 text-primary" /> {tt("ai.poweredBy", lang)}
        </p>
      </aside>

      {/* chat column */}
      <section className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        {/* header */}
        <div className="flex h-14 shrink-0 items-center gap-3 border-b px-4 sm:px-6">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-[17px] font-semibold leading-tight tracking-tight">
              {tt("ai.title", lang)}
            </h1>
            <p className="truncate text-[11.5px] text-muted-foreground">
              {tt("ai.subtitle", lang)}
            </p>
          </div>
          {/* voice controls: automatic answer reading + hands-free conversation */}
          <button
            type="button"
            onClick={() => setAiAutoSpeak(!aiAutoSpeak)}
            disabled={handsFree}
            aria-pressed={aiAutoSpeak || handsFree}
            aria-label={aiAutoSpeak || handsFree ? tt("ai.autoReadOn", lang) : tt("ai.autoReadOff", lang)}
            title={
              handsFree
                ? tt("ai.voiceChatHint", lang)
                : aiAutoSpeak
                  ? tt("ai.autoReadOn", lang)
                  : tt("ai.autoReadOff", lang)
            }
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors focus-ring",
              aiAutoSpeak || handsFree
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              handsFree && "opacity-60"
            )}
          >
            <Volume2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              const next = !handsFree
              setHandsFree(next)
              // leaving voice mode stops any playing answer; the mic stops
              // itself because the key change remounts (and cleans up) it
              if (!next) stopAllTts()
            }}
            aria-pressed={handsFree}
            aria-label={handsFree ? tt("ai.voiceChatOn", lang) : tt("ai.voiceChatOff", lang)}
            title={handsFree ? tt("ai.voiceChatOn", lang) : tt("ai.voiceChatHint", lang)}
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors focus-ring",
              handsFree
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <AudioLines className={cn("h-4 w-4", handsFree && "animate-pulse")} />
          </button>
          <ModelPicker lang={lang} />
          <VoicePicker lang={lang} />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setHistoryOpen(true)}
            className="h-8 gap-1.5 lg:hidden"
          >
            <History className="h-3.5 w-3.5" /> {tt("ai.history", lang)}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={newConversation}
            className="hidden h-8 gap-1.5 lg:flex"
          >
            <MessageSquarePlus className="h-3.5 w-3.5" /> {tt("ai.newShort", lang)}
          </Button>
        </div>

        {/* context chip */}
        {aiContext && (contextCourse || contextLesson) && (
          <div className="flex shrink-0 items-center gap-2 border-b bg-secondary/40 px-4 py-2 sm:px-6">
            <BookOpen className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="min-w-0 flex-1 truncate text-[12px] text-muted-foreground">
              {tt("ai.studying", lang)}{" "}
              <span className="font-medium text-foreground">
                {contextCourse?.code}
                {contextLesson ? ` — ${contextLesson.title}` : ` — ${contextCourse?.title}`}
              </span>{" "}
              · {tt("ai.contextNote", lang)}
            </span>
            <button
              onClick={() => setAiContext(null)}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
              aria-label={tt("ai.clearContext", lang)}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* messages */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="min-h-0 flex-1 overflow-y-auto scroll-thin"
        >
          {chat.messages.length === 0 ? (
            <div className="mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-4 py-10 text-center sm:px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-5 font-serif text-[22px] font-semibold tracking-tight">
                {tt("ai.greeting", lang)} {data?.user?.name?.split(" ")[0] ?? tt("ai.there", lang)}
              </h2>
              <p className="mt-2 max-w-[440px] text-[13.5px] leading-relaxed text-muted-foreground">
                {tt("ai.intro", lang)}
              </p>
              <div className="mt-7 grid w-full gap-2 sm:grid-cols-2">
                {starters.map((s) => (
                  <button
                    key={s}
                    dir="auto"
                    onClick={() => void submit(s)}
                    className="group flex items-center gap-2 rounded-xl border bg-card/60 px-3.5 py-3 text-start text-[12.5px] leading-snug text-foreground/80 transition-all hover:-translate-y-px hover:border-primary/35 hover:bg-card hover:text-foreground hover:shadow-soft focus-ring"
                  >
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary/60 transition-colors group-hover:text-primary" />
                    <span className="min-w-0 flex-1">{s}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary rtl:rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-6">
              {chat.messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={m.id} className="flex flex-col items-end gap-1.5">
                    {m.imageUrl && (
                       
                      <img
                        src={m.imageUrl}
                        alt={lang === "ar" ? "صورة مرفقة" : "Attached image"}
                        className="max-h-44 max-w-[85%] rounded-xl border object-cover"
                      />
                    )}
                    {m.content && (
                      <div
                        dir="auto"
                        className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-primary/[0.08] px-4 py-2.5 text-[14px] leading-relaxed text-foreground/85 ring-1 ring-primary/10"
                      >
                        {m.content}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={m.id} className="group/msg min-w-0">
                    {m.notice && (
                      <p className="mb-2 rounded-lg border border-gold/35 bg-gold/[0.08] px-3 py-1.5 text-[11.5px] leading-relaxed text-gold-deep">
                        ⚠ {m.notice}
                      </p>
                    )}
                    {m.sources.length > 0 && (
                      <div className="mb-2.5 flex flex-wrap gap-1.5">
                        {m.sources.map((s, si) => (
                          <a
                            key={si}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex max-w-[240px] items-center gap-1.5 rounded-full border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground focus-ring"
                            title={s.name}
                          >
                            {s.host_name === "Office Library" ? (
                              <FolderOpen className="h-3 w-3 shrink-0 text-primary/70" />
                            ) : (
                              <Globe className="h-3 w-3 shrink-0 text-primary/70" />
                            )}
                            <span className="truncate">[{si + 1}] {s.host_name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                    {m.content ? (
                      <div className="relative">
                        {m.modelUsed && m.modelUsed !== "sdk" && (
                          <span className="mb-1.5 inline-block rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[9.5px] font-medium text-primary">
                            {m.modelUsed}
                          </span>
                        )}
                        <Markdown content={m.content} />
                        <div className="absolute -right-9 top-0 hidden flex-col gap-1 opacity-0 transition-opacity group-hover/msg:opacity-100 focus-within:opacity-100 lg:flex rtl:-right-auto rtl:-left-9">
                          <button
                            onClick={() => void copyMessage(m)}
                            aria-label={tt("ai.copyAnswer", lang)}
                            title={tt("ai.copyAnswer", lang)}
                            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring focus:opacity-100"
                          >
                            {copiedId === m.id ? (
                              <Check className="h-3.5 w-3.5 text-sage" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                          <SpeakButton text={m.content} />
                        </div>
                        {/* touch/mobile: inline actions */}
                        <div className="mt-1.5 flex gap-1 lg:hidden">
                          <button
                            onClick={() => void copyMessage(m)}
                            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
                          >
                            {copiedId === m.id ? <Check className="h-3 w-3 text-sage" /> : <Copy className="h-3 w-3" />}
                            {copiedId === m.id ? tt("ai.copied", lang) : tt("ai.copy", lang)}
                          </button>
                          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] text-muted-foreground">
                            <SpeakButton text={m.content} className="p-0" /> {tt("ai.listen", lang)}
                          </span>
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
                <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13px] text-destructive">
                  {chat.error}
                </p>
              )}
            </div>
          )}
        </div>

        {/* scroll-to-bottom (while streaming / long transcripts) */}
        <AnimatePresence>
          {!atBottom && chat.messages.length > 0 && (
            <motion.button
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.16 }}
              onClick={scrollToBottom}
              className="absolute bottom-[132px] left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border bg-card text-foreground shadow-pop transition-colors hover:bg-secondary focus-ring"
              aria-label={tt("ai.scrollLatest", lang)}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* composer */}
        <div className="shrink-0 border-t bg-card/40 px-4 py-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-2xl border bg-card p-2 shadow-soft transition-colors focus-within:border-primary/40">
              {/* image attachment preview */}
              {attachment && (
                <div className="mb-1 flex items-center gap-2.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-2">
                  { }
                  <img
                    src={attachment.thumb}
                    alt=""
                    className="h-12 w-12 rounded-lg border object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-medium">
                      {lang === "ar" ? "صورة مرفقة — ستُقرأ بنموذج الرؤية GLM-4.6V Flash" : "Image attached — will be read by the GLM-4.6V Flash vision model"}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {lang === "ar" ? "اسأل عن أي شيء في الصورة: مستند، شاشة، جدول…" : "Ask anything about it: a document, a screen, a table…"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAttachment(null)}
                    aria-label={lang === "ar" ? "إزالة الصورة" : "Remove image"}
                    className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-ring"
                  >
                    <X className="h-4 w-4" />
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
                ref={textareaRef}
                dir="auto"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  autoGrow()
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    void submit()
                  }
                }}
                placeholder={tt("ai.askPh", lang)}
                className="max-h-[200px] min-h-[44px] resize-none border-0 bg-transparent p-2 text-[14px] leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0"
                rows={1}
              />
              <div className="flex items-center justify-between gap-2 px-1 pb-0.5 pt-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    aria-label={lang === "ar" ? "إرفاق صورة" : "Attach image"}
                    title={lang === "ar" ? "إرفاق صورة (نموذج الرؤية)" : "Attach an image (vision model)"}
                    className={cn(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full border transition-colors focus-ring",
                      attachment
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <ImagePlus className="h-3.5 w-3.5" />
                  </button>
                  <MicButton
                    key={handsFree ? "hands-free" : "manual"}
                    autoStartSignal={micSignal}
                    onTranscript={(t) => {
                      if (handsFreeRef.current) {
                        // hands-free: the transcribed question goes straight out
                        void submit(t)
                      } else {
                        setInput((prev) => (prev ? prev.trim() + " " + t : t))
                        requestAnimationFrame(() => textareaRef.current?.focus())
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setForceSearch((v) => !v)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] transition-colors focus-ring",
                      forceSearch
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-pressed={forceSearch}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {forceSearch ? tt("ai.webOn", lang) : tt("ai.webAuto", lang)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setForceLibrary((v) => !v)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] transition-colors focus-ring",
                      forceLibrary
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-pressed={forceLibrary}
                    title={tt("ai.libHint", lang)}
                  >
                    <FolderOpen className="h-3.5 w-3.5" />
                    {forceLibrary ? tt("ai.libOn", lang) : tt("ai.libAuto", lang)}
                  </button>
                </div>
                {chat.busy ? (
                  <Button size="sm" variant="outline" onClick={chat.stop} className="h-8 gap-1.5">
                    <Square className="h-3 w-3 fill-current" /> {tt("ai.stop", lang)}
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={() => void submit()}
                    disabled={!input.trim() && !attachment}
                    className="h-8 w-8 rounded-full p-0"
                    aria-label={tt("ai.send", lang)}
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
            <p className="mt-2 px-1 text-[10.5px] text-muted-foreground">
              {tt("ai.disclaimer", lang)}
            </p>
          </div>
        </div>
      </section>

      {/* automatic answer reading (+ hands-free mic loop) — renders nothing */}
      <AutoSpeaker signal={speakSignal} onDone={onSpeakDone} />

      {/* mobile history sheet */}
      <AnimatePresence>
        {historyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm lg:hidden"
            onClick={() => setHistoryOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 bottom-3 max-h-[70vh] overflow-y-auto rounded-2xl border bg-card p-3 shadow-pop scroll-thin"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-[13px] font-semibold">{tt("ai.conversations", lang)}</span>
                <div className="flex gap-1.5">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={newConversation}
                    className="h-8 gap-1.5"
                  >
                    <MessageSquarePlus className="h-3.5 w-3.5" /> {tt("ai.newShort", lang)}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setHistoryOpen(false)}
                    className="h-8 gap-1.5"
                  >
                    <X className="h-3.5 w-3.5" /> {tt("ai.close", lang)}
                  </Button>
                </div>
              </div>
              {ConversationList}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function StatusLine({
  status,
  query,
  scope,
}: {
  status: string
  query: string | null
  scope?: "web" | "library" | null
}) {
  const lang = useAppStore((s) => s.lang)
  if (status === "searching") {
    return (
      <div dir="auto" className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
        <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
        {scope === "library" ? tt("ai.searchingLib", lang) : tt("ai.searchingWeb", lang)}
        {query ? ` — “${query.slice(0, 60)}”` : ""}…
      </div>
    )
  }
  if (status === "writing") {
    return (
      <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
        <span className="inline-block h-4 w-[2px] animate-pulse rounded bg-primary" />
      </div>
    )
  }
  return (
    <div className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:120ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:240ms]" />
      </span>
      {tt("ai.thinking", lang)}
    </div>
  )
}
