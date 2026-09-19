/** TTS voice catalog — two providers, one picker.
 *
 *  1. EDGE NEURAL (server-side, src/lib/edge-tts.ts): Microsoft Edge's
 *     Read-Aloud service — genuinely natural neural voices, no API key.
 *     This is where the "international voices" live: Egyptian + Gulf
 *     Arabic, US/UK/Australian/Indian English, and a showcase of other
 *     languages. Arabic here reads like a native speaker — this is the
 *     fix for "read Arabic normally". "Auto" now routes to these.
 *  2. Z.AI ENGINE (workspace SDK): the 7 built-in voices. Arabic
 *     capability is probe-verified (Task 27): tongtong / chuichui /
 *     xiaochen read Arabic at a natural pace; jam / kazi / douji / luodo
 *     spell Arabic out letter-by-letter — English-only in practice.
 *
 *  Persisted selection ids:
 *    "auto"                     — language-matched neural (new default)
 *    "tongtong" | "jam" | …     — a Z.ai engine voice (Task 27 format)
 *    "edge:ar-EG-SalmaNeural"   — an Edge neural voice (v28 format) */

export type SpecificVoiceId =
  | "tongtong"
  | "chuichui"
  | "xiaochen"
  | "jam"
  | "kazi"
  | "douji"
  | "luodo"

export type TtsVoiceId = "auto" | SpecificVoiceId | `edge:${string}`

export interface TtsVoiceInfo {
  id: SpecificVoiceId
  /** Display name (Latin in both languages, like the model names) */
  name: string
  /** One-line character description */
  style: { en: string; ar: string }
  /** Reads Arabic at a natural pace (probe-verified) */
  arabicOk: boolean
}

export const TTS_VOICES: TtsVoiceInfo[] = [
  {
    id: "tongtong",
    name: "Tongtong",
    style: { en: "Warm & friendly", ar: "دافئ وودود" },
    arabicOk: true,
  },
  {
    id: "chuichui",
    name: "Chuichui",
    style: { en: "Bright & playful", ar: "حيوي ومرح" },
    arabicOk: true,
  },
  {
    id: "xiaochen",
    name: "Xiaochen",
    style: { en: "Calm & professional", ar: "هادئ ومهنّي" },
    arabicOk: true,
  },
  {
    id: "jam",
    name: "Jam",
    style: { en: "Clear British reader", ar: "قارئ بريطاني واضح" },
    arabicOk: false,
  },
  {
    id: "kazi",
    name: "Kazi",
    style: { en: "Crisp & standard", ar: "واضح ومعتاد" },
    arabicOk: false,
  },
  {
    id: "douji",
    name: "Douji",
    style: { en: "Easy & conversational", ar: "طبيعي وسلس" },
    arabicOk: false,
  },
  {
    id: "luodo",
    name: "Luodo",
    style: { en: "Expressive & engaging", ar: "معبّر وجاذب" },
    arabicOk: false,
  },
]

/** ---- Edge neural voices (curated) ---- */

export type EdgeVoiceLang = "ar" | "en" | "fr" | "es" | "de" | "it" | "tr" | "hi"

export interface EdgeVoiceInfo {
  /** Full selection id, e.g. "edge:ar-EG-SalmaNeural" */
  id: `edge:${string}`
  /** The Edge service voice name, e.g. "ar-EG-SalmaNeural" */
  edgeName: string
  /** Given name shown in the picker, e.g. "Salma" */
  name: string
  /** BCP-47 locale, e.g. "ar-EG" */
  locale: string
  lang: EdgeVoiceLang
  /** Bilingual language label, e.g. "Egyptian Arabic" / "العربية المصرية" */
  langLabel: { en: string; ar: string }
  gender: "female" | "male"
}

export const EDGE_TTS_VOICES: EdgeVoiceInfo[] = [
  // Arabic — the reason this provider exists
  {
    id: "edge:ar-EG-SalmaNeural",
    edgeName: "ar-EG-SalmaNeural",
    name: "Salma",
    locale: "ar-EG",
    lang: "ar",
    langLabel: { en: "Arabic · Egypt", ar: "العربية · مصر" },
    gender: "female",
  },
  {
    id: "edge:ar-EG-ShakirNeural",
    edgeName: "ar-EG-ShakirNeural",
    name: "Shakir",
    locale: "ar-EG",
    lang: "ar",
    langLabel: { en: "Arabic · Egypt", ar: "العربية · مصر" },
    gender: "male",
  },
  {
    id: "edge:ar-SA-ZariyahNeural",
    edgeName: "ar-SA-ZariyahNeural",
    name: "Zariyah",
    locale: "ar-SA",
    lang: "ar",
    langLabel: { en: "Arabic · Gulf", ar: "العربية · الخليج" },
    gender: "female",
  },
  {
    id: "edge:ar-SA-HamedNeural",
    edgeName: "ar-SA-HamedNeural",
    name: "Hamed",
    locale: "ar-SA",
    lang: "ar",
    langLabel: { en: "Arabic · Gulf", ar: "العربية · الخليج" },
    gender: "male",
  },
  // English — international accents
  {
    id: "edge:en-US-JennyNeural",
    edgeName: "en-US-JennyNeural",
    name: "Jenny",
    locale: "en-US",
    lang: "en",
    langLabel: { en: "English · US", ar: "الإنجليزية · أمريكا" },
    gender: "female",
  },
  {
    id: "edge:en-US-GuyNeural",
    edgeName: "en-US-GuyNeural",
    name: "Guy",
    locale: "en-US",
    lang: "en",
    langLabel: { en: "English · US", ar: "الإنجليزية · أمريكا" },
    gender: "male",
  },
  {
    id: "edge:en-GB-SoniaNeural",
    edgeName: "en-GB-SoniaNeural",
    name: "Sonia",
    locale: "en-GB",
    lang: "en",
    langLabel: { en: "English · UK", ar: "الإنجليزية · بريطانيا" },
    gender: "female",
  },
  {
    id: "edge:en-GB-RyanNeural",
    edgeName: "en-GB-RyanNeural",
    name: "Ryan",
    locale: "en-GB",
    lang: "en",
    langLabel: { en: "English · UK", ar: "الإنجليزية · بريطانيا" },
    gender: "male",
  },
  {
    id: "edge:en-AU-NatashaNeural",
    edgeName: "en-AU-NatashaNeural",
    name: "Natasha",
    locale: "en-AU",
    lang: "en",
    langLabel: { en: "English · Australia", ar: "الإنجليزية · أستراليا" },
    gender: "female",
  },
  {
    id: "edge:en-IN-NeerjaNeural",
    edgeName: "en-IN-NeerjaNeural",
    name: "Neerja",
    locale: "en-IN",
    lang: "en",
    langLabel: { en: "English · India", ar: "الإنجليزية · الهند" },
    gender: "female",
  },
  // International showcase
  {
    id: "edge:fr-FR-DeniseNeural",
    edgeName: "fr-FR-DeniseNeural",
    name: "Denise",
    locale: "fr-FR",
    lang: "fr",
    langLabel: { en: "French", ar: "الفرنسية" },
    gender: "female",
  },
  {
    id: "edge:es-ES-ElviraNeural",
    edgeName: "es-ES-ElviraNeural",
    name: "Elvira",
    locale: "es-ES",
    lang: "es",
    langLabel: { en: "Spanish", ar: "الإسبانية" },
    gender: "female",
  },
  {
    id: "edge:de-DE-KatjaNeural",
    edgeName: "de-DE-KatjaNeural",
    name: "Katja",
    locale: "de-DE",
    lang: "de",
    langLabel: { en: "German", ar: "الألمانية" },
    gender: "female",
  },
  {
    id: "edge:it-IT-ElsaNeural",
    edgeName: "it-IT-ElsaNeural",
    name: "Elsa",
    locale: "it-IT",
    lang: "it",
    langLabel: { en: "Italian", ar: "الإيطالية" },
    gender: "female",
  },
  {
    id: "edge:tr-TR-EmelNeural",
    edgeName: "tr-TR-EmelNeural",
    name: "Emel",
    locale: "tr-TR",
    lang: "tr",
    langLabel: { en: "Turkish", ar: "التركية" },
    gender: "female",
  },
  {
    id: "edge:hi-IN-SwaraNeural",
    edgeName: "hi-IN-SwaraNeural",
    name: "Swara",
    locale: "hi-IN",
    lang: "hi",
    langLabel: { en: "Hindi", ar: "الهندية" },
    gender: "female",
  },
]

export const DEFAULT_TTS_VOICE: TtsVoiceId = "auto"

/** Playback speeds offered in the picker (API range is 0.5–2.0). */
export const TTS_SPEEDS = [0.75, 1, 1.25, 1.5] as const
export const DEFAULT_TTS_SPEED = 1

/** Map a picker speed to the Edge SSML prosody rate. */
export function edgeRatePct(speed: number): string {
  const delta = Math.round((speed - 1) * 100)
  if (delta === 0) return "+0%"
  return `${delta > 0 ? "+" : ""}${delta}%`
}

/** Short preview samples per language — spoken by the picker's preview
 *  button in the voice's own language. */
export const TTS_SAMPLES: Record<EdgeVoiceLang, string> = {
  en: "Hello Mahmoud. This is how I would read your audit lessons and answers aloud.",
  ar: "مرحباً محمود. هكذا أقرأ دروس المراجعة وإجاباتك بصوت عالٍ.",
  fr: "Bonjour Mahmoud. Voici comment je lirais vos leçons d'audit.",
  es: "Hola Mahmoud. Así es como leería tus lecciones de auditoría.",
  de: "Hallo Mahmoud. So würde ich Ihre Audit-Lektionen vorlesen.",
  it: "Ciao Mahmoud. Ecco come leggerei le tue lezioni di revisione.",
  tr: "Merhaba Mahmud. Denetim derslerinizi böyle okurdum.",
  hi: "नमस्ते महमूद। मैं आपके ऑडिट पाठ इस तरह पढ़ूंगा।",
}

/** The sample line for the current UI language (used by Z.ai previews). */
export function uiSample(lang: string): string {
  return lang === "ar" ? TTS_SAMPLES.ar : TTS_SAMPLES.en
}

export function isTtsVoiceId(v: unknown): v is TtsVoiceId {
  if (typeof v !== "string") return false
  if (v === "auto") return true
  if (TTS_VOICES.some((x) => x.id === v)) return true
  return EDGE_TTS_VOICES.some((x) => x.id === v)
}

export function getTtsVoice(id: TtsVoiceId): TtsVoiceInfo | null {
  return TTS_VOICES.find((x) => x.id === id) ?? null
}

export function getEdgeVoice(id: string): EdgeVoiceInfo | null {
  return EDGE_TTS_VOICES.find((x) => x.id === id) ?? null
}

/** Arabic script detector (also used server-side by the TTS route). */
const ARABIC_RE = /[\u0600-\u06FF]/

export function isArabicText(text: string): boolean {
  return ARABIC_RE.test(text)
}

/** A fully-resolved voice choice for one chunk of text. */
export interface ResolvedTtsVoice {
  provider: "edge" | "zai"
  /** Edge voice name or Z.ai voice id */
  voice: string
}

/** Resolve any selection to a concrete provider + voice for `text`.
 *  - "auto": Arabic → Salma (Egyptian neural), else → Jenny (US neural);
 *    both fall back to the Z.ai engine at the route level if the Edge
 *    service is unreachable.
 *  - an edge:… id: that Edge voice, whatever the text.
 *  - a Z.ai id: that Z.ai voice, whatever the text. */
export function resolveTtsVoice(voice: TtsVoiceId, text: string): ResolvedTtsVoice {
  if (voice !== "auto") {
    if (voice.startsWith("edge:")) return { provider: "edge", voice: voice.slice(5) }
    return { provider: "zai", voice }
  }
  return isArabicText(text)
    ? { provider: "edge", voice: "ar-EG-SalmaNeural" }
    : { provider: "edge", voice: "en-US-JennyNeural" }
}

/** The Z.ai engine voice to fall back to when Edge fails (language-matched
 *  to the text being read). */
export function zaiFallbackVoice(text: string): string {
  return isArabicText(text) ? "tongtong" : "jam"
}

/** Validate that a raw Edge voice name (from a resolved id) is one we
 *  actually offer — never pass user input straight to the service. */
export function isKnownEdgeVoiceName(name: string): boolean {
  return EDGE_TTS_VOICES.some((x) => x.edgeName === name)
}
