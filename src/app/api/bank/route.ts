import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { bankStats, drawPractice } from "@/lib/bank"

/** GET /api/bank — bank statistics (sizes, areas, tags, AR coverage). */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  return NextResponse.json(await bankStats())
}

/** POST /api/bank — draw a practice set: {count, area?, tag?, difficulty?}. */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    count?: unknown
    area?: unknown
    tag?: unknown
    difficulty?: unknown
    seed?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const count = Math.min(50, Math.max(5, Math.floor(Number(body?.count) || 10)))
  const area = typeof body?.area === "string" && body.area ? body.area : undefined
  const tag = typeof body?.tag === "string" && body.tag ? body.tag : undefined
  const difficultyRaw = Number(body?.difficulty)
  const difficulty =
    Number.isInteger(difficultyRaw) && difficultyRaw >= 1 && difficultyRaw <= 3
      ? difficultyRaw
      : undefined
  const seed = Number(body?.seed)

  const questions = await drawPractice({
    count,
    area,
    tag,
    difficulty,
    userId: me.id,
    seed: Number.isFinite(seed) ? seed : undefined,
  })
  return NextResponse.json({ questions })
}
