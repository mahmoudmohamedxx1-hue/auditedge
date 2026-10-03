/**
 * v31 — IFRS Summaries · Assets group.
 */

import type { Standard } from "./types"
import { IAS_2 } from "./standards/ias-02"
import { IAS_16 } from "./standards/ias-16"
import { IAS_36 } from "./standards/ias-36"
import { IAS_38 } from "./standards/ias-38"
import { IAS_40 } from "./standards/ias-40"
import { IAS_41 } from "./standards/ias-41"
import { IFRS_5 } from "./standards/ifrs-05"
import { IFRS_16 } from "./standards/ifrs-16"

export const ASSET_STANDARDS: Standard[] = [
  IAS_2,
  IAS_16,
  IAS_36,
  IAS_38,
  IAS_40,
  IAS_41,
  IFRS_5,
  IFRS_16,
]
