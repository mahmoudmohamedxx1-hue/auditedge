import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getZai } from "@/lib/ai"
import { getSessionUser } from "@/lib/auth"

export const runtime = "nodejs"

/** Speech-to-text for the AI tutor's microphone input.
 *  The client records the mic, converts it to 16 kHz mono WAV and posts the
 *  base64 audio here; we return the transcript to drop into the composer. */
export async function POST(req: NextRequest) {
  // v21: per-IP sliding-window guard — protects the AI quota if the URL leaks
  const limited = aiRateLimit(req, AI_POLICIES.asr)
  if (limited) return limited

  try {
    const me = await getSessionUser()
    if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const { audio, lang } = (await req.json()) as { audio?: string; lang?: string }
    if (!audio || audio.length < 100)
      return NextResponse.json({ error: "Audio is required" }, { status: 400 })
    // ~15 MB of base64 ≈ 11 MB WAV ≈ 5–6 minutes at 16 kHz mono — refuse bigger
    if (audio.length > 16_000_000)
      return NextResponse.json({ error: "Recording too long — keep it under a minute" }, { status: 413 })

    const zai = await getZai()
    // v21: pass the UI language as a hint — heavily code-switching Egyptian
    // users get far better transcription of Arabic questions; if the engine
    // rejects the parameter we retry once without it.
    let response: Awaited<ReturnType<typeof zai.audio.asr.create>>
    try {
      response = await zai.audio.asr.create({
        file_base64: audio,
        ...(lang === "ar" ? { language: "ar-EG" } : lang === "en" ? { language: "en" } : {}),
      })
    } catch {
      response = await zai.audio.asr.create({ file_base64: audio })
    }
    const text = (response.text ?? "").trim()
    if (!text)
      return NextResponse.json(
        { error: "No speech was recognized — try speaking a bit closer to the microphone" },
        { status: 422 }
      )

    return NextResponse.json({ text })
  } catch (e) {
    console.error("[asr]", e)
    return NextResponse.json(
      { error: e instanceof Error && e.message ? e.message : "Transcription failed" },
      { status: 500 }
    )
  }
}
