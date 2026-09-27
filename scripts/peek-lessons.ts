import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  for (const title of ["Workshop: The Covenant Winter", "Amendments, Completion & Archival Discipline"]) {
    const l = await db.lesson.findFirst({ where: { title } })
    if (!l) continue
    const c = JSON.parse(l.content) as any
    console.log(`\n### ${title} — sections: ${c.sections.map((s: any) => s.heading).join(" | ")}`)
    console.log("keyPoints:", c.keyPoints.length, "| example:", !!c.example, "| takeaway len:", (c.takeaway || "").length)
  }
}
main().then(() => db.$disconnect())
