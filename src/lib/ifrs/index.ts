/**
 * v30/v31 — IFRS Summaries: the aggregate catalog. 41 standards — every
 * effective IFRS and IAS — each rendered as a bilingual handwritten
 * study-notes sheet in the style of the user's IFRS 15 notes PDF.
 *
 * v31: the content now lives in ./standards/ (one file per standard,
 * each written to the flagship's depth bar), the six group files are
 * thin arrays, and the catalog exposes stats helpers that drive the
 * depth chips in the UI.
 */

import type { Standard, Topic, TopicId, Block } from "./types"
import { TOPICS } from "./types"
import { PRESENTATION_STANDARDS } from "./data-presentation"
import { ASSET_STANDARDS } from "./data-assets"
import { REVENUE_STANDARDS } from "./data-revenue"
import { INSTRUMENT_STANDARDS } from "./data-finstruments"
import { GROUP_STANDARDS } from "./data-groups"
import { SPECIALIZED_STANDARDS } from "./data-specialized"

/** The full catalog, ordered by standard code (IFRS block, then IAS block). */
export const IFRS_SUMMARIES: Standard[] = [
  ...PRESENTATION_STANDARDS,
  ...ASSET_STANDARDS,
  ...REVENUE_STANDARDS,
  ...INSTRUMENT_STANDARDS,
  ...GROUP_STANDARDS,
  ...SPECIALIZED_STANDARDS,
].sort((a, b) => {
  const isIfrs = (code: string) => code.startsWith("IFRS")
  const num = (code: string) => Number(code.split(" ")[1])
  if (isIfrs(a.code) !== isIfrs(b.code)) return isIfrs(a.code) ? -1 : 1
  return num(a.code) - num(b.code)
})

export const topicsOf = (): Topic[] => TOPICS

export const standardsByTopic = (topic: TopicId): Standard[] =>
  IFRS_SUMMARIES.filter((s) => s.topic === topic)

/** Search across code, both titles and the topic label (EN + AR). */
export const searchStandards = (query: string, list: Standard[] = IFRS_SUMMARIES): Standard[] => {
  const q = query.trim().toLowerCase()
  if (!q) return list
  return list.filter((s) => {
    const topic = TOPICS.find((t) => t.id === s.topic)
    const haystack = [
      s.code,
      s.title.en,
      s.title.ar,
      topic?.label.en ?? "",
      topic?.label.ar ?? "",
    ]
      .join(" ")
      .toLowerCase()
    return haystack.includes(q)
  })
}

/** v31 — per-standard device counts (drives the depth chips on the cards). */
export type DepthCounts = {
  blocks: number
  headings: number
  trees: number
  journals: number
  formulas: number
  examples: number
  tips: number
}

export const depthOf = (s: Standard): DepthCounts => {
  const c: DepthCounts = { blocks: s.blocks.length, headings: 0, trees: 0, journals: 0, formulas: 0, examples: 0, tips: 0 }
  for (const b of s.blocks as Block[]) {
    if (b.kind === "h") c.headings += 1
    else if (b.kind === "tree") c.trees += 1
    else if (b.kind === "journal") c.journals += 1
    else if (b.kind === "formula") c.formulas += 1
    else if (b.kind === "example") c.examples += 1
    else if (b.kind === "tip") c.tips += 1
  }
  return c
}

/** v31 — whole-catalog totals (the hub header shows the comprehensiveness). */
export const catalogStats = (): {
  standards: number
  blocks: number
  trees: number
  journals: number
  formulas: number
  examples: number
  tips: number
  notes: number
} => {
  const t = { standards: IFRS_SUMMARIES.length, blocks: 0, trees: 0, journals: 0, formulas: 0, examples: 0, tips: 0, notes: 0 }
  for (const s of IFRS_SUMMARIES) {
    t.blocks += s.blocks.length
    for (const b of s.blocks as Block[]) {
      if (b.kind === "tree") t.trees += 1
      else if (b.kind === "journal") t.journals += 1
      else if (b.kind === "formula") t.formulas += 1
      else if (b.kind === "example") t.examples += 1
      else if (b.kind === "tip") t.tips += 1
      else if (b.kind === "note") t.notes += 1
    }
  }
  return t
}

export { type Standard, type Topic, type TopicId, type Block } from "./types"
