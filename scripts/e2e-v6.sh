#!/bin/bash
# E2E verification for AuditEdge v6:
#   Arabic Academy video courses, IFAC/FRA standards RAG, Discover & Import
#   (Coursera sitemap search + MOOC import + YouTube playlist import)
# Server + tests in ONE session (harness reaps background processes).
set -u
cd /home/z/my-project

PORT=3000
BASE="http://127.0.0.1:$PORT"
WORK=/home/z/my-project/research/tmp
mkdir -p "$WORK"
PASS=0
FAIL=0
ok()   { echo "  [PASS] $1"; PASS=$((PASS+1)); }
bad()  { echo "  [FAIL] $1"; FAIL=$((FAIL+1)); }

echo "=== 1. Start dev server ==="
pkill -f "next dev" 2>/dev/null
sleep 1
bun run dev > dev.log 2>&1 &
SERVER_PID=$!
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then echo "server ready after ${i} tries"; break; fi
  sleep 3
done
if [ "$code" != "200" ]; then echo "!! SERVER FAILED TO START"; kill $SERVER_PID 2>/dev/null; exit 1; fi

echo "=== 2. Sessionless single-user workspace (auto sign-in) ==="
# v16+: no team picker / sign-in at all — the app self-heals an anonymous
# visitor into the single workspace user and boots straight to the dashboard.
agent-browser cookies clear >/dev/null 2>&1
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
BODY2=$(agent-browser get text "body" 2>/dev/null)
echo "$BODY2" | rg -qi "welcome back|continue learning|in progress|good (morning|afternoon|evening)" && ok "auto sign-in → dashboard" || bad "dashboard did not load"
echo "$BODY2" | rg -qi "senior associate|mahmoud" && ok "workspace user recognized (Mahmoud)" || bad "workspace user not recognized"
agent-browser screenshot download/v6-dashboard.png >/dev/null 2>&1

echo "=== 3. Arabic Academy courses ==="
agent-browser find text "Courses" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
agent-browser find text "Arabic Academy" click >/dev/null 2>&1
sleep 2
BODY=$(agent-browser get text "body" 2>/dev/null)
echo "$BODY" | rg -q "شرح معايير المراجعة والمراجعة العملية" && ok "Hamouda auditing course listed" || bad "Hamouda course missing"
echo "$BODY" | rg -q "معايير المراجعة الدولية ISA" && ok "Arabic ISA series listed" || bad "Arabic ISA series missing"
echo "$BODY" | rg -q "كورس المعايير الدولية للتقارير المالية IFRS" && ok "Arabic IFRS course listed" || bad "Arabic IFRS course missing"
YT_COUNT=$(echo "$BODY" | rg -c "YouTube" || true)
[ "${YT_COUNT:-0}" -ge 4 ] && ok "YouTube platform badges shown ($YT_COUNT)" || bad "YouTube badges missing ($YT_COUNT)"
agent-browser screenshot download/v6-arabic-academy.png >/dev/null 2>&1

echo "=== 4. Open Arabic video lesson ==="
agent-browser find text "شرح معايير المراجعة والمراجعة العملية" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
# click the first curriculum lesson deterministically
CLICKED=$(agent-browser eval "(() => { const b = document.querySelector('section[aria-label=\"Curriculum\"] button'); if (b) { b.click(); return 'yes' } return 'no' })()" 2>/dev/null | tr -d '"')
if [ "$CLICKED" = "yes" ]; then
  sleep 3
  LESSON_BODY=$(agent-browser get text "body" 2>/dev/null)
  HAS_VIDEO=$(agent-browser eval "!!document.querySelector('iframe[src*=\"youtube-nocookie.com/embed\"]')" 2>/dev/null)
  [ "$HAS_VIDEO" = "true" ] && ok "YouTube video player embedded in lesson" || bad "video iframe missing"
  echo "$LESSON_BODY" | rg -q "Mark complete" && ok "lesson page functional (mark complete visible)" || bad "lesson page not loading"
  echo "$LESSON_BODY" | rg -q "Ask AI" && ok "Ask-AI about this lesson available" || bad "Ask-AI button missing"
  ARABIC_TITLE=$(agent-browser eval "!!document.querySelector('h1[dir=\"auto\"]')" 2>/dev/null)
  [ "$ARABIC_TITLE" = "true" ] && ok "Arabic lesson title rendered (dir=auto)" || bad "Arabic title element missing"
  agent-browser screenshot download/v6-arabic-lesson.png >/dev/null 2>&1
else
  bad "could not click first Arabic lesson"
fi

echo "=== 5. Library: IFAC/FRA standards ingested ==="
agent-browser find text "Library" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
LIB_BODY=$(agent-browser get text "body" 2>/dev/null)
IFAC_N=$(echo "$LIB_BODY" | rg -c "IFAC" || true)
echo "$LIB_BODY" | rg -q "المعايير المصرية للمحاسبة" && ok "FRA Egyptian standards (Arabic) in library" || bad "FRA standards material missing"
[ "${IFAC_N:-0}" -ge 10 ] && ok "IFAC standards materials listed ($IFAC_N mentions)" || bad "IFAC materials missing ($IFAC_N)"
echo "$LIB_BODY" | rg -q "Open official source" && ok "ingested materials link to official source" || bad "official-source links missing"
agent-browser screenshot download/v6-library-standards.png >/dev/null 2>&1

echo "=== 6. AI Tutor: RAG over the official standards texts ==="
TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)
curl -s -N --max-time 100 -b "ae_session=$TOKEN" -X POST "$BASE/api/ai/chat" \
  -H "Content-Type: application/json" \
  -d '{"message":"According to ISA 570, what should the auditor do when management assessment of going concern covers less than twelve months from the date of the auditor report?","forceLibrary":true}' \
  > "$WORK/ai-stream.txt" 2>/dev/null
AI_STREAM=$(cat "$WORK/ai-stream.txt")
echo "  (stream $(wc -c < "$WORK/ai-stream.txt") bytes)"
echo "$AI_STREAM" | rg -qi "office library" && ok "AI cites the Office Library (standards RAG)" || bad "no Office Library citation in AI answer"
echo "$AI_STREAM" | rg -qi "ISA 570" && ok "AI answer grounded in ISA 570" || bad "AI answer does not reference ISA 570"
echo "$AI_STREAM" | rg -qi "twelve months|12 months" && ok "AI answer covers the twelve-month rule" || bad "twelve-month requirement absent from answer"

echo "=== 7. Discover: free course search (Coursera sitemap + web) ==="
# v16+ sessionless auth: an anonymous request self-heals into the workspace
# session, so the Discover API answers 200 (with a session cookie set).
NOAUTH=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/api/discover?q=auditing")
[ "$NOAUTH" = "200" ] && ok "Discover API reachable without prior session ($NOAUTH)" || bad "Discover API unreachable ($NOAUTH)"
agent-browser find text "Discover" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
agent-browser get text "body" 2>/dev/null | rg -qi "search free courses|no api keys" && ok "Discover view renders" || bad "Discover view missing"
# find the search box and search for "auditing"
SEARCH_REF=$(agent-browser snapshot -i 2>/dev/null | rg -i 'textbox' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
if [ -n "$SEARCH_REF" ]; then
  agent-browser fill "@$SEARCH_REF" "auditing" >/dev/null 2>&1
  agent-browser press Enter >/dev/null 2>&1
  sleep 18   # sitemap fetch + web searches + enrichment
  DISC_BODY=$(agent-browser get text "body" 2>/dev/null)
  echo "$DISC_BODY" | rg -q "Coursera" && ok "Coursera results found via free sitemap search" || bad "no Coursera results"
  echo "$DISC_BODY" | rg -qi "MIT OpenCourseWare|MIT OCW" && ok "MIT OCW results found" || bad "no MIT OCW results"
  echo "$DISC_BODY" | rg -q "Import" && ok "Import buttons available" || bad "import buttons missing"
  agent-browser screenshot download/v6-discover-search.png >/dev/null 2>&1
  # import the first Coursera result
  IMP_REF=$(agent-browser snapshot -i 2>/dev/null | rg -i 'import' | rg -o 'ref=(e\d+)' -r '$1' | head -1)
  if [ -n "$IMP_REF" ]; then
    agent-browser click "@$IMP_REF" >/dev/null 2>&1
    sleep 6
    AFTER=$(agent-browser get text "body" 2>/dev/null)
    echo "$AFTER" | rg -qi "open course" && ok "MOOC course imported → Open course button" || bad "import did not complete"
    agent-browser screenshot download/v6-discover-imported.png >/dev/null 2>&1
  else
    bad "no import button found"
  fi
else
  bad "Discover search box not found"
fi

echo "=== 8. Discover: YouTube playlist import ==="
# duplicate detection via UI (Hamouda playlist already seeded)
agent-browser find text "Discover" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 1
FILLED=$(agent-browser eval "(() => { const inp = document.getElementById('playlist-url'); if (!inp) return 'no-input'; const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set; set.call(inp, 'https://www.youtube.com/playlist?list=PLLsYiYPRMH2zB2BhvhxSbmEBfFnJux0YS'); inp.dispatchEvent(new Event('input', { bubbles: true })); return 'ok' })()" 2>/dev/null | tr -d '"')
if [ "$FILLED" = "ok" ]; then
  agent-browser eval "(() => { const btn = [...document.querySelectorAll('section[aria-label=\"Import a YouTube playlist\"] button')].find(b => b.textContent.trim() === 'Import'); if (btn) btn.click(); return btn ? 'clicked' : 'no-btn' })()" >/dev/null 2>&1
  sleep 2
  DUP=$(agent-browser get text "body" 2>/dev/null | rg -i "already in the catalog" | head -1)
  [ -n "$DUP" ] && ok "duplicate playlist correctly rejected" || bad "duplicate playlist not detected"
else
  bad "playlist input not found ($FILLED)"
fi
# successful small import via API, then verify + clean up
IMP_JSON=$(curl -s -b "ae_session=$TOKEN" -X POST "$BASE/api/discover" \
  -H "Content-Type: application/json" \
  -d '{"action":"import-playlist","url":"https://www.youtube.com/playlist?list=PL_KGEFWqEaTAZGeyoPaDzBXBYhv1tnTeJ","category":"Open Courses","maxVideos":3}')
echo "  playlist import API → $(echo "$IMP_JSON" | head -c 160)"
NEW_ID=$(echo "$IMP_JSON" | rg -o '"courseId":"[^"]*"' -r '$0' | cut -d'"' -f4)
if [ -n "$NEW_ID" ]; then
  ok "playlist imported via API (courseId $NEW_ID)"
  BOOT=$(curl -s -b "ae_session=$TOKEN" "$BASE/api/bootstrap")
  echo "$BOOT" | rg -q "\"id\":\"$NEW_ID\"" && ok "imported playlist course visible in bootstrap" || bad "imported course not in bootstrap"
  DEL_HTTP=$(curl -s -o /dev/null -w "%{http_code}" -b "ae_session=$TOKEN" -X DELETE "$BASE/api/admin/course/$NEW_ID")
  [ "$DEL_HTTP" = "200" ] && ok "test course cleaned up ($DEL_HTTP)" || bad "cleanup failed ($DEL_HTTP)"
else
  bad "playlist import API failed: $IMP_JSON"
fi

echo "=== 9. Mobile spot check (390px) ==="
agent-browser set viewport 390 844 >/dev/null 2>&1
sleep 1
OVERFLOW=$(agent-browser eval "document.documentElement.scrollWidth > document.documentElement.clientWidth + 1" 2>/dev/null)
[ "$OVERFLOW" = "false" ] && ok "no horizontal overflow at 390px (Discover)" || bad "horizontal overflow at 390px ($OVERFLOW)"
agent-browser screenshot download/v6-mobile-discover.png >/dev/null 2>&1
agent-browser set viewport 1280 800 >/dev/null 2>&1

echo "=== 10. Console errors + dev.log ==="
ERRORS=$(agent-browser errors 2>/dev/null | rg -v "^$" | head -5)
echo "  browser errors: ${ERRORS:-none}"
[ -z "$ERRORS" ] && ok "zero browser console errors" || bad "browser console errors present"
LOG500=$(rg -c " 500 |Error:" dev.log 2>/dev/null | tail -1 || true)
echo "  dev.log 500/error lines this run: ${LOG500:-0}"

echo ""
echo "================ RESULTS: $PASS passed / $FAIL failed ================"
kill $SERVER_PID 2>/dev/null
exit $([ "$FAIL" -eq 0 ] && echo 0 || echo 1)
