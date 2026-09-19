import { PrismaClient } from "@prisma/client"
import { randomBytes } from "crypto"

const db = new PrismaClient()

async function main() {
  const admin = await db.user.findFirst({ where: { role: "admin" }, orderBy: { xp: "desc" } })
  if (!admin) throw new Error("no admin user found")
  const token = randomBytes(32).toString("hex")
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours
  await db.session.create({ data: { token, userId: admin.id, expiresAt } })
  console.log(`TOKEN=${token}`)
  console.log(`ADMIN=${admin.name} <${admin.email}> role=${admin.role}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
