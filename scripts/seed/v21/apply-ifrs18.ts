/**
 * v21 seed — the IFRS 18 course ("IFRS18") + its bank questions.
 * Standalone and idempotent: safe to re-run. The course is created only
 * when its code is absent (the v20/index.ts spine keying); modules,
 * lessons and the quiz are created only when missing, keyed by natural
 * identifiers (course code + titles); bank questions are created only
 * when their code is absent; Arabic variants are backfilled only where
 * missing. Existing lesson/quiz content is never overwritten.
 *
 * Run: bun run scripts/seed/v21/apply-ifrs18.ts
 */
import { PrismaClient } from "@prisma/client"
import { IFRS18_COURSE } from "./ifrs18"
import { IFRS18_BANK, AR_IFRS18 } from "./bank-ifrs18"

const db = new PrismaClient()

const AR_BANK = new Map(AR_IFRS18.map((a) => [a.code, a]))
const QUIZ_TAG = "IFRS 18"

function contentJson(c: unknown): string {
  return JSON.stringify(c)
}

async function seedCourse() {
  let course = await db.course.findFirst({ where: { code: IFRS18_COURSE.code } })
  if (course) {
    console.log(`[course] ${IFRS18_COURSE.code} already present — verifying modules/lessons/quiz`)
  } else {
    course = await db.course.create({
      data: {
        slug: "ifrs18-presentation-disclosure",
        code: IFRS18_COURSE.code,
        title: IFRS18_COURSE.title,
        subtitle: IFRS18_COURSE.subtitle,
        description: IFRS18_COURSE.description,
        category: IFRS18_COURSE.category,
        level: IFRS18_COURSE.level,
        cpeHours: IFRS18_COURSE.cpeHours,
        instructorName: "AuditEdge Faculty",
        instructorTitle: "In-house senior instruction team",
        instructorBio:
          "Compact exam-focused courses authored by AuditEdge Academy for Egyptian practice-exam readiness.",
        icon: IFRS18_COURSE.icon,
        accent: IFRS18_COURSE.accent,
        featured: IFRS18_COURSE.featured,
        order: 100,
      },
    })
    console.log(`[course] created ${IFRS18_COURSE.code} — ${IFRS18_COURSE.title}`)
  }

  let createdModules = 0
  let createdLessons = 0
  let arBackfilled = 0

  for (const [mi, m] of IFRS18_COURSE.modules.entries()) {
    let module_ = await db.module.findFirst({ where: { courseId: course.id, title: m.title } })
    if (!module_) {
      module_ = await db.module.create({
        data: { courseId: course.id, title: m.title, description: m.description, order: mi + 1 },
      })
      createdModules++
    }
    for (const [li, l] of m.lessons.entries()) {
      const existing = await db.lesson.findFirst({ where: { moduleId: module_.id, title: l.title } })
      if (existing) {
        // idempotent AR backfill — the v20 ar-parity pattern: skip when an
        // Arabic edition is already in place, fill the gap otherwise.
        if (l.contentAr && (!existing.contentAr || existing.contentAr.length < 50)) {
          await db.lesson.update({
            where: { id: existing.id },
            data: { contentAr: contentJson(l.contentAr) },
          })
          arBackfilled++
        }
        continue
      }
      await db.lesson.create({
        data: {
          moduleId: module_.id,
          title: l.title,
          type: "lesson",
          durationMin: l.durationMin,
          xp: 10,
          content: contentJson(l.content),
          contentAr: l.contentAr ? contentJson(l.contentAr) : "",
          order: li + 1,
        },
      })
      createdLessons++
    }
  }

  // quiz lesson appended to the last module (the v20 spine pattern)
  const lastModule = await db.module.findFirst({
    where: { courseId: course.id },
    orderBy: { order: "desc" },
  })
  if (!lastModule) throw new Error(`course ${IFRS18_COURSE.code} has no modules`)

  let quizLesson = await db.lesson.findFirst({
    where: { moduleId: lastModule.id, title: IFRS18_COURSE.quiz.lessonTitle },
  })
  if (!quizLesson) {
    quizLesson = await db.lesson.create({
      data: {
        moduleId: lastModule.id,
        title: IFRS18_COURSE.quiz.lessonTitle,
        type: "quiz",
        durationMin: 8,
        xp: 15,
        content: "{}",
        order: 99,
      },
    })
    console.log(`[course] quiz lesson created in module "${lastModule.title}"`)
  }

  const existingQuiz = await db.quiz.findFirst({
    where: { courseId: course.id, title: IFRS18_COURSE.quiz.lessonTitle },
  })
  if (!existingQuiz) {
    await db.quiz.create({
      data: {
        lessonId: quizLesson.id,
        courseId: course.id,
        title: IFRS18_COURSE.quiz.lessonTitle,
        passScore: 70,
        questions: contentJson(IFRS18_COURSE.quiz.questions),
      },
    })
    console.log(`[course] quiz created — ${IFRS18_COURSE.quiz.questions.length} questions (EN + AR inline)`)
  } else {
    console.log(`[course] quiz already present — questions left untouched`)
  }

  // mirror the quiz questions into the bank (v20 SP- pattern + AR fields)
  for (const [qi, q] of IFRS18_COURSE.quiz.questions.entries()) {
    const code = `SP-${IFRS18_COURSE.code}-${qi + 1}`
    const data = {
      code,
      stem: q.question,
      options: contentJson(q.options),
      answerIndex: q.correctIndex,
      explanation: q.explanation,
      standardTag: QUIZ_TAG,
      area: "accounting",
      difficulty: 2,
      source: "Course quiz mirror",
      courseId: course.id,
      ...(q.questionAr && q.optionsAr && q.explanationAr
        ? { stemAr: q.questionAr, optionsAr: contentJson(q.optionsAr), explanationAr: q.explanationAr }
        : {}),
    }
    await db.bankQuestion.upsert({ where: { code }, create: data, update: data })
  }

  console.log(
    `[course] +${createdModules} modules, +${createdLessons} lessons, ${arBackfilled} AR backfills, ${IFRS18_COURSE.quiz.questions.length} quiz mirrors`
  )
}

async function seedBank() {
  let created = 0
  let arApplied = 0
  for (const q of IFRS18_BANK) {
    const ar = AR_BANK.get(q.code)
    const existing = await db.bankQuestion.findUnique({ where: { code: q.code } })
    if (!existing) {
      await db.bankQuestion.create({
        data: {
          code: q.code,
          stem: q.stem,
          options: contentJson(q.options),
          answerIndex: q.answer,
          explanation: q.explanation,
          standardTag: q.tag,
          area: q.area,
          difficulty: q.diff,
          source: "v21 IFRS 18",
          ...(ar ? { stemAr: ar.stem, optionsAr: contentJson(ar.options), explanationAr: ar.explanation } : {}),
        },
      })
      created++
    } else if (ar && !existing.stemAr) {
      // idempotent AR application — the v201 bank-ar pattern
      await db.bankQuestion.update({
        where: { id: existing.id },
        data: { stemAr: ar.stem, optionsAr: contentJson(ar.options), explanationAr: ar.explanation },
      })
      arApplied++
    }
  }
  console.log(`[bank] ${created} created, ${arApplied} given Arabic`)
}

async function main() {
  console.log("=== v21 seed — IFRS 18 course & bank ===")
  await seedCourse()
  await seedBank()

  const [bankTotal, bankAr, course] = await Promise.all([
    db.bankQuestion.count({ where: { standardTag: QUIZ_TAG } }),
    db.bankQuestion.count({ where: { standardTag: QUIZ_TAG, stemAr: { not: null } } }),
    db.course.findFirst({
      where: { code: IFRS18_COURSE.code },
      include: { modules: { orderBy: { order: "asc" }, include: { lessons: true } } },
    }),
  ])
  console.log("---")
  console.log(`bank tag "${QUIZ_TAG}": ${bankTotal} questions (${bankAr} with Arabic)`)
  if (course) {
    const lessons = course.modules.flatMap((m) => m.lessons)
    const withAr = lessons.filter((l) => l.contentAr && l.contentAr.length > 50).length
    console.log(
      `course ${course.code}: ${course.modules.length} modules, ${lessons.length} lessons (${withAr} with Arabic edition)`
    )
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
