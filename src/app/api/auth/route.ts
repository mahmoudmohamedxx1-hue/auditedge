import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"

/**
 * Single-user workspace — no sign-in, no accounts to pick.
 * GET simply reports who is using the app (and provisions the
 * workspace user on a fresh database so the app boots instantly).
 */
export async function GET() {
  const user = await getSessionUser()
  return NextResponse.json({ user: user ? { id: user.id, name: user.name, email: user.email } : null })
}
