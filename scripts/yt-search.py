#!/usr/bin/env python3
"""Search YouTube and parse video results (title, channel, id, length, views).
Usage: python3 scripts/yt-search.py "query" [count]"""
import re
import json
import sys
import urllib.parse
import urllib.request

query = sys.argv[1] if len(sys.argv) > 1 else "CPA Talks محاسبة"
count = int(sys.argv[2]) if len(sys.argv) > 2 else 15

url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(query)
req = urllib.request.Request(url, headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept-Language": "ar,en;q=0.9",
})
html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
m = re.search(r"var ytInitialData = (\{.*?\});</script>", html)
if not m:
    print("NO ytInitialData")
    sys.exit(1)
data = json.loads(m.group(1))
out = []

def walk(o):
    if isinstance(o, dict):
        if "videoRenderer" in o:
            v = o["videoRenderer"]
            ch = v.get("ownerText", {}).get("runs", [{}])[0]
            out.append({
                "id": v.get("videoId"),
                "title": "".join(r.get("text", "") for r in v.get("title", {}).get("runs", [])),
                "channel": ch.get("text", ""),
                "channelId": ch.get("navigationEndpoint", {}).get("browseEndpoint", {}).get("browseId", ""),
                "length": v.get("lengthText", {}).get("simpleText", ""),
                "views": v.get("viewCountText", {}).get("simpleText", ""),
                "published": v.get("publishedTimeText", {}).get("simpleText", ""),
            })
        for vv in o.values():
            walk(vv)
    elif isinstance(o, list):
        for vv in o:
            walk(vv)

walk(data)
seen = set()
shown = 0
for r in out:
    if r["id"] in seen:
        continue
    seen.add(r["id"])
    print(f'{r["id"]} | {r["channel"]} | {r["length"]} | {r["views"]} | {r["published"]}\n    {r["title"]}')
    shown += 1
    if shown >= count:
        break
print(f"TOTAL: {len(out)}")
