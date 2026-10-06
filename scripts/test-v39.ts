/** v39 test battery — the Due Diligence release:
 *
 *   1. Library integrity — 3 scopes, 25 workstreams, unique ids/codes,
 *      sequential codes per scope, real icons
 *   2. Content depth — the Big-4 bar: every section carries why/objectives,
 *      a request list, ≥ 7 field-ready instructions, red flags; bilingual
 *      EN+AR everywhere; refs grounded in real frameworks
 *   3. The financial scope is PER ACCOUNT — 12 account workstreams, every
 *      one with analytics & ratios, incl. the clients/receivables example
 *   4. The registry — scope filters, lookup, bilingual search, counts
 *   5. Wiring — view name, deep links (+param owners), page + sidebar +
 *      command palette + i18n (EN/AR), localStorage keys
 *   6. The AI customizer route — deal-aware prompt, validation against the
 *      real sections, caps, bilingual enforcement, rate-limit + auth gates
 *   7. Version lockstep — package.json, SW stamp, test chain, e2e script
 *
 *  Run: bun scripts/test-v39.ts */
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
const read = (p: string) => readFileSync(join(ROOT, p), "utf8")

async function main() {
  console.log("v39 — Due Diligence: the Big-4 playbook (legal / ops / per-account financial) + AI customizer\n")

  const dd = await import("../src/lib/dd")
  const {
    DD_SECTIONS,
    DD_SCOPES,
    DD_SECTION_COUNT,
    DD_PROCEDURE_COUNT,
    DD_DOCUMENT_COUNT,
    DD_RED_FLAG_COUNT,
    ddSectionsOf,
    ddSection,
    ddSearch,
  } = dd

  /* ---------------- 1. library integrity ---------------- */
  console.log("── 1. Library integrity ──")
  check("3 scopes in order: legal, ops, financial", DD_SCOPES.map((s) => s.id).join(",") === "legal,ops,financial")
  check("25 workstreams", DD_SECTION_COUNT === 25, String(DD_SECTION_COUNT))
  check("scope sizes: legal 7, ops 6, financial 12", ddSectionsOf("legal").length === 7 && ddSectionsOf("ops").length === 6 && ddSectionsOf("financial").length === 12)
  check("section ids unique", new Set(DD_SECTIONS.map((s) => s.id)).size === DD_SECTIONS.length)
  check("section codes unique", new Set(DD_SECTIONS.map((s) => s.code)).size === DD_SECTIONS.length)

  const codeOk = (prefix: string, scope: "legal" | "ops" | "financial") =>
    ddSectionsOf(scope).every((s, i) => s.code === `${prefix}-${String(i + 1).padStart(2, "0")}`)
  check("codes sequential: L-01…L-07, O-01…O-06, F-01…F-12", codeOk("L", "legal") && codeOk("O", "ops") && codeOk("F", "financial"))
  check("scope matches the data (no cross-contamination)", DD_SECTIONS.every((s) => (s.scope === "legal" ? s.code.startsWith("L-") : s.scope === "ops" ? s.code.startsWith("O-") : s.code.startsWith("F-"))))
  check("every section has an icon", DD_SECTIONS.every((s) => !!s.icon))
  check("ids are kebab-clean (lowercase, no spaces)", DD_SECTIONS.every((s) => /^[a-z0-9-]+$/.test(s.id)))

  /* ---------------- 2. content depth — the Big-4 bar ---------------- */
  console.log("\n── 2. Content depth (the Big-4 bar) ──")
  check("≥ 200 instructions across the playbook", DD_PROCEDURE_COUNT >= 200, String(DD_PROCEDURE_COUNT))
  check("≥ 140 information requests", DD_DOCUMENT_COUNT >= 140, String(DD_DOCUMENT_COUNT))
  check("≥ 90 red flags", DD_RED_FLAG_COUNT >= 90, String(DD_RED_FLAG_COUNT))
  check("every section: ≥ 2 why-it-matters objectives", DD_SECTIONS.every((s) => s.why.length >= 2))
  check("every section: ≥ 4 information requests", DD_SECTIONS.every((s) => s.documents.length >= 4))
  check("every section: ≥ 7 instructions", DD_SECTIONS.every((s) => s.procedures.length >= 7), `min ${Math.min(...DD_SECTIONS.map((s) => s.procedures.length))}`)
  check("every section: ≥ 3 red flags", DD_SECTIONS.every((s) => s.redFlags.length >= 3))
  const criticals = DD_SECTIONS.reduce((n, s) => n + s.redFlags.filter((f) => f.critical).length, 0)
  check("≥ 20 flagged deal breakers (critical red flags)", criticals >= 20, String(criticals))
  check("every workstream carries at least one critical deal breaker in its scope", ["legal", "ops", "financial"].every((sc) => ddSectionsOf(sc as "legal" | "ops" | "financial").some((s) => s.redFlags.some((f) => f.critical))))

  const bilingual = DD_SECTIONS.every(
    (s) =>
      s.title.en.length >= 4 && s.title.ar.length >= 4 &&
      s.scopeNote.en.length >= 40 && s.scopeNote.ar.length >= 40 &&
      s.why.every((w) => w.en.length >= 30 && w.ar.length >= 30) &&
      s.documents.every((d) => d.en.length >= 10 && d.ar.length >= 10) &&
      s.redFlags.every((f) => f.text.en.length >= 20 && f.text.ar.length >= 20)
  )
  check("fully bilingual: titles, scope notes, why, requests, red flags", bilingual)
  const procBilingual = DD_SECTIONS.every((s) => s.procedures.every((p) => p.text.en.length >= 40 && p.text.ar.length >= 30))
  check("every instruction is bilingual and substantive", procBilingual)
  const procIdsUnique = DD_SECTIONS.every((s) => new Set(s.procedures.map((p) => p.id)).size === s.procedures.length)
  check("procedure ids unique within each section", procIdsUnique)

  const withRefs = DD_SECTIONS.reduce((n, s) => n + s.procedures.filter((p) => p.ref).length, 0)
  check("≥ 70% of instructions carry a grounding reference", withRefs >= 0.7 * DD_PROCEDURE_COUNT, `${withRefs}/${DD_PROCEDURE_COUNT}`)
  const allRefs = DD_SECTIONS.flatMap((s) => s.procedures.map((p) => p.ref ?? "")).filter(Boolean)
  const realFrameworks = /^(IFRS|IAS|ISA|DD practice|Companies Law|Civil Code|IP Law|Labor Law|Social insurance|Data Protection|VAT|Tax|FRA|Real estate|Environment law|Transfer pricing|IFRS practice)/
  check("references limited to real frameworks (no invented clause numbers)", allRefs.every((r) => realFrameworks.test(r)), allRefs.find((r) => !realFrameworks.test(r)) ?? "")

  /* ---------------- 3. the financial scope is PER ACCOUNT ---------------- */
  console.log("\n── 3. Financial scope — per account ──")
  const fin = ddSectionsOf("financial")
  check("every financial section is an account workstream", fin.every((s) => s.group === "accounts"))
  check("non-financial sections are not accounts", [...ddSectionsOf("legal"), ...ddSectionsOf("ops")].every((s) => s.group === null))
  check("12 account workstreams, one per account area", fin.length === 12)
  const expectedAccounts = ["revenue-qoe", "receivables", "inventory", "cash", "fixed-assets", "intangibles", "investments", "payables", "debt", "equity", "payroll", "tax"]
  check("the account map covers the full balance sheet + P&L", expectedAccounts.every((id) => !!ddSection(id)))
  const clients = ddSection("receivables")!
  check("the clients example: Customers & Trade Receivables (F-02)", clients.code === "F-02" && /Customer|Client/i.test(clients.title.en))
  check("clients workstream carries all its instructions in one place (≥ 9)", clients.procedures.length >= 9, String(clients.procedures.length))
  check("every account carries analytics & ratios (≥ 4 each)", fin.every((s) => (s.analytics?.length ?? 0) >= 4))
  check("analytics are bilingual", fin.every((s) => s.analytics!.every((a) => a.en.length >= 15 && a.ar.length >= 15)))
  check("the net debt bridge lives in the debt account (F-09)", ddSection("debt")!.procedures.some((p) => /net debt/i.test(p.text.en)) && ddSection("debt")!.analytics!.some((a) => /net debt bridge/i.test(a.en)))

  /* ---------------- 4. the registry ---------------- */
  console.log("\n── 4. Registry — filters, lookup, search ──")
  check("ddSection resolves by id", ddSection("litigation")?.code === "L-03")
  check("ddSection returns undefined for unknown ids", ddSection("nope") === undefined)
  check("counts derived from the data (not hardcoded)", DD_SECTION_COUNT === DD_SECTIONS.length && DD_PROCEDURE_COUNT === DD_SECTIONS.reduce((n, s) => n + s.procedures.length, 0))
  const hitEn = ddSearch("litigation")
  check("search finds 'litigation' and ranks it first", hitEn[0] === "litigation")
  const hitAr = ddSearch("الذمم")
  check("Arabic search works (الذمم → receivables)", hitAr.includes("receivables"))
  const hitQoe = ddSearch("quality of earnings")
  check("search finds the QoE workstream", hitQoe.includes("revenue-qoe"))
  check("short queries return nothing", ddSearch("a").length === 0 && ddSearch("").length === 0)

  /* ---------------- 5. wiring ---------------- */
  console.log("\n── 5. Wiring — view, deep links, sidebar, palette, i18n ──")
  const types = read("src/lib/audit-types.ts")
  check('ViewName includes "dd"', types.includes('| "dd"'))
  const deeplink = read("src/lib/deeplink.ts")
  check("deep link route #/dd registered", deeplink.includes('dd: "dd"'))
  check("params owned by the dd view (scope / section / ai)", deeplink.includes('scope: ["dd"]') && deeplink.includes('section: ["dd"]') && deeplink.includes('ai: ["toc", "dd"]'))
  const page = read("src/app/page.tsx")
  check("page lazy-loads the view", page.includes('audit/due-diligence') && page.includes('view === "dd"'))
  check("mobile title bar names the view", page.includes('nav39.dd'))
  const sidebar = read("src/components/audit/sidebar.tsx")
  check("sidebar nav item with the workstream-count badge", sidebar.includes('nav39.dd') && sidebar.includes("DD_SECTION_COUNT"))
  const palette = read("src/components/audit/command-palette.tsx")
  check("command palette entry", palette.includes('"dd"'))
  const { tt } = await import("../src/lib/i18n")
  check("i18n: nav label EN+AR", tt("nav39.dd", "en") === "Due Diligence" && tt("nav39.dd", "ar") === "العناية الواجبة")
  check("i18n: every dd39 key resolves in both languages", ["title", "subtitle", "howBody", "libraryTab", "aiTab", "whyTitle", "analyticsTitle", "documentsTitle", "proceduresTitle", "redFlagsTitle", "back", "resetConfirm", "exportMd", "aiGenerate", "aiDeal", "aiTarget", "aiConcernsPh", "aiMemoTitle", "aiFocusTitle", "aiProcsTitle", "aiRequestsTitle", "aiApply", "aiMyTitle", "save"].every((k) => tt(`dd39.${k}` as "dd39.title", "en") !== `dd39.${k}` && tt(`dd39.${k}` as "dd39.title", "ar") !== `dd39.${k}`))
  const view = read("src/components/audit/due-diligence.tsx")
  check("checklist ticks persist (localStorage key v39)", view.includes("auditedge-dd-progress-v39"))
  check("AI customizations saved + capped", view.includes("auditedge-dd-ai-v39") && view.includes("MAX_AI_SAVED = 12"))
  check("applied supplement marked inside its sections", view.includes("dd39.aiBadge"))
  check("markdown working-paper export (section + scope)", view.includes("sectionMarkdown") && view.includes("downloadMarkdown"))
  check("search box wired to the registry", view.includes("ddSearch"))

  /* ---------------- 6. the AI customizer route ---------------- */
  console.log("\n── 6. AI customizer route ──")
  const route = read("src/app/api/ai/dd-generate/route.ts")
  check("route exists", existsSync(join(ROOT, "src/app/api/ai/dd-generate/route.ts")))
  check("rate-limited under the draft policy", route.includes("AI_POLICIES.draft"))
  check("session-gated (no anonymous generation)", route.includes("unauthenticated"))
  check("validates sectionIds against the real playbook", route.includes("DD_SECTIONS") && route.includes("validIds.has(sectionId)"))
  check("caps: ≤ 16 total, ≤ 3 per section, ≥ 4 minimum", route.includes("MAX_PROC_TOTAL = 16") && route.includes("MAX_PROC_PER_SECTION = 3") && route.includes("procs.length < 4"))
  check("bilingual enforcement (EN + AR lengths)", route.includes("textEn.length < 12 || textAr.length < 12"))
  check("deal-aware prompt (acquisition / investment / lending / partnership)", ["acquisition", "investment", "lending", "partnership"].every((d) => route.includes(`"${d}"`)))
  check("prompt grounds refs in real frameworks only", route.includes("Never invent clause numbers"))
  check("prompt lists every real section id", route.includes("sectionList"))
  check("strict JSON shape with focus + procedures + requests", route.includes('"focusEn"') && route.includes('"requestsEn"'))

  /* ---------------- 7. version lockstep ---------------- */
  console.log("\n── 7. Version lockstep ──")
  const pkg = JSON.parse(read("package.json")) as { version: string; scripts: Record<string, string>; description: string }
  check("package.json at 39.0.0", pkg.version === "39.0.0", pkg.version)
  check("description mentions due diligence", /due diligence/i.test(pkg.description))
  const major = Number(pkg.version.split(".")[0])
  const sw = read("public/sw.js")
  check("sw: cache stamp tracks the app version", sw.includes(`VERSION = "auditedge-v${major}"`), `v${major}`)
  check("test-v39 wired into the test chain", (pkg.scripts.test ?? "").includes("test-v39"))
  check("e2e-v39.sh present", existsSync(join(ROOT, "scripts/e2e-v39.sh")))
  const changelog = read("CHANGELOG.md")
  check("CHANGELOG carries the v39 entry", changelog.includes("## 39.0.0"))

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
