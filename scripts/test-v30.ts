/** v30 test battery — IFRS Summaries: a new section rendering every
 *  effective IFRS & IAS (41 standards) as bilingual handwritten study
 *  notes in the style of the user's IFRS 15 notes PDF (ruled paper, red
 *  asterisk headings, decision trees, T-accounts, formulas, margin notes
 *  in the other language, exam tips).
 *
 *  Run: bun scripts/test-v30.ts */
import { readFileSync } from "node:fs"
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
  console.log("v30 — IFRS Summaries (handwritten notes for every standard)\n")

  /* ---------------- 1. catalog integrity ---------------- */
  console.log("── 1. Catalog integrity ──")
  const { IFRS_SUMMARIES, searchStandards } = await import("../src/lib/ifrs")
  const codes = IFRS_SUMMARIES.map((s) => s.code)
  check("41 standards authored (every effective IFRS & IAS)", IFRS_SUMMARIES.length === 41, `got ${IFRS_SUMMARIES.length}`)
  check("standard codes are unique", new Set(codes).size === codes.length)
  check("catalog sorted IFRS block before IAS block", codes.indexOf("IAS 1") > codes.indexOf("IFRS 17"))

  const fullBilingual = IFRS_SUMMARIES.every(
    (s) => s.title.en.trim() && s.title.ar.trim() && s.effective.en.trim() && s.effective.ar.trim()
  )
  check("every standard carries bilingual title + effective line", fullBilingual)

  const deepEnough = IFRS_SUMMARIES.filter((s) => s.blocks.length >= 5).length
  check("every standard has at least 5 content blocks", deepEnough === IFRS_SUMMARIES.length, `${deepEnough}/${IFRS_SUMMARIES.length} qualify`)

  // every block's bilingual strings are populated on both sides
  const blockStringsOk = IFRS_SUMMARIES.every((s) =>
    s.blocks.every((b) => {
      const biPairs: { en: string; ar: string }[] = []
      if (b.kind === "h" || b.kind === "p" || b.kind === "note" || b.kind === "tip") biPairs.push(b.text)
      if (b.kind === "list" || b.kind === "steps" || b.kind === "example" || b.kind === "formula") {
        const items = b.kind === "list" || b.kind === "steps" ? b.items : b.kind === "formula" ? b.lines : b.lines
        items.forEach((i) => biPairs.push(i))
      }
      if (b.kind === "tree") {
        biPairs.push(b.root)
        const walk = (br: { when: { en: string; ar: string }; then: { en: string; ar: string }; children?: never[] }[]) =>
          br.forEach((x) => {
            biPairs.push(x.when, x.then)
            if (x.children) walk(x.children as never)
          })
        if (b.title) biPairs.push(b.title)
        walk(b.branches as never)
      }
      if (b.kind === "journal") {
        b.rows.forEach((r) => {
          if (r.dr) biPairs.push(r.dr)
          if (r.cr) biPairs.push(r.cr)
        })
      }
      return biPairs.every((p) => p.en.trim().length > 0 && p.ar.trim().length > 0)
    })
  )
  check("every block string populated in BOTH languages (EN + AR)", blockStringsOk)

  const arabicQuality = IFRS_SUMMARIES.every((s) => /[\u0600-\u06FF]/.test(s.title.ar))
  check("Arabic titles contain real Arabic script", arabicQuality)

  /* ---------------- 2. the flagship mirrors the notes PDF ---------------- */
  console.log("── 2. IFRS 15 flagship mirrors the notes PDF ──")
  const ifrs15 = IFRS_SUMMARIES.find((s) => s.code === "IFRS 15")
  check("IFRS 15 exists and is flagged flagship", !!ifrs15 && ifrs15.flagship === true)
  const flagshipBlocks = ifrs15?.blocks ?? []
  check("flagship is the deepest summary (≥ 20 blocks)", flagshipBlocks.length >= 20, `${flagshipBlocks.length} blocks`)

  const stepModel = flagshipBlocks.find((b) => b.kind === "steps" && b.items.length === 5)
  check("the five-step model is present as a 5-item numbered list", !!stepModel)

  const hasHeading = (needle: string) =>
    flagshipBlocks.some(
      (b) => (b.kind === "h" || b.kind === "p") && (b.text as { en: string }).en.toLowerCase().includes(needle)
    )
  check("Step 1 — contract criteria section", hasHeading("step 1"))
  check("Warranty section (assurance vs service)", hasHeading("warranty"))
  check("Principal vs agent section", hasHeading("principal vs agent"))
  check("Bill-and-hold section", hasHeading("bill-and-hold"))
  check("Repurchase agreements section", hasHeading("repurchase"))
  check("Consignment section", hasHeading("consignment"))
  check("Right-of-return section", hasHeading("right of return"))
  check("Contract asset vs contract liability section", hasHeading("contract asset"))
  check("Long-term / PoC measuring progress section", hasHeading("measuring progress"))

  const flagshipTrees = flagshipBlocks.filter((b) => b.kind === "tree").length
  check("flagship carries decision trees (≥ 5)", flagshipTrees >= 5, `${flagshipTrees} trees`)
  const flagshipJournals = flagshipBlocks.filter((b) => b.kind === "journal").length
  check("flagship carries T-account journals (≥ 4)", flagshipJournals >= 4, `${flagshipJournals} journals`)
  const flagshipFormula = flagshipBlocks.find((b) => b.kind === "formula")
  check(
    "flagship carries the percentage-of-completion formulas",
    !!flagshipFormula && flagshipFormula.lines.some((l) => l.en.toLowerCase().includes("cost to date"))
  )
  check(
    "repurchase tree distinguishes financing vs lease",
    flagshipTrees > 0 && JSON.stringify(flagshipBlocks).includes("LEASE") && JSON.stringify(flagshipBlocks).includes("FINANCING ARRANGEMENT")
  )

  /* ---------------- 3. block-type coverage across the catalog ---------------- */
  console.log("── 3. Visual devices across all 41 standards ──")
  const kinds: Record<string, number> = {}
  IFRS_SUMMARIES.forEach((s) => s.blocks.forEach((b) => (kinds[b.kind] = (kinds[b.kind] ?? 0) + 1)))
  for (const kind of ["h", "p", "list", "steps", "tree", "journal", "formula", "note", "tip", "example"]) {
    check(`block kind "${kind}" used catalog-wide (${kinds[kind] ?? 0}×)`, (kinds[kind] ?? 0) > 0)
  }
  const standardsWithTrees = IFRS_SUMMARIES.filter((s) => s.blocks.some((b) => b.kind === "tree")).length
  const standardsWithJournals = IFRS_SUMMARIES.filter((s) => s.blocks.some((b) => b.kind === "journal")).length
  const standardsWithTips = IFRS_SUMMARIES.filter((s) => s.blocks.some((b) => b.kind === "tip")).length
  check("decision trees appear in many standards (≥ 18)", standardsWithTrees >= 18, `${standardsWithTrees} standards`)
  check("T-accounts appear across the catalog (≥ 6)", standardsWithJournals >= 6, `${standardsWithJournals} standards`)
  check("exam tips appear across the catalog (≥ 25)", standardsWithTips >= 25, `${standardsWithTips} standards`)

  const topicIds = new Set(IFRS_SUMMARIES.map((s) => s.topic))
  check("all six topic groups are populated", topicIds.size === 6, [...topicIds].join(", "))

  /* ---------------- 4. search ---------------- */
  console.log("── 4. Search ──")
  check("search 'lease' finds IFRS 16", searchStandards("lease").some((s) => s.code === "IFRS 16"))
  check("search '15' finds IFRS 15", searchStandards("15").some((s) => s.code === "IFRS 15"))
  check(
    "Arabic search 'المخزون' finds IAS 2",
    searchStandards("المخزون").some((s) => s.code === "IAS 2")
  )
  check("empty query returns the full catalog", searchStandards("").length === 41)

  /* ---------------- 5. navigation wiring ---------------- */
  console.log("── 5. App wiring ──")
  const auditTypes = readFileSync(join(ROOT, "src/lib/audit-types.ts"), "utf8")
  check('ViewName union includes "ifrs"', auditTypes.includes('| "ifrs"'))

  const page = readFileSync(join(ROOT, "src/app/page.tsx"), "utf8")
  check("page.tsx lazy-imports IfrsSummaries", page.includes("ifrs-summaries"))
  check("page.tsx renders the ifrs view", page.includes('view === "ifrs"'))
  check("page.tsx mobile title routes nav30.ifrs", page.includes('case "ifrs"'))

  const sidebar = readFileSync(join(ROOT, "src/components/audit/sidebar.tsx"), "utf8")
  check("sidebar carries the IFRS Summaries nav item", sidebar.includes('go("ifrs")') && sidebar.includes("NotebookPen"))

  const palette = readFileSync(join(ROOT, "src/components/audit/command-palette.tsx"), "utf8")
  check("command palette lists the ifrs view", palette.includes('v: "ifrs"'))

  /* ---------------- 6. the paper look ---------------- */
  console.log("── 6. The handwritten paper styling ──")
  const css = readFileSync(join(ROOT, "src/app/globals.css"), "utf8")
  for (const cls of [".ifrs-paper", ".ifrs-hand-en", ".ifrs-hand-ar", ".ifrs-wobble", ".ifrs-wavy", ".ifrs-taccount"]) {
    check(`globals.css defines ${cls}`, css.includes(cls))
  }
  check("ruled-paper background uses repeating-linear-gradient", css.includes("repeating-linear-gradient"))
  check("dark-mode paper variant defined", css.includes("html.dark .ifrs-paper"))
  check("print rules keep the ruling (print-color-adjust)", css.includes("print-color-adjust: exact"))

  const layout = readFileSync(join(ROOT, "src/app/layout.tsx"), "utf8")
  check("Caveat (EN handwriting) loaded via next/font", layout.includes("Caveat") && layout.includes("--font-hand"))
  check(
    "Aref Ruqaa (AR handwriting) loaded via next/font",
    layout.includes("Aref_Ruqaa") && layout.includes("--font-hand-ar")
  )
  check("both handwriting fonts applied to <body>", layout.includes("${caveat.variable}") && layout.includes("${arefRuqaa.variable}"))

  const sheet = readFileSync(join(ROOT, "src/components/audit/ifrs-sheet.tsx"), "utf8")
  check("sheet renders red-asterisk headings", sheet.includes("AsteriskHeading"))
  check("note blocks render the OTHER language (margin annotations)", sheet.includes('lang === "en" ? "ar" : "en"'))
  check("margin-notes toggle prop respected", sheet.includes("showNotes"))

  const hub = readFileSync(join(ROOT, "src/components/audit/ifrs-summaries.tsx"), "utf8")
  // v32: prev/next navigate through openStd (the URL-syncing wrapper that
  // replaced the bare setSelected calls) — accept either spelling
  check("hub has search + topic chips + prev/next + print", ["searchStandards", "setTopic", "window.print()"].every((s) => hub.includes(s)) && (/setSelected\(prev\.code\)|openStd\(prev\.code\)/.test(hub)) && (/setSelected\(next\.code\)|openStd\(next\.code\)/.test(hub)))

  /* ---------------- 7. i18n ---------------- */
  console.log("── 7. i18n ──")
  const { tt } = await import("../src/lib/i18n")
  const keys = ["nav30.ifrs", "ifrs30.title", "ifrs30.subtitle", "ifrs30.search", "ifrs30.all", "ifrs30.sections", "ifrs30.flagship", "ifrs30.back", "ifrs30.prev", "ifrs30.next", "ifrs30.print", "ifrs30.notesToggle", "ifrs30.empty"]
  const i18nOk = keys.every(
    (k) => tt(k as never, "en") !== k && tt(k as never, "ar") !== k && tt(k as never, "en").length > 1 && tt(k as never, "ar").length > 1
  )
  check("all 13 nav30/ifrs30 keys resolve in EN and AR", i18nOk)
  check("nav label is bilingual-sane", tt("nav30.ifrs", "en") === "IFRS Summaries" && tt("nav30.ifrs", "ar") === "ملخصات المعايير")

  /* ---------------- 8. version ---------------- */
  console.log("── 8. Version ──")
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"))
  // v31 relaxed the hard pin to a floor: the catalog keeps growing (v31 rewrote
  // every standard to the flagship's depth bar).
  const [major] = String(pkg.version).split(".").map(Number)
  check("package.json at v30 or later", major >= 30, pkg.version)
  const testScript = pkg.scripts.test as string
  check("test-v30 wired into the main suite", testScript.includes("test-v30.ts"))

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
