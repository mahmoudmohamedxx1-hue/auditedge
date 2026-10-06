/** v39 — the Due Diligence registry.
 *
 *  The single source of truth the view, the AI customizer, and the test
 *  suite all consume. Extensible by design: adding a section to any scope's
 *  data file (or a new scope) requires zero changes here or in the view —
 *  the registry derives its scopes, counts, and search index from the data.
 *
 *  Current shape: 3 scopes — legal (7), ops (6), financial (12 per-account
 *  workstreams) — 25 sections. */

import type { DDScopeId, DDSection } from "./types"
import { DD_LEGAL } from "./legal"
import { DD_OPS } from "./ops"
import { DD_FINANCIAL_A } from "./financial-a"
import { DD_FINANCIAL_B } from "./financial-b"

export * from "./types"

/** Scope presentation metadata (order = sidebar/tab order). */
export type DDScopeMeta = {
  id: DDScopeId
  /** icon name for the tab */
  icon: string
  title: { en: string; ar: string }
  /** one-sentence answer to "what does DD in this scope tell me?" */
  blurb: { en: string; ar: string }
}

export const DD_SCOPES: DDScopeMeta[] = [
  {
    id: "legal",
    icon: "gavel",
    title: { en: "Legal", ar: "القانونية" },
    blurb: {
      en: "Does the company legally exist, own what it claims, and can it be sold? — the workstream that finds what kills deals quietly.",
      ar: "هل توجد الشركة قانونًا وتملك ما تدعيه وهل يمكن بيعها؟ — مسار العمل الذي يجد ما يقتل الصفقات بهدوء.",
    },
  },
  {
    id: "ops",
    icon: "settings",
    title: { en: "Operational", ar: "التشغيلية" },
    blurb: {
      en: "Does the business actually run — without its founders, at the quality the market pays for, and through its disruptions?",
      ar: "هل يعمل النشاط فعلًا — بلا مؤسسيه، وبالجودة التي يدفع السوق ثمنها، وعبر اضطراباته؟",
    },
  },
  {
    id: "financial",
    icon: "trending-up",
    title: { en: "Financial", ar: "المالية" },
    blurb: {
      en: "Twelve per-account workstreams — one card per account (clients, inventory, cash…), with every instruction for that account in one place: analytics, requests, procedures, and red flags.",
      ar: "اثنا عشر مسار عمل لكل حساب — بطاقة لكل حساب (العملاء، المخزون، النقدية…)، وكل تعليمات ذلك الحساب في مكان واحد: تحليلات وطلبات مستندات وإجراءات ومؤشرات خطر.",
    },
  },
]

/** The complete DD library in display order. */
export const DD_SECTIONS: DDSection[] = [...DD_LEGAL, ...DD_OPS, ...DD_FINANCIAL_A, ...DD_FINANCIAL_B]

/** Scope id → its sections. */
export function ddSectionsOf(scope: DDScopeId): DDSection[] {
  return DD_SECTIONS.filter((s) => s.scope === scope)
}

/** One section by id. */
export function ddSection(id: string): DDSection | undefined {
  return DD_SECTIONS.find((s) => s.id === id)
}

export const DD_SECTION_COUNT = DD_SECTIONS.length

export const DD_PROCEDURE_COUNT = DD_SECTIONS.reduce((n, s) => n + s.procedures.length, 0)

export const DD_DOCUMENT_COUNT = DD_SECTIONS.reduce((n, s) => n + s.documents.length, 0)

export const DD_RED_FLAG_COUNT = DD_SECTIONS.reduce((n, s) => n + s.redFlags.length, 0)

/** Search across titles, scope notes, procedure text, and documents —
 *  matches both languages, returns section ids ranked by hit weight. */
export function ddSearch(query: string): string[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const score = new Map<string, number>()
  const bump = (id: string, weight: number) => score.set(id, (score.get(id) ?? 0) + weight)

  for (const s of DD_SECTIONS) {
    const title = `${s.title.en} ${s.title.ar}`.toLowerCase()
    if (title.includes(q)) bump(s.id, 10)
    if (s.code.toLowerCase().includes(q)) bump(s.id, 8)
    if (`${s.scopeNote.en} ${s.scopeNote.ar}`.toLowerCase().includes(q)) bump(s.id, 4)
    for (const p of s.procedures) {
      if (`${p.text.en} ${p.text.ar}`.toLowerCase().includes(q)) bump(s.id, 2)
    }
    for (const d of s.documents) {
      if (`${d.en} ${d.ar}`.toLowerCase().includes(q)) bump(s.id, 1)
    }
  }
  return [...score.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id)
}

/* ------------------------------------------------------------------ */
/* AI customizer result types (shared by the route and the view)       */
/* ------------------------------------------------------------------ */

/** The deal context the AI customizer tailors against. */
export type DdTailorInput = {
  deal: "acquisition" | "investment" | "lending" | "partnership"
  target: string
  size: string
  concerns: string
}

/** An extra instruction the AI drops into a real library section. */
export type DdAiProcedure = {
  id: string
  sectionId: string
  ref?: string
  text: { en: string; ar: string }
}

/** The normalized AI answer — memo, focus areas, per-section procedures,
 *  and extra information requests. */
export type DdTailorResult = {
  /** client-side id (timestamp string) — "" until the view keeps it */
  id: string
  summary: { en: string; ar: string }
  focus: { en: string; ar: string }[]
  procs: DdAiProcedure[]
  requests: { en: string; ar: string }[]
  model: string
  engine: string
}
