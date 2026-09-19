import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()
async function main() {
  const [users, courses, modules, lessons, materials, quizzes, certs, convos] = await Promise.all([
    db.user.findMany(),
    db.course.findMany({ include: { modules: { include: { lessons: true } } } }),
    db.module.count(),
    db.lesson.count(),
    db.material.findMany(),
    db.quiz.count(),
    db.certificate.count(),
    db.aiConversation.count(),
  ])
  console.log('USERS:', users.map(u => `${u.name} (${u.role}, isDemo=${u.isDemo}, xp=${u.xp})`))
  console.log('COUNTS: courses=' + courses.length, 'modules=' + modules, 'lessons=' + lessons, 'quizzes=' + quizzes, 'certs=' + certs, 'aiConvos=' + convos, 'materials=' + materials.length)
  console.log('\nCOURSES:')
  for (const c of courses.sort((a,b)=>a.order-b.order)) {
    const vcount = c.modules.reduce((s,m)=>s+m.lessons.length,0)
    console.log(` [${c.published?'P':'D'}] ${c.code} | ${c.title.slice(0,60)} | cat=${c.category} | plat=${c.sourcePlatform||'in-house'} | cpe=${c.cpeHours} | lessons=${vcount} | rating=${c.rating}(${c.ratingCount}) | students=${c.studentsCount}`)
  }
  console.log('\nMATERIAL CATEGORIES:')
  const cats: Record<string, number> = {}
  for (const m of materials) cats[m.category] = (cats[m.category]||0)+1
  console.log(cats)
  console.log('\nNO-TEXT MATERIALS (RAG-dead):', (await db.material.findMany({ where: { textContent: '' }, select: { title: true, hasFile: true } })).map(m=>m.title.slice(0,50)))
  const orph = await db.lessonProgress.count()
  console.log('progress rows:', orph)
}
main().finally(()=>db.$disconnect())
