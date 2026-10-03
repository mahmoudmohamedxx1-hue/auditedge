/**
 * v31 — IFRS Summaries · Financial Instruments group.
 */

import type { Standard } from "./types"
import { IFRS_9 } from "./standards/ifrs-09"
import { IFRS_7 } from "./standards/ifrs-07"
import { IFRS_13 } from "./standards/ifrs-13"
import { IAS_32 } from "./standards/ias-32"
import { IAS_39 } from "./standards/ias-39"

export const INSTRUMENT_STANDARDS: Standard[] = [
  IFRS_9,
  IFRS_7,
  IFRS_13,
  IAS_32,
  IAS_39,
]
