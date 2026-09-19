import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdmin, uniqueSlug } from "@/lib/audit-server"

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    const admin = await requireAdmin()
    if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

    const course = await db.course.findUnique({ where: { id } })
    if (!course) return NextResponse.json({ error: "Not found" }, { status: 404 })

    const data: Record<string, unknown> = {}
    const str = (v: unknown) => (typeof v === "string" ? v.trim() : undefined)

    const title = str(body.title)
    if (title) {
      data.title = title
      if (title !== course.title) data.slug = await uniqueSlug(title)
    }
    // optional text fields can be set AND cleared (undefined = leave unchanged)
    const clearable = ["subtitle", "description", "instructorName", "instructorTitle", "instructorBio"] as const
    for (const key of clearable) {
      if (body[key] !== undefined) {
        const v = str(body[key])
        data[key] = v ?? ""
      }
    }
    // required-ish fields only overwrite when non-empty
    const required = ["code", "category", "level", "icon", "accent"] as const
    for (const key of required) {
      const v = str(body[key])
      if (v) data[key] = v
    }
    if (body.cpeHours !== undefined) {
      const cpe = Number(body.cpeHours)
      if (Number.isFinite(cpe) && cpe >= 0) data.cpeHours = cpe
    }
    if (typeof body.published === "boolean") data.published = body.published
    if (typeof body.featured === "boolean") data.featured = body.featured

    if (Object.keys(data).length) {
      await db.course.update({ where: { id }, data })
    }
    return NextResponse.json({ ok: true, id })
  } catch (e) {
    console.error("course PATCH failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

  const course = await db.course.findUnique({
    where: { id },
    include: { _count: { select: { certificates: true } } },
  })
  if (!course) return NextResponse.json({ ok: true })
  // issued certificates are CPE evidence — deleting the course would cascade-
  // destroy them. Unpublish instead; deletion is only allowed for courses
  // nobody has completed.
  if (course._count.certificates > 0) {
    return NextResponse.json(
      {
        error: `This course has ${course._count.certificates} issued certificate(s) — unpublish it instead so the CPE evidence is preserved`,
      },
      { status: 409 }
    )
  }
  await db.course.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
