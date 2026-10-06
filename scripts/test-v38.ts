/** v38 test battery — the resilience + depth release:
 *
 *   1. The auto-restore DB guard (ensure-db.ts) — wiring + live run
 *   2. The shared backoff engine — Retry-After parsing, exponential
 *      schedule, jitter bounds, in-request viability (pure unit tests)
 *   3. The pool cooldown — 429 engines are parked, not hammered
 *   4. The user-key engine — Retry-After-aware backoff wired in ai.ts
 *   5. The printable ICQ — blank fieldwork copy + completed report,
 *      HTML-escaping of AI text, RTL, verdict banner
 *   6. The ToC → audit-program bridge — prefill flows to the customizer
 *   7. IFRS 16 flagship rewrite — depth bar of the IFRS 15 notes PDF
 *   8. The Arabic Academy course family — ordering + covers (static 5b)
 *   9. Version lockstep — package.json, SW stamp, test chain, e2e script
 *
 *  Run: bun scripts/test-v38.ts */
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { execSync } from "node:child_process"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

const ROOT = process.cwd()
const read = (p: string) => readFileSync(join(ROOT, p), "utf8")

async function main() {
  console.log("v38 — resilience (DB guard + AI backoff) + ICQ print + IFRS 16 flagship\n")

  /* ---------------- 1. the auto-restore DB guard ---------------- */
  console.log("── 1. Auto-restore DB guard ──")
  const ensureSrc = read("scripts/ensure-db.ts")
  check("scripts/ensure-db.ts exists", existsSync(join(ROOT, "scripts/ensure-db.ts")))
  check("guard skips Vercel / managed Postgres", ensureSrc.includes('VERCEL === "1"') && ensureSrc.includes("postgres"))
  check("health thresholds: bank ≥ 800, courses ≥ 40", ensureSrc.includes("MIN_BANK = 800") && ensureSrc.includes("MIN_COURSES = 40"))
  check("restores from prisma/auditedge-demo.db.gz", ensureSrc.includes("auditedge-demo.db.gz"))
  const pkg = JSON.parse(read("package.json")) as { version: string; scripts: Record<string, string> }
  check("wired as predev in package.json", pkg.scripts.predev?.includes("ensure-db"))
  check("standalone script: ensure:db", pkg.scripts["ensure:db"]?.includes("ensure-db"))
  check("dev-clean.sh boots the guard", read("scripts/dev-clean.sh").includes("ensure-db"))
  let guardOut = ""
  try {
    guardOut = execSync("bun scripts/ensure-db.ts", { cwd: ROOT, encoding: "utf8", timeout: 60_000 })
    check("guard runs green against the live DB", true, guardOut.trim().split("\n").pop() ?? "")
  } catch {
    check("guard runs green against the live DB", false, guardOut.slice(0, 120))
  }

  /* ---------------- 2. the shared backoff engine ---------------- */
  console.log("\n── 2. Backoff engine (pure unit tests) ──")
  const backoff = await import("../src/lib/backoff")
  const { parseRetryAfterMs, computeBackoffMs, isWaitInRequestViable, MIN_BACKOFF_MS, MAX_BACKOFF_MS } = backoff
  check("Retry-After seconds parsed", parseRetryAfterMs("5") === 5_000, String(parseRetryAfterMs("5")))
  check("Retry-After '0' parsed", parseRetryAfterMs("0") === 0)
  const now = Date.parse("2026-10-06T10:00:00Z")
  check("Retry-After HTTP-date parsed", parseRetryAfterMs("Tue, 06 Oct 2026 10:00:08 GMT", now) === 8_000, String(parseRetryAfterMs("Tue, 06 Oct 2026 10:00:08 GMT", now)))
  check("absent / invalid Retry-After → 0", parseRetryAfterMs(null) === 0 && parseRetryAfterMs("soon") === 0)
  const a1 = computeBackoffMs(1, null)
  const a3 = computeBackoffMs(3, null)
  check("exponential schedule grows (attempt 1 < attempt 3)", a1 < a3, `${a1}ms < ${a3}ms`)
  let jitterOk = true
  for (let i = 0; i < 200; i++) {
    const ms = computeBackoffMs(1 + (i % 4), null)
    if (ms < MIN_BACKOFF_MS || ms > MAX_BACKOFF_MS) jitterOk = false
  }
  check(`jitter keeps waits inside [${MIN_BACKOFF_MS}, ${MAX_BACKOFF_MS}]`, jitterOk)
  const stated = computeBackoffMs(1, "12")
  check("a 12s Retry-After beats the exponential base at attempt 1", stated >= 12_000 * 0.69, String(stated))
  check("hostile Retry-After is capped at MAX_BACKOFF_MS", parseRetryAfterMs("99999") <= MAX_BACKOFF_MS, String(parseRetryAfterMs("99999")))
  check("in-request viability gate", isWaitInRequestViable(3_500) && !isWaitInRequestViable(45_000))

  /* ---------------- 3. the pool cooldown ---------------- */
  console.log("\n── 3. Pool cooldown (429 engines are parked, not hammered) ──")
  const pool = await import("../src/lib/keyless-pool")
  pool.resetPoolCooldowns()
  check("fresh engine is not cooling down", pool.poolEngineCoolingDown("kilo") === 0)
  pool.markPoolCooldown("kilo", 60_000, Date.now())
  const cooling = pool.poolEngineCoolingDown("kilo")
  check("marked engine is parked (~60s)", cooling > 55_000 && cooling <= 60_000, `${Math.round(cooling / 1000)}s`)
  check("other engines unaffected", pool.poolEngineCoolingDown("ovh") === 0)
  pool.markPoolCooldown("kilo", 60_000, Date.now() - 59_500)
  check("cooldown drains over time", pool.poolEngineCoolingDown("kilo") <= 1_000)
  pool.resetPoolCooldowns()
  check("reset releases every engine", pool.poolEngineCoolingDown("kilo") === 0)
  const poolSrc = read("src/lib/keyless-pool.ts")
  check("both call paths skip cooling engines", poolSrc.split("poolEngineCoolingDown(engineId)").length >= 3)
  check("429/503 trigger the rate-limit handler", poolSrc.includes("res.status === 429 || res.status === 503"))
  check("Retry-After respected (header is read)", poolSrc.includes('res.headers.get("retry-after")'))

  /* ---------------- 4. user-key engine wiring ---------------- */
  console.log("\n── 4. User-key engine wiring ──")
  const aiSrc = read("src/lib/ai.ts")
  check("ai.ts imports the shared backoff", aiSrc.includes('from "@/lib/backoff"'))
  check("transient retries use keyBackoffMs with Retry-After", aiSrc.includes("keyBackoffMs(3 - retries, res.headers.get(\"retry-after\"))"))
  check("network-error retries back off too", aiSrc.includes("keyBackoffMs(3 - retries, null)"))

  /* ---------------- 5. the printable ICQ ---------------- */
  console.log("\n── 5. Printable ICQ (blank + completed) ──")
  const { buildIcqPrintHtml } = await import("../src/lib/toc/icq-print")
  const { TOC_CORE_QUESTIONS } = await import("../src/lib/toc/core")
  const { TOC_INDUSTRIES, tocFullQuestions } = await import("../src/lib/toc/library")
  const { evaluateToc } = await import("../src/lib/toc/scoring")
  const sample = tocFullQuestions(TOC_INDUSTRIES.find((i) => i.id === "banking")!)
  const coreIds = new Set(TOC_CORE_QUESTIONS.map((q) => q.id))

  const blank = buildIcqPrintHtml({
    title: "Banking",
    subtitle: "Retail & corporate bank ICQ",
    risks: ["lending approvals", "treasury limits"],
    procedures: [{ title: "Inspect approval matrices", type: "inspection" }],
    questions: sample,
    answers: {},
    coreIds,
    evaluation: null,
    lang: "en",
  })
  check("blank copy renders the fieldwork note", blank.includes("to be completed by hand during the management interview"))
  check("blank copy carries the brand header", blank.includes("AuditEdge Academy"))
  check("every question gets three tick-boxes", blank.split('class="bx').length - 1 === sample.length * 3, `${sample.length}×3`)

  const allYes: Record<string, "yes"> = {}
  for (const q of sample) allYes[q.id] = "yes"
  const evaluation = evaluateToc(sample, allYes)
  const filled = buildIcqPrintHtml({
    title: "Banking",
    subtitle: "Retail & corporate bank ICQ",
    risks: ["lending approvals"],
    procedures: [{ title: "Inspect approval matrices", type: "inspection" }],
    questions: sample,
    answers: allYes,
    coreIds,
    evaluation,
    lang: "en",
  })
  check("completed copy shows the verdict banner + score", filled.includes("Strong control environment") && filled.includes("100%"))
  check("completed copy marks the yes boxes", (filled.match(/class="bx on"/g) || []).length === sample.length)
  check("question domains all appear", ["Control environment", "Risk assessment", "Monitoring"].every((d) => filled.includes(d)))

  const escaped = buildIcqPrintHtml({
    title: '<script>alert(1)</script>',
    subtitle: "x",
    risks: [],
    procedures: [],
    questions: [
      { id: "x1", domain: "control-environment", q: "Is there a <b>code</b> of conduct?", hint: "probe & \"ethics\"", weight: 2 },
    ],
    answers: {},
    coreIds: new Set(),
    evaluation: null,
    lang: "en",
  })
  check("AI/untrusted text is HTML-escaped", !escaped.includes("<script>alert(1)") && escaped.includes("&lt;script&gt;") && escaped.includes("&quot;ethics&quot;"))

  const arabic = buildIcqPrintHtml({
    title: "بنوك",
    subtitle: "استبيان رقابة",
    risks: [],
    procedures: [],
    questions: sample.slice(0, 3),
    answers: {},
    coreIds,
    evaluation: null,
    lang: "ar",
  })
  check("Arabic copy renders RTL with the Arabic brand title", arabic.includes('dir="rtl"') && arabic.includes("استبيان الرقابة الداخلية"))
  const icqSrc = read("src/lib/toc/icq-print.ts")
  check("printIcq prints through a hidden iframe (popup-blocker safe)", icqSrc.includes("iframe") && icqSrc.includes(".print()"))

  const runnerSrc = read("src/components/audit/toc-runner.tsx")
  check("run stage exposes the blank fieldwork print", runnerSrc.includes("printBlank") && runnerSrc.includes('tt("toc37.printBlank"'))
  check("results stage exposes the completed report print", runnerSrc.includes("printReport") && runnerSrc.includes('tt("toc37.printFilled"'))

  /* ---------------- 6. i18n + the ToC → program bridge ---------------- */
  console.log("\n── 6. i18n + the ToC → audit-program bridge ──")
  const { tt } = await import("../src/lib/i18n")
  const newKeys = [
    "printBlank", "printFilled", "pdfTitle", "pdfEntity", "pdfIndustry", "pdfDate",
    "pdfAuditor", "pdfRespondent", "pdfVerdict", "pdfScore", "pdfQuestion", "pdfNotes",
    "pdfKeyRisks", "pdfBlankNote", "pdfGenerated", "toProgram", "toProgramHint",
  ]
  let i18nOk = true
  for (const k of newKeys) {
    const en = tt(`toc37.${k}`, "en")
    const ar = tt(`toc37.${k}`, "ar")
    if (en === `toc37.${k}` || ar === `toc37.${k}` || !en || !ar) i18nOk = false
  }
  check("all 17 new toc37 keys resolve in EN + AR", i18nOk)

  const storeSrc = read("src/store/useAppStore.ts")
  check("store carries the transient tailor prefill", storeSrc.includes("programTailorPrefill") && storeSrc.includes("clearProgramTailorPrefill"))
  const hubSrc = read("src/components/audit/toc-hub.tsx")
  check("ToC results button carries industry + verdict context", hubSrc.includes("tailorProgram") && hubSrc.includes("ICQ verdict") && hubSrc.includes('navigate("program")'))
  const programSrc = read("src/components/audit/program.tsx")
  check("program view consumes the prefill and opens the customizer", programSrc.includes("tailorSeed") && programSrc.includes("setTailorOpen(true)"))
  const tailorSrc = read("src/components/audit/program-tailor.tsx")
  check("AiTailorDialog accepts the seed values", tailorSrc.includes("initialSectorFree") && tailorSrc.includes("initialConcerns"))

  /* ---------------- 7. IFRS 16 flagship rewrite ---------------- */
  console.log("\n── 7. IFRS 16 — the second flagship ──")
  const { IFRS_16 } = await import("../src/lib/ifrs/standards/ifrs-16")
  const { IFRS_SUMMARIES } = await import("../src/lib/ifrs")
  const std16 = IFRS_16
  check("flagship badge set", std16.flagship === true)
  check("≥ 95 blocks (flagship depth)", std16.blocks.length >= 95, String(std16.blocks.length))
  check("≤ 110 blocks (IFRS 15 remains the deepest)", std16.blocks.length <= 110, String(std16.blocks.length))

  const words16 = (str: string) => (str.match(/[A-Za-z\u0600-\u06FF]+/g) || []).length
  let en16 = 0
  let ar16 = 0
  let digits16 = 0
  for (const b of std16.blocks) {
    const t = JSON.stringify(b)
    const enPart = (t.match(/"en":\s*"[^"]*"/g) || []).join(" ")
    const arPart = (t.match(/"ar":\s*"[^"]*"/g) || []).join(" ")
    en16 += words16(enPart)
    ar16 += words16(arPart)
    digits16 += (t.match(/\d[\d,.]*/g) || []).length
  }
  check("≥ 4,000 English words of notes", en16 >= 4_000, String(en16))
  check("Arabic parity — AR words ≥ 80% of EN", ar16 >= 0.8 * en16, `${ar16} vs ${en16}`)
  check("≥ 80 strings carry amounts/figures", digits16 >= 80, String(digits16))
  check("≥ 18 red-asterisk topics", std16.blocks.filter((b) => b.kind === "h").length >= 18, String(std16.blocks.filter((b) => b.kind === "h").length))

  const journals16 = std16.blocks.filter((b) => b.kind === "journal") as Extract<(typeof std16.blocks)[number], { kind: "journal" }>[]
  const rows16 = journals16.flatMap((j) => j.rows)
  const rowsAmt16 = rows16.filter((r) => /\d/.test(`${r.dr?.en ?? ""}${r.cr?.en ?? ""}`)).length
  check("≥ 12 journal sets", journals16.length >= 12, String(journals16.length))
  check("≥ 24 T-account rows", rows16.length >= 24, String(rows16.length))
  check("≥ 60% of journal rows carry amounts", rowsAmt16 >= 0.6 * rows16.length, `${rowsAmt16}/${rows16.length}`)
  check("≥ 10 worked numeric examples", std16.blocks.filter((b) => b.kind === "example").length >= 10, String(std16.blocks.filter((b) => b.kind === "example").length))
  check("≥ 12 exam tips", std16.blocks.filter((b) => b.kind === "tip").length >= 12, String(std16.blocks.filter((b) => b.kind === "tip").length))

  const src16 = read("src/lib/ifrs/standards/ifrs-16.ts")
  check("the running case is introduced (Delta Co)", src16.includes("Delta Co"))
  for (const n of ["173,255", "179,255", "44,814", "10,395", "55,209", "77,691"]) {
    check(`running-case figure ${n} present`, src16.includes(n))
  }
  const mustCover = [
    "incremental borrowing rate", "short-term", "low-value", "modification",
    "sale and leaseback", "net investment", "sublease", "embedded lease",
    "residual value guarantee", "EBITDA", "IAS 36", "IAS 37",
  ]
  const lower16 = src16.toLowerCase()
  for (const topic of mustCover) check(`topic present: ${topic}`, lower16.includes(topic.toLowerCase()))

  const total = IFRS_SUMMARIES.reduce((a, s) => a + s.blocks.length, 0)
  check("every standard still ≥ 45 blocks", IFRS_SUMMARIES.every((s) => s.blocks.length >= 45))
  check("catalog total ≥ 2,160 blocks", total >= 2_160, String(total))
  const ifrs15 = IFRS_SUMMARIES.find((s) => s.code === "IFRS 15")!
  check("IFRS 15 remains the deepest summary", ifrs15.blocks.length >= Math.max(...IFRS_SUMMARIES.filter((s) => s.code !== "IFRS 15").map((s) => s.blocks.length)))

  /* ---------------- 8. Arabic Academy family (static 5b) ---------------- */
  console.log("\n── 8. Arabic Academy courses — ordering + covers ──")
  try {
    const { PrismaClient } = await import("@prisma/client")
    const db = new PrismaClient()
    const arCourses = await db.course.findMany({
      where: { category: "Arabic Academy" },
      select: { order: true, icon: true, accent: true, published: true },
      orderBy: { order: "asc" },
    })
    await db.$disconnect()
    check("≥ 20 Arabic Academy courses", arCourses.length >= 20, String(arCourses.length))
    check("orders are distinct (no tie-ordering)", new Set(arCourses.map((c) => c.order)).size === arCourses.length)
    check("every course carries a cover (icon + accent)", arCourses.every((c) => !!c.icon && !!c.accent))
    check("every course published", arCourses.every((c) => c.published))
  } catch (e) {
    check("Arabic Academy verification (needs the restored DB)", false, e instanceof Error ? e.message : String(e))
  }

  /* ---------------- 9. version lockstep ---------------- */
  console.log("\n── 9. Version lockstep ──")
  const major = Number(pkg.version.split(".")[0])
  check("package.json: major ≥ 38 (v39+ releases carry the resilience work forward)", major >= 38, pkg.version)
  const sw = read("public/sw.js")
  check("sw: cache stamp tracks the app version", sw.includes(`VERSION = "auditedge-v${major}"`), `v${major}`)
  check("test-v38 wired into the test chain", (pkg.scripts.test ?? "").includes("test-v38"))
  check("e2e-v38.sh present", existsSync(join(ROOT, "scripts/e2e-v38.sh")))
  const changelog = read("CHANGELOG.md")
  check("CHANGELOG carries the v38 entry", changelog.includes("## 38.0.0"))

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
