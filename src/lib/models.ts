/** AI engine registry — the models that power the app's AI features.
 *
 *  v22 engine tiers:
 *  1. KEYLESS (no setup, no key) — the default tier. "GLM-5.3 Flash" is the
 *     keyless flagship: it prefers the real GLM workspace engine and fails
 *     over to the freellmpool community routes (Kilo Gateway, LLM7,
 *     Pollinations, OVHcloud) so the tutor works on any deployment,
 *     including Vercel with zero environment variables.
 *  2. The user's own Z.ai Open Platform key (ZAI_OPEN_API_KEY in .env)
 *     called directly at the OpenAI-compatible endpoint — the production
 *     engine with model selection, when a key is configured.
 *
 *  Keyless community routes are curated from the freellmpool catalog
 *  (github.com/0xzr/freellmpool): keyless OpenAI-compatible providers
 *  that need no signup. */

export type AiModelId =
  // keyless community tier (freellmpool routes — no key, no setup)
  | "glm-5.3-flash" // keyless GLM flagship: workspace GLM → community pool failover
  | "pool-kilo-auto" // Kilo Gateway auto-route (streams reasoning)
  | "pool-llm7-fast" // LLM7 fast selector
  | "pool-qwen3.5-397b" // OVHcloud Qwen3.5-397B-A17B (largest free open model)
  // Z.ai key tier
  | "glm-4.7-flash"
  | "glm-4.6v-flash"
  | "glm-4-plus"

export type AiModelInfo = {
  id: AiModelId
  /** Display name (English) */
  name: string
  /** Display name (Arabic) */
  nameAr: string
  tier: "keyless" | "free" | "plus"
  /** Registry group: keyless community routes vs the user's Z.ai key */
  group: "keyless" | "zai"
  /** Accepts image input */
  vision: boolean
  /** Supports reasoning / a visible thinking process */
  reasoning: boolean
  note: { en: string; ar: string }
}

export const AI_MODELS: AiModelInfo[] = [
  {
    id: "glm-5.3-flash",
    name: "GLM-5.3 Flash",
    nameAr: "GLM-5.3 Flash",
    tier: "keyless",
    group: "keyless",
    vision: false,
    reasoning: true,
    note: {
      en: "Real GLM first — your Z.ai key, the workspace engine, or a free LLM7 key (LLM7_API_KEY, dash.llm7.io); community pool only as failover · shows thinking",
      ar: "GLM الحقيقي أولًا — مفتاح Z.ai أو محرك مساحة العمل أو مفتاح LLM7 مجاني (LLM7_API_KEY) والمجموعة المجتمعية احتياط فقط · يعرض التفكير",
    },
  },
  {
    id: "pool-kilo-auto",
    name: "Kilo Auto",
    nameAr: "Kilo Auto",
    tier: "keyless",
    group: "keyless",
    vision: false,
    reasoning: true,
    note: {
      en: "Keyless community pool (Kilo Gateway) — auto-routes the best free model, shows thinking",
      ar: "مجموعة مجتمعية بدون مفتاح (بوابة Kilo) — تختار أفضل نموذج مجاني وتعرض التفكير",
    },
  },
  {
    id: "pool-qwen3.5-397b",
    name: "Qwen3.5 397B",
    nameAr: "Qwen3.5 397B",
    tier: "keyless",
    group: "keyless",
    vision: false,
    reasoning: false,
    note: {
      en: "Keyless community pool (OVHcloud) — the largest free open-weight model",
      ar: "مجموعة مجتمعية بدون مفتاح (OVHcloud) — أكبر نموذج مفتوح مجاني",
    },
  },
  {
    id: "pool-llm7-fast",
    name: "LLM7 Fast",
    nameAr: "LLM7 Fast",
    tier: "keyless",
    group: "keyless",
    vision: false,
    reasoning: false,
    note: {
      en: "Keyless community pool (LLM7) — quick, lightweight answers",
      ar: "مجموعة مجتمعية بدون مفتاح (LLM7) — إجابات سريعة وخفيفة",
    },
  },
  {
    id: "glm-4.7-flash",
    name: "GLM-4.7 Flash",
    nameAr: "GLM-4.7 Flash",
    tier: "free",
    group: "zai",
    vision: false,
    reasoning: true,
    note: {
      en: "Free on your Z.ai key · fast · reasoning-capable",
      ar: "مجاني على مفتاح Z.ai · سريع · يدعم الاستدلال",
    },
  },
  {
    id: "glm-4-plus",
    name: "GLM-4 Plus",
    nameAr: "GLM-4 Plus",
    tier: "plus",
    group: "zai",
    vision: false,
    reasoning: false,
    note: {
      en: "Premium tier on your Z.ai key — deepest answers, needs account balance",
      ar: "الفئة المدفوعة على مفتاح Z.ai — أعمق الإجابات، يتطلب رصيدًا",
    },
  },
  {
    id: "glm-4.6v-flash",
    name: "GLM-4.6V Flash",
    nameAr: "GLM-4.6V Flash",
    tier: "free",
    group: "zai",
    vision: true,
    reasoning: true,
    note: {
      en: "Free on your Z.ai key · vision — reads images you attach",
      ar: "مجاني على مفتاح Z.ai · رؤية — يقرأ الصور التي ترفقها",
    },
  },
]

/** v22 default: the keyless GLM flagship — works with zero configuration. */
export const DEFAULT_MODEL: AiModelId = "glm-5.3-flash"
/** Free keyed model used as the in-key fallback (e.g. Plus selected, no balance). */
export const KEYED_FALLBACK_MODEL: AiModelId = "glm-4.7-flash"
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
 *  vision engine automatically. (When no key is configured, the engine chain
 *  in lib/ai.ts degrades to a keyless vision route or flattens the image.) */
export function resolveModel(selected: AiModelId, hasImage: boolean): AiModelId {
  if (hasImage && !getAiModel(selected).vision) return VISION_MODEL
  return selected
}

/* ---------------- engine reporting (UI badges) ---------------- */

/** Actual engine ids that can serve a request, as reported in SSE meta events. */
export type EngineId =
  | AiModelId // served by the matching engine (key or pool route)
  | "zai-key" // the user's Z.ai key engine
  | "workspace" // the built-in workspace GLM engine (SDK, keyless in-workspace)
  | "kilo" // Kilo Gateway community route
  | "llm7" // LLM7 community route
  | "llm7-glm" // v25 — real GLM-5.3 served through LLM7 (free key)
  | "pollinations" // Pollinations community route
  | "ovh" // OVHcloud community route
  | "ovh-vision" // OVHcloud keyless vision route (Qwen2.5-VL)
  | "sdk" // legacy alias of "workspace" (pre-v22 events)

/** Human label + tone for the engine badge shown under AI answers. */
export function describeEngine(used: string | null | undefined): {
  label: string
  tone: "keyless" | "key" | "sdk"
} {
  switch (used) {
    case "workspace":
    case "sdk":
      return { label: "Workspace GLM engine", tone: "sdk" }
    case "kilo":
      return { label: "Kilo Gateway · keyless pool", tone: "keyless" }
    case "llm7":
      return { label: "LLM7 · keyless pool", tone: "keyless" }
    case "llm7-glm":
      return { label: "GLM-5.3 · LLM7", tone: "keyless" }
    case "pollinations":
      return { label: "Pollinations · keyless pool", tone: "keyless" }
    case "ovh":
      return { label: "OVHcloud · keyless pool", tone: "keyless" }
    case "ovh-vision":
      return { label: "OVHcloud vision · keyless", tone: "keyless" }
    case "zai-key":
      return { label: "Your Z.ai key", tone: "key" }
    default: {
      if (isAiModelId(used)) {
        const m = getAiModel(used)
        return { label: m.tier === "keyless" ? `${m.name} · keyless` : m.name, tone: m.tier === "keyless" ? "keyless" : "key" }
      }
      return { label: "AI engine", tone: "sdk" }
    }
  }
}
