/**
 * Build the Vercel demo snapshot: prisma/auditedge-demo.db.gz
 *
 * The production database (db/custom.db) is gitignored on purpose — it holds
 * the workspace owner's personal runtime data (chat history with the AI
 * tutor, lesson progress, quiz attempts, certificates). Vercel's serverless
 * filesystem is read-only and ephemeral, so the deployed app cannot use a
 * database from the repo checkout either way.
 *
 * This script produces a SANITIZED copy containing content only:
 *   • keeps   : courses, modules, lessons, quizzes, materials
 *              (+ exactly ONE workspace user row, so the sessionless
 *               single-user auth resolves instantly on first request)
 *   • wipes   : AI conversations & messages, sessions, enrollments,
 *              lesson progress, quiz attempts, certificates, extra users
 *   • never touches db/custom.db — it works on a temp copy
 *   • VACUUMs the copy and gzips it into prisma/auditedge-demo.db.gz
 *
 * At runtime on Vercel, src/lib/db.ts gunzips this snapshot into /tmp
 * (the only writable, per-instance directory) and points Prisma at it.
 * Run after content changes: bun scripts/make-vercel-snapshot.ts
 */
import { PrismaClient } from "@prisma/client"
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "fs"
import { gzipSync } from "zlib"
import { join } from "path"

const ROOT = process.cwd()
const SOURCE = join(ROOT, "db", "custom.db")
const OUT_DIR = join(ROOT, "prisma")
const OUT_FILE = join(OUT_DIR, "auditedge-demo.db.gz")

// mirrors src/lib/auth.ts WORKSPACE_USER — the single real member
const WORKSPACE_EMAIL = "mahmoud.elsayed@auditedge.eg"

async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`✗ source database not found: ${SOURCE}`)
    process.exit(1)
  }

  // work on a throwaway copy — the live database is never modified
  const tmp = join(OUT_DIR, ".snapshot-tmp.db")
  copyFileSync(SOURCE, tmp)

  const db = new PrismaClient({
    datasources: { db: { url: `file:${tmp}` } },
  })

  const before = {
    users: await db.user.count(),
    conversations: await db.aiConversation.count(),
    messages: await db.aiMessage.count(),
    sessions: await db.session.count(),
    enrollments: await db.enrollment.count(),
    progress: await db.lessonProgress.count(),
    attempts: await db.quizAttempt.count(),
    certificates: await db.certificate.count(),
    courses: await db.course.count(),
    lessons: await db.lesson.count(),
    materials: await db.material.count(),
    bankAttempts: await db.bankAttempt.count(),
    examSessions: await db.examSession.count(),
    reviewItems: await db.reviewItem.count(),
    simRuns: await db.simRun.count(),
    lessonNotes: await db.lessonNote.count(),
    studyPlans: await db.studyPlan.count(),
  }

  // --- wipe every table that holds personal / runtime data ----------------
  // order matters only for readability — FKs cascade from user downwards,
  // but we delete explicitly so a schema tweak can't silently keep data
  await db.aiMessage.deleteMany()
  await db.aiConversation.deleteMany()
  await db.session.deleteMany()
  await db.certificate.deleteMany()
  await db.quizAttempt.deleteMany()
  await db.lessonProgress.deleteMany()
  await db.enrollment.deleteMany()
  // v20 personal-data tables (P0/P1 features) — progress must not ship
  await db.bankAttempt.deleteMany()
  await db.examSession.deleteMany()
  await db.reviewItem.deleteMany()
  await db.simRun.deleteMany()
  await db.lessonNote.deleteMany()
  await db.studyPlan.deleteMany()
  // keep exactly the canonical workspace user (single-user app identity)
  await db.user.deleteMany({ where: { email: { not: WORKSPACE_EMAIL } } })

  // --- content tables are kept as-is ---------------------------------------
  const after = {
    users: await db.user.count(),
    conversations: await db.aiConversation.count(),
    messages: await db.aiMessage.count(),
    courses: await db.course.count(),
    lessons: await db.lesson.count(),
    materials: await db.material.count(),
    modules: await db.module.count(),
    quizzes: await db.quiz.count(),
    bankQuestions: await db.bankQuestion.count(),
  }

  // reclaim free pages so the snapshot stays small
  await db.$executeRawUnsafe("VACUUM")
  await db.$disconnect()

  const gz = gzipSync(readFileSync(tmp))
  mkdirSync(OUT_DIR, { recursive: true })
  rmSync(tmp, { force: true })
  writeFileSync(OUT_FILE, gz)

  console.log("── sanitized snapshot ─────────────────────────")
  console.log(`users            ${before.users} → ${after.users}`)
  console.log(`conversations    ${before.conversations} → ${after.conversations}`)
  console.log(`messages         ${before.messages} → ${after.messages}`)
  console.log(`sessions         ${before.sessions} → 0`)
  console.log(`enrollments      ${before.enrollments} → 0`)
  console.log(`lesson progress  ${before.progress} → 0`)
  console.log(`quiz attempts    ${before.attempts} → 0`)
  console.log(`certificates     ${before.certificates} → 0`)
  console.log(`bank attempts    ${before.bankAttempts} → 0`)
  console.log(`exam sessions    ${before.examSessions} → 0`)
  console.log(`review items     ${before.reviewItems} → 0`)
  console.log(`sim runs         ${before.simRuns} → 0`)
  console.log(`lesson notes     ${before.lessonNotes} → 0`)
  console.log(`study plans      ${before.studyPlans} → 0`)
  console.log("── content kept ───────────────────────────────")
  console.log(`courses ${after.courses} · modules ${after.modules} · lessons ${after.lessons} · quizzes ${after.quizzes} · materials ${after.materials} · bank ${after.bankQuestions}q`)
  console.log("───────────────────────────────────────────────")
  console.log(
    `✓ ${OUT_FILE} — raw ${(statSync(SOURCE).size / 1024 / 1024).toFixed(1)} MB → gz ${(gz.length / 1024 / 1024).toFixed(1)} MB`
  )

  if (after.courses === 0 || after.lessons === 0) {
    console.error("✗ sanity check failed — refusing to ship an empty snapshot")
    rmSync(OUT_FILE, { force: true })
    process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
