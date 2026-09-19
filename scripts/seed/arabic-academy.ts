/**
 * Seed the "Arabic Academy" — the most famous free Arabic YouTube courses on
 * auditing and IFRS — as full video courses (one lesson per video).
 *
 * Idempotent: importPlaylistAsCourse skips playlists already imported
 * (matched by source URL), so this is safe to re-run.
 *
 * Run: bun scripts/seed/arabic-academy.ts
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
  {
    listId: "PLLsYiYPRMH2zB2BhvhxSbmEBfFnJux0YS",
    title: "شرح معايير المراجعة والمراجعة العملية — Auditing Standards in Practice",
    subtitle: "دورة المراجعة العملية للأستاذ محمود حمودة",
    description:
      "أشهر دورة عربية مجانية للمراجعة الخارجية — شرح معايير المراجعة وتطبيقاتها العملية: إعداد ملف المراجعة الإلكتروني بالإكسل، تسلسل إجراءات المراجعة وتقييم المخاطر، إعداد القوائم المالية ومراجعتها، وتقرير مراقب الحسابات. The most-followed free Arabic playlist on practical external auditing and the auditing standards, by Mahmoud Hamouda — every video is a lesson, with the AI tutor ready to answer questions in Arabic or English.",
    level: "Intermediate",
    accent: "terracotta",
    maxVideos: 100,
  },
  {
    listId: "PLwUFOeM0bFdGnqCxQsgBCaChr_hbVnw6u",
    title: "معايير المراجعة الدولية ISA — الشرح الكامل بالعربي",
    subtitle: "سلسلة معايير المراجعة الدولية من قناة اعرف المحاسبة والمراجعة",
    description:
      "شرح كامل لمعايير المراجعة الدولية ISA باللغة العربية — سلسلة تغطي معايير التدقيق الدولية واحدًا تلو الآخر مع التطبيقات العملية. A complete Arabic walk-through of the International Standards on Auditing (ISA) — ideal revision companion to the office's ISA courses and the IFAC handbook in the library.",
    level: "Intermediate",
    accent: "olive",
    maxVideos: 60,
  },
  {
    listId: "PLp-vVgp6zgmDZgkDiN8AwbH8Rzbd_FDot",
    title: "كورس المعايير الدولية للتقارير المالية IFRS كامل بالعربي",
    subtitle: "IAS 1، المخزون، الإيراد، وعقود الإيجار — من الصفر للاحتراف",
    description:
      "كورس كامل بالعربي في المعايير الدولية للتقارير المالية IFRS: عرض القوائم المالية IAS 1، المخزون IAS 2، الإيراد IFRS 15، عقود الإيجار IFRS 16 وغيرها بشرح عملي شامل. A full Arabic IFRS course — pair it with the office's IFRS-CORE course and the Egyptian Accounting Standards text in the library.",
    level: "Foundation",
    accent: "plum",
    maxVideos: 60,
  },
  {
    listId: "PLj6g87I4C7yRlBGRpaSU3m3OFTF-fTSij",
    title: "كورس معايير المحاسبة الدولية IFRS المجاني — AccFlex",
    subtitle: "الإطار المفاهيمي ومعايير IAS و IFRS خطوة بخطوة",
    description:
      "كورس مجاني من قناة AccFlex يشرح معايير المحاسبة الدولية IFRS خطوة بخطوة: الإطار المفاهيمي، عرض القوائم المالية، والأدوات المالية. A free Arabic IFRS series by AccFlex — good supplementary material for trainees preparing for CertIFR-style exams.",
    level: "Foundation",
    accent: "sage",
    maxVideos: 60,
  },
]

async function main() {
  console.log("🌱 Seeding the Arabic Academy (famous free Arabic auditing & IFRS courses)…\n")
  let created = 0
  let skipped = 0

  for (const p of PLAYLISTS) {
    const url = `https://www.youtube.com/playlist?list=${p.listId}`
    process.stdout.write(`  • ${p.title.slice(0, 60)}… `)
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
