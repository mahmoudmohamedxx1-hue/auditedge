/** Final polish: rename the auto-named quiz lesson built during E2E testing. */
import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

async function main() {
  const lesson = await db.lesson.findFirst({ where: { title: "Knowledge check 2" } })
  if (lesson) {
    await db.lesson.update({
      where: { id: lesson.id },
      data: { title: "Working Papers Knowledge Check" },
    })
    await db.quiz.updateMany({
      where: { lessonId: lesson.id },
      data: { title: "Working Papers Knowledge Check" },
    })
    console.log("quiz lesson renamed")
  } else {
    console.log("no match — skipping")
  }
}

main().finally(() => db.$disconnect())
