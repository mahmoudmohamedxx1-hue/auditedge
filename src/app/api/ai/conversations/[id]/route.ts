import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

/** GET → full conversation with messages (owner only) */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const { id } = await params
  const convo = await db.aiConversation.findUnique({
    where: { id },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  })
  if (!convo || convo.userId !== me.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  return NextResponse.json({
    id: convo.id,
    title: convo.title,
    updatedAt: convo.updatedAt.toISOString(),
    messages: convo.messages.map((m) => ({
      id: m.id,
      role: m.role,
      content: m.content,
      sources: safeSources(m.sources),
      imageUrl: m.imageUrl,
      createdAt: m.createdAt.toISOString(),
    })),
  })
}

/** DELETE → remove a conversation (owner only) */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const { id } = await params
  const convo = await db.aiConversation.findUnique({ where: { id } })
  if (!convo || convo.userId !== me.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  await db.aiConversation.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

function safeSources(json: string): { url: string; name: string; snippet: string; host_name: string }[] {
  try {
    const parsed = JSON.parse(json)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
