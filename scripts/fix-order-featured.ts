/**
 * v9 data fixes:
 *  1. Sensible catalog ordering — in-house professional courses first (order 1-8),
 *     Arabic Academy after (order 10+) grouped by topic (auditing → IFRS → Egyptian
 *     standards → accounting/tax → internal audit). Imported courses previously all
 *     had order=0, making the catalog default sort arbitrary.
 *  2. Un-feature the YouTube imports — 25 of 30 courses carried featured=true, which
 *     renders a gold star on every card (noise). Keep featured only on the curated
 *     in-house picks so the star means something.
 * Run: bun scripts/fix-order-featured.ts
 */
import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

/** Desired display order of the Arabic Academy courses by course code. */
const AR_ORDER = [
  "YT-LVHL", // شرح معايير المراجعة والمراجعة العملية (Hamouda) — auditing
  "YT-UP2Y", // معايير المراجعة الدولية ISA — auditing
  "YT-N3SJ", // المعايير العالمية للمراجعة الداخلية 2024/2025 — auditing (new)
  "YT-4BD2", // شرح معايير المراجعة المصرية — auditing (Egyptian)
  "YT-PLML", // IFRS كامل بالعربي — IFRS
  "YT-JWA6", // AccFlex IFRS — IFRS
  "YT-VB8S", // أحمد دحان IFRS — IFRS
  "YT-HSKT", // حسام سعد IAS & IFRS والمصرية — IFRS
  "YT-E53J", // ACCA DipIFR — IFRS
  "YT-N6TV", // CertIFR — IFRS (new)
  "YT-CZYA", // دبلومة IFRS عبدالله عبدالناعم — IFRS (new)
  "YT-PN5Y", // هاني سيد شرح وحل أسئلة — IFRS (new)
  "YT-F83J", // معايير المحاسبة المصرية — Egyptian accounting standards
  "YT-83AK", // المحاسبة المالية العملية — accounting
  "YT-RGYM", // محاسبة تكاليف — accounting
  "YT-P87G", // التحليل المالي — accounting
  "YT-NJJZ", // محاسبة الضرائب في مصر — accounting/tax (new)
  "YT-9QVX", // شرح قانون القيمة المضافة — tax (new)
  "YT-ZGV2", // القيمة المضافة عمليًا — tax (new)
  "YT-6397", // CIA — internal audit
  "YT-5TZ7", // CIA Part 1 — internal audit (new)
  "YT-RP42", // CISA — IT audit (new)
]

async function main() {
  const courses = await db.course.findMany({ select: { id: true, code: true, sourcePlatform: true } })
  const byCode = new Map(courses.map((c) => [c.code, c]))

  // 1) ordering: in-house keep 1..8 (already set); Arabic Academy 10+
  let next = 10
  for (const code of AR_ORDER) {
    const c = byCode.get(code)
    if (!c) {
      console.log(`  ? ${code} not found — skipped`)
      continue
    }
    await db.course.update({ where: { id: c.id }, data: { order: next++ } })
  }

  // any course not covered (in-house already 1-8; imports not in the list get the tail)
  const covered = new Set(AR_ORDER)
  for (const c of courses) {
    if (c.sourcePlatform === "youtube" && !covered.has(c.code)) {
      await db.course.update({ where: { id: c.id }, data: { order: next++ } })
      console.log(`  + ${c.code} appended at ${next - 1}`)
    }
  }

  // 2) un-feature all YouTube imports; keep in-house featured flags untouched
  const res = await db.course.updateMany({
    where: { sourcePlatform: "youtube" },
    data: { featured: false },
  })
  console.log(`\n✅ Ordering set (${next - 10} Arabic Academy courses, 10..${next - 1})`)
  console.log(`✅ Un-featured ${res.count} YouTube imports (in-house featured picks keep their stars)`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
