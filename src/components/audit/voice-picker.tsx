"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import {
  EDGE_TTS_VOICES,
  TTS_SAMPLES,
  TTS_SPEEDS,
  TTS_VOICES,
  uiSample,
  type EdgeVoiceInfo,
  type TtsVoiceId,
} from "@/lib/voices"
import { claimTts, releaseTts, stopAllTts, stopTtsFor, ttsOwner } from "@/lib/tts-playback"
import type { Lang } from "@/lib/i18n"
import { tt } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { AudioLines, Check, ChevronDown, Loader2, Play, Search, Square } from "lucide-react"

/** Read-aloud voice + speed picker for the AI answers (v28).
 *  Two voice families:
 *  - Edge NEURAL voices (server-side): Egyptian + Gulf Arabic, international
 *    English accents, and a showcase of other languages — genuinely natural
 *    speech; "Auto" routes here (Arabic → Salma, English → Jenny).
 *  - Z.ai engine voices: the 7 built-ins (Arabic-capable ones are badged).
 *  Searchable, grouped by language, per-voice previews, speed control.
 *  Selection persists in the app store and applies site-wide. */

type EdgeGroup = "ar" | "en" | "intl"

const EDGE_GROUP_OF: Record<EdgeVoiceInfo["lang"], EdgeGroup> = {
  ar: "ar",
  en: "en",
  fr: "intl",
  es: "intl",
  de: "intl",
  it: "intl",
  tr: "intl",
  hi: "intl",
}

export function VoicePicker({
  lang,
  variant = "header",
}: {
  lang: Lang
  variant?: "header" | "icon"
}) {
  const ttsVoice = useAppStore((s) => s.ttsVoice)
  const setTtsVoice = useAppStore((s) => s.setTtsVoice)
  const ttsSpeed = useAppStore((s) => s.ttsSpeed)
  const setTtsSpeed = useAppStore((s) => s.setTtsSpeed)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  // dropdown anchor: "end" (align to the trigger's end edge, like the
  // ModelPicker) or "start". Decided deterministically from the trigger's
  // viewport position at click time (no post-render flipping): the
  // dropdown is 316px wide (or 100vw-1.5rem), so we pick the direction
  // with room. Direction-aware: end-0 extends leftward in LTR but
  // rightward in RTL.
  const [dropEnd, setDropEnd] = useState(true)

  const toggle = () => {
    if (open) {
      setOpen(false)
      return
    }
    const el = triggerRef.current
    if (el) {
      const r = el.getBoundingClientRect()
      const vw = window.innerWidth
      const w = Math.min(316, vw - 24)
      const rtl = document.documentElement.dir === "rtl"
      // end-0 anchors at the parent's inline-end edge: LTR → dropdown
      // extends left (needs room at r.left); RTL → extends right (room at r.right)
      const endFits = rtl ? r.right + w <= vw - 8 : r.left - w >= 8
      setDropEnd(endFits)
    }
    setOpen(true)
  }

  // preview state: which voice is loading / playing right now
  const [preview, setPreview] = useState<TtsVoiceId | null>(null)
  const [previewLoading, setPreviewLoading] = useState(false)
  const previewRef = useRef<TtsVoiceId | null>(null)
  const ownerRef = useRef<symbol>(Symbol())
  const previewAudioRef = useRef<HTMLAudioElement | null>(null)

  const edgeSel = EDGE_TTS_VOICES.find((v) => v.id === ttsVoice) ?? null
  const zaiSel = TTS_VOICES.find((v) => v.id === ttsVoice) ?? null
  const currentLabel = edgeSel ? edgeSel.name : zaiSel ? zaiSel.name : tt("ai.voice.auto", lang)

  // close on outside click
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [open])

  // stop the preview when the picker unmounts
  useEffect(() => {
    return () => {
      if (previewRef.current) stopTtsFor(ownerRef.current)
    }
  }, [])

  /** Play a one-line sample in the given voice (does not change the choice).
   *  Edge previews speak in the voice's own language; Z.ai previews in the
   *  UI language. */
  const playPreview = useCallback(
    async (voice: TtsVoiceId, sample: string) => {
      // already previewing this voice → stop
      if (previewRef.current === voice) {
        stopTtsFor(ownerRef.current)
        return
      }
      stopAllTts() // takes over from any SpeakButton playback

      const owner = Symbol()
      ownerRef.current = owner
      previewRef.current = voice
      let aborted = false
      let audio: HTMLAudioElement | null = null
      claimTts(owner, () => {
        aborted = true
        if (audio) {
          audio.pause()
          audio.src = ""
        }
      })

      setPreview(voice)
      setPreviewLoading(true)
      try {
        const res = await fetch("/api/ai/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: sample, voice, speed: ttsSpeed }),
        })
        if (!res.ok) throw new Error("preview failed")
        if (aborted) return
        const blob = await res.blob()
        setPreviewLoading(false)
        const url = URL.createObjectURL(blob)
        audio = new Audio(url)
        previewAudioRef.current = audio
        await new Promise<void>((resolve) => {
          let settled = false
          const done = () => {
            if (settled) return
            settled = true
            URL.revokeObjectURL(url)
            resolve()
          }
          audio!.onended = done
          audio!.onpause = done
          audio!.onerror = done
          void audio!.play().catch(done)
        })
      } catch {
        // transient upstream failure — just end the preview quietly
      } finally {
        previewAudioRef.current = null
        setPreviewLoading(false)
        if (ttsOwner() === owner) releaseTts(owner)
        if (previewRef.current === voice) {
          previewRef.current = null
          setPreview(null)
        }
      }
    },
    [ttsSpeed]
  )

  // ---- search filtering ----
  const q = query.trim().toLowerCase()
  const matchEdge = useCallback(
    (v: EdgeVoiceInfo) =>
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.locale.toLowerCase().includes(q) ||
      v.edgeName.toLowerCase().includes(q) ||
      v.langLabel.en.toLowerCase().includes(q) ||
      v.langLabel.ar.includes(query.trim()),
    [q, query]
  )
  const matchZai = useCallback(
    (name: string, styleEn: string, styleAr: string) =>
      !q || name.toLowerCase().includes(q) || styleEn.toLowerCase().includes(q) || styleAr.includes(query.trim()),
    [q, query]
  )

  const edgeGroups = useMemo(() => {
    const groups: Record<EdgeGroup, EdgeVoiceInfo[]> = { ar: [], en: [], intl: [] }
    for (const v of EDGE_TTS_VOICES) if (matchEdge(v)) groups[EDGE_GROUP_OF[v.lang]].push(v)
    return groups
  }, [matchEdge])

  const zaiFiltered = useMemo(
    () => TTS_VOICES.filter((v) => matchZai(v.name, v.style.en, v.style.ar)),
    [matchZai]
  )
  const anyMatch =
    edgeGroups.ar.length + edgeGroups.en.length + edgeGroups.intl.length + zaiFiltered.length > 0

  const previewBtn = (id: TtsVoiceId, name: string, sample: string) => (
    <button
      type="button"
      onClick={() => void playPreview(id, sample)}
      aria-label={
        preview === id ? tt("ai.voice.stopPreview", lang) : `${tt("ai.voice.preview", lang)} — ${name}`
      }
      title={preview === id ? tt("ai.voice.stopPreview", lang) : tt("ai.voice.preview", lang)}
      className={cn(
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors focus-ring",
        preview === id
          ? "border-primary/40 bg-primary/10 text-primary"
          : "text-muted-foreground hover:border-primary/35 hover:text-primary"
      )}
    >
      {preview === id ? (
        previewLoading ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <Square className="h-3 w-3 fill-current" />
        )
      ) : (
        <Play className="h-3 w-3" />
      )}
    </button>
  )

  const sectionLabel = (key: string) => (
    <div className="px-3.5 pb-1 pt-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground/80">
      {tt(key, lang)}
    </div>
  )

  const edgeRow = (v: EdgeVoiceInfo) => (
    <div
      key={v.id}
      className={cn(
        "flex items-center gap-2 px-2.5 py-1.5 transition-colors hover:bg-secondary/60",
        ttsVoice === v.id && "bg-primary/[0.07]"
      )}
    >
      <button
        role="option"
        aria-selected={ttsVoice === v.id}
        onClick={() => setTtsVoice(v.id)}
        className="min-w-0 flex-1 rounded-sm text-start focus-ring"
      >
        <span className="flex items-center gap-1.5 text-[13px] font-semibold">
          {ttsVoice === v.id && <Check className="h-3 w-3 shrink-0 text-primary" />}
          <span className="truncate">{v.name}</span>
          <span
            className={cn(
              "shrink-0 rounded px-1 py-px font-mono text-[9px] font-semibold uppercase",
              v.lang === "ar" ? "bg-sage/20 text-sage-deep" : "bg-secondary text-muted-foreground"
            )}
          >
            {v.langLabel[lang]}
          </span>
        </span>
        <span className="mt-0.5 block truncate text-[11px] leading-snug text-muted-foreground">
          {v.gender === "female" ? tt("ai.voice.female", lang) : tt("ai.voice.male", lang)} · {v.locale}
        </span>
      </button>
      {previewBtn(v.id, v.name, TTS_SAMPLES[v.lang])}
    </div>
  )

  const zaiRow = (v: (typeof TTS_VOICES)[number]) => (
    <div
      key={v.id}
      className={cn(
        "flex items-center gap-2 px-2.5 py-1.5 transition-colors hover:bg-secondary/60",
        ttsVoice === v.id && "bg-primary/[0.07]"
      )}
    >
      <button
        role="option"
        aria-selected={ttsVoice === v.id}
        onClick={() => setTtsVoice(v.id)}
        className="min-w-0 flex-1 rounded-sm text-start focus-ring"
      >
        <span className="flex items-center gap-1.5 text-[13px] font-semibold">
          {ttsVoice === v.id && <Check className="h-3 w-3 shrink-0 text-primary" />}
          <span className="truncate">{v.name}</span>
          <span
            className={cn(
              "shrink-0 rounded px-1 py-px font-mono text-[9px] font-semibold uppercase",
              v.arabicOk ? "bg-sage/20 text-sage-deep" : "bg-secondary text-muted-foreground"
            )}
          >
            {v.arabicOk ? tt("ai.voice.arabicOk", lang) : tt("ai.voice.englishOnly", lang)}
          </span>
        </span>
        <span className="mt-0.5 block truncate text-[11px] leading-snug text-muted-foreground">
          {v.style[lang]}
        </span>
      </button>
      {previewBtn(v.id, v.name, uiSample(lang))}
    </div>
  )

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={tt("ai.voice.title", lang)}
        title={tt("ai.voice.title", lang)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border transition-colors focus-ring",
          variant === "header"
            ? "h-8 px-2.5 text-[11.5px] font-medium"
            : "h-7 w-7 justify-center text-muted-foreground hover:text-foreground"
        )}
      >
        <AudioLines className="h-3.5 w-3.5 shrink-0 text-primary" />
        {variant === "header" && (
          <>
            <span className="max-w-[92px] truncate">{currentLabel}</span>
            <ChevronDown
              className={cn("h-3 w-3 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
            />
          </>
        )}
      </button>

      {open && (
        <div
          className={cn(
            "absolute z-30 mt-1.5 flex w-[min(316px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-xl border bg-popover shadow-lg",
            dropEnd ? "end-0" : "start-0"
          )}
          aria-label={tt("ai.voice.title", lang)}
        >
          {/* search */}
          <div className="border-b px-2.5 py-2">
            <div className="relative">
              <Search className="pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={tt("ai.voice.searchPh", lang)}
                className="h-8 w-full rounded-lg border bg-background ps-8 pe-2.5 text-[12.5px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/40"
              />
            </div>
          </div>

          {/* options (scrollable) */}
          <div
            role="listbox"
            aria-label={tt("ai.voice.title", lang)}
            className="min-h-0 flex-1 overflow-y-auto pb-1 scroll-thin"
            style={{ maxHeight: 264 }}
          >
            {/* Auto */}
            <button
              role="option"
              aria-selected={ttsVoice === "auto"}
              onClick={() => setTtsVoice("auto")}
              className={cn(
                "flex w-full items-start gap-2 border-b px-3.5 py-2.5 text-start transition-colors hover:bg-secondary/60",
                ttsVoice === "auto" && "bg-primary/[0.07]"
              )}
            >
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 text-[13px] font-semibold">
                  {ttsVoice === "auto" && <Check className="h-3 w-3 shrink-0 text-primary" />}
                  {tt("ai.voice.auto", lang)}
                  <span className="shrink-0 rounded bg-primary/10 px-1 py-px font-mono text-[9px] font-semibold uppercase text-primary">
                    {tt("ai.voice.recommended", lang)}
                  </span>
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                  {tt("ai.voice.autoNote", lang)}
                </span>
              </span>
            </button>

            {anyMatch ? (
              <>
                {edgeGroups.ar.length > 0 && (
                  <>
                    {sectionLabel("ai.voice.gArabic")}
                    {edgeGroups.ar.map(edgeRow)}
                  </>
                )}
                {edgeGroups.en.length > 0 && (
                  <>
                    {sectionLabel("ai.voice.gEnglish")}
                    {edgeGroups.en.map(edgeRow)}
                  </>
                )}
                {edgeGroups.intl.length > 0 && (
                  <>
                    {sectionLabel("ai.voice.gIntl")}
                    {edgeGroups.intl.map(edgeRow)}
                  </>
                )}
                {zaiFiltered.length > 0 && (
                  <>
                    {sectionLabel("ai.voice.gZai")}
                    {zaiFiltered.map(zaiRow)}
                  </>
                )}
              </>
            ) : (
              <p className="px-3.5 py-4 text-center text-[12px] text-muted-foreground">
                {tt("ai.voice.noResults", lang)}
              </p>
            )}
          </div>

          {/* speed */}
          <div className="flex items-center justify-between gap-2 border-t bg-secondary/30 px-3.5 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {tt("ai.voice.speed", lang)}
            </span>
            <div className="flex items-center gap-1">
              {TTS_SPEEDS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setTtsSpeed(s)}
                  aria-pressed={ttsSpeed === s}
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[10.5px] transition-colors focus-ring",
                    ttsSpeed === s
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {s === 1 ? "1×" : `${s}×`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
