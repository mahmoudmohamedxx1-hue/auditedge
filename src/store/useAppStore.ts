"use client"

import { create } from "zustand"
import { toast } from "sonner"
import {
  AiContext,
  BootstrapData,
  Course,
  Lesson,
  LessonContent,
  Material,
  QuizQuestion,
  ViewName,
} from "@/lib/audit-types"
import type { Lang } from "@/lib/i18n"
import { DEFAULT_MODEL, isAiModelId, type AiModelId } from "@/lib/models"
import {
  DEFAULT_TTS_SPEED,
  DEFAULT_TTS_VOICE,
  isTtsVoiceId,
  TTS_SPEEDS,
  type TtsVoiceId,
} from "@/lib/voices"

/** localStorage keys for the site-wide UI language.
 *  LEGACY: v10–v12 kept the language under "auditedge-program-lang" (Audit
 *  Program only) — it migrates automatically on first hydration. */
const LANG_KEY = "auditedge-lang"
const LEGACY_LANG_KEY = "auditedge-program-lang"
/** Persisted UI theme ("light" | "dark") — applied to <html> as a class. */
const THEME_KEY = "auditedge-theme"

export type ThemeMode = "light" | "dark"
/** localStorage key for the selected AI engine model (v15). */
const AI_MODEL_KEY = "auditedge-ai-model"
const AI_THINKING_KEY = "auditedge-ai-thinking"
/** localStorage keys for the TTS reading voice + speed (v17). */
const TTS_VOICE_KEY = "auditedge-tts-voice"
const TTS_SPEED_KEY = "auditedge-tts-speed"
/** v21: per-language voice memory — under "auto", Arabic chunks use the
 *  remembered Arabic voice and English chunks the English one. */
const TTS_VOICE_AR_KEY = "auditedge-tts-voice-ar"
const TTS_VOICE_EN_KEY = "auditedge-tts-voice-en"
/** Whether the AI tutor reads answers aloud automatically (v19). */
const AI_AUTO_SPEAK_KEY = "auditedge-ai-auto-speak"
/** Whether the desktop sidebar is collapsed to an icon rail (v19.1).
 *  Mobile always uses the sheet menu, so this only affects lg+ screens. */
const SIDEBAR_COLLAPSED_KEY = "auditedge-sidebar-collapsed"
/** Whether the AI tutor's conversations rail is pinned open (v19.2).
 *  CLOSED by default — the chat gets the full width until the learner
 *  pins the rail open; "1" = open, anything else = closed. */
const TUTOR_RAIL_KEY = "auditedge-tutor-rail"

interface NavigateOpts {
  courseId?: string
  lessonId?: string
}

export interface CourseInput {
  code: string
  title: string
  subtitle: string
  description: string
  category: string
  level: string
  cpeHours: number
  instructorName: string
  instructorTitle: string
  instructorBio: string
  icon: string
  accent: string
  published?: boolean
}

export interface LessonInput {
  title: string
  type: "lesson" | "quiz"
  durationMin: number
  xp: number
  content: LessonContent
  /** v21: Arabic lesson edition — parsed object or null (API stringifies it). */
  contentAr?: unknown
  attachments: string[]
  videoUrl?: string
  externalUrl?: string
  quiz?: { title: string; passScore: number; questions: QuizQuestion[] } | null
}

interface AppState {
  view: ViewName
  prevView: ViewName
  selectedCourseId: string | null
  selectedLessonId: string | null
  catalogQuery: string
  catalogCategory: string | null
  /** v26 — the exam-center papers search, lifted to the store so the Courses
   *  page can pre-fill it ("past papers for this track" deep-links). */
  examSearch: string
  authChecked: boolean
  data: BootstrapData | null
  loading: boolean

  /** Site-wide UI language (EN/AR) — drives the whole app incl. RTL. */
  lang: Lang
  setLang: (l: Lang) => void
  /** Restore the persisted language (localStorage) after hydration. */
  hydrateLang: () => void

  /** Site-wide UI theme (light/dark) — toggles the `dark` class on <html>. */
  theme: ThemeMode
  setTheme: (t: ThemeMode) => void
  /** Restore the persisted theme (localStorage; falls back to system preference). */
  hydrateTheme: () => void

  /** The AI engine model powering the tutor / analyst (v15). */
  aiModel: AiModelId
  setAiModel: (m: AiModelId) => void
  /** Restore the persisted model choice after hydration. */
  hydrateAiModel: () => void

  /** v22: show the model's thinking process above answers (reasoning
   *  engines stream it live) — persisted, on by default. */
  aiThinking: boolean
  setAiThinking: (v: boolean) => void
  /** Restore the persisted thinking-process preference after hydration. */
  hydrateAiThinking: () => void

  /** The read-aloud voice for AI answers (v17) — "auto" matches the
   *  answer's language; any of the 7 catalog voices can be pinned. */
  ttsVoice: TtsVoiceId
  setTtsVoice: (v: TtsVoiceId) => void
  /** v21: per-language remembered voices — used when ttsVoice === "auto"
   *  so the learner can prefer e.g. Shakir (AR) + Ryan (EN) at once. */
  ttsVoiceAr: TtsVoiceId | null
  ttsVoiceEn: TtsVoiceId | null
  /** Read-aloud playback speed (one of TTS_SPEEDS). */
  ttsSpeed: number
  setTtsSpeed: (s: number) => void
  /** Read the tutor's answers aloud automatically as they finish (v19);
   *  the voice itself is the ttsVoice above. */
  aiAutoSpeak: boolean
  setAiAutoSpeak: (v: boolean) => void
  /** Restore the persisted voice + speed + auto-speak after hydration. */
  hydrateTtsPrefs: () => void

  /** Desktop sidebar collapsed to an icon rail (v19.1) — persisted. */
  sidebarCollapsed: boolean
  setSidebarCollapsed: (v: boolean) => void
  /** Restore the persisted sidebar collapse after hydration. */
  hydrateSidebar: () => void

  /** AI tutor conversations rail pinned open (v19.2) — closed by
   *  default, persisted; mobile keeps its own history sheet. */
  tutorRailOpen: boolean
  setTutorRailOpen: (v: boolean) => void
  /** Restore the persisted tutor rail state after hydration. */
  hydrateTutorRail: () => void

  /** Global command palette (Ctrl+K, v20 / P2-12) — transient, not persisted. */
  paletteOpen: boolean
  setPaletteOpen: (v: boolean) => void

  // AI tutor state
  aiContext: AiContext | null
  aiConversationId: string | null
  /** Question pre-filled into the full AI tutor (e.g. from the Audit Program) */
  aiPresetQuestion: string | null
  /** Search pre-filled into the Library (e.g. a standard referenced in the Audit Program) */
  libraryPresetQuery: string | null

  navigate: (view: ViewName, opts?: NavigateOpts) => void
  setCatalogQuery: (q: string) => void
  setCatalogCategory: (c: string | null) => void
  setExamSearch: (q: string) => void
  checkAuth: () => Promise<void>
  bootstrap: () => Promise<void>

  setAiContext: (ctx: AiContext | null) => void
  /** v25 — opening the tutor always lands on the FULL chat page (the
   *  learner's request): sets the lesson context (if any) and navigates. */
  openTutor: (ctx?: AiContext) => void
  setAiConversationId: (id: string | null) => void
  setAiPresetQuestion: (q: string | null) => void
  setLibraryPresetQuery: (q: string | null) => void
  /** v21: lesson bookmarks (saved lessons), persisted in localStorage. */
  bookmarks: string[]
  toggleBookmark: (lessonId: string) => void
  hydrateBookmarks: () => void
  /** v23: library reading progress — material ids marked as studied,
   *  persisted in localStorage so progress survives sessions. */
  studiedMaterials: string[]
  toggleStudied: (materialId: string) => void
  hydrateStudied: () => void
  /** v21: one-shot weak-topic drill prefill — the analytics heatmap sets it,
   *  the Exam Center consumes it and clears it. */
  examTagPrefill: string | null
  setExamTagPrefill: (tag: string | null) => void
  clearExamTagPrefill: () => void
  /** v38: one-shot ToC → audit-program bridge — the Test of Control results
   *  view sets it (industry + verdict context), the Audit Program view opens
   *  the AI customizer pre-filled and clears it. Transient, never persisted. */
  programTailorPrefill: { sectorFree: string; concerns: string } | null
  setProgramTailorPrefill: (
    prefill: { sectorFree: string; concerns: string } | null
  ) => void
  clearProgramTailorPrefill: () => void

  enroll: (courseId: string) => Promise<void>
  completeLesson: (lessonId: string) => Promise<void>
  submitQuiz: (
    quizId: string,
    picks: (number | null)[]
  ) => Promise<{ score: number; passed: boolean; correct: number; total: number }>

  /** Returns the course id, or null on failure (error toast shown by caller via `errOf`). */
  saveCourse: (input: CourseInput, id?: string) => Promise<string | null>
  deleteCourse: (id: string) => Promise<string | null>
  saveModule: (
    courseId: string,
    title: string,
    description: string,
    id?: string
  ) => Promise<string | null>
  deleteModule: (id: string) => Promise<string | null>
  saveLesson: (moduleId: string, input: LessonInput, id?: string) => Promise<string | null>
  deleteLesson: (id: string) => Promise<string | null>
  deleteMaterial: (id: string) => Promise<string | null>
  reorderModule: (courseId: string, moduleId: string, dir: "up" | "down") => Promise<void>
  reorderLesson: (moduleId: string, lessonId: string, dir: "up" | "down") => Promise<void>
  saveMember: (
    input: { name: string; email: string; jobTitle: string; role: "learner" | "admin" },
    id?: string
  ) => Promise<string | null>
  deleteMember: (id: string) => Promise<string | null>
}

export const useAppStore = create<AppState>((set, get) => ({
  view: "home",
  prevView: "home",
  selectedCourseId: null,
  selectedLessonId: null,
  catalogQuery: "",
  catalogCategory: null,
  examSearch: "",
  authChecked: false,
  data: null,
  loading: true,

  lang: "en",
  theme: "light",

  aiContext: null,
  aiConversationId: null,
  aiPresetQuestion: null,
  libraryPresetQuery: null,
  examTagPrefill: null,
  programTailorPrefill: null,
  bookmarks: [],
  studiedMaterials: [],

  toggleBookmark: (lessonId) => {
    set((s) => ({
      bookmarks: s.bookmarks.includes(lessonId)
        ? s.bookmarks.filter((x) => x !== lessonId)
        : [...s.bookmarks, lessonId],
    }))
    try {
      localStorage.setItem(
        "auditedge-bookmarks",
        JSON.stringify(useAppStore.getState().bookmarks)
      )
    } catch {}
  },

  hydrateBookmarks: () => {
    try {
      const raw = JSON.parse(localStorage.getItem("auditedge-bookmarks") ?? "[]")
      if (Array.isArray(raw)) set({ bookmarks: raw.filter((x) => typeof x === "string") })
    } catch {}
  },

  toggleStudied: (materialId) => {
    set((s) => ({
      studiedMaterials: s.studiedMaterials.includes(materialId)
        ? s.studiedMaterials.filter((x) => x !== materialId)
        : [...s.studiedMaterials, materialId],
    }))
    try {
      localStorage.setItem(
        "auditedge-studied-materials",
        JSON.stringify(useAppStore.getState().studiedMaterials)
      )
    } catch {}
  },

  hydrateStudied: () => {
    try {
      const raw = JSON.parse(localStorage.getItem("auditedge-studied-materials") ?? "[]")
      if (Array.isArray(raw)) set({ studiedMaterials: raw.filter((x) => typeof x === "string") })
    } catch {}
  },

  navigate: (view, opts) => {
    set((s) => {
      const courseId =
        opts?.courseId ??
        (view === "course" || view === "lesson" || view === "quiz" || view === "studio-course"
          ? s.selectedCourseId
          : null)
      const lessonId =
        opts?.lessonId ?? (view === "lesson" || view === "quiz" ? s.selectedLessonId : null)
      return {
        prevView: s.view,
        view,
        selectedCourseId: courseId,
        selectedLessonId: lessonId,
        // the AI tutor follows what the learner is studying (sticky until cleared)
        aiContext: lessonId ? { view, courseId: courseId ?? undefined, lessonId } : s.aiContext,
      }
    })
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  },

  setCatalogQuery: (q) => set({ catalogQuery: q }),
  setCatalogCategory: (c) => set({ catalogCategory: c }),
  setExamSearch: (q) => set({ examSearch: q }),

  setLang: (l) => {
    set({ lang: l })
    try {
      localStorage.setItem(LANG_KEY, l)
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "ar" ? "ar" : "en"
      document.documentElement.dir = l === "ar" ? "rtl" : "ltr"
    }
  },

  hydrateLang: () => {
    try {
      const saved =
        (localStorage.getItem(LANG_KEY) as Lang | null) ??
        (localStorage.getItem(LEGACY_LANG_KEY) as Lang | null)
      if (saved === "ar" || saved === "en") {
        get().setLang(saved)
        if (saved === "ar") {
          try {
            localStorage.removeItem(LEGACY_LANG_KEY)
          } catch {}
        }
      }
    } catch {}
  },

  setTheme: (t) => {
    set({ theme: t })
    try {
      localStorage.setItem(THEME_KEY, t)
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", t === "dark")
    }
  },

  hydrateTheme: () => {
    try {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === "light" || saved === "dark") {
        set({ theme: saved })
        document.documentElement.classList.toggle("dark", saved === "dark")
        return
      }
      // first visit: follow the OS preference
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches
      set({ theme: prefersDark ? "dark" : "light" })
      document.documentElement.classList.toggle("dark", prefersDark)
    } catch {}
  },

  aiModel: DEFAULT_MODEL,
  setAiModel: (m) => {
    set({ aiModel: m })
    try {
      localStorage.setItem(AI_MODEL_KEY, m)
    } catch {}
  },
  hydrateAiModel: () => {
    try {
      const saved = localStorage.getItem(AI_MODEL_KEY)
      if (isAiModelId(saved)) {
        set({ aiModel: saved })
      }
    } catch {}
  },

  aiThinking: true,
  setAiThinking: (v) => {
    set({ aiThinking: v })
    try {
      localStorage.setItem(AI_THINKING_KEY, v ? "1" : "0")
    } catch {}
  },
  hydrateAiThinking: () => {
    try {
      const saved = localStorage.getItem(AI_THINKING_KEY)
      if (saved !== null) set({ aiThinking: saved === "1" })
    } catch {}
  },

  ttsVoice: DEFAULT_TTS_VOICE,
  ttsSpeed: DEFAULT_TTS_SPEED,
  /** v21: remembered per-language voices (used when ttsVoice === "auto"). */
  ttsVoiceAr: null,
  ttsVoiceEn: null,
  setTtsVoice: (v) => {
    set({ ttsVoice: v })
    try {
      localStorage.setItem(TTS_VOICE_KEY, v)
      // picking a concrete Arabic/English voice also remembers it for that
      // language, so "auto" stays personalized after switching back
      if (v !== "auto") {
        if (v.includes("ar-") || v === "tongtong" || v === "xiaochen") {
          set({ ttsVoiceAr: v })
          localStorage.setItem(TTS_VOICE_AR_KEY, v)
        } else if (v.includes("en-") || v === "jam") {
          set({ ttsVoiceEn: v })
          localStorage.setItem(TTS_VOICE_EN_KEY, v)
        }
      }
    } catch {}
  },
  setTtsSpeed: (s) => {
    if (!(TTS_SPEEDS as readonly number[]).includes(s)) return
    set({ ttsSpeed: s })
    try {
      localStorage.setItem(TTS_SPEED_KEY, String(s))
    } catch {}
  },
  aiAutoSpeak: false,
  setAiAutoSpeak: (v) => {
    set({ aiAutoSpeak: v })
    try {
      localStorage.setItem(AI_AUTO_SPEAK_KEY, v ? "1" : "0")
    } catch {}
  },
  hydrateTtsPrefs: () => {
    try {
      const v = localStorage.getItem(TTS_VOICE_KEY)
      if (isTtsVoiceId(v)) set({ ttsVoice: v })
      const s = Number(localStorage.getItem(TTS_SPEED_KEY))
      if ((TTS_SPEEDS as readonly number[]).includes(s)) set({ ttsSpeed: s })
      set({ aiAutoSpeak: localStorage.getItem(AI_AUTO_SPEAK_KEY) === "1" })
      const va = localStorage.getItem(TTS_VOICE_AR_KEY)
      if (isTtsVoiceId(va)) set({ ttsVoiceAr: va })
      const ve = localStorage.getItem(TTS_VOICE_EN_KEY)
      if (isTtsVoiceId(ve)) set({ ttsVoiceEn: ve })
    } catch {}
  },

  sidebarCollapsed: false,
  setSidebarCollapsed: (v) => {
    set({ sidebarCollapsed: v })
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, v ? "1" : "0")
    } catch {}
  },
  hydrateSidebar: () => {
    try {
      set({ sidebarCollapsed: localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "1" })
    } catch {}
  },

  tutorRailOpen: false,
  setTutorRailOpen: (v) => {
    set({ tutorRailOpen: v })
    try {
      localStorage.setItem(TUTOR_RAIL_KEY, v ? "1" : "0")
    } catch {}
  },
  hydrateTutorRail: () => {
    try {
      // absence of the key (first visit) means CLOSED — only a stored "1" opens it
      set({ tutorRailOpen: localStorage.getItem(TUTOR_RAIL_KEY) === "1" })
    } catch {}
  },

  paletteOpen: false,
  setPaletteOpen: (v) => set({ paletteOpen: v }),

  // single-user workspace: no sign-in — just load the app
  checkAuth: async () => {
    await get().bootstrap()
  },

  bootstrap: async () => {
    try {
      const res = await fetch("/api/bootstrap")
      if (res.status === 401) {
        set({ authChecked: true, loading: false, data: null })
        return
      }
      const data = await res.json()
      set({ data, loading: false, authChecked: true })
    } catch {
      set({ loading: false, authChecked: true })
    }
  },

  setAiContext: (ctx) => set({ aiContext: ctx }),
  openTutor: (ctx) =>
    set((s) => ({
      aiContext: ctx ?? s.aiContext,
      view: "ai" as ViewName,
      prevView: s.view,
    })),
  setAiConversationId: (id) => set({ aiConversationId: id }),
  setAiPresetQuestion: (q) => set({ aiPresetQuestion: q }),
  setLibraryPresetQuery: (q) => set({ libraryPresetQuery: q }),

  setExamTagPrefill: (tag) => set({ examTagPrefill: tag }),
  clearExamTagPrefill: () => set({ examTagPrefill: null }),

  setProgramTailorPrefill: (prefill) => set({ programTailorPrefill: prefill }),
  clearProgramTailorPrefill: () => set({ programTailorPrefill: null }),

  enroll: async (courseId) => {
    const { data } = get()
    if (!data) return
    if (!data.enrollments.some((e) => e.courseId === courseId)) {
      set({
        data: {
          ...data,
          enrollments: [
            ...data.enrollments,
            { id: `tmp-${courseId}`, courseId, startedAt: new Date().toISOString(), completedAt: null },
          ],
        },
      })
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      })
      if (!res.ok) {
        // revert the optimistic enrollment so the UI never lies
        await get().bootstrap()
        toast.error(await errOf(res, "Could not start the course"))
      }
    }
  },

  completeLesson: async (lessonId) => {
    const { data } = get()
    if (!data) return
    if (data.completedLessonIds.includes(lessonId)) return
    const lesson = findLesson(data.courses, lessonId)
    if (!lesson) return
    set({
      data: {
        ...data,
        completedLessonIds: [...data.completedLessonIds, lessonId],
        user: { ...data.user, xp: data.user.xp + lesson.xp },
      },
    })
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId }),
    })
    if (!res.ok) {
      await get().bootstrap()
      toast.error(await errOf(res, "Could not save your progress"))
    }
  },

  submitQuiz: async (quizId, picks) => {
    const { data } = get()
    // the server grades the submitted picks against the stored answer key —
    // the client never self-reports a score (XP/certificates can't be faked)
    const res = await fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizId, picks }),
    })
    if (!res.ok) {
      toast.error(await errOf(res, "Could not submit the quiz"))
      const total = picks.length
      const correct = 0
      return { score: Math.round((correct / Math.max(total, 1)) * 100), passed: false, correct, total }
    }
    const result = (await res.json()) as {
      score: number
      passed: boolean
      correct: number
      total: number
    }
    if (data) {
      set({
        data: {
          ...data,
          quizAttempts: [
            ...data.quizAttempts,
            {
              id: `tmp-${quizId}-${Date.now()}`,
              quizId,
              score: result.score,
              correct: result.correct,
              total: result.total,
              passed: result.passed,
              createdAt: new Date().toISOString(),
            },
          ],
        },
      })
    }
    await get().bootstrap()
    return result
  },

  // ---------------- admin operations ----------------

  saveCourse: async (input, id) => {
    const url = id ? `/api/admin/course/${id}` : "/api/admin/course"
    const res = await fetch(url, {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
    if (!res.ok) {
      toast.error(await errOf(res, "Could not save the course"))
      return null
    }
    const course = await res.json()
    await get().bootstrap()
    return course.id as string
  },

  deleteCourse: async (id) => {
    const res = await fetch(`/api/admin/course/${id}`, { method: "DELETE" })
    if (!res.ok) return errOf(res, "Could not delete the course")
    await get().bootstrap()
    return null
  },

  saveModule: async (courseId, title, description, id) => {
    const url = id ? `/api/admin/module/${id}` : "/api/admin/module"
    const res = await fetch(url, {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId, title, description }),
    })
    if (!res.ok) return errOf(res, "Could not save the module")
    await get().bootstrap()
    return null
  },

  deleteModule: async (id) => {
    const res = await fetch(`/api/admin/module/${id}`, { method: "DELETE" })
    if (!res.ok) return errOf(res, "Could not delete the module")
    await get().bootstrap()
    return null
  },

  saveLesson: async (moduleId, input, id) => {
    const url = id ? `/api/admin/lesson/${id}` : "/api/admin/lesson"
    const res = await fetch(url, {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, ...input }),
    })
    if (!res.ok) return errOf(res, "Could not save the lesson")
    await get().bootstrap()
    return null
  },

  deleteLesson: async (id) => {
    const res = await fetch(`/api/admin/lesson/${id}`, { method: "DELETE" })
    if (!res.ok) return errOf(res, "Could not delete the lesson")
    await get().bootstrap()
    return null
  },

  deleteMaterial: async (id) => {
    const res = await fetch(`/api/materials/${id}`, { method: "DELETE" })
    if (!res.ok) return errOf(res, "Could not remove the material")
    await get().bootstrap()
    return null
  },

  reorderModule: async (courseId, moduleId, dir) => {
    const { data } = get()
    const course = data?.courses.find((c) => c.id === courseId)
    if (!course) return
    const sorted = [...course.modules].sort((a, b) => a.order - b.order)
    const idx = sorted.findIndex((m) => m.id === moduleId)
    const swapWith = dir === "up" ? idx - 1 : idx + 1
    if (swapWith < 0 || swapWith >= sorted.length) return
    const a = sorted[idx]
    const b = sorted[swapWith]
    await Promise.all([
      fetch(`/api/admin/module/${a.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: b.order }),
      }),
      fetch(`/api/admin/module/${b.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: a.order }),
      }),
    ])
    await get().bootstrap()
  },

  reorderLesson: async (moduleId, lessonId, dir) => {
    const { data } = get()
    const course = data?.courses.find((c) => c.modules.some((m) => m.id === moduleId))
    const module_ = course?.modules.find((m) => m.id === moduleId)
    if (!module_) return
    const sorted = [...module_.lessons].sort((x, y) => x.order - y.order)
    const idx = sorted.findIndex((l) => l.id === lessonId)
    const swapWith = dir === "up" ? idx - 1 : idx + 1
    if (swapWith < 0 || swapWith >= sorted.length) return
    const a = sorted[idx]
    const b = sorted[swapWith]
    await Promise.all([
      fetch(`/api/admin/lesson/${a.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: b.order }),
      }),
      fetch(`/api/admin/lesson/${b.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: a.order }),
      }),
    ])
    await get().bootstrap()
  },

  saveMember: async (input, id) => {
    const url = id ? `/api/team/${id}` : "/api/team"
    const res = await fetch(url, {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
    if (!res.ok) {
      const j = await res.json().catch(() => ({}))
      return j.error ?? "Failed"
    }
    await get().bootstrap()
    return null
  },

  deleteMember: async (id) => {
    const res = await fetch(`/api/team/${id}`, { method: "DELETE" })
    if (!res.ok) return errOf(res, "Could not remove the member")
    await get().bootstrap()
    return null
  },
}))

/** Extract a human-readable error message from a failed API response. */
async function errOf(res: Response, fallback: string): Promise<string> {
  const j = await res.json().catch(() => null)
  return (j && typeof j.error === "string" && j.error) || fallback
}

function findLesson(courses: Course[], lessonId: string): Lesson | null {
  for (const c of courses)
    for (const m of c.modules)
      for (const l of m.lessons) if (l.id === lessonId) return l
  return null
}
