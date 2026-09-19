#!/bin/bash
# Final E2E: complete add-member → delete-member roundtrip + duplicate-email error toast
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

TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser cookies set ae_session "$TOKEN" >/dev/null 2>&1
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1; sleep 2

agent-browser find text "Team" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1; sleep 2

echo "=== add member (all fields + Enter submit) ==="
agent-browser find role button click --name "Add member" >/dev/null 2>&1
sleep 1.5
SNAP=$(agent-browser snapshot -i 2>/dev/null)
echo "$SNAP" | rg 'textbox' | head -6
NAME_REF=$(echo "$SNAP" | rg 'Full name|textbox "Name' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
[ -z "$NAME_REF" ] && NAME_REF=$(echo "$SNAP" | rg 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
EMAIL_REF=$(echo "$SNAP" | rg -i 'email' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
PASS_REF=$(echo "$SNAP" | rg -i 'password' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "refs: name=$NAME_REF email=$EMAIL_REF password=$PASS_REF"
agent-browser fill "@$NAME_REF" "E2E Throwaway"
agent-browser fill "@$EMAIL_REF" "e2e.throwaway@auditedge.eg"
agent-browser fill "@$PASS_REF" "testpass123"
agent-browser press Enter >/dev/null 2>&1
sleep 3
ADDED=$(agent-browser get text "body" 2>/dev/null | rg -i "e2e.throwaway|member added|error" | head -3 | tr '\n' ' | ')
echo "add result: $ADDED"
agent-browser screenshot download/v4-team-added.png >/dev/null 2>&1

echo "=== open sheet and delete ==="
SNAP2=$(agent-browser snapshot -i 2>/dev/null)
ROW_REF=$(echo "$SNAP2" | rg "E2E Throwaway" | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "row: $ROW_REF"
if [ -n "$ROW_REF" ]; then
  agent-browser click "@$ROW_REF" >/dev/null 2>&1
  sleep 2
  SNAP3=$(agent-browser snapshot -i 2>/dev/null)
  echo "$SNAP3" | rg -i 'remove|button' | rg -i 'remove' | head -3
  REMOVE_REF=$(echo "$SNAP3" | rg -i '\bremove\b' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
  echo "remove ref: $REMOVE_REF"
  agent-browser screenshot download/v4-team-sheet-other.png >/dev/null 2>&1
  if [ -n "$REMOVE_REF" ]; then
    agent-browser click "@$REMOVE_REF" >/dev/null 2>&1
    sleep 3
    DEL=$(agent-browser get text "body" 2>/dev/null | rg -i "member removed|no longer|error" | head -2 | tr '\n' ' | ')
    echo "delete result: $DEL"
    agent-browser screenshot download/v4-team-deleted.png >/dev/null 2>&1
  fi
fi

echo "=== duplicate email → error toast ==="
sleep 1
agent-browser find role button click --name "Add member" >/dev/null 2>&1
sleep 1.5
SNAP4=$(agent-browser snapshot -i 2>/dev/null)
NAME2=$(echo "$SNAP4" | rg 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
EMAIL2=$(echo "$SNAP4" | rg -i 'email' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
PASS2=$(echo "$SNAP4" | rg -i 'password' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
agent-browser fill "@$NAME2" "Duplicate Person"
agent-browser fill "@$EMAIL2" "ahmed.yasser@auditedge.eg"
agent-browser fill "@$PASS2" "testpass123"
agent-browser press Enter >/dev/null 2>&1
sleep 3
DUP=$(agent-browser get text "body" 2>/dev/null | rg -i "already|exists|error" | head -2 | tr '\n' ' | ')
echo "duplicate result: $DUP"
agent-browser screenshot download/v4-duplicate-error.png >/dev/null 2>&1
agent-browser press Escape >/dev/null 2>&1

echo "=== console errors ==="
agent-browser errors 2>/dev/null | head -3
kill $SERVER_PID 2>/dev/null; pkill -f "next dev" 2>/dev/null
echo "DONE"
