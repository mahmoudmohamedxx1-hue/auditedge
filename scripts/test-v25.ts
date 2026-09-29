/** v25 acceptance battery — five years of past papers for every exam.
 *
 *  Covers the v25 release:
 *   1. Paper registry: 17 families × 5 sittings (flagship + 4 dated), all
 *      resolvable, the IFRS diploma family findable FIRST.
 *   2. Bank: ~2,095 questions, every dated sitting seeded and bilingual,
 *      4 distinct options, answer positions spread across A–D.
 *   3. Generator hygiene: deterministic regeneration (compose twice →
 *      identical output), unique codes, no template used 3× in a sitting.
 *
 *  Run: bun run scripts/test-v25.ts */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()
let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  if (ok) {
    pass++
    console.log(`  ✓ ${name}${detail ? ` — ${detail}` : ""}`)
  } else {
    fail++
    console.log(`  ✗ ${name}${detail ? ` — ${detail}` : ""}`)
  }
}

async function main() {
  console.log("── 1. Paper registry (families × sittings) ────")
  const papers = await import("../src/lib/past-papers")
  const { PAST_PAPERS, PAPER_FAMILIES, PAPER_GROUPS, getPastPaper } = papers
  check("registry: 17 paper families", PAPER_FAMILIES.length === 17, `${PAPER_FAMILIES.length}`)
  check(
    "registry: every family has flagship + 4 dated sittings",
    PAPER_FAMILIES.every((f) => f.sittings.length === 4)
  )
  check("registry: 85 papers total (17×5)", PAST_PAPERS.length === 85, `${PAST_PAPERS.length}`)
  check("registry: every paper id resolves", PAST_PAPERS.every((p) => getPastPaper(p.id)?.id === p.id))
  const ifrsGroup = PAPER_GROUPS.find((g) => g.id === "ifrs")
  check("registry: the IFRS diploma group exists and is listed FIRST", PAPER_GROUPS[0]?.id === "ifrs" && !!ifrsGroup)
  const ifrsFam = PAPER_FAMILIES.find((f) => f.id === "ifrs-dip")
  check("registry: IFRS diploma family present with a 24Q flagship", ifrsFam?.flagship.count === 24)
  check(
    "registry: IFRS findable by search text",
    `${ifrsFam?.titleEn} ${ifrsFam?.flagship.blurbEn}`.toLowerCase().includes("ifrs")
  )
  check(
    "registry: dated sittings carry year labels",
    PAPER_FAMILIES.every((f) =>
      f.sittings.every((s) => /(2021|2022|2023|2024)/.test(s.titleEn))
    )
  )

  console.log("── 2. Seeded bank ────────────────────────────")
  const bankTotal = await db.bankQuestion.count()
  check("bank: ≥2,090 questions (873 + 1,222 new)", bankTotal >= 2_090, `${bankTotal}`)
  const paperSources = await db.bankQuestion.groupBy({
    by: ["source"],
    where: { source: { contains: "past paper" } },
    _count: { _all: true },
  })
  check("bank: 85 seeded past-paper sources", paperSources.length === 85, `${paperSources.length}`)
  let familiesWithFive = 0
  for (const fam of PAPER_FAMILIES) {
    const mine = [fam.flagship, ...fam.sittings].filter((p) =>
      paperSources.some((s) => s.source === p.source && s._count._all >= p.count)
    )
    if (mine.length === 5) familiesWithFive++
  }
  check("bank: all 17 families fully seeded (5 × ≥count)", familiesWithFive === 17, `${familiesWithFive}/17`)

  // spot-check three sittings fully (FR 2022, IFRS dip flagship, SOE 2024)
  const spotIds = ["acca-fr-2022j", "ifrs-dip", "soe-audit-2024j"]
  for (const id of spotIds) {
    const paper = getPastPaper(id)!
    const qs = await db.bankQuestion.findMany({ where: { source: paper.source } })
    check(`sitting ${id}: ${paper.count} questions seeded`, qs.length === paper.count, `${qs.length} found`)
    check(
      `sitting ${id}: fully bilingual`,
      qs.every((q) => q.stemAr && q.optionsAr && q.explanationAr)
    )
    check(
      `sitting ${id}: 4 distinct options + answer in range`,
      qs.every(
        (q) =>
          JSON.parse(q.options).length === 4 &&
          JSON.parse(q.optionsAr).length === 4 &&
          q.answerIndex >= 0 &&
          q.answerIndex <= 3 &&
          new Set(JSON.parse(q.options).map((o: string) => o.trim().toLowerCase())).size === 4
      )
    )
    const dist = [0, 0, 0, 0]
    for (const q of qs) dist[q.answerIndex]++
    check(`sitting ${id}: answer positions spread across A–D`, dist.every((d) => d > 0), `A=${dist[0]} B=${dist[1]} C=${dist[2]} D=${dist[3]}`)
  }

  console.log("── 3. Generator hygiene ──────────────────────")

  console.log("── 4. Course track reorganisation (offline) ──")
  const { VIDEO_COURSES, VIDEO_CATEGORIES } = await import("../src/lib/video-courses")
  check("courses: 36 video courses catalogued", VIDEO_COURSES.length === 36, `${VIDEO_COURSES.length}`)
  for (const track of ["acca", "cpa", "cma", "ifrs", "cfa", "audit"]) {
    check(`courses: the ${track.toUpperCase()} track exists with a bilingual label`, VIDEO_CATEGORIES.some((c) => c.id === track && c.labelEn && c.labelAr))
  }
  const byCat = (id: string) => VIDEO_COURSES.filter((c) => c.category === id).length
  check("courses: ACCA track carries 5 courses (incl. Tony Bell recategorised)", byCat("acca") === 5, `${byCat("acca")}`)
  check("courses: CMA track carries 4 Arabic courses", byCat("cma") === 4, `${byCat("cma")}`)
  check("courses: CPA track present (CPA Talks certification series)", byCat("cpa") >= 1, `${byCat("cpa")}`)
  check("courses: IFRS track grew to 6 (CertIFR + Hossam Saad series)", byCat("ifrs") === 6, `${byCat("ifrs")}`)
  check("courses: the 12.5-hour Arabic CertIFR course catalogued", VIDEO_COURSES.some((c) => c.id === "accounting-planet-certifr" && c.language === "AR"))
  check("courses: new track courses are all Arabic", ["accounting-planet-certifr", "hossam-saad-ifrs-series", "dr-ismail-dipifr", "mirchawala-fa-control", "yula-fa-specimen", "cpa-talks-cpa-track", "doms-cma-p1", "dr-ismail-cma-p1", "abdellakher-cma-p1", "sara-cma-p1"].every((id) => VIDEO_COURSES.find((c) => c.id === id)?.language === "AR"))

  console.log("── 5. Real conversation podcasts (offline) ──")
  const { YT_EPISODES, YT_CATEGORIES } = await import("../src/lib/podcast-episodes")
  check("podcasts: 53 episodes catalogued (38 + 15 conversations)", YT_EPISODES.length === 53, `${YT_EPISODES.length}`)
  check("podcasts: unique video ids", new Set(YT_EPISODES.map((e) => e.id)).size === YT_EPISODES.length)
  const conv = YT_EPISODES.filter((e) => e.category === "conversations")
  check("podcasts: 15 REAL conversation episodes (two people talking)", conv.length === 15, `${conv.length}`)
  check("podcasts: the conversations category is listed FIRST", YT_CATEGORIES[1]?.id === "conversations")
  check("podcasts: KPMG-CEO interview catalogued", conv.some((e) => e.id === "O3yCuohfTvw" && e.channel === "نادي المحاسبة"))
  const shortConv = conv.filter((e) => e.length.split(":").length === 2).length
  check("podcasts: 6 Accounting-Club interviews inside the ~20-minute range", shortConv >= 6, `${shortConv}`)
  check("podcasts: every episode bilingual", YT_EPISODES.every((e) => e.blurbEn && e.blurbAr && e.title && e.length))
  check("podcasts: explainer episodes kept untouched (23 CPA Talks remain)", YT_EPISODES.filter((e) => e.channel === "CPA Talks").length === 23)
  const { composeV25 } = await import("../scripts/seed/v25/families")
  const gen1 = composeV25()
  const gen2 = composeV25()
  check("generator: deterministic (compose twice → identical)", JSON.stringify(gen1) === JSON.stringify(gen2))
  check("generator: 1,236 questions generated", gen1.length === 1_236, `${gen1.length}`)
  check("generator: all codes unique", new Set(gen1.map((q) => q.code)).size === gen1.length)
  // no stem repeats within a family (flagship + all four sittings)
  const fams = [...new Set(gen1.map((q) => q.code.split("-")[0]))]
  let worstReuse = 0
  for (const fam of fams) {
    const counts = new Map<string, number>()
    for (const q of gen1.filter((x) => x.code.startsWith(`${fam}-`))) {
      counts.set(q.stem, (counts.get(q.stem) ?? 0) + 1)
    }
    for (const c of counts.values()) worstReuse = Math.max(worstReuse, c)
  }
  check("generator: no stem repeated inside one family (5 sittings)", worstReuse === 1, `max repeats = ${worstReuse}`)
  const dupStems = gen1.length - new Set(gen1.map((q) => q.stem)).size
  check(
    "generator: every stem in the v25 set is globally unique",
    dupStems === 0,
    `${dupStems} dups of ${gen1.length}`
  )
  const areas = new Set(gen1.map((q) => q.area))
  check("generator: areas stay within the exam taxonomy", [...areas].every((a) => ["auditing", "accounting", "egypt", "ethics"].includes(a)), [...areas].join(","))

  console.log("───────────────────────────────────────────────")
  console.log(`v25 battery: ${pass} pass · ${fail} fail`)
  if (fail > 0) process.exit(1)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
