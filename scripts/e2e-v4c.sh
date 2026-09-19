#!/bin/bash
# Precise re-test: team member sheet + self-delete error toast
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

agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1; sleep 2
agent-browser find text "Team" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1; sleep 2

# find the roster row for Ahmed Yasser (main content, not sidebar)
SNAP=$(agent-browser snapshot -i 2>/dev/null)
echo "--- rows mentioning Ahmed ---"
echo "$SNAP" | rg -i "ahmed" | head -5
# roster rows: pick the LAST ref on a line containing Ahmed (sidebar comes first in DOM)
ROW_REF=$(echo "$SNAP" | rg -i "ahmed" | rg -o 'ref=(e\d+)' -r '$1' | tail -1)
echo "row ref: $ROW_REF"

if [ -n "$ROW_REF" ]; then
  agent-browser click "@$ROW_REF" >/dev/null 2>&1
  sleep 2
  SNAP2=$(agent-browser snapshot -i 2>/dev/null)
  REMOVE_REF=$(echo "$SNAP2" | rg -i '\bremove\b' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
  echo "remove button ref: $REMOVE_REF"
  agent-browser screenshot download/v4-team-sheet.png >/dev/null 2>&1
  if [ -n "$REMOVE_REF" ]; then
    agent-browser click "@$REMOVE_REF" >/dev/null 2>&1
    sleep 2.5
    BODY=$(agent-browser get text "body" 2>/dev/null)
    echo "RESULT: $(echo "$BODY" | rg -i 'cannot remove yourself|member removed' | head -2 | tr '\n' ' | ')"
    agent-browser screenshot download/v4-self-delete-blocked.png >/dev/null 2>&1
  fi
fi

kill $SERVER_PID 2>/dev/null; pkill -f "next dev" 2>/dev/null
echo "DONE"
