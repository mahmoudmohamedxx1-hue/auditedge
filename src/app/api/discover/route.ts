import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/audit-server"
import {
  importExternalCourse,
  importPlaylistAsCourse,
  searchFreeCourses,
  type Platform,
} from "@/lib/discover"

const PLATFORMS: Platform[] = ["coursera", "edx", "mit-ocw", "openstax", "youtube"]

export async function GET(req: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

  const q = req.nextUrl.searchParams.get("q")?.trim() ?? ""
  if (!q) return NextResponse.json({ results: [] })

  try {
    const results = await searchFreeCourses(q)
    return NextResponse.json({ results })
  } catch (e) {
    console.error("discover search failed:", e instanceof Error ? e.message : e)
    return NextResponse.json({ error: "Search failed — try again in a moment" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

  try {
    const body = await req.json()
    const action = String(body.action ?? "")

    if (action === "import") {
      const item = body.item as {
        platform?: string
        title?: string
        url?: string
        snippet?: string
        category?: string
      }
      if (!item?.url || !item?.title) {
        return NextResponse.json({ error: "Missing course details" }, { status: 400 })
      }
      if (!PLATFORMS.includes(item.platform as Platform)) {
        return NextResponse.json({ error: "Unknown platform" }, { status: 400 })
      }
      const result = await importExternalCourse({
        platform: item.platform as Platform,
        title: String(item.title),
        url: String(item.url),
        snippet: String(item.snippet ?? ""),
        category: typeof item.category === "string" && item.category ? item.category : undefined,
      })
      if (!result.ok) {
        // duplicates are conflicts, not bad requests — the client can react differently
        const status = result.error.includes("already in the catalog") ? 409 : 400
        return NextResponse.json({ error: result.error }, { status })
      }
      return NextResponse.json(result)
    }

    if (action === "import-playlist") {
      const url = String(body.url ?? "")
      if (!url) return NextResponse.json({ error: "Paste a YouTube playlist link first" }, { status: 400 })
      const result = await importPlaylistAsCourse(url, {
        category:
          typeof body.category === "string" && body.category ? body.category : undefined,
        title: typeof body.title === "string" && body.title ? String(body.title) : undefined,
        maxVideos: Number(body.maxVideos) > 0 ? Number(body.maxVideos) : undefined,
      })
      if (!result.ok) {
        const status = result.error.includes("already in the catalog") ? 409 : 400
        return NextResponse.json({ error: result.error }, { status })
      }
      return NextResponse.json(result)
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
