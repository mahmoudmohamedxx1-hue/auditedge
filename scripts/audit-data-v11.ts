/** v11 forensic data audit — dump anything that looks fake/stale/contradictory. */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

function fmt(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

async function main() {
  console.log("=== USERS ===")
  const users = await db.user.findMany({ select: { id: true, name: true, role: true, xp: true, streakDays: true, jobTitle: true, isDemo: true } })
  for (const u of users) console.log(JSON.stringify(u))
  console.log(`count: ${users.length}`)

  console.log("\n=== COURSES with rating/students/instructor set (potential fake) ===")
  const courses = await db.course.findMany({
    select: { id: true, code: true, title: true, category: true, rating: true, ratingCount: true, studentsCount: true, instructorTitle: true, sourcePlatform: true, published: true, cpeHours: true },
    orderBy: { code: "asc" },
  })
  for (const c of courses) {
    const flag =
      (c.rating > 0 ? "RATING " : "") +
      (c.studentsCount > 0 ? "STUDENTS " : "") +
      (c.instructorTitle && c.instructorTitle.length > 0 ? `INSTR(${c.instructorTitle}) ` : "")
    console.log(`${flag ? "⚠️  " : "   "}${c.code} ${c.title.slice(0, 48).padEnd(50)} cat=${c.category} rating=${c.rating} rc=${c.ratingCount} students=${c.studentsCount} cpe=${c.cpeHours} src=${c.sourcePlatform ?? "in-house"} pub=${c.published} ${flag}`)
  }
  console.log(`total courses: ${courses.length}`)

  console.log("\n=== LESSON sanity ===")
  const lessons = await db.lesson.count()
  const extLessons = await db.lesson.count({ where: { NOT: { externalUrl: "" } } })
  const noTitle = await db.lesson.count({ where: { title: "" } })
  console.log(`total lessons: ${fmt(lessons)} · external: ${extLessons} · empty-title: ${noTitle}`)

  console.log("\n=== PROGRESS / ACTIVITY (should be 0 after reset) ===")
  console.log(`enrollments: ${await db.enrollment.count()}`)
  console.log(`lessonProgress: ${await db.lessonProgress.count()}`)
  console.log(`quizAttempts: ${await db.quizAttempt.count()}`)
  console.log(`certificates: ${await db.certificate.count()}`)
  console.log(`aiConversations: ${await db.aiConversation.count()}`)
  console.log(`sessions (should be 0): ${await db.session.count()}`)

  console.log("\n=== MATERIALS ===")
  const mats = await db.material.groupBy({ by: ["category"], _count: { _all: true } })
  for (const m of mats) console.log(`${m.category}: ${m._count._all}`)
  const noSource = await db.material.count({ where: { sourceUrl: "" } })
  console.log(`materials without sourceUrl: ${noSource}`)

  console.log("\n=== QUIZ integrity: passScore range + question counts ===")
  const badPass = await db.quiz.findMany({ where: { OR: [{ passScore: { lt: 0 } }, { passScore: { gt: 100 } }] }, select: { id: true, passScore: true } })
  console.log(`quizzes with out-of-range passScore: ${badPass.length}`)

  console.log("\n=== MODULE ordering: duplicate lesson order values within a module ===")
  const dupes: { moduleId: string; n: number }[] = await (db as never as { $queryRawUnsafe: (q: string) => Promise<{ moduleId: string; n: number }[]> }).$queryRawUnsafe(
    'SELECT moduleId, COUNT(*) as n FROM (SELECT moduleId FROM Lesson GROUP BY moduleId, "order") GROUP BY moduleId HAVING COUNT(*) > 1'
  )
  console.log(`modules with duplicate lesson order: ${dupes.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => db.$disconnect())
