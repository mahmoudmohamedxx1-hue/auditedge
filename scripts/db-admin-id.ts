import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
async function main() {
  const admin = await db.user.findFirst({ where: { role: "admin" } })
  console.log(admin?.id ?? "NOT_FOUND")
}
main().finally(() => db.$disconnect())
