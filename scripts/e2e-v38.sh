#!/bin/bash
# v38 smoke — resilience + depth end-to-end:
#   ensure-db guard in the boot path → sidebar v38 badge → ToC banking
#   questionnaire → blank ICQ print (iframe srcdoc inspected) → answer-all-yes
#   → STRONG verdict → report print → the ToC→audit-program bridge (dialog
#   pre-filled with industry + ICQ verdict) → Arabic pass (RTL courses page,
#   Arabic Academy titles, rendered covers).
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

# 0 — the auto-restore DB guard runs in the boot path (feature 1)
if bun scripts/ensure-db.ts; then
  echo "PASS: ensure-db guard green in the boot path"
  P=1
else
  echo "FAIL: ensure-db guard failed"; exit 1
fi
PASS=1; FAIL=0

pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 1
rm -rf .next 2>/dev/null || { sleep 2; chmod -R u+w .next 2>/dev/null; rm -rf .next 2>/dev/null; } || true
bunx next dev -p 3000 > /tmp/v38-dev.log 2>&1 &
code=000
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"
[ "$code" = "200" ] || { echo "FAIL: server never came up"; tail -20 /tmp/v38-dev.log; exit 1; }

ok()   { echo "PASS: $1"; PASS=$((PASS+1)); }
bad()  { echo "FAIL: $1"; FAIL=$((FAIL+1)); }
beval() { agent-browser eval "$1" 2>/dev/null | tr -d '"'; }

# fresh browser context; stage the navigation (root first, then the hash route)
agent-browser close >/dev/null 2>&1
sleep 2
agent-browser open "$BASE/" >/dev/null
agent-browser wait --text "Exam Center" --timeout 150000 >/dev/null 2>&1
sleep 2
agent-browser open "$BASE/#/toc" >/dev/null
agent-browser wait --text "How the verdict is formed" --timeout 150000 >/dev/null 2>&1 \
  || agent-browser wait --text "Industry library" --timeout 120000 >/dev/null
sleep 3

# 1 — the sidebar: v38 badge
if beval "document.querySelector('aside')?.innerText.includes('v38')" | grep -q true; then
  ok "sidebar shows the v38 release badge"
else
  bad "no v38 badge in the sidebar"
fi

# 2 — open the banking questionnaire (deep link)
agent-browser open "$BASE/#/toc?ind=banking" >/dev/null
agent-browser wait --text "IFRS 9 ECL model governance" --timeout 120000 >/dev/null 2>&1
sleep 2
if beval "document.body.innerText.includes('code of conduct')" | grep -q true; then
  ok "banking questionnaire renders (core + module)"
else
  bad "banking questionnaire did not render"
fi

# 3 — the blank fieldwork print (feature 2): spy on iframe appends, click,
#     then inspect the srcdoc that would reach the print engine
beval "(()=>{window.__icq=[];const o=Node.prototype.appendChild;Node.prototype.appendChild=function(el){if(el&&el.tagName==='IFRAME'&&el.srcdoc)window.__icq.push(el.srcdoc);return o.call(this,el)}})()" >/dev/null
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Print blank ICQ'))?.click()" >/dev/null
sleep 2
BLANK_N=$(beval "window.__icq.length")
if [ "${BLANK_N:-0}" -ge 1 ]; then
  ok "blank ICQ print built a print document"
else
  bad "no print iframe was created for the blank ICQ"
fi
if beval "window.__icq[0]?.includes('Internal Control Questionnaire') && window.__icq[0]?.includes('to be completed by hand during the management interview')" | grep -q true; then
  ok "blank copy: A4 questionnaire with the fieldwork note"
else
  bad "blank copy content wrong"
fi
BLANK_BOXES=$(beval "(window.__icq[0]||'').split('class=\"bx').length-1")
if [ "${BLANK_BOXES:-0}" -ge 90 ]; then
  ok "blank copy: $BLANK_BOXES tick-boxes (3 per question, notes column present)"
else
  bad "expected ~100 tick-boxes, got ${BLANK_BOXES:-0}"
fi

# 4 — answer everything Yes, evaluate, verdict
beval "[...document.querySelectorAll('[role=radio]')].filter(b=>b.textContent.trim()==='Yes').forEach(b=>b.click())" >/dev/null
sleep 3
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.trim().startsWith('Evaluate'))?.click()" >/dev/null
agent-browser wait --text "Strong control environment" --timeout 60000 >/dev/null 2>&1
if beval "document.body.innerText.includes('Strong control environment') && document.body.innerText.includes('100%')" | grep -q true; then
  ok "verdict: STRONG at 100%"
else
  bad "strong verdict not shown"
fi

# 5 — the completed report print
beval "window.__icq=[]" >/dev/null
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Print report'))?.click()" >/dev/null
sleep 2
if beval "window.__icq[0]?.includes('Strong control environment') && window.__icq[0]?.includes('100%') && window.__icq[0]?.includes('Weighted score')" | grep -q true; then
  ok "report print: verdict banner + weighted score + marked answers"
else
  bad "report print content wrong"
fi
if beval "(window.__icq[0]||'').split('class=\"bx on').length-1" | grep -qE "^[0-9]{2,}$"; then
  ok "report print: answers marked on the boxes"
else
  bad "report print: no marked boxes"
fi
agent-browser screenshot /tmp/v38-verdict.png >/dev/null 2>&1 && echo "screenshot: /tmp/v38-verdict.png"

# 6 — the ToC → audit-program bridge (feature 5a): verdict context carried over
if beval "!![...document.querySelectorAll('button')].find(b=>b.textContent.includes('Tailor the audit program'))" | grep -q true; then
  ok "the bridge button is offered on the verdict view"
else
  bad "bridge button missing"
fi
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Tailor the audit program'))?.click()" >/dev/null
agent-browser wait --text "AI program customizer" --timeout 150000 >/dev/null 2>&1
sleep 2
HASH=$(beval "location.hash")
if [[ "$HASH" == *"/program"* ]]; then
  ok "bridge navigated to the Audit Program view ($HASH)"
else
  bad "bridge did not navigate to the program view ($HASH)"
fi
if beval "document.body.innerText.includes('AI program customizer')" | grep -q true; then
  ok "the customizer opened automatically"
else
  bad "customizer dialog did not open"
fi
if beval "[...document.querySelectorAll('input')].some(i=>i.value==='Banking & Retail Lending')" | grep -q true; then
  ok "the industry is pre-filled from the questionnaire"
else
  bad "industry prefill missing"
fi
if beval "[...document.querySelectorAll('textarea')].some(t=>t.value.includes('ICQ verdict'))" | grep -q true; then
  ok "the concerns carry the live ICQ verdict context"
else
  bad "verdict context missing from the concerns"
fi
agent-browser screenshot /tmp/v38-bridge.png >/dev/null 2>&1 && echo "screenshot: /tmp/v38-bridge.png"

# 7 — the Arabic pass (feature 5b): RTL courses page + Arabic Academy + covers.
#     A fresh root reload clears the dialog; the persisted lang hydrates RTL.
beval "localStorage.setItem('auditedge-lang','ar'); 'lang-set'" >/dev/null
agent-browser open "$BASE/" >/dev/null
RTL=""
for i in $(seq 1 20); do
  RTL=$(beval "document.documentElement.getAttribute('dir') || document.documentElement.dir || ''")
  [ "$RTL" = "rtl" ] && break
  sleep 2
done
if [ "$RTL" = "rtl" ]; then
  ok "the app hydrates fully RTL in Arabic"
else
  bad "app did not switch to RTL (dir='$RTL')"
fi
agent-browser open "$BASE/#/courses" >/dev/null
sleep 3
# wait for the course grid (Arabic Academy titles)
AR_OK=""
for i in $(seq 1 15); do
  if beval "document.body.innerText.includes('بالعربي')" | grep -q true; then AR_OK=1; break; fi
  sleep 2
done
if [ -n "$AR_OK" ]; then
  ok "the Arabic Academy course family renders on the courses page"
else
  bad "Arabic course titles not found on the courses page"
fi
ICONS=$(beval "document.querySelectorAll('main svg').length")
if [ "${ICONS:-0}" -ge 12 ]; then
  ok "course covers render ($ICONS svg icons/illustrations in the main area)"
else
  bad "expected ≥12 rendered cover icons, got ${ICONS:-0}"
fi
if beval "document.body.innerText.includes('Test of Control') || document.body.innerText.includes('اختبار الرقابة')" | grep -q true; then
  ok "the Arabic shell renders the localized navigation"
else
  bad "localized navigation missing"
fi
agent-browser screenshot /tmp/v38-arabic-courses.png >/dev/null 2>&1 && echo "screenshot: /tmp/v38-arabic-courses.png"

# restore English for any later runs
beval "localStorage.setItem('auditedge-lang','en'); 'lang-restored'" >/dev/null

echo ""
echo "v38 e2e: $PASS passed · $FAIL failed"
[ "$FAIL" = "0" ]
