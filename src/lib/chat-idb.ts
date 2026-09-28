/** v23 — IndexedDB chat persistence ("conversations survive sessions").
 *
 *  WHY: on serverless deployments (Vercel snapshot mode) the runtime
 *  database is ephemeral and sanitized — AI conversations are wiped on
 *  every instance recycle, so learners lost their tutor history across
 *  sessions. The browser is the only durable store every deployment
 *  shares, so the tutor now mirrors every conversation into IndexedDB
 *  and reads the rail from there. The server stays the source of truth
 *  whenever it IS reachable: after each answer the client re-fetches
 *  the server copy (title + final messages) and caches it; if the
 *  server copy is unavailable the locally-streamed transcript is saved
 *  instead, so nothing is ever lost.
 *
 *  Zero dependencies — a tiny promise wrapper over the raw IDB API,
 *  safe on the server (all entry points no-op) and in private mode. */

import type { AiChatMessage, AiConversationSummary } from "@/lib/audit-types"

const DB_NAME = "auditedge-chat"
const DB_VERSION = 1
const STORE = "conversations"

/** A full conversation record as stored in IndexedDB. */
export type StoredConversation = {
  id: string
  title: string
  pinned: boolean
  createdAt: number
  updatedAt: number
  messageCount: number
  messages: AiChatMessage[]
  /** true when the server confirmed it owns this id (cuid ids) */
  serverId: boolean
}

let dbPromise: Promise<IDBDatabase | null> | null = null

function openDb(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null)
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION)
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains(STORE)) {
          const store = db.createObjectStore(STORE, { keyPath: "id" })
          store.createIndex("updatedAt", "updatedAt")
        }
      }
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => resolve(null)
      req.onblocked = () => resolve(null)
    } catch {
      resolve(null)
    }
  })
  return dbPromise
}

function tx<T>(
  mode: IDBTransactionMode,
  run: (store: IDBObjectStore) => IDBRequest<T>
): Promise<T | null> {
  return openDb().then(
    (db) =>
      new Promise<T | null>((resolve) => {
        if (!db) return resolve(null)
        try {
          const t = db.transaction(STORE, mode)
          const req = run(t.objectStore(STORE))
          req.onsuccess = () => resolve(req.result ?? null)
          req.onerror = () => resolve(null)
          t.onabort = () => resolve(null)
        } catch {
          resolve(null)
        }
      })
  )
}

/* ------------------------------- reads ------------------------------- */

export function idbGetConversation(id: string): Promise<StoredConversation | null> {
  return tx<StoredConversation>("readonly", (s) => s.get(id) as IDBRequest<StoredConversation>)
}

export function idbListConversations(): Promise<StoredConversation[]> {
  return tx<StoredConversation[]>("readonly", (s) => s.getAll() as IDBRequest<StoredConversation[]>).then(
    (rows) =>
      (rows ?? []).sort(
        (a, b) =>
          Number(b.pinned) - Number(a.pinned) || (b.updatedAt ?? 0) - (a.updatedAt ?? 0)
      )
  )
}

export function idbConversationsSummary(): Promise<AiConversationSummary[]> {
  return idbListConversations().then((rows) =>
    rows.map((r) => ({
      id: r.id,
      title: r.title,
      pinned: r.pinned,
      updatedAt: new Date(r.updatedAt).toISOString(),
      messageCount: r.messageCount,
    }))
  )
}

/* ------------------------------- writes ------------------------------ */

export function idbPutConversation(record: StoredConversation): Promise<unknown> {
  return tx("readwrite", (s) => s.put(record))
}

/** Upsert a full conversation (server-shaped: already has final title). */
export async function idbSaveConversation(
  id: string,
  title: string,
  messages: AiChatMessage[],
  opts?: { pinned?: boolean; serverId?: boolean }
): Promise<void> {
  if (!id || !messages.length) return
  const prev = await idbGetConversation(id)
  const now = Date.now()
  await idbPutConversation({
    id,
    title: (title || prev?.title || "Conversation").slice(0, 90),
    pinned: opts?.pinned ?? prev?.pinned ?? false,
    createdAt: prev?.createdAt ?? now,
    updatedAt: now,
    messageCount: messages.length,
    messages,
    serverId: opts?.serverId ?? prev?.serverId ?? false,
  })
}

/** Patch a conversation's metadata (title / pinned) without touching messages. */
export async function idbPatchConversation(
  id: string,
  patch: { title?: string; pinned?: boolean }
): Promise<void> {
  const prev = await idbGetConversation(id)
  if (!prev) return
  await idbPutConversation({
    ...prev,
    ...(patch.title !== undefined ? { title: patch.title.slice(0, 90) } : {}),
    ...(patch.pinned !== undefined ? { pinned: patch.pinned } : {}),
    updatedAt: Date.now(),
  })
}

export function idbDeleteConversation(id: string): Promise<unknown> {
  return tx("readwrite", (s) => s.delete(id))
}

/** Wipe everything (used by "clear history" style maintenance). */
export function idbClearConversations(): Promise<unknown> {
  return tx("readwrite", (s) => s.clear())
}

/** Derive a compact conversation title from the first user message. */
export function deriveTitle(message: string): string {
  const clean = message.replace(/\s+/g, " ").trim()
  return clean.length > 60 ? `${clean.slice(0, 57)}…` : clean || "New conversation"
}
