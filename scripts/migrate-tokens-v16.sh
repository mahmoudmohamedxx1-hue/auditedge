#!/bin/bash
# v16 token migration — replace hardcoded warm hexes with theme-aware tokens
# (defined in globals.css @theme inline) so the whole app survives dark mode.
set -e
cd /home/z/my-project

FILES=$(grep -rl '\[#[0-9a-fA-F]\{6\}\]' src/components/audit src/app src/hooks --include='*.tsx' 2>/dev/null)

for f in $FILES; do
  sed -i \
    -e 's/\[#c9633f\]/primary/g' \
    -e 's/\[#a14e2f\]/primary/g' \
    -e 's/\[#c2a878\]/gold/g' \
    -e 's/\[#8a744e\]/gold-deep/g' \
    -e 's/\[#a3885a\]/gold-deep/g' \
    -e 's/\[#759a87\]/sage/g' \
    -e 's/\[#4e7361\]/sage-deep/g' \
    -e 's/\[#5f8875\]/sage/g' \
    -e 's/\[#8c8f6b\]/olive/g' \
    -e 's/\[#65683f\]/olive-deep/g' \
    -e 's/\[#767a4e\]/olive-deep/g' \
    -e 's/\[#9c7a8f\]/plum/g' \
    -e 's/\[#77596c\]/plum-deep/g' \
    -e 's/\[#8c6a7f\]/plum-deep/g' \
    -e 's/\[#a98467\]/clay/g' \
    -e 's/\[#7d5f47\]/clay-deep/g' \
    -e 's/\[#977457\]/clay-deep/g' \
    -e 's/\[#ddd9c9\]/input/g' \
    -e 's/\[#d5d1c0\]/input/g' \
    -e 's/\[#4a463e\]/foreground\/80/g' \
    -e 's/\[#3d3a33\]/foreground\/85/g' \
    -e 's/\[#57534a\]/foreground\/70/g' \
    -e 's/\[#a09a8a\]/muted-foreground/g' \
    -e 's/\[#8b8578\]/muted-foreground/g' \
    -e 's/\[#4d7361\]/sage-deep/g' \
    -e 's/\[#5d8a73\]/sage-deep/g' \
    -e 's/\[#4a7c62\]/sage-deep/g' \
    -e 's/\[#8a6d3b\]/gold-deep/g' \
    -e 's/\[#7a5c2e\]/gold-deep/g' \
    -e 's/\[#8c6d3f\]/gold-deep/g' \
    -e 's/\[#a8a296\]/muted-foreground/g' \
    -e 's/\[#6b6459\]/muted-foreground/g' \
    -e 's/\[#c9c3ae\]/input/g' \
    -e 's/\[#dcd9cc\]/input/g' \
    -e 's/\[#8f4a2e\]/destructive/g' \
    -e 's/\[#c2775e\]/destructive\/80/g' \
    -e 's/bg-\[#fdf6e9\]/bg-gold\/15/g' \
    "$f"
done

echo "=== remaining hexes in class position ==="
grep -rn '\[#[0-9a-fA-F]\{6\}\]' src/components/audit src/app src/hooks --include='*.tsx' | grep -v globals || echo "(none)"
