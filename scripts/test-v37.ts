/** v37 test battery — Test of Control: the industry ICQ library + verdict
 *  engine + AI generator.
 *
 *  Covers:
 *   1. Library integrity — 45 industries / 10 sectors, unique ids, every
 *      question answerable (q + hint), weights in range, criticals rare.
 *   2. The universal core — 22 questions across all 6 domains.
 *   3. The scoring engine — yes/no/na arithmetic, verdict boundaries and
 *      the critical-override rule, as pure unit tests.
 *   4. The AI normalizer — JSON extraction from messy LLM output, domain
 *      near-misses, weight clamping, rejections.
 *   5. Wiring — router, deep links, sidebar, palette, i18n (EN + AR).
 *   6. The API route — rate limit, auth, two-attempt loop.
 *   7. Version lockstep — package.json, SW stamp, test chain.
 *
 *  Run: bun scripts/test-v37.ts */
import { existsSync, readFileSync } from "node:fs"
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
  console.log("v37 — Test of Control (industry ICQ library + verdict engine + AI)\n")

  const { TOC_CORE_QUESTIONS } = await import("../src/lib/toc/core")
  const {
    TOC_INDUSTRIES,
    TOC_MODULE_QUESTION_COUNT,
    tocFullQuestions,
    tocIndustry,
    tocLibraryQuestionCount,
  } = await import("../src/lib/toc/library")
  const { TOC_DOMAINS, TOC_SECTORS } = await import("../src/lib/toc/types")
  const { evaluateToc, tocVerdictExplanation } = await import("../src/lib/toc/scoring")
  const { extractJsonObject, normalizeAiQuestionnaire } = await import("../src/lib/toc/normalize")

  /* ---------------- 1. library integrity ---------------- */
  console.log("── 1. Library integrity ──")
  check("45 industries in the library", TOC_INDUSTRIES.length === 45, String(TOC_INDUSTRIES.length))
  check("10 sectors", TOC_SECTORS.length === 10, String(TOC_SECTORS.length))
  check("every sector has at least 2 industries", TOC_SECTORS.every((s) => TOC_INDUSTRIES.filter((i) => i.sector === s.id).length >= 2))
  check("industry ids unique", new Set(TOC_INDUSTRIES.map((i) => i.id)).size === TOC_INDUSTRIES.length)
  check("every industry has a valid sector", TOC_INDUSTRIES.every((i) => TOC_SECTORS.some((s) => s.id === i.sector)))

  const coreIds = new Set(TOC_CORE_QUESTIONS.map((q) => q.id))
  let questionsOk = true
  let dupesFound = false
  const allModuleIds: string[] = []
  for (const ind of TOC_INDUSTRIES) {
    if (!ind.questions.length || ind.questions.length < 10) {
      check(`${ind.id}: at least 10 module questions`, false, String(ind.questions.length))
      questionsOk = false
    }
    if (ind.risks.length < 3 || ind.procedures.length < 5) {
      check(`${ind.id}: risks + procedures present`, false, `${ind.risks.length} risks / ${ind.procedures.length} procedures`)
      questionsOk = false
    }
    if (!ind.blurb || ind.blurb.length < 30 || !ind.name || !ind.icon) {
      check(`${ind.id}: name / blurb / icon present`, false)
      questionsOk = false
    }
    const ids = new Set<string>()
    for (const q of ind.questions) {
      if (!q.q || q.q.length < 30 || !q.hint || q.hint.length < 20) {
        check(`${ind.id}/${q.id}: question + probe hint substantive`, false)
        questionsOk = false
      }
      if (q.weight !== 1 && q.weight !== 2 && q.weight !== 3) {
        check(`${ind.id}/${q.id}: weight 1-3`, false, String(q.weight))
        questionsOk = false
      }
      if (!TOC_DOMAINS.some((d) => d.id === q.domain)) {
        check(`${ind.id}/${q.id}: valid domain`, false, q.domain)
        questionsOk = false
      }
      if (ids.has(q.id)) dupesFound = true
      ids.add(q.id)
      if (coreIds.has(q.id)) dupesFound = true
      allModuleIds.push(q.id)
    }
    // the module must cover at least 4 of the 6 domains
    const doms = new Set(ind.questions.map((q) => q.domain))
    if (doms.size < 4) {
      check(`${ind.id}: module covers ≥4 domains`, false, String(doms.size))
      questionsOk = false
    }
  }
  check("every question substantive, weighted, in-domain", questionsOk)
  check("no duplicate / colliding question ids", !dupesFound && new Set(allModuleIds).size === allModuleIds.length, `${allModuleIds.length} module questions`)
  check("≥ 460 module questions authored", TOC_MODULE_QUESTION_COUNT >= 460, String(TOC_MODULE_QUESTION_COUNT))
  check("≥ 480 total questions incl. core", tocLibraryQuestionCount() >= 480, String(tocLibraryQuestionCount()))
  check("sample lookups resolve (banking / agriculture / crypto / awqaf)", ["banking", "agriculture", "crypto", "awqaf"].every((id) => Boolean(tocIndustry(id))))

  /* ---------------- 2. the universal core ---------------- */
  console.log("\n── 2. The universal core ──")
  check("22 core questions", TOC_CORE_QUESTIONS.length === 22, String(TOC_CORE_QUESTIONS.length))
  check("core covers all 6 domains", new Set(TOC_CORE_QUESTIONS.map((q) => q.domain)).size === 6)
  check("core carries criticals (keystone controls flagged)", TOC_CORE_QUESTIONS.filter((q) => q.critical).length >= 4, String(TOC_CORE_QUESTIONS.filter((q) => q.critical).length))
  const coreWeighted = TOC_CORE_QUESTIONS.reduce((s, q) => s + q.weight, 0)
  check("core significance weights are real (Σ ≥ 44)", coreWeighted >= 44, String(coreWeighted))

  /* ---------------- 3. the scoring engine ---------------- */
  console.log("\n── 3. The scoring engine (pure unit tests) ──")
  const corePlus = tocFullQuestions(TOC_INDUSTRIES.find((i) => i.id === "banking")!)

  const allYes: Record<string, "yes"> = {}
  for (const q of corePlus) allYes[q.id] = "yes"
  const rYes = evaluateToc(corePlus, allYes)
  check("all-yes → strong, 100%", rYes.verdict === "strong" && rYes.pct === 100)
  check("all-yes → complete, no gaps, no critical failures", rYes.complete && rYes.gaps.length === 0 && rYes.failedCriticals.length === 0)

  const allNo: Record<string, "no"> = {}
  for (const q of corePlus) allNo[q.id] = "no"
  const rNo = evaluateToc(corePlus, allNo)
  check("all-no → weak, 0%", rNo.verdict === "weak" && rNo.pct === 0)
  check("all-no → every critical flagged", rNo.failedCriticals.length === corePlus.filter((q) => q.critical).length)
  check("all-no → every question listed as a gap", rNo.gaps.length === corePlus.length)

  // N/A exclusion: everything yes except the heaviest third marked N/A
  const mixed: Record<string, "yes" | "na"> = {}
  const naIds = new Set(corePlus.filter((q) => q.weight === 3 && !q.critical).map((q) => q.id))
  for (const q of corePlus) mixed[q.id] = naIds.has(q.id) ? "na" : "yes"
  const rNa = evaluateToc(corePlus, mixed)
  check("N/A drops out of the denominator (still 100%)", rNa.pct === 100 && rNa.possibleWeight < corePlus.reduce((s, q) => s + q.weight, 0), `possible ${rNa.possibleWeight}`)
  check("N/A never creates gaps or critical failures", rNa.gaps.length === 0 && rNa.naCount === naIds.size)

  // critical override: score high, exactly one keystone failed → moderate (not strong)
  const oneCritical: Record<string, "yes" | "no"> = { ...allYes }
  const firstCritical = corePlus.find((q) => q.critical)!
  oneCritical[firstCritical.id] = "no"
  const rOne = evaluateToc(corePlus, oneCritical)
  check("one critical failure demotes strong → moderate", rOne.verdict === "moderate" && rOne.failedCriticals.length === 1)

  // three critical failures with a high score → weak
  const threeCritical: Record<string, "yes" | "no"> = { ...allYes }
  for (const q of corePlus.filter((q) => q.critical).slice(0, 3)) threeCritical[q.id] = "no"
  const rThree = evaluateToc(corePlus, threeCritical)
  check("three critical failures → weak despite high score", rThree.verdict === "weak", `${rThree.pct}%`)

  // 50% boundary with two criticals → moderate
  const twoCritical: Record<string, "yes" | "no"> = { ...allYes }
  for (const q of corePlus.filter((q) => q.critical).slice(0, 2)) twoCritical[q.id] = "no"
  const rTwo = evaluateToc(corePlus, twoCritical)
  check("two critical failures (high score) stays moderate — the ceiling of tolerable", rTwo.verdict === "moderate" && rTwo.failedCriticals.length === 2, `${rTwo.pct}%`)

  // a genuinely weak score with zero critical failures → still weak
  const lowScore: Record<string, "yes" | "no"> = {}
  const heavy = new Set(corePlus.filter((q) => q.weight === 3).map((q) => q.id))
  for (const q of corePlus) lowScore[q.id] = heavy.has(q.id) ? "no" : "yes"
  const rLow = evaluateToc(corePlus, lowScore)
  check("low weighted score → weak even without critical failures", rLow.verdict === "weak", `${rLow.pct}%`)

  // unanswered → not complete, still evaluates what exists
  const partial: Record<string, "yes"> = { [corePlus[0].id]: "yes" }
  const rPartial = evaluateToc(corePlus, partial)
  check("unanswered questions flagged (complete=false)", !rPartial.complete && rPartial.unansweredCount === corePlus.length - 1)

  check("domain scores computed per component", rYes.domainScores.filter((d) => d.possible > 0).every((d) => d.pct === 100))
  check("verdict explanations exist for all three verdicts", (["strong", "moderate", "weak"] as const).every((v) => tocVerdictExplanation(v).length > 80))

  /* ---------------- 4. the AI normalizer ---------------- */
  console.log("\n── 4. The AI normalizer ──")
  const messy = 'Here is your questionnaire:\n```json\n{"title":"ToC","scope":"A co","risks":["r1"],"procedures":["Check bank recs monthly",{"title":"Observe count","detail":"at the vault","type":"OBSERVATION"}],"questions":[{"domain":"Control Activities","q":"Are bank reconciliations reviewed independently every month?","hint":"look for reviewer marks","weight":5},{"domain":"it_cyber","q":"Are leaver accounts disabled same day?","hint":"check the log","weight":0,"critical":true},{"domain":"nonsense","q":"invalid","hint":"x","weight":1},{"domain":"monitoring","q":"Are findings tracked to closure?","hint":"check the tracker","weight":2},{"domain":"control environment","q":"Is there a code of conduct acknowledged in writing?","hint":"look for the log","weight":2},{"domain":"Risk Assessment","q":"Is fraud explicitly considered with governance?","hint":"ask who attended","weight":2},{"domain":"info-communication","q":"Is there a defined month-end close calendar?","hint":"ask for the calendar","weight":1},{"domain":"control activities","q":"Are journal entries supported and approved before posting?","hint":"trace three entries","weight":3},{"domain":"monitoring","q":"Are budget variances investigated with evidence?","hint":"find one investigated variance","weight":2},{"domain":"it_cyber","q":"Are backups restore-tested annually?","hint":"ask for the test report","weight":2}]}\n```'
  const extracted = extractJsonObject(messy)
  check("extractJsonObject pulls JSON from fenced + prosey output", extracted !== null)
  const norm = normalizeAiQuestionnaire(extracted, "Fallback")
  check("normalizer accepts the messy payload", norm.ok, norm.ok ? "" : norm.error)
  if (norm.ok) {
    check("weight clamped to 3 and 1", norm.data.questions.some((q) => q.weight === 3) && norm.data.questions.every((q) => q.weight >= 1 && q.weight <= 3))
    check("invalid-domain question dropped, near-miss domains mapped", norm.data.questions.every((q) => TOC_DOMAINS.some((d) => d.id === q.domain)) && !norm.data.questions.some((q) => q.domain === "nonsense"))
    check("string procedures normalized", norm.data.procedures.some((p) => p.title.includes("bank recs")))
    check("near-miss type OBSERVATION mapped", norm.data.procedures.some((p) => p.type === "observation"))
    check("titles default sensibly", norm.data.title.length > 0 && norm.data.scope.length > 0)
  }
  check("rejects non-object payloads", !normalizeAiQuestionnaire("nope", "x").ok)
  check("rejects too-few questions", !normalizeAiQuestionnaire({ questions: [{ domain: "monitoring", q: "only one", hint: "h", weight: 1 }], procedures: [{ title: "p" }] }, "x").ok)
  check("rejects missing procedures", !normalizeAiQuestionnaire({ questions: Array.from({ length: 10 }, (_, i) => ({ domain: "monitoring", q: `q${i} long enough question text`, hint: "h", weight: 1 })) }, "x").ok)
  check("extractJsonObject returns null on non-JSON", extractJsonObject("just words, no braces") === null)
  // the deployed keyless engines sometimes prefix reasoning prose (with
  // stray braces) before the payload — the scanner must find the real object
  const reasoned =
    'Let me think. The schema needs { title, questions } fields. Wait — first, the domains {"control-environment" etc}. Here it is:\n{"title":"ToC","scope":"s","risks":["r"],"procedures":[{"title":"Inspect bank recs","detail":"monthly","type":"inspection"}],"questions":[{"domain":"monitoring","q":"Are findings tracked to closure each month?","hint":"check the tracker","weight":2},{"domain":"it-cyber","q":"Are leaver accounts disabled same day?","hint":"check the log","weight":3,"critical":true},{"domain":"control-activities","q":"Are journal entries approved before posting?","hint":"trace three","weight":3},{"domain":"risk-assessment","q":"Is fraud risk assessed with governance?","hint":"who attended","weight":2},{"domain":"control-environment","q":"Is the code of conduct acknowledged?","hint":"the log","weight":1},{"domain":"info-communication","q":"Is there a close calendar with owners?","hint":"ask for it","weight":1},{"domain":"monitoring","q":"Are KPI variances investigated?","hint":"evidence one","weight":2},{"domain":"control-activities","q":"Are bank mandates dual-authorized?","hint":"mandate copy","weight":3}]}'
  const fromReasoned = extractJsonObject(reasoned)
  check("extractor survives reasoning prose with stray braces before the JSON", fromReasoned !== null)
  const reasonedNorm = normalizeAiQuestionnaire(fromReasoned, "Fallback")
  check("the reasoned payload normalizes to a valid questionnaire", reasonedNorm.ok, reasonedNorm.ok ? "" : reasonedNorm.error)
  // weak pool engines: questions delivered as a JSON STRING, wrapper key,
  // word weights, question text under "question" instead of "q"
  const weak = {
    title: "Coffee Carts ToC",
    data: {
      scope: "5 carts, cash heavy",
      questions: JSON.stringify(
        Array.from({ length: 9 }, (_, i) => ({
          domain: ["control-environment", "risk-assessment", "control-activities", "info-communication", "monitoring", "it-cyber"][i % 6],
          question: `Manager question number ${i + 1} about the cart operation controls?`,
          hint: `probe hint ${i + 1}`,
          weight: ["high", "medium", "low"][i % 3],
          critical: i === 0 ? "yes" : "false",
        }))
      ),
      procedures: ["Inspect daily cash sheets", "Observe cart stock counts"],
    },
  }
  const weakNorm = normalizeAiQuestionnaire(weak, "Fallback")
  check("stringified questions array + wrapper key + word weights normalize", weakNorm.ok, weakNorm.ok ? "" : weakNorm.error)
  if (weakNorm.ok) {
    check("word weights mapped (high→3, medium→2, low→1)", weakNorm.data.questions[0].weight === 3 && weakNorm.data.questions[1].weight === 2 && weakNorm.data.questions[2].weight === 1)
    check("critical accepted as \"yes\"", weakNorm.data.questions[0].critical === true)
  }

  /* ---------------- 5. wiring ---------------- */
  console.log("\n── 5. Wiring (router, sidebar, palette, i18n) ──")
  const typesSrc = readFileSync(join(ROOT, "src/lib/audit-types.ts"), "utf-8")
  check('ViewName gained "toc"', typesSrc.includes('| "toc"'))
  const deeplinkSrc = readFileSync(join(ROOT, "src/lib/deeplink.ts"), "utf-8")
  check("deep link route #/toc registered", deeplinkSrc.includes('toc: "toc"'))
  check("hash parser recognizes #/toc", deeplinkSrc.includes('case "toc":'))
  check("?ind and ?ai params owned by the toc view", deeplinkSrc.includes('ind: ["toc"]') && deeplinkSrc.includes('ai: ["toc"')) // v39 widened ?ai to ["toc","dd"] — the toc view still owns it
  const pageSrc = readFileSync(join(ROOT, "src/app/page.tsx"), "utf-8")
  check("page lazy-loads TocHub with a skeleton", pageSrc.includes("dynamic(() => import(\"@/components/audit/toc-hub\")"))
  check("page renders the toc view", pageSrc.includes('{view === "toc" && <TocHub />}'))
  check("mobile title maps toc", pageSrc.includes('case "toc":') && pageSrc.includes("nav37.toc"))
  const sidebarSrc = readFileSync(join(ROOT, "src/components/audit/sidebar.tsx"), "utf-8")
  check("sidebar nav item with the 45-industries badge", sidebarSrc.includes("nav37.toc") && sidebarSrc.includes("TOC_INDUSTRIES_COUNT") && sidebarSrc.includes('go("toc")'))
  const paletteSrc = readFileSync(join(ROOT, "src/components/audit/command-palette.tsx"), "utf-8")
  check("command palette can jump to Test of Control", paletteSrc.includes('v: "toc"'))
  const i18nSrc = readFileSync(join(ROOT, "src/lib/i18n.ts"), "utf-8")
  const tocKeys = [
    "title", "subtitle", "how", "howBody", "domainCE", "domainRA", "domainCA", "domainIC",
    "domainMO", "domainIT", "libraryTab", "aiTab", "search", "allSectors", "noResults",
    "start", "resume", "inProgress", "assessed", "coreNote", "answered", "left", "ready",
    "evaluate", "yes", "no", "na", "probe", "criticalTag", "coreBadge", "moduleBadge",
    "weightLabel", "back", "changeAnswers", "retake", "exportMd", "verdictStrong",
    "verdictModerate", "verdictWeak", "domainScores", "criticalFailures", "noCritical",
    "gaps", "noGaps", "proceduresTitle", "aiIntroTitle", "aiIntro", "aiIndustry",
    "aiIndustryPh", "aiCase", "aiCasePh", "aiGenerate", "aiGenerating", "aiGeneratingNote",
    "aiFailed", "aiMyTitle", "aiMyEmpty", "aiOpen", "aiDelete", "aiBadge", "aiRegenerate",
  ]
  const tocBlock = i18nSrc.slice(i18nSrc.indexOf("toc37: {"), i18nSrc.indexOf("} as const"))
  let i18nOk = true
  for (const k of tocKeys) {
    const re = new RegExp(`${k}:\\s*\\{[\\s\\S]{0,40}?en:`, "")
    if (!re.test(tocBlock)) {
      check(`i18n key toc37.${k} present`, false)
      i18nOk = false
    }
  }
  check("all toc37 i18n keys present in EN + AR", i18nOk)
  check("nav37.toc in both languages", /toc:\s*\{\s*en:\s*"Test of Control",\s*ar:/.test(i18nSrc))
  const hubSrc = readFileSync(join(ROOT, "src/components/audit/toc-hub.tsx"), "utf-8")
  check("hub persists answers per questionnaire (owner-prefixed keys)", hubSrc.includes("auditedge-toc-answers-v37") && hubSrc.includes("::"))
  check("hub persists saved AI questionnaires", hubSrc.includes("auditedge-toc-ai-v37"))
  check("hub honors the ?ind= deep link", hubSrc.includes('getRouteParam("ind")'))
  const runnerSrc = readFileSync(join(ROOT, "src/components/audit/toc-runner.tsx"), "utf-8")
  check("runner gates Evaluate until every question is answered", runnerSrc.includes("disabled={!complete}"))
  check("runner renders the three-way answer control (yes/no/na)", runnerSrc.includes('"radiogroup"'))
  check("runner exports the ICQ as markdown", runnerSrc.includes("text/markdown"))

  /* ---------------- 6. the API route ---------------- */
  console.log("\n── 6. The AI generation route ──")
  const routePath = join(ROOT, "src/app/api/ai/toc-generate/route.ts")
  check("route file exists", existsSync(routePath))
  const routeSrc = readFileSync(routePath, "utf-8")
  check("rate-limited under the draft policy", routeSrc.includes("AI_POLICIES.draft"))
  check("session-gated (no anonymous generation)", routeSrc.includes("getSessionUser") && routeSrc.includes("unauthenticated"))
  check("uses the non-streaming engine with reasoning off for strict JSON", routeSrc.includes("generateOnce") && routeSrc.includes("thinking: false"))
  check("attempt 2 re-rolls the main model (the removed Qwen route stays out)", !routeSrc.includes("pool-qwen") && routeSrc.includes("retryModel"))
  check("two attempts before giving up", routeSrc.includes("attempt < 2"))
  check("every reply hardened through the normalizer", routeSrc.includes("normalizeAiQuestionnaire"))
  check("bilingual prompts (EN + AR)", routeSrc.includes("صمّم استبيان رقابة داخلية"))
  check("validates input lengths (120 / 4000)", routeSrc.includes("120") && routeSrc.includes("4000"))
  check("node runtime + generous duration for reasoning models", routeSrc.includes('runtime = "nodejs"'))

  /* ---------------- 7. version sync ---------------- */
  console.log("\n── 7. Version sync ──")
  const sw = readFileSync(join(ROOT, "public/sw.js"), "utf-8")
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf-8"))
  const major = Number(pkg.version.split(".")[0])
  check("package.json: major ≥ 37 (this suite pins a floor, not a release)", major >= 37, pkg.version)
  check("sw: cache stamp tracks the app version (auditedge-v37)", sw.includes(`VERSION = "auditedge-v${major}"`), `v${major}`)
  check("test-v37 wired into the test chain", (pkg.scripts?.test ?? "").includes("test-v37"))
  const changelog = readFileSync(join(ROOT, "CHANGELOG.md"), "utf-8")
  check("CHANGELOG carries the v37 entry", changelog.includes("## 37.0.0"))

  /* ---------------- done ---------------- */
  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
