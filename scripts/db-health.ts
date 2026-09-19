import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const [users, courses, modules, lessons, quizzes, convos, msgs, materials, sessions, certs] =
    await Promise.all([
      db.user.count(),
      db.course.count(),
      db.module.count(),
      db.lesson.count(),
      db.quiz.count(),
      db.aiConversation.count(),
      db.aiMessage.count(),
      db.material.count(),
      db.session.count(),
      db.certificate.count(),
    ])
  console.log("DB HEALTH CHECK")
  console.log(`  users=${users} courses=${courses} modules=${modules} lessons=${lessons} quizzes=${quizzes}`)
  console.log(`  aiConversations=${convos} aiMessages=${msgs} materials=${materials} sessions=${sessions} certificates=${certs}`)

  // integrity: lessons referencing dead modules, quiz lessons, orphan attachments
  const lessonsAll = await db.lesson.findMany({ select: { id: true, attachments: true, moduleId: true } })
  const materialsAll = await db.material.findMany({ select: { id: true, fileName: true } })
  const matIds = new Set(materialsAll.map((m) => m.id))
  let orphanAttachments = 0
  for (const l of lessonsAll) {
    try {
      const arr = JSON.parse(l.attachments) as string[]
      for (const a of arr) if (!matIds.has(a)) orphanAttachments++
    } catch {
      /* ignore */
    }
  }
  console.log(`  orphanAttachmentRefs=${orphanAttachments}`)

  // users without passwords (can't sign in)
  const noPw = await db.user.count({ where: { passwordHash: null } })
  console.log(`  usersWithoutPassword=${noPw} (cannot sign in until admin sets one)`)

  // expired sessions lingering
  const expired = await db.session.count({ where: { expiresAt: { lt: new Date() } } })
  console.log(`  expiredSessionsStillInDb=${expired}`)

  // quiz lessons without quiz row
  const quizTypeLessons = await db.lesson.count({ where: { type: "quiz" } })
  const quizRows = await db.quiz.count()
  console.log(`  lessonsOfTypeQuiz=${quizTypeLessons} quizRows=${quizRows}`)

  // AI conversations with empty assistant replies
  const emptyAssistant = await db.aiMessage.count({ where: { role: "assistant", content: "" } })
  console.log(`  emptyAssistantMessages=${emptyAssistant}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
