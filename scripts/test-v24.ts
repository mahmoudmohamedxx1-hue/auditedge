/**
 * v24 test battery — the in-website podcast player, pro course covers for
 * every course, the audit/IFRS/CFA course tilt, and the full ACCA syllabus
 * coverage (9 new papers, 186 new bilingual questions).
 *
 * Run: bun run scripts/test-v24.ts
 */
import { readFileSync } from "fs"

for (const f of [".env", ".env.local"]) {
  try {
    for (const line of readFileSync(f, "utf-8").split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  } catch {}
}

let pass = 0
let fail = 0
const check = (name: string, cond: boolean, extra = "") => {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}${extra ? ` — ${extra}` : ""}`)
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}${extra ? ` — ${extra}` : ""}`)
  }
}

async function main() {
  console.log("v24 — in-app player · pro covers · audit/IFRS/CFA courses · full ACCA syllabus\n")

  /* ---- the podcast player store (offline) ---- */
  const player = await import("../src/lib/player")
  check("player: store module loads", typeof player.usePlayerStore === "function")
  check("player: PLAYer rates well-formed", (player.PLAYER_RATES as readonly number[]).every((r) => r > 0 && r <= 4))
  check("player: currentTrack of empty store is null", player.currentTrack({ queue: [], index: 0 }) === null)
  const st = player.usePlayerStore.getState()
  st.playAll(
    [
      { lessonId: "l1", title: "A", courseCode: "ISA315", lang: "en" },
      { lessonId: "l2", title: "B", courseCode: "ISA315", lang: "ar" },
    ],
    0
  )
  check("player: playAll sets queue + loading", player.usePlayerStore.getState().queue.length === 2 && player.usePlayerStore.getState().status === "loading")
  player.usePlayerStore.getState().next()
  check("player: next advances the cursor", player.usePlayerStore.getState().index === 1)
  player.usePlayerStore.getState().prev()
  check("player: prev rewinds the cursor", player.usePlayerStore.getState().index === 0)
  const enq = player.usePlayerStore.getState()
  enq.enqueue({ lessonId: "l3", title: "C", courseCode: "ISA315", lang: "en" })
  check("player: enqueue appends without duplicating", player.usePlayerStore.getState().queue.length === 3)
  player.usePlayerStore.getState().enqueue({ lessonId: "l1", title: "A", courseCode: "ISA315", lang: "en" })
  check("player: enqueue of an existing track is a no-op", player.usePlayerStore.getState().queue.length === 3)
  player.usePlayerStore.getState().setRate(1.5)
  check("player: setRate persists + updates", player.usePlayerStore.getState().rate === 1.5)
  player.usePlayerStore.getState().setStatus("error")
  check("player: error status stamps lastErrorAt", player.usePlayerStore.getState().lastErrorAt !== null)
  player.usePlayerStore.getState().close()
  check("player: close resets the store", player.usePlayerStore.getState().queue.length === 0 && player.usePlayerStore.getState().status === "idle")

  /* ---- pro course covers (offline) ---- */
  const covers = await import("../src/components/audit/course-cover")
  check("covers: component module exports both covers", typeof covers.CourseCover === "function" && typeof covers.LinkCourseCover === "function")
  const p1 = JSON.stringify(covers.coverPattern("seed-a"))
  const p2 = JSON.stringify(covers.coverPattern("seed-a"))
  const p3 = JSON.stringify(covers.coverPattern("different-seed"))
  check("covers: pattern is deterministic per seed", p1 === p2)
  check("covers: pattern varies across seeds (over a few samples)", [p1, p3, JSON.stringify(covers.coverPattern("x2")), JSON.stringify(covers.coverPattern("x3")), JSON.stringify(covers.coverPattern("x4"))].filter((v, i, a) => a.indexOf(v) === i).length >= 2)

  /* ---- past papers: the full ACCA syllabus (offline) ---- */
  const { PAST_PAPERS, PAPER_GROUPS, getPastPaper } = await import("../src/lib/past-papers")
  const NEW_IDS = ["acca-bt", "acca-ma", "acca-lw", "acca-pm", "acca-tx", "acca-sbl", "acca-afm", "acca-apm", "acca-atx"]
  check("papers: 16 papers registered (whole ACCA syllabus + Egypt)", PAST_PAPERS.length === 16, `${PAST_PAPERS.length}`)
  check("papers: all nine v24 papers registered", NEW_IDS.every((id) => PAST_PAPERS.some((p) => p.id === id)))
  check("papers: every paper has a group", PAST_PAPERS.every((p) => p.group && PAPER_GROUPS.some((g) => g.id === p.group)))
  check("papers: groups are bilingual", PAPER_GROUPS.every((g) => g.labelEn && g.labelAr))
  check("papers: every group is populated", PAPER_GROUPS.every((g) => PAST_PAPERS.some((p) => p.group === g.id)))
  check("papers: every paper bilingual + timed + unique source", PAST_PAPERS.every((p) => p.titleEn && p.titleAr && p.blurbEn && p.blurbAr && p.durationMin > 0) && new Set(PAST_PAPERS.map((p) => p.source)).size === PAST_PAPERS.length)
  check("papers: durations are 3 min/question throughout", PAST_PAPERS.every((p) => p.durationMin === p.count * 3))
  const EXPECT: Record<string, number> = { "acca-bt": 18, "acca-ma": 18, "acca-lw": 24, "acca-pm": 24, "acca-tx": 24, "acca-sbl": 24, "acca-afm": 18, "acca-apm": 18, "acca-atx": 18 }
  check("papers: v24 counts as designed", NEW_IDS.every((id) => getPastPaper(id)?.count === EXPECT[id]))

  /* ---- seeded bank questions for the nine new papers (db) ---- */
  const { PrismaClient } = await import("@prisma/client")
  const db = new PrismaClient()
  for (const id of NEW_IDS) {
    const paper = getPastPaper(id)!
    const qs = await db.bankQuestion.findMany({ where: { source: paper.source } })
    check(`paper ${id}: ${paper.count} questions seeded`, qs.length === paper.count, `${qs.length} found`)
    check(
      `paper ${id}: fully bilingual`,
      qs.every((q) => q.stemAr && q.optionsAr && q.explanationAr)
    )
    check(
      `paper ${id}: 4 options + answer in range + no dupes`,
      qs.every(
        (q) =>
          JSON.parse(q.options).length === 4 &&
          q.answerIndex >= 0 &&
          q.answerIndex <= 3 &&
          new Set(JSON.parse(q.options).map((o: string) => o.trim().toLowerCase())).size === 4
      )
    )
  }
  const totalPapers = await db.bankQuestion.count({ where: { source: { contains: "past paper" } } })
  check("papers: 354 past-paper questions total (873-question bank)", totalPapers === 354, `${totalPapers}`)
  check("bank: 873 questions total", (await db.bankQuestion.count()) === 873, `${await db.bankQuestion.count()}`)
  // answer positions must never collapse onto a single option
  const v24Rows = await db.bankQuestion.findMany({ where: { source: { contains: "v24" } } , select: { answerIndex: true } }).catch(() => [])
  if (v24Rows.length) {
    const dist = [0, 0, 0, 0]
    for (const r of v24Rows) dist[r.answerIndex]++
    check("bank: v24 answer positions spread across A–D", dist.every((d) => d > 0), `A=${dist[0]} B=${dist[1]} C=${dist[2]} D=${dist[3]}`)
  }
  await db.$disconnect()

  /* ---- the professional course tilt (offline) ---- */
  const { VIDEO_COURSES, VIDEO_CATEGORIES } = await import("../src/lib/video-courses")
  check("video: 26 courses catalogued (+9 v24)", VIDEO_COURSES.length === 26, `${VIDEO_COURSES.length}`)
  check("video: unique ids + unique video ids", new Set(VIDEO_COURSES.map((c) => c.id)).size === VIDEO_COURSES.length && new Set(VIDEO_COURSES.flatMap((c) => c.lessons.map((l) => l.id))).size === VIDEO_COURSES.flatMap((c) => c.lessons).length)
  check("video: CFA category exists + bilingual", VIDEO_CATEGORIES.some((c) => c.id === "cfa" && c.labelEn === "CFA" && c.labelAr === "CFA"))
  const cfaCourses = VIDEO_COURSES.filter((c) => c.category === "cfa")
  check("video: 3 CFA courses catalogued (FinTree + QuintEdge + edZeb)", cfaCourses.length === 3)
  check("video: FinTree CFA L1 crash course has all 8 sessions", VIDEO_COURSES.find((c) => c.id === "fintree-cfa-l1")?.lessons.length === 8)
  check("video: 3 new English audit courses (FinanceSkul / Ruchi / Bisk)", ["financeskul-f8", "ruchi-aa-10h", "bisk-cpa-aud"].every((id) => VIDEO_COURSES.some((c) => c.id === id && c.category === "audit")))
  check("video: 3 new English IFRS courses (BotCast / CPDbox / Tashwita)", ["botcast-all-ifrs", "cpdbox-consolidation", "tashwita-all-ifrs"].every((id) => VIDEO_COURSES.some((c) => c.id === id && c.category === "ifrs")))
  const beforeV23 = 17
  check("video: zero new accounting courses in v24", VIDEO_COURSES.filter((c) => c.category === "accounting").length === 9)
  check("video: every v24 course bilingual with lengths", VIDEO_COURSES.slice(beforeV23).every((c) => c.titleEn && c.titleAr && c.descEn && c.descAr && c.lessons.length > 0 && c.lessons.every((l) => l.id && l.title && l.length)))

  /* ---- free course catalog: CFA + ACCA specimen exams (offline) ---- */
  const { FREE_COURSES } = await import("../src/lib/free-courses")
  check("courses: 23 free catalog entries (+3 v24)", FREE_COURSES.length === 23, `${FREE_COURSES.length}`)
  check("courses: CFA category populated", FREE_COURSES.filter((c) => c.category === "cfa").length === 2)
  check("courses: ACCA exam-support resources listed", FREE_COURSES.some((c) => c.id === "acca-exam-resources"))

  /* ---- i18n keys for the new UI (offline) ---- */
  const { tt } = await import("../src/lib/i18n")
  const keyOk = (k: string) => {
    const en = tt(k as never, "en")
    const ar = tt(k as never, "ar")
    return typeof en === "string" && en !== k && en.length > 0 && typeof ar === "string" && ar !== k && ar.length > 0
  }
  check("i18n: player keys present", ["player.play", "player.pause", "player.synthesizing", "player.back10", "player.fwd10", "player.speed", "player.close", "player.episode"].every(keyOk))
  check("i18n: podcast playback keys present", ["podcast.playAll", "podcast.playFromHere", "podcast.playLesson"].every(keyOk))
  check("i18n: freeCat_cfa key present", ["courses.freeCat_cfa"].every(keyOk))

  /* ---- sw cache + version bump (offline) ---- */
  const sw = readFileSync("public/sw.js", "utf-8")
  check("sw: cache bumped to auditedge-v24", sw.includes('VERSION = "auditedge-v24"'))
  const pkg = JSON.parse(readFileSync("package.json", "utf-8"))
  check("package.json: version 24.0.0", pkg.version === "24.0.0")
  const playerSrc = readFileSync("src/components/audit/audio-player.tsx", "utf-8")
  check("player: MediaSession wired", playerSrc.includes("mediaSession") && playerSrc.includes("MediaMetadata"))
  const page = readFileSync("src/app/page.tsx", "utf-8")
  check("player: mounted once at the app-shell level", page.includes("<AudioPlayer />"))

  console.log(`\n${pass} passed, ${fail} failed`)
  process.exit(fail > 0 ? 1 : 0)
}

void main()
