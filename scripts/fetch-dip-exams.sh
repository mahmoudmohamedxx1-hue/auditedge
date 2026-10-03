#!/usr/bin/env bash
# v35 — mirror the Sameh Zidan DipIFR exam papers into the app itself
# (public/exams/dipifr/) so learners open them INSIDE the website instead
# of navigating to the author's CDN. The 3 big xlsx workbooks + 2 BPP books
# stay external (103MB BPP text exceeds the 100MB git file limit).
#
# Source page: https://www.samehzidan.com/course-resources1/ (verified live)
set -uo pipefail

CDN="https://sameh-files.b-cdn.net"
DEST="public/exams/dipifr"
mkdir -p "$DEST"

download() { # <local-name> <cdn-path>
  local name="$1" path="$2"
  if [ -s "$DEST/$name" ]; then echo "SKIP  $name (exists)"; return 0; fi
  curl -sfL --retry 2 --max-time 240 -o "$DEST/$name" "${CDN}/${path}" \
    && echo "OK    $name" || echo "FAIL  $name  (${path})"
}
export -f download
export CDN DEST

# --- the 26 real sitting papers ------------------------------------------
jobs=()
for y in 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024; do
  jobs+=("$y-06.pdf|matrials/${y}-6%20June%20Exam.pdf")
  jobs+=("$y-12.pdf|matrials/${y}-12%20December%20Exam.pdf")
done
jobs+=("2025-06-answers.pdf|matrials/2025-6%20%20Answers.pdf")
jobs+=("2025-12.pdf|matrials/D25-Dec.pdf")

# --- companion shelf (self-hosted part) -----------------------------------
jobs+=("combined-2013-2024.pdf|Jun%202013-Dec%202024%20IFRS%20Dip%20Exams.pdf")
jobs+=("question-4-bank.xlsx|Question%204.xlsx")
jobs+=("glossary-en-ar.xlsx|DipIFR_ALL_Standards_%D8%A7%D9%84%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D8%A7%D8%AA_%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9_1.xlsx")
jobs+=("exams-questions-index.xlsx|Exams%20Questions.xlsx")

printf '%s\n' "${jobs[@]}" | xargs -P 6 -I{} bash -c 'IFS="|" read -r name path <<< "{}"; download "$name" "$path"'

# --- report ---------------------------------------------------------------
echo "---"
total=0; count=0
for f in "$DEST"/*; do
  [ -s "$f" ] || { echo "EMPTY: $f"; continue; }
  sz=$(stat -c%s "$f"); total=$((total+sz)); count=$((count+1))
  printf "%8d KB  %s\n" $((sz/1024)) "$(basename "$f")"
done
echo "FILES: $count   TOTAL: $((total/1024/1024)) MB ($total bytes)"
