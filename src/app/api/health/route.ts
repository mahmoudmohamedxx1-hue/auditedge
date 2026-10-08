import { db } from "@/lib/db"
import { APP_VERSION } from "@/lib/app-version"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** GET /api/health — v42 deployment self-check.
 *
 *  One public, zero-auth endpoint that answers the only question that
 *  matters after switching a deployment to a managed database: "is this
 *  site durable, and is the content actually there?" It reports the
 *  effective database mode (postgres = survives redeploys / snapshot =
 *  demo mode), the content counts, and the app version — so the
 *  DURABLE-DATA-SETUP walkthrough can be verified in one curl. */

function dbMode(): { mode: "postgres" | "snapshot" | "sqlite"; durable: boolean } {
  const url = process.env.DATABASE_URL ?? ""
  if (/^postgres(ql)?:\/\//.test(url)) return { mode: "postgres", durable: true }
  if (process.env.VERCEL === "1") return { mode: "snapshot", durable: false }
  return { mode: "sqlite", durable: true }
}

export async function GET() {
  const info = dbMode()
  let counts: Record<string, number> | null = null
  let dbOk = true
  try {
    const [courses, lessons, materials, bank, quizzes, conversations] = await Promise.all([
      db.course.count(),
      db.lesson.count(),
      db.material.count(),
      db.bankQuestion.count(),
      db.quiz.count(),
      db.aiConversation.count(),
    ])
    counts = { courses, lessons, materials, bankQuestions: bank, quizzes, conversations }
  } catch {
    dbOk = false
  }

  return Response.json(
    {
      ok: dbOk,
      app: APP_VERSION,
      db: { ...info, counts },
      hint:
        info.mode === "snapshot"
          ? "Snapshot/demo mode: user data created on this deployment resets on each redeploy. Set DATABASE_URL to a Postgres connection string (see docs/DURABLE-DATA-SETUP.md) to make it durable — the build seeds the content automatically."
          : undefined,
    },
    { headers: { "Cache-Control": "no-store" } }
  )
}
