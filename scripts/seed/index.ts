/**
 * ⚠️ DESTRUCTIVE — wipes and re-seeds the 8 in-house courses.
 *
 * v8 cleanup: this seed now matches the REAL production data model —
 *   • exactly ONE workspace user (Mahmoud El-Sayed, admin) — no fake leaderboard
 *     colleagues, no fabricated XP/streaks
 *   • no fake instructor personas, ratings or student counts on courses
 *     (in-house courses are taught under the office's own training program)
 *
 * Refuses to run unless given the explicit wipe confirmation argument.
 * Run: bun scripts/seed/index.ts I-UNDERSTAND-THIS-WIPES-THE-DB
 */
import { PrismaClient } from "@prisma/client"
import { isa315 } from "./isa315"
import { isa330 } from "./isa330"
import { isa570 } from "./isa570"
import { egyReg } from "./egypt-reg"
import { evd500 } from "./evd500"
import { isa240 } from "./isa240"
import { ifrsCore } from "./ifrs-core"
import { audAnl } from "./aud-anl"

const db = new PrismaClient()

const COURSES = [isa315, isa330, isa570, egyReg, evd500, isa240, ifrsCore, audAnl]

// mirrors src/lib/auth.ts WORKSPACE_USER (the single real member of this workspace)
const WORKSPACE_USER = {
  email: "mahmoud.elsayed@auditedge.eg",
  name: "Mahmoud El-Sayed",
  role: "admin",
  jobTitle: "Senior Associate",
  initials: "ME",
}

async function main() {
  if (process.argv[2] !== "I-UNDERSTAND-THIS-WIPES-THE-DB") {
    console.error(
      "This seed DELETES all users, courses, progress and certificates.\n" +
        "To proceed run: bun scripts/seed/index.ts I-UNDERSTAND-THIS-WIPES-THE-DB"
    )
    process.exit(1)
  }

  console.log("🌱 Re-seeding the 8 in-house courses (single-user workspace, zero fake data)...")

  // wipe in dependency-safe order
  await db.certificate.deleteMany()
  await db.quizAttempt.deleteMany()
  await db.lessonProgress.deleteMany()
  await db.enrollment.deleteMany()
  await db.quiz.deleteMany()
  await db.lesson.deleteMany()
  await db.module.deleteMany()
  await db.course.deleteMany()
  await db.user.deleteMany()

  // the one real workspace member
  const mainUser = await db.user.create({ data: { ...WORKSPACE_USER, xp: 0, streakDays: 0 } })
  console.log("  ✓ workspace user:", mainUser.name)

  // courses → modules → lessons (+quiz) — no fake instructors/ratings/students
  let ci = 0
  for (const c of COURSES) {
    ci++
    const course = await db.course.create({
      data: {
        slug: c.slug,
        code: c.code,
        title: c.title,
        subtitle: c.subtitle,
        description: c.description,
        category: c.category,
        level: c.level,
        cpeHours: c.cpeHours,
        instructorName: "",
        instructorTitle: "",
        instructorBio: "",
        rating: 0,
        ratingCount: 0,
        studentsCount: 0,
        icon: c.icon,
        accent: c.accent,
        featured: c.featured,
        order: ci,
      },
    })

    let lessonOrder = 0
    for (const [mi, m] of c.modules.entries()) {
      const courseModule = await db.module.create({
        data: {
          courseId: course.id,
          title: m.title,
          description: m.description,
          order: mi + 1,
        },
      })

      for (const l of m.lessons) {
        lessonOrder += 1
        const lesson = await db.lesson.create({
          data: {
            moduleId: courseModule.id,
            title: l.title,
            type: l.type,
            durationMin: l.durationMin,
            xp: l.xp,
            content: JSON.stringify(l.content),
            order: lessonOrder,
          },
        })

        if (l.type === "quiz" && l.quiz) {
          await db.quiz.create({
            data: {
              lessonId: lesson.id,
              courseId: course.id,
              title: l.quiz.title,
              passScore: l.quiz.passScore,
              questions: JSON.stringify(l.quiz.questions),
            },
          })
        }
      }
    }
    console.log(`  ✓ ${c.code} — ${c.title}`)
  }

  console.log("\n✅ Done. Note: imported YouTube/MOOC courses and library standards are NOT part of this seed —")
  console.log("   re-run scripts/seed/arabic-academy.ts, arabic-academy-v8.ts and ingest-standards*.ts if needed.")
}

main()
  .catch((e) => {
    console.error("FAILED:", e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
