import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdmin } from "@/lib/audit-server"

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

    const module_ = await db.module.findUnique({ where: { id } })
    if (!module_) return NextResponse.json({ error: "Not found" }, { status: 404 })

    const data: Record<string, unknown> = {}
    if (typeof body.title === "string" && body.title.trim()) data.title = body.title.trim()
    if (typeof body.description === "string") data.description = body.description.trim()
    if (body.order !== undefined && Number.isFinite(Number(body.order))) data.order = Number(body.order)

    if (Object.keys(data).length) {
      await db.module.update({ where: { id }, data })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("module PATCH failed", e)
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

  const module_ = await db.module.findUnique({ where: { id } })
  if (!module_) return NextResponse.json({ ok: true })
  await db.module.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
