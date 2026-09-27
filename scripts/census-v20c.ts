import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const courses = await db.course.findMany({ include: { modules: { include: { lessons: true } } } })
  let hist: Record<string, number> = {}
  const thinList: { code: string; src: string; title: string; body: number }[] = []
  for (const c of courses) for (const m of c.modules) for (const l of m.lessons) {
    if (l.type !== "lesson") continue
    const content = JSON.parse(l.content) as any
    const bodyLen = (content.sections || []).reduce((a: number, s: any) => a + (s.body || "").length, 0)
    const bucket = bodyLen < 200 ? "<200" : bodyLen < 500 ? "200-500" : bodyLen < 1200 ? "500-1200" : ">=1200"
    hist[bucket] = (hist[bucket] || 0) + 1
    if (bodyLen < 300) thinList.push({ code: c.code, src: c.sourcePlatform || "in-house", title: l.title, body: bodyLen })
  }
  console.log("body-length histogram:", JSON.stringify(hist))
  console.log("lessons under 300:", thinList.length)
  thinList.slice(0, 12).forEach((t) => console.log(`${t.body}\t${t.code}\t${t.title}`))
  console.log("total courses:", courses.length)
}
main().then(() => db.$disconnect())
