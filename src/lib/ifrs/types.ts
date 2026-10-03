/**
 * v30 — IFRS Summaries: the data model behind the handwritten study-notes
 * section. The block kinds mirror, one-for-one, the visual devices the
 * user's IFRS 15 notes PDF uses:
 *
 *   • red-asterisk section headings        →  h
 *   • dense principle paragraphs           →  p
 *   • bulleted lists                       →  list
 *   • numbered models (the 5-step model)   →  steps
 *   • decision trees with hand-drawn boxes →  tree
 *   • DR/CR T-account journal entries      →  journal
 *   • handwritten formulas (PoC …)         →  formula
 *   • the other-language margin notes      →  note
 *   • red wavy-underline exam tips         →  tip
 *   • worked numeric examples              →  example
 *
 * Every human-readable string is a bilingual { en, ar } pair so the whole
 * section follows the site-wide EN/عربي toggle.
 */

export type Bi = { readonly en: string; readonly ar: string }

/** A decision-tree outcome: the box the branch points at. `red` paints it
 *  in the red pen, the way the notes flag the accounting answer. */
export type TreeOutcome = Bi & { red?: boolean }

/** One branch of a decision tree: a condition box that leads to an
 *  outcome or to further branching. */
export type TreeBranch = {
  when: Bi
  then: TreeOutcome
  children?: TreeBranch[]
}

export type Block =
  /** red-asterisk section heading — * Objective * */
  | { kind: "h"; text: Bi }
  /** body paragraph in the graphite ink */
  | { kind: "p"; text: Bi }
  /** bulleted list (• …) */
  | { kind: "list"; items: Bi[] }
  /** numbered list (1. 2. 3. — the five-step model etc.) */
  | { kind: "steps"; title?: Bi; items: Bi[] }
  /** decision tree: a root statement branching into outcomes */
  | { kind: "tree"; title?: Bi; root: Bi; branches: TreeBranch[] }
  /** T-account journal entries: rows of DR / CR descriptions */
  | { kind: "journal"; title?: Bi; rows: { dr?: Bi; cr?: Bi; red?: boolean }[] }
  /** handwritten formula lines, rendered large */
  | { kind: "formula"; title?: Bi; lines: Bi[] }
  /** a margin annotation in the OTHER language (Arabic notes beside the
   *  English body — and vice-versa), exactly like the notes PDF */
  | { kind: "note"; text: Bi }
  /** exam tip — the red wavy underline */
  | { kind: "tip"; text: Bi }
  /** worked numeric example */
  | { kind: "example"; title: Bi; lines: Bi[] }

export type TopicId =
  | "presentation"
  | "assets"
  | "revenue"
  | "instruments"
  | "groups"
  | "specialized"

export type Topic = {
  id: TopicId
  label: Bi
  /** one of the workspace accent colors (gold/sage/olive/plum/clay) */
  accent: "gold" | "sage" | "clay" | "plum" | "olive"
}

export type Standard = {
  /** "IFRS 15" / "IAS 36" … */
  code: string
  title: Bi
  topic: TopicId
  /** effective / issued one-liner shown under the sheet title */
  effective: Bi
  /** e.g. IFRS 17 replaces IFRS 4 */
  replaces?: Bi
  /** true for the flagship IFRS 15 notes (styled + sorted first) */
  flagship?: boolean
  blocks: Block[]
}

export const TOPICS: Topic[] = [
  {
    id: "presentation",
    label: { en: "Presentation & Policies", ar: "العرض والسياسات" },
    accent: "gold",
  },
  {
    id: "assets",
    label: { en: "Assets", ar: "الأصول" },
    accent: "sage",
  },
  {
    id: "revenue",
    label: { en: "Revenue & Liabilities", ar: "الإيرادات والالتزامات" },
    accent: "clay",
  },
  {
    id: "instruments",
    label: { en: "Financial Instruments", ar: "الأدوات المالية" },
    accent: "plum",
  },
  {
    id: "groups",
    label: { en: "Groups & Investments", ar: "المجموعات والاستثمارات" },
    accent: "olive",
  },
  {
    id: "specialized",
    label: { en: "Specialized & Other", ar: "المتخصصة وأخرى" },
    accent: "gold",
  },
]
