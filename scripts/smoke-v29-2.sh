#!/bin/bash
# v29 smoke test part 2 — Courses page order + perf strip + family card.
set -u
cd /home/z/my-project

npx next dev -p 3000 > /tmp/dev-v29.log 2>&1 &
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

echo "=========== 1. COURSES page order ==========="
ab eval "Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Courses').click(); 'clicked'"
sleep 3
ab eval "Array.from(document.querySelectorAll('h2')).map(h => h.innerText.split('\n')[0]).join(' || ')"
echo "--- first section: has real YT thumbnails? ---"
ab eval "(function(){ const secs = Array.from(document.querySelectorAll('section')); const first = secs.find(s => s.querySelector('h2') && s.innerText.includes('Video')); if(!first) return 'video section not found'; const imgs = Array.from(first.querySelectorAll('img')); const yt = imgs.filter(i => (i.src||'').includes('ytimg')); return JSON.stringify({sectionTitle: first.querySelector('h2').innerText.split('\n')[0], imgCount: imgs.length, ytThumbCount: yt.length, sampleSrc: yt[0] ? yt[0].src : null}); })()"
ab screenshot /tmp/v29-courses-video-first.png

echo "=========== 2. academy above core ==========="
ab eval "(function(){ const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.split('\n')[0]); const ai = h2s.findIndex(t => t.includes('Arabic Academy')); const ci = h2s.findIndex(t => t.includes('Core curriculum')); const vi = h2s.findIndex(t => t.toLowerCase().includes('video courses') || t.includes('YouTube')); return JSON.stringify({headings: h2s, videoIdx: vi, academyIdx: ai, coreIdx: ci, orderOk: vi >= 0 && ai > vi && ci > ai}); })()"

echo "=========== 3. Arabic Academy cards have thumbnails ==========="
ab eval "(function(){ const secs = Array.from(document.querySelectorAll('section')); const acad = secs.find(s => s.innerText.includes('Arabic Academy')); if(!acad) return 'no academy'; const imgs = Array.from(acad.querySelectorAll('img')).filter(i => (i.src||'').includes('ytimg')); const cards = acad.querySelectorAll('button'); return JSON.stringify({academyCards: cards.length, ytThumbs: imgs.length}); })()"

echo "=========== 4. EXAM CENTER: perf strip + family card detail ==========="
ab eval "Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Exam Center').click(); 'clicked'"
sleep 3
ab eval "(function(){ const strips = Array.from(document.querySelectorAll('section')); const perf = strips.find(s => s.innerText.includes('average score') || s.innerText.includes('متوسط الدرجة')); return perf ? 'PERF STRIP: ' + perf.innerText.replace(/\n+/g, ' | ') : 'no perf strip'; })()"
ab eval "(function(){ const chips = Array.from(document.querySelectorAll('button[aria-pressed]')).find(b => b.textContent.includes('CPA')); chips.click(); 'CPA clicked'; })()"
sleep 1
ab eval "(function(){ const cards = Array.from(document.querySelectorAll('div')).filter(d => d.className && String(d.className).includes('bg-secondary/25') && d.querySelector('h3')); const c = cards[0]; return c ? 'FIRST CPA CARD: ' + c.innerText.replace(/\n+/g, ' | ').slice(0, 420) : 'no card found'; })()"
ab screenshot /tmp/v29-exam-cpa.png

echo "=========== 5. paper picker still opens a sitting (regression guard) ==========="
ab eval "(function(){ const btns = Array.from(document.querySelectorAll('button')); const pick = btns.find(b => b.textContent.includes('Choose paper') || b.textContent.includes('papers to choose') || (b.textContent.includes('· 5') && b.closest('div.rounded-xl'))); if(!pick) return 'picker button not found'; pick.click(); return 'picker clicked: ' + pick.innerText; })()"
sleep 2
ab eval "(function(){ const dlg = document.querySelector('[role=dialog]'); return dlg ? 'PICKER DIALOG: ' + dlg.innerText.replace(/\n+/g, ' | ').slice(0, 500) : 'dialog did not open'; })()"

echo "=========== 6. console errors ==========="
ab errors
