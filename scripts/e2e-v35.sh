#!/bin/bash
# v35 smoke — the Sameh Zidan exams now open INSIDE the website:
# nav → Exam Center → DipIFR panel → click a sitting chip → the in-app
# viewer renders the self-hosted PDF (same-origin iframe), the answered
# copy is badged, ESC closes, heavy companions stay labelled external
# downloads, and the sidebar shows the new v-release badge.
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 1
# robust clean: the sandbox sometimes races the rm; retry once
rm -rf .next 2>/dev/null || { sleep 2; chmod -R u+w .next 2>/dev/null; rm -rf .next 2>/dev/null; } || true
bunx next dev -p 3000 > /tmp/v35-dev.log 2>&1 &
code=000
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"
[ "$code" = "200" ] || { echo "FAIL: server never came up"; tail -20 /tmp/v35-dev.log; exit 1; }

# the mirrored PDF must be served by the app itself
CT=$(curl -s -o /dev/null -w "%{content_type}" "$BASE/exams/dipifr/2024-12.pdf")
SZ=$(curl -s -o /dev/null -w "%{size_download}" "$BASE/exams/dipifr/2024-12.pdf")
echo "self-hosted 2024-12.pdf: $CT ($SZ bytes)"
if [[ "$CT" == application/pdf* && "$SZ" -gt 150000 ]]; then echo "PASS: app serves the mirrored paper"; else echo "FAIL: mirrored paper not served"; fi

# fresh browser context so no old service worker interferes; a freshly
# launched browser sometimes drops a direct hash-URL open, so stage it:
# root first (wait for the shell), then navigate to the exam hash route
agent-browser close >/dev/null 2>&1
sleep 2
agent-browser open "$BASE/" >/dev/null
agent-browser wait --text "Exam Center" --timeout 150000 >/dev/null 2>&1
sleep 2
agent-browser open "$BASE/#/exam" >/dev/null
# cold Turbopack compile of the exam-center chunk can take a while
agent-browser wait --text "The real papers" --timeout 150000 >/dev/null 2>&1 \
  || agent-browser wait --text "DipIFR" --timeout 120000 >/dev/null
sleep 3
PASS=0; FAIL=0

# 1 — the sidebar release badge
if agent-browser eval "document.querySelector('aside')?.innerText.includes('v35')" 2>/dev/null | grep -q true; then
  echo "PASS: sidebar shows the v35 release badge"; PASS=$((PASS+1))
else
  echo "FAIL: no v35 badge in the sidebar"; FAIL=$((FAIL+1))
fi

# 2 — click the December 2024 sitting chip → in-app viewer
agent-browser find text "December 2024" click >/dev/null 2>&1
sleep 3
IFRAME=$(agent-browser eval "document.querySelector('[role=dialog] iframe')?.getAttribute('src')" 2>/dev/null | tr -d '"')
echo "viewer iframe src: ${IFRAME:-none}"
if [[ "$IFRAME" == *"/exams/dipifr/2024-12.pdf" ]]; then
  echo "PASS: December 2024 opens in-app (self-hosted iframe)"; PASS=$((PASS+1))
else
  echo "FAIL: viewer iframe not pointing at the mirrored paper"; FAIL=$((FAIL+1))
fi

# 3 — viewer chrome: download + open-externally actions in the dialog
if agent-browser eval "!!document.querySelector('[role=dialog] a[download]') && !!document.querySelector('[role=dialog] a[target=_blank]')" 2>/dev/null | grep -q true; then
  echo "PASS: viewer offers download + open-externally"; PASS=$((PASS+1))
else
  echo "FAIL: viewer actions missing"; FAIL=$((FAIL+1))
fi
agent-browser screenshot /tmp/v35-viewer.png >/dev/null 2>&1 && echo "screenshot: /tmp/v35-viewer.png"

# 4 — ESC closes the viewer and we are still on the exam page
agent-browser eval "document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))" >/dev/null 2>&1
sleep 2
if agent-browser eval "!document.querySelector('[role=dialog]')" 2>/dev/null | grep -q true; then
  echo "PASS: ESC closes the viewer"; PASS=$((PASS+1))
else
  echo "FAIL: viewer still open after ESC"; FAIL=$((FAIL+1))
fi
URL=$(agent-browser get url 2>/dev/null)
if [[ "$URL" == *"/exam"* || "$URL" == *"/exam#"* || "$URL" == "$BASE/"*"#"* ]]; then
  echo "PASS: still inside the app ($URL)"; PASS=$((PASS+1))
else
  echo "FAIL: navigated away to $URL"; FAIL=$((FAIL+1))
fi

# 5 — the answered June 2025 copy is badged in the viewer
agent-browser find text "June 2025" click >/dev/null 2>&1
sleep 3
if agent-browser eval "document.querySelector('[role=dialog]')?.innerText.includes('with answers')" 2>/dev/null | grep -q true; then
  echo "PASS: June 2025 answered copy opens with its badge"; PASS=$((PASS+1))
else
  echo "FAIL: answered-copy badge missing in viewer"; FAIL=$((FAIL+1))
fi
agent-browser eval "document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))" >/dev/null 2>&1
sleep 2

# 6 — heavy companions are clearly-labelled external downloads
BODY=$(agent-browser eval "document.body.innerText" 2>/dev/null)
for MARKER in "External download" "103 MB" "46 MB" "Opens in-app"; do
  if echo "$BODY" | grep -q "$MARKER"; then
    echo "PASS: panel text shows '$MARKER'"; PASS=$((PASS+1))
  else
    echo "FAIL: '$MARKER' not found on the panel"; FAIL=$((FAIL+1))
  fi
done
agent-browser screenshot --full /tmp/v35-panel.png >/dev/null 2>&1 && echo "screenshot: /tmp/v35-panel.png"

echo "e2e-v35 done — $PASS pass / $FAIL fail"
[ "$FAIL" = "0" ] || exit 1
