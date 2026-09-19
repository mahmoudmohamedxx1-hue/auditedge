import { PrismaClient } from '@prisma/client'
import { fetchPlaylist } from '../src/lib/youtube'
const db = new PrismaClient()
const CANDIDATES = [
  // IFRS in Arabic
  ["PLw7BcZ9DXQcBnevMKTzHpxNL9Z1VLOYp_", "CertIFR شهادة المعايير الدولية للتقارير المالية"],
  ["PLj6g87I4C7yRlBGRpaSU3m3OFTF-fTSij", "كورس معايير المحاسبة الدولية IFRS المجانى"],
  ["PLORzSxoXX4ut10rICf68r-cTJCcWP4FfW", "IFRS Diploma Abdalla Abdelnaim"],
  ["PLnNt-7uefZIkPB9mxqraqeFYmWgTeGpoU", "IFRS Certificate"],
  ["PLp-vVgp6zgmDZgkDiN8AwbH8Rzbd_FDot", "كورس IFRS كامل بالعربي"],
  // Auditing
  ["PL5LkH0wbMBsswKbU6JoHojzmkwlnEyEdm", "معايير التدقيق الداخلي العالمية 2024/2025"],
  ["PL_a6OcyEJVukJ07O5fWiIVM9BmbtptUii", "المراجع الداخلي المعتمد CIA ج1"],
  ["PLpwHU9rNXAVv6k9TaA6GWdDKsfQmecUDU", "CISA مدقق نظم المعلومات"],
  ["PLN2rfpAu5N5jqDGKDG95HVS9-XgoKl2QL", "Internal Auditor المراجع الداخلي"],
  // Accounting / tax
  ["PL2MXY0X4flhkVOp5ymt7Mse6wrPIsyX2R", "شرح كل انواع محاسبة الضرائب — حسام سعد"],
  ["PLTqx_awvJrAF2STUIoo7aZa1pdlkGPP35", "شرح قانون القيمة المضافة"],
  ["PL__sFii8qz1lAV7uuBj3T53MRiIj-_SDm", "شرح القيمة المضافة مصر"],
  ["PLySiPMvmEyCTG5EThKH8s6mHTYkctPsj8", "دورة مبادئ المحاسبة المالية"],
  ["PLD9Cas-F5xUqlXhQZsfXgdzgHsVreoLmL", "كورس محاسبة مالية من الصفر 2024"],
]
async function main() {
  const existing = new Set((await db.course.findMany({ select: { sourceUrl: true } })).map(c => c.sourceUrl).filter(Boolean))
  console.log('ALREADY IMPORTED:', existing.size, 'playlists\n')
  for (const [id, label] of CANDIDATES) {
    const url = `https://www.youtube.com/playlist?list=${id}`
    if (existing.has(url)) { console.log(`DUP  ${label} -> already imported`); continue }
    try {
      const pl = await fetchPlaylist(id)
      const withDur = pl.videos.filter(v => v.durationMin && v.durationMin > 0)
      const totalMin = Math.round(withDur.reduce((s, v) => s + (v.durationMin || 0), 0) / 60)
      const sample = pl.videos.slice(0, 3).map(v => v.title.slice(0, 45)).join(' | ')
      console.log(`OK   ${label}\n     list=${id} videos=${pl.videos.length} durKnown=${withDur.length} totalMin=${totalMin} (${(totalMin/60).toFixed(1)}h)\n     channel=? sample: ${sample}`)
    } catch (e) { console.log(`FAIL ${label} -> ${(e as Error).message.slice(0, 90)}`) }
  }
}
main().finally(() => db.$disconnect())
