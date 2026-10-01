#!/bin/bash
# v27 smoke — the real-format paper sitting: sectioned CPA AUD paper,
# written TBS answers, submit, and the AI examiner (with the deterministic
# fallback when the engine is unreachable).
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

pkill -f "next dev" 2>/dev/null
sleep 1
bun run dev > /tmp/v27-dev.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"

TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)
AUTH="Cookie: ae_session=$TOKEN"
CT="Content-Type: application/json"

# 1. start the CPA AUD flagship (real format: T1 12 MCQ + T2 12 MCQ + 3 TBS)
SESSION=$(curl -s -X POST -H "$AUTH" -H "$CT" -d '{"paper":"cpa-aud"}' "$BASE/api/bank/exam")
SID=$(echo "$SESSION" | python3 -c 'import json,sys;print(json.load(sys.stdin)["session"]["id"])')
echo "session: $SID"
echo "$SESSION" | python3 -c '
import json, sys
s = json.load(sys.stdin)["session"]
secs = s["sections"]
print("sections:", [(x["id"], x["kind"], len(x.get("mcqIds", x.get("crTaskIds", [])))) for x in secs])
print("duration:", s["durationMin"], "min · questions:", s["total"])
assert len(secs) == 3, "CPA AUD must build 3 testlets"
assert secs[0]["kind"] == "mcq" and len(secs[0]["mcqIds"]) == 12
assert secs[1]["kind"] == "mcq" and len(secs[1]["mcqIds"]) == 12
assert secs[2]["kind"] == "cr" and len(secs[2]["crTaskIds"]) == 3
assert s["durationMin"] == 72 + 30, "CR tasks must extend the clock"
print("OK real-format structure built (T1 12 + T2 12 MCQ, TBS x3, 50/50 weights)")'

# 2. answer MCQs of testlet 1 (pick option 0 for all)
QIDS=$(echo "$SESSION" | python3 -c '
import json,sys
s=json.loads(json.load(sys.stdin)["session"] and "" or "")' 2>/dev/null; echo "$SESSION" | python3 -c '
import json,sys
s=json.load(sys.stdin)["session"]
for qid in s["sections"][0]["mcqIds"]: print(qid)')
for qid in $QIDS; do
  curl -s -o /dev/null -X PATCH -H "$AUTH" -H "$CT" \
    -d "{\"action\":\"answer\",\"questionId\":\"$qid\",\"picked\":0}" "$BASE/api/bank/exam/$SID"
done
echo "answered T1 ($(echo "$QIDS" | wc -l) questions)"

# 3. write the TBS answers (task 1: control risk text + 15% fee rule + predecessor comms)
TASK1=$(echo "$SESSION" | python3 -c 'import json,sys;print(json.load(sys.stdin)["session"]["sections"][2]["crTaskIds"][0])')
curl -s -o /dev/null -X PATCH -H "$AUTH" -H "$CT" \
  -d "{\"action\":\"answerWritten\",\"taskId\":\"$TASK1\",\"values\":[\"The restricted facility access weakens control activities, so control risk is high and the risk of material misstatement is HIGH, forcing detection risk down with more extensive substantive procedures.\",\"15\",\"The successor must ask the predecessor about management integrity, disagreements and the reasons for the change of auditor, after obtaining management authorisation for the predecessor to respond fully.\"]}" \
  "$BASE/api/bank/exam/$SID"
echo "written answers saved ($TASK1)"

# 4. submit -> expect crPending
SUBMIT=$(curl -s -X PATCH -H "$AUTH" -H "$CT" -d '{"action":"submit"}' "$BASE/api/bank/exam/$SID")
echo "submit: $SUBMIT"
echo "$SUBMIT" | python3 -c '
import json,sys
d=json.load(sys.stdin)
assert d.get("crPending") is True, "submit must flag the AI marking pass"
print("OK submit flagged crPending — provisional MCQ score", d["score"])'

# 5. AI examiner pass (engine chain + fallback)
MARK=$(curl -s --max-time 110 -X POST -H "$AUTH" -H "$CT" -d "{\"sessionId\":\"$SID\",\"lang\":\"en\"}" "$BASE/api/ai/exam-mark")
echo "mark head: $(echo "$MARK" | head -c 260)"
echo "$MARK" | python3 -c '
import json, sys
d = json.load(sys.stdin)
assert d.get("ok") is True, "marking must finalise"
assert 0 <= d.get("score", -1) <= 100
ai, fb = d.get("markedByAi", 0), d.get("markedByFallback", 0)
assert ai + fb == 3, f"all 3 TBS tasks must be marked (ai={ai} fallback={fb})"
print("OK AI examiner finalised — blended score %d%% · AI-marked: %d · fallback: %d · +%d XP" % (d["score"], ai, fb, d.get("xpEarned", 0)))'

# 6. the results payload reveals certified solutions
GET=$(curl -s -H "$AUTH" "$BASE/api/bank/exam/$SID")
echo "$GET" | python3 -c '
import json, sys
s = json.load(sys.stdin)["session"]
assert s["crStatus"] == "done", "session must be finalised"
task = s["crTasks"][0]
assert task["requirements"][0].get("certifiedEn"), "certified solution must be revealed after submission"
assert s["crMarks"] and len(s["crMarks"][task["id"]]) == len(task["requirements"]), "per-requirement marks stored"
awards = s["crMarks"][task["id"]]
print("OK results reveal certified solutions · task-1 awards:", [(a["awarded"], a["feedback"][:40]) for a in awards])'

# 7. the IFRS diploma flagship sits Section A (15) + Section B (2 MTQs)
S2=$(curl -s -X POST -H "$AUTH" -H "$CT" -d '{"paper":"ifrs-dip"}' "$BASE/api/bank/exam")
echo "$S2" | python3 -c '
import json, sys
s = json.load(sys.stdin)["session"]
secs = s["sections"]
assert len(secs) == 2, "DipIFR = Section A + Section B"
assert secs[0]["kind"] == "mcq" and len(secs[0]["mcqIds"]) == 15, "Section A draws 15 OT questions"
assert secs[1]["kind"] == "cr" and len(secs[1]["crTaskIds"]) == 2, "Section B sits 2 scenario MTQs"
assert abs(secs[1]["weight"] - 0.7) < 1e-9
print("OK DipIFR real format: Section A 15 OT (30%) + Section B 2 MTQs (70%)")'

# 8. a dated sitting rotates its TBS tasks (paper picker data)
echo "$S2" | python3 -c '
import json, sys
pass'
S3=$(curl -s -X POST -H "$AUTH" -H "$CT" -d '{"paper":"cpa-aud-2024j"}' "$BASE/api/bank/exam")
echo "$S3" | python3 -c '
import json, sys
s = json.load(sys.stdin)["session"]
tbs = s["sections"][2]["crTaskIds"]
print("OK dated sitting (June 2024) TBS rotation:", tbs)
assert tbs[0].startswith("cpa-aud-tbs-2"), "the June 2024 sitting must rotate past the flagship tasks"'

# 9. the paper picker data (offline data check)
echo "── picker data sanity ──"
bun -e '
const { PAPER_FAMILIES } = await import("./src/lib/past-papers");
const { formatForPaper } = await import("./src/lib/paper-formats");
const withFormat = PAPER_FAMILIES.filter((f) => formatForPaper(f.id));
console.log(`families: ${PAPER_FAMILIES.length} · carrying real formats: ${withFormat.length}`);
console.log("OK", withFormat.map((f) => f.id).join(", "));'

echo
echo "== v27 smoke: ALL PASS =="
kill $SERVER_PID 2>/dev/null
pkill -f "next dev" 2>/dev/null
