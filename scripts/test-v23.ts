/**
 * v23 test battery — IndexedDB chat persistence layer, full-length past
 * papers, video-course catalog, podcast expansion, custom-exam sizes and
 * the library reading-progress store. Offline (db-backed for the seed).
 *
 * Run: bun run scripts/test-v23.ts
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
  console.log("v23 — IndexedDB persistence · full papers · video courses · sizes\n")

  /* ---- IndexedDB chat store (offline — the browser layer, SSR-safe) ---- */
  const idb = await import("../src/lib/chat-idb")
  check("idb: module is SSR-safe (no top-level indexedDB access)", typeof idb.idbSaveConversation === "function")
  check("idb: deriveTitle truncates to 60 chars", idb.deriveTitle("x".repeat(200)).length <= 61)
  check("idb: deriveTitle falls back on empty input", idb.deriveTitle("   ") === "New conversation")
  // server-side calls must resolve to null instead of throwing
  const serverGet = await idb.idbGetConversation("test")
  check("idb: reads no-op on the server", serverGet === null)
  const serverList = await idb.idbListConversations()
  check("idb: listing no-ops on the server", Array.isArray(serverList) && serverList.length === 0)
  const serverPatch = await idb.idbPatchConversation("test", { title: "x" })
  check("idb: patch no-ops on the server", serverPatch === null || serverPatch === undefined)

  /* ---- past papers registry (offline) ---- */
  const { PAST_PAPERS } = await import("../src/lib/past-papers")
  // v24 extended the registry (16 papers, grouped by syllabus level) — the
  // v23 battery now guards the FLOOR: the seven v23 papers must remain
  check("papers: the seven v23 papers stay registered", ["acca-aa", "acca-aaa", "acca-fr", "acca-sbr", "soe-audit", "acca-fa", "acca-fm"].every((id) => PAST_PAPERS.some((p) => p.id === id)), `${PAST_PAPERS.length} total`)
  check("papers: AA and FR are full 30-question papers", ["acca-aa", "acca-fr"].every((id) => PAST_PAPERS.find((p) => p.id === id)?.count === 30))
  check("papers: AAA / SBR / SOE are full 24-question papers", ["acca-aaa", "acca-sbr", "soe-audit"].every((id) => PAST_PAPERS.find((p) => p.id === id)?.count === 24))
  check("papers: new FA (F3) + FM (F9) papers registered", ["acca-fa", "acca-fm"].every((id) => PAST_PAPERS.some((p) => p.id === id && p.count === 18)))
  check("papers: every paper bilingual + timed", PAST_PAPERS.every((p) => p.titleEn && p.titleAr && p.blurbEn && p.blurbAr && p.durationMin > 0))
  check("papers: all sources unique", new Set(PAST_PAPERS.map((p) => p.source)).size === PAST_PAPERS.length)

  /* ---- seeded bank questions (db) ---- */
  const { PrismaClient } = await import("@prisma/client")
  const db = new PrismaClient()
  for (const paper of PAST_PAPERS) {
    const qs = await db.bankQuestion.findMany({ where: { source: paper.source } })
    check(`paper ${paper.id}: ${paper.count} questions seeded`, qs.length === paper.count, `${qs.length} found`)
    check(
      `paper ${paper.id}: fully bilingual`,
      qs.every((q) => q.stemAr && q.optionsAr && q.explanationAr)
    )
    check(
      `paper ${paper.id}: 4 options + answer in range + no dupes`,
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
  check("papers: at least 168 past-paper questions (v22+v23 floor)", totalPapers >= 168, `${totalPapers}`)
  check("bank: at least 687 questions total (v23 floor)", (await db.bankQuestion.count()) >= 687, `${await db.bankQuestion.count()}`)
  await db.$disconnect()

  /* ---- video course catalog (offline) ---- */
  const { VIDEO_COURSES, VIDEO_CATEGORIES, ytThumb, ytEmbed } = await import("../src/lib/video-courses")
  check("video: at least 17 courses catalogued (v23 floor)", VIDEO_COURSES.length >= 17, `${VIDEO_COURSES.length}`)
  check("video: unique ids", new Set(VIDEO_COURSES.map((c) => c.id)).size === VIDEO_COURSES.length)
  const allLessons = VIDEO_COURSES.flatMap((c) => c.lessons)
  check("video: unique lesson video ids", new Set(allLessons.map((l) => l.id)).size === allLessons.length)
  check("video: every course bilingual + lessons with lengths", VIDEO_COURSES.every((c) => c.titleEn && c.titleAr && c.descEn && c.descAr && c.lessons.length > 0 && c.lessons.every((l) => l.id && l.title && l.length)))
  check("video: CPA Talks Audit 101 complete course (14 lessons)", VIDEO_COURSES.find((c) => c.id === "cpa-talks-audit-101")?.lessons.length === 14)
  check("video: Course Illustrator design track present (4 courses)", VIDEO_COURSES.filter((c) => c.category === "design").length === 4)
  check("video: Envato Tuts+ flagship course catalogued", VIDEO_COURSES.some((c) => c.channel === "Envato Tuts+"))
  check("video: thumbnails + embeds are youtube urls", ytThumb("abc").includes("i.ytimg.com/vi/abc/") && ytEmbed("abc").includes("youtube-nocookie.com/embed/abc"))
  check("video: category chips bilingual", VIDEO_CATEGORIES.every((c) => c.labelEn && c.labelAr))

  /* ---- podcast expansion (offline) ---- */
  const { YT_EPISODES } = await import("../src/lib/podcast-episodes")
  check("podcasts: 38 episodes catalogued", YT_EPISODES.length === 38, `${YT_EPISODES.length}`)
  check("podcasts: unique video ids", new Set(YT_EPISODES.map((e) => e.id)).size === YT_EPISODES.length)
  const cpaTalks = YT_EPISODES.filter((e) => e.channel === "CPA Talks").length
  check("podcasts: CPA Talks expanded to 23 episodes", cpaTalks === 23, `${cpaTalks}`)
  check("podcasts: every episode bilingual", YT_EPISODES.every((e) => e.blurbEn && e.blurbAr && e.title && e.length))

  /* ---- free course catalog growth (offline) ---- */
  const { FREE_COURSES } = await import("../src/lib/free-courses")
  check("courses: at least 20 free catalog entries (v23 floor)", FREE_COURSES.length >= 20, `${FREE_COURSES.length}`)
  check("courses: audit + skills categories populated", ["audit", "skills"].every((c) => FREE_COURSES.some((x) => x.category === c)))
  check("courses: CFI + AccountingCoach + World Bank + IMF represented", ["CFI", "AccountingCoach", "World Bank", "IMF"].every((p) => FREE_COURSES.some((c) => c.provider.includes(p))))

  /* ---- i18n keys for the new UI (offline) ---- */
  const { tt } = await import("../src/lib/i18n")
  const keyOk = (k: string) => {
    const en = tt(k as never, "en")
    const ar = tt(k as never, "ar")
    // tt() returns the path itself for missing keys — require a real translation
    return typeof en === "string" && en !== k && en.length > 0 && typeof ar === "string" && ar !== k && ar.length > 0
  }
  check("i18n: savedLocal + size keys present", ["ai.savedLocal", "exam.customSize", "exam.sizeMicro", "exam.sizeMini", "exam.sizeStandard", "exam.sizeFull"].every(keyOk))
  check("i18n: video course keys present", ["courses.videoTitle", "courses.videoWatch", "courses.videoLessons", "courses.videoArabic"].every(keyOk))
  check("i18n: library progress keys present", ["lib.studiedProgress", "lib.studiedMark", "lib.studiedUnmark", "lib.hideStudied", "lib.showAll", "lib.studiedHint"].every(keyOk))
  check("i18n: paperFull + freeCat keys present", ["exam.paperFull", "courses.freeCat_audit", "courses.freeCat_skills"].every(keyOk))

  /* ---- revision sheets (offline) ---- */
  const sheetsMod = await import("../src/components/audit/revision-sheets")
  check("revision sheets: component exports", typeof sheetsMod.RevisionSheets === "function")

  /* ---- sw cache + version bump (offline) ---- */
  const sw = readFileSync("public/sw.js", "utf-8")
  check("sw: a cache VERSION is declared", sw.includes('VERSION = "auditedge-v'))
  const pkg = JSON.parse(readFileSync("package.json", "utf-8"))
  check("package.json: version at least 23.0.0", pkg.version >= "23.0.0", pkg.version)

  console.log(`\n${pass} passed, ${fail} failed`)
  process.exit(fail > 0 ? 1 : 0)
}

void main()
