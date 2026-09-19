import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  console.log("=== USERS ===")
  const users = await db.user.findMany({ orderBy: { createdAt: "asc" } })
  for (const u of users) {
    console.log(
      `${u.id} | ${u.name} | ${u.email} | role=${u.role} | jobTitle=${u.jobTitle} | isDemo=${u.isDemo} | xp=${u.xp} | streak=${u.streakDays} | initials=${u.initials}`
    )
  }
  console.log(`\nTotal users: ${users.length}`)

  console.log("\n=== SESSIONS ===")
  const sessions = await db.session.findMany()
  console.log(`Active sessions: ${sessions.length}`)
  for (const s of sessions) {
    console.log(`  user=${s.userId} expires=${s.expiresAt.toISOString()}`)
  }

  console.log("\n=== COURSES ===")
  const courses = await db.course.findMany({ orderBy: { order: "asc" } })
  for (const c of courses) {
    const mods = await db.module.count({ where: { courseId: c.id } })
    console.log(
      `${c.code} | ${c.title.slice(0, 60)} | cat=${c.category} | pub=${c.published} | src=${c.sourcePlatform ?? "-"} | modules=${mods}`
    )
  }
  console.log(`Total courses: ${courses.length}`)

  console.log("\n=== COUNTS ===")
  const [lessons, quizzes, materials, enrollments, progress, certs, quizAttempts, aiConvos, aiMsgs] =
    await Promise.all([
      db.lesson.count(),
      db.quiz.count(),
      db.material.count(),
      db.enrollment.count(),
      db.lessonProgress.count(),
      db.certificate.count(),
      db.quizAttempt.count(),
      db.aiConversation.count(),
      db.aiMessage.count(),
    ])
  console.log({ lessons, quizzes, materials, enrollments, progress, certs, quizAttempts, aiConvos, aiMsgs })

  console.log("\n=== ENROLLMENTS/PROGRESS PER USER ===")
  for (const u of users) {
    const [enr, prog, cert, qa, conv] = await Promise.all([
      db.enrollment.count({ where: { userId: u.id } }),
      db.lessonProgress.count({ where: { userId: u.id } }),
      db.certificate.count({ where: { userId: u.id } }),
      db.quizAttempt.count({ where: { userId: u.id } }),
      db.aiConversation.count({ where: { userId: u.id } }),
    ])
    console.log(`${u.name}: enroll=${enr} progress=${prog} certs=${cert} quizAttempts=${qa} aiConvos=${conv}`)
  }

  console.log("\n=== MATERIALS ===")
  const mats = await db.material.findMany()
  for (const m of mats) {
    console.log(
      `${m.id.slice(0, 8)} | ${m.title.slice(0, 55)} | cat=${m.category} | file=${m.fileName ? "Y" : "N"} | src=${m.sourceUrl ? m.sourceUrl.slice(0, 40) : "-"} | textLen=${m.textContent?.length ?? 0}`
    )
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
