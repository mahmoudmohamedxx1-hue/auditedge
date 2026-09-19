import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdminSession } from "@/lib/auth"

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const admin = await requireAdminSession()
  if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    const target = await db.user.findUnique({ where: { id } })
    if (!target) return NextResponse.json({ error: "Member not found" }, { status: 404 })

    const data: Record<string, string> = {}
    if (typeof body.name === "string" && body.name.trim()) data.name = body.name.trim()
    if (typeof body.jobTitle === "string") data.jobTitle = body.jobTitle.trim()
    if (body.role === "admin" || body.role === "learner") {
      // never demote the last admin — that would lock every admin feature out
      if (target.role === "admin" && body.role === "learner") {
        const adminCount = await db.user.count({ where: { role: "admin" } })
        if (adminCount <= 1) {
          return NextResponse.json({ error: "At least one admin must remain" }, { status: 400 })
        }
      }
      data.role = body.role
    }

    if (Object.keys(data).length) {
      await db.user.update({ where: { id }, data })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("team member PATCH failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const admin = await requireAdminSession()
  if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })
  if (admin.id === id) {
    return NextResponse.json({ error: "You cannot remove yourself" }, { status: 400 })
  }
  const adminCount = await db.user.count({ where: { role: "admin" } })
  const target = await db.user.findUnique({ where: { id } })
  if (!target) return NextResponse.json({ ok: true })
  if (target.role === "admin" && adminCount <= 1) {
    return NextResponse.json({ error: "At least one admin must remain" }, { status: 400 })
  }

  await db.user.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
