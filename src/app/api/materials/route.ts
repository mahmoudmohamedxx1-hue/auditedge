import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { randomUUID } from "crypto"
import { db } from "@/lib/db"
import { getSessionUser, requireAdminSession } from "@/lib/auth"
import { materialsForClient } from "@/lib/audit-server"
import { extractTextFromFile } from "@/lib/extract"

export const runtime = "nodejs"

const UPLOAD_DIR = path.join(process.cwd(), "upload", "materials")
const MAX_BYTES = 80 * 1024 * 1024 // 80 MB

const ALLOWED_EXT = new Set([
  ".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx",
  ".csv", ".txt", ".md", ".png", ".jpg", ".jpeg", ".webp", ".gif",
  ".mp4", ".webm", ".zip",
])

const CATEGORIES = new Set([
  "Reference", "Standards", "Egyptian Standards", "IFRS",
  "Templates", "Working Papers", "Policies",
])

export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  return NextResponse.json(await materialsForClient())
}

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdminSession()
    if (!admin) {
      return NextResponse.json({ error: "Only admins can upload materials" }, { status: 403 })
    }

    const form = await req.formData()
    const file = form.get("file")
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "File exceeds the 80 MB limit" }, { status: 400 })
    }

    const ext = path.extname(file.name).toLowerCase()
    if (!ALLOWED_EXT.has(ext)) {
      return NextResponse.json(
        { error: `File type "${ext || "unknown"}" is not supported` },
        { status: 400 }
      )
    }

    const title = String(form.get("title") ?? "").trim() || path.basename(file.name, ext)
    const description = String(form.get("description") ?? "").trim()
    const categoryRaw = String(form.get("category") ?? "Reference")
    const category = CATEGORIES.has(categoryRaw) ? categoryRaw : "Reference"

    await fs.mkdir(UPLOAD_DIR, { recursive: true })
    const storedName = `${randomUUID()}${ext}`
    const bytes = Buffer.from(await file.arrayBuffer())
    await fs.writeFile(path.join(UPLOAD_DIR, storedName), bytes)

    // extract text so the AI tutor can search this material (RAG index)
    let textContent = ""
    try {
      const extracted = await extractTextFromFile(bytes, ext)
      textContent = extracted?.text ?? ""
    } catch {
      textContent = "" // never block the upload on extraction failure
    }

    const material = await db.material.create({
      data: {
        title,
        description,
        category,
        fileName: storedName,
        originalName: file.name,
        mimeType: file.type || "application/octet-stream",
        sizeBytes: file.size,
        textContent,
        uploadedById: admin.id,
      },
    })

    return NextResponse.json({ id: material.id, ok: true })
  } catch (e) {
    console.error("upload failed", e)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
