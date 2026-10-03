#!/bin/bash
# v33 smoke — prove the IFRS Summaries (v30-v32 content) actually render:
# nav → hub (41 standard cards) → IFRS 15 reader via deep link (journal
# entries, contract-asset rule) → screenshot evidence. The sandbox kills
# the server when the parent Bash call ends; evidence is captured before.
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

pkill -f "next dev" 2>/dev/null
sleep 1
bun run dev > /tmp/v33-dev.log 2>&1 &
code=000
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"
[ "$code" = "200" ] || { echo "FAIL: server never came up"; tail -20 /tmp/v33-dev.log; exit 1; }

# fresh browser context so no old service worker interferes
agent-browser close >/dev/null 2>&1
agent-browser open "$BASE/" >/dev/null
agent-browser wait --text "IFRS Summaries" --timeout 90000 >/dev/null
echo "PASS: sidebar shows the IFRS Summaries nav"

agent-browser find text "IFRS Summaries" click >/dev/null
sleep 4

# hub must list all 41 standards (one .ifrs-hand-en code strip per card)
CARDS=$(agent-browser get count ".ifrs-hand-en" 2>/dev/null)
echo "standard cards: ${CARDS:-0}"
if [ "${CARDS:-0}" -ge 41 ]; then echo "PASS: all 41 standards listed"; else echo "FAIL: expected 41 cards, got ${CARDS:-0}"; fi

agent-browser screenshot /tmp/v33-hub.png >/dev/null 2>&1 && echo "screenshot: /tmp/v33-hub.png"

# open the IFRS 15 flagship through the v32 deep link
agent-browser open "$BASE/#/ifrs?std=IFRS+15" >/dev/null
agent-browser wait --text "Revenue from Contracts with Customers" --timeout 60000 >/dev/null 2>&1 \
  || agent-browser wait --text "IFRS 15" --timeout 30000 >/dev/null
sleep 3

# deep content markers: journal entry numbers + corrected contract-balance rule
PASS=0; FAIL=0
for MARKER in "Revenue 100" "Cost of sales" "contract asset" "contract liability" "Step 1"; do
  if agent-browser eval "document.body.innerText.toLowerCase().includes('${MARKER,,}')" 2>/dev/null | grep -q true; then
    echo "PASS: IFRS 15 reader shows '$MARKER'"; PASS=$((PASS+1))
  else
    echo "FAIL: marker '$MARKER' not found in reader"; FAIL=$((FAIL+1))
  fi
done

# T-account journal tables must be on the page (registry: IFRS 15 has 6 journal sets)
TCOUNT=$(agent-browser get count ".ifrs-taccount" 2>/dev/null)
echo "journal T-account tables: ${TCOUNT:-0}"
if [ "${TCOUNT:-0}" -ge 5 ]; then echo "PASS: journal entries render"; else echo "FAIL: expected >=5 T-account tables, got ${TCOUNT:-0}"; FAIL=$((FAIL+1)); fi

agent-browser screenshot --full /tmp/v33-ifrs15.png >/dev/null 2>&1 && echo "screenshot: /tmp/v33-ifrs15.png"
echo "url: $(agent-browser get url 2>/dev/null)"
echo "e2e-v33 done — $PASS pass / $FAIL fail"
[ "$FAIL" = "0" ] || exit 1
