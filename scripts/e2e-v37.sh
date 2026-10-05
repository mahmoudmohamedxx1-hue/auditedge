#!/bin/bash
# v37 smoke — Test of Control end-to-end:
#   sidebar entry (badge 45) → hub (45 industries) → search + sector filter →
#   banking questionnaire via card click (deep link ?ind=, core + module,
#   evaluate gated) → answer-all-yes → verdict STRONG with export + procedures
#   → back to hub → AI tab form → live AI generation through the API
#   (bad input 400; real custom industry → a valid questionnaire).
# Interactions are driven with precise eval clicks (text-find clicks can hit
# ambiguous labels — a card's sector tag says "Financial Services" too).
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 1
# robust clean: the sandbox sometimes races the rm; retry once
rm -rf .next 2>/dev/null || { sleep 2; chmod -R u+w .next 2>/dev/null; rm -rf .next 2>/dev/null; } || true
bunx next dev -p 3000 > /tmp/v37-dev.log 2>&1 &
code=000
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"
[ "$code" = "200" ] || { echo "FAIL: server never came up"; tail -20 /tmp/v37-dev.log; exit 1; }

PASS=0; FAIL=0
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
# cold Turbopack compile of the toc-hub chunk can take a while
agent-browser wait --text "How the verdict is formed" --timeout 150000 >/dev/null 2>&1 \
  || agent-browser wait --text "Industry library" --timeout 120000 >/dev/null
sleep 3

# 1 — the sidebar: v37 badge + the new nav item
if beval "document.querySelector('aside')?.innerText.includes('v37')" | grep -q true; then
  ok "sidebar shows the v37 release badge"
else
  bad "no v37 badge in the sidebar"
fi
if beval "document.querySelector('aside')?.innerText.includes('Test of Control')" | grep -q true; then
  ok "sidebar carries the Test of Control entry"
else
  bad "sidebar entry missing"
fi

# 2 — the hub: library tab + cards across sectors
if beval "document.body.innerText.includes('Industry library')" | grep -q true; then
  ok "the library tab is rendered"
else
  bad "library tab not visible"
fi
if beval "document.body.innerText.includes('Banking & Retail Lending') && document.body.innerText.includes('Agriculture & Farming') && document.body.innerText.includes('Awqaf, Mosques & Religious Bodies')" | grep -q true; then
  ok "industry cards render across sectors (banking, agriculture, awqaf)"
else
  bad "expected industry cards missing"
fi

# 3 — search narrows to one industry
beval "(()=>{const i=document.querySelector('input[placeholder*=\\\"Search an industry\\\"]'); const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set; s.call(i,'crypto'); i.dispatchEvent(new Event('input',{bubbles:true}))})()" >/dev/null
sleep 2
if beval "document.body.innerText.includes('Crypto & Digital Assets') && !document.body.innerText.includes('Agriculture & Farming')" | grep -q true; then
  ok "search 'crypto' narrows to the crypto exchange questionnaire"
else
  bad "search did not filter"
fi

# 4 — clear search, then the sector chip filter
beval "(()=>{const i=document.querySelector('input[placeholder*=\\\"Search an industry\\\"]'); const s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set; s.call(i,''); i.dispatchEvent(new Event('input',{bubbles:true}))})()" >/dev/null
sleep 1
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Financial Services')?.click()" >/dev/null
sleep 2
if beval "document.body.innerText.includes('Banking & Retail Lending') && !document.body.innerText.includes('Agriculture & Farming')" | grep -q true; then
  ok "sector chip 'Financial Services' filters the grid"
else
  bad "sector filter did not work"
fi
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.trim().startsWith('All sectors'))?.click()" >/dev/null
sleep 2

# 5 — open the banking questionnaire from the card
beval "[...document.querySelectorAll('h3')].find(h=>h.textContent.includes('Banking & Retail Lending'))?.closest('button')?.click()" >/dev/null
sleep 3
HASH=$(beval "location.hash")
if [[ "$HASH" == *"ind=banking"* ]]; then
  ok "deep link written: $HASH"
else
  bad "banking questionnaire did not write its deep link ($HASH)"
fi

# 6 — the questionnaire: core + industry module + gated evaluate
if beval "document.body.innerText.includes('code of conduct') && document.body.innerText.includes('IFRS 9 ECL model governance')" | grep -q true; then
  ok "core ICQ + banking module questions render"
else
  bad "expected core/banking questions not visible"
fi
TOTAL=$(beval "[...document.querySelectorAll('[role=radio]')].length")
if [ "${TOTAL:-0}" -ge 90 ]; then
  ok "the full questionnaire rendered ($((TOTAL/3)) questions × 3 answers)"
else
  bad "expected ~34 questions × 3 answer buttons, got $TOTAL"
fi
if beval "(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.trim().startsWith('Evaluate')); return !!b && b.disabled})()" | grep -q true; then
  ok "Evaluate is gated while questions are unanswered"
else
  bad "Evaluate was clickable before completion"
fi

# 7 — answer everything Yes, then evaluate
beval "[...document.querySelectorAll('[role=radio]')].filter(b=>b.textContent.trim()==='Yes').forEach(b=>b.click())" >/dev/null
sleep 3
if beval "document.body.innerText.includes('Ready to evaluate')" | grep -q true; then
  ok "answering all Yes completes the questionnaire (ready to evaluate)"
else
  bad "questionnaire did not complete"
fi
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.trim().startsWith('Evaluate'))?.click()" >/dev/null
agent-browser wait --text "Strong control environment" --timeout 60000 >/dev/null 2>&1
if beval "document.body.innerText.includes('Strong control environment') && document.body.innerText.includes('100%')" | grep -q true; then
  ok "verdict: STRONG at 100% with zero critical failures"
else
  bad "expected strong verdict not shown"
fi
if beval "(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Export ICQ')); return !!b})()" | grep -q true; then
  ok "the ICQ export (markdown working paper) is offered"
else
  bad "export button missing"
fi
if beval "document.body.innerText.toUpperCase().includes('CORROBORATING PROCEDURES')" | grep -q true; then
  ok "corroborating procedures listed with the verdict"
else
  bad "procedures section missing"
fi
agent-browser screenshot /tmp/v37-verdict.png >/dev/null 2>&1 && echo "screenshot: /tmp/v37-verdict.png"

# 8 — back to the hub (results view's Back button), then the AI tab.
#    NOTE: this Radix version activates tabs on MOUSEDOWN (not click) — a
#    synthetic .click() would be ignored, so dispatch a mousedown.
beval "[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Back')?.click()" >/dev/null
agent-browser wait --text "Industry library" --timeout 60000 >/dev/null 2>&1
beval "(()=>{const t=[...document.querySelectorAll('[role=tab]')].find(t=>t.textContent.includes('AI generator')); t?.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,button:0}))})()" >/dev/null
agent-browser wait --text "Any industry, any case" --timeout 60000 >/dev/null 2>&1
if beval "!!document.querySelector('#toc-ai-industry') && !!document.querySelector('#toc-ai-case')" | grep -q true; then
  ok "the AI generator form renders (industry + case)"
else
  bad "AI form missing"
fi
if beval "(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Generate questionnaire')); return !!b && b.disabled})()" | grep -q true; then
  ok "Generate stays disabled until an industry is described"
else
  bad "Generate clickable with empty industry"
fi
agent-browser screenshot /tmp/v37-aitab.png >/dev/null 2>&1 && echo "screenshot: /tmp/v37-aitab.png"

# 9 — the API: bad input rejected
BADCODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 20 -X POST "$BASE/api/ai/toc-generate" \
  -H 'Content-Type: application/json' -d '{"industry":""}')
if [ "$BADCODE" = "400" ]; then
  ok "API rejects an empty industry (400)"
else
  bad "expected 400 for empty industry, got $BADCODE"
fi

# 10 — the API: a real custom industry + case → a valid questionnaire
curl -s --max-time 280 -X POST "$BASE/api/ai/toc-generate" -H 'Content-Type: application/json' \
  -d '{"industry":"solar panel cleaning services","caseContext":"SME, 40 field staff, 3 cities, scheduling in Excel, cash + bank transfers, worries about crews billing hours they did not work"}' \
  > /tmp/v37-ai.json
NQ=$(bun -e "Bun.file('/tmp/v37-ai.json').json().then(d=>console.log(d.questionnaire?.questions?.length ?? 0)).catch(()=>console.log(0))" 2>/dev/null | tr -d '"')
NP=$(bun -e "Bun.file('/tmp/v37-ai.json').json().then(d=>console.log(d.questionnaire?.procedures?.length ?? 0)).catch(()=>console.log(0))" 2>/dev/null | tr -d '"')
echo "AI questionnaire: $NQ questions / $NP procedures"
if [ "${NQ:-0}" -ge 8 ] && [ "${NP:-0}" -ge 3 ]; then
  ok "live AI generated a valid custom-industry questionnaire ($NQ questions, $NP procedures)"
else
  bad "AI generation failed or too thin ($NQ questions / $NP procedures)"; head -c 300 /tmp/v37-ai.json; echo ""
fi
DOMS=$(bun -e "Bun.file('/tmp/v37-ai.json').json().then(d=>console.log(new Set(d.questionnaire.questions.map(q=>q.domain)).size)).catch(()=>console.log(0))" 2>/dev/null | tr -d '"')
if [ "${DOMS:-0}" -ge 4 ]; then
  ok "the generated questionnaire spans $DOMS COSO domains"
else
  bad "generated questionnaire covers only $DOMS domains"
fi

echo ""
echo "v37 e2e: $PASS passed · $FAIL failed"
[ "$FAIL" = "0" ]
