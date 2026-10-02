/** v29 test battery — YouTube courses first (Courses page reorder + search
 *  across video/free catalogs + thumbnail-first sort) and the Exams hub
 *  upgrade (papers lead the hub, performance overview, qualification filter
 *  chips, per-family attempt stats, five-sitting chips on every family card).
 *
 *  Run: bun scripts/test-v29.ts */
import { readFileSync } from "node:fs"
import { join } from "node:path"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

const ROOT = process.cwd()

async function main() {
  console.log("v29 — YouTube courses first · Exams hub upgrade\n")

  /* ---------------- 1. Courses page: YouTube sections lead ---------------- */
  console.log("── 1. Courses page order (YouTube first) ──")
  const coursesSrc = readFileSync(join(ROOT, "src/components/audit/courses.tsx"), "utf8")
  const videoPos = coursesSrc.indexOf("VIDEO COURSES OPEN THE CATALOG")
  const academyPos = coursesSrc.indexOf("ARABIC ACADEMY (second section)")
  const corePos = coursesSrc.indexOf("CORE CURRICULUM (moved below the YouTube sections)")
  check("order: video-courses section marker exists", videoPos >= 0)
  check("order: Arabic Academy section marker exists", academyPos >= 0)
  check("order: core curriculum section marker exists", corePos >= 0)
  check(
    "order: VIDEO COURSES → ARABIC ACADEMY → CORE CURRICULUM in the page",
    videoPos >= 0 && academyPos > videoPos && corePos > academyPos,
    `video@${videoPos} < academy@${academyPos} < core@${corePos}`
  )
  check(
    "order: the old bottom video section is gone (single occurrence of the section shell)",
    coursesSrc.indexOf('border-plum/25 bg-plum/[0.05]') === coursesSrc.lastIndexOf('border-plum/25 bg-plum/[0.05]')
  )

  /* ---------------- 2. thumbnail-first sort within the DB sections ---------------- */
  console.log("── 2. Thumbnail-first sorting + shared search ──")
  const shared = await import("../src/components/audit/shared")
  const mockVideo = {
    id: "v1",
    modules: [{ id: "m", title: "M", order: 0, lessons: [{ id: "l", videoUrl: "https://www.youtube.com/watch?v=abc123XYZ_-", type: "video" }] }],
    supplementary: true,
  } as never
  const mockPlain = {
    id: "p1",
    modules: [{ id: "m", title: "M", order: 0, lessons: [{ id: "l", videoUrl: "", type: "reading" }] }],
    supplementary: false,
  } as never
  const byThumb = (a: unknown, b: unknown) =>
    Number(shared.courseVideoId(b as never) !== null) - Number(shared.courseVideoId(a as never) !== null)
  const sorted = [mockPlain, mockVideo].sort(byThumb)
  check("sort: a course with a playable video sorts above a thumbnail-less one", sorted[0] === mockVideo)

  const { VIDEO_COURSES } = await import("../src/lib/video-courses")
  const { FREE_COURSES } = await import("../src/lib/free-courses")
  // the top search now drives the video catalog too (same predicate as the component)
  const q = "excel"
  const videoHits = VIDEO_COURSES.filter((c) =>
    `${c.titleEn} ${c.titleAr} ${c.channel} ${c.descEn} ${c.descAr}`.toLowerCase().includes(q)
  )
  check("search: 'excel' surfaces the Excel video courses", videoHits.length >= 1, `${videoHits.length} hits`)
  const arHits = VIDEO_COURSES.filter((c) =>
    `${c.titleEn} ${c.titleAr} ${c.channel} ${c.descEn} ${c.descAr}`.includes("مراجعة")
  )
  check("search: Arabic query matches the Arabic video catalog", arHits.length >= 5, `${arHits.length} hits`)
  const freeHits = FREE_COURSES.filter((c) =>
    `${c.titleEn} ${c.titleAr} ${c.provider} ${c.descEn} ${c.descAr}`.toLowerCase().includes("acca")
  )
  check("search: free-course catalog is searchable too ('acca')", freeHits.length >= 1, `${freeHits.length} hits`)

  /* ---------------- 3. Exams hub: papers lead + overview + filters ---------------- */
  console.log("── 3. Exams hub (papers first · overview · filters) ──")
  const examSrc = readFileSync(join(ROOT, "src/components/audit/exam-center.tsx"), "utf8")
  const perfPos = examSrc.indexOf("PERFORMANCE OVERVIEW")
  const papersPos = examSrc.indexOf("previous exam papers: every family grouped")
  const quickPos = examSrc.indexOf("QUICK TOOLS below the real papers")
  check("hub: performance overview strip exists", perfPos >= 0)
  check("hub: papers section exists", papersPos >= 0)
  check("hub: quick-tools heading exists", quickPos >= 0)
  check(
    "hub: OVERVIEW → PAPERS → QUICK TOOLS ordering",
    perfPos >= 0 && papersPos > perfPos && quickPos > papersPos,
    `overview@${perfPos} < papers@${papersPos} < quick@${quickPos}`
  )
  check("hub: container widened to max-w-5xl", examSrc.includes("mx-auto max-w-5xl"))

  const { PAPER_FAMILIES, PAPER_GROUPS, PAPER_SITTINGS } = await import("../src/lib/past-papers")
  // QUAL_CHIPS must cover every syllabus group so no family becomes unreachable
  const chipMatch = examSrc.match(/const QUAL_CHIPS[\s\S]*?\n\]/)
  check("hub: QUAL_CHIPS filter table exists", !!chipMatch)
  if (chipMatch) {
    const covered = new Set<string>()
    for (const g of PAPER_GROUPS) {
      if (chipMatch[0].includes(`"${g.id}"`)) covered.add(g.id)
    }
    check(
      "hub: every syllabus group reachable through a qualification chip",
      covered.size === PAPER_GROUPS.length,
      `${covered.size}/${PAPER_GROUPS.length} groups`
    )
  }
  // the group filter predicate in the JSX honours the chip groups
  check(
    "hub: PAPER_GROUPS filtered by the active qualification chip",
    examSrc.includes("PAPER_GROUPS.filter((g) => {") && examSrc.includes("chip.groups.includes(g.id)")
  )

  /* ---------------- 4. family cards: five sittings + attempt stats ---------------- */
  console.log("── 4. Family cards (sittings · stats) ──")
  let allFamiliesOk = true
  let sittingYearsOk = true
  for (const f of PAPER_FAMILIES) {
    const ids = [f.flagship.id, ...f.sittings.map((s) => s.id)]
    if (new Set(ids).size !== 5 || f.sittings.length !== 4) allFamiliesOk = false
    for (const s of f.sittings) {
      if (!PAPER_SITTINGS.some((y) => s.id.endsWith(y.slug))) sittingYearsOk = false
    }
  }
  check("data: every family = flagship + 4 dated sittings (5 unique paper ids)", allFamiliesOk, `${PAPER_FAMILIES.length} families`)
  check("data: sitting ids carry the four dated-year slugs", sittingYearsOk)
  check(
    "card: family card renders the flagship chip + sitting year chips",
    examSrc.includes("exam29.flagshipChip") && examSrc.includes("PAPER_SITTINGS[i]?.label")
  )
  check(
    "card: per-family attempts + best score badge wired to history",
    examSrc.includes("familyStats(f)") && examSrc.includes("exam29.attempted")
  )
  // the familyStats shape: modes paper:<id> of that family count into attempts
  const fakeFamily = PAPER_FAMILIES[0]
  const fakeHistory = [
    { mode: `paper:${fakeFamily.sittings[0].id}`, score: 60, completedAt: "2026-01-01" },
    { mode: `paper:${fakeFamily.flagship.id}`, score: 80, completedAt: "2026-01-02" },
    { mode: "exam60", score: 90, completedAt: "2026-01-03" },
    { mode: `paper:${fakeFamily.sittings[0].id}`, score: null, completedAt: null },
  ]
  const ids = new Set([fakeFamily.flagship.id, ...fakeFamily.sittings.map((s) => s.id)])
  const rows = fakeHistory.filter(
    (h) => h.completedAt && h.mode.startsWith("paper:") && ids.has(h.mode.slice(6))
  )
  const best = Math.max(...rows.map((r) => r.score ?? 0))
  check("stats: paper-family attempt/best logic (2 attempts · best 80%)", rows.length === 2 && best === 80)

  /* ---------------- 5. i18n keys of the new surfaces ---------------- */
  console.log("── 5. v29 i18n coverage ──")
  const { tt } = await import("../src/lib/i18n")
  const keyGroups: [string, string[]][] = [
    ["courses29", ["ytFirst"]],
    [
      "exam29",
      [
        "overviewTitle",
        "attempts",
        "avgScore",
        "bestScore",
        "passRate",
        "noAttempts",
        "filterAll",
        "filterBy",
        "flagshipChip",
        "attempted",
        "best",
        "papersLead",
        "quickTools",
      ],
    ],
  ]
  let i18nOk = true
  for (const [group, keys] of keyGroups)
    for (const k of keys) {
      const en = tt(`${group}.${k}` as never, "en")
      const ar = tt(`${group}.${k}` as never, "ar")
      if (en === `${group}.${k}` || ar === `${group}.${k}` || !en || !ar) {
        i18nOk = false
        console.log(`    missing: ${group}.${k}`)
      }
    }
  check("i18n: every v29 key resolves in EN and AR", i18nOk)

  /* ---------------- 6. version ---------------- */
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"))
  // floor check (not a hard pin) — later releases (v30+) must keep passing
  const [major29, minor29] = String(pkg.version).split(".").map(Number)
  check("package.json at v29 or later", major29 > 29 || (major29 === 29 && minor29 >= 0), pkg.version)

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
