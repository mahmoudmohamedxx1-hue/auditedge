import { PrismaClient } from "@prisma/client"
import { writeFileSync } from "fs"
const db = new PrismaClient()
async function main() {
  const courses = await db.course.findMany({ where: { sourcePlatform: "" }, include: { modules: { include: { lessons: { include: { quiz: true } } } } } })
  const out: Record<string, any[][]> = {}
  for (const c of courses) {
    const quizzes = c.modules.flatMap((m) => m.lessons).filter((l) => l.quiz).map((l) => l.quiz!)
    out[c.code] = quizzes.flatMap((q) => JSON.parse(q.questions))
  }
  writeFileSync("/tmp/quiz-questions.json", JSON.stringify(out, null, 1))
}
main().then(() => db.$disconnect())
