import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdmin } from "@/lib/audit-server"

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

    const courseId = String(body.courseId ?? "")
    const title = String(body.title ?? "").trim()
    if (!courseId || !title) {
      return NextResponse.json({ error: "Course and title are required" }, { status: 400 })
    }
    const course = await db.course.findUnique({ where: { id: courseId } })
    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })

    const count = await db.module.count({ where: { courseId } })
    const module_ = await db.module.create({
      data: {
        courseId,
        title,
        description: String(body.description ?? "").trim(),
        order: count + 1,
      },
    })
    return NextResponse.json({ id: module_.id })
  } catch (e) {
    console.error("module POST failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
