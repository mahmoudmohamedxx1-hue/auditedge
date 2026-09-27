import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const spineCodes = ["ISA-700C", "ISA-505C", "ISA-520C", "ISA-550C", "ISA-560C", "ISA-580C", "ISA-600C", "ISQM-01C", "ETH-CODE"]
  const ids = (await db.course.findMany({ where: { code: { in: spineCodes } }, select: { id: true } })).map((c) => c.id)
  const quizzes = await db.quiz.findMany({ where: { courseId: { in: ids } } })
  let withAr = 0
  let total = 0
  for (const q of quizzes) {
    const qs = JSON.parse(q.questions) as { questionAr?: string }[]
    total += qs.length
    withAr += qs.filter((x) => x.questionAr).length
  }
  console.log(`spine quiz AR: ${withAr}/${total}`)

  // in-house quiz AR (48)
  const CORE8 = ["ISA-315", "ISA-330", "IFRS-CORE", "EGY-REG", "ISA-570", "EVD-500", "ISA-240", "AUD-ANL"]
  const coreIds = (await db.course.findMany({ where: { code: { in: CORE8 } }, select: { id: true } })).map((c) => c.id)
  const coreQuizzes = await db.quiz.findMany({ where: { courseId: { in: coreIds } } })
  let coreAr = 0
  let coreTotal = 0
  for (const q of coreQuizzes) {
    const qs = JSON.parse(q.questions) as { questionAr?: string }[]
    coreTotal += qs.length
    coreAr += qs.filter((x) => x.questionAr).length
  }
  console.log(`core-8 quiz AR: ${coreAr}/${coreTotal}`)
}
main().then(() => db.$disconnect())
