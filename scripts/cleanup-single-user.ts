/**
 * v7 cleanup — remove ALL fake/demo/test data, leave one real user.
 *
 * 1. Purge every session row
 * 2. Delete all 9 users (cascades their enrollments, progress, quiz attempts,
 *    certificates, AI conversations + messages) — 7 fake personas + 2 test users
 * 3. Create the single workspace member: Mahmoud El-Sayed, Senior Associate
 * 4. Delete the two E2E test courses (WP-101, CR-NVSF)
 * 5. In-house seeded courses: strip fake instructor personas, fake ratings,
 *    fake rating counts and fake student counts
 * 6. Imported YouTube courses: keep the REAL channel instructors, zero the
 *    fake 4.8 rating that came from the old schema default
 * 7. Delete the 3 synthetic "AuditEdge Academy" sample PDFs (DB + disk)
 */
import { PrismaClient } from "@prisma/client"
import { existsSync, rmSync } from "fs"
import { join } from "path"

const db = new PrismaClient()
const UPLOAD_DIR = join(process.cwd(), "upload", "materials")

async function main() {
  /* 1 — sessions */
  const sessions = await db.session.deleteMany({})
  console.log(`✔ purged ${sessions.count} session rows`)

  /* 2 — all users (relations cascade) */
  const users = await db.user.findMany({ select: { id: true, name: true } })
  for (const u of users) {
    await db.user.delete({ where: { id: u.id } })
  }
  console.log(`✔ deleted ${users.length} users (${users.map((u) => u.name).join(", ")})`)

  /* 3 — the one real member */
  const mahmoud = await db.user.create({
    data: {
      name: "Mahmoud El-Sayed",
      email: "mahmoud.elsayed@auditedge.eg",
      jobTitle: "Senior Associate",
      role: "admin", // single member → full access to builder, library, discover, team
      initials: "ME",
      xp: 0,
      streakDays: 0,
      isDemo: false,
    },
  })
  console.log(`✔ created single user: ${mahmoud.name} — ${mahmoud.jobTitle} (${mahmoud.role})`)

  /* 4 — E2E test courses */
  for (const code of ["WP-101", "CR-NVSF"]) {
    const c = await db.course.findFirst({ where: { code } })
    if (c) {
      await db.course.delete({ where: { id: c.id } }) // cascades modules → lessons → quizzes
      console.log(`✔ deleted test course ${code} — ${c.title}`)
    }
  }

  /* 5+6 — de-fake the remaining catalog */
  const courses = await db.course.findMany({
    select: { id: true, code: true, sourcePlatform: true, instructorName: true, rating: true },
  })
  for (const c of courses) {
    if (c.sourcePlatform === "") {
      // in-house course: fabricated instructor persona + fabricated stats
      await db.course.update({
        where: { id: c.id },
        data: { instructorName: "", instructorTitle: "", instructorBio: "", rating: 0, ratingCount: 0, studentsCount: 0 },
      })
      console.log(`✔ ${c.code}: removed fake instructor "${c.instructorName}" + rating ${c.rating}`)
    } else if (c.rating > 0) {
      // imported course: real instructor, but rating came from the old 4.8 default
      await db.course.update({
        where: { id: c.id },
        data: { rating: 0, ratingCount: 0, studentsCount: 0 },
      })
      console.log(`✔ ${c.code}: kept real instructor "${c.instructorName}", zeroed fake rating ${c.rating}`)
    }
  }

  /* 7 — synthetic sample PDFs */
  const samples = await db.material.findMany({ where: { fileName: { startsWith: "sample-" } } })
  for (const m of samples) {
    await db.material.delete({ where: { id: m.id } })
    const diskPath = join(UPLOAD_DIR, m.fileName)
    if (existsSync(diskPath)) rmSync(diskPath)
    console.log(`✔ deleted sample material "${m.title}" (${m.fileName})`)
  }

  /* final state */
  const [userCount, courseCount, lessonCount, matCount, enr, prog, certs, qa, conv, msgs, sessCount] =
    await Promise.all([
      db.user.count(),
      db.course.count(),
      db.lesson.count(),
      db.material.count(),
      db.enrollment.count(),
      db.lessonProgress.count(),
      db.certificate.count(),
      db.quizAttempt.count(),
      db.aiConversation.count(),
      db.aiMessage.count(),
      db.session.count(),
    ])
  console.log("\n=== FINAL STATE ===")
  console.log({
    users: userCount,
    courses: courseCount,
    lessons: lessonCount,
    materials: matCount,
    enrollments: enr,
    lessonProgress: prog,
    certificates: certs,
    quizAttempts: qa,
    aiConversations: conv,
    aiMessages: msgs,
    sessions: sessCount,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
