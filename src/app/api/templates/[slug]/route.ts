import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { findTemplate } from "@/lib/templates"

type Params = { params: Promise<{ slug: string }> }

/** GET /api/templates/[slug] — download a generated workpaper template. */
export async function GET(_req: Request, { params }: Params) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const { slug } = await params
  const tpl = findTemplate(slug)
  if (!tpl) return NextResponse.json({ error: "template not found" }, { status: 404 })

  const buf = await tpl.build()
  return new NextResponse(new Uint8Array(buf), {
    headers: {
      "Content-Type": tpl.mime,
      "Content-Disposition": `attachment; filename="auditedge-${tpl.slug}.${tpl.ext}"`,
      "Cache-Control": "no-store",
    },
  })
}
