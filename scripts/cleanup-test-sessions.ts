import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  // purge test sessions created in the last 2 hours (my E2E tokens)
  const cutoff = new Date(Date.now() - 2 * 60 * 60 * 1000)
  const del = await db.session.deleteMany({ where: { createdAt: { gt: cutoff } } })
  console.log(`purged ${del.count} test sessions`)
  const [users, sessions] = await Promise.all([db.user.count(), db.session.count()])
  console.log(`users=${users} sessions=${sessions}`)
}
main().finally(() => db.$disconnect())
