import type { SectorDeepDive, SectorId } from "./sectors-types"
import { SECTORS_DEEP_A } from "./sectors-deep-a"
import { SECTORS_DEEP_B } from "./sectors-deep-b"
import { SECTORS_DEEP_C } from "./sectors-deep-c"
import { SECTORS_DEEP_D } from "./sectors-deep-d"

/** Deep-dive content for all 20 sectors. The Record<SectorId, …> type makes
 *  the compiler fail if a sector is added to the base files without a deep
 *  dive — completeness is enforced, not remembered. */
export const SECTORS_DEEP: Record<SectorId, SectorDeepDive> = {
  ...SECTORS_DEEP_A,
  ...SECTORS_DEEP_B,
  ...SECTORS_DEEP_C,
  ...SECTORS_DEEP_D,
} as Record<SectorId, SectorDeepDive>

export type { SectorDeepDive, SectorId } from "./sectors-types"
