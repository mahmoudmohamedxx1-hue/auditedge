"use client"

/**
 * v32 — Shareable deep links: every page of the app lives at its own URL.
 *
 *   #/                              Home
 *   #/ai                            AI tutor (full-page chat)
 *   #/courses                       Courses hub
 *   #/course/<id>                   One course detail
 *   #/lesson/<id>?c=<courseId>      One lesson player
 *   #/quiz/<id>?c=<courseId>        One lesson quiz
 *   #/exam                          Exam Center          (?paper=<familyId> pre-opens that paper family)
 *   #/ifrs                          IFRS Summaries hub   (?std=IFRS+15 opens one sheet)
 *   #/toc                           Test of Control       (?ind=banking opens one questionnaire, ?ai=1 the AI tab)
 *   #/sectors                       Sector library       (?sector=banks opens one sector)
 *   #/review #/simulation #/podcast #/library #/program
 *   #/analytics #/achievements #/certificate #/discover
 *   #/studio  #/studio/course/<id>  (admin course builder)
 *
 * HOW IT WORKS
 * ─────────────
 *  1. On boot, `applyInitialRoute()` parses the hash and navigates the store
 *     to the shared page — so a recipient of a link lands exactly where the
 *     sender was (same course, same lesson, same IFRS sheet…).
 *  2. The shell subscribes to the store; every view change PUSHES a history
 *     entry (so the browser back-button walks the app), and id-only changes
 *     REPLACE the entry (no history spam).
 *  3. `popstate` / `hashchange` (back, forward, or a manually edited URL)
 *     re-parse the hash and re-navigate — including the component-level
 *     params (std / sector / paper) via `onRouteParams`.
 *
 * Hash routing (not path routing) keeps this working on every deploy target —
 * static export, Vercel, or any host — with zero server config.
 */

import type { ViewName } from "@/lib/audit-types"

/** Views that live at a fixed, parameterless route. */
const VIEW_ROUTES: Partial<Record<ViewName, string>> = {
  home: "",
  ai: "ai",
  courses: "courses",
  library: "library",
  program: "program",
  sectors: "sectors",
  team: "analytics",
  achievements: "achievements",
  certificate: "certificate",
  studio: "studio",
  discover: "discover",
  exam: "exam",
  review: "review",
  simulation: "simulation",
  podcast: "podcast",
  ifrs: "ifrs",
  toc: "toc",
}

/** The route every view writes into the address bar. */
export function hashForRoute(
  view: ViewName,
  courseId: string | null | undefined,
  lessonId: string | null | undefined
): string {
  switch (view) {
    case "course":
      return `#/course/${encodeURIComponent(courseId ?? "")}`
    case "lesson":
      return lessonRoute("lesson", lessonId, courseId)
    case "quiz":
      return lessonRoute("quiz", lessonId, courseId)
    case "studio-course":
      return `#/studio/course/${encodeURIComponent(courseId ?? "")}`
    default: {
      const base = VIEW_ROUTES[view]
      return base ? `#/${base}` : "#/"
    }
  }
}

function lessonRoute(kind: "lesson" | "quiz", lessonId: string | null | undefined, courseId: string | null | undefined): string {
  const seg = encodeURIComponent(lessonId ?? "")
  return `#/${kind}/${seg}${courseId ? `?c=${encodeURIComponent(courseId)}` : ""}`
}

/** Component-owned params (?std= / ?paper= / ?sector= / ?video=) and the
 *  views that own them — used to PRESERVE a shared link's param when the
 *  shell rewrites the URL (e.g. the visitor is already inside the app and
 *  opens a shared #/exam?paper=cpa-far link: the hash-change navigates the
 *  store, and the rewrite must keep the exam-owned param). */
const PARAM_OWNERS: Record<string, ViewName[]> = {
  std: ["ifrs"],
  paper: ["exam"],
  sector: ["sectors"],
  video: ["courses"],
  ind: ["toc"],
  ai: ["toc"],
}

/** The route for the shell to write, PRESERVING any component-owned params
 *  of the target view that the current URL already carries. */
export function hashForRoutePreserving(
  view: ViewName,
  courseId: string | null | undefined,
  lessonId: string | null | undefined
): string {
  let hash = hashForRoute(view, courseId, lessonId)
  if (typeof window === "undefined") return hash
  const current = parseHash(window.location.hash)
  if (!current) return hash
  const carry = new URLSearchParams()
  for (const [key, value] of current.params) {
    if (PARAM_OWNERS[key]?.includes(view)) carry.set(key, value)
  }
  const qs = carry.toString()
  if (qs) hash = hash.includes("?") ? `${hash}&${qs}` : `${hash}?${qs}`
  return hash
}

export type ParsedRoute = {
  view: ViewName
  courseId: string | null
  lessonId: string | null
  /** Extra params owned by the components themselves (std / sector / paper…). */
  params: URLSearchParams
}

/** Parse a location hash (e.g. "#/lesson/abc?c=xyz") → the route it names.
 *  Returns null for an unrecognized route (caller keeps the current view). */
export function parseHash(hash: string): ParsedRoute | null {
  const h = hash.replace(/^#\/?/, "")
  if (!h) return { view: "home", courseId: null, lessonId: null, params: new URLSearchParams() }
  const qAt = h.indexOf("?")
  const pathPart = qAt >= 0 ? h.slice(0, qAt) : h
  const params = new URLSearchParams(qAt >= 0 ? h.slice(qAt + 1) : "")
  const segs = pathPart.split("/").filter(Boolean).map(decodeURIComponent)
  if (!segs.length) return { view: "home", courseId: null, lessonId: null, params }
  const head = segs[0].toLowerCase()
  const id1 = segs[1] ?? null

  switch (head) {
    case "home":
      return { view: "home", courseId: null, lessonId: null, params }
    case "ai":
      return { view: "ai", courseId: null, lessonId: null, params }
    case "courses":
      return { view: "courses", courseId: null, lessonId: null, params }
    case "course":
      return id1 ? { view: "course", courseId: id1, lessonId: null, params } : null
    case "lesson":
    case "quiz": {
      if (!id1) return null
      const c = params.get("c")
      return { view: head === "lesson" ? "lesson" : "quiz", courseId: c, lessonId: id1, params }
    }
    case "library":
    case "program":
    case "sectors":
    case "review":
    case "simulation":
    case "podcast":
    case "ifrs":
    case "toc":
    case "exam":
    case "discover":
    case "achievements":
    case "certificate":
      return { view: head as ViewName, courseId: null, lessonId: null, params }
    case "analytics":
      return { view: "team", courseId: null, lessonId: null, params }
    case "studio":
      // /studio/course/<id> — the admin builder for one course
      if (segs[1]?.toLowerCase() === "course") {
        const id = segs[2]
        return id ? { view: "studio-course", courseId: id, lessonId: null, params } : null
      }
      return { view: "studio", courseId: null, lessonId: null, params }
    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/* Component-level params (?std= / ?sector= / ?paper= …)              */
/* ------------------------------------------------------------------ */

type ParamsListener = (params: URLSearchParams) => void
const paramListeners = new Set<ParamsListener>()

/** Notify component-level listeners after a history navigation (back /
 *  forward / manual hash edit) — they re-read their own params. */
function notifyParams(): void {
  const r = parseHash(window.location.hash)
  const params = r?.params ?? new URLSearchParams()
  for (const l of [...paramListeners]) {
    try {
      l(params)
    } catch {}
  }
}

/** Merge one param into the current hash (REPLACE, no history entry) —
 *  e.g. setRouteParam("std", "IFRS 15") while the IFRS sheet is open. */
export function setRouteParam(key: string, value: string | null | undefined): void {
  if (typeof window === "undefined") return
  const r = parseHash(window.location.hash)
  if (!r) return
  const params = r.params
  if (value === null || value === undefined || value === "") params.delete(key)
  else params.set(key, value)
  const qs = params.toString()
  const base = window.location.hash.split("?")[0]
  const next = qs ? `${base}?${qs}` : base
  if (next !== window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search + next)
  }
}

/** Read one param off the current hash (null when absent). */
export function getRouteParam(key: string): string | null {
  if (typeof window === "undefined") return null
  return parseHash(window.location.hash)?.params.get(key) ?? null
}

/** Subscribe to param changes caused by history navigation (back/forward).
 *  Returns an unsubscribe function. */
export function onRouteParams(listener: ParamsListener): () => void {
  paramListeners.add(listener)
  return () => paramListeners.delete(listener)
}

/** Fire param listeners — called by the shell's popstate/hashchange handler. */
export function routeParamsChanged(): void {
  notifyParams()
}

/* ------------------------------------------------------------------ */
/* URL helpers for the Share button                                    */
/* ------------------------------------------------------------------ */

/** The absolute, shareable URL of the current page (origin + path + hash). */
export function currentShareUrl(): string {
  if (typeof window === "undefined") return ""
  return window.location.origin + window.location.pathname + window.location.search + window.location.hash
}

/** Build a shareable URL for a specific route (used by list views that share
 *  a *different* page than the one on screen, e.g. an exam family card). */
export function shareUrlFor(
  view: ViewName,
  opts?: { courseId?: string | null; lessonId?: string | null; param?: [key: string, value: string] }
): string {
  if (typeof window === "undefined") return ""
  let hash = hashForRoute(view, opts?.courseId ?? null, opts?.lessonId ?? null)
  if (opts?.param) {
    const [k, v] = opts.param
    const qs = new URLSearchParams([[k, v]]).toString()
    hash = qs ? `${hash}?${qs}` : hash
  }
  return window.location.origin + window.location.pathname + window.location.search + hash
}
