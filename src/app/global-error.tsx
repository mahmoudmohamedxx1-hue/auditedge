"use client"

/** v21 — global error boundary: the last resort when the root layout itself
 *  fails (no app shell available, so it renders its own full-page markup). */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif", background: "#faf9f7", color: "#1c1917" }}>
        <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 24, textAlign: "center" }}>
          <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>AuditEdge could not start</h1>
          <p style={{ maxWidth: 480, fontSize: 14, lineHeight: 1.6, color: "#57534e", margin: 0 }}>
            A critical error occurred while loading the workspace. Your data is safe — progress is stored
            server-side and your working papers live in this browser. {error.digest ? `(${error.digest})` : ""}
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <button
              onClick={reset}
              style={{ height: 40, padding: "0 16px", borderRadius: 8, border: "none", background: "#1a5c4a", color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer" }}
            >
              Try again
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{ height: 40, padding: "0 16px", borderRadius: 8, border: "1px solid #d6d3d1", background: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer" }}
            >
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
