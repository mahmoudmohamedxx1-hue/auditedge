#!/bin/bash
# Self-healing dev launcher.
#
# The workspace sandbox periodically sleeps/wakes and snapshot-restores the
# filesystem while processes are running, which corrupts the Turbopack
# persistent cache in .next/ (symptom: "An unexpected Turbopack error
# occurred" runtime overlay, page never opens). Clearing .next before every
# dev start makes the server immune: cold compile costs ~30-60s once, a
# corrupted cache costs an outage.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
rm -rf .next
exec next dev -p 3000
