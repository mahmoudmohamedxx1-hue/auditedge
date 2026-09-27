import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const courses = await db.course.findMany({ orderBy: { order: "asc" }, include: { modules: { include: { lessons: true } } } })
  for (const c of courses) {
    const lessons = c.modules.flatMap((m) => m.lessons)
    const quizzes = lessons.filter((l) => l.type === "quiz")
    const thin = lessons.filter((l) => l.type === "lesson" && JSON.stringify(l.content).length < 600)
    if (!c.sourcePlatform) {
      console.log(`IN-HOUSE | ${c.code} | ${c.title} | lessons=${lessons.length} quizzes=${quizzes.length} thin=${thin.length}`)
    }
  }
  const inHouse = courses.filter((c) => !c.sourcePlatform)
  const allLessons = inHouse.flatMap((c) => c.modules.flatMap((m) => m.lessons))
  console.log("---")
  console.log("in-house courses:", inHouse.length, "| lessons total:", allLessons.length)
  const qcounts = await Promise.all(inHouse.map(async (c) => {
    const quizzes = await db.quiz.findMany({ where: { courseId: c.id } })
    const q = quizzes.reduce((a, z) => a + JSON.parse(z.questions).length, 0)
    return `${c.code}: ${quizzes.length} quizzes / ${q} questions`
  }))
  console.log(qcounts.join("\n"))
  console.log("---near-empty lessons (any course)---")
  for (const c of courses) for (const m of c.modules) for (const l of m.lessons) {
    if (l.type === "lesson" && JSON.stringify(l.content).length < 600) console.log(`${c.code} [${c.sourcePlatform || "in-house"}] :: ${l.title} :: len=${JSON.stringify(l.content).length}`)
  }
}
main().then(() => db.$disconnect())
