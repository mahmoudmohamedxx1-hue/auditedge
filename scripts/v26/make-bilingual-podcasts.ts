/** v26 — make every podcast episode bilingual & findable.
 *
 * Rewrites src/lib/podcast-episodes.ts from the single `title` field to
 * explicit `titleEn` + `titleAr`, so:
 *  - an English search ("qawain", "leases", "internal audit") finds episodes
 *  - an Arabic search (قوائم، الإيجارات، المراجعة) finds the same ones
 *  - the card shows the active-language title PLUS the other language as a
 *    secondary line — every podcast visible in English AND Arabic.
 *
 * The Qawaim (قوائم) show gets "Qawaim (Qawain) accounting podcast" as the
 * literal English title so the learner's exact spelling finds it instantly.
 */
import { readFileSync, writeFileSync } from "fs"

const SRC = "src/lib/podcast-episodes.ts"
const src = readFileSync(SRC, "utf8")

/** Hand-written English titles, keyed by video id. */
const EN: Record<string, string> = {
  "6sEAi4AQFAk": "Steps of External Audit — LIVE: the key steps every external auditor follows",
  "UlXAY_gALWI": "Consolidated financial statements — the detailed IFRS walkthrough",
  "6EP6b1U9UoY": "Financial instruments (IFRS 9) — the detailed deep dive",
  "TxWRD7oKE5Y": "IFRS 16 leases — the full workshop",
  "ZS5kKewKYM0": "PPE, intangibles & impairment — the detailed session (IAS 16/38/36)",
  "OJ1DZKbqH_I": "My path from graduation to practice — Egypt, the UAE and England",
  "nz0cjh6Xh8c": "Audit 101 (11) — testing costs and supplier balances",
  "Uspt0KvLmqI": "IAS 37 — provisions, contingent liabilities & contingent assets",
  "8HJK4AUrcWg": "Materiality — the classic explainer",
  "ucPoJ4Donp8": "Assertions — management's assertions, defined and classified",
  "Xi36nCBkEhw": "How you actually assess risks in an external audit",
  "7wwLJ3BtMkY": "Audit 101 (1) — what auditing is, and accepting the client",
  "95M3NEvILs4": "Audit 101 (10) — testing revenue and receivables",
  "wVt-6H3rgKg": "IFRS 15 revenue part one — the five-step model",
  "38FaKUZqAFk": "IFRS 15 revenue part two — specific transactions",
  "QaWORLvO12U": "IFRS 16 leases part one — lessee accounting",
  "Q5dKvZUSj2E": "IFRS 16 — avoid these common exemption mistakes",
  "XBTYjqVh34Q": "Expected Credit Loss model (ECL) under IFRS 9",
  "Pt5a8nL9zxk": "ECL workshop — building the model on a practical example",
  "4-bibVUG7Lk": "Professional certificates — an honest take on the DipIFR",
  "DnyRBQciaHc": "How to work in audit across the Gulf states",
  "u1FfkVCz4A8": "How to search for the RIGHT accounting or audit job",
  "xfjUkTrUt-w": "Distraction, and using the most important hours of your career",
  "ub6839N_vi4": "The Egyptian Standards on Auditing — the full explainer course",
  "Qt7Hq5sZ6YE": "Audit standards via solved MCQs — and how to study them",
  "6rnyhPzHoOg": "The logical sequence of the audit standards",
  "Y0MS9mB-MGo": "ESAA seminar — the latest Egyptian audit standards & assurance",
  "nuy_1rmd1Ao": "The new Egyptian auditing standards — key changes, summarized",
  "BXEW8QWOUt0": "IFRS 16 leases part one — lessee accounting (Hany Sayed)",
  "DOb0JqA3Xcc": "IFRS 15 revenue part one — the five-step model (Hany Sayed)",
  "hq_t4dI6nQ4": "IAS 1 — presentation of financial statements, full lecture",
  "Le1nxliKV_g": "Internal audit — what is internal audit?",
  "ryiKL82V3N8": "Governance, risk & internal audit — the Three Lines of Defense",
  "9HNTbsn4-v4": "Internal audit — one principle that professionalizes your reports",
  "VwzNNozTP7A": "A gentle orientation to the whole IFRS framework",
  "jBkuxDM-Akw": "Internal control and the internal auditor's mandate",
  "RW8Tqd6SZ8A": "IFRS — lecture one: the international standards",
  "_FD3QFfiZGQ": "IFRS 15 revenue recognition — the DipIFR clip 2.1",
  "O3yCuohfTvw": "Interview — Abdullah Al-Fawzan, CEO of KPMG (Accounting Club)",
  "uC8dJ92bR-c": "Interview — Tariq bin Abdulrahman Al-Sadhan (Accounting Club)",
  "WcRVDuc_j3g": "Interview — Mohammed bin Abdullah Al-Quwaiz (Accounting Club)",
  "969x9wzkwuA": "Interview — Dr. Abdullah Al-Fawzan (Accounting Club)",
  "qksSUQ2Mi8E": "Interview — Eng. Tariq bin Othman Al-Qusabi (Accounting Club)",
  "KseNc-kR8bk": "Interview — Saad bin Mohammed Al-Huwaymel (Accounting Club)",
  "JEwSK7CVHBg": "Qawaim (Qawain) accounting podcast — an accountant's journey",
  "v50Zzhsxtjk": "Qawaim (Qawain) accounting podcast — career paths as lived, not taught",
  "o4jVZw-y88E": "Qawaim (Qawain) accounting podcast — how to open your own accounting firm",
  "fnYqTLvtc7w": "Qawaim (Qawain) accounting podcast — accounting fraud",
  "uFoo6WVLWfU": "Qawaim (Qawain) accounting podcast — from academic to professional accounting",
  "NGMwBWptBtw": "Kenaz podcast — Hazem & Mokhles on passing the ACCA",
  "zch1iq8LOR0": "A father-and-son accounting partnership — the real story",
  "nPFm_CEg4go": "Working in financial risk — with Faisal Al-Jasser",
  "IViBzDwpCcc": "Professional growth — an accounting podcast with Ahmed Youssef",
}

/* Parse every episode block (id → block) from the current file. */
const blockRe = /  \{\n    id: "([^"]+)",\n    title: "((?:[^"\\]|\\.)*)",\n((?:.*?\n)*?)  \},/g
const blocks: { id: string; title: string; rest: string }[] = []
let m: RegExpExecArray | null
while ((m = blockRe.exec(src))) blocks.push({ id: m[1], title: m[2], rest: m[3] })

if (blocks.length !== 53) throw new Error(`expected 53 episodes, parsed ${blocks.length}`)
const missing = blocks.filter((b) => !EN[b.id]).map((b) => b.id)
if (missing.length) throw new Error(`missing EN titles: ${missing.join(", ")}`)

/* Re-emit each block with titleEn (new) + titleAr (the original title). */
const next = src
  .replace(
    `export type PodcastEpisode = {
  /** YouTube video id */
  id: string
  /** Original (Arabic) title */
  title: string`,
    `export type PodcastEpisode = {
  /** YouTube video id */
  id: string
  /** English title (searchable — "Qawain", "leases", "internal audit"…) */
  titleEn: string
  /** Arabic title (searchable — قوائم، الإيجارات، المراجعة…) */
  titleAr: string`
  )
  .replace(
    blockRe,
    (_full: string, id: string, title: string, rest: string) =>
      `  {\n    id: "${id}",\n    titleEn: "${EN[id]}",\n    titleAr: "${title}",\n${rest}  },`
  )

if (!next.includes("titleEn:")) throw new Error("schema splice failed")
writeFileSync(SRC, next)
console.log(`rewrote ${blocks.length} episodes with bilingual titles`)
