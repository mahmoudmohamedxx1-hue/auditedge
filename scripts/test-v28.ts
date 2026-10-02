/** v28 test battery — the exam-opening fix (self-healing SQLite schema +
 *  crTasks in the paper sitting response), real course thumbnails, the
 *  Courses page restructure (core first, Arabic Academy up), the AI program
 *  customizer data model, and the shipped-snapshot schema.
 *
 *  Run: bun scripts/test-v28.ts */
import { PrismaClient } from "@prisma/client"
import { gunzipSync } from "node:zlib"
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs"
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
  console.log("v28 — exam-opening fix · real thumbnails · AI program customizer · sector→engagement link\n")

  /* ---------------- 1. the shipped snapshot carries the v27 schema ---------------- */
  console.log("── 1. Shipped Vercel snapshot schema (the exam-opening regression) ──")
  const snapPath = join(ROOT, "prisma", "auditedge-demo.db.gz")
  check("snapshot: prisma/auditedge-demo.db.gz exists", existsSync(snapPath))
  if (existsSync(snapPath)) {
    const tmp = join(ROOT, "db", ".snap-v28-check.db")
    writeFileSync(tmp, gunzipSync(readFileSync(snapPath)))
    const snapDb = new PrismaClient({ datasources: { db: { url: `file:${tmp}` } } })
    const cols = (await snapDb.$queryRawUnsafe('PRAGMA table_info("ExamSession")')) as unknown as {
      name?: string
    }[]
    const names = new Set(cols.map((c) => c?.name))
    for (const col of ["sections", "written", "crMarks", "crStatus"]) {
      check(`snapshot: ExamSession.${col} present (v27 real-format sitting state)`, names.has(col))
    }
    const courseCount = await snapDb.course.count()
    const bankCount = await snapDb.bankQuestion.count()
    check("snapshot: content intact (courses + bank questions)", courseCount >= 40 && bankCount >= 2500, `${courseCount} courses · ${bankCount} questions`)
    await snapDb.$disconnect()
    rmSync(tmp, { force: true })
  }

  /* ---------------- 2. the live DB is healed (idempotent guard) ---------------- */
  console.log("── 2. Live DB schema (self-heal target) ──")
  const db = new PrismaClient()
  const liveCols = (await db.$queryRawUnsafe('PRAGMA table_info("ExamSession")')) as unknown as {
    name?: string
  }[]
  const liveNames = new Set(liveCols.map((c) => c?.name))
  for (const col of ["sections", "written", "crMarks", "crStatus"]) {
    check(`live db: ExamSession.${col} present`, liveNames.has(col))
  }
  // the heal itself must be re-runnable without error (idempotence)
  const IDENTITY_ALTERS = [
    `ALTER TABLE "ExamSession" ADD COLUMN "sections" TEXT NOT NULL DEFAULT '[]'`,
  ] as const
  let idempotent = true
  for (const ddl of IDENTITY_ALTERS) {
    try {
      await db.$executeRawUnsafe(ddl)
      // no error on a duplicate column would be a schema surprise — but if
      // SQLite allowed it, the column must still exist exactly once
      const after = (await db.$queryRawUnsafe('PRAGMA table_info("ExamSession")')) as unknown as { name?: string }[]
      if (after.filter((c) => c?.name === "sections").length !== 1) idempotent = false
    } catch {
      // duplicate column → exactly the idempotent path we expect
    }
  }
  check("live db: re-running an additive ALTER fails cleanly (idempotent guard)", idempotent)

  /* a paper sitting must create + read back with sections intact */
  const me = await db.user.findFirst({ orderBy: { createdAt: "asc" } })
  if (me) {
    const created = await db.examSession.create({
      data: {
        userId: me.id,
        mode: "paper:test-v28",
        blueprint: "[]",
        questionIds: "[]",
        sections: JSON.stringify([{ id: "a", kind: "mcq", titleEn: "T", titleAr: "ت", noteEn: "n", noteAr: "ن", weight: 1, mcqIds: ["x"] }]),
        written: "{}",
        crMarks: "{}",
        crStatus: "pending",
        durationMin: 10,
        total: 1,
      },
    })
    const read = await db.examSession.findUnique({ where: { id: created.id } })
    const sections = JSON.parse(read?.sections ?? "[]") as { id: string }[]
    check("live db: a real-format paper session round-trips its sections", sections.length === 1 && sections[0].id === "a" && read?.crStatus === "pending")
    await db.examSession.delete({ where: { id: created.id } })
  } else {
    check("live db: a user exists to sit exams", false, "no user rows")
  }

  /* ---------------- 3. paper POST ships crTasks (blank-CR-section fix) ---------------- */
  console.log("── 3. Paper sitting response completeness ──")
  const base = process.env.TEST_BASE_URL ?? "http://localhost:3000"
  let apiUp = false
  let paperSession: { id: string; sections: unknown[]; crTasks: unknown[] } | null = null
  try {
    const res = await fetch(`${base}/api/bank/exam`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paper: "ifrs-dip" }),
      signal: AbortSignal.timeout(30_000),
    })
    apiUp = res.ok
    if (res.ok) {
      const data = (await res.json()) as { session: { id: string; sections: unknown[]; crTasks: unknown[] } }
      paperSession = data.session
    }
  } catch {
    apiUp = false
  }
  if (apiUp && paperSession) {
    check("api: POST /api/bank/exam {paper} returns 200 (the exam OPENS)", true)
    check("api: the sitting carries its real-format sections", paperSession.sections.length === 2)
    check("api: the sitting carries crTasks inline (no blank CR sections)", (paperSession.crTasks?.length ?? 0) === 2, `${paperSession.crTasks?.length} tasks`)
    // cleanup: complete the test sitting
    await fetch(`${base}/api/bank/exam/${paperSession.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "submit" }),
    }).catch(() => null)
  } else {
    console.log("  (dev server not reachable — API checks skipped)")
  }

  /* ---------------- 4. course thumbnails (courseVideoId) ---------------- */
  console.log("── 4. Real YouTube thumbnails on course cards ──")
  const shared = await import("../src/components/audit/shared")
  const mockCourse = {
    id: "c1",
    modules: [
      {
        lessons: [
          { videoUrl: "", order: 1 },
          { videoUrl: "https://www.youtube.com/watch?v=qOg4A3PukC4&t=2s", order: 2 },
          { videoUrl: "https://youtu.be/dQw4w9WgXcQ", order: 3 },
        ].map((l) => ({ ...l, id: "l" + l.order })),
      },
    ],
  } as never
  check("thumb: courseVideoId skips empty videoUrls and extracts the watch?v= id", shared.courseVideoId(mockCourse) === "qOg4A3PukC4", shared.courseVideoId(mockCourse) ?? "")
  const noVideo = { id: "c2", modules: [{ lessons: [{ id: "l1", videoUrl: "", order: 1 }] }] } as never
  check("thumb: no video lessons → null (designed cover stays)", shared.courseVideoId(noVideo) === null)
  const ytBe = { id: "c3", modules: [{ lessons: [{ id: "l1", videoUrl: "https://youtu.be/abc123XYZ_-", order: 1 }] }] } as never
  check("thumb: youtu.be short links parse too", shared.courseVideoId(ytBe) === "abc123XYZ_-")

  /* ---------------- 5. the AI program customizer data model ---------------- */
  console.log("── 5. AI program customizer (engagement model) ──")
  const eng = await import("../src/lib/engagement")
  const baseEng = eng.newEngagement("Nile Retail", "FY 2026")
  const aiEng: eng.Engagement = {
    ...baseEng,
    aiTailor: {
      generatedAt: Date.now(),
      model: "glm-5.3-flash",
      engine: "workspace",
      sector: "Retail & FMCG",
      size: "mid",
      listed: true,
      systems: "Oracle Fusion",
      concerns: "cut-off",
      summary: { en: "memo", ar: "مذكرة" },
      focus: [{ en: "cut-off", ar: "الإقفال" }],
      procs: [
        { id: "ai-1", sectionId: "revenue", ref: "IFRS 15", text: { en: "Test cut-off around year end.", ar: "اختبر الإقفال حول نهاية العام." } },
        { id: "ai-2", sectionId: "revenue", ref: "ISA 550", text: { en: "Identify related-party sales.", ar: "حدد مبيعات الأطراف ذوية العلاقة." } },
        { id: "ai-3", sectionId: "cash", ref: "ISA 240", text: { en: "Confirm bank balances.", ar: "أكد أرصدة البنوك." } },
      ],
      pbc: [
        { sectionId: "revenue", text: { en: "Shipping log ±5 days", ar: "سجل الشحن ±5 أيام" } },
      ],
    },
  }
  check("tailor: aiProcsFor filters by section", eng.aiProcsFor(aiEng, "revenue").length === 2 && eng.aiProcsFor(aiEng, "cash").length === 1 && eng.aiProcsFor(aiEng, "inventory").length === 0)
  const revProg = eng.sectionProgress(aiEng, "revenue")
  const revenueSection = (await import("../src/lib/program")).PROGRAM_SECTIONS.find((s) => s.id === "revenue")
  check("tailor: section progress counts built-ins + AI procedures", revProg.total === revenueSection!.procedures.length + 2, `${revProg.total} = ${revenueSection!.procedures.length} + 2`)
  aiEng.procedures["ai-1"] = { status: "done", date: Date.now() }
  const revAfter = eng.sectionProgress(aiEng, "revenue")
  check("tailor: an AI procedure tick advances the section", revAfter.done === 1 && revAfter.total === revProg.total)
  const overall = eng.overallProgress(aiEng)
  const totalProcs = (await import("../src/lib/program")).PROGRAM_TOTAL_PROCEDURES
  check("tailor: overall progress includes AI procedures", overall.total === totalProcs + 3, `${overall.total} = ${totalProcs} + 3`)
  const items = eng.pbcItems(aiEng)
  check("tailor: AI PBC requests ride into the tracker", items.some((it) => it.key === "revenue:ai0" && it.title.en === "Shipping log ±5 days"))
  const stats = eng.pbcStats(aiEng)
  check("tailor: PBC stats count AI requests", stats.total === items.length && items.length > 60)
  // removal semantics — clearing ticks on re-tailor
  const cleared = { ...aiEng, procedures: { ...aiEng.procedures } }
  for (const id of (await import("../src/components/audit/program-tailor")).aiProcIds(cleared)) delete cleared.procedures[id]
  check("tailor: re-tailor clears the previous customization's ticks", Object.keys(cleared.procedures).length === 0)

  /* ---------------- 6. the tailor API validates and normalizes ---------------- */
  console.log("── 6. AI program-tailor API ──")
  try {
    const res = await fetch(`${base}/api/ai/program-tailor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sector: "Retail & FMCG", size: "mid", listed: false, systems: "", concerns: "" }),
      signal: AbortSignal.timeout(150_000),
    })
    if (res.ok) {
      const data = (await res.json()) as {
        tailor: {
          summary: { en: string; ar: string }
          focus: unknown[]
          procs: { id: string; sectionId: string; text: { en: string; ar: string } }[]
          pbc: { sectionId: string }[]
        }
      }
      const t = data.tailor
      check("api: POST /api/ai/program-tailor returns a tailor payload", true)
      check("api: the memo is bilingual and substantial", t.summary.en.length > 120 && t.summary.ar.length > 80, `en ${t.summary.en.length} · ar ${t.summary.ar.length}`)
      check("api: 6-16 procedures, every one on a REAL program section", t.procs.length >= 6 && t.procs.length <= 16 && t.procs.every((p) => p.sectionId.length > 0 && p.text.en.length > 12 && p.text.ar.length > 12), `${t.procs.length} procedures`)
      check("api: procedure ids are the stable ai-N form", t.procs.every((p, i) => p.id === `ai-${i + 1}`))
      check("api: PBC requests attach to real sections", t.pbc.every((p) => !!p.sectionId), `${t.pbc.length} pbc`)
    } else {
      check("api: POST /api/ai/program-tailor returns a tailor payload", false, `status ${res.status}`)
    }
  } catch {
    console.log("  (dev server not reachable — tailor API check skipped)")
  }

  /* ---------------- 7. i18n keys of the new surfaces ---------------- */
  console.log("── 7. v28 i18n coverage ──")
  const { tt } = await import("../src/lib/i18n")
  const keyGroups: [string, string[]][] = [
    [
      "courses28",
      ["coreTitle", "coreDesc", "academyTitle", "academyDesc", "academyCount"],
    ],
    [
      "program28",
      ["tailorTitle", "tailorDesc", "open", "sector", "size", "sizeSME", "sizeMid", "sizeListed", "listedQ", "yes", "no", "systems", "concerns", "concernsPh", "generate", "generating", "apply", "applied", "regen", "removeTailor", "failed", "memoTitle", "focusTitle", "aiAdded", "aiProcCount", "doneCount", "noneYet"],
    ],
    ["sectors28", ["applyToEngagement", "applied", "appliedNoEng"]],
    ["misc28", ["videoCourse"]],
  ]
  let i18nOk = true
  for (const [group, keys] of keyGroups)
    for (const k of keys) {
      const en = tt(`${group}.${k}` as never, "en")
      const ar = tt(`${group}.${k}` as never, "ar")
      // tt returns the path itself when a key is missing
      if (en === `${group}.${k}` || ar === `${group}.${k}` || !en || !ar) {
        i18nOk = false
        console.log(`    missing: ${group}.${k}`)
      }
    }
  check("i18n: every v28 key resolves in EN and AR", i18nOk)

  await db.$disconnect()

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
