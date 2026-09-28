/** Verify ACCA paper coverage + custom exam sizes in the local DB. */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const bySource = await db.bankQuestion.groupBy({
    by: ["source"],
    _count: { _all: true },
    where: { source: { contains: "past paper" } },
    orderBy: { source: "asc" },
  })
  console.log("── Past-paper sources in bank ──")
  for (const s of bySource) console.log(`  ${String(s._count._all).padStart(3)} · ${s.source}`)
  console.log(`  total past-paper questions: ${bySource.reduce((a, b) => a + b._count._all, 0)}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
