/**
 * Backfill REAL video durations for the already-imported YouTube courses.
 * The original import assumed 15 min/video (fabricated); YouTube publishes the
 * real duration badge for every video on the playlist page. This script:
 *   1. fetches each imported course's playlist (keyless),
 *   2. updates every lesson's durationMin from the real badge,
 *   3. recomputes the course's cpeHours from the real total watch time.
 * Idempotent. Run: bun scripts/backfill-durations.ts
 */
import { PrismaClient } from "@prisma/client"
import { fetchPlaylist } from "../src/lib/youtube"

const db = new PrismaClient()

async function main() {
  const courses = await db.course.findMany({
    where: { sourcePlatform: "youtube", sourceUrl: { not: "" } },
    include: { modules: { include: { lessons: true } } },
  })
  console.log(`Backfilling real durations for ${courses.length} YouTube courses…\n`)

  for (const course of courses) {
    const listId = course.sourceUrl.split("list=")[1]
    if (!listId) continue
    process.stdout.write(`  • ${course.title.slice(0, 55)}… `)
    const info = await fetchPlaylist(listId)
    if (!info) {
      console.log("✗ could not fetch playlist (skipped)")
      continue
    }
    const durationById = new Map<string, number>()
    for (const v of info.videos) {
      if (v.durationMin) durationById.set(v.id, v.durationMin)
    }

    let updated = 0
    let totalMinutes = 0
    const lessons = course.modules.flatMap((m) => m.lessons)
    for (const lesson of lessons) {
      const vid = lesson.videoUrl?.match(/[?&]v=([A-Za-z0-9_-]{11})/)?.[1]
      const dur = vid ? durationById.get(vid) : undefined
      if (dur && dur !== lesson.durationMin) {
        await db.lesson.update({ where: { id: lesson.id }, data: { durationMin: dur } })
        updated++
      }
    }
    // recompute the true total from DB state (all lessons, not just updated ones)
    const refreshed = await db.lesson.findMany({
      where: { module: { courseId: course.id } },
      select: { durationMin: true },
    })
    totalMinutes = refreshed.reduce((s, l) => s + l.durationMin, 0)
    const cpe = Math.max(1, Math.round(totalMinutes / 6) / 10)
    if (cpe !== course.cpeHours) {
      await db.course.update({ where: { id: course.id }, data: { cpeHours: cpe } })
    }
    console.log(
      `✓ ${durationById.size}/${info.videos.length} durations known · ${updated} lessons updated · ${totalMinutes} min → ${cpe} CPE h`
    )
  }

  console.log("\n✅ Done.")
}

main().catch((e) => {
  console.error("FAILED:", e)
  process.exit(1)
})
