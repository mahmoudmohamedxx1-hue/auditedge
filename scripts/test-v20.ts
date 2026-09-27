/**
 * v20 offline verification battery — bank, blueprint, SRS, analytics,
 * simulation scenario, seeded content, and workpaper templates.
 * Run: bun run scripts/test-v20.ts
 */
import { PrismaClient } from "@prisma/client"
import { execSync } from "child_process"
import { join } from "path"
import { readFileSync } from "fs"

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
  console.log("── 1. Question bank (P0-1) ────────────────────")
  const [total, withAr, auditing, accounting, egypt, ethics] = await Promise.all([
    db.bankQuestion.count(),
    db.bankQuestion.count({ where: { stemAr: { not: null } } }),
    db.bankQuestion.count({ where: { area: "auditing" } }),
    db.bankQuestion.count({ where: { area: "accounting" } }),
    db.bankQuestion.count({ where: { area: "egypt" } }),
    db.bankQuestion.count({ where: { area: "ethics" } }),
  ])
  check("bank size ≥ 500", total >= 500, `${total} questions`)
  check("with Arabic ≥ 100 (v20.1 expansion)", withAr >= 100, `${withAr}`)
  check("all four exam sections covered", auditing > 150 && accounting > 50 && egypt > 30 && ethics > 20, `aud ${auditing} · acc ${accounting} · egy ${egypt} · eth ${ethics}`)
  const tags = await db.bankQuestion.groupBy({ by: ["standardTag"], _count: true })
  check("≥ 25 distinct standard tags", tags.length >= 25, `${tags.length} tags`)
  const broken = await db.bankQuestion.findMany()
  const invalid = broken.filter((q) => {
    const opts = JSON.parse(q.options) as string[]
    // v21: true/false items (2 options) are now part of the bank — accept
    // 2-6 options; the answer key must sit inside the actual option count
    return (
      opts.length < 2 ||
      opts.length > 6 ||
      opts.some((o: string) => typeof o !== "string" || !o.trim()) ||
      q.answerIndex < 0 ||
      q.answerIndex > opts.length - 1 ||
      q.difficulty < 1 ||
      q.difficulty > 3
    )
  })
  check("every question: 2-6 options, valid answer, difficulty 1-3", invalid.length === 0, invalid.length ? `${invalid.length} bad` : "clean")

  console.log("── 2. Exam blueprint (P0-1) ───────────────────")
  const { allocateByBlueprint, sampleExam, EXAM_MODES, seededRandom } = await import("../src/lib/exam-blueprint")
  const alloc = allocateByBlueprint(40)
  const allocSum = alloc.reduce((a, s) => a + s.count, 0)
  check("blueprint allocation sums to question count", allocSum === 40, `${JSON.stringify(alloc.map((a) => `${a.area}:${a.count}`))}`)
  check("weights ≈ 45/30/15/10", alloc[0].count === 18 && alloc[1].count === 12, `auditing ${alloc[0].count}/40, accounting ${alloc[1].count}/40`)
  const pool = Array.from({ length: 600 }, (_, i) => ({
    id: `q${i}`,
    area: ["auditing", "accounting", "egypt", "ethics"][i % 4],
    difficulty: (i % 3) + 1,
  }))
  const paper1 = sampleExam(pool, "exam60", 42)
  const paper2 = sampleExam(pool, "exam60", 42)
  check("same seed → same paper (deterministic)", JSON.stringify(paper1.questionIds) === JSON.stringify(paper2.questionIds))
  const paper3 = sampleExam(pool, "exam60", 7)
  check("different seed → different paper", JSON.stringify(paper1.questionIds) !== JSON.stringify(paper3.questionIds) || pool.length < 40)
  check("exam60 = 40 questions, exam90 = 60", EXAM_MODES.exam60.questionCount === 40 && EXAM_MODES.exam90.questionCount === 60)
  const rnd = seededRandom(123)
  const vals = [rnd(), rnd(), rnd()]
  check("seeded PRSM in [0,1)", vals.every((v) => v >= 0 && v < 1))
  let sizesOk = true
  for (let seed = 1; seed <= 30; seed++) {
    const p60 = sampleExam(pool, "exam60", seed)
    const p90 = sampleExam(pool, "exam90", seed)
    if (p60.questionIds.length !== 40 || p90.questionIds.length !== 60) sizesOk = false
  }
  check("sitting size invariant (40/60 across 30 seeds)", sizesOk)
  const uniqueOk = new Set(sampleExam(pool, "exam60", 99).questionIds).size === 40
  check("no duplicate questions in a sitting", uniqueOk)

  console.log("── 3. SRS scheduler (P0-3) ────────────────────")
  const { scheduleNext } = await import("../src/lib/srs")
  const now = new Date("2026-06-01T10:00:00Z")
  const again = scheduleNext({ ease: 2.5, intervalDays: 5, reps: 3, lapses: 0 }, 0, now)
  check("grade 'again' → +10 minutes, lapse counted", again.dueAt.getTime() === now.getTime() + 10 * 60_000 && again.lapses === 1)
  const firstGood = scheduleNext({ ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 }, 2, now)
  check("first 'good' → 1 day", firstGood.intervalDays === 1)
  const firstEasy = scheduleNext({ ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 }, 3, now)
  check("first 'easy' → 3 days, ease up", firstEasy.intervalDays === 3 && firstEasy.ease === 2.65)
  const ladder = scheduleNext({ ease: 2.5, intervalDays: 10, reps: 4, lapses: 0 }, 2, now)
  check("recurring 'good' → interval × ease", ladder.intervalDays === 25)
  const hard = scheduleNext({ ease: 1.3, intervalDays: 5, reps: 4, lapses: 2 }, 1, now)
  check("'hard' eases down but never below 1.3", hard.ease >= 1.3 && hard.intervalDays === 6)

  console.log("── 4. Analytics math (P1-4) ───────────────────")
  const { masteryByTag, readinessByArea } = await import("../src/lib/analytics")
  const t0 = new Date(Date.now() - 3 * 86400_000)
  const tOld = new Date(Date.now() - 90 * 86400_000)
  const attempts = [
    { questionId: "a", correct: true, standardTag: "ISA 240", area: "auditing", difficulty: 2, createdAt: t0 },
    { questionId: "b", correct: true, standardTag: "ISA 240", area: "auditing", difficulty: 2, createdAt: t0 },
    { questionId: "c", correct: false, standardTag: "ISA 240", area: "auditing", difficulty: 2, createdAt: tOld },
    { questionId: "d", correct: false, standardTag: "IFRS 15", area: "accounting", difficulty: 3, createdAt: t0 },
  ]
  const m = masteryByTag(attempts)
  const isa240 = m.find((x) => x.tag === "ISA 240")!
  check("recent answers dominate mastery (recency decay)", isa240.mastery > 50, `mastery ${isa240.mastery} (recent 2/2, old miss)`)
  const weakFirst = m.find((x) => x.tag === "IFRS 15")
  check("single-attempt tag is confidence-damped", !!weakFirst && weakFirst.mastery < 60, `mastery ${weakFirst?.mastery}`)
  const r = readinessByArea(attempts, [
    { area: "auditing", count: 100 },
    { area: "accounting", count: 100 },
  ])
  const auditR = r.find((x) => x.area === "auditing")!
  check("coverage damps readiness (3 attempts ≠ ready)", auditR.readiness < 100, `readiness ${auditR.readiness}, coverage ${auditR.coverage}%`)

  console.log("── 5. Simulation scenario (P1-5) ──────────────")
  const { NILE_TEXTILES, scenarioMaxScore, SIM_SCENARIOS } = await import("../src/lib/sim-scenario")
  check("one scenario shipped", SIM_SCENARIOS.length === 1)
  check("5 stages: acceptance → reporting", NILE_TEXTILES.stages.length === 5 && NILE_TEXTILES.stages[0].id === "acceptance" && NILE_TEXTILES.stages[4].id === "reporting")
  let decisions = 0
  let scoreOk = true
  let feedbackOk = true
  for (const st of NILE_TEXTILES.stages) {
    decisions += st.decisions.length
    for (const d of st.decisions) {
      if (d.freeText) {
        if (!d.rubric || d.rubric.length < 100) scoreOk = false
      } else {
        for (const o of d.options ?? []) {
          if (o.points < 0 || o.points > 4) scoreOk = false
          if (o.feedback.length < 40) feedbackOk = false
        }
      }
    }
  }
  check("15 decisions with valid scoring", decisions === 15, `${decisions} decisions`)
  check("all choices scored 0-4 with substantive feedback", scoreOk && feedbackOk)
  check("two AI-graded free-text judgments", NILE_TEXTILES.stages.flatMap((s) => s.decisions).filter((d) => d.freeText).length === 2)
  check("maxScore = 60 (13×4 choices + 2×4 free text)", scenarioMaxScore(NILE_TEXTILES) === 60, `${scenarioMaxScore(NILE_TEXTILES)}`)

  console.log("── 6. Seeded content (P0-2 / P1-6 / P1-8) ──────")
  const spineCodes = ["ISA-700C", "ISA-505C", "ISA-520C", "ISA-550C", "ISA-560C", "ISA-580C", "ISA-600C", "ISQM-01C", "ETH-CODE"]
  const spineCourses = await db.course.findMany({ where: { code: { in: spineCodes } } })
  check("9 ISA-spine courses created", spineCourses.length === 9)
  const spineLessons = await db.lesson.count({
    where: { module: { course: { code: { in: spineCodes } } }, type: "lesson" },
  })
  check("spine ≥ 30 lessons", spineLessons >= 30, `${spineLessons} lessons`)
  const spineCourseIds = spineCourses.map((c) => c.id)
  const spineQuizzes = await db.quiz.count({ where: { courseId: { in: spineCourseIds } } })
  check("9 spine quizzes", spineQuizzes === 9, `${spineQuizzes}`)
  // the ORIGINAL 8 in-house courses (the v20 spine courses are EN-first by design)
  const CORE8 = ["ISA-315", "ISA-330", "IFRS-CORE", "EGY-REG", "ISA-570", "EVD-500", "ISA-240", "AUD-ANL"]
  const arLessons = await db.lesson.count({
    where: { module: { course: { code: { in: CORE8 } } }, contentAr: { not: "" } },
  })
  check("45 in-house lessons carry Arabic editions", arLessons >= 45, `${arLessons}`)
  const allInHouseLessons = await db.lesson.count({
    where: { module: { course: { code: { in: CORE8 } } }, type: "lesson" },
  })
  check("core-8 lesson AR coverage = 100% (46 lessons incl. workshop)", arLessons === allInHouseLessons, `${arLessons}/${allInHouseLessons}`)
  const core8Ids = (await db.course.findMany({ where: { code: { in: CORE8 } }, select: { id: true } })).map((c) => c.id)
  const arQuizQuestions = await db.quiz.findMany({ where: { courseId: { in: core8Ids } } })
  const arQ = arQuizQuestions.reduce(
    (a, z) => a + (JSON.parse(z.questions) as { questionAr?: string }[]).filter((q) => q.questionAr).length,
    0
  )
  check("all 88 core-8 quiz questions have Arabic variants", arQ >= 88, `${arQ}`)
  // v20.1: spine quizzes are bilingual too — platform-wide course-quiz AR parity
  const spineIds = (await db.course.findMany({ where: { code: { in: spineCodes } }, select: { id: true } })).map((c) => c.id)
  const spineQuizzes2 = await db.quiz.findMany({ where: { courseId: { in: spineIds } } })
  const spineAr = spineQuizzes2.reduce(
    (a, z) => a + (JSON.parse(z.questions) as { questionAr?: string }[]).filter((q) => q.questionAr).length,
    0
  )
  check("all 54 spine quiz questions have Arabic variants", spineAr >= 54, `${spineAr}`)
  const checkpoints = await db.quiz.count({ where: { title: { contains: "Mid-course Checkpoint" } } })
  check("8 mid-course checkpoint quizzes", checkpoints === 8, `${checkpoints}`)
  const supplementary = await db.course.count({ where: { supplementary: true } })
  check("23 external courses flagged supplementary", supplementary === 23, `${supplementary}`)
  const fieldNotes = await db.lesson.findMany({
    where: { module: { course: { code: { in: CORE8 } } }, type: "lesson" },
  })
  const enriched = fieldNotes.filter((l) => l.content.includes("Field notes from Egyptian practice")).length
  check("4 thin lessons enriched with field notes", enriched === 4, `${enriched}`)
  const workshop = await db.lesson.findFirst({ where: { title: "Workshop: The Covenant Winter" } })
  check("ISA-570 capstone workshop lesson present", !!workshop)
  const ytNotes = await db.lesson.count({
    where: { module: { course: { code: "YT-LVHL" } }, content: { contains: "ملاحظات دراسية" } },
  })
  check("8 YT-LVHL lessons carry Arabic study notes", ytNotes === 8, `${ytNotes}`)
  const thinAfter = await db.lesson.findMany({
    where: { module: { course: { code: { in: CORE8 } } }, type: "lesson" },
  })
  const stillThin = thinAfter.filter((l) => {
    const c = JSON.parse(l.content) as { sections: { body?: string }[] }
    return (c.sections ?? []).reduce((a, s) => a + (s.body || "").length, 0) < 1500
  })
  check("every in-house lesson ≥ 1500 body chars after v20.1 depth pass", stillThin.length === 0, stillThin.length ? stillThin.map((l) => l.title).join(" | ") : "clean")

  console.log("── 7. Workpaper templates (P2-10) ─────────────")
  const { TEMPLATES, findTemplate } = await import("../src/lib/templates")
  check("4 templates registered", TEMPLATES.length === 4)
  check("findTemplate resolves slugs", findTemplate("lead-schedule")?.name === "Lead Schedule" && !findTemplate("nope"))
  const lead = await TEMPLATES[0].build()
  const gc = await TEMPLATES[3].build()
  check("xlsx builds with ZIP magic (PK)", lead.length > 4000 && lead[0] === 0x50 && lead[1] === 0x4b, `${lead.length} bytes`)
  check("docx builds with ZIP magic (PK)", gc.length > 4000 && gc[0] === 0x50 && gc[1] === 0x4b, `${gc.length} bytes`)

  console.log("── 8. DB-deploy gate (P1-7) ───────────────────")
  const dbDeploySrc = readFileSync(join(process.cwd(), "scripts/db-deploy.ts"), "utf8")
  check("db-deploy gates on postgres URL", dbDeploySrc.includes("postgres(ql)?") && dbDeploySrc.includes("nothing to push"))
  const vercelJson = JSON.parse(readFileSync(join(process.cwd(), "vercel.json"), "utf8"))
  check("vercel buildCommand chains db:deploy", String(vercelJson.buildCommand).includes("db:deploy"))

  console.log("── 9. Snapshot hygiene (P1-7) ─────────────────")
  const snap = readFileSync(join(process.cwd(), "prisma/auditedge-demo.db.gz"))
  check("snapshot regenerated with v20 content", snap.length > 3_000_000, `${(snap.length / 1024 / 1024).toFixed(1)} MB gz`)

  console.log("───────────────────────────────────────────────")
  console.log(`v20 battery: ${pass} pass · ${fail} fail`)
  if (fail > 0) process.exit(1)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())

// keep execSync import used (build smoke optional)
void execSync
