import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { edgeSynthesize } from "@/lib/edge-tts"

export const runtime = "nodejs"
export const maxDuration = 300

/** v26 — voice a custom two-person podcast script.
 *
 * POST { title, lang, host, guest, turns: [{speaker:"host"|"guest", text}] }
 *   → one MP3: every turn synthesized with a DIFFERENT neural voice for the
 *     host and the guest (Edge neural voices — the same engine the lesson
 *     podcasts use), the per-turn MP3 frames concatenated into a single
 *     stream the browser plays as one episode.
 *
 * MP3 frames are self-contained, so frame-stream concatenation plays back
 * seamlessly in browsers — the same trick lesson downloads already rely on.
 */

type Turn = { speaker: "host" | "guest"; text: string }

/** Two distinct voices per language — host leads, guest answers. */
const VOICES = {
  en: { host: "en-GB-RyanNeural", guest: "en-US-ChristopherNeural" },
  ar: { host: "ar-EG-SalmaNeural", guest: "ar-EG-ShakirNeural" },
} as const

/** Whole-episode character cap — keeps serverless synthesis bounded
 *  (~20 min of speech at 130 wpm ≈ 12k chars). */
const MAX_TOTAL_CHARS = 13_000
/** Per-turn cap (a runaway turn is trimmed, not fatal). */
const MAX_TURN_CHARS = 1_400
const MAX_TURNS = 36

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.podcastSpeak)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { lang?: unknown; turns?: { speaker?: unknown; text?: unknown }[] }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const lang: "en" | "ar" = body.lang === "ar" ? "ar" : "en"
  const turns: Turn[] = (Array.isArray(body.turns) ? body.turns : [])
    .map((t) => ({
      speaker: t.speaker === "guest" ? ("guest" as const) : ("host" as const),
      text: String(t.text ?? "").replace(/\s+/g, " ").trim(),
    }))
    .filter((t) => t.text.length > 0)
    .slice(0, MAX_TURNS)

  if (turns.length < 2) return NextResponse.json({ error: "turns are required" }, { status: 400 })

  let total = 0
  for (const t of turns) total += t.text.length
  if (total > MAX_TOTAL_CHARS) {
    return NextResponse.json({ error: "episode is too long to voice in one pass" }, { status: 413 })
  }

  const voices = VOICES[lang]
  const chunks: Buffer[] = []
  try {
    for (const t of turns) {
      let text = t.text
      if (text.length > MAX_TURN_CHARS) text = text.slice(0, MAX_TURN_CHARS - 3) + "..."
      const mp3 = await edgeSynthesize(
        t.speaker === "guest" ? voices.guest : voices.host,
        text,
        "+0%",
        60_000
      )
      chunks.push(Buffer.from(mp3))
    }
  } catch (e) {
    console.error("podcast speak failed:", e instanceof Error ? e.message : e)
    return NextResponse.json({ error: "voice synthesis is temporarily unavailable" }, { status: 503 })
  }

  const audio = Buffer.concat(chunks)
  return new NextResponse(new Uint8Array(audio), {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": String(audio.length),
      "Content-Disposition": `attachment; filename="auditedge-custom-podcast-${lang}.mp3"`,
      "Cache-Control": "no-store",
    },
  })
}
