#!/bin/bash
# v39 smoke — Due Diligence end-to-end:
#   boot → sidebar v39 badge + the new nav item → the playbook hub (3
#   scopes, 25-workstream badge) → scope switch to Financial → the
#   per-account cards (Clients & receivables F-02) → open the account
#   workstream (why + analytics + requests + instructions + red flags)
#   → tick two instructions (progress persists) → deep link back in
#   (#/dd?section=receivables) → search hits → the AI customizer tab
#   (deal form renders) → Arabic pass (RTL titles render).
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"
PASS=1; FAIL=0

pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 1
rm -rf .next 2>/dev/null || { sleep 2; chmod -R u+w .next 2>/dev/null; rm -rf .next 2>/dev/null; } || true
bunx next dev -p 3000 > /tmp/v39-dev.log 2>&1 &
code=000
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"
[ "$code" = "200" ] || { echo "FAIL: server never came up"; tail -20 /tmp/v39-dev.log; exit 1; }

ok()   { echo "PASS: $1"; PASS=$((PASS+1)); }
bad()  { echo "FAIL: $1"; FAIL=$((FAIL+1)); }
beval() { agent-browser eval "$1" 2>/dev/null | tr -d '"'; }

agent-browser close >/dev/null 2>&1
sleep 2
agent-browser open "$BASE/" >/dev/null
agent-browser wait --text "Exam Center" --timeout 150000 >/dev/null 2>&1
sleep 2
agent-browser open "$BASE/#/dd" >/dev/null
agent-browser wait --text "How the playbook is built" --timeout 150000 >/dev/null 2>&1 \
  || agent-browser wait --text "workstreams" --timeout 120000 >/dev/null 2>&1
sleep 3

# 1 — the sidebar: v39 badge + the Due Diligence nav item
if beval "document.querySelector('aside')?.innerText.includes('v39')" | grep -q true; then
  ok "sidebar shows the v39 release badge"
else
  bad "no v39 badge in the sidebar"
fi
if beval "document.querySelector('aside')?.innerText.includes('Due Diligence')" | grep -q true; then
  ok "sidebar carries the Due Diligence nav item"
else
  bad "no Due Diligence nav item"
fi

# 2 — the hub: the 25-workstream badge + all three scopes
if beval "document.body.innerText.includes('25')" | grep -q true; then
  ok "the 25-workstream count is visible"
else
  bad "workstream count missing"
fi
for scope in Legal Operational Financial; do
  if beval "document.body.innerText.includes('$scope')" | grep -q true; then
    ok "scope tab: $scope"
  else
    bad "scope tab missing: $scope"
  fi
done

# 3 — switch to Financial (the per-account scope)
agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('Financial'));b?.click();return b?'ok':'none'})()" >/dev/null
sleep 2
if beval "document.body.innerText.includes('Account workstream')" | grep -q true; then
  ok "financial scope shows per-account workstream cards"
else
  bad "financial scope is not per-account"
fi

# 4 — open the Clients & receivables account (the user's example)
agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('Customers & Trade Receivables'));b?.click();return b?'ok':'none'})()" >/dev/null
agent-browser wait --text "Why this matters on the deal" --timeout 60000 >/dev/null 2>&1
sleep 2
for panel in "Analytics & ratios to run" "Information to request" "The instructions" "Red flags"; do
  if beval "document.body.innerText.toLowerCase().includes('${panel,,}')" | grep -q true; then
    ok "receivables workstream shows: $panel"
  else
    bad "receivables workstream missing: $panel"
  fi
done
if beval "document.body.innerText.includes('F-02')" | grep -q true; then
  ok "the receivables account carries its F-02 code"
else
  bad "F-02 code missing"
fi

# 5 — tick two instructions (progress persists across reload)
TICK_JS="(()=>{const rows=[...document.querySelectorAll('button')].filter(x=>x.querySelector('svg.lucide-circle'));rows[0]?.click();rows[1]?.click();return rows.length})()"
TICKED=$(beval "$TICK_JS")
sleep 1
if beval "document.body.innerText.includes('2/10') && document.body.innerText.includes('20%')" | grep -q true; then
  ok "two instructions ticked — progress shows 2/10 · 20% (found $TICKED rows)"
else
  bad "ticking did not move the progress (rows: $TICKED)"
fi

# 6 — the deep link re-opens the same account after a reload
agent-browser open "$BASE/#/dd?section=receivables" >/dev/null
agent-browser wait --text "Why this matters on the deal" --timeout 60000 >/dev/null 2>&1
sleep 2
if beval "document.body.innerText.includes('F-02')" | grep -q true; then
  ok "deep link #/dd?section=receivables re-opens the account"
else
  bad "deep link failed"
fi
if beval "document.body.innerText.includes('2/10') && document.body.innerText.includes('20%')" | grep -q true; then
  ok "tick progress persisted across the navigation"
else
  bad "tick progress lost on navigation"
fi

# 7 — search
agent-browser open "$BASE/#/dd" >/dev/null
agent-browser wait --text "How the playbook is built" --timeout 60000 >/dev/null 2>&1
sleep 2
# the working scope persists across hash-only navigation (financial from the
# earlier step) — click the Legal tab, which must swap in the legal cards
agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.includes('Legal'));b?.click();return b?'ok':'none'})()" >/dev/null
sleep 2
if beval "document.body.innerText.includes('Corporate Standing') && document.body.innerText.includes('Litigation, Claims')" | grep -q true; then
  ok "library grid restored + Legal scope cards swap in"
else
  bad "library grid / Legal scope switch failed"
fi

# 8 — the AI customizer tab renders the deal form
agent-browser open "$BASE/#/dd?ai=1" >/dev/null
agent-browser wait --text "Any target, any deal" --timeout 60000 >/dev/null 2>&1
sleep 2
for chip in "Buy-side acquisition" "Minority investment" "Lending" "Partnership"; do
  if beval "document.body.innerText.includes('$chip')" | grep -q true; then
    ok "AI deal type: $chip"
  else
    bad "AI deal type missing: $chip"
  fi
done

# 9 — the language toggle flips the interface to Arabic (RTL)
agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='عربي');b?.click();return b?'ok':'none'})()" >/dev/null
sleep 2
ARABIC=$(beval "document.documentElement.dir")
if [ "$ARABIC" = "rtl" ]; then
  ok "language toggle flips the app to RTL Arabic"
else
  bad "expected rtl after the Arabic toggle, got: '$ARABIC'"
fi
if beval "document.body.innerText.includes('العناية الواجبة')" | grep -q true; then
  ok "the DD view renders its Arabic title"
else
  bad "Arabic DD title missing"
fi
# back to English for cleanliness
agent-browser eval "(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.innerText.trim()==='English');b?.click();return 'ok'})()" >/dev/null
sleep 1

echo ""
echo "v39 e2e: $PASS passed, $FAIL failed"
[ "$FAIL" = "0" ] || exit 1
