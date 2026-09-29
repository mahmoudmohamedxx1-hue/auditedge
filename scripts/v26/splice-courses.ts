/** v26 — splice the generated FULL courses into video-courses.ts and drop
 *  the single-lecture fragments they replace.
 *
 *  Removed (fragments / superseded):
 *    accounting-planet-certifr (1 video)  → certifr-planet-full (51 sessions)
 *    dr-ismail-dipifr (1 intro video)     → dipifr-abdelnaim (51 lectures)
 *    mirchawala-fa-control (1 topic video) → acca-f3-sowmya (32 chapters)
 *    yula-fa-specimen (1 walkthrough)     → covered by the full F3 course
 *    doms-cma-p1 (1 unit)                 → cma-p1-amro (30 lectures)
 *    dr-ismail-cma-p1 (2 sittings)        → superseded by the full P1
 *    abdellakher-cma-p1 (1 lecture)       → superseded by the full P1
 *    sara-cma-p1 (1 topic)                → superseded by the full P1
 *  Added beyond the replacements:
 *    cma-p2-amro (19 lectures), cma-p1-efham (47 sessions),
 *    cpa-aud-amro (21 lectures), cpa-far-amro (29 lectures)
 *
 *  Run: bunx tsx scripts/v26/splice-courses.ts */
import { readFileSync, writeFileSync } from "fs"

const FILE = "src/lib/video-courses.ts"
const OUT = "scripts/v26/gen-courses.out"

const DROP = [
  "accounting-planet-certifr",
  "dr-ismail-dipifr",
  "mirchawala-fa-control",
  "yula-fa-specimen",
  "doms-cma-p1",
  "dr-ismail-cma-p1",
  "abdellakher-cma-p1",
  "sara-cma-p1",
]

let src = readFileSync(FILE, "utf8")
const generated = readFileSync(OUT, "utf8")

/* ---- 1. drop each fragment entry (an entry ends at "\n  },\n" — two-space indent) ---- */
for (const id of DROP) {
  const re = new RegExp(`  \\{\\n    id: "${id}",[\\s\\S]*?\\n  \\},\\n`, "")
  const before = src
  src = src.replace(re, "")
  if (src === before) throw new Error(`fragment entry not found: ${id}`)
}

/* ---- 2. build the insertion block from the generator output ---- */
const courses = generated
  .split("\n")
  .filter((l) => !l.startsWith("/* ====="))
  .join("\n")
  .replace(/\n{3,}/g, "\n\n")
  .trimEnd()

const header = `  /* ==================== v26 — FULL courses replacing the one-lecture
   *  fragments ("courses that are only one lecture — not the full picture").
   *  Complete Arabic playlists: CMA Part 1 & Part 2 (Amro Taison), CMA P1
   *  2026 section A (Efham CMA), CPA AUD + FAR (Amro Taison), the full
   *  DipIFR diploma (Abdalla Abdelnaim, 100+ hours), the complete CertIFR
   *  session course (The Accounting Planet) and the chapter-by-chapter ACCA
   *  FA/F3 course (Sowmya Sasun). Every id, title and duration captured
   *  live from the playlist pages on 2026-09-29. */\n`

/* ---- 3. insert after the cpa-talks-cpa-track entry (keeps the track
   *  orientation series, then the full CPA courses) ---- */
const anchor = `  {\n    id: "cpa-talks-cpa-track",`
const at = src.indexOf(anchor)
if (at < 0) throw new Error("anchor cpa-talks-cpa-track not found")
// find the end of that entry: the next "\n  },\n" after the anchor
const end = src.indexOf("\n  },\n", at)
if (end < 0) throw new Error("anchor end not found")
const insertAt = end + "\n  },\n".length
src = src.slice(0, insertAt) + "\n" + header + courses + "\n" + src.slice(insertAt)

writeFileSync(FILE, src)
console.log("spliced: 8 fragments removed, 8 full courses inserted")
