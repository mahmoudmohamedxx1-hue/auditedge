import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const courses = await db.course.findMany({ where: { sourcePlatform: "" }, include: { modules: { include: { lessons: { include: { quiz: true } } } } } })
  for (const c of courses) {
    const quizzes = c.modules.flatMap((m) => m.lessons).filter((l) => l.quiz).map((l) => l.quiz!)
    console.log(`\n## ${c.code}`)
    for (const q of quizzes) {
      const qs = JSON.parse(q.questions) as any[]
      console.log(`-- ${q.title} (${qs.length}q)`)
      qs.forEach((x, i) => console.log(`${i}| ${x.question}`))
    }
  }
}
main().then(() => db.$disconnect())
