#!/bin/bash
# E2E verification for AuditEdge v4 fixes — runs server + browser tests in one session
set -u
cd /home/z/my-project

PORT=3000
BASE="http://127.0.0.1:$PORT"

echo "=== 1. Start dev server ==="
pkill -f "next dev" 2>/dev/null
sleep 1
bun run dev > /dev/null 2>&1 &
SERVER_PID=$!

# wait for readiness (first compile can take ~30s)
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then echo "server ready after ${i} tries"; break; fi
  sleep 3
done
if [ "$code" != "200" ]; then echo "!! SERVER FAILED TO START"; kill $SERVER_PID 2>/dev/null; exit 1; fi

echo "=== 2. Open app (fresh, no session) ==="
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 1
SIGNIN_TEXT=$(agent-browser get text "body" 2>/dev/null | head -5)
echo "sign-in screen: $(echo "$SIGNIN_TEXT" | head -2 | tr '\n' ' | ')"
agent-browser screenshot download/v4-signin.png >/dev/null 2>&1

echo "=== 3. Rate limiter: wrong password x9 on a real account ==="
# find the email input
agent-browser snapshot -i >/dev/null 2>&1
EMAIL_REF=$(agent-browser snapshot -i 2>/dev/null | rg -o 'ref=(e\d+)' -r '$1' | head -1)
echo "email field ref: $EMAIL_REF"

for i in 1 2 3 4 5 6 7 8 9; do
  agent-browser find role textbox fill --name "Email" "ahmed.yasser@auditedge.eg" >/dev/null 2>&1 || true
  agent-browser find role textbox fill --name "Password" "wrongpass$i" >/dev/null 2>&1 || true
  agent-browser find role button click --name "Sign in" >/dev/null 2>&1 || agent-browser find text "Sign in" click >/dev/null 2>&1 || true
  sleep 1.2
done
LOCKOUT=$(agent-browser get text "body" 2>/dev/null | rg -i "too many failed" | head -1)
echo "lockout message: ${LOCKOUT:-NOT FOUND}"
agent-browser screenshot download/v4-rate-limit.png >/dev/null 2>&1

echo "=== 4. Inject admin session, load dashboard ==="
TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)
echo "token: ${TOKEN:0:12}..."
agent-browser cookies set ae_session "$TOKEN" >/dev/null 2>&1
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
DASH=$(agent-browser get text "body" 2>/dev/null | head -3 | tr '\n' ' | ')
echo "dashboard: $DASH"
agent-browser screenshot download/v4-dashboard.png >/dev/null 2>&1

echo "=== 5. Team: try to delete YOURSELF (must now show error, not false success) ==="
agent-browser find text "Team" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 1.5
# open own member sheet: click on Ahmed Yasser's row
agent-browser find text "Ahmed Yasser" click >/dev/null 2>&1
sleep 1.5
agent-browser screenshot download/v4-team-self.png >/dev/null 2>&1
# click Remove member in the sheet
agent-browser find role button click --name "Remove member" >/dev/null 2>&1 || agent-browser find text "Remove member" click >/dev/null 2>&1 || true
sleep 1
agent-browser find role button click --name "Remove" >/dev/null 2>&1 || agent-browser find text "Remove" click >/dev/null 2>&1 || true
sleep 2
SELFDEL=$(agent-browser get text "body" 2>/dev/null | rg -i "cannot remove yourself" | head -1)
echo "self-delete error toast: ${SELFDEL:-NOT FOUND}"
agent-browser screenshot download/v4-self-delete-blocked.png >/dev/null 2>&1
# close sheet
agent-browser find role button click --name "Close" >/dev/null 2>&1 || true
sleep 1

echo "=== 6. AI tab: streaming answer with updated prompt ==="
agent-browser find text "AI Tutor" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
agent-browser find role textbox fill --name "Ask" "What changed in Egyptian auditing standards recently?" >/dev/null 2>&1 || true
agent-browser snapshot -i >/dev/null 2>&1
# send via Enter
agent-browser press Enter >/dev/null 2>&1
# wait for streaming to progress
sleep 25
AI_TEXT=$(agent-browser get text "body" 2>/dev/null | rg -i "2027|FRA|November 2025|framework" | head -3 | tr '\n' ' | ')
echo "AI mentions Egypt 2025/2027 landscape: ${AI_TEXT:-NOT FOUND}"
agent-browser screenshot download/v4-ai-tutor.png >/dev/null 2>&1

echo "=== 7. Console errors check ==="
ERRORS=$(agent-browser errors 2>/dev/null | rg -v "^$" | head -5)
echo "browser errors: ${ERRORS:-none}"

echo "=== 8. Done — stop server ==="
kill $SERVER_PID 2>/dev/null
pkill -f "next dev" 2>/dev/null
echo "E2E COMPLETE"
