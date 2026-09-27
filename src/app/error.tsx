"use client"

/** v21 — route-level error boundary: one bad payload must never white-screen
 *  the whole single-route SPA. Rendered inside the app shell so nav stays. */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-primary" aria-hidden>
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      </div>
      <h1 className="font-serif text-[22px] font-semibold tracking-tight">Something broke on this screen</h1>
      <p dir="auto" className="max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
        The workspace hit an unexpected error while rendering this view. Your progress, working papers and
        conversations are safe — they are saved server-side and in your browser.{" "}
        {error.digest ? <span className="font-mono text-[11px]">({error.digest})</span> : null}
      </p>
      <div className="mt-1 flex gap-2.5">
        <button
          onClick={reset}
          className="h-10 rounded-lg bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-ring"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.assign("/")}
          className="h-10 rounded-lg border px-4 text-[13px] font-medium transition-colors hover:bg-secondary focus-ring"
        >
          Reload the workspace
        </button>
      </div>
    </div>
  )
}
