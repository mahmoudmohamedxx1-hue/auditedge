/**
 * v31 — IFRS Summaries · Revenue & Liabilities group.
 * IFRS 15 is the FLAGSHIP summary (standards/ifrs-15.ts): it mirrors the
 * user's handwritten IFRS 15 notes PDF section for section and sets the
 * depth bar every other standard in this folder is written to.
 */

import type { Standard } from "./types"
import { IFRS_15 } from "./standards/ifrs-15"
import { IAS_19 } from "./standards/ias-19"
import { IAS_37 } from "./standards/ias-37"
import { IAS_12 } from "./standards/ias-12"
import { IAS_20 } from "./standards/ias-20"
import { IAS_23 } from "./standards/ias-23"

export const REVENUE_STANDARDS: Standard[] = [
  IFRS_15,
  IAS_19,
  IAS_37,
  IAS_12,
  IAS_20,
  IAS_23,
]
