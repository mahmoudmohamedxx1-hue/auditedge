#!/usr/bin/env python3
"""Fix misplaced `red: true` inside dr/cr objects of journal rows.
Pattern: { dr: { en: "...", ar: "...", red: true } } → { dr: { en, ar }, red: true }
"""
import re
import sys
from pathlib import Path

STD_DIR = Path("/home/z/my-project/src/lib/ifrs/standards")

# (dr|cr): { en: "...", ar: "...", red: true }  →  (dr|cr): { en: "...", ar: "..." }, red: true
pattern = re.compile(r'((?:dr|cr): \{[^{}]*?), red: true \}')

total = 0
for f in sorted(STD_DIR.glob("*.ts")):
    src = f.read_text(encoding="utf-8")
    fixed, n = pattern.subn(r'\1 }, red: true }', src)
    if n:
        f.write_text(fixed, encoding="utf-8")
        print(f"{f.name}: fixed {n} rows")
        total += n
print(f"TOTAL fixed: {total}")
