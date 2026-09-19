/**
 * v8 — expand the Arabic Academy with 9 more famous free Arabic courses:
 *  - IFRS in Arabic (3): Ahmed Dahan IFRS (100v), Hossam Saad IAS & IFRS + Egyptian (36v),
 *    Dr Mowafak Ali ACCA DipIFR (32v)
 *  - Egyptian standards (2): اعرف المحاسبة والمراجعة — Egyptian Accounting Standards (131v),
 *    El-Mudawwana — شرح معايير المراجعة المصرية (21v)
 *  - Accounting (3): Ahmed Dahan practical financial accounting (52v), Hossam Saad cost
 *    accounting (18v), Ahmed Dahan financial analysis (18v)
 *  - Internal audit (1): Learning-Go — CIA certified internal auditor (29v)
 *
 * All playlists verified keylessly via fetchPlaylist before import.
 * Idempotent: importPlaylistAsCourse skips already-imported playlists (matched by sourceUrl).
 * Run: bun scripts/seed/arabic-academy-v8.ts
 */
import { importPlaylistAsCourse } from "../../src/lib/discover"

const AR_ACADEMY = "Arabic Academy"

type Plan = {
  listId: string
  title: string
  subtitle: string
  description: string
  level: string
  accent: string
  maxVideos: number
}

const PLAYLISTS: Plan[] = [
  /* ---------------- IFRS in Arabic ---------------- */
  {
    listId: "PLC8mFdlem_ifAM9e2gV9e3I3M-3JwCoO8",
    title: "دروس مكتملة في المعايير الدولية للتقارير المالية IFRS — أحمد دحان",
    subtitle: "100 حلقة في IFRS من أساسيات المعايير إلى التطبيق",
    description:
      "سلسلة كاملة (100 حلقة) في المعايير الدولية للتقارير المالية IFRS بالعربي — من قائمة القوائم المالية والإطار المفاهيمي حتى المعالجات المتقدمة — مع المدرب أحمد دحان الحاصل على CertIFR. A complete 100-episode Arabic IFRS series by Ahmed Dahan (CertIFR holder) — pair it with the office's IFRS library texts and the IFRS-CORE course.",
    level: "Intermediate",
    accent: "plum",
    maxVideos: 100,
  },
  {
    listId: "PL2MXY0X4flhkIyGOiJuL4DqB8CFix4vdu",
    title: "معايير المحاسبة الدولية IAS & IFRS والمصرية — حسام سعد",
    subtitle: "المعايير الدولية ونظيرها المصري في سلسلة واحدة",
    description:
      "شرح معايير المحاسبة الدولية IAS و IFRS مع المقارنة بنظيرها المصري — سلسلة عملية من قناة «دليلك لفهم المحاسبة» للأستاذ حسام سعد. International IAS/IFRS standards explained in Arabic side-by-side with their Egyptian counterparts — the perfect companion to the Egyptian Accounting Standards full text in the office library.",
    level: "Intermediate",
    accent: "olive",
    maxVideos: 60,
  },
  {
    listId: "PLBKOB6KNW4yYSJ2qhAW52X284rzDBqDKd",
    title: "دبلومة ACCA DipIFR — شرح بالعربي بأحدث الإصدارات",
    subtitle: "شرح منهج دبلومة المعايير الدولية ACCA DipIFR",
    description:
      "شرح منهج دبلومة معايير التقارير المالية الدولية ACCA DipIFR باللغة العربية بأحدث الإصدارات — للفريق الاستعداد للدبلومة والمقابلات الفنية. The ACCA DipIFR diploma syllabus explained in Arabic at exam depth — ideal for team members preparing for the diploma or technical interviews.",
    level: "Advanced",
    accent: "sand",
    maxVideos: 60,
  },
  /* ---------------- Egyptian standards ---------------- */
  {
    listId: "PLwUFOeM0bFdHvDDq6OVx8lO_nG6cuPqU_",
    title: "كورس معايير المحاسبة المصرية — اعرف المحاسبة والمراجعة",
    subtitle: "131 فيديو في المعايير المصرية للمحاسبة وتطبيقاتها",
    description:
      "أشهر سلسلة عربية مجانية في المعايير المصرية للمحاسبة — شرح المعايير واحدًا تلو الآخر مع التطبيقات العملية من قناة «اعرف المحاسبة والمراجعة». The most extensive free Arabic series on the Egyptian Accounting Standards (131 videos) — read the standard's official text in the office library, then watch its practical explanation here.",
    level: "Intermediate",
    accent: "terracotta",
    maxVideos: 100,
  },
  {
    listId: "PLNL5p7w7ztzEmAr_Qsje2M5O-KE8LsE2c",
    title: "شرح معايير المراجعة المصرية — المدونة",
    subtitle: "المعايير المصرية للمراجعة فيديو واحدًا تلو الآخر",
    description:
      "شرح المعايير المصرية للمراجعة (المعيار 200، أدلة المراجعة، وأشهر المعايير) باللغة العربية — يُدرس جنبًا إلى جنب مع النص الرسمي الكامل لمعايير المراجعة المصرية الجديدة (قرار 3725 لسنة 2025) الموجود في مكتبة المكتب. The Egyptian Standards on Auditing explained video-by-video in Arabic — study it alongside the full official text of the new PM Decree 3725/2025 standards package in the office library.",
    level: "Intermediate",
    accent: "clay",
    maxVideos: 40,
  },
  /* ---------------- Accounting ---------------- */
  {
    listId: "PLC8mFdlem_icvrXc3lv5A9hWAWYzDHIp6",
    title: "كورس المحاسبة المالية العملية للمحاسبين المبتدئين — أحمد دحان",
    subtitle: "من استلام العمل إلى إعداد القوائم المالية عمليًا",
    description:
      "كورس عملي في أساسيات ومبادئ المحاسبة المالية للمحاسبين حديثي التخرج: استلام العمل، القيود اليومية، ميزان المراجعة، وإعداد القوائم المالية — من قناة أحمد دحان. A practical Arabic financial-accounting course for fresh graduates — from taking over a file to preparing full financial statements.",
    level: "Foundation",
    accent: "sage",
    maxVideos: 60,
  },
  {
    listId: "PL2MXY0X4flhlio1JXbAKRfD3Ka0ukQsNz",
    title: "كورس محاسبة تكاليف متكامل من البداية بالترتيب — حسام سعد",
    subtitle: "الأساسيات ومراكز التكلفة والتكاليف بالنظم الحديثة",
    description:
      "كورس محاسبة تكاليف متكامل بالترتيب: أساسيات التكاليف، تخمين التكاليف، مراكز التكلفة، والأمر التصنيعي — من قناة «دليلك لفهم المحاسبة». A complete, ordered Arabic cost-accounting course — essential background for audit juniors testing inventory and cost of sales.",
    level: "Foundation",
    accent: "olive",
    maxVideos: 40,
  },
  {
    listId: "PLC8mFdlem_idR3cZFhMO3_WBWdp7QWjWV",
    title: "التحليل المالي — كورس مجاني شامل ومكتمل — أحمد دحان",
    subtitle: "قراءة القوائم المالية والنسب المالية والموازنة بين السيولة والربحية",
    description:
      "كورس شامل في التحليل المالي بالعربي: مفهوم التحليل المالي، النسب المالية، التحليل الأفقي والرأسي، وقراءة قوائم الشركات — مهارة أساسية لكل مراجع عند فحش التحليلات الجوهرية. A complete Arabic financial-statement-analysis course — horizontal/vertical analysis, ratios and liquidity-vs-profitability trade-offs; a core skill when performing substantive analytics.",
    level: "Intermediate",
    accent: "plum",
    maxVideos: 40,
  },
  /* ---------------- Internal audit ---------------- */
  {
    listId: "PL0mUr5UM5rdbev-J6cGJ6gTijZoh9tfhZ",
    title: "شهادة المدقق الداخلي المعتمد CIA — شرح بالعربي",
    subtitle: "أساسيات المراجعة الداخلية ومعايير IIA للاستعداد لـ CIA",
    description:
      "سلسلة عربية للتحضير لشهادة المدقق الداخلي المعتمد CIA: خدمات التأكيد والاستشارات، معايير IIA، وإدارة المخاطر — إضافة قيمة لمن يريد فهم عمل المراجعة الداخلية والتنسيق معها (المعيار المصري 610). An Arabic CIA-preparation series — understanding internal audit work is directly relevant to ESA/ISA 610 (using the work of internal auditors).",
    level: "Intermediate",
    accent: "sand",
    maxVideos: 40,
  },
]

async function main() {
  console.log("🌱 Expanding the Arabic Academy (+9 famous Arabic courses)…\n")
  let created = 0
  let skipped = 0

  for (const p of PLAYLISTS) {
    const url = `https://www.youtube.com/playlist?list=${p.listId}`
    process.stdout.write(`  • ${p.title.slice(0, 58)}… `)
    const result = await importPlaylistAsCourse(url, {
      category: AR_ACADEMY,
      title: p.title,
      subtitle: p.subtitle,
      description: p.description,
      level: p.level,
      accent: p.accent,
      featured: true,
      maxVideos: p.maxVideos,
    })
    if (result.ok) {
      created++
      console.log("✓ imported")
    } else {
      skipped++
      console.log(`→ ${result.error}`)
    }
  }

  console.log(`\n✅ Done: ${created} imported, ${skipped} skipped (already present).`)
  process.exit(0)
}

main().catch((e) => {
  console.error("FAILED:", e)
  process.exit(1)
})
