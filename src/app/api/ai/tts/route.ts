import { NextRequest, NextResponse } from "next/server"
import { getZai } from "@/lib/ai"
import { getSessionUser } from "@/lib/auth"
import { edgeSynthesize } from "@/lib/edge-tts"
import {
  edgeRatePct,
  isKnownEdgeVoiceName,
  isTtsVoiceId,
  resolveTtsVoice,
  zaiFallbackVoice,
  type TtsVoiceId,
} from "@/lib/voices"

export const runtime = "nodejs"

/** Text-to-speech for the AI tutor's answers.
 *  One chunk per call (max 1024 chars, per the Z.ai TTS limit) — the client
 *  splits long answers into sentence-aware chunks and plays them in order.
 *
 *  Two engines serve a chunk:
 *  1. Edge neural TTS (the "international voices", incl. Egyptian Arabic) —
 *     the default path; "auto" resolves to Salma (Arabic) / Jenny (English).
 *  2. The workspace Z.ai TTS — the always-available fallback when Edge is
 *     unreachable (rate limits, network, protocol drift) or when the user
 *     explicitly picks one of the 7 Z.ai voices.
 *  Both engines are flaky under burst (transient 5xx / 429), so we retry
 *  with backoff before giving up. */
export async function POST(req: NextRequest) {
  try {
    const me = await getSessionUser()
    if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const { text, speed, voice } = (await req.json()) as {
      text?: string
      speed?: number
      voice?: string
    }
    if (!text || !text.trim())
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    if (text.length > 1024)
      return NextResponse.json(
        { error: "Chunk too long — split the text into pieces of 1024 characters or less" },
        { status: 400 }
      )

    const spd = typeof speed === "number" && speed >= 0.5 && speed <= 2 ? speed : 1
    // unknown/absent voice falls back to "auto" (neural, language-matched)
    const voiceChoice: TtsVoiceId = isTtsVoiceId(voice) ? voice : "auto"
    const resolved = resolveTtsVoice(voiceChoice, text)

    // ---- 1) Edge neural path (with silent Z.ai fallback) ----
    if (resolved.provider === "edge") {
      if (isKnownEdgeVoiceName(resolved.voice)) {
        try {
          const mp3 = await edgeSynthesize(resolved.voice, text, edgeRatePct(spd), 20000)
          if (mp3.length > 0) {
            // fresh Uint8Array copy → plain-ArrayBuffer BodyInit for NextResponse
            const body = new Uint8Array(mp3)
            return new NextResponse(body, {
              status: 200,
              headers: {
                "Content-Type": "audio/mpeg",
                "Content-Length": String(mp3.length),
                "Cache-Control": "no-store",
              },
            })
          }
        } catch (e) {
          console.error(
            `[tts] edge failed (${resolved.voice}), falling back to Z.ai:`,
            e instanceof Error ? e.message.slice(0, 120) : JSON.stringify(e).slice(0, 120)
          )
        }
      }
    }

    // ---- 2) Z.ai engine path (explicit choice or Edge fallback) ----
    const zaiVoice = resolved.provider === "zai" ? resolved.voice : zaiFallbackVoice(text)
    const zai = await getZai()

    let lastError = "Speech generation failed"
    // 3 attempts with backoff — upstream failures are transient
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await zai.audio.tts.create({
          input: text,
          voice: zaiVoice,
          speed: spd,
          response_format: "wav",
          stream: false,
        })
        const buffer = Buffer.from(new Uint8Array(await response.arrayBuffer()))
        if (buffer.length === 0) throw new Error("Empty audio response")

        return new NextResponse(buffer, {
          status: 200,
          headers: {
            "Content-Type": "audio/wav",
            "Content-Length": String(buffer.length),
            "Cache-Control": "no-store",
          },
        })
      } catch (e) {
        lastError = e instanceof Error && e.message ? e.message : "Speech generation failed"
        console.error(`[tts] attempt ${attempt + 1}/3 failed: ${lastError.slice(0, 200)}`)
        // patient backoff — 429 rate limits need a few seconds to clear
        if (attempt < 2) await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)))
      }
    }

    return NextResponse.json({ error: lastError }, { status: 502 })
  } catch (e) {
    console.error("[tts]", e)
    return NextResponse.json(
      {
        error: e instanceof Error && e.message ? e.message : "Speech generation failed",
      },
      { status: 500 }
    )
  }
}
