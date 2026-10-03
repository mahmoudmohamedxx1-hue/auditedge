/**
 * v31 — IFRS Summaries · Specialized & Other group.
 */

import type { Standard } from "./types"
import { IFRS_2 } from "./standards/ifrs-02"
import { IFRS_6 } from "./standards/ifrs-06"
import { IFRS_8 } from "./standards/ifrs-08"
import { IFRS_14 } from "./standards/ifrs-14"
import { IFRS_17 } from "./standards/ifrs-17"
import { IAS_21 } from "./standards/ias-21"
import { IAS_29 } from "./standards/ias-29"
import { IAS_26 } from "./standards/ias-26"

export const SPECIALIZED_STANDARDS: Standard[] = [
  IFRS_2,
  IFRS_6,
  IFRS_8,
  IFRS_14,
  IFRS_17,
  IAS_21,
  IAS_29,
  IAS_26,
]
