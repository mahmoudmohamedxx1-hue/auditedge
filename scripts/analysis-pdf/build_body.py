#!/usr/bin/env python3
"""AuditEdge Academy - Product Deep-Dive & Improvement Roadmap (v19.2).

Report route: ReportLab body + Playwright Template-07 cover, merged via pypdf.
Chapter numbering plan (Step 3.5):
  cover  -> no number (separate PDF, merged as page 0)
  toc    -> no number (roman i footer)
  1 Executive Summary | 2 Method & Evidence Base | 3 Current-State Inventory
  4 Gap Analysis: Eight Findings | 5 Improvement Roadmap | 6 Quick Wins
  7 Success Metrics | 8 Appendix: Survey Data
"""
import os
import sys
import hashlib

PDF_SKILL_DIR = "/home/z/my-project/skills/pdf"
_scripts = os.path.join(PDF_SKILL_DIR, "scripts")
if _scripts not in sys.path:
    sys.path.insert(0, _scripts)

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, CondPageBreak, HRFlowable, Image,
)
from reportlab.platypus.tableofcontents import TableOfContents

# ---------------- Fonts (allowed set only) ----------------
FONT_DIR = "/usr/share/fonts"
pdfmetrics.registerFont(TTFont("FreeSerif", f"{FONT_DIR}/truetype/freefont/FreeSerif.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Bold", f"{FONT_DIR}/truetype/freefont/FreeSerifBold.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-Italic", f"{FONT_DIR}/truetype/freefont/FreeSerifItalic.ttf"))
pdfmetrics.registerFont(TTFont("FreeSerif-BoldItalic", f"{FONT_DIR}/truetype/freefont/FreeSerifBoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("NotoSerifSC", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Regular.ttf"))
pdfmetrics.registerFont(TTFont("NotoSerifSC-Bold", f"{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Bold.ttf"))
pdfmetrics.registerFont(TTFont("DejaVuSans", f"{FONT_DIR}/truetype/dejavu/DejaVuSansMono.ttf"))
registerFontFamily("FreeSerif", normal="FreeSerif", bold="FreeSerif-Bold",
                   italic="FreeSerif-Italic", boldItalic="FreeSerif-BoldItalic")
registerFontFamily("NotoSerifSC", normal="NotoSerifSC", bold="NotoSerifSC-Bold")
registerFontFamily("DejaVuSans", normal="DejaVuSans", bold="DejaVuSans")

from pdf import install_font_fallback  # noqa: E402
install_font_fallback()

# ---------------- Palette: Template 07 Crystal Blue body subset (fixed) ----------------
PAGE_BG      = colors.HexColor("#f5f8fc")   # XL
SECTION_BG   = colors.HexColor("#edf2f9")   # XL
CARD_BG      = colors.HexColor("#e4ecf5")   # L
TABLE_STRIPE = colors.HexColor("#eef3fa")   # L
HEADER_FILL  = colors.HexColor("#1a4a7a")   # M
BORDER       = colors.HexColor("#c0d0e2")   # S
ACCENT       = colors.HexColor("#2d7ab3")   # XS
TEXT_PRIMARY = colors.HexColor("#142840")
TEXT_MUTED   = colors.HexColor("#5a7a96")

TABLE_HEADER_COLOR = HEADER_FILL
TABLE_HEADER_TEXT  = colors.white
TABLE_ROW_EVEN     = colors.white
TABLE_ROW_ODD      = TABLE_STRIPE

# ---------------- Page geometry ----------------
PAGE_W, PAGE_H = A4
MARGIN = 0.9 * inch          # symmetric left/right
TOP_MARGIN = 0.95 * inch
BOTTOM_MARGIN = 0.85 * inch
AVAIL_W = PAGE_W - 2 * MARGIN
AVAIL_H = PAGE_H - TOP_MARGIN - BOTTOM_MARGIN
H1_COND = AVAIL_H * 0.25     # orphan threshold before H1

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
BODY_PDF = os.path.join(OUT_DIR, "body.pdf")

DOC_TITLE = "AuditEdge Academy - Product Deep-Dive & Improvement Roadmap"
DOC_AUTHOR = "Mahmoud El-Sayeed"

# ---------------- Styles ----------------
body_style = ParagraphStyle("Body", fontName="FreeSerif", fontSize=10.5, leading=17,
                            alignment=TA_JUSTIFY, textColor=TEXT_PRIMARY,
                            spaceBefore=0, spaceAfter=8)
lead_style = ParagraphStyle("Lead", parent=body_style, fontSize=11, leading=18,
                            textColor=TEXT_PRIMARY, spaceAfter=10)
h1_style = ParagraphStyle("H1", fontName="FreeSerif-Bold", fontSize=20, leading=25,
                          textColor=HEADER_FILL, spaceBefore=16, spaceAfter=4,
                          alignment=TA_LEFT)
h2_style = ParagraphStyle("H2", fontName="FreeSerif-Bold", fontSize=14.5, leading=19,
                          textColor=HEADER_FILL, spaceBefore=14, spaceAfter=6)
h3_style = ParagraphStyle("H3", fontName="FreeSerif-Bold", fontSize=11.5, leading=15,
                          textColor=TEXT_PRIMARY, spaceBefore=10, spaceAfter=5)
bullet_style = ParagraphStyle("Bullet", parent=body_style, alignment=TA_LEFT,
                              leftIndent=16, bulletIndent=4, spaceAfter=5)
numbered_style = ParagraphStyle("Numbered", parent=body_style, alignment=TA_LEFT,
                                leftIndent=20, spaceAfter=6)
quote_style = ParagraphStyle("Quote", fontName="FreeSerif-Italic", fontSize=10.5,
                             leading=17, leftIndent=24, rightIndent=12,
                             textColor=TEXT_MUTED, spaceBefore=6, spaceAfter=6,
                             borderPadding=0)
caption_style = ParagraphStyle("Caption", fontName="FreeSerif", fontSize=8.5, leading=12,
                               alignment=TA_CENTER, textColor=TEXT_MUTED,
                               spaceBefore=3, spaceAfter=6)
th_style = ParagraphStyle("TH", fontName="FreeSerif-Bold", fontSize=9.5, leading=13,
                          textColor=TABLE_HEADER_TEXT, alignment=TA_LEFT)
td_style = ParagraphStyle("TD", fontName="FreeSerif", fontSize=9.5, leading=13,
                          textColor=TEXT_PRIMARY, alignment=TA_LEFT)
td_center = ParagraphStyle("TDC", parent=td_style, alignment=TA_CENTER)
stat_style = ParagraphStyle("StatBig", fontName="FreeSerif-Bold", fontSize=20, leading=24,
                            textColor=ACCENT, alignment=TA_CENTER)
stat_label = ParagraphStyle("StatLabel", fontName="FreeSerif", fontSize=8.5, leading=11.5,
                            textColor=TEXT_MUTED, alignment=TA_CENTER)
toc_h1 = ParagraphStyle("TOC1", fontName="FreeSerif-Bold", fontSize=11.5, leading=20,
                        leftIndent=6, textColor=TEXT_PRIMARY)
toc_h2 = ParagraphStyle("TOC2", fontName="FreeSerif", fontSize=10, leading=16,
                        leftIndent=26, textColor=TEXT_MUTED)
toc_title_style = ParagraphStyle("TOCTitle", fontName="FreeSerif-Bold", fontSize=20,
                                 leading=26, textColor=HEADER_FILL, spaceAfter=14)

# ---------------- Doc template with TOC support ----------------
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, "bookmark_name"):
            level = getattr(flowable, "bookmark_level", 0)
            text = getattr(flowable, "bookmark_text", "")
            key = getattr(flowable, "bookmark_key", "")
            # TOC shows DISPLAYED page numbers: the footer labels the TOC page
            # "i" and body pages 1..N, i.e. internal page - 1.
            self.notify("TOCEntry", (level, text, self.page - 1, key))


def on_page(canvas, doc):
    """Page background + header rule + footer with page numbers.

    Page 1 of the ReportLab body = TOC (roman i); body pages show Arabic
    numbers starting at 1 (cover is merged in front afterwards and carries
    no number, per the standard five-zone scheme).
    """
    canvas.saveState()
    # full-page light-blue background (Template 07 body family)
    canvas.setFillColor(PAGE_BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # header
    canvas.setFont("FreeSerif", 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(MARGIN, PAGE_H - 0.55 * inch, DOC_TITLE)
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.2)
    canvas.line(MARGIN, PAGE_H - 0.62 * inch, PAGE_W - MARGIN, PAGE_H - 0.62 * inch)
    # footer
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 0.62 * inch, PAGE_W - MARGIN, 0.62 * inch)
    canvas.setFont("FreeSerif", 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(MARGIN, 0.45 * inch, f"{DOC_AUTHOR} - External Audit Workspace")
    page_label = "i" if doc.page == 1 else str(doc.page - 1)
    canvas.drawRightString(PAGE_W - MARGIN, 0.45 * inch, page_label)
    canvas.restoreState()


# ---------------- Helpers ----------------
def add_heading(text, style, level=0):
    key = "h_" + hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph(f'<a name="{key}"/>{text}', style)
    p.bookmark_name = key
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p


def h1(story, text):
    """Major section: conditional break (orphan guard), heading + accent rule.

    NOTE: the heading must NOT sit inside KeepTogether - afterFlowable would
    receive the container instead of the Paragraph and the TOC entry would be
    lost. CondPageBreak guarantees room for heading + rule + several lines.
    """
    story.append(CondPageBreak(H1_COND))
    story.append(add_heading(text, h1_style, level=0))
    story.append(HRFlowable(width="100%", thickness=1.6, color=ACCENT,
                            spaceBefore=2, spaceAfter=0))
    story.append(Spacer(1, 10))


def h2(story, text):
    story.append(CondPageBreak(70))
    story.append(add_heading(text, h2_style, level=1))


def h3(story, text):
    story.append(Paragraph(f"<b>{text}</b>", h3_style))


def para(story, text, style=None):
    story.append(Paragraph(text, style or body_style))


def bullets(story, items):
    for it in items:
        story.append(Paragraph(it, bullet_style, bulletText="\u2022"))
    story.append(Spacer(1, 4))


def stat_row(story, stats):
    """Row of stat callout boxes: [(value, label), ...] - max 4."""
    n = len(stats)
    gap = 10
    box_w = (AVAIL_W - gap * (n - 1)) / n
    cells, widths = [], []
    for i, (value, label) in enumerate(stats):
        inner = Table(
            [[Paragraph(f"<b>{value}</b>", stat_style)],
             [Paragraph(label, stat_label)]],
            colWidths=[box_w],
        )
        inner.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), CARD_BG),
            ("BOX", (0, 0), (-1, -1), 0.8, ACCENT),
            ("TOPPADDING", (0, 0), (-1, 0), 9),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 2),
            ("TOPPADDING", (0, 1), (-1, 1), 1),
            ("BOTTOMPADDING", (0, 1), (-1, 1), 9),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ]))
        cells.append(inner)
        widths.append(box_w)
        if i < n - 1:
            cells.append(Spacer(gap, 1))
            widths.append(gap)
    row = Table([cells], colWidths=widths)
    row.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(Spacer(1, 6))
    story.append(KeepTogether(row))
    story.append(Spacer(1, 10))


def make_table(story, header, rows, ratios, caption=None, center_cols=(), small=False):
    """Standard striped table. All cells wrapped in Paragraph()."""
    assert abs(sum(ratios) - 1.0) < 0.01, "ratios must sum to 1.0"
    col_widths = [r * AVAIL_W for r in ratios]
    assert sum(col_widths) <= AVAIL_W + 0.5, "table exceeds available width"
    fs = 9.0 if small else 9.5
    th = ParagraphStyle("th_x", parent=th_style, fontSize=fs, leading=fs + 3.5)
    td = ParagraphStyle("td_x", parent=td_style, fontSize=fs, leading=fs + 3.5)
    tdc = ParagraphStyle("tdc_x", parent=td_center, fontSize=fs, leading=fs + 3.5)
    data = [[Paragraph(f"<b>{c}</b>", th) for c in header]]
    for row in rows:
        data.append([
            Paragraph(str(c), tdc if i in center_cols else td)
            for i, c in enumerate(row)
        ])
    t = Table(data, colWidths=col_widths, hAlign="CENTER", repeatRows=1)
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), TABLE_HEADER_COLOR),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, 0), 0.8, HEADER_FILL),
        ("GRID", (0, 1), (-1, -1), 0.4, BORDER),
    ]
    for r in range(1, len(data)):
        style.append(("BACKGROUND", (0, r), (-1, r),
                      TABLE_ROW_ODD if r % 2 == 1 else TABLE_ROW_EVEN))
    t.setStyle(TableStyle(style))
    story.append(Spacer(1, 12))
    story.append(t)
    if caption:
        story.append(Spacer(1, 4))
        story.append(Paragraph(caption, caption_style))
    story.append(Spacer(1, 12))


def build_chart():
    """Horizontal stacked bar: assessment coverage by course category."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.font_manager as fm
    fm.fontManager.addfont(f"{FONT_DIR}/truetype/dejavu/DejaVuSans.ttf")
    import matplotlib.pyplot as plt
    plt.rcParams["font.sans-serif"] = ["DejaVu Sans"]
    plt.rcParams["axes.unicode_minus"] = False

    cats = ["Arabic Academy (YouTube)", "International Standards (ISA)",
            "Egyptian Framework", "IFRS", "Analytics", "Open Courses (Coursera)"]
    with_quiz = [0, 5, 1, 1, 1, 0]
    no_quiz = [22, 0, 0, 0, 0, 1]

    fig, ax = plt.subplots(figsize=(7.6, 3.1), constrained_layout=True)
    y = list(range(len(cats)))[::-1]
    b1 = ax.barh(y, with_quiz, height=0.58, color="#2d7ab3", label="With end-of-course quiz")
    b2 = ax.barh(y, no_quiz, left=with_quiz, height=0.58, color="#c0d0e2",
                 label="No assessment attached")
    for yi, w, nw in zip(y, with_quiz, no_quiz):
        total = w + nw
        label = str(total) + (" courses" if total > 1 else " course")
        ax.text(total + 0.35, yi, label, va="center", ha="left",
                fontsize=9, color="#142840")
    ax.set_yticks(y)
    ax.set_yticklabels(cats, fontsize=9.5, color="#142840")
    ax.set_xlim(0, 26.5)
    ax.set_xlabel("Courses", fontsize=9.5, color="#5a7a96")
    ax.tick_params(axis="x", labelsize=9, colors="#5a7a96")
    ax.tick_params(axis="y", colors="#142840")
    for side in ("top", "right", "left"):
        ax.spines[side].set_visible(False)
    ax.spines["bottom"].set_color("#c0d0e2")
    ax.grid(False)
    leg = ax.legend(loc="lower right", frameon=False, fontsize=9,
                    handlelength=1.1, handleheight=1.1)
    for t in leg.get_texts():
        t.set_color("#142840")
    chart_path = os.path.join(OUT_DIR, "chart_coverage.png")
    fig.savefig(chart_path, dpi=200)
    plt.close(fig)
    return chart_path


def embed_chart(story, path, caption):
    from PIL import Image as PILImage
    pil = PILImage.open(path)
    ow, oh = pil.size
    max_w, max_h = AVAIL_W, A4[1] * 0.32
    ratio = min(max_w / ow if ow > max_w else 1.0, max_h / oh if oh > max_h else 1.0)
    img = Image(path, width=ow * ratio, height=oh * ratio)
    story.append(Spacer(1, 16))
    story.append(KeepTogether([img, Spacer(1, 6), Paragraph(caption, caption_style)]))
    story.append(Spacer(1, 14))


# ---------------- Story ----------------
story = []

# --- TOC page ---
toc = TableOfContents()
toc.levelStyles = [toc_h1, toc_h2]
story.append(Paragraph("<b>Table of Contents</b>", toc_title_style))
story.append(HRFlowable(width="100%", thickness=1.6, color=ACCENT, spaceBefore=0, spaceAfter=14))
story.append(toc)
story.append(PageBreak())

# ============================ 1. EXECUTIVE SUMMARY ============================
h1(story, "1. Executive Summary")
para(story,
     "AuditEdge Academy has grown into a genuinely unusual piece of software for an "
     "individual practitioner: a bilingual (English/Arabic, full RTL) learning workspace "
     "with 31 courses and 934 lessons, a 146-document standards library wired into a "
     "retrieval-augmented AI tutor, a 17-section risk-based audit program with PBC "
     "tracking, a findings register that evaluates misstatements against materiality, "
     "20 sector risk profiles, and a voice layer that lets the tutor listen and speak "
     "in 23 voices including Egyptian Arabic. The engineering baseline is equally "
     "serious: a 912-check automated test battery, a self-provisioning deployment "
     "pipeline for Vercel, an offline-capable PWA shell, and a clean, verifiable "
     "release history across nineteen major versions.", lead_style)
para(story,
     "This deep-dive was commissioned to answer one question: given where the platform "
     "stands today, which improvements would move exam readiness and audit craft the "
     "most? The analysis surveyed the live database, every user-facing view, all "
     "fourteen API route groups, the Prisma schema, the test suites and the deployment "
     "pipeline. It is grounded entirely in ground truth - every number quoted below "
     "was counted from the running system, not estimated from documentation.")

h2(story, "The verdict in one paragraph")
para(story,
     "The platform's strength is concentrated in <b>reference and conversation</b>: "
     "standards content, sector intelligence, AI dialogue, and fieldwork tooling. Its "
     "weakness is concentrated in <b>assessment and retention</b>. Across 934 lessons "
     "there are exactly nine quizzes carrying roughly 48 multiple-choice questions, "
     "and 23 of the 31 courses - including every single Arabic-medium course - have no "
     "assessment at all. There is no question bank, no timed mock-exam mode, no "
     "spaced-repetition review, and no mastery model that could tell you which "
     "standard you are actually weak in. For a learner preparing for the SOXE / EEC "
     "exam or an ACCA-style audit paper, that is the single largest gap between what "
     "the platform offers and what exam preparation demands.")

stat_row(story, [
    ("934", "lessons across 31 courses"),
    ("9", "quizzes in the entire platform"),
    ("48", "multiple-choice questions total"),
    ("23 / 31", "courses with no assessment"),
])

h2(story, "The five moves that matter most")
para(story,
     "The full roadmap in Chapter 5 contains nineteen initiatives across three "
     "priority tiers. Five of them dominate the value curve, and all five build on "
     "infrastructure that already exists in the codebase, so none requires a "
     "platform rewrite:")
bullets(story, [
    "<b>P0-1 Question Bank and Exam Simulation Center.</b> A seeded bank of 500-800 "
    "questions with standard tags, explanations and difficulty, plus a timed mock-exam "
    "mode that mirrors the SOXE / EEC blueprint. This converts a content library into "
    "an exam weapon.",
    "<b>P0-2 Complete the ISA spine.</b> The reporting cluster (ISA 700/701/705/706), "
    "ISA 580, 550, 560, 600, ISQM 1 and the ethics code have no dedicated courses. "
    "These are precisely the standards Egyptian exam boards and ACCA-style papers "
    "over-sample.",
    "<b>P0-3 Spaced-repetition review engine.</b> A lightweight SM-2-style scheduler "
    "over lesson key points and missed quiz questions, surfaced as a daily review "
    "queue on the home screen.",
    "<b>P1-5 Case-based engagement simulation.</b> Turn the existing audit program "
    "into a guided, scored walkthrough from acceptance to the opinion - the single "
    "most differentiated feature the platform could add.",
    "<b>P1-7 Production data persistence.</b> On Vercel the database is rebuilt from "
    "a snapshot in a temporary directory on every deployment: progress, conversations "
    "and program data do not survive a redeploy. This is a data-loss bug wearing a "
    "deployment feature's clothes.",
])
para(story,
     "None of these is speculative. The course builder can already author the missing "
     "courses; the quiz player, attempt model and lesson key points already exist in "
     "the schema; the audit program already contains the engagement narrative a "
     "simulation would walk through. The roadmap chapters cite the exact models, "
     "routes and components each initiative touches, so effort estimates are grounded "
     "in the real codebase rather than generic guesses.")

# ============================ 2. METHOD & EVIDENCE BASE ============================
h1(story, "2. Method and Evidence Base")
para(story,
     "The analysis was performed against the running v19.2 workspace - the same build "
     "that ships to production - rather than against documentation, because "
     "documentation drifts and databases do not lie. Three evidence streams were "
     "combined. First, a structural survey of the codebase: all 37 React components "
     "under the audit feature folder, all 14 API route groups, the Prisma schema with "
     "its 13 models, the Zustand store and the i18n catalog were inventoried and "
     "cross-referenced. Second, a content census executed directly against the live "
     "SQLite database: course, module, lesson, quiz, question, material and usage "
     "counts, grouped by category, level, source platform and language. Third, the "
     "quality infrastructure was reviewed: the 912-check test battery, the browser "
     "smoke procedure, and the Vercel deployment pipeline including its "
     "self-provisioning snapshot mechanism.")
make_table(story,
    ["Evidence stream", "What was examined", "Key outputs"],
    [
        ["Codebase survey", "37 components, 14 API route groups, 13 Prisma models, store + i18n",
         "Feature inventory (Ch. 3), roadmap touch-points (Ch. 5)"],
        ["Content census", "Live DB queries: courses, lessons, quizzes, questions, materials",
         "Coverage stats (Ch. 4), appendix tables (Ch. 8)"],
        ["Quality infrastructure", "912-check suites, browser smoke, Vercel pipeline",
         "Verification standard, deployment risk F7"],
    ],
    [0.22, 0.46, 0.32],
    caption="Table 2-1. Evidence streams combined for this analysis.")
para(story,
     "One caveat deserves honesty: usage counters in the live database (lesson "
     "progress, quiz attempts, certificates) were reset to zero when the workspace "
     "database was rebuilt from the sanitized deployment snapshot during this "
     "session. No behavioral conclusions in this report rely on usage analytics; "
     "every finding is structural, drawn from what the platform contains and how it "
     "is built. Where a finding would benefit from usage data that does not yet "
     "exist - for example, which courses the learner actually opens - the report "
     "flags the missing metric as part of the finding itself.")
para(story,
     "Findings are graded by a simple rule: a gap only becomes a finding when it "
     "materially affects one of the platform's two jobs - preparing a senior "
     "associate for external-audit certification, and building the craft of executing "
     "engagements. Cosmetic observations were deliberately excluded, which is why "
     "this report contains eight findings rather than eighty.")

# ============================ 3. CURRENT-STATE INVENTORY ============================
h1(story, "3. Current-State Inventory")
para(story,
     "Before cataloguing gaps it is worth being precise about what already exists, "
     "because every roadmap initiative in Chapter 5 is deliberately designed to "
     "compound an existing strength rather than start from zero. The platform "
     "organizes into six capability areas, summarized in Table 3-1 and detailed in "
     "the subsections that follow.")
make_table(story,
    ["Capability area", "What exists today", "Assessment"],
    [
        ["Curriculum", "31 courses / 104 modules / 934 lessons; 8 in-house standards courses "
         "(ISA 240, 315, 330, 570, evidence, IFRS, Egyptian framework, analytics); 22 Arabic "
         "YouTube imports; 1 Coursera import; 879 lessons carry video",
         "Strong breadth, uneven depth"],
        ["Standards library", "146 materials (41 ISA, 50 Egyptian standards, 55 IFRS) with "
         "extracted text content feeding the tutor's RAG index; source links to official texts",
         "Differentiated asset"],
        ["AI tutor", "GLM 4.7-Flash / 4.6V vision / 4-Plus switcher; RAG + live web search; "
         "image attachments; 23-voice read-aloud with hands-free mic loop; searchable, "
         "exportable conversation history",
         "Best-in-class for a personal tool"],
        ["Engagement tooling", "17-section risk-based audit program; PBC tracker with CSV "
         "export; findings/SAD register with ISA 450 materiality evaluation; sign-offs with "
         "tick-off export; analytical-procedure and ratio analyzers; KAM drafter; "
         "20 sector risk profiles",
         "Unique differentiator"],
        ["Learning experience", "Bilingual EN/AR with full RTL; dark mode; collapsible sidebars; "
         "PWA offline; XP, streaks, achievements, certificates",
         "Polished shell"],
        ["Engineering", "Next.js 16 + Prisma; 912-check test battery; browser smoke procedure; "
         "self-provisioning Vercel snapshot deployment",
         "Professional discipline"],
    ],
    [0.16, 0.60, 0.24],
    caption="Table 3-1. Capability inventory of AuditEdge Academy v19.2.", small=True)

h2(story, "3.1 What is genuinely strong")
para(story,
     "The engagement tooling deserves specific praise because it is the hardest thing "
     "in the product to copy. The audit program is not a static template: its "
     "findings register tracks every misstatement through open, passed and corrected "
     "states and evaluates the aggregate uncorrected amount against performance "
     "materiality and the clearly-trivial threshold exactly the way ISA 450 expects "
     "a senior to reason on a live file. The PBC tracker aggregates every document "
     "request across all 17 sections into one client-facing list with a CSV export, "
     "and the sign-off view enforces the ISA 230 discipline of preparer and reviewer "
     "dates. A junior associate who works this workflow honestly is rehearsing the "
     "real thing.")
para(story,
     "The AI tutor stack is the second standout. Retrieval over the standards library "
     "means answers cite the actual ISA and Egyptian standard texts rather than "
     "model memory; the vision model grades attached workpaper screenshots; and the "
     "voice layer - automatic answer reading, a hands-free conversation loop, "
     "Egyptian and Gulf Arabic neural voices - turns dead commute time into study "
     "time. The newly added follow-up chips (explain simpler, field example, quiz "
     "me, key points), clean regeneration, and Markdown export show a product being "
     "refined by someone who actually uses it daily.")

h2(story, "3.2 What the platform is not")
para(story,
     "Honest framing also requires naming what the platform is not, because two "
     "common misconceptions waste improvement effort. First, it is not a "
     "learning-management system for a firm: it is a single-user workspace. The team "
     "view exists, but with one account it is a dashboard of one. Second, it is not "
     "a content-complete curriculum. The in-house courses cover the risk-assessment "
     "spine of the audit beautifully but stop there; the long tail of the catalog is "
     "imported video content with thin companion notes. Both facts sharpen the "
     "roadmap: invest in the single user's outcomes, and invest in the standards "
     "that are missing rather than adding more imported breadth.")

# ============================ 4. GAP ANALYSIS ============================
h1(story, "4. Gap Analysis: Eight Findings")
para(story,
     "Each finding below states the evidence found in the system, why it matters for "
     "exam readiness or engagement craft, and the direction of the fix. Priority "
     "assignments (P0/P1/P2) carry into the roadmap in Chapter 5, where every "
     "finding reappears as one or more concrete initiatives with effort estimates.")

h2(story, "F1. The assessment engine is skeletal (P0)")
para(story,
     "The entire platform carries nine quizzes containing about 48 questions, all "
     "multiple-choice with five to six items per quiz, attached to eight of the 31 "
     "courses. The 22 Arabic Academy courses and the Coursera import - 74 percent of "
     "the catalog - have no assessment at all, as Figure 4-1 shows. The Prisma schema "
     "stores questions as a JSON array on the Quiz row, which is serviceable for "
     "one-off course quizzes but cannot power a question bank: there is no question "
     "entity to tag with a standard, difficulty, or explanation, and no attempt "
     "record a review engine could learn from beyond the coarse QuizAttempt score.")
para(story,
     "Why it matters: exam boards do not test recognition, they test applied judgment "
     "under time pressure. Without a bank and a timed mode, the platform can teach "
     "but cannot rehearse. The fix - a Question model with standard tags, a seeded "
     "bank of 500-800 items, and an exam mode with section weighting - is specified "
     "as initiative P0-1 and is the highest-leverage work available.")
chart_path = build_chart()
embed_chart(story, chart_path,
            "Figure 4-1. Assessment coverage by course category: only the eight in-house "
            "courses carry an end-of-course quiz.")

h2(story, "F2. The ISA spine stops before the opinion (P0)")
para(story,
     "The in-house curriculum covers fraud responsibilities (ISA 240), risk "
     "assessment (315), responses (330), going concern (570), evidence and "
     "documentation (EVD-500), IFRS essentials, the Egyptian regulatory framework, "
     "and analytics. It then stops. Missing entirely: the reporting cluster (ISA "
     "700, 701 KAM, 705 qualified opinions, 706 emphasis of matter), written "
     "representations (580), related parties (550), subsequent events (560), group "
     "audits (600), external confirmations (505), analytical procedures and sampling "
     "(520/530), quality management (ISQM 1), and the IESBA/Egyptian code of ethics. "
     "Some of these topics appear inside the audit program's methodology sections, "
     "but methodology checklists are not lessons - they cannot be studied, quizzed "
     "or tracked.")
para(story,
     "Why it matters: reporting is the most examined cluster in both the Egyptian "
     "SOXE/EEC syllabus and ACCA-style audit papers, and opinion modification "
     "scenarios are the classic exam differentiator. The course builder, lesson "
     "content schema and quiz tooling already exist, so this is a content-production "
     "task with light engineering - initiative P0-2.")

h2(story, "F3. Arabic learners get videos, not a curriculum (P0)")
para(story,
     "All eight in-house courses - the only courses with structured lesson bodies, "
     "key points and quizzes - are written in English. The entire Arabic offering "
     "consists of imported YouTube playlists (plus one Coursera course), where the "
     "lesson 'content' is a short companion note averaging under a thousand "
     "characters around an embedded video. For a bilingual practitioner this is "
     "workable; for Arabic-medium exam preparation it means the platform's deepest "
     "assets - the RAG library, the quizzes, the AI tutor's coaching prompts - are "
     "effectively English-only at the content layer. The UI itself is fully "
     "translated, which makes the asymmetry more visible, not less.")

h2(story, "F4. Progress is recorded, learning is not modeled (P1)")
para(story,
     "The LessonProgress model records exactly one fact: that a lesson was completed "
     "at a timestamp. QuizAttempt records a percentage. Nothing in the system can "
     "answer the questions that actually drive improvement: which standards is the "
     "learner weak in, what is due for review today, and is exam readiness rising? "
     "There is no mastery model, no spaced-repetition scheduler, no review queue, "
     "and no weakness heatmap. The building blocks exist - every lesson already "
     "carries keyPoints suitable for flashcard fronts, and the tutor's system prompt "
     "already promises study planning - but nothing persists or schedules. "
     "Initiatives P0-3 and P1-4 close this.")

h2(story, "F5. Content depth is video-shaped, not text-shaped (P1)")
para(story,
     "The mean lesson body is roughly 765 characters - about a third of a page - and "
     "eight lessons are effectively empty. That is a rational shape for companion "
     "notes to a video, and 94 percent of lessons do carry a video. But it caps the "
     "value of the two features that depend on rich text: the RAG index retrieves "
     "thin passages, and the read-aloud voice layer has little to read beyond what "
     "the tutor generates. Deepening the in-house courses' lesson bodies - worked "
     "examples, journal entries, mini-cases - would compound both the AI tutor and "
     "the future flashcard engine (initiative P1-6).")

h2(story, "F6. The Vercel database is a whiteboard (P1)")
para(story,
     "The deployment pipeline is clever: a sanitized content snapshot is gunzipped "
     "into a temporary directory on the first request when the platform runs on "
     "Vercel's serverless filesystem. But that same mechanism means every redeploy "
     "wipes progress, conversations, quiz attempts and audit-program entries - "
     "anything the user created since the snapshot. For a personal learning tool "
     "whose whole promise is longitudinal (streaks, mastery, review queues), "
     "ephemeral storage is a structural contradiction. Initiative P1-7 specifies "
     "the migration to a managed Postgres (Neon or Supabase free tiers are "
     "sufficient for a single user) plus an export/import escape hatch.")

h2(story, "F7. Team features are ornamental for a workspace of one (P2)")
para(story,
     "The team view, its pulse dashboard and the shared-progress model assume "
     "multiple users, but the platform is deliberately single-user with a "
     "self-healing workspace account. The features are not harmful, but they spend "
     "navigation space and maintenance effort on a fiction. The pragmatic options "
     "are either to embrace the single-user identity (rename the view to a personal "
     "analytics home and absorb the pulse widgets into it) or to defer any real "
     "multi-user work until a second real user exists. This report recommends the "
     "former and does not spend roadmap capacity on the latter.")

h2(story, "F8. Discoverability is under-served by search (P2)")
para(story,
     "The catalog, library and tutor history each have their own local search, but "
     "there is no global search across courses, lessons, standards, sector profiles "
     "and conversations - the kind of command-palette (Ctrl+K) affordance that "
     "power users of a 934-lesson workspace reach for within a week. With the "
     "content census now exported, a lightweight client-side index over titles and "
     "key points is a one-day build (initiative P2-12).")

# ============================ 5. IMPROVEMENT ROADMAP ============================
h1(story, "5. Improvement Roadmap")
para(story,
     "The roadmap contains nineteen initiatives organized in three tiers. P0 items "
     "are the exam-readiness core and should be done first; P1 items compound "
     "retention and differentiation; P2 items are quality-of-life work that can "
     "interleave as energy allows. Effort is expressed in focused days for a single "
     "developer already familiar with the codebase, and every initiative names the "
     "models, routes and components it touches so the estimates can be checked "
     "against reality.")

h2(story, "5.1 Tier P0 - the exam-readiness core")
make_table(story,
    ["ID", "Initiative", "Builds on", "Effort"],
    [
        ["P0-1", "Question Bank + Exam Simulation Center: new Question and QuestionAttempt "
         "models (stem, options, answer, explanation, standard tag, difficulty, "
         "source); seed 500-800 items across ISA, Egyptian standards, IFRS and ethics; "
         "exam mode with 60/90-minute timer, section weighting per the SOXE / EEC "
         "blueprint, flag-and-review, and a results screen that feeds missed items "
         "into the review queue",
         "Quiz player UI, QuizAttempt model, /api/quiz routes", "6-8 days eng + seeding"],
        ["P0-2", "Complete the ISA spine: compact courses for ISA 700/701/705/706, ISA 580, "
         "550, 560, 600, 505, 520/530, ISQM 1 and the ethics code - each with 3-5 "
         "lessons, worked examples and a 6-question quiz",
         "Course builder (studio), lesson content JSON, quiz tooling", "2-3 days eng + content"],
        ["P0-3", "Spaced-repetition review engine: SM-2-lite scheduler over lesson keyPoints "
         "and missed bank questions; ReviewItem model; daily review-queue card on Home "
         "with flashcard flip UI (EN/AR)",
         "keyPoints on every lesson, home dashboard cards", "3-5 days"],
    ],
    [0.07, 0.55, 0.24, 0.14],
    caption="Table 5-1. Tier P0 initiatives.", small=True)
para(story,
     "Sequencing within the tier matters. P0-1 should land first because its Question "
     "model is the dependency for both the review engine (P0-3 consumes missed "
     "questions) and the analytics layer (P1-4 aggregates attempt data by standard "
     "tag). P0-2 can proceed in parallel since it is mostly content production "
     "through the existing builder, and each new course quiz should be authored "
     "directly into the new bank so the bank and the curriculum grow together. If "
     "only one P0 item can be done this quarter, it should be P0-1: a platform with "
     "800 exam questions and a timer changes what the product is.")

h2(story, "5.2 Tier P1 - retention and differentiation")
make_table(story,
    ["ID", "Initiative", "Builds on", "Effort"],
    [
        ["P1-4", "Mastery and coverage analytics: per-standard mastery score (quiz accuracy "
         "weighted by recency), weakness heatmap on the dashboard, readiness meter per "
         "exam section; AI study-plan generation persisted and tracked",
         "QuestionAttempt + standard tags from P0-1", "3-4 days"],
        ["P1-5", "Case-based engagement simulation: a guided walkthrough (client acceptance, "
         "risk assessment, response, completion, reporting) with branching decisions, "
         "seeded facts, and AI grading of each judgment; scores into achievements",
         "17-section audit program, AI tutor, KAM drafter", "5-7 days"],
        ["P1-6", "Arabic curriculum parity: Arabic lesson bodies and quizzes for the eight "
         "in-house courses (bilingual content field), Arabic question bank items; "
         "YouTube imports recast as supplementary",
         "i18n layer, lesson content JSON, voice stack (ar-EG voices)", "4-6 days + content"],
        ["P1-7", "Production data persistence: managed Postgres (Neon/Supabase) via "
         "DATABASE_URL for Vercel; snapshot mechanism kept as bootstrap fallback; "
         "user-data export/import endpoint as an escape hatch",
         "Prisma datasource layer, /api/bootstrap", "1-2 days"],
        ["P1-8", "Lesson depth pass: expand in-house lesson bodies to 1,500+ characters with "
         "worked examples and journal entries; fix the eight near-empty lessons",
         "Lesson editor (studio)", "ongoing, 30 min/lesson"],
    ],
    [0.07, 0.55, 0.24, 0.14],
    caption="Table 5-2. Tier P1 initiatives.", small=True)
para(story,
     "P1-5 deserves a note because it is the strategic bet. No commercial platform "
     "offers a scored, AI-graded engagement simulation grounded in a real 17-section "
     "program; the assets that make it possible here already exist. It is also the "
     "feature that would keep the platform valuable after the exams are passed, "
     "because it rehearses the craft of the job rather than the syllabus. P1-7 is "
     "the operational mirror of that bet: longitudinal features deserve a database "
     "that survives a Tuesday redeploy.")

h2(story, "5.3 Tier P2 - quality of life")
make_table(story,
    ["ID", "Initiative", "Effort"],
    [
        ["P2-9", "Lesson notes and highlights with per-section ask-the-tutor buttons", "3-4 days"],
        ["P2-10", "Workpaper template library: downloadable lead schedule, bank reconciliation, "
         "confirmations control sheet, going-concern memo (xlsx/docx)", "2-3 days"],
        ["P2-11", "Podcast mode: batch-generate TTS audio per lesson for offline listening; "
         "download queue in the PWA", "2-3 days"],
        ["P2-12", "Global command palette (Ctrl+K) across courses, lessons, standards, sectors "
         "and conversations", "1-2 days"],
        ["P2-13", "CPE log: auto-accumulate cpeHours (already modeled) into an exportable "
         "certificate evidence log for SOXE renewals", "1-2 days"],
        ["P2-14", "Team view rebrand as a personal analytics home; absorb pulse widgets", "1 day"],
    ],
    [0.08, 0.78, 0.14],
    caption="Table 5-3. Tier P2 initiatives.", small=True)

# ============================ 6. QUICK WINS ============================
h1(story, "6. Quick Wins")
para(story,
     "Independent of the tiers, six changes are each under a day of work and pay back "
     "immediately. They are listed in the order a busy week should tackle them, and "
     "none carries migration risk beyond a single additive Prisma field or pure "
     "front-end change.")
bullets(story, [
    "<b>Assessment badges on course cards.</b> Show a quiz-count chip on every course "
    "card in the catalog so the 23 assessment-free courses are visible at a glance "
    "rather than discovered after enrollment.",
    "<b>Continue-where-you-left-off card.</b> Persist the last-opened lesson and add a "
    "one-tap resume card to Home; the progress model already tracks completion, so "
    "this is a store field plus a card component.",
    "<b>One more quiz per in-house course.</b> Author a mid-course checkpoint quiz for "
    "each of the eight in-house courses through the existing studio tool - instantly "
    "doubles the assessment surface before the bank exists.",
    "<b>Fix the eight empty lessons.</b> The census identified eight lessons with "
    "near-empty bodies; a content pass on exactly those rows is a 30-minute task "
    "with the list in hand (see Appendix, Table 8-2).",
    "<b>Export the content census as a script.</b> Keep the survey script from this "
    "analysis in the repo under scripts/ and run it before each release to catch "
    "assessment-free courses and empty lessons automatically.",
    "<b>Deployment runbook note.</b> Add a two-line warning to the README deploy "
    "section: on Vercel, user data is ephemeral until P1-7 lands, so export before "
    "redeploying.",
])

# ============================ 7. SUCCESS METRICS ============================
h1(story, "7. Success Metrics")
para(story,
     "A roadmap without measurement is a wish list. The platform's existing test "
     "culture makes verification cheap, so each tier gets a small set of metrics "
     "that can be computed from the database the initiatives themselves extend. "
     "Targets below are set for 90 days after the corresponding initiative ships.")
make_table(story,
    ["Metric", "Baseline (v19.2)", "90-day target", "Source"],
    [
        ["Courses with at least one assessment", "8 of 31 (26%)", "31 of 31 (100%)",
         "Quiz table by course"],
        ["Question bank size", "48", "500+", "Question count"],
        ["Mock exams attempted per month", "0 (mode absent)", "4+",
         "ExamAttempt records"],
        ["Median mock-exam score trend", "n/a", "rising quarter over quarter",
         "ExamAttempt scores"],
        ["Review-queue items completed per active week", "0 (engine absent)", "25+",
         "ReviewItem log"],
        ["Per-standard mastery on priority standards", "not measurable", "70%+",
         "mastery model (P1-4)"],
        ["User-data durability on Vercel", "wiped each deploy", "survives deploys",
         "P1-7 acceptance test"],
    ],
    [0.34, 0.20, 0.24, 0.22],
    caption="Table 7-1. Metrics and 90-day targets by initiative tier.", small=True)
para(story,
     "Two measurement rules keep these numbers honest. First, mastery and readiness "
     "metrics must be computed from attempts, never from lesson completion - the "
     "whole point of P1-4 is to stop conflating exposure with competence. Second, "
     "the content census script (quick win 5) becomes a release gate: any course "
     "shipping without an assessment, or any lesson shipping with an empty body, "
     "fails the pre-release checklist. What gets checked at release stops regressing.")

# ============================ 8. APPENDIX ============================
h1(story, "8. Appendix: Survey Data")
para(story,
     "The tables below reproduce the raw census behind the analysis so future "
     "surveys can be compared apples-to-apples. All counts were taken from the live "
     "workspace database at v19.2; the survey script that generated them is kept in "
     "the repository under scripts/survey-analysis-v192.ts.")
make_table(story,
    ["Dimension", "Value"],
    [
        ["Courses", "31 (8 in-house, 22 YouTube Arabic Academy, 1 Coursera)"],
        ["Modules / lessons", "104 / 934 (925 content lessons, 9 quiz lessons)"],
        ["Lessons with video", "879 of 934 (94%)"],
        ["Mean lesson body length", "about 765 characters; 8 lessons near-empty"],
        ["Quizzes / questions", "9 quizzes, about 48 MCQ items, 8 courses covered"],
        ["Library materials", "146 (41 ISA, 50 Egyptian standards, 55 IFRS)"],
        ["Sector risk profiles", "20"],
        ["Audit program sections", "17 (methodology, cycles, completion, reporting)"],
        ["Course levels", "6 Advanced, 17 Intermediate, 8 Foundation"],
        ["In-house course language", "English (8 of 8)"],
        ["AI models", "GLM-4.7-Flash (default), GLM-4.6V-Flash (vision), GLM-4-Plus"],
        ["Voices", "23 (16 Edge neural incl. ar-EG / Gulf Arabic, 7 Z.ai)"],
        ["Test battery", "912 checks (sectors 515+351, engagement 28, models 14, edge-tts 4)"],
    ],
    [0.34, 0.66],
    caption="Table 8-1. Content and platform census, v19.2.", small=True)
make_table(story,
    ["Category", "Courses", "With quiz", "Notes"],
    [
        ["International Standards (ISA)", "5", "5", "ISA 240, 315, 330, 570, EVD-500"],
        ["Arabic Academy (YouTube)", "22", "0", "Arabic-medium video imports"],
        ["IFRS", "1", "1", "IFRS Essentials for External Auditors"],
        ["Egyptian Framework", "1", "1", "Regulatory and professional framework"],
        ["Analytics", "1", "1", "Analytics-Driven Auditing"],
        ["Open Courses (Coursera)", "1", "0", "Excel financial modeling import"],
    ],
    [0.34, 0.13, 0.13, 0.40],
    caption="Table 8-2. Course categories and assessment coverage.", small=True)
para(story,
     "A closing observation on method: this census took under an hour to produce "
     "because the platform's own tooling - Prisma, the seed scripts and the test "
     "battery - made the data legible. That is the quiet advantage of the "
     "engineering discipline this platform already practices, and it is why every "
     "roadmap initiative here can be verified the day it lands.")

# === CHAPTERS_CONTINUE ===

# ---------------- Build ----------------
doc = TocDocTemplate(
    BODY_PDF, pagesize=A4,
    leftMargin=MARGIN, rightMargin=MARGIN,
    topMargin=TOP_MARGIN, bottomMargin=BOTTOM_MARGIN,
    title=DOC_TITLE, author=DOC_AUTHOR, creator="Z.ai",
    subject="Deep-dive analysis and improvement roadmap for the AuditEdge Academy external-audit learning platform",
)
doc.multiBuild(story, onFirstPage=on_page, onLaterPages=on_page)
print("BODY_OK", BODY_PDF)
