import { PrismaClient } from "@prisma/client"
import { CHECKPOINT_QUIZ_AR } from "./checkpoint-ar"

const db = new PrismaClient()
async function main() {
  let applied = 0
  for (const [code, arList] of Object.entries(CHECKPOINT_QUIZ_AR)) {
    const course = await db.course.findFirst({ where: { code } })
    if (!course) continue
    const quiz = await db.quiz.findFirst({
      where: { courseId: course.id, title: { contains: "Mid-course Checkpoint" } },
    })
    if (!quiz) continue
    const qs = JSON.parse(quiz.questions) as Record<string, unknown>[]
    let changed = false
    qs.forEach((q, i) => {
      const ar = arList[i]
      if (!ar || q.questionAr) return
      q.questionAr = ar.questionAr
      q.optionsAr = ar.optionsAr
      q.explanationAr = ar.explanationAr
      changed = true
    })
    if (changed) {
      await db.quiz.update({ where: { id: quiz.id }, data: { questions: JSON.stringify(qs) } })
      applied++
    }
  }
  console.log(`[checkpoint-ar] applied to ${applied}/8 checkpoint quizzes`)
}
main().then(() => db.$disconnect())
