/** AI engine registry — the models that power the app's AI features.
 *
 *  Two engines can serve a request:
 *  1. The user's own Z.ai Open Platform key (ZAI_OPEN_API_KEY in .env.local)
 *     called directly at the OpenAI-compatible endpoint — this is the
 *     production engine, with model selection.
 *  2. The workspace built-in SDK — the zero-config fallback that keeps every
 *     feature working when no key is configured or the key engine fails
 *     (rate limits, exhausted balance, network).
 *
 *  GLM-4.7-Flash: free, reasoning-capable — the default.
 *  GLM-4.6V-Flash: free, vision — auto-selected whenever an image is attached.
 *  GLM-4-Plus: premium tier — selectable; needs account balance. */

export type AiModelId = "glm-4.7-flash" | "glm-4.6v-flash" | "glm-4-plus"

export type AiModelInfo = {
  id: AiModelId
  /** Display name (English) */
  name: string
  /** Display name (Arabic) */
  nameAr: string
  tier: "free" | "plus"
  /** Accepts image input */
  vision: boolean
  /** Supports the `thinking` parameter (reasoning models) */
  reasoning: boolean
  note: { en: string; ar: string }
}

export const AI_MODELS: AiModelInfo[] = [
  {
    id: "glm-4.7-flash",
    name: "GLM-4.7 Flash",
    nameAr: "GLM-4.7 Flash",
    tier: "free",
    vision: false,
    reasoning: true,
    note: {
      en: "Free · fast · reasoning-capable — the default engine",
      ar: "مجاني · سريع · يدعم الاستدلال — المحرك الافتراضي",
    },
  },
  {
    id: "glm-4-plus",
    name: "GLM-4 Plus",
    nameAr: "GLM-4 Plus",
    tier: "plus",
    vision: false,
    reasoning: false,
    note: {
      en: "Premium tier — deepest answers, needs account balance",
      ar: "الفئة المدفوعة — أعمق الإجابات، يتطلب رصيدًا في الحساب",
    },
  },
  {
    id: "glm-4.6v-flash",
    name: "GLM-4.6V Flash",
    nameAr: "GLM-4.6V Flash",
    tier: "free",
    vision: true,
    reasoning: true,
    note: {
      en: "Free · vision — reads images you attach",
      ar: "مجاني · رؤية — يقرأ الصور التي ترفقها",
    },
  },
]

export const DEFAULT_MODEL: AiModelId = "glm-4.7-flash"
export const VISION_MODEL: AiModelId = "glm-4.6v-flash"

/** Models offered in the switcher (the vision model is auto-selected when an
 *  image is attached, so it is not offered as a manual chat choice). */
export const SELECTABLE_MODELS: AiModelInfo[] = AI_MODELS.filter((m) => !m.vision)

export function isAiModelId(v: unknown): v is AiModelId {
  return typeof v === "string" && AI_MODELS.some((m) => m.id === v)
}

export function getAiModel(id: AiModelId): AiModelInfo {
  const m = AI_MODELS.find((x) => x.id === id)
  if (!m) throw new Error(`Unknown AI model: ${id}`)
  return m
}

/** Resolve the effective model for a request: if an image is attached the
 *  model must be vision-capable, so non-vision selections are routed to the
 *  vision engine automatically. */
export function resolveModel(selected: AiModelId, hasImage: boolean): AiModelId {
  if (hasImage && !getAiModel(selected).vision) return VISION_MODEL
  return selected
}
