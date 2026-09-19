import { randomBytes } from "crypto"
import { db } from "@/lib/db"
import { requireAdminSession } from "@/lib/auth"
import {
  Course,
  Lesson,
  LessonContent,
  Material,
  Module,
  Quiz,
  QuizQuestion,
} from "@/lib/audit-types"
import { initialsOf } from "@/lib/audit-types"

export { requireAdminSession as requireAdmin }

export function parseLessonContent(contentJson: string): LessonContent {
  try {
    const parsed = JSON.parse(contentJson) as LessonContent
    return {
      intro: parsed.intro ?? "",
      sections: parsed.sections ?? [],
      keyPoints: parsed.keyPoints ?? [],
      example: parsed.example ?? undefined,
      takeaway: parsed.takeaway ?? "",
    }
  } catch {
    return { intro: "", sections: [], keyPoints: [], takeaway: "" }
  }
}

export function parseAttachments(json: string): string[] {
  try {
    const v = JSON.parse(json)
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : []
  } catch {
    return []
  }
}

export function parseQuizQuestions(questionsJson: string): QuizQuestion[] {
  try {
    const v = JSON.parse(questionsJson)
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

/** Validate + normalize a quiz payload coming from the lesson builder.
 *  Returns null when the quiz is unusable (no complete questions) — a quiz
 *  lesson without gradable questions can never be completed, which would
 *  silently block the whole course (and its certificate). */
export function sanitizeQuiz(
  quiz: { title?: unknown; passScore?: unknown; questions?: unknown } | null | undefined,
  fallbackTitle: string
): { title: string; passScore: number; questions: QuizQuestion[] } | null {
  if (!quiz) return null
  const rawQuestions = Array.isArray(quiz.questions) ? quiz.questions : []
  const questions: QuizQuestion[] = []
  for (const q of rawQuestions) {
    const item = q as Record<string, unknown>
    const question = typeof item?.question === "string" ? item.question.trim() : ""
    const options = Array.isArray(item?.options)
      ? item.options.map((o: unknown) => (typeof o === "string" ? o.trim() : "")).filter(Boolean)
      : []
    const correctRaw = Number(item?.correctIndex)
    const correctIndex =
      Number.isInteger(correctRaw) && correctRaw >= 0 && correctRaw < options.length ? correctRaw : 0
    const explanation = typeof item?.explanation === "string" ? item.explanation : ""
    if (question && options.length >= 2) {
      questions.push({ question, options, correctIndex, explanation })
    }
  }
  if (!questions.length) return null
  const passRaw = Number(quiz.passScore)
  const passScore = Number.isFinite(passRaw) ? Math.min(100, Math.max(1, Math.round(passRaw))) : 70
  const title = typeof quiz.title === "string" && quiz.title.trim() ? quiz.title.trim() : fallbackTitle
  return { title, passScore, questions }
}

export async function coursesForClient(): Promise<Course[]> {
  const courses = await db.course.findMany({
    orderBy: { order: "asc" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            orderBy: { order: "asc" },
            include: { quiz: true },
          },
        },
      },
      _count: { select: { enrollments: true } },
    },
  })
  return courses.map((c) => ({
    ...c,
    enrolledCount: c._count.enrollments,
    modules: c.modules.map((m) => ({
      ...m,
      lessons: m.lessons.map((l) => ({
        ...l,
        content: parseLessonContent(l.content),
        attachments: parseAttachments(l.attachments),
        quiz: l.quiz
          ? { ...l.quiz, questions: parseQuizQuestions(l.quiz.questions) }
          : null,
      })) as Lesson[],
    })) as Module[],
  })) as unknown as Course[]
}

export async function materialsForClient(): Promise<Material[]> {
  const materials = await db.material.findMany({
    orderBy: { createdAt: "desc" },
    include: { uploader: { select: { name: true } } },
  })
  return materials.map((m) => ({
    id: m.id,
    title: m.title,
    description: m.description,
    category: m.category,
    fileName: m.fileName,
    originalName: m.originalName,
    mimeType: m.mimeType,
    sizeBytes: m.sizeBytes,
    sourceUrl: m.sourceUrl,
    hasFile: m.hasFile,
    uploadedById: m.uploadedById,
    uploaderName: m.uploader?.name ?? null,
    createdAt: m.createdAt.toISOString(),
  }))
}

export function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "course"
  )
}

export async function uniqueSlug(base: string) {
  let slug = slugify(base)
  let i = 2
  while (await db.course.findUnique({ where: { slug } })) {
    slug = `${slugify(base)}-${i++}`
  }
  return slug
}

/** Create a lesson progress row if missing, award XP once, update streak.
 *  Returns the certificate if this completion finished the course. */
export async function markLessonComplete(userId: string, lessonId: string) {
  const existing = await db.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
  })
  if (existing) return { created: false, certificate: null }

  const lesson = await db.lesson.findUnique({ where: { id: lessonId } })
  if (!lesson) return { created: false, certificate: null }

  const user = await db.user.findUnique({ where: { id: userId } })
  if (!user) return { created: false, certificate: null }

  // quiz lessons must be earned with a PASSED attempt — completing them by plain
  // progress POST would issue certificates whose "knowledge check passed" claim
  // is a lie (the UI never does this, but the API must not allow it either)
  if (lesson.type === "quiz") {
    const quiz = await db.quiz.findUnique({ where: { lessonId } })
    if (quiz) {
      const passed = await db.quizAttempt.findFirst({
        where: { userId, quizId: quiz.id, passed: true },
      })
      if (!passed) return { created: false, certificate: null }
    }
  }

  // streak update
  const now = new Date()
  const last = new Date(user.lastActiveAt)
  const dayMs = 24 * 60 * 60 * 1000
  const daysSince = Math.floor(
    (new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() -
      new Date(last.getFullYear(), last.getMonth(), last.getDate()).getTime()) / dayMs
  )
  let streak = user.streakDays
  if (daysSince === 1) streak = user.streakDays + 1
  else if (daysSince > 1) streak = 1

  // resolve the course early (needed for the auto-enrollment below)
  const lessonModule = await db.module.findUnique({ where: { id: lesson.moduleId } })

  try {
    await db.$transaction([
      // auto-enroll: users can open lessons straight from the curriculum without
      // pressing "Start course" — progress must still be tracked under the course
      ...(lessonModule
        ? [
            db.enrollment.upsert({
              where: { userId_courseId: { userId, courseId: lessonModule.courseId } },
              create: { userId, courseId: lessonModule.courseId },
              update: {},
            }),
          ]
        : []),
      db.lessonProgress.create({ data: { userId, lessonId } }),
      // atomic increment — a concurrent completion in another tab must not
      // silently lose one of the XP awards (read-modify-write race)
      db.user.update({
        where: { id: userId },
        data: { xp: { increment: lesson.xp }, streakDays: streak, lastActiveAt: now },
      }),
    ])
  } catch (e) {
    // two rapid completions of the same lesson can race past the findUnique
    // check above — the loser hits the unique constraint; treat as already-done
    if ((e as { code?: string })?.code === "P2002") {
      return { created: false, certificate: null }
    }
    throw e
  }

  // certificate check: all lessons of the course completed?
  const module_ = lessonModule
  if (!module_) return { created: true, certificate: null }

  const courseLessons = await db.lesson.findMany({
    where: { module: { courseId: module_.courseId } },
    select: { id: true },
  })
  const progress = await db.lessonProgress.findMany({
    where: { userId, lessonId: { in: courseLessons.map((l) => l.id) } },
    select: { lessonId: true },
  })
  const done = new Set(progress.map((p) => p.lessonId))
  const allDone = courseLessons.every((l) => done.has(l.id))

  let certificate: { id: string; userId: string; courseId: string; serial: string; issuedAt: Date } | null =
    null
  if (allDone) {
    const existingCert = await db.certificate.findUnique({
      where: { userId_courseId: { userId, courseId: module_.courseId } },
    })
    if (existingCert) {
      certificate = existingCert
    } else {
      // serials are crypto-random but still unique-constrained — retry on the
      // (astronomically unlikely) collision instead of throwing a 500
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          certificate = await db.certificate.create({
            data: { userId, courseId: module_.courseId, serial: generateSerial() },
          })
          break
        } catch (e) {
          if ((e as { code?: string })?.code === "P2002" && attempt < 2) continue
          throw e
        }
      }
    }
    await db.enrollment.updateMany({
      where: { userId, courseId: module_.courseId, completedAt: null },
      data: { completedAt: now },
    })
  }

  return { created: true, certificate }
}

/** Cryptographically-random certificate serial (shared by progress + certificate routes). */
export function generateSerial(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  const bytes = randomBytes(6)
  let code = ""
  for (let i = 0; i < 6; i++) code += chars[bytes[i] % chars.length]
  return `AA-EG-${new Date().getFullYear()}-${code}`
}

export { initialsOf }
