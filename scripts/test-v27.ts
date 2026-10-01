/** v27 test battery — real-exam formats (CPA testlets + TBS, DipIFR
 *  Section A/B), the per-exam paper picker, the AI examiner marking against
 *  certified solutions, and the office-pair + Arabic course shelf.
 *
 *  Run: bun scripts/test-v27.ts */
import { PrismaClient } from "@prisma/client"
import { readFile } from "fs/promises"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

async function main() {
  console.log("v27 — real exam formats · paper picker · AI examiner · office + Arabic courses\n")

  /* ---------------- 1. CR tasks with certified solutions ---------------- */
  console.log("── 1. Constructed-response tasks (the certified-solution corpus) ──")
  const { CR_TASKS, crTasksFor, getCrTask, crTotalMarks } = await import("../src/lib/cr-tasks")
  check("cr: 35 tasks authored across 10 families", CR_TASKS.length === 35, `${CR_TASKS.length}`)
  check("cr: task ids unique", new Set(CR_TASKS.map((t) => t.id)).size === CR_TASKS.length)
  const FAMILIES_WITH_TASKS = ["cpa-aud", "cpa-far", "cpa-reg", "ifrs-dip", "acca-fr", "acca-aa", "acca-sbl", "acca-sbr", "cma-p1", "cma-p2"]
  check("cr: every expected family has a shelf", FAMILIES_WITH_TASKS.every((f) => crTasksFor(f).length >= 2), FAMILIES_WITH_TASKS.map((f) => `${f}:${crTasksFor(f).length}`).join(" "))
  check(
    "cr: EVERY requirement carries a certified solution (EN + AR)",
    CR_TASKS.every((t) => t.requirements.every((r) => r.certifiedEn.trim().length > 40 && r.certifiedAr.trim().length > 30))
  )
  check(
    "cr: marking points present for the deterministic fallback",
    CR_TASKS.every((t) => t.requirements.every((r) => r.pointsEn.length >= 3 && r.pointsAr.length >= 3))
  )
  check("cr: marks are positive and every task totals ≥ 5 marks", CR_TASKS.every((t) => t.requirements.every((r) => r.marks >= 2) && crTotalMarks(t) >= 5))
  check(
    "cr: numeric requirements carry a certified figure + tolerance",
    CR_TASKS.every((t) => t.requirements.every((r) => (r.kind === "numeric" ? !!r.numeric && r.numeric.tolerance > 0 && r.numeric.tolerance <= 0.1 : true)))
  )
  check("cr: exhibits are bilingual and substantial", CR_TASKS.every((t) => t.exhibitEn.length > 80 && t.exhibitAr.length > 60))
  check("cr: getCrTask resolves every id", CR_TASKS.every((t) => getCrTask(t.id)?.id === t.id))

  /* ---------------- 2. Real-exam formats ---------------- */
  console.log("── 2. Real-exam format blueprints ──")
  const { PAPER_FORMATS, formatForPaper, formatWeightsOk, formatMcqTotal, buildSections, scaleCounts } = await import("../src/lib/paper-formats")
  const formatIds = Object.keys(PAPER_FORMATS)
  check("formats: 11 families carry a real-exam format", formatIds.length === 11, `${formatIds.length}: ${formatIds.join(", ")}`)
  check("formats: every format's section weights sum to exactly 1", formatIds.every((id) => formatWeightsOk(PAPER_FORMATS[id])))
  check(
    "formats: every CR section's tasks exist on the family shelf",
    formatIds.every((id) => PAPER_FORMATS[id].sections.every((s) => (s.kind === "cr" ? crTasksFor(id).length >= s.tasks : true)))
  )
  const cpaAud = PAPER_FORMATS["cpa-aud"]
  check("formats: CPA AUD mirrors the real paper — 2 MCQ testlets + a TBS testlet at 50/50", cpaAud.sections.length === 3 && cpaAud.sections[0].kind === "mcq" && cpaAud.sections[2].kind === "cr" && Math.abs(cpaAud.sections[2].weight - 0.5) < 1e-9)
  check("formats: CPA real-exam notes state the true 4h / 72-MCQ + TBS shape", /4 hours/.test(cpaAud.realEn) && /72 MCQ/.test(cpaAud.realEn))
  const ifrsDip = PAPER_FORMATS["ifrs-dip"]
  check("formats: DipIFR = Section A OT (30%) + Section B scenarios (70%)", ifrsDip.sections[0].weight === 0.3 && ifrsDip.sections[1].weight === 0.7 && ifrsDip.sections[1].kind === "cr")
  const cma = PAPER_FORMATS["cma-p1"]
  check("formats: CMA = 75% MCQ + 25% essays", Math.abs(cma.sections[0].weight - 0.75) < 1e-9 && cma.sections[1].kind === "cr")
  const cfa = PAPER_FORMATS["cfa-l1"]
  check("formats: CFA = two timed sessions at 50/50, no CR", cfa.sections.length === 2 && cfa.sections.every((s) => s.kind === "mcq") && cfa.sections[0].count === 12)
  const sbl = PAPER_FORMATS["acca-sbl"]
  check("formats: SBL is a pure scenario paper (no MCQs)", sbl.sections.every((s) => s.kind === "cr"))
  check("formats: formatForPaper resolves the flagship AND dated sittings", formatForPaper("cpa-aud") !== null && formatForPaper("cpa-aud-2024j")?.family === "cpa-aud" && formatForPaper("acca-bt") === null)
  check("formats: paperBase routes sitting ids to their family", formatForPaper("ifrs-dip-2021d")?.family === "ifrs-dip")
  check("formats: scaleCounts keeps the section shape on smaller pools", JSON.stringify(scaleCounts([12, 12], 18)) === JSON.stringify([9, 9]) && scaleCounts([15], 18).length === 1)

  /* ---------------- 3. buildSections determinism + rotation ---------------- */
  console.log("── 3. Section building (deterministic draw + CR rotation) ──")
  const pool = Array.from({ length: 24 }, (_, i) => `q-${String(i).padStart(3, "0")}`)
  const builtFlagship = buildSections("cpa-aud", pool)
  check("sections: flagship draws T1 12 + T2 12 MCQs in order", builtFlagship.questionIds.length === 24 && builtFlagship.sections[0].mcqIds?.length === 12 && builtFlagship.sections[0].mcqIds?.[0] === "q-000")
  check("sections: flagship TBS testlet takes the shelf's first 3 tasks", JSON.stringify(builtFlagship.sections[2].crTaskIds) === JSON.stringify(["cpa-aud-tbs-1", "cpa-aud-tbs-2", "cpa-aud-tbs-3"]))
  const builtSitting = buildSections("cpa-aud-2024j", pool)
  check("sections: a dated sitting ROTATES its TBS tasks", builtSitting.sections[2].crTaskIds?.[0] === "cpa-aud-tbs-2")
  const builtAgain = buildSections("cpa-aud-2024j", pool)
  check("sections: the draw is deterministic (same id → same sections)", JSON.stringify(builtSitting) === JSON.stringify(builtAgain))
  const builtSbl = buildSections("acca-sbl", pool)
  check("sections: SBL builds task-only sections", builtSbl.sections.length === 2 && !builtSbl.sections.some((s) => s.kind === "mcq") && builtSbl.questionIds.length === 0)
  check("sections: weight renormalisation never fires on healthy shelves", Math.abs(builtFlagship.sections.reduce((a, s) => a + s.weight, 0) - 1) < 1e-9)

  /* ---------------- 4. Paper picker + sectioned sitting (UI wiring) ── */
  console.log("── 4. Paper picker + sectioned sitting UI ──")
  const examCenter = await readFile("src/components/audit/exam-center.tsx", "utf8")
  check("picker: every family opens the per-exam dialog (no inline chips)", examCenter.includes("setPickerFamily(f)") && examCenter.includes('open={!!pickerFamily}'))
  check("picker: the dialog lists flagship + the four dated sittings", examCenter.includes("pickerFamily.sittings.map") && examCenter.includes("paperPickerFlagship"))
  check("picker: the real-exam blueprint renders in the dialog", examCenter.includes("paperPickerReal") && examCenter.includes("formatForPaper(pickerFamily.id)"))
  check("sitting: section landing → MCQ testlets → CR tasks flow exists", examCenter.includes("secStarted") && examCenter.includes("sectionBegin") && examCenter.includes("answerWritten"))
  check("sitting: exhibits + numeric/text requirements rendered", examCenter.includes('kind === "numeric"') && examCenter.includes("Textarea"))
  check("sitting: task navigator + saved indicator", examCenter.includes("taskNav") && examCenter.includes("savedAnswer"))
  check("results: AI marking panel + certified-solution reveals", examCenter.includes("aiMarking") && examCenter.includes("certifiedSolution") && examCenter.includes("blendedScore"))
  check("results: submit hands off to the AI examiner when CR sections exist", examCenter.includes("crPending") && examCenter.includes("/api/ai/exam-mark"))

  /* ---------------- 5. AI examiner route ---------------- */
  console.log("── 5. The AI examiner (marking against certified solutions) ──")
  const markRoute = await readFile("src/app/api/ai/exam-mark/route.ts", "utf8")
  check("examiner: route rate-limits itself", markRoute.includes("AI_POLICIES.examMark"))
  check("examiner: the prompt feeds the CERTIFIED SOLUTION to the marker", markRoute.includes("CERTIFIED SOLUTION") && markRoute.includes("MARKING POINTS"))
  check("examiner: marks are clamped to the requirement maximum", markRoute.includes("Math.min(max"))
  check("examiner: deterministic keyword/numeric fallback when the AI is down", markRoute.includes("fallbackMark") && markRoute.includes("pointsEn"))
  check("examiner: final score is the section-weighted blend", markRoute.includes("weighted") && markRoute.includes("sec.weight"))
  check("examiner: numeric tolerance honours each task's certified figure", markRoute.includes("r.numeric.tolerance"))
  const guard = await readFile("src/lib/ai-guard.ts", "utf8")
  check("guard: examMark policy registered", guard.includes("examMark: {"))
  const patchRoute = await readFile("src/app/api/bank/exam/[id]/route.ts", "utf8")
  check("session: answerWritten validates the task belongs to the sitting", patchRoute.includes("task not in this sitting"))
  check("session: certified solutions are stripped until submission", patchRoute.includes("crTaskForClient(t, !!session.completedAt)"))
  check("session: submit flags CR papers for the marking pass", patchRoute.includes("crPending: hasCr") && patchRoute.includes('crStatus: "pending"'))
  const schema = await readFile("prisma/schema.prisma", "utf8")
  const examSchemaBlock = schema.slice(schema.indexOf("model ExamSession"), schema.indexOf("@@index([userId, startedAt])"))
  check("schema: ExamSession carries sections / written / crMarks / crStatus", ["sections", "written", "crMarks", "crStatus"].every((c) => new RegExp(`\\b${c}\\b`).test(examSchemaBlock)))

  /* ---------------- 6. i18n completeness ---------------- */
  console.log("── 6. i18n — every new string bilingual ──")
  const i18n = await readFile("src/lib/i18n.ts", "utf8")
  const keys = [
    "paperPicker", "paperPickerDesc", "paperPickerReal", "paperPickerStructure", "paperPickerFlagship", "paperPickerSitting",
    "paperRealFormat", "sectionNav", "sectionBegin", "sectionMcq", "sectionCr", "sectionWeight", "exhibit", "requirement",
    "numericAnswer", "textAnswer", "marksShort", "savedAnswer", "taskNav", "backLabel", "nextTask",
    "aiMarking", "aiMarkingDone", "aiMarkingFallback", "certifiedSolution", "yourAnswer", "marksAwarded",
    "examinerFeedback", "mcqPart", "crPart", "blendedScore",
  ]
  check("i18n: all 31 v27 exam keys present", keys.every((k) => i18n.includes(`${k}: {`)), `${keys.filter((k) => !i18n.includes(`${k}: {`)).join(", ") || "all present"}`)
  // both languages non-empty for each key
  const dict = (await import("../src/lib/i18n")) as unknown as { T: Record<string, Record<string, { en: string; ar: string }>> }
  const examDict = dict.T.exam
  check("i18n: every v27 key carries non-empty EN + AR", keys.every((k) => examDict[k]?.en?.trim() && examDict[k]?.ar?.trim()))

  /* ---------------- 7. The office pair + Arabic library (courses) ── */
  console.log("── 7. Courses — advanced Excel + Word, more Arabic ──")
  const { VIDEO_COURSES, VIDEO_CATEGORIES } = await import("../src/lib/video-courses")
  check("courses: 43 video courses (36 + 8 v27 additions − the superseded ams-4h fragment)", VIDEO_COURSES.length === 43, `${VIDEO_COURSES.length}`)
  const byId = (id: string) => VIDEO_COURSES.find((c) => c.id === id)
  const expect = [
    ["alassaal-excel-complete", 67, "excel", "AR"],
    ["qonswa-word-complete", 33, "word", "AR"],
    ["trumpexcel-basic-advanced", 26, "excel", "EN"],
    ["lsd-word-full", 4, "word", "EN"],
    ["zuhair-ifrs-standards", 81, "ifrs", "AR"],
    ["ams-financial-accounting", 11, "accounting", "AR"],
    ["essaad-cost-accounting", 10, "accounting", "AR"],
    ["hossam-financial-analysis", 8, "accounting", "AR"],
  ] as const
  check(
    "courses: every new course has its FULL verified lesson set",
    expect.every(([id, n]) => byId(id)?.lessons.length === n),
    expect.map(([id, n]) => `${id}:${byId(id)?.lessons.length ?? 0}/${n}`).join(" ")
  )
  check(
    "courses: categories + languages correct",
    expect.every(([id, , cat, lang]) => byId(id)?.category === cat && byId(id)?.language === lang)
  )
  check(
    "courses: every new lesson id is a valid 11-char YouTube id",
    expect.every(([id]) => byId(id)!.lessons.every((l) => /^[A-Za-z0-9_-]{11}$/.test(l.id)))
  )
  check(
    "courses: bilingual titles + descriptions on every new course",
    expect.every(([id]) => { const c = byId(id)!; return c.titleEn.trim() && c.titleAr.trim() && c.descEn.length > 60 && c.descAr.length > 50 })
  )
  check(
    "courses: no fabricated 0:00 lengths in the new shelf",
    expect.every(([id]) => byId(id)!.lessons.every((l) => l.length !== "0:00" && /\d/.test(l.length)))
  )
  check("courses: the Word category chip ships bilingually", VIDEO_CATEGORIES.some((c) => c.id === "word" && c.labelEn === "Word" && c.labelAr === "وورد"))
  const byCat = (cat: string) => VIDEO_COURSES.filter((c) => c.category === cat).length
  check("courses: Excel track now 3 (1 prior + Al Assaal + TrumpExcel)", byCat("excel") === 3, `${byCat("excel")}`)
  check("courses: Word track 2 (AR + EN)", byCat("word") === 2, `${byCat("word")}`)
  check("courses: IFRS track 8 (v27 adds the 39-hour Zuhair standards library)", byCat("ifrs") === 8, `${byCat("ifrs")}`)
  const dupIds = VIDEO_COURSES.flatMap((c) => c.lessons.map((l) => l.id))
  check("courses: all lesson ids still unique across the catalog", new Set(dupIds).size === dupIds.length)

  /* ---------------- 8. Database wiring (format-driven sittings) ── */
  console.log("── 8. Bank wiring — the format pools exist (database) ──")
  const db = new PrismaClient()
  const { getPastPaper } = await import("../src/lib/past-papers")
  const poolOf = async (source: string) => db.bankQuestion.count({ where: { source } })
  check("bank: CPA AUD flagship pool has its 24 questions", (await poolOf("CPA AUD past paper (adapted)")) === 24)
  check("bank: CPA FAR flagship pool has its 24 questions", (await poolOf("CPA FAR past paper (adapted)")) === 24)
  check("bank: CPA REG flagship pool has its 24 questions", (await poolOf("CPA REG past paper (adapted)")) === 24)
  check("bank: IFRS diploma flagship pool ≥ 24 (Section A draws 15)", (await poolOf("IFRS diploma past paper (adapted)")) >= 24)
  check("bank: ACCA FR flagship pool ≥ 24 (Section A draws 15)", (await poolOf("ACCA FR past paper (adapted)")) >= 24)
  check("bank: AA flagship pool ≥ 24 (Sections A+B draw 24)", (await poolOf("ACCA AA past paper (adapted)")) >= 24)
  check("bank: SBL/SBR/CMA pools ≥ 18 for their MCQ sections", (await Promise.all([poolOf("ACCA SBL past paper (adapted)"), poolOf("ACCA SBR past paper (adapted)"), poolOf("CMA Part 1 past paper (adapted)")])).every((n) => n >= 18))
  const sittingPools = await Promise.all(
    ["cpa-aud-2024j", "ifrs-dip-2024j", "cma-p1-2024j"].map((pid) => getPastPaper(pid)?.source ?? "")
      .filter(Boolean)
      .map((src) => poolOf(src))
  )
  check("bank: dated-sitting pools hold their 18 questions (formats scale to fit)", sittingPools.length === 3 && sittingPools.every((n) => n === 18), sittingPools.join(","))
  const cols = await db.$queryRawUnsafe("PRAGMA table_info(ExamSession)") as { name: string }[]
  check("schema: ExamSession table carries the v27 columns live", ["sections", "written", "crMarks", "crStatus"].every((c) => cols.some((x) => x.name === c)), cols.filter((c) => ["sections", "written", "crMarks", "crStatus"].includes(c.name)).map((c) => c.name).join(","))
  await db.$disconnect()

  /* ---------------- done ---------------- */
  console.log("───────────────────────────────────────────────")
  console.log(`v27 battery: ${pass} pass · ${fail} fail`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error("battery crashed:", e)
  process.exit(1)
})
