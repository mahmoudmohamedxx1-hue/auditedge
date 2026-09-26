import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { parseLessonContent } from "@/lib/audit-server"
import { edgeSynthesize } from "@/lib/edge-tts"

type Params = { params: Promise<{ id: string }> }

/** Max characters fed to one TTS call — longer lessons are trimmed to a
 *  study-friendly episode (intro + sections + key points + takeaway). */
const MAX_CHARS = 4500

/** GET /api/podcast/lesson/[id]?lang=ar — MP3 episode for the lesson
 *  (P2-11 podcast mode). Synthesized on demand with an Edge neural voice. */
export async function GET(req: Request, { params }: Params) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const { id } = await params
  const wantAr = new URL(req.url).searchParams.get("lang") === "ar"

  const lesson = await db.lesson.findUnique({
    where: { id: id },
    include: { module: { include: { course: true } } },
  })
  if (!lesson) return NextResponse.json({ error: "lesson not found" }, { status: 404 })

  // Arabic episode only when an Arabic rendition exists (P1-6)
  const useAr = wantAr && Boolean(lesson.contentAr)
  let content = parseLessonContent(lesson.content)
  if (useAr && lesson.contentAr) {
    try {
      content = JSON.parse(lesson.contentAr)
    } catch {
      // fall back to the English script
    }
  }

  const script: string[] = [
    useAr
      ? `${lesson.module.course.title}. ${lesson.title}.`
      : `${lesson.module.course.title}. ${lesson.title}.`,
  ]
  if (content.intro) script.push(content.intro)
  for (const s of content.sections ?? []) {
    if (s.heading) script.push(s.heading)
    if (s.body) script.push(s.body)
    for (const b of s.bullets ?? []) script.push(b)
  }
  if ((content.keyPoints ?? []).length) {
    script.push(useAr ? "النقاط الأساسية." : "Key points.")
    script.push(...(content.keyPoints ?? []))
  }
  if (content.takeaway) script.push(content.takeaway)

  let text = script.filter(Boolean).join("\n\n")
  if (text.length > MAX_CHARS) text = text.slice(0, MAX_CHARS - 3) + "..."
  if (!text.trim()) {
    return NextResponse.json({ error: "lesson has no readable content" }, { status: 400 })
  }

  const voice = useAr ? "ar-EG-SalmaNeural" : "en-GB-RyanNeural"
  try {
    const mp3 = await edgeSynthesize(voice, text, "+0%", 60_000)
    return new NextResponse(new Uint8Array(mp3), {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `attachment; filename="auditedge-podcast-${lesson.id}${useAr ? "-ar" : ""}.mp3"`,
        "Content-Length": String(mp3.length),
        "Cache-Control": "no-store",
      },
    })
  } catch (e) {
    console.error("podcast synthesis failed:", e instanceof Error ? e.message : e)
    return NextResponse.json(
      { error: "voice synthesis is temporarily unavailable" },
      { status: 503 }
    )
  }
}
