/** v25 generator library — deterministic exam-paper question factory.
 *
 *  Powers the "5 years of past papers per exam" release: every additional
 *  year-sitting for every exam family (ACCA BT…AAA, the Egyptian SOE paper
 *  and the new IFRS diploma family) is composed from parameterized
 *  question templates. Each template is a real past-paper-style item whose
 *  figures, entity and wording vary with a seeded RNG — the same way real
 *  sittings revisit the same syllabus with fresh numbers.
 *
 *  Everything is DETERMINISTIC: seed = hash(family + sitting label), so
 *  re-running the apply script always produces the identical bank (stable
 *  snapshot, stable tests). Answer positions are rotated by a hash of the
 *  question code so the key never leans on one letter. */

export type Area = "auditing" | "accounting" | "egypt" | "ethics"

export type GenQ = {
  code: string
  stem: string
  stemAr: string
  options: string[]
  optionsAr: string[]
  answerIndex: number
  explanation: string
  explanationAr: string
  standardTag: string
  area: Area
  difficulty: 1 | 2 | 3
  source: string
}

/** A template: exam-style question factory. `fams` lists the exam families
 *  allowed to draw it (syllabus fidelity — FA never draws an SBR-level
 *  hedge-accounting item). */
export type Template = {
  tag: string
  area: Area
  difficulty: 1 | 2 | 3
  fams: string[]
  make: (r: Rng, e: Entity) => TplOut
}

export type TplOut = {
  stem: string
  stemAr: string
  options: string[]
  optionsAr: string[]
  answerIndex: number
  explanation: string
  explanationAr: string
}

/* ---------------- RNG ---------------- */

export type Rng = {
  next: () => number
  int: (min: number, max: number) => number
  pick: <T>(arr: readonly T[]) => T
  shuffle: <T>(arr: readonly T[]) => T[]
  round: (x: number, dp?: number) => number
}

export function mulberry32(seed: number): Rng {
  let a = seed >>> 0
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const int = (min: number, max: number) => min + Math.floor(next() * (max - min + 1))
  const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(next() * arr.length)]
  const shuffle = <T,>(arr: readonly T[]): T[] => {
    const out = [...arr]
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(next() * (i + 1))
      ;[out[i], out[j]] = [out[j], out[i]]
    }
    return out
  }
  const round = (x: number, dp = 0) => {
    const f = 10 ** dp
    return Math.round(x * f) / f
  }
  return { next, int, pick, shuffle, round }
}

/** Deterministic 32-bit string hash (FNV-1a) — same family/label → same seed. */
export function hashOf(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/* ---------------- formatting ---------------- */

/** 1234567 → "1,234,567" */
export function fmt(n: number): string {
  return n.toLocaleString("en-US")
}

/** money label used across numeric options */
export function egp(n: number): string {
  return `EGP ${fmt(n)}`
}

/** Annuity factor (ordinary, arrears) and annuity-due factor. */
export function annuityArrears(years: number, rate: number): number {
  return (1 - (1 + rate) ** -years) / rate
}
export function annuityDue(years: number, rate: number): number {
  return annuityArrears(years, rate) * (1 + rate)
}

/* ---------------- entities ---------------- */

export type Entity = { en: string; ar: string }

export const ENTITIES: readonly Entity[] = [
  { en: "Nile Delta Textiles", ar: "شركة دلتا النيل للغزل والنسيج" },
  { en: "Cairo Pharma", ar: "شركة القاهرة للأدوية" },
  { en: "Alexandria Shipping", ar: "شركة الإسكندرية للملاحة" },
  { en: "Giza Foods", ar: "شركة الجيزة للأغذية" },
  { en: "Suez Steel", ar: "شركة السويس للحديد والصلب" },
  { en: "Luxor Hotels", ar: "شركة الأقصر للفنادق" },
  { en: "Delta Electronics", ar: "شركة الدلتا للإلكترونيات" },
  { en: "Red Sea Cement", ar: "شركة البحر الأحمر للأسمنت" },
  { en: "Memphis Plastics", ar: "شركة ممفيس للبلاستيك" },
  { en: "Osiris Trading", ar: "شركة أوزوريس للتجارة" },
  { en: "Ramses Motors", ar: "شركة رمسيس للسيارات" },
  { en: "Isis Ceramics", ar: "شركة إيزيس للسيراميك" },
  { en: "Horus Airlines", ar: "شركة حورس للطيران" },
  { en: "Anubis Security", ar: "شركة أنوبيس للأمن" },
  { en: "Thoth Publishing", ar: "شركة تحوت للنشر" },
  { en: "Maadi Retail", ar: "شركة المعادي للتجزئة" },
  { en: "Zamalek Furniture", ar: "شركة الزمالك للأثاث" },
  { en: "Helios Glass", ar: "شركة هيليوس للزجاج" },
  { en: "Karnak Mills", ar: "شركة كرنك للطحافين" },
  { en: "Dendera Lighting", ar: "شركة دندرة للإضاءة" },
  { en: "Aswan Quarries", ar: "شركة أسوان للمقالع" },
  { en: "Edfu Chemicals", ar: "شركة إدفو للكيماويات" },
  { en: "Kom Ombo Packaging", ar: "شركة كوم أمبو للتغليف" },
  { en: "Philae Tourism", ar: "شركة فيلاي للسياحة" },
  { en: "Siwa Organic", ar: "شركة سيوة العضوية" },
  { en: "Fayoum Cotton", ar: "شركة الفيوم للقطن" },
  { en: "Damanhur Paints", ar: "شركة دمنهور للدهانات" },
  { en: "Tanta Leather", ar: "شركة طنطا للجلود" },
  { en: "Mansoura Dairy", ar: "شركة المنصورة للألبان" },
  { en: "Qena Sugar", ar: "شركة قنا للسكر" },
  { en: "Minya Marble", ar: "شركة المنيا للرخام" },
]

/* ---------------- option helpers ---------------- */

/** Build a numeric MCQ: correct value + three distractors. Options are
 *  returned with the correct answer FIRST (answerIndex 0); the composer
 *  rotates them by code hash. Distractors that collide with the correct
 *  value (or each other) are nudged apart so every option is distinct. */
export function numericOptions(
  correct: number,
  distractors: number[],
  label: (n: number) => string = egp,
  labelAr: (n: number) => string = egp
): { options: string[]; optionsAr: string[]; answerIndex: 0 } {
  const seen = new Set([Math.round(correct)])
  const ds: number[] = []
  for (const d of distractors) {
    let v = Math.round(d)
    let guard = 0
    while (seen.has(v) && guard < 50) {
      v = Math.round(v === 0 ? 1 : v * 1.05 + 1)
      guard++
    }
    seen.add(v)
    ds.push(v)
  }
  const values = [Math.round(correct), ...ds]
  return {
    options: values.map(label),
    optionsAr: values.map(labelAr),
    answerIndex: 0,
  }
}

/** Rotate a finished question's options so the correct answer sits at a
 *  code-derived position (spread across A–D, stable across re-runs). */
export function rotateByCode(q: Omit<GenQ, "source">): Omit<GenQ, "source"> {
  const target = hashOf(q.code) % 4
  const from = q.answerIndex
  if (target === from) return q
  const shift = (target - from + 4) % 4
  const rot = <T,>(a: T[]): T[] => a.map((_, i) => a[(i - shift + 8) % 4])
  return {
    ...q,
    options: rot(q.options),
    optionsAr: rot(q.optionsAr),
    answerIndex: target,
  }
}

/** Conceptual MCQ builder — each option is an EN/AR pair so translations
 *  stay index-aligned. The correct answer goes FIRST (answerIndex 0; the
 *  composer rotates it). Candidates equal to the correct answer are
 *  skipped, so the result always has exactly 4 distinct options. */
export function mcq(
  correct: [string, string],
  candidates: readonly (readonly [string, string])[]
): { options: string[]; optionsAr: string[]; answerIndex: 0 } {
  const opts: [string, string][] = [correct as [string, string]]
  for (const c of candidates) {
    if (opts.length === 4) break
    if (c[0] !== correct[0] && !opts.some((o) => o[0] === c[0])) opts.push(c as [string, string])
  }
  if (opts.length !== 4) throw new Error(`mcq: not enough distinct candidates for "${correct[0]}"`)
  return {
    options: opts.map((o) => o[0]),
    optionsAr: opts.map((o) => o[1]),
    answerIndex: 0,
  }
}
