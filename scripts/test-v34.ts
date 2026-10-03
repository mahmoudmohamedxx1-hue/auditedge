/** v34 test battery — the REAL DipIFR past-paper archive (Sameh Zidan /
 *  efham IFRS Academy) wired into the Exam Center's IFRS diploma family,
 *  plus the SW controllerchange self-heal.
 *
 *  Checks: 26 real sittings 2013–2025 (every year has June + December),
 *  every URL is https + the source CDN + a real document extension, all
 *  URLs unique, June 2025 flagged as the answered copy, ≥9 companion
 *  resources of valid kinds, bilingual labels everywhere, i18n keys,
 *  the panel mounted in the exam center's ifrs group, the pwa
 *  controllerchange guard, and the SW stamp tracking the app version.
 *
 *  Run: bun scripts/test-v34.ts */
import { readFileSync } from "node:fs"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

async function main() {
  console.log("v34 — the real DipIFR archive (2013–2025) + SW self-heal\n")

  /* ---------------- 1. the sittings ---------------- */
  console.log("── 1. The 26 real sittings (src/lib/dipifr-archive.ts) ──")
  const { DIP_SITTINGS, DIP_RESOURCES, DIP_SOURCE, DIP_FORMAT_FACTS } = await import("../src/lib/dipifr-archive")

  check("26 real sitting papers", DIP_SITTINGS.length === 26, String(DIP_SITTINGS.length))

  const byYear = new Map<number, Set<string>>()
  for (const s of DIP_SITTINGS) {
    if (!byYear.has(s.year)) byYear.set(s.year, new Set())
    byYear.get(s.year)!.add(s.session)
  }
  const years = [...byYear.keys()].sort()
  check("13 years covered: 2013 → 2025", years.length === 13 && years[0] === 2013 && years[years.length - 1] === 2025, `${years[0]}–${years[years.length - 1]}`)
  check("every year has BOTH June and December", years.every((y) => byYear.get(y)!.has("june") && byYear.get(y)!.has("december")))

  const urls = DIP_SITTINGS.map((s) => s.url)
  check("every sitting URL is https on the source CDN", urls.every((u) => u.startsWith("https://sameh-files.b-cdn.net/")))
  check("every sitting URL points at a real document (.pdf)", urls.every((u) => u.endsWith(".pdf")))
  check("sitting URLs are unique", new Set(urls).size === urls.length)

  const newest = DIP_SITTINGS[0]
  check("newest sitting is December 2025 (D25-Dec)", newest.year === 2025 && newest.session === "december" && newest.url.includes("D25-Dec"))
  const jun25 = DIP_SITTINGS.find((s) => s.year === 2025 && s.session === "june")
  check("June 2025 is the answered copy (answers flag + URL)", Boolean(jun25?.answers && jun25?.url.includes("Answers")))

  const genericPattern = /matrials\/(19|20)\d{2}-(6|12)%20(June|December)%20Exam\.pdf$/
  check("2013–2024 follow the examiner's CDN naming (matrials/{y}-{6|12} …Exam.pdf)", DIP_SITTINGS.filter((s) => s.year >= 2013 && s.year <= 2024).every((s) => genericPattern.test(s.url)))

  check("sitting labels are bilingual", DIP_SITTINGS.every((s) => s.label.length > 3 && s.labelAr.length > 3))

  /* ---------------- 2. the companion shelf ---------------- */
  console.log("\n── 2. The companion shelf (DIP_RESOURCES) ──")
  check("≥ 9 companion resources", DIP_RESOURCES.length >= 9, String(DIP_RESOURCES.length))
  const KINDS = ["archive", "workbook", "study", "glossary"]
  check("resource kinds are valid", DIP_RESOURCES.every((r) => KINDS.includes(r.kind)))
  check("every resource URL is https + a real document type", DIP_RESOURCES.every((r) => /^https:\/\/sameh-files\.b-cdn\.net\/.+\.(pdf|xlsx)$/i.test(r.url)))
  check("resource ids unique", new Set(DIP_RESOURCES.map((r) => r.id)).size === DIP_RESOURCES.length)
  check("resource labels + descriptions bilingual", DIP_RESOURCES.every((r) => r.labelEn && r.labelAr && r.descEn && r.descAr))

  const combined = DIP_RESOURCES.find((r) => r.id === "combined")
  check("combined archive covers Jun 2013 – Dec 2024", Boolean(combined && combined.url.includes("Jun%202013-Dec%202024")))
  const bppText = DIP_RESOURCES.find((r) => r.id === "bpp-text")
  const bppKit = DIP_RESOURCES.find((r) => r.id === "bpp-kit")
  check("BPP study text + practice kit for Dec 2026 / Jun 2027 sittings", Boolean(bppText && bppKit && bppText.url.includes("Dec26-Jun27") && bppKit.url.includes("Dec26-Jun27")))
  const glossary = DIP_RESOURCES.find((r) => r.id === "glossary")
  check("glossary is the EN↔AR terms workbook (.xlsx)", Boolean(glossary?.url.endsWith(".xlsx")))
  const consolidation = DIP_RESOURCES.find((r) => r.id === "workbook-consolidation")
  check("consolidation bank spans Jun 15 – Dec 25", Boolean(consolidation && consolidation.url.includes("Jun%2015%20-%20Dec%2025")))

  const allUrls = [...urls, ...DIP_RESOURCES.map((r) => r.url)]
  check("no duplicate URLs across sittings + resources", new Set(allUrls).size === allUrls.length, `${allUrls.length} links`)

  /* ---------------- 3. source + format facts ---------------- */
  console.log("\n── 3. Source attribution + exam format facts ──")
  check("source attribution points at the author's page", DIP_SOURCE.url === "https://www.samehzidan.com/course-resources1/" && DIP_SOURCE.nameEn.includes("Sameh Zidan") && DIP_SOURCE.nameAr.includes("سامح زيدان"))
  check("format facts: 4 questions × 25 marks, 180 minutes", DIP_FORMAT_FACTS.questions === 4 && DIP_FORMAT_FACTS.marksEach === 25 && DIP_FORMAT_FACTS.durationMin === 180)

  /* ---------------- 4. i18n keys ---------------- */
  console.log("\n── 4. i18n keys (EN + AR) ──")
  const i18nSrc = readFileSync("src/lib/i18n.ts", "utf-8")
  const keys = [
    "dipArchiveTitle", "dipArchiveSub", "dipFormatFacts", "dipJune", "dipDecember",
    "dipWithAnswers", "dipOpenPaper", "dipCompanion", "dipCompanionSub",
    "dipKindArchive", "dipKindWorkbook", "dipKindStudy", "dipKindGlossary",
    "dipSource", "dipVerified", "dipShowAll", "dipShowLess",
  ]
  for (const k of keys) {
    // single-line `k: { en: "...", ar: "..." }` or the multiline pretty form
    const re = new RegExp(`${k}:\\s*\\{\\s*en:\\s*"[^"]+",?\\s*ar:\\s*"[^"]+"`, "s")
    check(`i18n key exam.${k} (EN + AR)`, re.test(i18nSrc))
  }

  /* ---------------- 5. UI wiring ---------------- */
  console.log("\n── 5. UI wiring (exam-center + the panel component) ──")
  const examSrc = readFileSync("src/components/audit/exam-center.tsx", "utf-8")
  check("exam-center imports the DipArchivePanel", examSrc.includes(`from "@/components/audit/dip-archive"`))
  check("panel rides under the ifrs paper group", examSrc.includes(`g.id === "ifrs" && <DipArchivePanel lang={lang} />`))

  const panelSrc = readFileSync("src/components/audit/dip-archive.tsx", "utf-8")
  // v35 moved the sitting papers into the in-app viewer; what still
  // navigates externally (source attribution + heavy companion files)
  // must keep the safe target/rel pair.
  check("external links keep target=_blank + rel=noopener", panelSrc.includes('target="_blank"') && panelSrc.includes('rel="noopener noreferrer"'))
  check("panel shows the source attribution link", panelSrc.includes("DIP_SOURCE.url"))
  check("panel labels the June 2025 answered copy", panelSrc.includes("answers"))
  check("panel states the real format facts", panelSrc.includes("dipFormatFacts"))

  /* ---------------- 6. SW self-heal + version sync ---------------- */
  console.log("\n── 6. SW self-heal + version sync ──")
  const pwaSrc = readFileSync("src/components/audit/pwa.tsx", "utf-8")
  check("pwa: controllerchange auto-reload guard (once, only on real updates)", pwaSrc.includes("controllerchange") && pwaSrc.includes("hadController") && pwaSrc.includes("reloaded = true"))
  const sw = readFileSync("public/sw.js", "utf-8")
  const pkg = JSON.parse(readFileSync("package.json", "utf-8"))
  const major = Number(pkg.version.split(".")[0])
  check("sw: cache stamp tracks the app version (auditedge-v34)", sw.includes(`VERSION = "auditedge-v${major}"`))
  check("package.json: major ≥ 34 (v35+ releases carry the archive forward)", major >= 34, pkg.version)

  /* ---------------- done ---------------- */
  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
