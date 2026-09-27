import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const lessons = await db.lesson.findMany({ where: { title: { contains: "بشكل عملي" } }, select: { title: true } })
  lessons.forEach((l) => console.log(JSON.stringify(l.title)))
  const course = await db.course.findFirst({ where: { code: "YT-LVHL" } })
  const mods = await db.module.findMany({ where: { courseId: course!.id }, include: { lessons: true } })
  for (const m of mods) {
    const thin = m.lessons.filter((l) => JSON.parse(l.content).sections?.length < 2)
    if (thin.length) thin.forEach((l) => console.log("THIN:", JSON.stringify(l.title), JSON.parse(l.content).sections?.length))
  }
}
main().then(() => db.$disconnect())
