/**
 * Ingest the official standards texts into the Library (RAG for the AI tutor):
 *  1. IAASB 2025 Handbook Volume 1 (IFAC) — full text of every ISA / ISQM / IAPN,
 *     split standard-by-standard into library materials.
 *  2. Egyptian Accounting Standards (FRA 2019 Arabic text) — NFKC-normalized.
 *
 * Section detection in the handbook (empirically verified against the PDF text):
 *  - ISAs 210-810 open with "International Standard on Auditing (ISA) NNN …
 *    should be read in conjunction with ISA 200" (note: a newline may sit inside
 *    the phrase). The 2025 edition also carries ISA 240 (Revised) at the back.
 *  - ISA 200 has no formal heading line; it sits between ISQM 2 and ISA 210 and
 *    is located via its "Introduction / Scope of this ISA" opener.
 *  - ISQMs open with "… (ISQM) N …" followed by "Scope of this ISQM".
 *  - IAPN 1000 opens with "… should be read in conjunction with the Preface".
 *
 * Idempotent: wipes previously ingested records then recreates.
 * Run: bun scripts/ingest-standards.ts [--probe]
 */
import { PrismaClient } from "@prisma/client"
import { extractText, getDocumentProxy } from "unpdf"

const db = new PrismaClient()

const IAASB_PDF = "research/downloads/iaasb-2025-handbook-vol1.pdf"
const IAASB_URL =
  "https://ifacweb.blob.core.windows.net/publicfiles/2025-09/IAASB-2025-Handbook-Volume-1.pdf"
const FRA_PDF = "research/downloads/fra-egyptian-accounting-standards-2019.pdf"
const FRA_URL = "https://fra.gov.eg/wp-content/uploads/2021/01/acount-2019.pdf"

const ISA_TITLES: Record<string, string> = {
  "200": "Overall Objectives of the Independent Auditor and the Conduct of an Audit in Accordance with International Standards on Auditing",
  "210": "Agreeing the Terms of Audit Engagements",
  "220": "Quality Management for an Audit of Financial Statements",
  "230": "Audit Documentation",
  "240": "The Auditor's Responsibilities Relating to Fraud in an Audit of Financial Statements",
  "250": "Consideration of Laws and Regulations in an Audit of Financial Statements",
  "260": "Communication with Those Charged with Governance",
  "265": "Communicating Deficiencies in Internal Control to Those Charged with Governance and Management",
  "300": "Planning an Audit of Financial Statements",
  "315": "Identifying and Assessing the Risks of Material Misstatement",
  "320": "Materiality in Planning and Performing an Audit",
  "330": "The Auditor's Responses to Assessed Risks",
  "402": "Auditor's Considerations Relating to Entities Using Service Organizations",
  "450": "Evaluation of Misstatements Identified during the Audit",
  "500": "Audit Evidence",
  "501": "Audit Evidence — Specific Considerations for Selected Items",
  "505": "External Confirmations",
  "510": "Initial Audit Engagements — Opening Balances",
  "520": "Analytical Procedures",
  "530": "Audit Sampling",
  "540": "Auditing Accounting Estimates and Related Disclosures",
  "550": "Related Parties",
  "560": "Subsequent Events",
  "570": "Going Concern",
  "580": "Written Representations",
  "600": "Special Considerations — Audits of Group Financial Statements",
  "610": "Using the Work of Internal Auditors",
  "620": "Using the Work of an Auditor's Expert",
  "700": "Forming an Opinion and Reporting on Financial Statements",
  "701": "Communicating Key Audit Matters in the Independent Auditor's Report",
  "705": "Modifications to the Opinion in the Independent Auditor's Report",
  "706": "Emphasis of Matter Paragraphs and Other Matter Paragraphs in the Independent Auditor's Report",
  "710": "Comparative Information — Corresponding Figures and Comparative Financial Statements",
  "720": "The Auditor's Responsibilities Relating to Other Information in Documents Containing or Accompanying Audited Financial Statements",
  "800": "Special Considerations — Audits of Single Financial Statements and Specific Elements, Accounts or Items of a Financial Statement",
  "805": "Special Considerations — Audits of Standalone Financial Statements and Audits of Consolidated Financial Statements",
  "810": "Engagements to Report on Summary Financial Statements",
  "240R": "The Auditor's Responsibilities Relating to Fraud in an Audit of Financial Statements (2025 Revised — not yet effective)",
}
const ISQM_TITLES: Record<string, string> = {
  "1": "Quality Management for Firms that Perform Audits or Reviews of Financial Statements, or Other Assurance or Related Services Engagements",
  "2": "Engagement Quality Reviews",
}
const IAPN_TITLES: Record<string, string> = {
  "1000": "Special Considerations in Auditing Financial Instruments",
}

type Section = {
  kind: "ISA" | "ISQM" | "IAPN"
  key: string // "315" | "240R" | "1" | "1000"
  start: number
  end: number
}

async function loadText(path: string): Promise<string> {
  const buf = await Bun.file(path).arrayBuffer()
  const pdf = await getDocumentProxy(new Uint8Array(buf))
  const { text } = await extractText(pdf, { mergePages: true })
  return Array.isArray(text) ? text.join("\n") : text
}

function findSections(full: string): Section[] {
  const starts: { kind: Section["kind"]; key: string; pos: number }[] = []

  // --- ISAs: every ISA body opens with "Introduction / Scope of this ISA".
  //     Walk back from each body opening to the nearest formal heading line.
  //     (Contents-page phantoms find no formal line nearby and are skipped.)
  const introRe = /Introduction\s+Scope of this ISA\b/g
  let m: RegExpExecArray | null
  while ((m = introRe.exec(full)) !== null) {
    const windowStart = Math.max(0, m.index - 6000)
    const window = full.slice(windowStart, m.index)
    let num: string | null = null
    let startPos = -1
    const formalRe = /International Standard on Auditing \(ISA\)\s*(\d{1,4})/g
    let fm: RegExpExecArray | null
    while ((fm = formalRe.exec(window)) !== null) {
      num = fm[1]
      startPos = windowStart + fm.index
    }
    if (num) starts.push({ kind: "ISA", key: num, pos: startPos })
  }

  // --- ISQM 1 & 2 ---
  const isqmRe =
    /International Standard on Quality Management \(ISQM\)\s*(\d)[\s\S]{0,3500}?Scope of this ISQM/g
  while ((m = isqmRe.exec(full)) !== null) {
    starts.push({ kind: "ISQM", key: m[1], pos: m.index })
  }

  // --- IAPN 1000 ---
  const iapnRe =
    /International Auditing Practice Note \(IAPN\)\s*(\d{3,4})[\s\S]{0,600}?should be read in\s+conjunction with\s+the\s+Preface/g
  while ((m = iapnRe.exec(full)) !== null) {
    starts.push({ kind: "IAPN", key: m[1], pos: m.index })
  }

  // --- ISA 200: no formal heading line exists. It sits between ISQM 2 and
  //     ISA 210; anchor on its (possibly uppercase) title before its body intro. ---
  const isqm2 = starts.find((s) => s.kind === "ISQM" && s.key === "2")
  const isa210 = starts.find((s) => s.kind === "ISA" && s.key === "210")
  if (isqm2 && isa210) {
    const firstIntro = /Introduction\s+Scope of this ISA\b/.exec(full.slice(isa210.pos - 200000, isa210.pos))
    const gapStart = isqm2.pos
    const gapEnd = firstIntro ? isa210.pos - 200000 + firstIntro.index : isa210.pos
    const region = full.slice(gapStart, gapEnd)
    const titleMatches = [...region.matchAll(/overall objectives of the independent auditor/gi)]
    const last = titleMatches[titleMatches.length - 1]
    if (last) starts.push({ kind: "ISA", key: "200", pos: gapStart + last.index })
  }

  // --- dedupe: first occurrence keeps the plain key; a SECOND occurrence of
  //     the same number (ISA 240 Revised at the back of the 2025 handbook)
  //     gets the "R" key; further repeats are dropped. ---
  const seenCount = new Map<string, number>()
  const kept: { kind: Section["kind"]; key: string; pos: number }[] = []
  for (const s of starts.sort((a, b) => a.pos - b.pos)) {
    const n = (seenCount.get(s.key) ?? 0) + 1
    seenCount.set(s.key, n)
    if (n === 1) kept.push(s)
    else if (n === 2 && s.kind === "ISA") kept.push({ ...s, key: `${s.key}R` })
  }
  return kept.map((h, i) => ({
    ...h,
    start: h.pos,
    end: i + 1 < kept.length ? kept[i + 1].pos : full.length,
  }))
}

function titleOf(s: Section): string {
  if (s.kind === "ISA") return ISA_TITLES[s.key] ?? `ISA ${s.key}`
  if (s.kind === "ISQM") return ISQM_TITLES[s.key] ?? `ISQM ${s.key}`
  return IAPN_TITLES[s.key] ?? `IAPN ${s.key}`
}

async function main() {
  const probe = process.argv.includes("--probe")

  console.log("📖 Extracting IAASB 2025 Handbook Vol 1…")
  const iaasbText = await loadText(IAASB_PDF)
  console.log(`   ${iaasbText.length.toLocaleString()} chars`)
  const sections = findSections(iaasbText)
  console.log(`   ${sections.length} standards/pronouncements located`)

  if (probe) {
    // per-intro diagnostics: which body opening mapped to which standard
    const introRe = /Introduction\s+Scope of this ISA\b/g
    let dm: RegExpExecArray | null
    const diag: string[] = []
    while ((dm = introRe.exec(iaasbText)) !== null) {
      const windowStart = Math.max(0, dm.index - 6000)
      const window = iaasbText.slice(windowStart, dm.index)
      const nums = [...window.matchAll(/International Standard on Auditing \(ISA\) (\d{1,4})/g)].map((x) => x[1])
      diag.push(`intro@${(dm.index / 1000).toFixed(0)}k→[${nums.slice(-2).join(",") || "NONE"}]`)
    }
    console.log("   intro diagnostics:", diag.join(" "))
    // IAPN raw context (unnormalized)
    const iapnIdx = iaasbText.search(/International Auditing Practice Note \(IAPN\)/)
    console.log(
      "\n   IAPN raw 300 chars:",
      JSON.stringify(iaasbText.slice(iapnIdx, iapnIdx + 300))
    )
    for (const s of sections) {
      const slice = iaasbText.slice(s.start, s.end)
      const opening = slice.slice(0, 90).replace(/\s+/g, " ")
      console.log(
        `   ${s.kind} ${(s.key + "").padEnd(5)} @${(s.start / 1000).toFixed(0)}k →${(s.end / 1000).toFixed(0)}k (${(slice.length / 1000).toFixed(0)}KB)  "${titleOf(s).slice(0, 52)}"  | ${opening.slice(0, 50)}`
      )
    }
    await db.$disconnect()
    return
  }

  /* ---------- 1. IAASB handbook: one material per standard ---------- */
  await db.material.deleteMany({ where: { fileName: { startsWith: "ifac-2025-" } } })
  const pdfSize = (await Bun.file(IAASB_PDF).stat()).size

  let created = 0
  for (const s of sections) {
    const slice = iaasbText.slice(s.start, s.end).trim()
    if (slice.length < 2000) continue // skip fragments
    const isR = s.key.endsWith("R")
    const number = isR ? s.key.slice(0, -1) : s.key
    const revisedInText = /\(REVISED\)|\(Revised\)/.test(slice.slice(0, 300))
    const label = `${s.kind} ${number}${isR ? " (Revised)" : revisedInText && s.kind === "ISA" && number !== "200" ? " (Revised)" : ""}`
    await db.material.create({
      data: {
        title: `IFAC ${label} — ${titleOf(s)}`,
        description: `Full official text of ${label} from the 2025 IAASB Handbook (Volume 1), published by IFEA / IAASB / IFAC — the office's authoritative reference for the AI tutor.${
          isR ? " This is the 2025 revised version (not yet effective — verify effective dates)." : ""
        }`,
        category: "Standards",
        fileName: `ifac-2025-${s.kind.toLowerCase()}-${s.key.toLowerCase()}`,
        originalName: "IAASB-2025-Handbook-Volume-1.pdf",
        mimeType: "application/pdf",
        sizeBytes: pdfSize,
        textContent: slice.slice(0, 300_000),
        sourceUrl: IAASB_URL,
        hasFile: false,
      },
    })
    created++
  }
  console.log(`   ✓ ${created} IFAC standards materials created`)

  /* ---------- 2. FRA Egyptian accounting standards (Arabic) ---------- */
  console.log("📖 Extracting Egyptian Accounting Standards (FRA 2019)…")
  const fraText = (await loadText(FRA_PDF)).normalize("NFKC")
  console.log(`   ${fraText.length.toLocaleString()} chars (NFKC-normalized)`)
  await db.material.deleteMany({ where: { fileName: "fra-2019-egyptian-accounting-standards" } })
  await db.material.create({
    data: {
      title: "المعايير المصرية للمحاسبة — النص الكامل (FRA 2019)",
      description:
        "Full Arabic text of the Egyptian Accounting Standards as published by the FRA (decree 69/2019 consolidated text, based on decree 110/2015) — the official reference for Egyptian GAAP. المرجع الرسمي للمعايير المصرية للمحاسبة.",
      category: "Standards",
      fileName: "fra-2019-egyptian-accounting-standards",
      originalName: "acount-2019.pdf",
      mimeType: "application/pdf",
      sizeBytes: (await Bun.file(FRA_PDF).stat()).size,
      textContent: fraText.slice(0, 1_500_000),
      sourceUrl: FRA_URL,
      hasFile: false,
    },
  })
  console.log("   ✓ 1 FRA standards material created")

  const total = await db.material.count()
  console.log(`\n✅ Done. Library now holds ${total} materials (incl. ${created + 1} ingested standards texts).`)
  await db.$disconnect()
}

main().catch(async (e) => {
  console.error("FAILED:", e)
  await db.$disconnect()
  process.exit(1)
})
