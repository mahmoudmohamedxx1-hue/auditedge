#!/bin/bash
# v29 smoke test — full flow: Courses order (YouTube first) + Exams hub.
set -u
cd /home/z/my-project

LOG=/tmp/dev-v29.log
npx next dev -p 3000 > "$LOG" 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null' EXIT

for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null || echo 000)
  [ "$code" = "200" ] && break
  sleep 1
done
echo "server up: $code"

ab() { echo "\$ agent-browser $*"; agent-browser "$@" 2>&1; echo; }

ab open http://localhost:3000
sleep 4

echo "=========== 1. COURSES: navigate via sidebar ==========="
ab click @e14
sleep 3
ab get url
# headings order on the courses page
ab eval "Array.from(document.querySelectorAll('h2')).map(h => h.innerText.split('\n')[0]).join(' || ')"
# first course card in the first (video) section — grab its image + title
ab eval "(function(){ const sec = document.querySelector('section[aria-label]'); const img = sec ? sec.querySelector('img') : null; const t = sec ? sec.querySelector('h3,span[dir=auto]') : null; return JSON.stringify({sectionCount: document.querySelectorAll('main section').length, firstImg: img ? img.src : null, firstTitle: t ? t.textContent : null}); })()"
ab screenshot /tmp/v29-courses-top.png

echo "=========== 2. search 'excel' filters the video catalog ==========="
ab eval "(function(){ const inp = document.querySelector('input[aria-label*=Search i], input[placeholder*=Search i]'); if(!inp) return 'no input'; const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set; setter.call(inp,'excel'); inp.dispatchEvent(new Event('input',{bubbles:true})); return 'typed'; })()"
sleep 2
ab eval "Array.from(document.querySelectorAll('h2')).map(h => h.innerText.split('\n')[0]).join(' || ')"
ab eval "(function(){ const sec = document.querySelector('section[aria-label]'); const cards = sec ? sec.querySelectorAll('button.group') : []; return 'visible video cards: ' + cards.length; })()"

echo "=========== 3. EXAM CENTER hub ==========="
ab snapshot -i -c 2>/dev/null | grep -E "Exam Center|Courses" | head -3
ab eval "(function(){ const btns = Array.from(document.querySelectorAll('button')); const ex = btns.find(b => b.textContent.trim().startsWith('Exam Center')); ex ? ex.click() : 'not-found'; return ex ? 'clicked' : 'no button'; })()"
sleep 3
ab get url
ab eval "Array.from(document.querySelectorAll('h1,h2')).map(h => h.tagName + ':' + h.innerText.split('\n')[0]).join(' || ')"
ab eval "(function(){ const chips = Array.from(document.querySelectorAll('button[aria-pressed]')).map(b => b.innerText.replace(/\n/g,' ')); return JSON.stringify(chips); })()"
ab eval "(function(){ const fam = document.querySelector('section[aria-label*=papers i], section[aria-label*=Previous i]'); return fam ? 'papers section found' : 'papers section NOT found'; })()"
ab screenshot /tmp/v29-exam-hub.png

echo "=========== 4. CPA filter chip + first family card ==========="
ab eval "(function(){ const chips = Array.from(document.querySelectorAll('button[aria-pressed]')); const cpa = chips.find(b => b.textContent.includes('CPA')); if(!cpa) return 'no CPA chip'; cpa.click(); return 'CPA clicked'; })()"
sleep 1
ab eval "(function(){ const groups = Array.from(document.querySelectorAll('h3.uppercase, h3.tracking-\[0.14em\]')).map(h => h.innerText); const cards = Array.from(document.querySelectorAll('section h3')).filter(h => h.className.includes('font-semibold') && h.closest('div.rounded-xl')).map(h => h.innerText.split('\n')[0]); return JSON.stringify({groups, cardCount: cards.length, sample: cards.slice(0,6)}); })()"
ab eval "(function(){ const card = document.querySelector('div.flex.flex-col.rounded-xl.border.bg-secondary\/25'); return card ? card.innerText.replace(/\n+/g,' | ').slice(0,400) : 'no card'; })()"

echo "=========== 5. perf overview strip ==========="
ab eval "(function(){ const strip = document.querySelector('section[aria-label*=performance i], section[aria-label*=Your exam i]'); return strip ? strip.innerText.replace(/\n+/g,' | ') : 'no perf strip'; })()"

echo "=========== 6. errors ==========="
ab errors
