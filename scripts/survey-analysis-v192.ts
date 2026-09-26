/** Survey the live DB for the v19.2 deep analysis (Task 36). */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const byType = await db.lesson.groupBy({ by: ["type"], _count: { _all: true } })
  console.log("LESSON_TYPES", JSON.stringify(byType))

  const byCat = await db.course.groupBy({ by: ["category"], _count: { _all: true } })
  console.log("COURSE_CATS", JSON.stringify(byCat))

  const byLevel = await db.course.groupBy({ by: ["level"], _count: { _all: true } })
  console.log("COURSE_LEVELS", JSON.stringify(byLevel))

  const bySource = await db.course.groupBy({ by: ["sourcePlatform"], _count: { _all: true } })
  console.log("COURSE_SOURCES", JSON.stringify(bySource))

  const titles = await db.course.findMany({
    select: { code: true, title: true, category: true, level: true, cpeHours: true },
    orderBy: { code: "asc" },
  })
  console.log("TITLES", JSON.stringify(titles))

  // lessons with video / external links (imported content vs in-house)
  const [withVideo, withExternal, totalLessons] = await Promise.all([
    db.lesson.count({ where: { videoUrl: { not: "" } } }),
    db.lesson.count({ where: { externalUrl: { not: "" } } }),
    db.lesson.count(),
  ])
  console.log("MEDIA", JSON.stringify({ withVideo, withExternal, totalLessons }))

  // content depth: average content blob size
  const sizes = await db.lesson.findMany({ select: { content: true } })
  const avgLen = Math.round(sizes.reduce((a, l) => a + l.content.length, 0) / (sizes.length || 1))
  const empty = sizes.filter((l) => l.content.length < 200).length
  console.log("CONTENT_DEPTH", JSON.stringify({ avgLen, nearEmpty: empty, total: sizes.length }))

  // quiz + attempts
  const quizzes = await db.quiz.findMany({ select: { title: true, questions: true } })
  const qCounts = quizzes.map((q) => {
    try {
      return Array.isArray(JSON.parse(q.questions)) ? JSON.parse(q.questions).length : 0
    } catch {
      return -1
    }
  })
  console.log("QUIZZES", JSON.stringify({ n: quizzes.length, questionCounts: qCounts }))

  const [attempts, progress, certs, convos, msgs] = await Promise.all([
    db.quizAttempt.count(),
    db.lessonProgress.count(),
    db.certificate.count(),
    db.aiConversation.count(),
    db.aiMessage.count(),
  ])
  console.log("USAGE", JSON.stringify({ attempts, progress, certs, convos, msgs }))

  // materials (library)
  const mats = await db.material.groupBy({ by: ["category"], _count: { _all: true } })
  console.log("MATERIALS", JSON.stringify(mats))

  // which courses have quizzes
  const quizCourses = await db.quiz.findMany({ select: { courseId: true } })
  const courses = await db.course.findMany({ select: { id: true, code: true, sourcePlatform: true } })
  const qSet = new Set(quizCourses.map((q) => q.courseId))
  console.log("WITH_QUIZ", courses.filter((c) => qSet.has(c.id)).map((c) => c.code).join(","))
  console.log("NO_QUIZ", courses.filter((c) => !qSet.has(c.id)).map((c) => c.code).join(","))

  // in-house course content language
  for (const c of courses.filter((c) => c.sourcePlatform === "")) {
    const lessons = await db.lesson.findMany({
      where: { module: { courseId: c.id } },
      select: { content: true },
      take: 2,
    })
    const arabic = lessons.some((l) => /[\u0600-\u06FF]/.test(l.content))
    console.log("INHOUSE_LANG", c.code, arabic ? "AR" : "EN")
  }
}

main()
  .catch((e) => {
    console.error("FAIL", e instanceof Error ? e.message.split("\n")[0] : e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
