/**
 * v8 ingestion — add IFRS + the Egyptian Auditing Standards to the Library:
 *
 *  A. Egyptian Standards on Auditing, Review, Limited Examination & Other
 *     Assurance Engagements — PM Decree 3725/2025 (Official Gazette 15 Oct 2025,
 *     effective for financial years beginning on/after 1 Jan 2027).
 *     Split standard-by-standard via a page map that was empirically verified
 *     against the PDF (title-page scanning; Arabic-Indic digit runs are reversed
 *     by the extractor, so boundaries were verified by content sampling).
 *     44 pronouncements + practice note 1000 + preface + annexes + glossary.
 *
 *  B. FRA Decree 175/2024 — Ethics & conduct rules for FRA-registered auditors.
 *  C. FRA Decree 174/2024 — Quality-control rules for FRA-registered auditors.
 *
 *  D. IFRS Accounting Standards — official EU-adopted text (Commission
 *     Regulation (EC) 1126/2006 + amendments, consolidated to 01.01.2023,
 *     published free on EUR-Lex). Split per standard: 26 IAS + 16 IFRS +
 *     IFRIC interpretations. EU amendment markers (►M12, ▼B …) and running
 *     page footers are stripped.
 *
 * Categories: "Egyptian Standards" (A/B/C), "IFRS" (D). The existing FRA 2019
 * accounting-standards material is moved into "Egyptian Standards" too.
 *
 * Idempotent: deletes previously ingested records by fileName prefix, recreates.
 * Run: bun scripts/ingest-standards-v8.ts [--probe]
 */
import { PrismaClient } from "@prisma/client"
import { extractText, getDocumentProxy } from "unpdf"

const db = new PrismaClient()

/* ------------------------------------------------------------------ sources */
const ESA_PDF = "research/downloads/fra-egyptian-auditing-standards-3725-2025.pdf"
const ESA_URL = "https://fra.gov.eg/wp-content/uploads/2025/10/3725-2025.pdf"
const ETHICS_PDF = "research/downloads/fra-ethics-rules-175-2024.pdf"
const ETHICS_URL =
  "https://fra.gov.eg/wp-content/uploads/2024/11/نشر-قرار-رقم-175-لسنة-2024-بالوقائع.pdf"
const QC_PDF = "research/downloads/fra-quality-control-174-2024.pdf"
const QC_URL = "https://fra.gov.eg/wp-content/uploads/2024/11/alamiria_2024_174.pdf"
const IFRS_PDF = "research/downloads/eurlex-ifrs-consolidated-2023.pdf"
const IFRS_URL = "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02008R1126-20230101"

const CAT_EG = "Egyptian Standards"
const CAT_IFRS = "IFRS"

/* ------------------------------------------- A. Egyptian auditing standards */
type EsSeg = {
  key: string // fileName key
  title: string // Arabic title (canonical)
  intl: string // international equivalent label
  from: number // 1-based inclusive start page
  to: number // 1-based inclusive end page
}

const ESA_SEGMENTS: EsSeg[] = [
  { key: "preface", title: "التمهيد لإصدارات المعايير المصرية للمراجعة والفحص المحدود ومهام التأكد الأخرى", intl: "Preface (equivalent to the IAASB Preface)", from: 1, to: 2 },
  { key: "esqm-1", title: "المعيار المصري لمراقبة الجودة (1) — مراقبة الجودة للمؤسسات المهنية التي تؤدي عمليات مراجعة وفحص محدود للقوائم المالية ومهام التأكد ومهام الخدمات ذات الصلة", intl: "Equivalent of ISQM 1", from: 3, to: 27 },
  { key: "esa-200", title: "المعيار المصري للمراجعة (200) — الهدف من عملية مراجعة القوائم المالية والمبادئ العامة التي تحكمها", intl: "Equivalent of ISA 200", from: 28, to: 46 },
  { key: "esa-210", title: "المعيار المصري للمراجعة (210) — شروط التكليف بعمليات المراجعة", intl: "Equivalent of ISA 210", from: 47, to: 60 },
  { key: "esa-220", title: "المعيار المصري للمراجعة (220) — مراقبة الجودة على عمليات مراجعة القوائم المالية", intl: "Equivalent of ISA 220 (Revised)", from: 61, to: 76 },
  { key: "esa-230", title: "المعيار المصري للمراجعة (230) — توثيق أعمال المراجعة", intl: "Equivalent of ISA 230", from: 77, to: 88 },
  { key: "esa-240", title: "المعيار المصري للمراجعة (240) — مسؤوليات المراقب بشأن الغش والتدليس عند مراجعة القوائم المالية", intl: "Equivalent of ISA 240", from: 89, to: 125 },
  { key: "esa-250", title: "المعيار المصري للمراجعة (250) — مراعاة القوانين واللوائح عند مراجعة قوائم مالية", intl: "Equivalent of ISA 250 (Revised)", from: 126, to: 140 },
  { key: "esa-260", title: "المعيار المصري للمراجعة (260) — الاتصال بالمسئولين عن الحوكمة", intl: "Equivalent of ISA 260 (Revised)", from: 141, to: 160 },
  { key: "esa-265", title: "المعيار المصري للمراجعة (265) — إبلاغ القصور في الرقابة الداخلية للمسئولين عن الحوكمة والإدارة", intl: "Equivalent of ISA 265", from: 161, to: 169 },
  { key: "esa-300", title: "المعيار المصري للمراجعة (300) — التخطيط لعملية مراجعة القوائم المالية", intl: "Equivalent of ISA 300", from: 170, to: 182 },
  { key: "esa-315", title: "المعيار المصري للمراجعة (315) — تفهم المنشأة وبيئتها وتقييم مخاطر التحريف الهام والمؤثر", intl: "Equivalent of ISA 315 (Revised 2019)", from: 183, to: 266 },
  { key: "esa-320", title: "المعيار المصري للمراجعة (320) — الأهمية النسبية عند تخطيط وتنفيذ المراجعة", intl: "Equivalent of ISA 320", from: 267, to: 274 },
  { key: "esa-330", title: "المعيار المصري للمراجعة (330) — إجراءات مراقب الحسابات تجاه المخاطر التي تم تقييمها", intl: "Equivalent of ISA 330", from: 275, to: 293 },
  { key: "esa-402", title: "المعيار المصري للمراجعة (402) — اعتبارات المراجعة المتعلقة بالمنشآت التي تستخدم منشأة خدمية", intl: "Equivalent of ISA 402 (Revised)", from: 294, to: 310 },
  { key: "esa-450", title: "المعيار المصري للمراجعة (450) — تقييم التحريفات المكتشفة خلال المراجعة", intl: "Equivalent of ISA 450", from: 311, to: 322 },
  { key: "esa-500", title: "المعيار المصري للمراجعة (500) — أدلة المراجعة", intl: "Equivalent of ISA 500", from: 323, to: 338 },
  { key: "esa-501", title: "المعيار المصري للمراجعة (501) — أدلة المراجعة: اعتبارات محددة لبنود معينة", intl: "Equivalent of ISA 501", from: 339, to: 349 },
  { key: "esa-505", title: "المعيار المصري للمراجعة (505) — المصادقات الخارجية", intl: "Equivalent of ISA 505", from: 350, to: 360 },
  { key: "esa-510", title: "المعيار المصري للمراجعة (510) — التكليف بالمراجعة لأول مرة: الأرصدة الافتتاحية", intl: "Equivalent of ISA 510", from: 361, to: 371 },
  { key: "esa-520", title: "المعيار المصري للمراجعة (520) — الإجراءات التحليلية", intl: "Equivalent of ISA 520", from: 372, to: 377 },
  { key: "esa-530", title: "المعيار المصري للمراجعة (530) — المراجعة بالعينة", intl: "Equivalent of ISA 530", from: 378, to: 389 },
  { key: "esa-540", title: "المعيار المصري للمراجعة (540) — مراجعة التقديرات المحاسبية وما يتعلق بها من إفصاحات", intl: "Equivalent of ISA 540 (Revised)", from: 390, to: 450 },
  { key: "esa-550", title: "المعيار المصري للمراجعة (550) — الأطراف ذوو العلاقة", intl: "Equivalent of ISA 550 (Revised)", from: 451, to: 469 },
  { key: "esa-560", title: "المعيار المصري للمراجعة (560) — الأحداث اللاحقة", intl: "Equivalent of ISA 560", from: 470, to: 479 },
  { key: "esa-570", title: "المعيار المصري للمراجعة (570) — الاستمرارية", intl: "Equivalent of ISA 570 (Revised)", from: 480, to: 502 },
  { key: "esa-580", title: "المعيار المصري للمراجعة (580) — إقرارات الإدارة", intl: "Equivalent of ISA 580", from: 503, to: 515 },
  { key: "esa-600", title: "المعيار المصري للمراجعة (600) — اعتبارات خاصة: عمليات مراجعة القوائم المالية لمجموعة", intl: "Equivalent of ISA 600 (Revised)", from: 516, to: 571 },
  { key: "esa-610", title: "المعيار المصري للمراجعة (610) — استخدام عمل المراجعين الداخليين", intl: "Equivalent of ISA 610 (Revised)", from: 572, to: 590 },
  { key: "esa-620", title: "المعيار المصري للمراجعة (620) — استخدام عمل خبير", intl: "Equivalent of ISA 620", from: 591, to: 609 },
  { key: "esa-700", title: "المعيار المصري للمراجعة (700) — تقرير مراقب الحسابات على مجموعة كاملة من القوائم المالية ذات الأغراض العامة", intl: "Equivalent of ISA 700 (Revised)", from: 610, to: 659 },
  { key: "esa-705", title: "المعيار المصري للمراجعة (705) — التعديلات على الرأي في تقرير مراقب الحسابات", intl: "Equivalent of ISA 705 (Revised)", from: 660, to: 684 },
  { key: "esa-706", title: "المعيار المصري للمراجعة (706) — فقرات توجيه الانتباه والأمور الأخرى في تقرير مراقب الحسابات", intl: "Equivalent of ISA 706 (Revised)", from: 685, to: 695 },
  { key: "esa-710", title: "المعيار المصري للمراجعة (710) — أرقام المقارنة", intl: "Equivalent of ISA 710", from: 696, to: 711 },
  { key: "esa-720", title: "المعيار المصري للمراجعة (720) — المعلومات الأخرى المرافقة للقوائم المالية التي تمت مراجعتها", intl: "Equivalent of ISA 720 (Revised)", from: 712, to: 754 },
  { key: "esa-800", title: "المعيار المصري للمراجعة (800) — اعتبارات خاصة: عمليات مراجعة قوائم مالية معدّة وفقًا لأطر ذات أغراض خاصة", intl: "Equivalent of ISA 800 (Revised)", from: 755, to: 773 },
  { key: "esa-805", title: "المعيار المصري للمراجعة (805) — اعتبارات خاصة: عمليات مراجعة قائمة مالية واحدة وعناصر أو حسابات أو بنود محددة", intl: "Equivalent of ISA 805 (Revised)", from: 774, to: 796 },
  { key: "esa-810", title: "المعيار المصري للمراجعة (810) — مهام إعداد التقارير عن القوائم المالية الملخصة", intl: "Equivalent of ISA 810 (Revised)", from: 797, to: 822 },
  { key: "esre-2410", title: "المعيار المصري للفحص المحدود (2410) — فحص القوائم المالية الدورية لمنشأة والمؤدي بمعرفة مراقب حساباتها", intl: "Equivalent of ISRE 2410", from: 823, to: 853 },
  { key: "esae-3000", title: "المعيار المصري لمهام التأكد (3000) — مهام التأكد بخلاف مراجعة أو فحص معلومات مالية تاريخية", intl: "Equivalent of ISAE 3000 (Revised)", from: 854, to: 920 },
  { key: "esae-3402", title: "المعيار المصري لمهام التأكد (3402) — تقارير التأكد عن أدوات الرقابة في المنشأة الخدمية", intl: "Equivalent of ISAE 3402", from: 921, to: 961 },
  { key: "esae-3410", title: "المعيار المصري لمهام التأكد (3410) — مهام التأكد عن قوائم الاحتباس الحراري", intl: "Equivalent of ISAE 3410", from: 962, to: 1023 },
  { key: "esae-3420", title: "المعيار المصري لمهام التأكد (3420) — مهام إعداد تقرير عن المعلومات المالية الافتراضية المضمنة في نشرات الاكتتاب", intl: "Equivalent of ISAE 3420", from: 1024, to: 1083 },
  { key: "esrs-4410", title: "المعيار المصري لمهام الخدمات ذات الصلة (4410) — مهام إعداد بيانات مالية", intl: "Equivalent of ISRS 4410 (Revised)", from: 1084, to: 1114 },
  { key: "eapn-1000", title: "مذكرة ممارسات المراجعة المصرية (1000) — اعتبارات خاصة في مراجعة الأدوات المالية", intl: "Equivalent of IAPN 1000", from: 1115, to: 1192 },
  { key: "annexes", title: "ملاحق المعايير المصرية — تعريف جودة المراجعة والسمات النوعية للمدخلات والمخرجات", intl: "Annexes on audit quality", from: 1193, to: 1240 },
  { key: "glossary", title: "بيان المصطلحات (2025) — المعايير المصرية للمراجعة والفحص المحدود ومهام التأكد", intl: "Glossary of Terms (2025)", from: 1241, to: 1266 },
]

/* ------------------------------------------------------- D. IFRS canonical */
const IFRS_TITLES: Record<string, string> = {
  "IAS 1": "Presentation of Financial Statements",
  "IAS 2": "Inventories",
  "IAS 7": "Statement of Cash Flows",
  "IAS 8": "Accounting Policies, Changes in Accounting Estimates and Errors",
  "IAS 10": "Events after the Reporting Period",
  "IAS 12": "Income Taxes",
  "IAS 16": "Property, Plant and Equipment",
  "IAS 17": "Leases",
  "IAS 19": "Employee Benefits",
  "IAS 20": "Accounting for Government Grants and Disclosure of Government Assistance",
  "IAS 21": "The Effects of Changes in Foreign Exchange Rates",
  "IAS 23": "Borrowing Costs",
  "IAS 24": "Related Party Disclosures",
  "IAS 26": "Accounting and Reporting by Retirement Benefit Plans",
  "IAS 27": "Separate Financial Statements",
  "IAS 28": "Investments in Associates and Joint Ventures",
  "IAS 29": "Financial Reporting in Hyperinflationary Economies",
  "IAS 32": "Financial Instruments — Presentation",
  "IAS 33": "Earnings per Share",
  "IAS 34": "Interim Financial Reporting",
  "IAS 36": "Impairment of Assets",
  "IAS 37": "Provisions, Contingent Liabilities and Contingent Assets",
  "IAS 38": "Intangible Assets",
  "IAS 39": "Financial Instruments — Recognition and Measurement",
  "IAS 40": "Investment Property",
  "IAS 41": "Agriculture",
  "IFRS 1": "First-time Adoption of International Financial Reporting Standards",
  "IFRS 2": "Share-based Payment",
  "IFRS 3": "Business Combinations",
  "IFRS 4": "Insurance Contracts",
  "IFRS 5": "Non-current Assets Held for Sale and Discontinued Operations",
  "IFRS 6": "Exploration for and Evaluation of Mineral Resources",
  "IFRS 7": "Financial Instruments — Disclosures",
  "IFRS 8": "Operating Segments",
  "IFRS 9": "Financial Instruments",
  "IFRS 10": "Consolidated Financial Statements",
  "IFRS 11": "Joint Arrangements",
  "IFRS 12": "Disclosure of Interests in Other Entities",
  "IFRS 13": "Fair Value Measurement",
  "IFRS 15": "Revenue from Contracts with Customers",
  "IFRS 16": "Leases",
  "IFRS 17": "Insurance Contracts",
  "IFRIC 1": "Changes in Existing Decommissioning, Restoration and Similar Liabilities",
  "IFRIC 2": "Members' Shares in Co-operative Entities and Similar Instruments",
  "IFRIC 4": "Determining whether an Arrangement contains a Lease",
  "IFRIC 5": "Rights to Interests arising from Decommissioning, Restoration and Environmental Rehabilitation Funds",
  "IFRIC 6": "Liabilities arising from Participating in a Specific Market — Waste Electrical and Electronic Equipment",
  "IFRIC 7": "Applying the Restatement Approach under IAS 29",
  "IFRIC 10": "Interim Financial Reporting and Impairment",
  "IFRIC 12": "Service Concession Arrangements",
  "IFRIC 14": "IAS 19 — The Limit on a Defined Benefit Asset, Minimum Funding Requirements and their Interaction",
  "IFRIC 16": "Hedges of a Net Investment in a Foreign Operation",
  "IFRIC 17": "Distributions of Non-cash Assets to Owners",
  "IFRIC 19": "Extinguishing Financial Liabilities with Equity Instruments",
  "IFRIC 20": "Stripping Costs in the Production Phase of a Surface Mine",
  "IFRIC 21": "Levies",
  "IFRIC 23": "Uncertainty over Income Tax Treatments",
}

/* ---------------------------------------------------------------- helpers */
async function extractPages(path: string): Promise<string[]> {
  const buf = await Bun.file(path).arrayBuffer()
  const pdf = await getDocumentProxy(new Uint8Array(buf))
  const { text } = await extractText(pdf, { mergePages: false })
  const arr = Array.isArray(text) ? text : [text]
  return arr.map((t) => t.normalize("NFKC"))
}

/** Strip EUR-Lex amendment markers, running footers and separator rules. */
function cleanEurlex(s: string): string {
  return s
    .replace(/[►▼]\s?M\d+/g, "")
    .replace(/[►▼]\s?B\b/g, "")
    .replace(/02008R1126\s*—\s*EN\s*—\s*01\.01\.2023\s*—\s*\d+\.\d+\s*—\s*\d+/g, "")
    .replace(/_{6,}/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

async function main() {
  const probe = process.argv.includes("--probe")

  /* ============ A. Egyptian Standards on Auditing (3725/2025) ============ */
  console.log("📖 A. Egyptian Standards on Auditing — PM Decree 3725/2025…")
  const esaPages = await extractPages(ESA_PDF)
  console.log(`   ${esaPages.length} pages extracted`)

  if (probe) {
    for (const s of ESA_SEGMENTS) {
      const sample = esaPages.slice(s.from - 1, s.to).join("\n")
      console.log(
        `   ${s.key.padEnd(12)} p${s.from}-${s.to} → ${(sample.length / 1000).toFixed(0)}KB | ${s.title.slice(0, 50)}`
      )
    }
  } else {
    await db.material.deleteMany({ where: { fileName: { startsWith: "fra-2025-" } } })
    const esaSize = (await Bun.file(ESA_PDF).stat()).size
    let esaCreated = 0

    for (const s of ESA_SEGMENTS) {
      const body = esaPages
        .slice(s.from - 1, s.to)
        .join("\n\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim()
      if (body.length < 500) continue
      await db.material.create({
        data: {
          title: s.title,
          description: `النص العربي الرسمي الكامل — ${s.intl}. صادر بقرار رئيس مجلس الوزراء رقم 3725 لسنة 2025 (الوقائع المصرية، 15 أكتوبر 2025) ويسري على القوائم المالية عن السنوات المالية التي تبدأ في أو بعد 1 يناير 2027. Full official Arabic text of the Egyptian standard (${s.intl}) issued under PM Decree 3725/2025, effective for financial years beginning on or after 1 January 2027 — the authoritative Egyptian reference for the AI tutor.`,
          category: CAT_EG,
          fileName: `fra-2025-${s.key}`,
          originalName: "3725-2025.pdf",
          mimeType: "application/pdf",
          sizeBytes: esaSize,
          textContent: body.slice(0, 300_000),
          sourceUrl: ESA_URL,
          hasFile: false,
        },
      })
      esaCreated++
    }
    console.log(`   ✓ ${esaCreated} Egyptian auditing-standards materials created`)
  }

  /* ================ B & C. FRA ethics + quality-control decrees ========== */
  console.log("📖 B. FRA Decree 175/2024 — auditor ethics rules…")
  const ethText = (await extractPages(ETHICS_PDF)).join("\n\n").trim()
  console.log(`   ethics text: ${(ethText.length / 1000).toFixed(0)}KB`)
  if (!probe)
  await db.material.deleteMany({ where: { fileName: "fra-2024-ethics-rules" } })
  if (!probe)
  await db.material.create({
    data: {
      title: "قواعد الآداب والسلوكيات الواجب على مراقبي الحسابات المقيدين لدى الهيئة الالتزام بها — قرار رقم 175 لسنة 2024",
      description:
        "النص الرسمي الكامل لقواعد الآداب والسلوكيات المهنية لمراقبي الحسابات المقيدين لدى الهيئة العامة للرقابة المالية (قرار مجلس الإدارة رقم 175 لسنة 2024) — المقابل المصري لمدونة قواعد السلوك المهني الصادرة عن IESBA: الاستقلالية، النزاهة، الموضوعية، الأمانة المهنية، السرية، والأتعاب. Full Arabic text of the FRA ethics & conduct rules for registered auditors — the Egyptian counterpart to the IESBA Code of Ethics.",
      category: CAT_EG,
      fileName: "fra-2024-ethics-rules",
      originalName: "نشر-قرار-رقم-175-لسنة-2024-بالوقائع.pdf",
      mimeType: "application/pdf",
      sizeBytes: (await Bun.file(ETHICS_PDF).stat()).size,
      textContent: ethText.slice(0, 300_000),
      sourceUrl: ETHICS_URL,
      hasFile: false,
    },
  })
  console.log("   ✓ 1 ethics material")

  console.log("📖 C. FRA Decree 174/2024 — quality-control rules…")
  const qcText = (await extractPages(QC_PDF)).join("\n\n").trim()
  console.log(`   qc text: ${(qcText.length / 1000).toFixed(0)}KB`)
  if (!probe)
  await db.material.deleteMany({ where: { fileName: "fra-2024-quality-control-rules" } })
  if (!probe)
  await db.material.create({
    data: {
      title: "قواعد مراقبة الجودة الواجب على مراقبي الحسابات المقيدين لدى الهيئة الالتزام بها — قرار رقم 174 لسنة 2024",
      description:
        "النص الرسمي الكامل لقواعد مراقبة الجودة لمراقبي الحسابات المقيدين لدى الهيئة العامة للرقابة المالية (قرار مجلس الإدارة رقم 174 لسنة 2024) — المتطلبات المصرية لسياسات وإجراءات مراقبة الجودة على مستوى المكتب والمهمة. Full Arabic text of the FRA quality-control rules for registered auditors — the Egyptian counterpart to ISQM 1 firm-level requirements.",
      category: CAT_EG,
      fileName: "fra-2024-quality-control-rules",
      originalName: "alamiria_2024_174.pdf",
      mimeType: "application/pdf",
      sizeBytes: (await Bun.file(QC_PDF).stat()).size,
      textContent: qcText.slice(0, 300_000),
      sourceUrl: QC_URL,
      hasFile: false,
    },
  })
  console.log("   ✓ 1 quality-control material")

  /* ==================== D. IFRS — EU-adopted consolidated ================= */
  console.log("📖 D. IFRS Accounting Standards — EUR-Lex consolidated 2023…")
  const ifrsPages = await extractPages(IFRS_PDF)
  const ifrsFull = ifrsPages.join("\n\n")
  console.log(`   ${ifrsPages.length} pages, ${ifrsFull.length.toLocaleString()} chars`)

  // body headings (spelled-out, uppercase — verified: these only occur in bodies)
  const headRe =
    /INTERNATIONAL ACCOUNTING STANDARD (\d{1,3})|INTERNATIONAL FINANCIAL REPORTING STANDARD (\d{1,3})|IFRIC INTERPRETATION (\d{1,3})/g
  const found: { label: string; pos: number }[] = []
  let m: RegExpExecArray | null
  while ((m = headRe.exec(ifrsFull)) !== null) {
    const label = m[1] ? `IAS ${m[1]}` : m[2] ? `IFRS ${m[2]}` : `IFRIC ${m[3]}`
    found.push({ label, pos: m.index })
  }
  // dedupe consecutive duplicates (same label at nearly same spot)
  const heads: { label: string; pos: number }[] = []
  for (const f of found) {
    const last = heads[heads.length - 1]
    if (last && last.label === f.label && f.pos - last.pos < 2000) continue
    heads.push(f)
  }
  console.log(`   ${heads.length} standard/interpretation bodies located`)

  if (probe) {
    for (let i = 0; i < heads.length; i++) {
      const end = i + 1 < heads.length ? heads[i + 1].pos : ifrsFull.length
      console.log(`   ${heads[i].label.padEnd(10)} @${(heads[i].pos / 1000).toFixed(0)}k (${((end - heads[i].pos) / 1000).toFixed(0)}KB)`)
    }
  }

  await db.material.deleteMany({ where: { fileName: { startsWith: "ifrs-eu-2023-" } } })
  const ifrsSize = (await Bun.file(IFRS_PDF).stat()).size
  let ifrsCreated = 0

  for (let i = 0; i < heads.length; i++) {
    const h = heads[i]
    const end = i + 1 < heads.length ? heads[i + 1].pos : ifrsFull.length
    const slice = cleanEurlex(ifrsFull.slice(h.pos, end))
    if (slice.length < 2000) continue
    // extract the title lines that follow the heading (up to the OBJECTIVE/SCOPE marker)
    const titleFromText = slice
      .split("\n")
      .slice(1, 6)
      .join(" ")
      .split(/OBJECTIVE|SCOPE|REFERENCES/)[0]
      .replace(/\s+/g, " ")
      .trim()
    const canonical = IFRS_TITLES[h.label] ?? titleFromText
    const key = h.label.toLowerCase().replace(" ", "-")
    if (probe) continue
    await db.material.create({
      data: {
        title: `${h.label} — ${canonical}`,
        description: `Full official text of ${h.label} (${canonical}) as adopted by the European Union — Commission Regulation (EC) 1126/2006 and amending regulations, consolidated version of 1 January 2023, published free of charge on EUR-Lex. The office's IFRS reference for the AI tutor. Note: standards issued after 2023 (e.g. IFRS 18) and later amendments are not included — always verify effective dates.`,
        category: CAT_IFRS,
        fileName: `ifrs-eu-2023-${key}`,
        originalName: "CELEX-02008R1126-20230101.pdf",
        mimeType: "application/pdf",
        sizeBytes: ifrsSize,
        textContent: slice.slice(0, 300_000),
        sourceUrl: IFRS_URL,
        hasFile: false,
      },
    })
    ifrsCreated++
  }
  console.log(`   ✓ ${ifrsCreated} IFRS/IAS/IFRIC materials created`)

  /* ---------------- move the 2019 Egyptian accounting text to its category */
  await db.material.updateMany({
    where: { fileName: "fra-2019-egyptian-accounting-standards" },
    data: { category: CAT_EG },
  })

  const total = await db.material.count()
  const byCat = await db.material.groupBy({ by: ["category"], _count: true })
  console.log(
    `\n✅ Done. Library holds ${total} materials:`,
    byCat.map((c) => `${c.category}=${c._count}`).join(", ")
  )
  await db.$disconnect()
}

main().catch(async (e) => {
  console.error("FAILED:", e)
  await db.$disconnect()
  process.exit(1)
})
