/** v26 — replace the single-lecture "fragment" courses with FULL multi-video
 *  courses sourced from real, complete Arabic playlists (the learner's ask:
 *  "courses that are only one lecture — not the full picture").
 *
 *  Each course below is a complete playlist: every lesson id, title and
 *  duration is fetched live from the playlist page (keyless), then emitted
 *  as a ready-to-paste TS block. Totals recomputed from real durations.
 *
 *  Run: bunx tsx scripts/v26/gen-courses.ts */
import { fetchPlaylist } from "../../src/lib/youtube"

type Spec = {
  id: string
  playlist: string
  titleEn: string
  titleAr: string
  channel: string
  category: "acca" | "cpa" | "cma" | "ifrs"
  level: "Beginner" | "Intermediate" | "Advanced"
  language: "AR" | "EN"
  descEn: string
  descAr: string
  /** drop leading channel-promo videos by exact title substring */
  drop?: string[]
}

const SPECS: Spec[] = [
  {
    id: "cma-p1-amro",
    playlist: "PLh1eDBFE-QpnwGjdU_6TsTUPHYjYQtd7-",
    titleEn: "CMA Part 1 — the complete course (all 13 units)",
    titleAr: "CMA الجزء الأول — الكورس الكامل (13 وحدة)",
    channel: "Amro Taison",
    category: "cma",
    level: "Intermediate",
    language: "AR",
    descEn:
      "The whole CMA Part 1 in one playlist — 30 lectures walking every unit of the 2020-onwards syllabus (financial reporting, planning, performance, cost management, internal controls…), taught in Arabic by Amro Abdelmeguid.",
    descAr:
      "منهج CMA الجزء الأول كاملًا في قائمة واحدة — 30 محاضرة تغطي كل وحدات المنهج (التقارير المالية والتخطيط والأداء وإدارة التكاليف والرقابة الداخلية…) بشرح عمرو عبدالمجيد.",
  },
  {
    id: "cma-p2-amro",
    playlist: "PLh1eDBFE-QpkvR4LEQQOXZTpH9lgWOdft",
    titleEn: "CMA Part 2 — the complete course (all 10 units)",
    titleAr: "CMA الجزء الثاني — الكورس الكامل (10 وحدات)",
    channel: "Amro Taison",
    category: "cma",
    level: "Advanced",
    language: "AR",
    descEn:
      "The companion Part 2 course — 19 long lectures covering financial statement analysis, corporate finance, decision analysis, risk management and investment decisions, unit by unit, in Arabic.",
    descAr:
      "الكورس المكمّل للجزء الثاني — 19 محاضرة طويلة تغطي تحليل القوائم المالية وتمويل الشركات وتحليل القرارات وإدارة المخاطر وقرارات الاستثمار، وحدة وحدة، بالعربية.",
  },
  {
    id: "cma-p1-efham",
    playlist: "PLoCHLF_6E9ixKDK8_hdKSNTF3DHJlnWWS",
    titleEn: "CMA Part 1 (2026 edition) — Section A in depth",
    titleAr: "CMA الجزء الأول (نسخة 2026) — القسم A بعمق",
    channel: "Efham CMA",
    category: "cma",
    level: "Beginner",
    language: "AR",
    descEn:
      "The 2026-edition walk-through of Section A — 45+ short focused sessions from the financial statements to deferred taxes, each followed by solved question sessions. Perfect alongside the full Part 1 course.",
    descAr:
      "شرح نسخة 2026 للقسم A — أكثر من 45 جلسة قصيرة مركزة من القوائم المالية حتى الضرائب المؤجلة، تتبعها جلسات حل أسئلة. مثالي بجانب كورس الجزء الأول الكامل.",
    drop: ["EfhamCMA online course platform", "Bonus فكرة جدول"],
  },
  {
    id: "cpa-aud-amro",
    playlist: "PLh1eDBFE-QpkRujqoJ3M1QhO7F4B1fwpI",
    titleEn: "CPA AUD — the complete audit course (8 modules)",
    titleAr: "CPA AUD — كورس المراجعة الكامل (8 فصول)",
    channel: "Amro Taison",
    category: "cpa",
    level: "Advanced",
    language: "AR",
    descEn:
      "The full CPA Auditing & Attestation course in Arabic — 21 lectures across all 8 modules: engagement acceptance, risk, evidence, reviews of the engagement… the whole AUD blueprint.",
    descAr:
      "كورس مادة المراجعة والتأكيد لشهادة المحاسب القانوني الأمريكي كاملًا بالعربية — 21 محاضرة على مدار الفصول الثمانية: قبول الارتباط والمخاطر والأدلة ومراجعات الارتباط… خريطة AUD بأكملها.",
  },
  {
    id: "cpa-far-amro",
    playlist: "PLh1eDBFE-QpmGHueVXbHN07enm45gsmCq",
    titleEn: "CPA FAR — the complete financial course (F2–F9)",
    titleAr: "CPA FAR — الكورس المالي الكامل (F2–F9)",
    channel: "Amro Taison",
    category: "cpa",
    level: "Advanced",
    language: "AR",
    descEn:
      "The full CPA Financial Accounting & Reporting course in Arabic — 29 lectures from the conceptual framework and statements through to the final revision, module by module.",
    descAr:
      "كورس المحاسبة والتقارير المالية لشهادة المحاسب القانوني كاملًا بالعربية — 29 محاضرة من الإطار المفاهيمي والقوائم حتى المراجعة النهائية، فصلًا فصلًا.",
  },
  {
    id: "dipifr-abdelnaim",
    playlist: "PLORzSxoXX4ut10rICf68r-cTJCcWP4FfW",
    titleEn: "ACCA DipIFR — the full diploma (every standard)",
    titleAr: "دبلومة ACCA DipIFR — الدبلومة كاملة (كل المعايير)",
    channel: "Abdalla Abdelnaim",
    category: "ifrs",
    level: "Advanced",
    language: "AR",
    descEn:
      "The entire IFRS diploma as taught by Abdalla Abdelnaim — 51 lectures, 100+ hours, every standard on the DipIFR syllabus: IAS 16/36/37/38/19/12/21/2/33, IFRS 16/3/2/5/13, financial instruments, consolidation (Ch 20–24) and past-paper solving.",
    descAr:
      "دبلومة المعايير الدولية كاملة مع عبدالله عبدالنعيم — 51 محاضرة وأكثر من 100 ساعة تغطي كل معايير المنهج: IAS 16/36/37/38/19/12/21/2/33 وIFRS 16/3/2/5/13 والأدوات المالية والتجميع (الفصول 20–24) وحل الامتحانات السابقة.",
  },
  {
    id: "certifr-planet-full",
    playlist: "PLw7BcZ9DXQcBnevMKTzHpxNL9Z1VLOYp_",
    titleEn: "CertIFR — the complete certificate course (51 sessions)",
    titleAr: "شهادة CertIFR — الكورس الكامل (51 جلسة)",
    channel: "The Accounting Planet",
    category: "ifrs",
    level: "Intermediate",
    language: "AR",
    descEn:
      "The full Certificate in IFRS course, session by session — structure of the IASB, IAS 1/8/16/36/38, IFRS 15/16/9/3/10/13, first-time adoption, small entities, plus MCQ drills after each standard.",
    descAr:
      "كورس شهادة المعايير الدولية للتقارير المالية كاملًا، جلسة بجلسة — هيئة المعايير ومعايير IAS 1/8/16/36/38 وIFRS 15/16/9/3/10/13 والتطبيق الأول والمنشآت الصغيرة، مع تدريبات أسئلة بعد كل معيار.",
  },
  {
    id: "acca-f3-sowmya",
    playlist: "PLiq7sxhrk-Dhfav136HggaiGeHHHqhzQk",
    titleEn: "ACCA FA (F3) — the complete chapter course",
    titleAr: "ACCA FA (F3) — الكورس الكامل فصلًا فصلًا",
    channel: "Sowmya Sasun",
    category: "acca",
    level: "Beginner",
    language: "EN",
    descEn:
      "Every chapter of the ACCA FA (F3) syllabus in order — from the conceptual framework and double entry through to consolidation and cash flows, taught chapter by chapter with worked examples.",
    descAr:
      "كل فصول منهج ACCA FA (F3) بالترتيب — من الإطار المفاهيمي والقيد المزدوج حتى التجميع والتدفقات النقدية، فصلًا فصلًا بأمثلة محلولة.",
  },
]

function fmtLen(min: number): string {
  const h = Math.floor(min / 60)
  const m = Math.round(min % 60)
  return h > 0 ? `${h}:${String(m).padStart(2, "0")}:00` : `${m}:00`
}

async function main() {
  for (const spec of SPECS) {
    let info = null
    // the playlist page sometimes serves a variant whose ytInitialData lacks
    // duration badges — refetch until durations come back (max 4 attempts)
    for (let attempt = 0; attempt < 4; attempt++) {
      info = await fetchPlaylist(spec.playlist)
      if (info && info.videos.length && info.videos.every((v) => (v.durationMin ?? 0) > 0)) break
      info = info && info.videos.length ? info : null
      if (info) break // real content but zero-durations on ALL attempts is handled below
    }
    if (!info) {
      console.error(`✗ ${spec.id}: playlist fetch failed`)
      continue
    }
    // guard: a fetch where durations are missing (0 min everywhere) would
    // fabricate "0:00" lengths — refetch a few times before giving in
    let tries = 0
    while (info.videos.some((v) => (v.durationMin ?? 0) <= 0) && tries < 4) {
      tries++
      const retry = await fetchPlaylist(spec.playlist)
      if (retry && retry.videos.every((v) => (v.durationMin ?? 0) > 0)) {
        info = retry
        break
      }
    }
    if (info.videos.some((v) => (v.durationMin ?? 0) <= 0)) {
      console.error(`✗ ${spec.id}: durations missing after retries — SKIPPING (would fabricate 0:00 lengths)`)
      continue
    }
    let videos = info.videos
    if (spec.drop?.length) {
      videos = videos.filter((v) => !spec.drop!.some((d) => (v.title ?? "").includes(d)))
    }
    const totalMin = videos.reduce((s, v) => s + (v.durationMin ?? 0), 0)
    const hours = `~${(totalMin / 60).toFixed(1)}h`
    const q = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
    console.log(`\n/* ===== ${spec.id} — ${info.title} (${videos.length} videos, ${hours}) ===== */`)
    console.log(`  {`)
    console.log(`    id: "${spec.id}",`)
    console.log(`    titleEn: "${q(spec.titleEn)}",`)
    console.log(`    titleAr: "${q(spec.titleAr)}",`)
    console.log(`    channel: "${q(spec.channel)}",`)
    console.log(`    category: "${spec.category}",`)
    console.log(`    level: "${spec.level}",`)
    console.log(`    language: "${spec.language}",`)
    console.log(`    hours: "${hours}",`)
    console.log(`    views: "YouTube playlist",`)
    console.log(`    descEn: "${q(spec.descEn)}",`)
    console.log(`    descAr: "${q(spec.descAr)}",`)
    console.log(`    lessons: [`)
    for (const v of videos) {
      console.log(`      { id: "${v.id}", title: "${q((v.title ?? "").trim())}", length: "${fmtLen(v.durationMin ?? 0)}" },`)
    }
    console.log(`    ],`)
    console.log(`  },`)
  }
}

void main()
