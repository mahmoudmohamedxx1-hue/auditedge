"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { useAiChat, useAiConversations, type AiImageAttachment } from "@/hooks/use-ai-chat"
import { prepareImage } from "@/lib/image-attach"
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
  Brain,
  Check,
  ChevronDown,
  Copy,
  Download,
  FolderOpen,
  Globe,
  GraduationCap,
  History,
  ImagePlus,
  Languages,
  Lightbulb,
  ListChecks,
  Loader2,
  MessageSquarePlus,
  PanelLeftClose,
  PanelLeftOpen,
  Pencil,
  Pin,
  PinOff,
  RefreshCw,
  Search,
  Shapes,
  Sparkles,
  Square,
  Trash2,
  Volume2,
  X,
  type LucideIcon,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { tt } from "@/lib/i18n"
import { describeEngine } from "@/lib/models"

/** A single one-tap follow-up action under the latest tutor answer. */
function FollowUpChip({
  icon: Icon,
  label,
  onClick,
}: {
  icon: LucideIcon
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border bg-card/60 px-2.5 py-1 text-[11.5px] text-foreground/75 transition-all hover:-translate-y-px hover:border-primary/35 hover:bg-card hover:text-foreground hover:shadow-soft focus-ring"
    >
      <Icon className="h-3 w-3 text-primary/70" />
      {label}
    </button>
  )
}

/** Full-page AI tutor — the chat fills the whole viewport:
 *  a conversation rail on the left (desktop) and an edge-to-edge chat column. */
export function AiTutor() {
  const data = useAppStore((s) => s.data)
  const aiContext = useAppStore((s) => s.aiContext)
  const setAiContext = useAppStore((s) => s.setAiContext)
  const setAiConversationId = useAppStore((s) => s.setAiConversationId)
  const lang = useAppStore((s) => s.lang)
  // conversations rail (desktop) — CLOSED by default, persisted (v19.2)
  const tutorRailOpen = useAppStore((s) => s.tutorRailOpen)
  const setTutorRailOpen = useAppStore((s) => s.setTutorRailOpen)

  const { conversations, refresh, remove, rename, setPinned } = useAiConversations()
  const chat = useAiChat({ conversationsRefresh: refresh })
  const [input, setInput] = useState("")
  const [forceSearch, setForceSearch] = useState(false)
  const [forceLibrary, setForceLibrary] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [atBottom, setAtBottom] = useState(true)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [attachment, setAttachment] = useState<AiImageAttachment | null>(null)
  const [convoQuery, setConvoQuery] = useState("")
  // v21: rail management (rename inline, pin) + full-text search + translate
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [translatingId, setTranslatingId] = useState<string | null>(null)
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
  const aiThinking = useAppStore((s) => s.aiThinking)
  const setAiThinking = useAppStore((s) => s.setAiThinking)

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
      content || tt("ai.imgFallbackQ", lang),
      aiContext,
      {
        forceSearch,
        forceLibrary,
        model: aiModel,
        thinking: aiThinking,
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

  /** Re-ask the same question for a fresh answer. The old exchange is
   *  trimmed server-side first (PATCH trimLastExchange) so reloading the
   *  conversation never shows stale duplicates. v21: image questions can't
   *  be regenerated (the attachment is not re-sent) — explain instead of
   *  silently downgrading to a text-only answer. */
  const regenerate = async () => {
    if (chat.busy) return
    const lastUser = [...chat.messages].reverse().find((m) => m.role === "user")
    if (!lastUser) return
    if (lastUser.imageUrl) {
      toast.error(tt("ai.regenNoImage", lang))
      return
    }
    stopAllTts()
    if (chat.conversationId) {
      const trimmed = await fetch(`/api/ai/conversations/${chat.conversationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "trimLastExchange" }),
      }).catch(() => null)
      if (!trimmed?.ok) {
        toast.error(lang === "ar" ? "تعذر إعادة التوليد — حاول مجددًا" : "Could not regenerate — try again")
        return
      }
    }
    // drop the trailing Q/A pair locally, then re-send the same question
    chat.setMessages((prev) => {
      let cut = prev.length
      if (cut > 0 && prev[cut - 1].role === "assistant") cut--
      if (cut > 0 && prev[cut - 1].role === "user") cut--
      return prev.slice(0, cut)
    })
    setAtBottom(true)
    const res = await chat.send(lastUser.content, aiContext, {
      forceSearch,
      forceLibrary,
      model: aiModel,
      thinking: aiThinking,
    })
    if (res.ok && res.text?.trim() && (aiAutoSpeak || handsFree)) {
      setSpeakSignal({ nonce: Date.now(), text: res.text })
    }
  }

  /** Download the current transcript as a Markdown file — study notes the
   *  learner can keep, print or paste into revision docs. */
  const exportMarkdown = () => {
    if (chat.messages.length === 0) {
      toast(tt("ai.exportEmpty", lang))
      return
    }
    const title =
      conversations?.find((c) => c.id === chat.conversationId)?.title ??
      chat.messages.find((m) => m.role === "user")?.content.slice(0, 60) ??
      tt("ai.title", lang)
    const lines = [
      `# ${title}`,
      "",
      `> AuditEdge Academy — ${tt("ai.title", lang)} · ${new Date().toLocaleDateString()}`,
      "",
      ...chat.messages.map((m) =>
        m.role === "user" ? `## ${tt("ai.you", lang)}\n\n${m.content}` : `## ${tt("ai.title", lang)}\n\n${m.content}`
      ),
    ]
    const blob = new Blob([lines.join("\n\n")], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `auditedge-${title.toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "conversation"}.md`
    a.click()
    URL.revokeObjectURL(url)
    toast.success(tt("ai.exported", lang))
  }

  /** Bucket a conversation by recency for the history rail groups. */
  const convoBucket = (iso: string): 0 | 1 | 2 | 3 => {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return 3
    const startOfDay = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime()
    const diffDays = Math.round((startOfDay(new Date()) - startOfDay(d)) / 86400000)
    if (diffDays <= 0) return 0
    if (diffDays === 1) return 1
    if (diffDays <= 7) return 2
    return 3
  }

  const filteredConversations = useMemo(() => {
    if (!conversations) return null
    const q = convoQuery.trim().toLowerCase()
    if (!q) return conversations
    return conversations.filter((c) => c.title.toLowerCase().includes(q))
  }, [conversations, convoQuery])

  // v21: full-text conversation search — once the query is 2+ chars, ask the
  // server to search MESSAGE CONTENT (title matching alone can't answer
  // "where did the tutor explain ECL staging?")
  useEffect(() => {
    const q = convoQuery.trim()
    if (conversations === null) return
    const t = setTimeout(() => {
      if (q.length >= 2 || q.length === 0) void refresh(q)
    }, 350)
    return () => clearTimeout(t)
  }, [convoQuery])

  /** v21: one-tap EN↔AR translation of any tutor answer (toggleable). */
  const translateMessage = async (m: AiChatMessage) => {
    if (translatingId) return
    if (translations[m.id]) {
      setTranslations((prev) => {
        const next = { ...prev }
        delete next[m.id]
        return next
      })
      return
    }
    setTranslatingId(m.id)
    try {
      const res = await fetch("/api/ai/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: m.content, target: lang === "ar" ? "en" : "ar" }),
      })
      const j = (await res.json().catch(() => ({}))) as { translation?: string; error?: string }
      if (!res.ok || !j.translation) throw new Error(j.error || "failed")
      setTranslations((prev) => ({ ...prev, [m.id]: j.translation! }))
    } catch {
      toast.error(tt("ai.translateFailed", lang))
    } finally {
      setTranslatingId(null)
    }
  }

  /** v21: one rail row — open / rename inline / pin / delete. Shared by the
   *  pinned group and every recency bucket (desktop rail + mobile sheet). */
  const convoRow = (c: { id: string; title: string; pinned?: boolean; messageCount: number }) => (
    <div key={c.id} className="group relative">
      {editingId === c.id ? (
        <div className="flex items-center gap-1 px-2 py-1.5">
          <input
            autoFocus
            dir="auto"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                void rename(c.id, editTitle)
                setEditingId(null)
              } else if (e.key === "Escape") {
                setEditingId(null)
              }
            }}
            aria-label={tt("ai.renameTitle", lang)}
            className="h-8 min-w-0 flex-1 rounded-lg border border-primary/40 bg-background px-2 text-[12.5px] text-foreground focus:outline-none"
          />
          <button
            onClick={() => {
              void rename(c.id, editTitle)
              setEditingId(null)
            }}
            aria-label={tt("ai.rename", lang)}
            className="rounded-md p-1.5 text-sage-deep transition-colors hover:bg-sage/10 focus-ring"
          >
            <Check className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setEditingId(null)}
            aria-label={tt("ai.close", lang)}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary focus-ring"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => {
              stopAllTts()
              void chat.load(c.id)
              setHistoryOpen(false)
              setAtBottom(true)
            }}
            title={`${c.title} — ${c.messageCount} ${tt("ai.msgCount", lang)}`}
            className={cn(
              "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 pe-[4.25rem] text-start transition-colors focus-ring",
              chat.conversationId === c.id
                ? "bg-card font-medium text-foreground shadow-soft ring-1 ring-border"
                : "text-foreground/70 hover:bg-secondary/70"
            )}
          >
            {c.pinned ? (
              <Pin className="h-3 w-3 shrink-0 text-gold-deep" />
            ) : (
              <MessageSquarePlus className="h-3.5 w-3.5 shrink-0 rotate-45 text-muted-foreground" />
            )}
            <span dir="auto" className="min-w-0 truncate text-[12.5px]">
              {c.title}
            </span>
            <span className="ms-auto me-1 shrink-0 text-[10px] tabular-nums text-muted-foreground/70">
              {c.messageCount}
            </span>
          </button>
          {/* row actions: rename · pin · delete */}
          <div className="absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center gap-0.5 opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100 lg:focus-within:opacity-100">
            <button
              aria-label={`${tt("ai.rename", lang)}: ${c.title}`}
              title={tt("ai.rename", lang)}
              onClick={() => {
                setEditingId(c.id)
                setEditTitle(c.title)
              }}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
            >
              <Pencil className="h-3 w-3" />
            </button>
            <button
              aria-label={(c.pinned ? tt("ai.unpin", lang) : tt("ai.pin", lang)) + `: ${c.title}`}
              title={c.pinned ? tt("ai.unpin", lang) : tt("ai.pin", lang)}
              onClick={() => void setPinned(c.id, !c.pinned)}
              className={cn(
                "rounded-md p-1 transition-colors focus-ring",
                c.pinned
                  ? "text-gold-deep hover:bg-gold/10"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {c.pinned ? <PinOff className="h-3 w-3" /> : <Pin className="h-3 w-3" />}
            </button>
            <button
              aria-label={`Delete ${c.title}`}
              onClick={async () => {
                await remove(c.id)
                if (chat.conversationId === c.id) void chat.load(null)
                toast.success(tt("ai.deleted", lang))
              }}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-ring"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        </>
      )}
    </div>
  )

  const ConversationList = (
    <div>
      {/* search box — desktop rail + mobile sheet share it */}
      {conversations !== null && conversations.length > 4 && (
        <div className="relative px-2 pb-2 pt-2">
          <Search className="pointer-events-none absolute start-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={convoQuery}
            onChange={(e) => setConvoQuery(e.target.value)}
            placeholder={tt("ai.searchConvos", lang)}
            aria-label={tt("ai.searchConvos", lang)}
            className="h-8 w-full rounded-lg border bg-background/60 ps-8 pe-7 text-[12.5px] text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
          />
          {convoQuery && (
            <button
              onClick={() => setConvoQuery("")}
              aria-label={tt("ai.clearContext", lang)}
              className="absolute end-4 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      )}
      {conversations === null ? (
        <div className="space-y-2 px-2 pt-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-9 animate-pulse rounded-lg bg-secondary/60" />
          ))}
        </div>
      ) : filteredConversations !== null && filteredConversations.length === 0 ? (
        <p className="px-3 pt-3 text-[12px] leading-relaxed text-muted-foreground">
          {convoQuery.trim() ? tt("ai.noConvoMatches", lang) : tt("ai.noConversations", lang)}
        </p>
      ) : (
        <div>
          {/* v21: pinned conversations float above the recency buckets */}
          {(() => {
            const pinned = (filteredConversations ?? []).filter((c) => c.pinned)
            if (!pinned.length) return null
            return (
              <div className="mb-1">
                <div className="flex items-center gap-1.5 px-4 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-gold-deep">
                  <Pin className="h-3 w-3" /> {tt("ai.pinned", lang)}
                </div>
                {pinned.map((c) => convoRow(c))}
              </div>
            )
          })()}
          {([0, 1, 2, 3] as const).map((bucket) => {
          const group = (filteredConversations ?? []).filter((c) => !c.pinned && convoBucket(c.updatedAt) === bucket)
          if (group.length === 0) return null
          return (
            <div key={bucket} className="mb-1">
              <div className="px-4 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/80">
                {bucket === 0
                  ? tt("ai.gToday", lang)
                  : bucket === 1
                    ? tt("ai.gYesterday", lang)
                    : bucket === 2
                      ? tt("ai.gLast7", lang)
                      : tt("ai.gOlder", lang)}
              </div>
              {group.map((c) => convoRow(c))}
            </div>
          )
          })}
        </div>
      )}
    </div>
  )

  return (
    <div className="flex h-full min-h-0">
      {/* conversation rail (desktop) — collapsible, CLOSED by default so
       *  the chat takes the full width until the learner pins it open */}
      <aside
        className={cn(
          "hidden shrink-0 overflow-hidden border-r bg-sidebar/40 transition-[width] duration-200 ease-out lg:flex",
          tutorRailOpen ? "w-[264px]" : "w-0 border-r-0"
        )}
      >
        {/* fixed-width inner column keeps the content from squishing while
            the width animates; inert removes it from tab order when hidden */}
        <div className="flex h-full w-[264px] shrink-0 flex-col" inert={!tutorRailOpen}>
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
        </div>
      </aside>

      {/* chat column */}
      <section className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        {/* header */}
        <div className="flex h-14 shrink-0 items-center gap-3 border-b px-4 sm:px-6">
          {/* conversations rail toggle (desktop) — open/close the history rail */}
          <button
            type="button"
            onClick={() => setTutorRailOpen(!tutorRailOpen)}
            aria-expanded={tutorRailOpen}
            aria-label={tutorRailOpen ? tt("ai.hideConvos", lang) : tt("ai.showConvos", lang)}
            title={tutorRailOpen ? tt("ai.hideConvos", lang) : tt("ai.showConvos", lang)}
            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring lg:inline-flex"
          >
            {tutorRailOpen ? (
              <PanelLeftClose className="h-4 w-4 rtl:rotate-180" />
            ) : (
              <PanelLeftOpen className="h-4 w-4 rtl:rotate-180" />
            )}
          </button>
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
          {/* v22: thinking-process toggle — reasoning engines stream their
              thinking live; off keeps answers snappy */}
          <button
            type="button"
            onClick={() => setAiThinking(!aiThinking)}
            aria-pressed={aiThinking}
            aria-label={aiThinking ? tt("ai.thinkingOn", lang) : tt("ai.thinkingOff", lang)}
            title={aiThinking ? tt("ai.thinkingOn", lang) : tt("ai.thinkingOff", lang)}
            className={cn(
              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors focus-ring",
              aiThinking
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <Brain className="h-4 w-4" />
          </button>
          <ModelPicker lang={lang} />
          <VoicePicker lang={lang} />
          <button
            type="button"
            onClick={exportMarkdown}
            aria-label={tt("ai.exportMd", lang)}
            title={tt("ai.exportMd", lang)}
            disabled={chat.messages.length === 0}
            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring disabled:opacity-40 disabled:hover:bg-transparent lg:inline-flex"
          >
            <Download className="h-4 w-4" />
          </button>
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
                    {m.reasoning?.trim() ? (
                      <ThinkingPanel
                        text={m.reasoning}
                        live={chat.busy && m.id === chat.messages[chat.messages.length - 1]?.id}
                        lang={lang}
                      />
                    ) : null}
                    {m.content ? (
                      <div className="relative">
                        {(() => {
                          const engine = describeEngine(m.engine ?? m.modelUsed)
                          return (
                            <span
                              className={cn(
                                "mb-1.5 inline-block rounded-md px-1.5 py-0.5 font-mono text-[9.5px] font-medium",
                                engine.tone === "keyless"
                                  ? "bg-olive/15 text-olive-deep"
                                  : engine.tone === "key"
                                    ? "bg-primary/10 text-primary"
                                    : "bg-secondary text-muted-foreground"
                              )}
                              dir="ltr"
                            >
                              {engine.label}
                            </span>
                          )
                        })()}
                        <Markdown content={m.content} />
                        {/* v21: toggleable EN↔AR translation of this answer */}
                        {translations[m.id] && (
                          <div className="mt-3 rounded-xl border-s-2 border-gold/50 bg-gold/[0.05] ps-3.5">
                            <div className="flex items-center gap-1.5 pt-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-gold-deep">
                              <Languages className="h-3 w-3" /> {tt("ai.translate", lang)}
                            </div>
                            <div className="pb-1">
                              <Markdown content={translations[m.id]} />
                            </div>
                          </div>
                        )}
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
                          <button
                            onClick={() => void translateMessage(m)}
                            disabled={translatingId !== null}
                            aria-label={tt("ai.translate", lang)}
                            title={tt("ai.translate", lang)}
                            className={cn(
                              "rounded-lg p-1.5 transition-colors focus-ring focus:opacity-100",
                              translations[m.id]
                                ? "text-gold-deep"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                          >
                            {translatingId === m.id ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Languages className="h-3.5 w-3.5" />
                            )}
                          </button>
                          <SpeakButton text={m.content} />
                        </div>
                        {/* touch/mobile: inline actions */}
                        <div className="mt-1.5 flex flex-wrap gap-1 lg:hidden">
                          <button
                            onClick={() => void copyMessage(m)}
                            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
                          >
                            {copiedId === m.id ? <Check className="h-3 w-3 text-sage" /> : <Copy className="h-3 w-3" />}
                            {copiedId === m.id ? tt("ai.copied", lang) : tt("ai.copy", lang)}
                          </button>
                          <button
                            onClick={() => void translateMessage(m)}
                            disabled={translatingId !== null}
                            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
                          >
                            {translatingId === m.id ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <Languages className="h-3 w-3" />
                            )}
                            {tt("ai.translate", lang)}
                          </button>
                          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] text-muted-foreground">
                            <SpeakButton text={m.content} className="p-0" /> {tt("ai.listen", lang)}
                          </span>
                        </div>
                        {/* one-tap follow-ups + regenerate — the latest answer only,
                            so the transcript stays clean while scrolling */}
                        {!chat.busy && i === chat.messages.length - 1 && i > 0 && (
                          <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-dashed pt-2.5">
                            <span className="me-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                              {tt("ai.followUp", lang)}
                            </span>
                            <FollowUpChip
                              icon={Shapes}
                              label={tt("ai.fuSimpler", lang)}
                              onClick={() => void submit(tt("ai.fuSimplerPrompt", lang))}
                            />
                            <FollowUpChip
                              icon={Lightbulb}
                              label={tt("ai.fuExample", lang)}
                              onClick={() => void submit(tt("ai.fuExamplePrompt", lang))}
                            />
                            <FollowUpChip
                              icon={GraduationCap}
                              label={tt("ai.fuQuiz", lang)}
                              onClick={() => void submit(tt("ai.fuQuizPrompt", lang))}
                            />
                            <FollowUpChip
                              icon={ListChecks}
                              label={tt("ai.fuPoints", lang)}
                              onClick={() => void submit(tt("ai.fuPointsPrompt", lang))}
                            />
                            <button
                              onClick={() => void regenerate()}
                              title={tt("ai.regenerate", lang)}
                              className="ms-auto inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.05] px-2.5 py-1 text-[11.5px] text-primary transition-all hover:-translate-y-px hover:border-primary/45 hover:bg-primary/10 hover:shadow-soft focus-ring"
                            >
                              <RefreshCw className="h-3 w-3" />
                              {tt("ai.regenerate", lang)}
                            </button>
                          </div>
                        )}
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
                  <img
                    src={attachment.thumb}
                    alt=""
                    className="h-12 w-12 rounded-lg border object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-medium">{tt("ai.imgAttached", lang)}</p>
                    <p className="text-[11px] text-muted-foreground">{tt("ai.imgAttachedSub", lang)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAttachment(null)}
                    aria-label={tt("ai.removeImage", lang)}
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

/** v22: the model's thinking process, streamed live above the answer.
 *  Auto-open while reasoning is still streaming, auto-collapse when the
 *  answer takes over — the learner can always re-open it. */
export function ThinkingPanel({
  text,
  live,
  lang,
}: {
  text: string
  live: boolean
  lang: "en" | "ar"
}) {
  // default: open while streaming, folded once the answer takes over — the
  // learner's click always wins afterwards (derived, no setState-in-effect)
  const [touched, setTouched] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const open = touched ? userOpen : live

  return (
    <div className="mb-2.5 overflow-hidden rounded-xl border border-dashed border-primary/25 bg-secondary/30">
      <button
        type="button"
        onClick={() => {
          setTouched(true)
          setUserOpen(!open)
        }}
        aria-expanded={open}
        className="flex w-full items-center gap-1.5 px-3 py-1.5 text-start text-[10.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        <Brain className="h-3.5 w-3.5 shrink-0 text-primary/70" />
        <span>{tt("ai.thoughtProcess", lang)}</span>
        {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />}
        <ChevronDown className={cn("ms-auto h-3 w-3 shrink-0 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div
          dir="auto"
          className="max-h-44 overflow-y-auto border-t border-dashed border-primary/15 px-3.5 py-2 text-[12px] leading-relaxed text-muted-foreground/90"
        >
          {text}
          {live && <span className="ms-0.5 inline-block h-3 w-[2px] animate-pulse rounded bg-primary align-middle" />}
        </div>
      )}
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
