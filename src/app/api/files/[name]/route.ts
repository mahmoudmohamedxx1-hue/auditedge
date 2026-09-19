import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { getSessionUser } from "@/lib/auth"
import { db } from "@/lib/db"

const UPLOAD_DIR = path.join(process.cwd(), "upload", "materials")

const MIME_BY_EXT: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".csv": "text/csv",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".zip": "application/zip",
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const { name } = await params
  // prevent path traversal — only bare file names allowed
  const safe = path.basename(name)
  if (safe !== name || safe.includes("..") || safe.startsWith(".")) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 })
  }
  const filePath = path.join(UPLOAD_DIR, safe)
  try {
    const data = await fs.readFile(filePath)
    const ext = path.extname(safe).toLowerCase()
    const contentType = MIME_BY_EXT[ext] ?? "application/octet-stream"
    const download = req.nextUrl.searchParams.get("download") === "1"
    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(data.length),
        "Cache-Control": "private, max-age=3600",
        "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${encodeURIComponent(safe)}"`,
      },
    })
  } catch {
    // Not a file on disk — it may be an ingested standards material (DB-only
    // record with hasFile=false). Redirect to its official source so citation
    // links from the AI tutor work for every library document.
    try {
      const material = await db.material.findUnique({ where: { fileName: safe } })
      // only redirect to a public http(s) source — never file:// or other schemes
      if (material?.sourceUrl && /^https?:\/\//i.test(material.sourceUrl)) {
        return NextResponse.redirect(material.sourceUrl, 302)
      }
    } catch {
      // fall through to 404
    }
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }
}
