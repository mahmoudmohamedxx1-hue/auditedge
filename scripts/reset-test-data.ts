/** Reset the audit-run test data so the workspace is handed over pristine. */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const me = await db.user.findFirst({ orderBy: { createdAt: "asc" } })
  if (!me) throw new Error("workspace user missing")

  const enr = await db.enrollment.deleteMany({ where: { userId: me.id } })
  const prog = await db.lessonProgress.deleteMany({ where: { userId: me.id } })
  const qa = await db.quizAttempt.deleteMany({ where: { userId: me.id } })
  const certs = await db.certificate.deleteMany({ where: { userId: me.id } })
  const convs = await db.aiConversation.deleteMany({ where: { userId: me.id } })
  await db.user.update({ where: { id: me.id }, data: { xp: 0, streakDays: 0, lastActiveAt: new Date() } })

  console.log(`✔ reset ${me.name}: enrollments=${enr.count} progress=${prog.count} quizAttempts=${qa.count} certs=${certs.count} aiConversations=${convs.count}`)
  console.log("✔ XP and streak reset to 0")

  const [users, courses, lessons, materials] = await Promise.all([
    db.user.count(),
    db.course.count(),
    db.lesson.count(),
    db.material.count(),
  ])
  console.log({ users, courses, lessons, materials })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
