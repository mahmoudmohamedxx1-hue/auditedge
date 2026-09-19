#!/bin/bash
# Final E2E: API safeguards + team add/delete flows + page smoke tests
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

pkill -f "next dev" 2>/dev/null; sleep 1
bun run dev > /dev/null 2>&1 &
SERVER_PID=$!
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  [ "$code" = "200" ] && break
  sleep 3
done
[ "$code" = "200" ] || { echo "SERVER FAILED"; exit 1; }

# fresh admin session token
TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)
ADMIN_ID=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^ADMIN=' | head -1)
COOKIE="Cookie: ae_session=$TOKEN"

echo "=== API check 1: DELETE self (expect 400 + clear error) ==="
SELF_ID=$(echo "$ADMIN_ID" | rg -o 'id not in output' || true)
# get admin id from db
ADMIN_DB_ID=$(bun run scripts/db-admin-id.ts 2>/dev/null | tail -1)
echo "admin id: $ADMIN_DB_ID"
curl -s -X DELETE -H "$COOKIE" "$BASE/api/team/$ADMIN_DB_ID" | head -1
echo ""

echo "=== API check 2: DELETE nonexistent member (expect ok/idempotent) ==="
curl -s -X DELETE -H "$COOKIE" "$BASE/api/team/nonexistent-id-123" | head -1
echo ""

echo "=== UI: add throwaway member then delete via sheet ==="
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser cookies set ae_session "$TOKEN" >/dev/null 2>&1
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1; sleep 2
agent-browser find text "Team" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1; sleep 2

# add member dialog
agent-browser find role button click --name "Add member" >/dev/null 2>&1 || agent-browser find text "Add member" click >/dev/null 2>&1
sleep 1.5
SNAP=$(agent-browser snapshot -i 2>/dev/null)
NAME_REF=$(echo "$SNAP" | rg -i 'name' | rg 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
EMAIL_REF=$(echo "$SNAP" | rg -i 'email' | rg 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "dialog fields: name=$NAME_REF email=$EMAIL_REF"
agent-browser fill "@$NAME_REF" "E2E Throwaway"
agent-browser fill "@$EMAIL_REF" "e2e.throwaway@auditedge.eg"
agent-browser find role button click --name "Add" >/dev/null 2>&1 || agent-browser find text "Add member" click >/dev/null 2>&1
sleep 2.5
ADDED=$(agent-browser get text "body" 2>/dev/null | rg -i "e2e.throwaway|member added" | head -2 | tr '\n' ' | ')
echo "add result: $ADDED"
agent-browser screenshot download/v4-team-added.png >/dev/null 2>&1

# now open the throwaway member sheet and delete via Remove
sleep 1
SNAP2=$(agent-browser snapshot -i 2>/dev/null)
ROW_REF=$(echo "$SNAP2" | rg -i "e2e.throwaway" | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "throwaway row ref: $ROW_REF"
if [ -n "$ROW_REF" ]; then
  agent-browser click "@$ROW_REF" >/dev/null 2>&1
  sleep 2
  SNAP3=$(agent-browser snapshot -i 2>/dev/null)
  REMOVE_REF=$(echo "$SNAP3" | rg -i 'remove' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
  echo "remove ref: $REMOVE_REF"
  agent-browser screenshot download/v4-team-sheet-other.png >/dev/null 2>&1
  if [ -n "$REMOVE_REF" ]; then
    agent-browser click "@$REMOVE_REF" >/dev/null 2>&1
    sleep 2.5
    RESULT=$(agent-browser get text "body" 2>/dev/null | rg -i "member removed|no longer has access|error" | head -2 | tr '\n' ' | ')
    echo "delete result: $RESULT"
    agent-browser screenshot download/v4-team-deleted.png >/dev/null 2>&1
  fi
fi

echo "=== UI: duplicate email error toast (error surfacing proof) ==="
agent-browser press Escape >/dev/null 2>&1; sleep 1
agent-browser find role button click --name "Add member" >/dev/null 2>&1
sleep 1.5
SNAP4=$(agent-browser snapshot -i 2>/dev/null)
NAME_REF2=$(echo "$SNAP4" | rg -i 'name' | rg 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
EMAIL_REF2=$(echo "$SNAP4" | rg -i 'email' | rg 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
agent-browser fill "@$NAME_REF2" "Duplicate Test"
agent-browser fill "@$EMAIL_REF2" "ahmed.yasser@auditedge.eg"
agent-browser find role button click --name "Add" >/dev/null 2>&1
sleep 2.5
DUP=$(agent-browser get text "body" 2>/dev/null | rg -i "already exists|error|failed" | head -2 | tr '\n' ' | ')
echo "duplicate result: $DUP"
agent-browser screenshot download/v4-duplicate-error.png >/dev/null 2>&1
agent-browser press Escape >/dev/null 2>&1

echo "=== smoke: Library + Studio + Courses load ==="
agent-browser find text "Library" click >/dev/null 2>&1; agent-browser wait --load networkidle >/dev/null 2>&1; sleep 1.5
LIB=$(agent-browser get text "body" 2>/dev/null | head -2 | tr '\n' ' | ')
echo "library: $LIB"
agent-browser find text "Studio" click >/dev/null 2>&1; agent-browser wait --load networkidle >/dev/null 2>&1; sleep 1.5
STU=$(agent-browser get text "body" 2>/dev/null | head -2 | tr '\n' ' | ')
echo "studio: $STU"
agent-browser find text "Courses" click >/dev/null 2>&1; agent-browser wait --load networkidle >/dev/null 2>&1; sleep 1.5
COU=$(agent-browser get text "body" 2>/dev/null | head -2 | tr '\n' ' | ')
echo "courses: $COU"
echo "=== console errors ==="
agent-browser errors 2>/dev/null | head -3

kill $SERVER_PID 2>/dev/null; pkill -f "next dev" 2>/dev/null
echo "DONE"
