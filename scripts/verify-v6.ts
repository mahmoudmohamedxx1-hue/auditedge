/** v6 verification: Arabic Academy courses + ingested standards materials. */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const courses = await db.course.findMany({
    orderBy: { order: "asc" },
    include: { modules: { include: { lessons: true } } },
  })
  console.log(`COURSES (${courses.length}):`)
  for (const c of courses) {
    const lessons = c.modules.flatMap((m) => m.lessons)
    const videos = lessons.filter((l) => l.videoUrl).length
    const src = c.sourcePlatform || "in-house"
    console.log(
      `  [${src.padEnd(8)}] ${c.code.padEnd(8)} ${c.category.padEnd(22)} ${String(c.modules.length).padStart(2)}m ${String(lessons.length).padStart(3)}L ${videos ? String(videos).padStart(3) + "V" : "   "} ${c.title.slice(0, 55)}`
    )
  }

  const materials = await db.material.findMany({ orderBy: { fileName: "asc" } })
  const ingested = materials.filter((m) => !m.hasFile)
  console.log(`\nMATERIALS: ${materials.length} total, ${ingested.length} ingested standards texts`)
  for (const m of ingested.slice(0, 6)) console.log(`  · ${m.title.slice(0, 80)} (${Math.round((m.textContent?.length ?? 0) / 1000)}KB)`)
  console.log(`  … and ${Math.max(0, ingested.length - 6)} more`)

  const arabic = courses.filter((c) => c.category === "Arabic Academy")
  console.log(`\nARABIC ACADEMY: ${arabic.length} courses, ${arabic.reduce((n, c) => n + c.modules.flatMap((m) => m.lessons).length, 0)} video lessons total`)
  await db.$disconnect()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
