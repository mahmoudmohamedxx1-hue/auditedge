import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const CORE8 = ["ISA-315", "ISA-330", "IFRS-CORE", "EGY-REG", "ISA-570", "EVD-500", "ISA-240", "AUD-ANL"]
  // P1-8 letter: in-house lesson bodies 1500+ chars
  const lessons = await db.lesson.findMany({
    where: { module: { course: { code: { in: CORE8 } } }, type: "lesson" },
  })
  const lens = lessons.map((l) => {
    const c = JSON.parse(l.content) as { sections: { body?: string }[] }
    return { title: l.title, len: (c.sections ?? []).reduce((a, s) => a + (s.body || "").length, 0) }
  })
  const under1500 = lens.filter((x) => x.len < 1500)
  console.log(`P1-8 audit: ${under1500.length}/${lessons.length} in-house lessons under 1500 chars`)
  under1500.sort((a, b) => a.len - b.len).forEach((x) => console.log(`  ${x.len}\t${x.title}`))

  // spine quiz AR (P1-6 stretch)
  const spineCodes = ["ISA-700C", "ISA-505C", "ISA-520C", "ISA-550C", "ISA-560C", "ISA-580C", "ISA-600C", "ISQM-01C", "ETH-CODE"]
  const spineQuizzes = await db.quiz.findMany({ where: { courseId: { in: (await db.course.findMany({ where: { code: { in: spineCodes } }, select: { id: true } })).map((c) => c.id) } } })
  const spineQ = spineQuizzes.reduce((a, z) => a + JSON.parse(z.questions).length, 0)
  console.log(`Spine quiz questions (EN-only): ${spineQ}`)

  // bank AR coverage
  const [total, ar] = await Promise.all([db.bankQuestion.count(), db.bankQuestion.count({ where: { stemAr: { not: null } } })])
  console.log(`Bank AR: ${ar}/${total}`)
}
main().then(() => db.$disconnect())
