/**
 * v30 — IFRS Summaries: the aggregate catalog. 41 standards — every
 * effective IFRS and IAS — each rendered as a bilingual handwritten
 * study-notes sheet in the style of the user's IFRS 15 notes PDF.
 */

import type { Standard, Topic, TopicId } from "./types"
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

export { type Standard, type Topic, type TopicId, type Block } from "./types"
