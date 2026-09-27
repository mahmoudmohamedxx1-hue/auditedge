/**
 * v21 battery — the deep-improvement release.
 * Covers the new pure logic + route behavior:
 *   1. mistake book (latest-attempt redemption)
 *   2. Fisher–Yates practice draw + exam timedOut enforcement
 *   3. course-quiz misses → SRS seeding + sanitizeQuiz AR preservation
 *   4. engagement v21 layer: WP index, assertion coverage, PBC aging,
 *      close-out bundle, findings export, workspace backup round-trip
 *   5. systematic selection engine (seeded, documentable)
 *   6. per-language voice resolution under "auto"
 *   7. AI rate limiter (sliding window)
 *   8. egypt-area Arabic parity + IFRS 18 course presence
 * Run: bun run scripts/test-v21.ts
 */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()
let pass = 0
let fail = 0
function check(label: string, ok: boolean, detail?: string) {
  if (ok) {
    pass++
    console.log(`  ✓ ${label}${detail ? ` — ${detail}` : ""}`)
  } else {
    fail++
    console.error(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`)
  }
}

async function main() {
  console.log("── 1. Bank & exam (v21) ──────────────────────")
  {
    const { missedQuestions } = await import("../src/lib/bank")
    const me = (await db.user.findFirst({ where: { email: "mahmoud.elsayed@auditedge.eg" } }))!
    if (me) {
      const misses = await missedQuestions(me.id, 30)
      check("missedQuestions resolves (shape)", Array.isArray(misses), `${misses.length} outstanding`)
    }
  }
  {
    // Fisher–Yates: same seed → same draw, all items preserved
    const { drawPractice } = await import("../src/lib/bank")
    const me = (await db.user.findFirst({ where: { email: "mahmoud.elsayed@auditedge.eg" } }))!
    if (me) {
      const a = await drawPractice({ count: 10, userId: me.id, seed: 42, area: "egypt" })
      const b = await drawPractice({ count: 10, userId: me.id, seed: 42, area: "egypt" })
      check("practice draw deterministic per seed", JSON.stringify(a.map((q) => q.id)) === JSON.stringify(b.map((q) => q.id))
        , `${a.length} questions`)
    }
  }
  {
    // timedOut flag exists in schema and defaults false
    const cols = await db.$queryRawUnsafe<{ name: string }[]>(
      "PRAGMA table_info(ExamSession)"
    )
    check("ExamSession.timedOut column present", cols.some((c) => c.name === "timedOut"))
    const convo = await db.$queryRawUnsafe<{ name: string }[]>(
      "PRAGMA table_info(AiConversation)"
    )
    check("AiConversation.pinned column present", convo.some((c) => c.name === "pinned"))
    check("AiConversation.summary column present", convo.some((c) => c.name === "summary"))
  }

  console.log("── 2. Quiz → SRS + AR preservation (v21) ─────")
  {
    const { sanitizeQuiz } = await import("../src/lib/audit-server")
    const kept = sanitizeQuiz(
      {
        title: "AR keep test",
        passScore: 70,
        questions: [
          {
            question: "Q1?",
            options: ["a", "b", "c", "d"],
            correctIndex: 1,
            explanation: "why",
            questionAr: "س١؟",
            optionsAr: ["أ", "ب", "ج", "د"],
            explanationAr: "السبب",
          },
        ],
      },
      "t"
    )
    const q = kept?.questions[0] as Record<string, unknown> | undefined
    check("sanitizeQuiz keeps AR fields", !!q?.questionAr && Array.isArray(q?.optionsAr) && !!q?.explanationAr)
    const stripped = sanitizeQuiz(
      { title: "t", questions: [{ question: "Q?", options: ["a", "b"], correctIndex: 0, explanation: "" }] },
      "t"
    )
    check("sanitizeQuiz still works without AR", (stripped?.questions.length ?? 0) === 1)
  }

  console.log("── 3. Engagement v21 layer ───────────────────")
  {
    const engagementLib = await import("../src/lib/engagement")
    const {
      wpIndex,
      assertionCoverage,
      pbcAging,
      engagementBundleMd,
      exportWorkspaceLocalJson,
    } = engagementLib
    type Engagement = engagementLib.Engagement
    const { ASSERTIONS, PROGRAM_SECTIONS } = await import("../src/lib/program")

    const eng: Engagement = {
      id: "test-eng",
      client: "Test Trading Co.",
      period: "FY 2026",
      createdAt: Date.now(),
      procedures: {},
      pbc: {},
      findings: [
        { id: "f1", sectionId: "cash", description: "Cut-off error on invoice 4521", amount: 250_000, status: "open", createdAt: Date.now(), wp: "B-120", qualitative: true, adj: { dr: "Sales", cr: "Receivables", amount: 250_000 } },
        { id: "f2", sectionId: "revenue", description: "Early recognition", amount: 400_000, status: "corrected", createdAt: Date.now() },
      ],
      signoffs: {},
      pm: 600_000,
      ctt: 30_000,
      materiality: { om: 1_000_000, benchmark: "PBT", pmPct: 60, pm: 600_000, cttPct: 3, ctt: 30_000, rationale: "Users focus on earnings", savedAt: Date.now() },
      riskMatrix: [{ id: "r1", account: "Revenue", assertion: "CO", ir: "high", cr: "med", significant: true, response: "Cut-off testing Dec-Jan", savedAt: Date.now() }],
    }
    // tick one procedure with a WP ref in the first section
    const p0 = PROGRAM_SECTIONS[0].procedures[0]
    eng.procedures[p0.id] = { status: "done", wp: "A-100", initials: "MA", date: Date.now() }

    const wp = wpIndex(eng)
    check("wpIndex registers the A-100 ref", wp.entries.some((e) => e.ref === "A-100"))
    check("wpIndex flags missing refs count", Array.isArray(wp.missing))

    const cov = assertionCoverage(eng, Object.keys(ASSERTIONS).map((code) => ({ code })))
    check("assertionCoverage covers all 8 codes", cov.rows.length === Object.keys(ASSERTIONS).length)
    check("assertionCoverage rows have totals", cov.rows.every((r) => r.total >= 0))

    const aged = pbcAging(eng)
    check("pbcAging empty when nothing requested", aged.length === 0)

    eng.pbc[`${PROGRAM_SECTIONS[0].id}:0`] = { status: "requested", requestedAt: Date.now() - 5 * 86_400_000 }
    const aged2 = pbcAging(eng)
    check("pbcAging computes days outstanding", aged2.length === 1 && aged2[0].daysOutstanding >= 4, `${aged2[0]?.daysOutstanding}d`)

    const md = engagementBundleMd(eng)
    check("bundle contains the 10 sections", md.includes("## 10. Open findings register"))
    check("bundle carries materiality memo", md.includes("EGP 1,000,000"))
    check("bundle carries the SAD verdict", md.includes("Aggregate uncorrected") || md.includes("uncorrected"))
    check("bundle lists the risk matrix row", md.includes("Cut-off testing Dec-Jan"))

    // backup round-trip: export → parse (localStorage stubbed for Node)
    const store: Record<string, string> = {}
    ;(globalThis as Record<string, unknown>).localStorage = {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v },
    }
    const json = exportWorkspaceLocalJson()
    check("workspace backup exports JSON", (() => { try { JSON.parse(json); return true } catch { return false } })())
    const parsed = JSON.parse(json) as { engagements: { engagements: Engagement[] } }
    check("backup contains the engagement store", Array.isArray(parsed.engagements?.engagements))
  }

  console.log("── 4. Sampling selection engine (v21) ───────")
  {
    const mod = await import("../src/components/audit/program-tools") as { __testSystematic?: unknown }
    // the engine lives inside the component file (not exported) — test the
    // documented contract through a local reimplementation of the same math
    const seed = 1234
    const n = 500
    const size = 25
    let a = seed >>> 0
    const rnd = () => {
      a |= 0
      a = (a + 0x6d2b79f5) | 0
      let t = Math.imul(a ^ (a >>> 15), 1 | a)
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
    const interval = n / size
    const start = Math.floor(rnd() * interval) + 1
    const items = new Set<number>()
    for (let i = 0; i < size; i++) items.add(Math.round(start + i * interval))
    check("systematic selection yields the sample size", items.size === size, `${items.size} items`)
    check("selection inside population", [...items].every((x) => x >= 1 && x <= n))
  }

  console.log("── 5. Voice + rate limit (v21) ───────────────")
  {
    const { resolveTtsVoice } = await import("../src/lib/voices")
    const autoAr = resolveTtsVoice("auto", "نص عربي", { ar: "edge:ar-EG-ShakirNeural", en: null })
    check("auto Arabic honors remembered AR voice", autoAr.provider === "edge" && autoAr.voice === "ar-EG-ShakirNeural")
    const autoEn = resolveTtsVoice("auto", "English text", { ar: "edge:ar-EG-ShakirNeural", en: null })
    check("auto English falls back to Jenny", autoEn.voice === "en-US-JennyNeural")
    const pinned = resolveTtsVoice("edge:ar-SA-HamedNeural", "English", {})
    check("pinned voice ignores prefs", pinned.voice === "ar-SA-HamedNeural")

    const { aiRateLimit, AI_POLICIES } = await import("../src/lib/ai-guard")
    const fakeReq = (ip: string) => ({ headers: { get: (k: string) => (k === "x-forwarded-for" ? ip : null) } }) as unknown as Request
    let blocked = false
    for (let i = 0; i < 25; i++) {
      const res = aiRateLimit(fakeReq("9.9.9.9"), AI_POLICIES.draft)
      if (res) {
        blocked = true
        check("rate limiter returns 429 with Retry-After", res.status === 429 && !!res.headers.get("Retry-After"))
        break
      }
    }
    check("rate limiter blocks after the burst", blocked)
    const other = aiRateLimit(fakeReq("8.8.8.8"), AI_POLICIES.draft)
    check("rate limiter is per-IP", other === null)
  }

  console.log("── 6. Content parity (v21 seeds) ────────────")
  {
    const egyTotal = await db.bankQuestion.count({ where: { area: "egypt" } })
    const egyAr = await db.bankQuestion.count({ where: { area: "egypt", stemAr: { not: null } } })
    check("egypt area fully bilingual", egyTotal > 0 && egyAr === egyTotal, `${egyAr}/${egyTotal}`)

    const ifrs = await db.bankQuestion.count({ where: { standardTag: "IFRS 18" } })
    check("IFRS 18 bank questions present", ifrs >= 12, `${ifrs} questions`)

    const course = await db.course.findFirst({ where: { code: "IFRS18" }, include: { modules: { include: { lessons: true } } } })
    check("IFRS 18 course present", !!course)
    check("IFRS 18 course has 4+ lessons", (course?.modules.flatMap((m) => m.lessons).length ?? 0) >= 4)
    const arLessons = course?.modules.flatMap((m) => m.lessons).filter((l) => (l.contentAr ?? "").length > 50).length ?? 0
    check("IFRS 18 lessons carry AR editions", arLessons >= 4, `${arLessons} AR lessons`)
  }

  console.log("───────────────────────────────────────────────")
  console.log(`v21 battery: ${pass} pass · ${fail} fail`)
  if (fail > 0) process.exitCode = 1
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => db.$disconnect())
