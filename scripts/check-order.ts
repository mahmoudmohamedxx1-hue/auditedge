import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()
async function main() {
  const cs = await db.course.findMany({ orderBy: { order: 'asc' }, select: { code: true, title: true, order: true, featured: true } })
  for (const c of cs) console.log(String(c.order).padStart(3), c.featured ? 'FEATURED' : '        ', (c.code.length>0?"":""), c.code, c.title.slice(0, 50))
}
main().finally(() => db.$disconnect())
