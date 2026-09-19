#!/bin/bash
# Daemonize the Next.js dev server (double-fork -> reparent to init) so it
# keeps running across terminal closes and tool invocations.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# kill anything still holding port 3000
fuser -k 3000/tcp 2>/dev/null
sleep 1

# double-fork: child exits, grandchild is adopted by init (PID 1)
nohup bash -c "cd '$ROOT' && exec setsid bun run dev >> '$ROOT/dev.log' 2>&1" < /dev/null > /dev/null 2>&1 &

echo "launcher done"
