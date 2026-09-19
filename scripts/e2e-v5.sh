#!/bin/bash
# E2E verification for AuditEdge v5:
#   passwordless sign-in, RAG library search, CPE export, backup,
#   video lessons, 2026 content module, PWA manifest
# Server + tests in ONE session (harness reaps background processes).
set -u
cd /home/z/my-project

PORT=3000
BASE="http://127.0.0.1:$PORT"
PASS=0
FAIL=0
ok()   { echo "  [PASS] $1"; PASS=$((PASS+1)); }
bad()  { echo "  [FAIL] $1"; FAIL=$((FAIL+1)); }

echo "=== 1. Start dev server ==="
pkill -f "next dev" 2>/dev/null
sleep 1
bun run dev > /dev/null 2>&1 &
SERVER_PID=$!
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then echo "server ready after ${i} tries"; break; fi
  sleep 3
done
if [ "$code" != "200" ]; then echo "!! SERVER FAILED TO START"; kill $SERVER_PID 2>/dev/null; exit 1; fi

echo "=== 2. Passwordless sign-in (team picker) ==="
agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
PICKER_TITLE=$(agent-browser get text "body" 2>/dev/null | rg -i "who.*learning today" | head -1)
[ -n "$PICKER_TITLE" ] && ok "team picker title shown: $PICKER_TITLE" || bad "team picker title missing"
NO_PW=$(agent-browser get text "body" 2>/dev/null | rg -ci "password" || true)
[ "${NO_PW:-0}" = "0" ] && ok "no password fields on sign-in screen" || bad "password text still present ($NO_PW matches)"
# one-click: click Ahmed Yasser
agent-browser find text "Ahmed Yasser" click >/dev/null 2>&1
sleep 3
DASH=$(agent-browser get text "body" 2>/dev/null | head -4 | tr '\n' ' | ')
echo "  after click: $DASH"
agent-browser get text "body" 2>/dev/null | rg -qi "welcome back|dashboard|in progress|continue learning" && ok "one-click sign-in → dashboard" || bad "dashboard did not load after one click"
agent-browser screenshot download/v5-signin-picker.png >/dev/null 2>&1

echo "=== 3. CPE export + backup (admin, via API with session cookie) ==="
TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)
CPE_HTTP=$(curl -s -o /tmp/cpe.csv -w "%{http_code}" -b "ae_session=$TOKEN" "$BASE/api/team/export")
CPE_HEAD=$(head -c 300 /tmp/cpe.csv)
echo "  export HTTP=$CPE_HTTP first rows: $(echo "$CPE_HEAD" | head -3 | tr '\n' ' / ')"
[ "$CPE_HTTP" = "200" ] && ok "CPE export downloads (200)" || bad "CPE export HTTP $CPE_HTTP"
echo "$CPE_HEAD" | rg -q "CPE Report" && ok "CPE CSV has report header" || bad "CPE CSV header missing"
echo "$CPE_HEAD" | rg -q "CERTIFICATE SERIAL" && ok "CPE CSV has evidence columns" || bad "CPE CSV columns missing"
BKP_HTTP=$(curl -s -o /tmp/backup.json -w "%{http_code}" -b "ae_session=$TOKEN" "$BASE/api/admin/backup")
[ "$BKP_HTTP" = "200" ] && ok "backup downloads (200)" || bad "backup HTTP $BKP_HTTP"
bun -e 'const b=require("/tmp/backup.json"); const t=["users","courses","lessons","certificates","materials","quizzes","aiMessages"]; const missing=t.filter(k=>!Array.isArray(b[k])); if(missing.length){console.log("missing:",missing.join(","));process.exit(1)} if(b.users.some(u=>u.passwordHash!==undefined)){console.log("LEAK: passwordHash present");process.exit(1)} console.log("backup OK:", b.users.length,"users,",b.courses.length,"courses,",b.lessons.length,"lessons")' \
  && ok "backup JSON complete & password-free" || bad "backup JSON malformed or leaks passwords"
# non-admin must be rejected
NOAUTH=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/api/team/export")
[ "$NOAUTH" = "401" ] || [ "$NOAUTH" = "403" ] && ok "CPE export blocked without session ($NOAUTH)" || bad "CPE export unauthenticated returns $NOAUTH"

echo "=== 4. AI Tutor: library RAG over uploaded materials ==="
agent-browser find text "AI Tutor" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
LIB_TOGGLE=$(agent-browser get text "body" 2>/dev/null | rg -i "library: auto|library: on" | head -1)
[ -n "$LIB_TOGGLE" ] && ok "Library toggle present in composer" || bad "Library toggle missing"
WEB_TOGGLE=$(agent-browser get text "body" 2>/dev/null | rg -i "web: auto|web: on" | head -1)
[ -n "$WEB_TOGGLE" ] && ok "Web toggle present in composer" || bad "Web toggle missing"
# ask a library question (router should auto-trigger library search)
agent-browser find role textbox fill --name "Ask" "According to our office library, what does the ISA 315 quick reference say about risk assessment procedures?" >/dev/null 2>&1 || agent-browser snapshot -i >/dev/null 2>&1
agent-browser press Enter >/dev/null 2>&1
sleep 4
SEARCHING_LIB=$(agent-browser get text "body" 2>/dev/null | rg -i "searching the office library" | head -1)
echo "  status line: ${SEARCHING_LIB:-(. not captured in time — checking sources)}"
sleep 26
AI_LIB=$(agent-browser get text "body" 2>/dev/null | rg -i "office library|ISA 315|quick reference" | head -3 | tr '\n' ' | ')
echo "  answer mentions library material: $AI_LIB"
agent-browser get text "body" 2>/dev/null | rg -qi "office library" && ok "library sources cited in chat" || bad "no office-library citation found"
agent-browser screenshot download/v5-ai-library-rag.png >/dev/null 2>&1

echo "=== 5. Video lesson: set via API, verify player ==="
# pick the first lesson of ISA-315 and attach a classic auditing lecture video
LESSON_ID=$(bun -e 'const {PrismaClient}=require("@prisma/client");const db=new PrismaClient();db.lesson.findFirst({where:{type:"lesson"},orderBy:{order:"asc"}}).then(l=>{console.log(l.id);return db.$disconnect()})')
VPATCH=$(curl -s -o /dev/null -w "%{http_code}" -X PATCH -H "Content-Type: application/json" \
  -b "ae_session=$TOKEN" \
  -d '{"videoUrl":"https://www.youtube.com/watch?v=hN1nIloOstM"}' \
  "$BASE/api/admin/lesson/$LESSON_ID")
echo "  video PATCH HTTP=$VPATCH"
[ "$VPATCH" = "200" ] && ok "videoUrl saved via lesson API" || bad "videoUrl PATCH failed ($VPATCH)"
# open the lesson in the browser: navigate via courses → first course → first lesson
agent-browser find text "Courses" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 1.5
agent-browser find text "ISA 315" click >/dev/null 2>&1 || agent-browser find text "Risk Assessment" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
# click first lesson in curriculum (expand module if needed)
agent-browser find text "Understanding the Entity" click >/dev/null 2>&1 || agent-browser find role button click --name "Start learning" >/dev/null 2>&1 || true
sleep 2.5
VIDEO=$(agent-browser get text "body" 2>/dev/null | rg -i "video lesson" | head -1)
echo "  video caption: ${VIDEO:-not found}"
[ -n "$VIDEO" ] && ok "video player rendered in lesson" || bad "video player not found"
agent-browser screenshot download/v5-video-lesson.png >/dev/null 2>&1

echo "=== 6. New 2026 module in EGY-REG ==="
EGY_LESSONS=$(bun -e 'const {PrismaClient}=require("@prisma/client");const db=new PrismaClient();db.course.findUnique({where:{slug:"egypt-regulatory-framework"},include:{modules:{include:{lessons:true}}}}).then(c=>{const m=c.modules.find(m=>m.title.includes("2025–2026"));console.log(m?`module: ${m.title}; lessons: ${m.lessons.map(l=>l.title).join(" | ")}`:"MODULE MISSING");return db.$disconnect()})')
echo "  $EGY_LESSONS"
echo "$EGY_LESSONS" | rg -q "2025 Overhaul" && ok "2026 module + lesson seeded" || bad "2026 module missing"
echo "$EGY_LESSONS" | rg -q "Checkpoint" && ok "checkpoint quiz seeded" || bad "checkpoint quiz missing"

echo "=== 7. PWA manifest + icons ==="
MANIFEST=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/manifest.webmanifest")
ICON512=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/icon-512.png")
[ "$MANIFEST" = "200" ] && ok "manifest.webmanifest served" || bad "manifest HTTP $MANIFEST"
[ "$ICON512" = "200" ] && ok "PWA icon served" || bad "icon HTTP $ICON512"

echo "=== 8. Mobile spot check (390px) ==="
agent-browser set viewport 390 844 >/dev/null 2>&1
sleep 1
agent-browser press Escape >/dev/null 2>&1 || true
OVERFLOW=$(agent-browser eval "document.documentElement.scrollWidth > document.documentElement.clientWidth + 1" 2>/dev/null)
[ "$OVERFLOW" = "false" ] && ok "no horizontal overflow at 390px" || bad "horizontal overflow at 390px ($OVERFLOW)"
agent-browser set viewport 1280 800 >/dev/null 2>&1

echo "=== 9. Browser console errors ==="
ERRORS=$(agent-browser errors 2>/dev/null | rg -v "^$" | head -5)
echo "  errors: ${ERRORS:-none}"

echo "=== 10. Cleanup & results ==="
# remove the video from the test lesson to keep seed content clean
curl -s -o /dev/null -X PATCH -H "Content-Type: application/json" -b "ae_session=$TOKEN" \
  -d '{"videoUrl":""}' "$BASE/api/admin/lesson/$LESSON_ID"
# purge test session
bun -e 'const {PrismaClient}=require("@prisma/client");const db=new PrismaClient();db.session.deleteMany({where:{token:process.argv[1]}}).then(()=>db.$disconnect())' "$TOKEN" >/dev/null 2>&1
kill $SERVER_PID 2>/dev/null
pkill -f "next dev" 2>/dev/null
echo ""
echo "RESULTS: $PASS passed, $FAIL failed"
[ "$FAIL" = "0" ] || exit 1
echo "E2E COMPLETE"
