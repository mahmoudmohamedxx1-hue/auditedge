import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdmin, uniqueSlug } from "@/lib/audit-server"

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    const admin = await requireAdmin()
    if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

    const title = String(body.title ?? "").trim()
    if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 })

    const count = await db.course.count()
    const maxOrder = await db.course.aggregate({ _max: { order: true } })
    const course = await db.course.create({
      data: {
        slug: await uniqueSlug(title),
        code: String(body.code ?? "").trim() || `INT-${Date.now().toString(36).toUpperCase()}`,
        title,
        subtitle: String(body.subtitle ?? "").trim(),
        description: String(body.description ?? "").trim(),
        category: String(body.category ?? "Internal Training"),
        level: String(body.level ?? "Foundation"),
        // honest default: a new course claims no CPE until the author sets real hours
        cpeHours:
          Number(body.cpeHours) >= 0 && Number.isFinite(Number(body.cpeHours))
            ? Number(body.cpeHours)
            : 0,
        instructorName: String(body.instructorName ?? admin.name).trim() || admin.name,
        instructorTitle: String(body.instructorTitle ?? "").trim(),
        instructorBio: String(body.instructorBio ?? "").trim(),
        rating: 0, // real workspaces don't show fabricated ratings
        ratingCount: 0,
        studentsCount: 0,
        icon: String(body.icon ?? "book-open-check"),
        accent: String(body.accent ?? "terracotta"),
        published: body.published === true,
        order: (maxOrder._max.order ?? count) + 1,
      },
    })
    return NextResponse.json({ id: course.id, slug: course.slug })
  } catch (e) {
    console.error("course POST failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
