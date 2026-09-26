/**
 * Review-queue seeding + grading helpers (P0-3).
 * Server-side: turns lesson key points and missed bank questions into
 * spaced-repetition cards and advances them on grade.
 */
import { db } from "@/lib/db"
import { parseLessonContent } from "@/lib/audit-server"
import { scheduleNext, type ReviewGrade } from "@/lib/srs"

/** Create flashcards from a lesson's key points (called on completion). */
export async function seedReviewFromLesson(userId: string, lessonId: string) {
  const lesson = await db.lesson.findUnique({ where: { id: lessonId } })
  if (!lesson || lesson.type !== "lesson") return

  const content = parseLessonContent(lesson.content)
  const contentAr = (() => {
    try {
      return lesson.contentAr ? (JSON.parse(lesson.contentAr) as { keyPoints?: string[] }) : null
    } catch {
      return null
    }
  })()

  const module_ = await db.module.findUnique({ where: { id: lesson.moduleId } })
  if (!module_) return

  const keyPoints = content.keyPoints ?? []
  const keyPointsAr = contentAr?.keyPoints ?? []
  for (let i = 0; i < keyPoints.length; i++) {
    const back = keyPoints[i]
    // turn the key point into a prompt: strip trailing punctuation, prefix a recall cue
    const front = `Key point ${i + 1} of “${lesson.title}” — recall it, then flip to compare.`
    const frontAr = `النقطة الأساسية ${i + 1} من درس «${lesson.title}» — استرجعها ثم اقلب البطاقة للمقارنة.`
    await db.reviewItem.upsert({
      where: { userId_refKey: { userId, refKey: `lesson:${lessonId}:${i}` } },
      create: {
        userId,
        kind: "keypoint",
        refId: lessonId,
        refKey: `lesson:${lessonId}:${i}`,
        title: lesson.title,
        front,
        frontAr,
        back,
        backAr: keyPointsAr[i] ?? null,
        // first review due the next morning — key points are fresh now
        dueAt: nextReviewStart(),
      },
      update: {}, // already tracked — never overwrite scheduling
    })
  }
}

/** Create a flashcard from a missed bank question (P0-1 → P0-3 bridge). */
export async function seedReviewFromQuestion(userId: string, questionId: string) {
  const q = await db.bankQuestion.findUnique({ where: { id: questionId } })
  if (!q) return
  const options = JSON.parse(q.options) as string[]
  const optionsAr = q.optionsAr ? (JSON.parse(q.optionsAr) as string[]) : null
  const stemFront = `${q.stem}\n\n${options.map((o, i) => `${"ABCD"[i]}. ${o}`).join("\n")}`
  const stemFrontAr =
    q.stemAr && optionsAr
      ? `${q.stemAr}\n\n${optionsAr.map((o, i) => `${"ABCD"[i]}. ${o}`).join("\n")}`
      : null
  const back = `Correct answer: ${"ABCD"[q.answerIndex]}. ${options[q.answerIndex]}\n\n${q.explanation}`
  const backAr =
    q.explanationAr && optionsAr
      ? `الإجابة الصحيحة: ${"ABCD"[q.answerIndex]}. ${optionsAr[q.answerIndex]}\n\n${q.explanationAr}`
      : null

  await db.reviewItem.upsert({
    where: { userId_refKey: { userId, refKey: `bank:${questionId}` } },
    create: {
      userId,
      kind: "question",
      refId: questionId,
      refKey: `bank:${questionId}`,
      title: `${q.standardTag} — ${q.code}`,
      front: stemFront,
      frontAr: stemFrontAr,
      back,
      backAr,
      // missed questions come back the next day — the learner just saw it
      dueAt: nextReviewStart(),
    },
    update: {}, // a repeat miss keeps the existing schedule (grade 0 handles it)
  })
}

/** Apply an SM-2-lite grade to one card. */
export async function gradeReviewItem(userId: string, itemId: string, grade: ReviewGrade) {
  const item = await db.reviewItem.findFirst({ where: { id: itemId, userId } })
  if (!item) return null
  const next = scheduleNext(
    { ease: item.ease, intervalDays: item.intervalDays, reps: item.reps, lapses: item.lapses },
    grade
  )
  const updated = await db.reviewItem.update({
    where: { id: item.id },
    data: {
      ease: next.ease,
      intervalDays: next.intervalDays,
      reps: next.reps,
      lapses: next.lapses,
      dueAt: next.dueAt,
      lastGrade: grade,
    },
  })
  return updated
}

/** Reviews start next morning at 05:00 local — "daily queue" semantics. */
function nextReviewStart(from: Date = new Date()): Date {
  const d = new Date(from)
  d.setUTCDate(d.getUTCDate() + 1)
  d.setUTCHours(2, 0, 0, 0) // 05:00 Africa/Cairo (UTC+3 next day)
  return d
}
