import { db } from "@/lib/db"

/**
 * Single-user workspace (auth removed at the owner's request).
 *
 * The workspace has exactly one member — Mahmoud El-Sayed — and every
 * request resolves to him directly. No cookies, no sessions, no sign-in
 * screen: the app simply opens. This also makes it work inside preview
 * iframes and browsers that block third-party cookies, where the old
 * SameSite=Lax session cookie was rejected and the app failed to open.
 */

export const WORKSPACE_USER = {
  name: "Mahmoud El-Sayed",
  email: "mahmoud.elsayed@auditedge.eg",
  jobTitle: "Senior Associate",
  role: "admin", // single member → full access (builder, library, discover, team)
  initials: "ME",
} as const

export type SessionUser = {
  id: string
  email: string
  name: string
  role: string
  jobTitle: string
  initials: string
  xp: number
  streakDays: number
}

/** Resolve the one workspace user, provisioning the account if the DB is empty. */
export async function getSessionUser(): Promise<SessionUser | null> {
  // resolve by the workspace email first — a restored backup with extra users
  // must never silently shift the identity onto another member (which would
  // lock the admin features out); fall back to the earliest user only when
  // the canonical account is missing (e.g. legacy DB from before v7)
  let u = await db.user.findUnique({ where: { email: WORKSPACE_USER.email } })
  if (!u) u = await db.user.findFirst({ orderBy: { createdAt: "asc" } })
  if (!u) {
    // self-healing: an empty DB (fresh install) still boots straight into the app.
    // Parallel first requests may race to create the user — the loser re-fetches.
    try {
      u = await db.user.create({ data: { ...WORKSPACE_USER } })
    } catch {
      u = await db.user.findFirst({ orderBy: { createdAt: "asc" } })
    }
    if (!u) return null
  }
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role,
    jobTitle: u.jobTitle,
    initials: u.initials || WORKSPACE_USER.initials,
    xp: u.xp,
    streakDays: u.streakDays,
  }
}

export async function requireAdminSession(): Promise<SessionUser | null> {
  const user = await getSessionUser()
  return user?.role === "admin" ? user : null
}
