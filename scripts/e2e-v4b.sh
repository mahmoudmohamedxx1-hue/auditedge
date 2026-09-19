#!/bin/bash
# Focused re-test: team self-delete error toast + AI tutor streaming
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

echo "=== start server ==="
pkill -f "next dev" 2>/dev/null; sleep 1
bun run dev > /dev/null 2>&1 &
SERVER_PID=$!
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  [ "$code" = "200" ] && { echo "ready"; break; }
  sleep 3
done
[ "$code" = "200" ] || { echo "SERVER FAILED"; exit 1; }

# reuse existing session cookie (still set in browser from run 1, valid 2h)
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
WHO=$(agent-browser get text "body" 2>/dev/null | head -3 | tr '\n' ' ')
echo "page: $WHO"

echo "=== TEAM: self-delete must error ==="
agent-browser find text "Team" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
# open the member sheet for the signed-in admin (Ahmed Yasser)
agent-browser find text "Ahmed Yasser" click >/dev/null 2>&1
sleep 2
# dump interactive elements to find the Remove button ref
SNAP=$(agent-browser snapshot -i 2>/dev/null)
echo "$SNAP" | rg -i "remove" | head -3
REMOVE_REF=$(echo "$SNAP" | rg -i 'remove' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "remove ref: $REMOVE_REF"
if [ -n "$REMOVE_REF" ]; then
  agent-browser click "@$REMOVE_REF" >/dev/null 2>&1
  sleep 2.5
  BODY=$(agent-browser get text "body" 2>/dev/null)
  echo "toast: $(echo "$BODY" | rg -i 'cannot remove yourself|removed' | head -2 | tr '\n' ' | ')"
  agent-browser screenshot download/v4-self-delete-blocked.png >/dev/null 2>&1
fi
# close the sheet if open
agent-browser press Escape >/dev/null 2>&1; sleep 1

echo "=== AI TUTOR: streaming with 2025-26 landscape ==="
agent-browser find text "AI Tutor" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
SNAP2=$(agent-browser snapshot -i 2>/dev/null)
TA_REF=$(echo "$SNAP2" | rg -i 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "textarea ref: $TA_REF"
agent-browser fill "@$TA_REF" "What changed recently in Egyptian auditing standards?"
agent-browser press Enter >/dev/null 2>&1
echo "waiting for stream (45s)..."
sleep 45
BODY=$(agent-browser get text "body" 2>/dev/null)
echo "answer evidence: $(echo "$BODY" | rg -i '2027|November 2025|FRA|framework|quality control' | head -4 | tr '\n' ' | ')"
agent-browser screenshot download/v4-ai-tutor.png >/dev/null 2>&1
echo "=== console errors ==="
agent-browser errors 2>/dev/null | head -3

kill $SERVER_PID 2>/dev/null; pkill -f "next dev" 2>/dev/null
echo "DONE"
