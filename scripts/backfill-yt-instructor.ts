/** Backfill: replace the generic "YouTube instructor" placeholder with the
 *  honest "YouTube channel" label on all imported playlist courses. */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const result = await db.course.updateMany({
    where: { instructorTitle: "YouTube instructor" },
    data: { instructorTitle: "YouTube channel" },
  })
  console.log(`updated ${result.count} courses`)
  const remaining = await db.course.count({ where: { instructorTitle: "YouTube instructor" } })
  console.log(`remaining placeholders: ${remaining}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => db.$disconnect())
