import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const courses = await db.course.findMany({ where: { sourcePlatform: "" }, include: { modules: { include: { lessons: { include: { quiz: true } } } } } })
  let total = 0, thinList: {code:string,title:string,body:number}[] = []
  for (const c of courses) for (const m of c.modules) for (const l of m.lessons) {
    if (l.type !== "lesson") continue
    const content = JSON.parse(l.content) as any
    const bodyLen = (content.sections || []).reduce((a:number, s:any) => a + (s.body || "").length, 0)
    total++
    if (bodyLen < 1200) thinList.push({ code: c.code, title: l.title, body: bodyLen })
  }
  console.log("in-house lessons:", total, "| under 1200 body chars:", thinList.length)
  thinList.sort((a,b)=>a.body-b.body).forEach(t => console.log(`${t.body}\t${t.code}\t${t.title}`))
  const inHouseIds = courses.map((c) => c.id)
  const quizzes = await db.quiz.findMany({ where: { courseId: { in: inHouseIds } } })
  const totalQ = quizzes.reduce((a, z) => a + JSON.parse(z.questions).length, 0)
  console.log("in-house quizzes:", quizzes.length, "questions:", totalQ)
}
main().then(() => db.$disconnect())
