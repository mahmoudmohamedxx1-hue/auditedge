/** v27 — real-exam FORMAT blueprints: how each past-paper family is
 *  structured like the REAL professional exam, instead of a flat MCQ list.
 *
 *  Each format mirrors the named exam's section architecture — the CPA's
 *  testlets with task-based simulations, the DipIFR's Section A (objective
 *  tests) + Section B (70-mark scenario questions), ACCA AA's three
 *  sections, the CMA's multiple-choice + essay split, CFA's two timed
 *  sessions — at a scale the app's bank can sit in one sitting, with the
 *  real exam's section WEIGHTINGS preserved.
 *
 *  Families without an entry keep the classic linear sitting (their real
 *  exams are objective-test papers already — e.g. ACCA BT/MA/FA are pure
 *  OT sittings). */

export type FormatSectionMcq = {
  id: string
  kind: "mcq"
  titleEn: string
  titleAr: string
  noteEn: string
  noteAr: string
  /** questions drawn from the paper's bank pool into this section */
  count: number
  /** share of the final score (all sections sum to 1) */
  weight: number
}

export type FormatSectionCr = {
  id: string
  kind: "cr"
  titleEn: string
  titleAr: string
  noteEn: string
  noteAr: string
  /** constructed-response tasks drawn from the family's CR shelf */
  tasks: number
  weight: number
}

export type FormatSection = FormatSectionMcq | FormatSectionCr

export type PaperFormat = {
  family: string
  /** what the REAL exam looks like (shown in the paper-picker dialog) */
  realEn: string
  realAr: string
  sections: FormatSection[]
}

import { paperBase, sittingIndex } from "@/lib/past-papers"
import { crTasksFor } from "@/lib/cr-tasks"

/** Session-side section plan persisted on the ExamSession. */
export type SessionSection = {
  id: string
  kind: "mcq" | "cr"
  titleEn: string
  titleAr: string
  noteEn: string
  noteAr: string
  weight: number
  /** bank question ids (mcq sections) */
  mcqIds?: string[]
  /** CR task ids (cr sections) */
  crTaskIds?: string[]
}

const CPA_NOTE_EN = (n: string) =>
  `The real CPA ${n} exam is a 4-hour, four-testlet paper — two multiple-choice testlets, then task-based simulation testlets, scored 50% MCQ / 50% TBS with no going back between testlets. This sitting mirrors that structure at bench size.`
const CPA_NOTE_AR = (n: string) =>
  `امتحان CPA الحقيقي (${n}) أربع ساعات وأربعة حزم — حزمتان اختيار من متعدد ثم حزم محاكاة قائمة على المهام، بتوزيع ٥٠٪ للاختيارات و٥٠٪ للمحاكاة دون رجوع بين الحزم. هذه الجلسة تحاكي الهيكل ذاته بمقاس مصغّر.`

export const PAPER_FORMATS: Record<string, PaperFormat> = {
  /* ---------------- CPA — AUD / FAR / REG (testlets + TBS) ---------------- */
  "cpa-aud": {
    family: "cpa-aud",
    realEn:
      "Real CPA AUD: 4 hours · 72 MCQ in two testlets + 7 task-based simulations · scored 50% MCQ / 50% TBS.",
    realAr:
      "امتحان CPA AUD الحقيقي: ٤ ساعات · ٧٢ سؤال اختيار من متعدد في حزمتين + ٧ محاكاة قائمة على المهام · التقييم ٥٠٪ اختيارات و٥٠٪ محاكاة.",
    sections: [
      {
        id: "t1",
        kind: "mcq",
        titleEn: "Testlet 1 — Multiple choice",
        titleAr: "الحزمة الأولى — اختيار من متعدد",
        noteEn: CPA_NOTE_EN("AUD"),
        noteAr: CPA_NOTE_AR("AUD"),
        count: 12,
        weight: 0.25,
      },
      {
        id: "t2",
        kind: "mcq",
        titleEn: "Testlet 2 — Multiple choice",
        titleAr: "الحزمة الثانية — اختيار من متعدد",
        noteEn: CPA_NOTE_EN("AUD"),
        noteAr: CPA_NOTE_AR("AUD"),
        count: 12,
        weight: 0.25,
      },
      {
        id: "t3",
        kind: "cr",
        titleEn: "Testlet 3 — Task-based simulations",
        titleAr: "الحزمة الثالثة — المحاكاة القائمة على المهام",
        noteEn: CPA_NOTE_EN("AUD"),
        noteAr: CPA_NOTE_AR("AUD"),
        tasks: 3,
        weight: 0.5,
      },
    ],
  },
  "cpa-far": {
    family: "cpa-far",
    realEn:
      "Real CPA FAR: 4 hours · 66 MCQ in two testlets + 8 task-based simulations · scored 50% MCQ / 50% TBS.",
    realAr:
      "امتحان CPA FAR الحقيقي: ٤ ساعات · ٦٦ سؤال اختيار من متعدد في حزمتين + ٨ محاكاة قائمة على المهام · التقييم ٥٠٪ / ٥٠٪.",
    sections: [
      {
        id: "t1",
        kind: "mcq",
        titleEn: "Testlet 1 — Multiple choice",
        titleAr: "الحزمة الأولى — اختيار من متعدد",
        noteEn: CPA_NOTE_EN("FAR"),
        noteAr: CPA_NOTE_AR("FAR"),
        count: 12,
        weight: 0.25,
      },
      {
        id: "t2",
        kind: "mcq",
        titleEn: "Testlet 2 — Multiple choice",
        titleAr: "الحزمة الثانية — اختيار من متعدد",
        noteEn: CPA_NOTE_EN("FAR"),
        noteAr: CPA_NOTE_AR("FAR"),
        count: 12,
        weight: 0.25,
      },
      {
        id: "t3",
        kind: "cr",
        titleEn: "Testlet 3 — Task-based simulations",
        titleAr: "الحزمة الثالثة — المحاكاة القائمة على المهام",
        noteEn: CPA_NOTE_EN("FAR"),
        noteAr: CPA_NOTE_AR("FAR"),
        tasks: 3,
        weight: 0.5,
      },
    ],
  },
  "cpa-reg": {
    family: "cpa-reg",
    realEn:
      "Real CPA REG: 4 hours · 76 MCQ in two testlets + 8 task-based simulations · scored 50% MCQ / 50% TBS.",
    realAr:
      "امتحان CPA REG الحقيقي: ٤ ساعات · ٧٦ سؤال اختيار من متعدد في حزمتين + ٨ محاكاة قائمة على المهام · التقييم ٥٠٪ / ٥٠٪.",
    sections: [
      {
        id: "t1",
        kind: "mcq",
        titleEn: "Testlet 1 — Multiple choice",
        titleAr: "الحزمة الأولى — اختيار من متعدد",
        noteEn: CPA_NOTE_EN("REG"),
        noteAr: CPA_NOTE_AR("REG"),
        count: 12,
        weight: 0.25,
      },
      {
        id: "t2",
        kind: "mcq",
        titleEn: "Testlet 2 — Multiple choice",
        titleAr: "الحزمة الثانية — اختيار من متعدد",
        noteEn: CPA_NOTE_EN("REG"),
        noteAr: CPA_NOTE_AR("REG"),
        count: 12,
        weight: 0.25,
      },
      {
        id: "t3",
        kind: "cr",
        titleEn: "Testlet 3 — Task-based simulations",
        titleAr: "الحزمة الثالثة — المحاكاة القائمة على المهام",
        noteEn: CPA_NOTE_EN("REG"),
        noteAr: CPA_NOTE_AR("REG"),
        tasks: 2,
        weight: 0.5,
      },
    ],
  },

  /* ---------------- IFRS diploma (DipIFR) — Section A + B --------------- */
  "ifrs-dip": {
    family: "ifrs-dip",
    realEn:
      "Real DipIFR: 3 hours 15 min · Section A = 15 objective-test questions (30 marks) · Section B = two 35-mark scenario questions (70 marks).",
    realAr:
      "امتحان DipIFR الحقيقي: ٣ ساعات و١٥ دقيقة · القسم أ = ١٥ سؤالًا موضوعيًا (٣٠ درجة) · القسم ب = سؤالان سيناريو بـ٣٥ درجة لكل منهما (٧٠ درجة).",
    sections: [
      {
        id: "a",
        kind: "mcq",
        titleEn: "Section A — Objective test questions",
        titleAr: "القسم أ — أسئلة موضوعية",
        noteEn: "Single-topic OT items worth 2 marks each — the DipIFR Section A.",
        noteAr: "أسئلة موضوعية أحادية الموضوع بدرجتين لكل سؤال — القسم أ من DipIFR.",
        count: 15,
        weight: 0.3,
      },
      {
        id: "b",
        kind: "cr",
        titleEn: "Section B — Scenario questions (70 marks)",
        titleAr: "القسم ب — أسئلة السيناريو (٧٠ درجة)",
        noteEn: "Multi-task scenario questions combining calculations and written answers, marked by the AI against the certified solutions.",
        noteAr: "أسئلة سيناريو متعددة المهام تجمع الحسابات والإجابات المكتوبة، وتُصحح بالذكاء الاصطناعي وفق الحلول المعتمدة.",
        tasks: 2,
        weight: 0.7,
      },
    ],
  },

  /* ---------------- ACCA FR — Section A + B ------------------------------ */
  "acca-fr": {
    family: "acca-fr",
    realEn:
      "Real ACCA FR: 3 hours 15 min · Section A = 15 OT questions (30 marks) · Section B = two 35-mark scenario questions (70 marks).",
    realAr:
      "امتحان ACCA FR الحقيقي: ٣ ساعات و١٥ دقيقة · القسم أ = ١٥ سؤالًا موضوعيًا (٣٠ درجة) · القسم ب = سؤالان سيناريو بـ٣٥ درجة (٧٠ درجة).",
    sections: [
      {
        id: "a",
        kind: "mcq",
        titleEn: "Section A — Objective test questions",
        titleAr: "القسم أ — أسئلة موضوعية",
        noteEn: "Single-topic OT items worth 2 marks each — the FR Section A.",
        noteAr: "أسئلة موضوعية أحادية الموضوع بدرجتين — القسم أ من FR.",
        count: 15,
        weight: 0.3,
      },
      {
        id: "b",
        kind: "cr",
        titleEn: "Section B — Scenario questions (70 marks)",
        titleAr: "القسم ب — أسئلة السيناريو (٧٠ درجة)",
        noteEn: "Consolidation or single-entity scenario questions with calculations and discussion, AI-marked against the certified solutions.",
        noteAr: "أسئلة سيناريو تجميعية أو لمنشأة واحدة بحسابات ومناقشة، وتُصحح بالذكاء الاصطناعي وفق الحلول المعتمدة.",
        tasks: 2,
        weight: 0.7,
      },
    ],
  },

  /* ---------------- ACCA AA — Sections A + B + C -------------------------- */
  "acca-aa": {
    family: "acca-aa",
    realEn:
      "Real ACCA AA: 3 hours · Section A = 12 OT questions (24 marks) · Section B = three case scenarios with 6 OTs each (36 marks) · Section C = constructed-response questions (40 marks).",
    realAr:
      "امتحان ACCA AA الحقيقي: ٣ ساعات · القسم أ = ١٢ سؤالًا موضوعيًا (٢٤ درجة) · القسم ب = ثلاثة سيناريوهات بستة أسئلة لكل منها (٣٦ درجة) · القسم ج = أسئلة إنشائية (٤٠ درجة).",
    sections: [
      {
        id: "a",
        kind: "mcq",
        titleEn: "Section A — Objective test questions",
        titleAr: "القسم أ — أسئلة موضوعية",
        noteEn: "Standalone 2-mark OT items across the AA syllabus.",
        noteAr: "أسئلة موضوعية مستقلة بدرجتين عبر منهج AA.",
        count: 12,
        weight: 0.24,
      },
      {
        id: "b",
        kind: "mcq",
        titleEn: "Section B — Case-style OT questions",
        titleAr: "القسم ب — أسئلة سيناريو موضوعية",
        noteEn: "Scenario-based OT batteries in the style of the AA case questions.",
        noteAr: "بطاريات أسئلة موضوعية قائمة على السيناريو بنمط أسئلة الحالة في AA.",
        count: 12,
        weight: 0.36,
      },
      {
        id: "c",
        kind: "cr",
        titleEn: "Section C — Constructed response (40 marks)",
        titleAr: "القسم ج — الإجابات الإنشائية (٤٠ درجة)",
        noteEn: "Written audit answers marked by the AI against certified solutions.",
        noteAr: "إجابات مراجعة مكتوبة تصححها الذكاء الاصطناعي وفق الحلول المعتمدة.",
        tasks: 2,
        weight: 0.4,
      },
    ],
  },

  /* ---------------- ACCA SBL / SBR — pure scenario papers ---------------- */
  "acca-sbl": {
    family: "acca-sbl",
    realEn:
      "Real ACCA SBL: 4 hours · ONE integrated case study — a single 80-mark scenario with exhibits and professional-skills marks. No MCQs at all.",
    realAr:
      "امتحان ACCA SBL الحقيقي: ٤ ساعات · دراسة حالة واحدة متكاملة — سيناريو واحد بـ٨٠ درجة مع ملاحق وعلامات المهارات المهنية، دون أسئلة اختيار من متعدد إطلاقًا.",
    sections: [
      {
        id: "case1",
        kind: "cr",
        titleEn: "Case tasks I",
        titleAr: "مهام الحالة الأولى",
        noteEn: "Governance and leadership tasks from the integrated case.",
        noteAr: "مهام الحوكمة والقيادة من الحالة المتكاملة.",
        tasks: 1,
        weight: 0.5,
      },
      {
        id: "case2",
        kind: "cr",
        titleEn: "Case tasks II",
        titleAr: "مهام الحالة الثانية",
        noteEn: "Technology, data and change tasks from the integrated case.",
        noteAr: "مهام التكنولوجيا والبيانات والتغيير من الحالة المتكاملة.",
        tasks: 1,
        weight: 0.5,
      },
    ],
  },
  "acca-sbr": {
    family: "acca-sbr",
    realEn:
      "Real ACCA SBR: 4 hours · two 50-mark questions (one consolidation, one current-issues scenario) plus professional-skills marks. No MCQs.",
    realAr:
      "امتحان ACCA SBR الحقيقي: ٤ ساعات · سؤالان بـ٥٠ درجة (أحدهما تجميعي والآخر سيناريو قضايا معاصرة) مع علامات المهارات المهنية، دون أسئلة اختيار من متعدد.",
    sections: [
      {
        id: "q1",
        kind: "cr",
        titleEn: "Question 1 — Consolidation scenario (50 marks)",
        titleAr: "السؤال ١ — سيناريو التجميع (٥٠ درجة)",
        noteEn: "Complex consolidation issues, marked by the AI against the certified solution.",
        noteAr: "مسائل تجميع معقدة تصححها الذكاء الاصطناعي وفق الحل المعتمد.",
        tasks: 1,
        weight: 0.5,
      },
      {
        id: "q2",
        kind: "cr",
        titleEn: "Question 2 — Current issues scenario (50 marks)",
        titleAr: "السؤال ٢ — سيناريو القضايا المعاصرة (٥٠ درجة)",
        noteEn: "Current developments and ethical dimensions of reporting.",
        noteAr: "المستجدات والأبعاد الأخلاقية لإعداد التقارير.",
        tasks: 1,
        weight: 0.5,
      },
    ],
  },

  /* ---------------- CMA — MCQ + essay ------------------------------------ */
  "cma-p1": {
    family: "cma-p1",
    realEn:
      "Real CMA Part 1: 3 hours of 100 MCQs (75% of the score) + 30 minutes of two essay scenarios (25%).",
    realAr:
      "امتحان CMA الجزء الأول الحقيقي: ٣ ساعات من ١٠٠ سؤال اختيار من متعدد (٧٥٪ من الدرجة) + ٣٠ دقيقة لسيناريوهي مقال (٢٥٪).",
    sections: [
      {
        id: "mcq",
        kind: "mcq",
        titleEn: "Part 1 — Multiple choice (75%)",
        titleAr: "الجزء الأول — اختيار من متعدد (٧٥٪)",
        noteEn: "The 100-question multiple-choice screen, scaled to a bench sitting.",
        noteAr: "شاشة المئة سؤال اختيار من متعدد بمقاس مصغّر.",
        count: 18,
        weight: 0.75,
      },
      {
        id: "essay",
        kind: "cr",
        titleEn: "Part 2 — Essay scenarios (25%)",
        titleAr: "الجزء الثاني — سيناريوهات المقال (٢٥٪)",
        noteEn: "Two essay scenarios — calculations and short paragraphs, AI-marked against certified solutions.",
        noteAr: "سيناريوهان مقاليان — حسابات وفقرات قصيرة تصححها الذكاء الاصطناعي وفق الحلول المعتمدة.",
        tasks: 2,
        weight: 0.25,
      },
    ],
  },
  "cma-p2": {
    family: "cma-p2",
    realEn:
      "Real CMA Part 2: 3 hours of 100 MCQs (75% of the score) + 30 minutes of two essay scenarios (25%).",
    realAr:
      "امتحان CMA الجزء الثاني الحقيقي: ٣ ساعات من ١٠٠ سؤال اختيار من متعدد (٧٥٪) + ٣٠ دقيقة لسيناريوهي مقال (٢٥٪).",
    sections: [
      {
        id: "mcq",
        kind: "mcq",
        titleEn: "Part 1 — Multiple choice (75%)",
        titleAr: "الجزء الأول — اختيار من متعدد (٧٥٪)",
        noteEn: "Financial-decision MCQ screen, scaled to a bench sitting.",
        noteAr: "شاشة أسئلة القرارات المالية بمقاس مصغّر.",
        count: 18,
        weight: 0.75,
      },
      {
        id: "essay",
        kind: "cr",
        titleEn: "Part 2 — Essay scenarios (25%)",
        titleAr: "الجزء الثاني — سيناريوهات المقال (٢٥٪)",
        noteEn: "Decision-analysis and finance essays, AI-marked against certified solutions.",
        noteAr: "مقالات تحليل القرارات والتمويل تصححها الذكاء الاصطناعي وفق الحلول المعتمدة.",
        tasks: 2,
        weight: 0.25,
      },
    ],
  },

  /* ---------------- CFA — two timed sessions ----------------------------- */
  "cfa-l1": {
    family: "cfa-l1",
    realEn:
      "Real CFA Level I: two separate 2¼-hour sessions of 90 questions each — morning and afternoon with a break between; three-choice items in vignette and standalone form.",
    realAr:
      "امتحان CFA المستوى الأول الحقيقي: جلستان منفصلتان مدة كل منهما ساعتان وربع بـ٩٠ سؤالًا — صباحية ومسائية بفاصل بينهما، وأسئلة بثلاثة خيارات.",
    sections: [
      {
        id: "s1",
        kind: "mcq",
        titleEn: "Session 1 — morning",
        titleAr: "الجلسة الأولى — صباحية",
        noteEn: "The first half of the paper, sat in one block like the real morning session.",
        noteAr: "النصف الأول من الورقة في جلسة واحدة كالجلسة الصباحية الحقيقية.",
        count: 12,
        weight: 0.5,
      },
      {
        id: "s2",
        kind: "mcq",
        titleEn: "Session 2 — afternoon",
        titleAr: "الجلسة الثانية — مسائية",
        noteEn: "The second block begins after a break — no returning to Session 1 questions.",
        noteAr: "تبدأ الجلسة الثانية بعد فاصل — دون عودة إلى أسئلة الجلسة الأولى.",
        count: 12,
        weight: 0.5,
      },
    ],
  },
}

/** Total MCQ questions a format-driven paper draws from the bank. */
export function formatMcqTotal(f: PaperFormat): number {
  return f.sections.reduce((a, s) => a + (s.kind === "mcq" ? s.count : 0), 0)
}

/** Total CR tasks a format-driven paper sits. */
export function formatCrTotal(f: PaperFormat): number {
  return f.sections.reduce((a, s) => a + (s.kind === "cr" ? s.tasks : 0), 0)
}

/** Section weights sum check — every format must weigh exactly 1. */
export function formatWeightsOk(f: PaperFormat): boolean {
  const sum = f.sections.reduce((a, s) => a + s.weight, 0)
  return Math.abs(sum - 1) < 1e-9
}

/* ------------------------------------------------------------------ */
/* format ↔ paper binding                                              */
/* ------------------------------------------------------------------ */

/** The real-format blueprint behind a paper id (null = classic linear paper). */
export function formatForPaper(paperId: string): PaperFormat | null {
  return PAPER_FORMATS[paperBase(paperId)] ?? null
}

/** Scale per-section MCQ counts down when a dated sitting's bank pool is
 *  smaller than the flagship's (e.g. AA sitting pools are 18 vs 24) — keeps
 *  the real section SHAPE while fitting the available questions. */
export function scaleCounts(counts: number[], pool: number): number[] {
  const total = counts.reduce((a, b) => a + b, 0)
  if (pool >= total) return counts
  const scaled = counts.map((c) => Math.max(3, Math.floor((c * pool) / total)))
  let sum = scaled.reduce((a, b) => a + b, 0)
  while (sum > pool) {
    const i = scaled.indexOf(Math.max(...scaled))
    scaled[i] -= 1
    sum -= 1
  }
  return scaled
}

/** Build the session-side section plan for a paper id, given its MCQ pool
 *  (ordered question ids) — deterministic draw + CR rotation. */
export function buildSections(
  paperId: string,
  poolIds: string[]
): { sections: SessionSection[]; questionIds: string[]; crTaskIds: string[] } {
  const format = formatForPaper(paperId)
  if (!format) return { sections: [], questionIds: poolIds, crTaskIds: [] }

  const mcqSections = format.sections.filter((s): s is FormatSectionMcq => s.kind === "mcq")
  const counts = scaleCounts(
    mcqSections.map((s) => s.count),
    poolIds.length
  )
  const crSeed = sittingIndex(paperId)

  const sections: SessionSection[] = []
  const questionIds: string[] = []
  const crTaskIds: string[] = []
  let cursor = 0
  for (const s of format.sections) {
    if (s.kind === "mcq") {
      const idx = mcqSections.indexOf(s)
      const take = counts[idx] ?? 0
      const slice = poolIds.slice(cursor, cursor + take)
      cursor += take
      if (!slice.length) continue
      sections.push({
        id: s.id,
        kind: "mcq",
        titleEn: s.titleEn,
        titleAr: s.titleAr,
        noteEn: s.noteEn,
        noteAr: s.noteAr,
        weight: s.weight,
        mcqIds: slice,
      })
      questionIds.push(...slice)
    } else {
      // rotate the CR shelf per sitting; one slice per CR section
      const shelfAll = crTasksFor(format.family)
      if (!shelfAll.length) continue
      const start = ((crSeed + crTaskIds.length) % shelfAll.length + shelfAll.length) % shelfAll.length
      const picked: string[] = []
      for (let i = 0; i < s.tasks; i++) picked.push(shelfAll[(start + i) % shelfAll.length].id)
      sections.push({
        id: s.id,
        kind: "cr",
        titleEn: s.titleEn,
        titleAr: s.titleAr,
        noteEn: s.noteEn,
        noteAr: s.noteAr,
        weight: s.weight,
        crTaskIds: picked,
      })
      crTaskIds.push(...picked)
    }
  }
  // renormalise weights if any section was dropped (empty pool / no shelf)
  const weightSum = sections.reduce((a, s) => a + s.weight, 0)
  if (weightSum > 0 && Math.abs(weightSum - 1) > 1e-9) {
    for (const s of sections) s.weight = s.weight / weightSum
  }
  return { sections, questionIds, crTaskIds }
}
