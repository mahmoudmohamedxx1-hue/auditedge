/** v38 — verify the Arabic Academy course family: ordering + cover fields.
 *  Run: bun scripts/verify-ar-courses.ts */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const courses = await db.course.findMany({
    where: { category: "Arabic Academy" },
    select: { slug: true, title: true, order: true, icon: true, accent: true, published: true, featured: true },
    orderBy: { order: "asc" },
  })
  console.log(`Arabic Academy courses: ${courses.length}`)
  for (const c of courses) {
    console.log(
      `  #${String(c.order).padStart(2)} ${c.slug} · icon=${c.icon || "MISSING"} · accent=${c.accent || "MISSING"} · pub=${c.published}`
    )
  }
  const orders = courses.map((c) => c.order)
  const dupes = orders.filter((o, i) => orders.indexOf(o) !== i)
  const missingCovers = courses.filter((c) => !c.icon || !c.accent)
  console.log(`distinct order values: ${new Set(orders).size}/${orders.length}`)
  console.log(`duplicate orders: ${dupes.length ? dupes.join(",") : "none"}`)
  console.log(`courses missing icon/accent cover: ${missingCovers.length}`)
  process.exit(dupes.length || missingCovers.length ? 1 : 0)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
}).finally(() => db.$disconnect())
