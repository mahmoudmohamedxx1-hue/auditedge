import { getZai, sdkCreateWithRetry, userKeyEngineReady } from "@/lib/ai"
import { getSessionUser } from "@/lib/auth"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** v40 — honest AI engine status for the UI: is ANY engine configured
 *  on this deployment? The Z.ai SDK engine (main, pinned to glm-5.3-flash)
 *  is probed with a minimal ping; keyless deployments where it is absent
 *  (e.g. a fresh Vercel demo with no ZAI_OPEN_API_KEY) fall back to the
 *  free community pool — slower and best-effort — and the DD customizer
 *  shows a "configure a key" hint so users know why generation may fail,
 *  instead of a mystery error.
 *
 *  GET → { key: boolean, workspace: boolean, model: "glm-5.3-flash" }
 *    key       — ZAI_OPEN_API_KEY present (>20 chars)
 *    workspace — the main Z.ai SDK engine answers a minimal ping (12s cap)
 *    model     — the site-wide main model id */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  let workspace = false
  try {
    const zai = await getZai()
    const ping = await Promise.race([
      sdkCreateWithRetry(() =>
        zai.chat.completions.create({
          model: "glm-5.3-flash", // v40 — the main model, requested explicitly
          // a terse prompt + token cap: "ping" invites an essay (15s+) and
          // would blow the race timeout — the probe only needs one token
          messages: [{ role: "user", content: "Reply with only: OK" }],
          max_tokens: 8,
          thinking: { type: "disabled" },
        })
      ),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 12_000)),
    ])
    workspace = Boolean(ping?.choices?.[0]?.message?.content)
  } catch {
    workspace = false
  }

  return Response.json(
    { key: userKeyEngineReady(), workspace, model: "glm-5.3-flash" },
    { headers: { "cache-control": "no-store" } },
  )
}
