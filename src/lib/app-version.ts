/** v35 — single client-side read of the app version, inlined at build time
 *  from package.json via next.config.ts (`env.NEXT_PUBLIC_APP_VERSION`).
 *  Shown in the sidebar so learners can always tell whether they are
 *  running the current release (scripts/test-v35.ts keeps package.json,
 *  the service-worker stamp and this badge in lockstep). */

export const APP_VERSION: string = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev"

/** just the major, e.g. "35" — what the collapsed sidebar shows */
export const APP_MAJOR: string = APP_VERSION.split(".")[0] ?? "?"
