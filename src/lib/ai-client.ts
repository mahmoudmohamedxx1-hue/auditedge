/** v42 — client helper for the progressive AI endpoints.
 *
 *  `aiJson` POSTs to any /api/ai generator with the X-AI-Progress header.
 *  When the server supports the progressive transport it streams back
 *  stage events (dispatched to onStage live) and then the final result —
 *  when it doesn't (older cached client hitting a new route, or a route
 *  without progressive support) the response is plain JSON and is parsed
 *  identically. One call, both transports, no caller branching. */

export type AiStageEvent = { i: number; id: string }

export async function aiJson<T>(
  url: string,
  body: unknown,
  opts?: {
    onStage?: (stage: AiStageEvent) => void
    signal?: AbortSignal
  }
): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-AI-Progress": "1" },
    body: JSON.stringify(body),
    signal: opts?.signal,
  })

  const contentType = res.headers.get("content-type") ?? ""

  /* ---- progressive transport: read stage events until result/error ---- */
  if (contentType.includes("text/event-stream")) {
    const reader = res.body?.getReader()
    if (!reader) throw new Error("The stream could not be read — try again")
    const decoder = new TextDecoder()
    let buffer = ""

    const processLine = (line: string, resolve: (v: T) => void, reject: (e: Error) => void) => {
      let event = "message"
      let data = ""
      for (const l of line.split("\n")) {
        if (l.startsWith("event:")) event = l.slice(6).trim()
        else if (l.startsWith("data:")) data += l.slice(5).trim()
      }
      if (!data || event === "message" || event === "ping") return
      try {
        const parsed = JSON.parse(data)
        if (event === "stage") {
          opts?.onStage?.(parsed as AiStageEvent)
        } else if (event === "result") {
          resolve(parsed as T)
        } else if (event === "error") {
          reject(new Error((parsed as { error?: string }).error ?? `Generation failed (${res.status})`))
        }
      } catch {
        /* partial JSON line — ignored, the next chunk completes it */
      }
    }

    return await new Promise<T>((resolve, reject) => {
      const fail = (e: Error) => {
        reader.cancel().catch(() => {})
        reject(e)
      }
      let settled = false
      const wrappedResolve = (v: T) => {
        if (!settled) {
          settled = true
          resolve(v)
        }
      }
      const wrappedReject = (e: Error) => {
        if (!settled) {
          settled = true
          fail(e)
        }
      }
      if (!res.ok) wrappedReject(new Error(`Generation failed (${res.status})`))

      void (async () => {
        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            buffer += decoder.decode(value, { stream: true })
            const lines = buffer.split("\n\n")
            buffer = lines.pop() ?? ""
            for (const line of lines) processLine(line, wrappedResolve, wrappedReject)
          }
          if (buffer.trim()) processLine(buffer, wrappedResolve, wrappedReject)
          // stream ended without a result event
          wrappedReject(new Error("The generation ended without a result — try again"))
        } catch (e) {
          wrappedReject(e instanceof Error ? e : new Error("The stream failed"))
        }
      })()
    })
  }

  /* ---- plain JSON transport (identical payload) ---- */
  const data = (await res.json().catch(() => ({}))) as T & { error?: string }
  if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`)
  return data
}
