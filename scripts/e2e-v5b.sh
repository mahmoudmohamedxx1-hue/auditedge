#!/bin/bash
# Focused re-test: video lesson player (correct lesson this time)
set -u
cd /home/z/my-project
BASE="http://127.0.0.1:3000"

pkill -f "next dev" 2>/dev/null
sleep 1
bun run dev > /dev/null 2>&1 &
SERVER_PID=$!
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE/" 2>/dev/null)
  if [ "$code" = "200" ]; then break; fi
  sleep 3
done
echo "server ready ($code)"

TOKEN=$(bun run scripts/make-test-session.ts 2>/dev/null | rg '^TOKEN=' | cut -d= -f2)

# target the exact first lesson of ISA-315
LESSON=$(bun -e '
const {PrismaClient}=require("@prisma/client");const db=new PrismaClient();
db.course.findUnique({where:{slug:"isa-315-risk-assessment"},include:{modules:{orderBy:{order:"asc"},include:{lessons:{orderBy:{order:"asc"}}}}}})
 .then(c=>{const l=c.modules[0].lessons.find(x=>x.type==="lesson");console.log(l.id+"|"+l.title);return db.$disconnect()})')
LESSON_ID=$(echo "$LESSON" | cut -d"|" -f1)
LESSON_TITLE=$(echo "$LESSON" | cut -d"|" -f2)
echo "target lesson: $LESSON_TITLE ($LESSON_ID)"

VPATCH=$(curl -s -o /dev/null -w "%{http_code}" -X PATCH -H "Content-Type: application/json" \
  -b "ae_session=$TOKEN" -d '{"videoUrl":"https://www.youtube.com/watch?v=hN1nIloOstM"}' \
  "$BASE/api/admin/lesson/$LESSON_ID")
echo "video PATCH: $VPATCH"

agent-browser open "$BASE/" >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
agent-browser find text "Ahmed Yasser" click >/dev/null 2>&1
sleep 3
agent-browser find text "Courses" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 1.5
agent-browser find text "ISA 315" click >/dev/null 2>&1
agent-browser wait --load networkidle >/dev/null 2>&1
sleep 2
# open the exact lesson by title prefix
TITLE_PREFIX=$(echo "$LESSON_TITLE" | cut -c1-24)
agent-browser find text "$TITLE_PREFIX" click >/dev/null 2>&1
sleep 3
VIDEO=$(agent-browser get text "body" 2>/dev/null | rg -i "video lesson" | head -1)
echo "video caption: ${VIDEO:-NOT FOUND}"
agent-browser screenshot download/v5-video-lesson.png >/dev/null 2>&1

# cleanup
curl -s -o /dev/null -X PATCH -H "Content-Type: application/json" -b "ae_session=$TOKEN" \
  -d '{"videoUrl":""}' "$BASE/api/admin/lesson/$LESSON_ID"
bun -e 'const {PrismaClient}=require("@prisma/client");const db=new PrismaClient();db.session.deleteMany({where:{token:process.argv[1]}}).then(()=>db.$disconnect())' "$TOKEN" >/dev/null 2>&1
kill $SERVER_PID 2>/dev/null
pkill -f "next dev" 2>/dev/null

if [ -n "$VIDEO" ]; then echo "[PASS] video player rendered in $LESSON_TITLE"; exit 0
else echo "[FAIL] video player not found"; exit 1; fi
