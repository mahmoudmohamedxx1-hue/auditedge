/**
 * v31 — IFRS Summaries · Presentation & Policies group.
 * One file per standard under ./standards/ — each written to the
 * depth bar set by the user's IFRS 15 notes PDF (the flagship).
 */

import type { Standard } from "./types"
import { IFRS_1 } from "./standards/ifrs-01"
import { IAS_1 } from "./standards/ias-01"
import { IAS_7 } from "./standards/ias-07"
import { IAS_8 } from "./standards/ias-08"
import { IAS_10 } from "./standards/ias-10"
import { IAS_33 } from "./standards/ias-33"
import { IAS_34 } from "./standards/ias-34"
import { IAS_24 } from "./standards/ias-24"

export const PRESENTATION_STANDARDS: Standard[] = [
  IFRS_1,
  IAS_1,
  IAS_7,
  IAS_8,
  IAS_10,
  IAS_33,
  IAS_34,
  IAS_24,
]
