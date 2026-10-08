/** v42 — SSE progressive responses for the long AI generators.
 *
 *  The big one-shot JSON/doc generators (DD customizer, program tailor,
 *  ToC designer, exam writer, and the Closing Suite documents) legitimately
 *  run 30-120 seconds on the keyless GLM-5.3-Flash chain. A plain JSON
 *  response leaves the user staring at one frozen spinner the whole time —
 *  v42 gives these routes a progressive mode:
 *
 *   - the client opts in with the `X-AI-Progress: 1` request header
 *   - the route reports REAL phases as they happen (inputs read → the model
 *     is writing → retry/tightening → structuring the result), each with a
 *     stable ordinal + id the client maps to a localized label
 *   - a heartbeat comment every 7 s keeps proxies from buffering or timing
 *     the connection out mid-generation
 *   - the final payload arrives as a `result` event carrying EXACTLY the
 *     JSON the non-progressive path would have returned — one code path,
 *     two transports
 *   - `Cancel` on the client aborts the fetch; the stream tears down
 *
 *  Non-progressive callers (older cached clients, curl) still get the
 *  identical plain-JSON response — the protocol is additive.
 *
 *  Wire format:
 *   event: stage  data: {"i":1,"id":"writing"}
 *   event: error  data: {"error":"…","status":502}
 *   event: result data: {…the route's normal JSON payload…}
 */

export type ProgressEmit = (stage: { i: number; id: string }) => void

/** Does this request ask for the progressive transport? */
export function wantsProgress(req: Request): boolean {
  return req.headers.get("x-ai-progress") === "1"
}

/** The outcome of a route's core work, in either transport. */
export type ProgressWork =
  | { ok: true; payload: Record<string, unknown> }
  | { ok: false; error: string; status: number }

/** Build an SSE Response around the route's core work. `work` runs exactly
 *  once and returns the same payload the plain-JSON path returns; `emit`
 *  reports real phases as they happen. */
export function sseProgress(work: (emit: ProgressEmit) => Promise<ProgressWork>): Response {
  const encoder = new TextEncoder()
  let heartbeat: ReturnType<typeof setInterval> | undefined

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let closed = false
      const send = (event: string, data: unknown) => {
        if (closed) return
        try {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`))
        } catch {
          closed = true // client went away — stop writing, let work finish
        }
      }

      heartbeat = setInterval(() => {
        if (closed) return
        try {
          controller.enqueue(encoder.encode(`: ping\n\n`))
        } catch {
          closed = true
        }
      }, 7_000)

      try {
        const out = await work((stage) => send("stage", stage))
        if (out.ok) send("result", out.payload)
        else send("error", { error: out.error, status: out.status })
      } catch (e) {
        console.error("[sse-progress]", e)
        send("error", { error: "The generation failed — please try again.", status: 500 })
      } finally {
        clearInterval(heartbeat)
        closed = true
        try {
          controller.close()
        } catch {
          /* already closed */
        }
      }
    },
    cancel() {
      clearInterval(heartbeat)
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  })
}
