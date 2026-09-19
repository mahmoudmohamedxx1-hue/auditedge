import { NextResponse } from "next/server"
import { Prisma } from "@prisma/client"
import { db } from "@/lib/db"
import { requireAdminSession } from "@/lib/auth"

export const runtime = "nodejs"

/**
 * One-click workspace backup (JSON download).
 * Includes every table EXCEPT passwords, sessions and material file bytes
 * (files stay on disk under upload/materials — back those up separately).
 * Admin only.
 */
export async function GET() {
  const admin = await requireAdminSession()
  if (!admin) {
    return NextResponse.json({ error: "Only admins can download backups" }, { status: 403 })
  }

  const [
    users,
    courses,
    modules,
    lessons,
    quizzes,
    enrollments,
    lessonProgress,
    quizAttempts,
    certificates,
    materials,
    aiConversations,
    aiMessages,
  ] = await Promise.all([
    db.user.findMany(),
    db.course.findMany(),
    db.module.findMany(),
    db.lesson.findMany(),
    db.quiz.findMany(),
    db.enrollment.findMany(),
    db.lessonProgress.findMany(),
    db.quizAttempt.findMany(),
    db.certificate.findMany(),
    // don't pull ~10 MB of extracted text into memory just to report lengths —
    // select the metadata here and take the char counts via a raw aggregate
    db.material.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        fileName: true,
        originalName: true,
        mimeType: true,
        sizeBytes: true,
        sourceUrl: true,
        hasFile: true,
        uploadedById: true,
        createdAt: true,
      },
    }),
    db.aiConversation.findMany(),
    db.aiMessage.findMany(),
  ])

  // char counts without shipping the full text into the response memory twice
  const textLengths = await db.$queryRaw<Array<{ fileName: string; chars: number }>>(
    Prisma.sql`SELECT fileName, length(textContent) AS chars FROM Material`
  )
  const charsByFile = new Map(textLengths.map((r) => [r.fileName, Number(r.chars) ?? 0]))

  const stripUser = (u: (typeof users)[number]) => {
    const { passwordHash, ...rest } = u
    return rest
  }

  const backup = {
    meta: {
      app: "AuditEdge",
      version: 6,
      generatedAt: new Date().toISOString(),
      generatedBy: admin.email,
      note: "Passwords and sessions are excluded. Uploaded files live in upload/materials on the server. Ingested standards materials are DB-only records identified by fileName + sourceUrl + hasFile=false — their text lives in textContentChars summary only; re-run scripts/ingest-standards*.ts to restore full texts.",
    },
    users: users.map(stripUser),
    courses,
    modules,
    lessons,
    quizzes,
    enrollments,
    lessonProgress,
    quizAttempts,
    certificates,
    materials: materials.map((m) => ({
      ...m,
      textContentChars: charsByFile.get(m.fileName) ?? 0,
    })),
    aiConversations,
    aiMessages,
  }

  const stamp = new Date().toISOString().slice(0, 10)
  return new NextResponse(JSON.stringify(backup, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="auditedge-backup-${stamp}.json"`,
    },
  })
}
