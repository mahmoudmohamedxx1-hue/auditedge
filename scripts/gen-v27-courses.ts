/**
 * v27 — generate src/lib/video-courses-v27.ts from the harvested playlist
 * JSONs (/tmp/h-*.json, every lesson id oEmbed-verified live).
 *
 * Usage: bun scripts/gen-v27-courses.ts
 */
import { readFileSync, writeFileSync } from "fs"

type Lesson = { id: string; title: string; length: string }
type Harvest = {
  playlistId: string
  title: string
  channel: string
  pageLessons: number
  totalMinutes: number
  lessons: Lesson[]
  failed: string[]
}

const H = (p: string) => JSON.parse(readFileSync(p, "utf-8")) as Harvest

const harvests = {
  excelAr: H("/tmp/h-excel-ar.json"),
  wordAr: H("/tmp/h-word-ar.json"),
  excelEn: H("/tmp/h-excel-en.json"),
  wordEn: H("/tmp/h-word-en.json"),
  ifrsZuhair: H("/tmp/h-ifrs-zuhair.json"),
  acctAms: H("/tmp/h-acct-ams.json"),
  costEssaad: H("/tmp/h-cost-essaad.json"),
  analysisHossam: H("/tmp/h-analysis-hossam.json"),
}

// sanity — every harvest must be complete and fail-free
for (const [k, h] of Object.entries(harvests)) {
  if (h.failed.length || !h.lessons.length) {
    throw new Error(`harvest ${k} incomplete: ${h.failed.length} failed`)
  }
  console.log(`${k}: ${h.lessons.length}/${h.pageLessons} lessons · ${h.totalMinutes} min · ${h.channel}`)
}

/** escape for TS double-quoted strings */
const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')

function lessonsBlock(h: Harvest): string {
  return h.lessons
    .map((l) => `      { id: "${l.id}", title: "${esc(l.title)}", length: "${l.length}" },`)
    .join("\n")
}

function courseBlock(opts: {
  id: string
  titleEn: string
  titleAr: string
  channel: string
  category: string
  level: string
  language: string
  hours: string
  views: string
  descEn: string
  descAr: string
  harvest: Harvest
}) {
  return `  {
    id: "${opts.id}",
    titleEn: "${esc(opts.titleEn)}",
    titleAr: "${esc(opts.titleAr)}",
    channel: "${esc(opts.channel)}",
    category: "${opts.category}",
    level: "${opts.level}",
    language: "${opts.language}",
    hours: "${opts.hours}",
    views: "${esc(opts.views)}",
    descEn: "${esc(opts.descEn)}",
    descAr: "${esc(opts.descAr)}",
    lessons: [
${lessonsBlock(opts.harvest)}
    ],
  },`
}

const blocks = [
  courseBlock({
    id: "alassaal-excel-complete",
    titleEn: "Master Excel — the complete Arabic Excel course",
    titleAr: "احترف أكسل — الكورس الكامل للإكسل",
    channel: harvests.excelAr.channel,
    category: "excel",
    level: "Beginner",
    language: "AR",
    hours: `~${Math.round(harvests.excelAr.totalMinutes / 60)}h`,
    views: `${harvests.excelAr.lessons.length} verified lessons`,
    descEn:
      "The complete 67-episode Excel course in Egyptian Arabic — formulas and dates, SUMIFS, filters, formatting, charts and printing, building up lesson by lesson from zero to comfortable daily use.",
    descAr:
      "الكورس الكامل للإكسل بـ٦٧ حلقة بالعربية المصرية — المعادلات والتواريخ وSUMIFS والتنقية والتنسيق والرسوم البيانية والطباعة، درسًا بعد درس من الصفر حتى الاستخدام اليومي المريح.",
    harvest: harvests.excelAr,
  }),
  courseBlock({
    id: "qonswa-word-complete",
    titleEn: "Microsoft Word — the complete Arabic Word course",
    titleAr: "كورس برنامج مايكروسوفت وورد بالكامل",
    channel: "Mohamed Qonswa",
    category: "word",
    level: "Beginner",
    language: "AR",
    hours: `~${Math.round(harvests.wordAr.totalMinutes / 60)}h`,
    views: `${harvests.wordAr.lessons.length} verified lessons`,
    descEn:
      "A complete 33-episode Microsoft Word course in Arabic — formatting, styles, tables, images, headers and footers, mail merge and professional report layout: the Word side of the office duo you asked for.",
    descAr:
      "كورس وورد كامل بـ٣٣ حلقة بالعربية — التنسيق والأنماط والجداول والصور والترويسات ودمج المراسلات وإخراج التقارير الاحترافية: واجه المكتب المكتمل الذي طلبته.",
    harvest: harvests.wordAr,
  }),
  courseBlock({
    id: "trumpexcel-basic-advanced",
    titleEn: "FREE Excel Course — Basic to Advanced (TrumpExcel)",
    titleAr: "كورس إكسل مجاني من الأساسيات إلى المتقدم (TrumpExcel)",
    channel: "TrumpExcel",
    category: "excel",
    level: "Intermediate",
    language: "EN",
    hours: `~${Math.round(harvests.excelEn.totalMinutes / 60)}h`,
    views: `${harvests.excelEn.lessons.length} verified lessons`,
    descEn:
      "Sumit Bansal's famous free Excel course — 26 sessions from cell basics to Excel tables, PivotTables, dashboards, formulas in depth (VLOOKUP/XLOOKUP, SUMIFS, IF, dynamic arrays), data cleaning and reporting best practice.",
    descAr:
      "كورس الإكسل المجاني الشهير من سوميت بانسال — ٢٦ جلسة من أساسيات الخلية إلى الجداول والجداول المحورية ولوحات المتابعة والمعادلات المتقدمة (VLOOKUP وXLOOKUP وSUMIFS والمصفوفات الديناميكية) وتنظيف البيانات.",
    harvest: harvests.excelEn,
  }),
  courseBlock({
    id: "lsd-word-full",
    titleEn: "Microsoft Word — the full course",
    titleAr: "وورد — الكورس الكامل",
    channel: "Learn Skills Daily",
    category: "word",
    level: "Intermediate",
    language: "EN",
    hours: `~${Math.round(harvests.wordEn.totalMinutes / 60)}h`,
    views: `${harvests.wordEn.lessons.length} long-form sessions`,
    descEn:
      "A four-session deep Word masterclass (nearly 7 hours) — long-document architecture, styles and templates, tables of contents, captions, sectioning, references and collaboration-ready documents.",
    descAr:
      "ورشة وورد متقدمة في أربع جلسات (نحو ٧ ساعات) — هندسة المستندات الطويلة والأنماط والقوالب والفهرس والتسميات والتقسيم والمراجع والمستندات الجاهزة للتعاون.",
    harvest: harvests.wordEn,
  }),
  courseBlock({
    id: "zuhair-ifrs-standards",
    titleEn: "International Accounting Standards — the complete IFRS/IAS series",
    titleAr: "معايير المحاسبة الدولية — سلسلة IFRS/IAS الكاملة",
    channel: harvests.ifrsZuhair.channel,
    category: "ifrs",
    level: "Advanced",
    language: "AR",
    hours: `~${Math.round(harvests.ifrsZuhair.totalMinutes / 60)}h`,
    views: `${harvests.ifrsZuhair.lessons.length} verified lessons`,
    descEn:
      "The most complete Arabic standards library on the channel shelf — 81 lectures walking the Conceptual Framework (1989→2018) then IAS 1 through the IFRS corpus: presentation, inventory, leases, revenue, financial instruments, consolidation, with worked examples throughout.",
    descAr:
      "أكمل مكتبة معايير بالعربية على الرف — ٨١ محاضرة تسير بالإطار المفاهيمي (١٩٨٩ حتى ٢٠١٨) ثم معيار المحاسبة الدولي رقم ١ وما بعده عبر منظومة IFRS: العرض والمخزون والإيجارات والإيرادات والأدوات المالية والتجميع، بأمثلة محلولة.",
    harvest: harvests.ifrsZuhair,
  }),
  courseBlock({
    id: "ams-financial-accounting",
    titleEn: "Financial accounting from zero — 2024 Arabic course",
    titleAr: "كورس محاسبة مالية من الصفر — 2024",
    channel: "AMS للمحاسبة والضرائب",
    category: "accounting",
    level: "Beginner",
    language: "AR",
    hours: `~${Math.round(harvests.acctAms.totalMinutes / 60)}h`,
    views: `${harvests.acctAms.lessons.length} verified lessons`,
    descEn:
      "An 11-session foundation course — the accounting cycle, journals and ledgers, trial balance, adjusting entries and the basic financial statements, taught in plain Arabic with solved exercises.",
    descAr:
      "كورس تأسيسي من ١١ جلسة — الدورة المحاسبية واليوميات والأستاذ وميزان المراجعة والتسويات والقوائم المالية الأساسية، بشرح عربي مبسط وتمارين محلولة.",
    harvest: harvests.acctAms,
  }),
  courseBlock({
    id: "essaad-cost-accounting",
    titleEn: "Cost accounting — the Arabic series",
    titleAr: "سلسلة كورس محاسبة التكاليف",
    channel: "عصام الصياد",
    category: "accounting",
    level: "Intermediate",
    language: "AR",
    hours: `~${Math.round(harvests.costEssaad.totalMinutes / 60)}h`,
    views: `${harvests.costEssaad.lessons.length} verified lessons`,
    descEn:
      "A focused cost-accounting series — cost classification, materials and labour control, overhead allocation, job and process costing — the costing base that CMA Part 1 and ACCA MA build on.",
    descAr:
      "سلسلة محاسبة تكاليف مركزة — تصنيف التكاليف ورقابة المواد والعمالة وتحميل التكاليف الصناعية وأوامر ومراحل الإنتاج، وهي قاعدة التكاليف التي يبني عليها CMA الجزء الأول وACCA MA.",
    harvest: harvests.costEssaad,
  }),
  courseBlock({
    id: "hossam-financial-analysis",
    titleEn: "Financial statement analysis — an integrated approach",
    titleAr: "التحليل المالي — مدخل متكامل",
    channel: harvests.analysisHossam.channel,
    category: "accounting",
    level: "Intermediate",
    language: "AR",
    hours: `~${Math.round(harvests.analysisHossam.totalMinutes / 60)}h`,
    views: `${harvests.analysisHossam.lessons.length} verified lessons`,
    descEn:
      "Hossam Saad's integrated analysis series — reading the statements as a set, ratio families (liquidity, leverage, profitability, efficiency), horizontal and vertical analysis, and drawing conclusions a lender or investor would act on.",
    descAr:
      "سلسلة حسام سعد للتحليل المتكامل — قراءة القوائم كمنظومة، وأسر النسب (السيولة والرفع والربحية والكفاءة)، والتحليل الأفقي والرأسي، واستخلاص استنتاجات يبنى عليها قرار مقرض أو مستثمر.",
    harvest: harvests.analysisHossam,
  }),
]

const out = `/** v27 — the new-course shelf (auto-generated from live-verified
 *  YouTube harvests; every lesson id oEmbed-verified on 2026-10-01 by
 *  scripts/yt-harvest-v27.ts, data in /tmp/h-*.json).
 *
 *  Eight additions:
 *    · Office pair the learner asked for — ADVANCED EXCEL + WORD, Arabic
 *      AND English (Al Assaal, Qonswa, TrumpExcel, Learn Skills Daily)
 *    · More Arabic accounting — the 39-hour IAS/IFRS standards library of
 *      Dr. Zuhair, financial accounting from zero (AMS), cost accounting
 *      (Essam El-Sayyad) and financial-statement analysis (Hossam Saad)
 *
 *  Imported by video-courses.ts and appended to VIDEO_COURSES. */

import type { VideoCourse } from "./video-courses"

export const VIDEO_COURSES_V27: VideoCourse[] = [
${blocks.join("\n")}
]
`

writeFileSync("src/lib/video-courses-v27.ts", out)
console.log(`\nwrote src/lib/video-courses-v27.ts — ${blocks.length} courses`)
