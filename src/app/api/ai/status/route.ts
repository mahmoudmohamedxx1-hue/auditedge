import { getZai, userKeyEngineReady } from "@/lib/ai"
import { getSessionUser } from "@/lib/auth"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/** v39.0.2 — honest AI engine status for the UI: is ANY engine configured
 *  on this deployment? Keyless deployments (e.g. a fresh Vercel demo with
 *  no ZAI_OPEN_API_KEY) fall back to the free community pool — slower and
 *  best-effort — and the DD customizer shows a "configure a key" hint so
 *  users know why generation may fail, instead of a mystery error.
 *
 *  GET → { key: boolean, workspace: boolean }
 *    key       — ZAI_OPEN_API_KEY present (>20 chars)
 *    workspace — the built-in SDK engine answers a minimal ping (8s cap) */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  let workspace = false
  try {
    const zai = await getZai()
    const ping = await Promise.race([
      zai.chat.completions.create({
        messages: [{ role: "user", content: "ping" }],
        thinking: { type: "disabled" },
      }),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 8000)),
    ])
    workspace = Boolean(ping?.choices?.[0]?.message?.content)
  } catch {
    workspace = false
  }

  return Response.json(
    { key: userKeyEngineReady(), workspace },
    { headers: { "cache-control": "no-store" } },
  )
}
