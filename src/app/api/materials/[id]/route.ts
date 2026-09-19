import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { db } from "@/lib/db"
import { requireAdminSession } from "@/lib/auth"
import { parseAttachments } from "@/lib/audit-server"
import { invalidateLibraryIndex } from "@/lib/ai"

const UPLOAD_DIR = path.join(process.cwd(), "upload", "materials")

const CATEGORIES = new Set([
  "Reference", "Standards", "Egyptian Standards", "IFRS",
  "Templates", "Working Papers", "Policies",
])

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
    const material = await db.material.findUnique({ where: { id } })
    if (!material) return NextResponse.json({ error: "Not found" }, { status: 404 })

    const data: Record<string, string> = {}
    if (typeof body.title === "string" && body.title.trim()) data.title = body.title.trim()
    if (typeof body.description === "string") data.description = body.description.trim()
    if (typeof body.category === "string" && CATEGORIES.has(body.category.trim())) {
      data.category = body.category.trim()
    }
    if (Object.keys(data).length) {
      await db.material.update({ where: { id }, data })
      // the RAG search index fingerprints count+createdAt — a rename must be
      // visible to library search immediately, not after the next upload
      invalidateLibraryIndex()
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("material PATCH failed", e)
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

  const material = await db.material.findUnique({ where: { id } })
  if (!material) return NextResponse.json({ ok: true })

  // detach from every lesson that references it — pre-filtered with a quoted
  // substring match so we only load the handful of affected lessons (not all 900+)
  const lessons = await db.lesson.findMany({
    where: { attachments: { contains: `"${id}"` } },
  })
  for (const lesson of lessons) {
    const ids = parseAttachments(lesson.attachments)
    if (ids.includes(id)) {
      await db.lesson.update({
        where: { id: lesson.id },
        data: { attachments: JSON.stringify(ids.filter((x) => x !== id)) },
      })
    }
  }

  await db.material.delete({ where: { id } })
  try {
    await fs.unlink(path.join(UPLOAD_DIR, material.fileName))
  } catch {
    // file already gone — fine
  }
  return NextResponse.json({ ok: true })
}
