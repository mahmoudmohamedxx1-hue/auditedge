/** AI engine registry — the models that power the app's AI features.
 *
 *  v40 — GLM 5.3 Flash is THE main model of the entire site. Every AI
 *  feature (tutor, DD customizer, exam generator/marker, EQR, KAM, ToC,
 *  program tailor, industry analyst, podcast, translate, sim, study plan)
 *  runs on it, carried by the Z.ai SDK engine first:
 *  1. MAIN — the keyless Z.ai SDK engine (z-ai-web-dev-sdk), pinned to
 * *   `glm-5.3-flash` on every call — zero setup, always on in-workspace.
 *  2. The user's own Z.ai Open Platform key (ZAI_OPEN_API_KEY) called
 *     directly at the OpenAI-compatible endpoint — serves the REAL
 *     `glm-5.3-flash` model whenever the SDK engine is unreachable
 *     (e.g. Vercel deployments without the workspace config).
 *  3. LLM7's real `glm-5.3` route behind a FREE key (LLM7_API_KEY).
 *  4. The keyless community pool (pollinations / llm7 / kilo / ovh, via
 *     freellmpool) — last-resort resilience so no AI feature ever dies.
 *
 *  The old pool-* community model ids (Kilo Auto / LLM7 Fast / Qwen3.5)
 *  were removed in v40: the community engines remain INTERNAL chain
 *  failovers (PoolEngineId in lib/keyless-pool.ts), never model
 *  identities users pick — the entire website runs GLM. */

export type AiModelId =
  // the site-wide main model — keyless GLM flagship: Z.ai SDK engine first,
  // real GLM 5.3 Flash via the Z.ai key / LLM7 on failover
  | "glm-5.3-flash"
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
      en: "Main model of the whole site — Z.ai SDK engine first, zero setup; real GLM-5.3 Flash via your Z.ai key or a free LLM7 key when the SDK is unreachable; community pool only as last-resort failover · shows thinking",
      ar: "النموذج الرئيسي للموقع بالكامل — محرك Z.ai SDK أولًا بدون إعداد؛ GLM-5.3 Flash حقيقي عبر مفتاح Z.ai أو مفتاح LLM7 مجاني عند تعذر الـ SDK، والمجموعة المجتمعية احتياط أخير فقط · يعرض التفكير",
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

/** v40 default: GLM-5.3 Flash — the main model of the entire site. */
export const DEFAULT_MODEL: AiModelId = "glm-5.3-flash"
/** Free keyed model used as the in-key fallback (e.g. the account cannot
 *  serve glm-5.3-flash, or Plus selected with no balance). */
export const KEYED_FALLBACK_MODEL: AiModelId = "glm-4.7-flash"
export const VISION_MODEL: AiModelId = "glm-4.6v-flash"

/** Models offered in the switcher (v40: GLM only — the main model plus the
 * Z.ai-key GLM tier; the vision model is auto-selected when an image is
 * attached, so it is not offered as a manual chat choice). */
export const SELECTABLE_MODELS: AiModelInfo[] = AI_MODELS.filter((m) => !m.vision)

export function isAiModelId(v: unknown): v is AiModelId {
  return typeof v === "string" && AI_MODELS.some((m) => m.id === v)
}

/** v40 — GLM 5.3 Flash is the main model of the entire website: any model
 *  selection that is not a real registry model (a legacy pool-* id from an
 *  old stored preference, or a crafted request value) normalizes back to
 *  the main model. Used by every route that reads a client-sent model and
 *  by the store's preference hydration. */
export function normalizeModelId(v: unknown): AiModelId {
  return isAiModelId(v) ? v : DEFAULT_MODEL
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
      return { label: "GLM engine · Z.ai SDK", tone: "sdk" }
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
      return { label: "Your Z.ai key · GLM", tone: "key" }
    default: {
      if (isAiModelId(used)) {
        const m = getAiModel(used)
        return { label: m.tier === "keyless" ? `${m.name} · keyless` : m.name, tone: m.tier === "keyless" ? "keyless" : "key" }
      }
      return { label: "AI engine", tone: "sdk" }
    }
  }
}
