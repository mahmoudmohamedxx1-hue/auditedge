import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const courses = await db.course.findMany({ where: { sourcePlatform: "" }, orderBy: { order: "asc" }, include: { modules: { include: { lessons: { orderBy: { order: "asc" } } } } } })
  for (const c of courses) {
    console.log(`\n## ${c.code} — ${c.title}`)
    for (const m of c.modules) {
      console.log(`# ${m.title}`)
      for (const l of m.lessons) console.log(`${l.type === "quiz" ? "[Q]" : "[L]"} ${l.title}`)
    }
  }
}
main().then(() => db.$disconnect())
