import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  await db.reviewItem.updateMany({ data: { dueAt: new Date(Date.now() - 60_000) } })
  const count = await db.reviewItem.count({ where: { dueAt: { lte: new Date() } } })
  console.log("cards now due:", count)
}
main().then(() => db.$disconnect())
