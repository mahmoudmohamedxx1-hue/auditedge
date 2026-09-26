/**
 * v20 seed shared helpers — compact authoring types for the question bank
 * and course content (P0-1 / P0-2 / P1-6 / P1-8).
 */

export type BankArea = "auditing" | "accounting" | "egypt" | "ethics"

/** A hand-authored bank question in compact form. */
export type RawBankQ = {
  code: string
  stem: string
  options: string[]
  answer: number
  explanation: string
  diff: 1 | 2 | 3
}

/** Author a batch of questions for one standard tag. */
export const qs = (tag: string, area: BankArea, items: RawBankQ[]) =>
  items.map((q) => ({ ...q, tag, area }))

/** Arabic variant of a bank question, keyed by question code. */
export type ArQ = { code: string; stem: string; options: string[]; explanation: string }
