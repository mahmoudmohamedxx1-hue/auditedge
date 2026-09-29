import { VIDEO_COURSES } from "../../src/lib/video-courses"
console.log("total:", VIDEO_COURSES.length)
const byCat: Record<string, number> = {}
for (const c of VIDEO_COURSES) byCat[c.category] = (byCat[c.category] ?? 0) + 1
console.log(byCat)
console.log("\n-- courses with <=3 lessons (single/short-lecture risk) --")
for (const c of VIDEO_COURSES) {
  const n = c.lessons.length
  if (n <= 3) console.log(`${String(n).padStart(2)} lessons | ${c.id} | ${c.channel} | ${c.language} | ${c.hours} | ${c.titleEn}`)
}
console.log("\n-- all courses lesson counts --")
for (const c of VIDEO_COURSES) console.log(`${String(c.lessons.length).padStart(2)} | ${c.id.padEnd(30)} | ${c.category.padEnd(10)} | ${c.language} | ${c.hours.padEnd(9)} | ${c.titleEn.slice(0,60)}`)
