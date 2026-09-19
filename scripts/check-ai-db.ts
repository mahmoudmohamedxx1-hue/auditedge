import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function main() {
  const convos = await db.aiConversation.findMany({ orderBy: { createdAt: "asc" } })
  for (const c of convos) {
    const msgs = await db.aiMessage.findMany({
      where: { conversationId: c.id },
      orderBy: { createdAt: "asc" },
    })
    console.log(`\n=== ${c.id} | ${c.title}`)
    for (const m of msgs) {
      const src = JSON.parse(m.sources || "[]").length
      console.log(`  [${m.role}] (${m.content.length} chars, ${src} sources) ${m.content.slice(0, 70).replace(/\n/g, " ")}`)
    }
  }
  const users = await db.user.findMany({ select: { email: true, role: true, passwordHash: true } })
  console.log("\nUsers:", users.map((u) => `${u.email} (${u.role}${u.passwordHash ? ", pw" : ""})`).join(", "))
}

main().finally(() => db.$disconnect())
