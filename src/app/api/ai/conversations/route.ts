import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

/** GET → the learner's conversation list.
 *  v21: `?q=` searches MESSAGE CONTENT too (not just titles) — "where did the
 *  tutor explain ECL staging?" now finds the right conversation. */
export async function GET(req: NextRequest) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase()

  let idFilter: string[] | null = null
  if (q) {
    // full-text match across message content (SQLite `contains` is
    // case-insensitive for ASCII; lowercase the needle for safety on PG too)
    const hits = await db.aiMessage.findMany({
      where: { conversation: { userId: me.id }, OR: [{ content: { contains: q } }, { content: { contains: req.nextUrl.searchParams.get("q") ?? "" } }] },
      select: { conversationId: true },
      distinct: ["conversationId"],
      take: 40,
    })
    idFilter = hits.map((h) => h.conversationId)
  }

  const conversations = await db.aiConversation.findMany({
    where: { userId: me.id, ...(idFilter ? { id: { in: idFilter } } : {}) },
    orderBy: [{ pinned: "desc" }, { updatedAt: "desc" }],
    select: {
      id: true,
      title: true,
      pinned: true,
      updatedAt: true,
      _count: { select: { messages: true } },
    },
  })

  // when searching, also match titles directly (title hits may have no
  // message-content match but should still surface)
  const list = conversations.map((c) => ({
    id: c.id,
    title: c.title,
    pinned: c.pinned,
    updatedAt: c.updatedAt.toISOString(),
    messageCount: c._count.messages,
  }))
  if (q) {
    const needle = q
    return NextResponse.json(list.filter((c) => c.title.toLowerCase().includes(needle) || idFilter!.includes(c.id)))
  }
  return NextResponse.json(list)
}
