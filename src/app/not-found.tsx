import Link from "next/link"

/** v21 — 404 boundary for deep links that no longer exist. */

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="font-serif text-[24px] font-semibold tracking-tight">This page isn&apos;t part of the workspace</h1>
      <p className="max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
        The workspace is a single-page app — everything lives at the home route. If a bookmark or link
        brought you here, head back to the workspace and pick up where you left off.
      </p>
      <Link
        href="/"
        className="mt-1 inline-flex h-10 items-center rounded-lg bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-ring"
      >
        Back to AuditEdge
      </Link>
    </div>
  )
}
