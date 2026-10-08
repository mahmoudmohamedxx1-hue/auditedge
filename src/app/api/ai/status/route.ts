import { getZai, sdkCreateWithRetry, userKeyEngineReady, withTimeout } from "@/lib/ai"
import { getSessionUser } from "@/lib/auth"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** v40.1 — honest AI engine status for the UI. The site's MAIN engine is the
 *  REAL GLM-5.3-Flash model on LLM7 — totally keyless, no setup needed on
 *  any deployment (including a fresh Vercel build). This probe reports the
 *  health of that main route plus the failovers, so features can show an
 *  honest "momentarily degraded" notice instead of a mystery error:
 *
 *  GET → { key, workspace, llm7, model }
 *    llm7      — the MAIN keyless GLM route is reachable: LLM7's public
 *                /v1/models list answers (no key, no tokens burned) AND
 *                still catalogues GLM-5.3-Flash
 *    workspace — the built-in Z.ai SDK failover answers a minimal ping
 *                (12s cap; absent on external deploys — that is normal)
 *    key       — the OPTIONAL Z.ai Open Platform key (ZAI_OPEN_API_KEY)
 *                is configured (a booster, never a requirement)
 *    model     — the site-wide main model id */
async function llm7GlmReachable(): Promise<boolean> {
  try {
    const res = await withTimeout(
      fetch("https://api.llm7.io/v1/models", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }),
      8_000
    )
    if (!res.ok) return false
    const json = (await res.json().catch(() => null)) as {
      data?: { id?: string }[]
    }
    return Boolean(json?.data?.some((m) => m.id === "GLM-5.3-Flash"))
  } catch {
    return false
  }
}

export async function GET() {
  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  const llm7 = await llm7GlmReachable()

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
    // llm7 first — it is the MAIN engine and the one a zero-config deploy
    // actually depends on; workspace/key are failovers that may be absent.
    { llm7, workspace, key: userKeyEngineReady(), model: "glm-5.3-flash" },
    { headers: { "cache-control": "no-store" } }
  )
}
