/**
 * v20 seeder (P0-1 / P0-2 / P0-3-data / P1-6 / P1-8 + quick wins).
 * Idempotent: safe to re-run — every step upserts or no-ops.
 *
 *   bun run scripts/seed/v20/index.ts
 */
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

import { ISA_CORE } from "./bank-isa-core"
import { ISA_EVIDENCE } from "./bank-isa-evidence"
import { REPORTING } from "./bank-reporting"
import { EGYPT } from "./bank-eas"
import { IFRS } from "./bank-ifrs"
import { ETHICS } from "./bank-ethics"
import { BANK_WAVE2 } from "./bank-wave2"
import { BANK_WAVE3 } from "./bank-wave3"
import { AR_BANK } from "./bank-ar"
import { SPINE_REPORTING, SPINE_505, SPINE_520_530, type SpineCourse } from "./isa-spine-1"
import { SPINE_PART2 } from "./isa-spine-2"
import { AR_PARITY_1 } from "./ar-parity-1"
import { AR_PARITY_2 } from "./ar-parity-2"
import { AR_QUIZ } from "./ar-quiz"
import { ENRICHMENTS, YT_LVHL_NOTES, ISA570_WORKSHOP, CHECKPOINT_QUIZZES } from "./depth-pass"

const ALL_BANK = [...ISA_CORE, ...ISA_EVIDENCE, ...REPORTING, ...EGYPT, ...IFRS, ...ETHICS, ...BANK_WAVE2, ...BANK_WAVE3]
const ALL_AR = new Map(AR_BANK.map((a) => [a.code, a]))
const AR_PARITY = { ...AR_PARITY_1, ...AR_PARITY_2 }

const SPINES: SpineCourse[] = [SPINE_REPORTING, SPINE_505, SPINE_520_530, ...SPINE_PART2]

/** course code → bank standard tag for quiz mirroring */
const SPINE_TAG: Record<string, string> = {
  "ISA-700C": "ISA 700",
  "ISA-505C": "ISA 505",
  "ISA-520C": "ISA 520",
  "ISA-550C": "ISA 550",
  "ISA-560C": "ISA 560",
  "ISA-580C": "ISA 580",
  "ISA-600C": "ISA 600",
  "ISQM-01C": "ISQM 1",
  "ETH-CODE": "Ethics — Fundamentals",
}
const CHECKPOINT_TAG: Record<string, string> = {
  "ISA-315": "ISA 315",
  "ISA-330": "ISA 330",
  "IFRS-CORE": "IFRS 15",
  "EGY-REG": "Egypt — Institutions",
  "ISA-570": "ISA 570",
  "EVD-500": "ISA 500",
  "ISA-240": "ISA 240",
  "AUD-ANL": "ISA 520",
}

function lessonContentJson(c: unknown): string {
  return JSON.stringify(c)
}

async function seedBank() {
  let created = 0
  for (const q of ALL_BANK) {
    const ar = ALL_AR.get(q.code)
    const data = {
      code: q.code,
      stem: q.stem,
      options: JSON.stringify(q.options),
      answerIndex: q.answer,
      explanation: q.explanation,
      standardTag: q.tag,
      area: q.area,
      difficulty: q.diff,
      ...(ar
        ? { stemAr: ar.stem, optionsAr: JSON.stringify(ar.options), explanationAr: ar.explanation }
        : {}),
    }
    await db.bankQuestion.upsert({ where: { code: q.code }, create: data, update: data })
    created++
  }
  console.log(`[bank] ${created} questions ensured (EN${ALL_AR.size} with AR)`)
}

/** Mirror a quiz question into the bank under a spine/checkpoint code. */
async function mirrorQuizQuestion(
  code: string,
  tag: string,
  area: string,
  q: { question: string; options: string[]; correctIndex: number; explanation: string },
  courseId: string
) {
  const data = {
    code,
    stem: q.question,
    options: JSON.stringify(q.options),
    answerIndex: q.correctIndex,
    explanation: q.explanation,
    standardTag: tag,
    area,
    difficulty: 2 as const,
    source: "Course quiz mirror",
    courseId,
  }
  await db.bankQuestion.upsert({ where: { code }, create: data, update: data })
}

async function seedSpines() {
  for (const spine of SPINES) {
    const existing = await db.course.findFirst({ where: { code: spine.code } })
    if (existing) {
      console.log(`[spine] ${spine.code} already present — skip`)
      continue
    }
    const slug = `isa-spine-${spine.code.toLowerCase()}`
    const course = await db.course.create({
      data: {
        slug,
        code: spine.code,
        title: spine.title,
        subtitle: spine.subtitle,
        description: spine.description,
        category: spine.category,
        level: spine.level,
        cpeHours: spine.cpeHours,
        instructorName: "AuditEdge Faculty",
        instructorTitle: "In-house senior instruction team",
        instructorBio: "Compact exam-focused courses authored by AuditEdge Academy for Egyptian practice-exam readiness.",
        icon: spine.icon,
        accent: spine.accent,
        featured: spine.featured,
        order: 90 + SPINES.indexOf(spine),
      },
    })
    for (const [mi, m] of spine.modules.entries()) {
      const module_ = await db.module.create({
        data: { courseId: course.id, title: m.title, description: m.description, order: mi + 1 },
      })
      for (const [li, l] of m.lessons.entries()) {
        const lesson = await db.lesson.create({
          data: {
            moduleId: module_.id,
            title: l.title,
            type: "lesson",
            durationMin: l.durationMin,
            xp: 10,
            content: lessonContentJson(l.content),
            order: li + 1,
          },
        })
        void lesson
      }
    }
    // quiz lesson appended to the last module
    const lastModule = await db.module.findFirst({
      where: { courseId: course.id },
      orderBy: { order: "desc" },
    })
    const quizLesson = await db.lesson.create({
      data: {
        moduleId: lastModule!.id,
        title: spine.quiz.lessonTitle,
        type: "quiz",
        durationMin: 8,
        xp: 15,
        content: "{}",
        order: 99,
      },
    })
    await db.quiz.create({
      data: {
        lessonId: quizLesson.id,
        courseId: course.id,
        title: spine.quiz.lessonTitle,
        passScore: 70,
        questions: JSON.stringify(spine.quiz.questions),
      },
    })
    // mirror into the bank
    for (const [qi, q] of spine.quiz.questions.entries()) {
      await mirrorQuizQuestion(
        `SP-${spine.code}-${qi + 1}`,
        SPINE_TAG[spine.code] ?? "ISA 200",
        spine.code === "ETH-CODE" ? "ethics" : "auditing",
        q,
        course.id
      )
    }
    console.log(`[spine] created ${spine.code} — ${spine.title}`)
  }
}

/** Whitespace-insensitive title matching — YouTube titles carry stray
 *  double spaces that break exact string equality. */
const normTitle = (t: string) => t.replace(/\s+/g, " ").trim()

async function findLessonByTitle(courseCode: string | null, title: string) {
  const where = courseCode
    ? { module: { course: { code: courseCode } } }
    : { module: { course: { sourcePlatform: "" } } }
  const lessons = await db.lesson.findMany({
    where,
    include: { module: { select: { course: { select: { code: true, sourcePlatform: true } } } } },
  })
  return lessons.find((l) => normTitle(l.title) === normTitle(title)) ?? null
}

async function applyArParity() {
  let updated = 0
  for (const [key, ar] of Object.entries(AR_PARITY)) {
    const [courseCode, lessonTitle] = key.split("::")
    const lesson = await findLessonByTitle(courseCode, lessonTitle)
    if (!lesson) {
      console.warn(`[ar-parity] lesson not found: ${lessonTitle.slice(0, 50)}`)
      continue
    }
    if (lesson.contentAr && lesson.contentAr.length > 50) continue // already applied
    await db.lesson.update({
      where: { id: lesson.id },
      data: { contentAr: lessonContentJson(ar) },
    })
    updated++
  }
  console.log(`[ar-parity] ${updated} lessons given Arabic editions`)

  // quiz AR variants — applied positionally across the course's quiz lessons
  // in module/lesson order (the same order the AR translations were authored
  // from)
  let qUpdated = 0
  for (const [courseCode, arQuestions] of Object.entries(AR_QUIZ)) {
    const course = await db.course.findFirst({ where: { code: courseCode } })
    if (!course) continue
    const modules = await db.module.findMany({
      where: { courseId: course.id },
      orderBy: { order: "asc" },
    })
    const orderedQuizIds: string[] = []
    for (const m of modules) {
      const lessons = await db.lesson.findMany({
        where: { moduleId: m.id, type: "quiz" },
        orderBy: { order: "asc" },
        select: { quiz: true },
      })
      for (const l of lessons) if (l.quiz) orderedQuizIds.push(l.quiz.id)
    }
    let cursor = 0
    for (const quizId of orderedQuizIds) {
      const quiz = await db.quiz.findUnique({ where: { id: quizId } })
      if (!quiz) continue
      const qs = JSON.parse(quiz.questions) as Record<string, unknown>[]
      let changed = false
      for (const q of qs) {
        const ar = arQuestions[cursor]
        cursor++
        if (!ar || q.questionAr) continue
        q.questionAr = ar.questionAr
        q.optionsAr = ar.optionsAr
        q.explanationAr = ar.explanationAr
        changed = true
      }
      if (changed) {
        await db.quiz.update({ where: { id: quiz.id }, data: { questions: JSON.stringify(qs) } })
        qUpdated++
      }
    }
  }
  console.log(`[ar-parity] ${qUpdated} quizzes given Arabic question variants`)
}

async function applyDepthPass() {
  // 1. enrichments
  let enriched = 0
  for (const [title, add] of Object.entries(ENRICHMENTS)) {
    const lesson = await findLessonByTitle(null, title)
    if (!lesson) {
      console.warn(`[depth] enrichment target not found: ${title.slice(0, 50)}`)
      continue
    }
    const content = JSON.parse(lesson.content) as { sections: unknown[] }
    if (content.sections.some((s: unknown) => (s as { heading: string }).heading === add.heading)) continue
    content.sections.push({ heading: add.heading, body: add.body, ...(add.bullets ? { bullets: add.bullets } : {}) })
    await db.lesson.update({ where: { id: lesson.id }, data: { content: JSON.stringify(content) } })
    enriched++
  }
  console.log(`[depth] ${enriched} lessons enriched`)

  // 2. YT-LVHL Arabic study notes
  let noted = 0
  for (const [title, add] of Object.entries(YT_LVHL_NOTES)) {
    const target = await (async () => {
      const exact = await db.lesson.findFirst({ where: { title } })
      if (exact) return exact
      const candidates = await db.lesson.findMany({
        where: { module: { course: { code: "YT-LVHL" } } },
      })
      return candidates.find((l) => normTitle(l.title) === normTitle(title)) ?? null
    })()
    if (!target) {
      console.warn(`[depth] YT-LVHL note target not found: ${title.slice(0, 50)}`)
      continue
    }
    const content = JSON.parse(target.content) as { sections: unknown[] }
    if (content.sections.some((s: unknown) => (s as { heading: string }).heading === add.heading)) continue
    content.sections.push({ heading: add.heading, body: add.body, ...(add.bullets ? { bullets: add.bullets } : {}) })
    await db.lesson.update({ where: { id: target.id }, data: { content: JSON.stringify(content) } })
    noted++
  }
  console.log(`[depth] ${noted} YT-LVHL lessons given Arabic study notes`)

  // 3. ISA-570 capstone workshop lesson
  const isa570 = await db.course.findFirst({ where: { code: "ISA-570" } })
  if (isa570) {
    const existing = await db.lesson.findFirst({
      where: { title: ISA570_WORKSHOP.lesson.title, module: { courseId: isa570.id } },
    })
    if (!existing) {
      const module_ = await db.module.findFirst({
        where: { courseId: isa570.id, title: ISA570_WORKSHOP.moduleTitle },
      })
      if (module_) {
        await db.lesson.create({
          data: {
            moduleId: module_.id,
            title: ISA570_WORKSHOP.lesson.title,
            type: "lesson",
            durationMin: ISA570_WORKSHOP.lesson.durationMin,
            xp: 10,
            content: lessonContentJson(ISA570_WORKSHOP.lesson.content),
            order: 98,
          },
        })
        console.log(`[depth] ISA-570 capstone workshop lesson created`)
      }
    }
  }

  // 4. checkpoint quizzes for the 8 in-house courses
  let checkpoints = 0
  for (const [courseCode, cp] of Object.entries(CHECKPOINT_QUIZZES)) {
    const course = await db.course.findFirst({ where: { code: courseCode } })
    if (!course) continue
    const exists = await db.quiz.findFirst({ where: { courseId: course.id, title: cp.title } })
    if (exists) continue
    const lastModule = await db.module.findFirst({
      where: { courseId: course.id },
      orderBy: { order: "desc" },
    })
    const quizLesson = await db.lesson.create({
      data: {
        moduleId: lastModule!.id,
        title: cp.title,
        type: "quiz",
        durationMin: 6,
        xp: 12,
        content: "{}",
        order: 96,
      },
    })
    await db.quiz.create({
      data: {
        lessonId: quizLesson.id,
        courseId: course.id,
        title: cp.title,
        passScore: 70,
        questions: JSON.stringify(cp.questions),
      },
    })
    for (const [qi, q] of cp.questions.entries()) {
      await mirrorQuizQuestion(
        `CK-${courseCode}-${qi + 1}`,
        CHECKPOINT_TAG[courseCode] ?? "ISA 200",
        courseCode === "EGY-REG" ? "egypt" : courseCode === "IFRS-CORE" ? "accounting" : "auditing",
        q,
        course.id
      )
    }
    checkpoints++
  }
  console.log(`[depth] ${checkpoints} checkpoint quizzes created`)

  // 5. supplementary flags for external imports (P1-6)
  const flagged = await db.course.updateMany({
    where: { sourcePlatform: { not: "" } },
    data: { supplementary: true },
  })
  console.log(`[p1-6] supplementary flag set on ${flagged.count} external courses`)
}

async function main() {
  console.log("=== AuditEdge v20 seed ===")
  await seedBank()
  await seedSpines()
  await applyArParity()
  await applyDepthPass()

  const [bankTotal, withAr, spineCount] = await Promise.all([
    db.bankQuestion.count(),
    db.bankQuestion.count({ where: { stemAr: { not: null } } }),
    db.course.count({ where: { code: { in: SPINES.map((s) => s.code) } } }),
  ])
  console.log("---")
  console.log(`bank: ${bankTotal} questions (${withAr} with Arabic)`)
  console.log(`spine courses: ${spineCount}/9`)
  const quizTotal = await db.quiz.count()
  console.log(`quizzes total: ${quizTotal}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
