/**
 * v31 — IFRS Summaries · Groups & Investments group.
 */

import type { Standard } from "./types"
import { IFRS_3 } from "./standards/ifrs-03"
import { IFRS_10 } from "./standards/ifrs-10"
import { IFRS_11 } from "./standards/ifrs-11"
import { IFRS_12 } from "./standards/ifrs-12"
import { IAS_27 } from "./standards/ias-27"
import { IAS_28 } from "./standards/ias-28"

export const GROUP_STANDARDS: Standard[] = [
  IFRS_3,
  IFRS_10,
  IFRS_11,
  IFRS_12,
  IAS_27,
  IAS_28,
]
