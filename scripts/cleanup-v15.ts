/** Pristine handoff: remove test AI conversations created during v15 testing. */
import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

async function main() {
  const convos = await db.aiConversation.findMany({ orderBy: { createdAt: "asc" } })
  console.log(`conversations before cleanup: ${convos.length}`)
  for (const c of convos) {
    console.log(`  deleting: ${c.id} — "${c.title.slice(0, 60)}"`)
    await db.aiConversation.delete({ where: { id: c.id } })
  }
  const after = await db.aiConversation.count()
  const users = await db.user.count()
  const xp = await db.user.aggregate({ _max: { xp: true } })
  const enrollments = await db.enrollment.count()
  console.log(`after: ${after} conversations · ${users} user(s) · max XP ${xp._max.xp} · ${enrollments} enrollments`)
}
main().then(() => db.$disconnect())
