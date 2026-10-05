"""AuditEdge v37 state-of-project audit — body PDF builder (ReportLab).

Pipeline per pdf skill / briefs/report.md:
  - TocDocTemplate + multiBuild (document has a TOC)
  - Template 07 Crystal Blue fixed body palette (typesetting/cover.md)
  - FreeSerif family for English text; DejaVuSans for code; all table cells
    wrapped in Paragraph(); ratio-based colWidths; hAlign CENTER
  - CondPageBreak orphan prevention before H1 (no forced chapter breaks)
  - Cover is rendered separately (html2poster.js) and merged here as page 0
"""
import hashlib
import os
import sys

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (CondPageBreak, HRFlowable, Image,
                                KeepTogether, PageBreak, Paragraph,
                                SimpleDocTemplate, Spacer, Table, TableStyle)
from reportlab.platypus.tableofcontents import TableOfContents

HERE = os.path.dirname(os.path.abspath(__file__))
SKILL_SCRIPTS = "/home/z/my-project/skills/pdf/scripts"
sys.path.insert(0, SKILL_SCRIPTS)
sys.path.insert(0, HERE)

from pdf import install_font_fallback  # noqa: E402
import content_a as A  # noqa: E402
import content_b as B  # noqa: E402

# ---------------------------------------------------------------- fonts
FONT_DIR = "/usr/share/fonts"
pdfmetrics.registerFont(TTFont("NotoSerifSC", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Regular.ttf"))
pdfmetrics.registerFont(TTFont("NotoSerifSC-Bold", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Bold.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif", f"{FONT_DIR}/truetype/freefont/FreeSerif.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Bold", f"{FONT_DIR}/truetype/freefont/FreeSerifBold.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Italic", f"{FONT_DIR}/truetype/freefont/FreeSerifItalic.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-BoldItalic", f"{FONT_DIR}/truetype/freefont/FreeSerifBoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuSans", f"{FONT_DIR}/truetype/dejavu/DejaVuSansMono.ttf"))
registerFontFamily("NotoSerifSC", normal="NotoSerifSC", bold="NotoSerifSC-Bold")
registerFontFamily("FreeSerif", normal="FreeSerif", bold="FreeSerif-Bold",
                   italic="FreeSerif-Italic", boldItalic="FreeSerif-BoldItalic")
registerFontFamily("DejaVuSans", normal="DejaVuSans", bold="DejaVuSans")
install_font_fallback()

# ------------------------------------------------------- Template 07 palette
PAGE_BG = colors.HexColor("#f5f8fc")
SECTION_BG = colors.HexColor("#edf2f9")
CARD_BG = colors.HexColor("#e4ecf5")
TABLE_STRIPE = colors.HexColor("#eef3fa")
HEADER_FILL = colors.HexColor("#1a4a7a")
BORDER = colors.HexColor("#c0d0e2")
ACCENT = colors.HexColor("#2d7ab3")
TEXT_PRIMARY = colors.HexColor("#142840")
TEXT_MUTED = colors.HexColor("#5a7a96")

TABLE_HEADER_COLOR = HEADER_FILL
TABLE_HEADER_TEXT = colors.white
TABLE_ROW_EVEN = colors.white
TABLE_ROW_ODD = TABLE_STRIPE

# ---------------------------------------------------------------- layout
PAGE_W, PAGE_H = A4
MARGIN = 57.0
TOP_MARGIN = 66.0
BOTTOM_MARGIN = 62.0
AVAIL_W = PAGE_W - 2 * MARGIN            # ~481 pt
AVAIL_H = PAGE_H - TOP_MARGIN - BOTTOM_MARGIN
H1_ORPHAN = AVAIL_H * 0.18

DOC_TITLE = "AuditEdge Academy - Deep Analysis & Full Test Audit"
DOC_AUTHOR = "AuditEdge Academy Engineering"

# ---------------------------------------------------------------- styles
S = {}
S["body"] = ParagraphStyle("Body", fontName="FreeSerif", fontSize=10.5,
                           leading=16.5, alignment=TA_JUSTIFY,
                           textColor=TEXT_PRIMARY, spaceBefore=0, spaceAfter=9)
S["lead"] = ParagraphStyle("Lead", parent=S["body"], fontSize=11.5,
                           leading=18.5, spaceAfter=11)
S["h1"] = ParagraphStyle("H1", fontName="FreeSerif", fontSize=18.5,
                         leading=23, textColor=HEADER_FILL,
                         spaceBefore=20, spaceAfter=4)
S["h2"] = ParagraphStyle("H2", fontName="FreeSerif", fontSize=14,
                         leading=18, textColor=HEADER_FILL,
                         spaceBefore=16, spaceAfter=7)
S["h3"] = ParagraphStyle("H3", fontName="FreeSerif", fontSize=11.5,
                         leading=15, textColor=TEXT_PRIMARY,
                         spaceBefore=12, spaceAfter=6)
S["bullet"] = ParagraphStyle("Bullet", parent=S["body"], alignment=TA_LEFT,
                             leftIndent=16, bulletIndent=4, spaceAfter=7)
S["caption"] = ParagraphStyle("Caption", fontName="FreeSerif", fontSize=8.5,
                              leading=12, alignment=TA_CENTER,
                              textColor=TEXT_MUTED, spaceBefore=3, spaceAfter=6)
S["th"] = ParagraphStyle("TH", fontName="FreeSerif", fontSize=9.5,
                         leading=12.5, alignment=TA_LEFT,
                         textColor=colors.white)
S["td"] = ParagraphStyle("TD", fontName="FreeSerif", fontSize=9.5,
                         leading=12.5, alignment=TA_LEFT,
                         textColor=TEXT_PRIMARY)
S["td_c"] = ParagraphStyle("TDC", parent=S["td"], alignment=TA_CENTER)
S["th_c"] = ParagraphStyle("THC", parent=S["th"], alignment=TA_CENTER)
S["stat_num"] = ParagraphStyle("StatNum", fontName="FreeSerif", fontSize=19,
                               leading=23, alignment=TA_CENTER, textColor=ACCENT)
S["stat_label"] = ParagraphStyle("StatLabel", fontName="FreeSerif", fontSize=7.6,
                                 leading=10, alignment=TA_CENTER,
                                 textColor=TEXT_MUTED)
S["code"] = ParagraphStyle("Code", fontName="DejaVuSans", fontSize=8.3,
                           leading=12, alignment=TA_LEFT,
                           textColor=TEXT_PRIMARY)
S["toc_title"] = ParagraphStyle("TocTitle", fontName="FreeSerif", fontSize=17,
                                leading=22, textColor=HEADER_FILL, spaceAfter=14)
S["toc0"] = ParagraphStyle("TOC0", fontName="FreeSerif", fontSize=10.5,
                           leading=17, leftIndent=6, textColor=TEXT_PRIMARY)
S["toc1"] = ParagraphStyle("TOC1", fontName="FreeSerif", fontSize=9.5,
                           leading=15, leftIndent=26, textColor=TEXT_MUTED)

# ---------------------------------------------------------------- helpers
def P(text, style):
    return Paragraph(text, S[style])


def add_heading(text, level=0, style="h1"):
    key = "h_" + hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph(f'<a name="{key}"/><b>{text}</b>', S[style])
    p.bookmark_name = key
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p


def h1_block(text):
    """H1 + accent rule, with orphan prevention (NOT a forced page break)."""
    rule = HRFlowable(width="100%", thickness=1.6, color=ACCENT,
                      spaceBefore=0, spaceAfter=10)
    return [CondPageBreak(H1_ORPHAN), add_heading(text, 0, "h1"), rule]


def h2_block(text):
    return [add_heading(text, 1, "h2")]


def make_table(rows, ratios, header=True, aligns=None, repeat=True,
               font_scale=1.0):
    """rows: list of tuples of plain strings. First row is a header if header."""
    n = len(ratios)
    widths = [r * AVAIL_W for r in ratios]
    assert abs(sum(widths) - AVAIL_W) < 1.0, "colWidths must fill AVAIL_W"
    aligns = aligns or ["L"] * n

    data = []
    for i, row in enumerate(rows):
        cells = []
        for j, cell in enumerate(row):
            if header and i == 0:
                st = S["th_c"] if aligns[j] == "C" else S["th"]
                cells.append(Paragraph(f"<b>{cell}</b>", st))
            else:
                st = S["td_c"] if aligns[j] == "C" else S["td"]
                cells.append(Paragraph(str(cell), st))
        data.append(cells)

    t = Table(data, colWidths=widths, hAlign="CENTER",
              repeatRows=1 if (header and repeat) else 0)
    style = [
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
    ]
    if header:
        style += [("BACKGROUND", (0, 0), (-1, 0), TABLE_HEADER_COLOR),
                  ("TEXTCOLOR", (0, 0), (-1, 0), TABLE_HEADER_TEXT)]
        for i in range(1, len(rows)):
            bg = TABLE_ROW_ODD if i % 2 == 1 else TABLE_ROW_EVEN
            style.append(("BACKGROUND", (0, i), (-1, i), bg))
    t.setStyle(TableStyle(style))
    return t


def table_with_caption(rows, ratios, caption, **kw):
    t = make_table(rows, ratios, **kw)
    return [Spacer(1, 12), t, Spacer(1, 4), P(caption, "caption"), Spacer(1, 10)]


def callout_row(items):
    """items: list of (big, label) — one row of stat boxes."""
    n = len(items)
    gap = 10
    box_w = (AVAIL_W - gap * (n - 1)) / n
    cells, widths = [], []
    for i, (num, label) in enumerate(items):
        inner = Table(
            [[Paragraph(f"<b>{num}</b>", S["stat_num"])],
             [Paragraph(label, S["stat_label"])]],
            colWidths=[box_w - 2],
        )
        inner.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), CARD_BG),
            ("BOX", (0, 0), (-1, -1), 1, ACCENT),
            ("TOPPADDING", (0, 0), (-1, 0), 9),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 1),
            ("TOPPADDING", (0, 1), (-1, 1), 1),
            ("BOTTOMPADDING", (0, 1), (-1, 1), 9),
            ("LEFTPADDING", (0, 0), (-1, -1), 4),
            ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ]))
        cells.append(inner)
        widths.append(box_w)
        if i < n - 1:
            cells.append("")
            widths.append(gap)
    outer = Table([cells], colWidths=widths, hAlign="CENTER")
    outer.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return outer


def embed_image(path, max_width, max_height):
    img = PILImage.open(path)
    ow, oh = img.size
    ratio = min(max_width / ow, max_height / oh, 1.0)
    return Image(path, width=ow * ratio, height=oh * ratio)


def figure(path, caption, max_h=300):
    img = embed_image(path, AVAIL_W * 0.96, max_h)
    return [Spacer(1, 16), img, Spacer(1, 6), P(caption, "caption"),
            Spacer(1, 14)]


def code_block(lines):
    rows = [[Paragraph(ln.replace(" ", " ") if ln else " ",
                       S["code"])] for ln in lines]
    t = Table(rows, colWidths=[AVAIL_W * 0.96], hAlign="CENTER")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CARD_BG),
        ("LINEBEFORE", (0, 0), (0, -1), 2.2, ACCENT),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 1.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
    ]))
    return [Spacer(1, 10), t, Spacer(1, 10)]


def safe_keep(elements, max_frac=0.4):
    total = 0
    for el in elements:
        w, h = el.wrap(AVAIL_W, PAGE_H)
        total += h
    if total <= PAGE_H * max_frac:
        return [KeepTogether(elements)]
    if len(elements) >= 2:
        return [KeepTogether(elements[:2])] + list(elements[2:])
    return list(elements)


# ---------------------------------------------------------------- doc
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, "bookmark_name"):
            level = getattr(flowable, "bookmark_level", 0)
            text = getattr(flowable, "bookmark_text", "")
            key = getattr(flowable, "bookmark_key", "")
            self.notify("TOCEntry", (level, text, self.page, key))


def on_page(canvas, doc):
    canvas.saveState()
    # page background (Template 07 light-blue body)
    canvas.setFillColor(PAGE_BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # header
    canvas.setFont("FreeSerif-Italic", 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(MARGIN, PAGE_H - 40, DOC_TITLE)
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.2)
    canvas.line(MARGIN, PAGE_H - 46, PAGE_W - MARGIN, PAGE_H - 46)
    # footer
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 42, PAGE_W - MARGIN, 42)
    canvas.setFont("FreeSerif", 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(MARGIN, 30, DOC_AUTHOR)
    canvas.drawRightString(PAGE_W - MARGIN, 30, f"Page {canvas.getPageNumber()}")
    canvas.restoreState()


def build():
    body_path = os.path.join(HERE, "body.pdf")
    doc = TocDocTemplate(
        body_path, pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=TOP_MARGIN, bottomMargin=BOTTOM_MARGIN,
        title=DOC_TITLE, author="Z.ai", creator="Z.ai",
        subject="State-of-project audit: verification campaign, inventory, "
                "health assessment and roadmap for AuditEdge Academy v37",
    )

    story = []

    # ---- TOC page
    story.append(Paragraph("<b>Table of Contents</b>", S["toc_title"]))
    toc = TableOfContents()
    toc.levelStyles = [S["toc0"], S["toc1"]]
    toc.dotsMinLevel = 0
    story.append(toc)
    story.append(PageBreak())

    # ---- Executive Summary (front matter, unnumbered)
    story.extend(safe_keep([add_heading("Executive Summary", 0, "h1"),
                            HRFlowable(width="100%", thickness=1.6,
                                       color=ACCENT, spaceBefore=0,
                                       spaceAfter=10),
                            P(A.EXEC_INTRO, "lead")]))
    story.append(Spacer(1, 6))
    story.append(callout_row(A.STATS_ROW_1))
    story.append(Spacer(1, 10))
    story.append(callout_row(A.STATS_ROW_2))
    story.append(Spacer(1, 12))
    story.append(P(A.EXEC_FINDING, "body"))
    story.append(P(A.EXEC_RECS, "body"))

    # ---- 1. Verification campaign
    story.extend(h1_block("1. Verification Campaign - Every Test, Every Result"))
    story.extend(h2_block("1.1 Method: four independent layers"))
    story.append(P(A.SEC1_METHOD, "body"))
    story.extend(h2_block("1.2 Static gates: types and lint"))
    story.append(P(A.SEC1_STATIC, "body"))
    story.extend(h2_block("1.3 The regression battery - and one environment tale"))
    story.append(P(A.SEC1_DB_STORY, "body"))

    battery_rows = [("Suite", "Checks", "Outcome")] + list(A.SEC1_BATTERY_TABLE)
    battery_rows.append(("Total - 21 suites", "2,117", "0 failures"))
    story.extend(table_with_caption(
        battery_rows, [0.64, 0.16, 0.20],
        "Table 1 - Regression battery results per suite (run of 5-6 October "
        "2026, after content-snapshot restore).",
        aligns=["L", "C", "C"]))

    story.extend(figure(os.path.join(HERE, "chart-battery.png"),
                        "Figure 1 - Regression battery: 2,117 automated "
                        "checks across 21 suites, zero failures.",
                        max_h=330))
    story.append(P(A.SEC1_BATTERY_AFTER, "body"))

    story.extend(h2_block("1.4 End-to-end: 19/19 in a live browser"))
    story.append(P(A.SEC1_E2E_INTRO, "body"))
    for title, body in A.SEC1_E2E_BULLETS:
        story.append(P(f"<b>{title}</b> {body}", "bullet"))
    story.append(Spacer(1, 4))

    story.extend(h2_block("1.5 Production probes: the deployment is current"))
    story.append(P(A.SEC1_PROD_INTRO, "body"))
    story.extend(table_with_caption(
        [("Probe", "Result")] + list(A.SEC1_PROD_TABLE),
        [0.52, 0.48],
        "Table 2 - Live production probes against auditedge-snowy.vercel.app.",
        aligns=["L", "L"]))

    # ---- 2. Product inventory
    story.extend(h1_block("2. Product Inventory - What Exists Today"))
    story.extend(h2_block("2.1 The platform at a glance"))
    story.append(P(B.SEC2_PLATFORM, "body"))
    story.extend(h2_block("2.2 Learning spine"))
    story.append(P(B.SEC2_LEARNING, "body"))
    story.extend(h2_block("2.3 Exam preparation"))
    story.append(P(B.SEC2_EXAM, "body"))
    story.extend(h2_block("2.4 Reference library"))
    story.append(P(B.SEC2_REFERENCE, "body"))
    story.extend(h2_block("2.5 AI tooling"))
    story.append(P(B.SEC2_AI, "body"))
    story.extend(h2_block("2.6 Test of Control - the v37 flagship"))
    story.append(P(B.SEC2_TOC, "body"))

    story.extend(figure(os.path.join(HERE, "chart-assets.png"),
                        "Figure 2 - Content assets by module (live database "
                        "and content libraries, October 2026).",
                        max_h=240))

    story.extend(table_with_caption(
        [("Asset", "Count")] + list(B.SEC2_DB_TABLE),
        [0.68, 0.32],
        "Table 3 - Content inventory: database and libraries.",
        aligns=["L", "C"]))

    # ---- 3. Health assessment
    story.extend(h1_block("3. Health Assessment - Strengths, Risks and Debt"))
    story.extend(h2_block("3.1 Strengths"))
    story.append(P(B.SEC3_STRENGTH_DISCIPLINE, "body"))
    story.append(P(B.SEC3_STRENGTH_STRUCT, "body"))
    story.extend(h2_block("3.2 Risk register"))
    story.append(P(B.SEC3_RISK_INTRO, "body"))
    risk_rows = [("Risk", "Severity", "Impact", "Mitigation")] + \
        list(B.SEC3_RISK_TABLE)
    story.extend(table_with_caption(
        risk_rows, [0.20, 0.11, 0.37, 0.32],
        "Table 4 - Risk register, ordered by expected impact.",
        aligns=["L", "C", "L", "L"]))
    story.append(P(B.SEC3_RISK_AFTER, "body"))

    # ---- 4. Roadmap
    story.extend(h1_block("4. Roadmap - What We Can Do Next"))
    story.extend(h2_block("4.1 Quick wins (days)"))
    story.append(P(B.SEC4_QUICK_INTRO, "body"))
    for title, body in B.SEC4_QUICK:
        story.append(P(f"<b>{title}.</b> {body}", "bullet"))
    story.extend(h2_block("4.2 Mid-term (next one to two releases)"))
    story.append(P(B.SEC4_MID_INTRO, "body"))
    for title, body in B.SEC4_MID:
        story.append(P(f"<b>{title}.</b> {body}", "bullet"))
    story.extend(h2_block("4.3 Strategic horizon (quarter and beyond)"))
    story.append(P(B.SEC4_STRATEGIC_INTRO, "body"))
    for title, body in B.SEC4_STRATEGIC:
        story.append(P(f"<b>{title}.</b> {body}", "bullet"))
    story.extend(h2_block("4.4 Recommended scope for v38"))
    story.append(P(B.SEC4_V38, "body"))

    # ---- 5. Release history & reproducing the audit
    story.extend(h1_block("5. Release History and Reproducing the Audit"))
    story.extend(h2_block("5.1 Version timeline v20 to v37"))
    story.append(P(
        "Eighteen shipped versions in the tracked window, each carrying its "
        "own regression suite forward. The table reads as a product "
        "biography: an exam engine first, content depth second, "
        "distribution and reliability third, and now fieldwork tooling.",
        "body"))
    story.extend(table_with_caption(
        [("Version", "Highlight")] + list(B.SEC5_TIMELINE),
        [0.14, 0.86],
        "Table 5 - Release history, v20 through v37 (31 commits on main).",
        aligns=["C", "L"]))
    story.extend(h2_block("5.2 Reproducing this audit"))
    story.append(P(B.SEC5_REPRO_INTRO, "body"))
    story.extend(code_block(B.SEC5_REPRO_COMMANDS))
    story.append(P(B.SEC5_CLOSE, "body"))

    doc.multiBuild(story, onFirstPage=on_page, onLaterPages=on_page)
    print(f"body built: {body_path}")
    return body_path


def merge(body_path):
    from pypdf import PdfReader, PdfWriter
    A4_W, A4_H = 595.28, 841.89

    def norm(page):
        w, h = float(page.mediabox.width), float(page.mediabox.height)
        if abs(w - A4_W) > 0.1 or abs(h - A4_H) > 0.1:
            page.scale_to(A4_W, A4_H)
        return page

    writer = PdfWriter()
    cover = PdfReader(os.path.join(HERE, "cover.pdf")).pages[0]
    writer.add_page(norm(cover))
    for page in PdfReader(body_path).pages:
        writer.add_page(norm(page))
    writer.add_metadata({
        "/Title": DOC_TITLE,
        "/Author": "Z.ai",
        "/Creator": "Z.ai",
        "/Subject": "State-of-project audit for AuditEdge Academy v37",
    })
    out = "/home/z/my-project/download/AuditEdge-State-of-Project-Audit-v37.pdf"
    with open(out, "wb") as f:
        writer.write(f)
    print(f"final: {out}")
    return out


if __name__ == "__main__":
    body = build()
    merge(body)
