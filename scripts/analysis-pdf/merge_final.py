#!/usr/bin/env python3
"""Merge Template-07 cover + ReportLab body into the final analysis PDF."""
from pypdf import PdfReader, PdfWriter
import os

HERE = os.path.dirname(os.path.abspath(__file__))
COVER = os.path.join(HERE, "cover.pdf")
BODY = os.path.join(HERE, "body.pdf")
OUT = "/home/z/my-project/download/AuditEdge-Academy-Improvement-Roadmap-v19-2.pdf"

A4_W, A4_H = 595.28, 841.89


def normalize_page_to_a4(page):
    box = page.mediabox
    w, h = float(box.width), float(box.height)
    if abs(w - A4_W) > 0.1 or abs(h - A4_H) > 0.1:
        page.scale_to(A4_W, A4_H)
    return page


writer = PdfWriter()
writer.add_page(normalize_page_to_a4(PdfReader(COVER).pages[0]))
body = PdfReader(BODY)
for page in body.pages:
    writer.add_page(normalize_page_to_a4(page))
writer.add_metadata({
    "/Title": "AuditEdge Academy - Product Deep-Dive & Improvement Roadmap (v19.2)",
    "/Author": "Z.ai",
    "/Creator": "Z.ai",
    "/Subject": "Deep-dive analysis and improvement roadmap for the AuditEdge Academy external-audit learning platform",
})
with open(OUT, "wb") as f:
    writer.write(f)
print("FINAL_OK", OUT, "pages:", 1 + len(body.pages))
