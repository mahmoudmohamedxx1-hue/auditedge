/**
 * v9 — expand the Arabic Academy with 9 MORE famous free Arabic courses:
 *  - IFRS in Arabic (3): CertIFR prep (The Accounting Planet, 51v),
 *    IFRS Diploma (Ali Nasser, 51v), IFRS Certificate شرح + أسئلة (Hany Sayed, 61v)
 *  - Auditing (3): Global Internal Audit Standards 2024/2025 (One Minute Audit,
 *    39v), CIA Part 1 (Knowledge Gate, 32v), CISA IT-audit (Ahmed Hefny, 32v)
 *  - Accounting & tax (3): محاسبة الضرائب (Hossam Saad, 27v),
 *    شرح قانون القيمة المضافة (Ahmed Ghanema, 6v), القيمة المضافة عمليًا (Abdelrahman Dahab, 15v)
 *
 * All playlists verified keylessly via fetchPlaylist before import (real video
 * counts + real durations → honest CPE from real watch time).
 * Idempotent: importPlaylistAsCourse skips already-imported playlists (by sourceUrl).
 * Run: bun scripts/seed/arabic-academy-v9.ts
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
    listId: "PLw7BcZ9DXQcBnevMKTzHpxNL9Z1VLOYp_",
    title: "شهادة CertIFR — الإعداد بالعربي لشهادة معايير التقارير المالية الدولية",
    subtitle: "51 محاضرة تغطي منهج CertIFR بالكامل بالعربي",
    description:
      "سلسلة تحضير كاملة لشهادة CertIFR (شهادة معايير التقارير المالية الدولية من ACCA) باللغة العربية — كل معايير IAS/IFRS بشرح مركّز مع التركيز على متطلبات الشهادة. Combine this series with the official IFRS/IAS texts in the office library: read the standard, watch its session, then attempt the certificate.",
    level: "Intermediate",
    accent: "plum",
    maxVideos: 51,
  },
  {
    listId: "PLORzSxoXX4ut10rICf68r-cTJCcWP4FfW",
    title: "دبلومة IFRS الكاملة — عبدالله عبدالناعم (108 ساعة)",
    subtitle: "أطول سلسلة عربية مفتوحة في دبلومة المعايير الدولية",
    description:
      "دبلومة كاملة في معايير التقارير المالية الدولية IFRS باللغة العربية (أكثر من مئة ساعة) — المعالجات المتقدمة لـ IAS 16 والمباني والآلات والمعدات، الإهلاك، الاقتراض، الاستثمار العقاري، والمزيد بشرح تطبيقي شامل. The most extensive open Arabic IFRS diploma series (100+ real hours) — advanced standard-by-standard treatment with worked examples; pair each topic with the official IFRS text in the office library.",
    level: "Advanced",
    accent: "clay",
    maxVideos: 60,
  },
  {
    listId: "PLnNt-7uefZIkPB9mxqraqeFYmWgTeGpoU",
    title: "كورس معايير المحاسبة الدولية — شرح وحل أسئلة — هاني سيد",
    subtitle: "61 فيديو: شرح كل معيار ثم حل أسئلة تدريبية عليه",
    description:
      "شرح مبسط لمعايير المحاسبة الدولية IAS/IFRS واحدًا تلو الآخر مع حل أسئلة تدريبية بعد كل معيار — مناسب للمراجعة السريعة قبل الاختبارات والمقابلات الفنية. Each IAS/IFRS standard explained in a short session followed by solved practice questions — ideal for quick revision before technical interviews and certificate exams (CertIFR/DipIFR).",
    level: "Foundation",
    accent: "sage",
    maxVideos: 61,
  },
  /* ---------------- Auditing ---------------- */
  {
    listId: "PL5LkH0wbMBsswKbU6JoHojzmkwlnEyEdm",
    title: "المعايير العالمية للمراجعة الداخلية 2024/2025 — تطبيقات عملية",
    subtitle: "ما تغير في تعريف ومبادئ ومعايير المراجعة الداخلية الجديدة",
    description:
      "سلسلة عملية في المعايير العالمية الجديدة للمراجعة الداخلية (Global Internal Audit Standards) المعتمدة 2024 والسارية من يناير 2025 — ماذا تغير في التعريف والغرض والمبادئ ونطاق التقارير، مع نصائح تطبيقية للمهنيين. The NEW Global Internal Audit Standards (effective January 2025) explained practically in Arabic — essential for coordinatating with internal audit under ESA/ISA 610 and for anyone in an audit committee conversation.",
    level: "Advanced",
    accent: "terracotta",
    maxVideos: 39,
  },
  {
    listId: "PL_a6OcyEJVukJ07O5fWiIVM9BmbtptUii",
    title: "المراجع الداخلي المعتمد CIA — الجزء الأول — بوابة المعرفة",
    subtitle: "أساسيات المراجعة الداخلية: منهج CIA Part 1 كاملاً",
    description:
      "شرح منهج الجزء الأول من شهادة المدقق الداخلي المعتمد CIA — أساسيات المراجعة الداخلية والاستقلالية والحوكمة وإدارة المخاطر — من قناة بوابة المعرفة مع محمد رضا. The full CIA Part 1 syllabus in Arabic — essentials of internal auditing, independence, governance and risk management; the natural next step after the general CIA overview course already in the academy.",
    level: "Intermediate",
    accent: "sand",
    maxVideos: 32,
  },
  {
    listId: "PLpwHU9rNXAVv6k9TaA6GWdDKsfQmecUDU",
    title: "CISA مدقق نظم المعلومات المعتمد — شرح بالعربي",
    subtitle: "مراجعة نظم المعلومات: منهج CISA بالمجالات الخمسة",
    description:
      "كورس تحضيري لشهادة CISA (مدقق نظم المعلومات المعتمد) باللغة العربية — مجالات المراجعة الخمسة: معايير وتوجيهات مراجعة نظم المعلومات، حوكمة وإدارة تقنية المعلومات، دورة حياة الأنظمة، عمليات وخدمات تقنية المعلومات، وحماية أصول المعلومات. CISA exam prep in Arabic across all five domains — increasingly essential for external auditors as IT general controls sit under every audit area (ESA/ISA 401).",
    level: "Advanced",
    accent: "olive",
    maxVideos: 32,
  },
  /* ---------------- Accounting & tax ---------------- */
  {
    listId: "PL2MXY0X4flhkVOp5ymt7Mse6wrPIsyX2R",
    title: "محاسبة الضرائب في مصر — كل الأنواع — حسام سعد",
    subtitle: "ضريبة الدخل والقيمة المضافة والدمغة والتنمية والتأمينات",
    description:
      "شرح عملي لكل أنواع محاسبة الضرائب في مصر: إقرار ضريبة الدخل الموحد وترحيل الخسائر، المهن الحرة، القيمة المضافة، الدمغة، التنمية الاجتماعية والتأمينات — من قناة «دليلك لفهم المحاسبة». Every Egyptian tax an auditor meets in practice — unified income-tax returns, loss carry-forwards, VAT, stamps, social development and social insurance — explained practically; tax provisions and e-invoice matching are now core audit evidence areas.",
    level: "Intermediate",
    accent: "olive",
    maxVideos: 27,
  },
  {
    listId: "PLTqx_awvJrAF2STUIoo7aZa1pdlkGPP35",
    title: "شرح قانون ضريبة القيمة المضافة — أحمد غانمة",
    subtitle: "ستة دروس في نص القانون 67 لسنة 2016 وتعديلاته",
    description:
      "شرح قانون ضريبة القيمة المضافة المصري رقم 67 لسنة 2016 وتعديلاته — النطاق والتسجيل والخصم والاعتماد والخصم والرد — بأسلوب بسيط. The Egyptian VAT law (no. 67/2016) and its amendments explained article-by-article — the legal backbone behind every VAT audit testing step.",
    level: "Foundation",
    accent: "sage",
    maxVideos: 6,
  },
  {
    listId: "PL__sFii8qz1lAV7uuBj3T53MRiIj-_SDm",
    title: "القيمة المضافة عمليًا في مصر — الفاتورة الإلكترونية والمرتجعات",
    subtitle: "من التسجيل في المنظومة إلى تقديم الإقرار الشهري",
    description:
      "سلسلة عملية في ضريبة القيمة المضافة المصرية: التسجيل، الفاتورة الإلكترونية، الإقرار الشهري، السداد الإلكتروني، والتعامل مع المرتجعات — خطوة بخطوة من داخل المنظومات. Practical Egyptian VAT operations — registration, e-invoicing, monthly returns, e-payment and credit notes — the exact processes auditors now test through the ETA portals.",
    level: "Intermediate",
    accent: "clay",
    maxVideos: 15,
  },
]

async function main() {
  console.log("🌱 Expanding the Arabic Academy (+9 famous Arabic courses — v9)…\n")
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
