"""Generate sample PDF materials for the AuditEdge library."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem

OUT = "/home/z/my-project/upload/materials"
os.makedirs(OUT, exist_ok=True)

INK = HexColor("#1F1E1D")
MUTED = HexColor("#6E6D6A")
TERRA = HexColor("#C25E3E")

title = ParagraphStyle("t", fontName="Helvetica-Bold", fontSize=20, leading=26, textColor=INK)
sub = ParagraphStyle("s", fontName="Helvetica", fontSize=10, leading=14, textColor=MUTED)
h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=13, leading=18, textColor=INK, spaceBefore=14, spaceAfter=6)
body = ParagraphStyle("b", fontName="Helvetica", fontSize=10, leading=15.5, textColor=INK)
bullet = ParagraphStyle("bl", parent=body, leftIndent=0)


def doc(fname):
    return SimpleDocTemplate(
        os.path.join(OUT, fname), pagesize=A4,
        leftMargin=22*mm, rightMargin=22*mm, topMargin=20*mm, bottomMargin=20*mm,
        title="AuditEdge Academy", author="AuditEdge Academy",
    )


def lst(items):
    return ListFlowable(
        [ListItem(Paragraph(i, bullet), leftIndent=14) for i in items],
        bulletType="bullet", start="•", bulletFontSize=9, leftIndent=10,
    )


# ---- 1. ISA quick reference ----
d = doc("sample-isa315-reference.pdf")
d.build([
    Paragraph("ISA 315 (Revised 2019) — Risk Assessment Quick Reference", title),
    Spacer(1, 4),
    Paragraph("AuditEdge Academy · Study companion · Issued September 2026", sub),
    Spacer(1, 12),
    Paragraph("Purpose", h2),
    Paragraph("This card condenses the core requirements of ISA 315 (Revised 2019), Identifying and Assessing the Risks of Material Misstatement, into the points an engagement team uses daily during planning. Keep it next to your risk assessment working papers.", body),
    Paragraph("The five steps", h2),
    lst([
        "Understand the entity, its environment, and its applicable financial reporting framework — including Egyptian regulatory context where relevant.",
        "Perform risk assessment procedures: inquiries, analytical procedures, and observation & inspection.",
        "Identify risks of material misstatement at the financial statement and assertion levels, considering inherent and control risk.",
        "Evaluate whether the risks are significant risks requiring specific responses and whether they are fraud risks under ISA 240.",
        "Document the assessed risks, the reasons for significance judgements, and link each risk to planned responses under ISA 330.",
    ]),
    Paragraph("What changed in the 2019 revision", h2),
    lst([
        "New requirements to understand the entity's system of information processing and communication, including IT general controls.",
        "Separate assessment of inherent risk factors: complexity, subjectivity, change, uncertainty, and susceptibility to management bias.",
        "A required stand-back step: the engagement partner must review the risk assessment for completeness before finalizing planning.",
        "Expanded spectrum of inherent risk — the higher end feeds directly into significant risk identification.",
    ]),
    Paragraph("Common documentation gaps observed in reviews", h2),
    lst([
        "Assertions not linked to identified risks in the risk matrix.",
        "IT environment understood only through inquiries, without inspection of systems.",
        "Significant risk judgements recorded without explaining why other risks were treated as routine.",
    ]),
    Spacer(1, 16),
    Paragraph("AuditEdge Academy — internal training material of the office. For study use only.", sub),
])

# ---- 2. Engagement checklist ----
d = doc("sample-engagement-checklist.pdf")
d.build([
    Paragraph("External Audit Engagement Checklist — Planning Phase", title),
    Spacer(1, 4),
    Paragraph("AuditEdge Academy · Working paper aide · Aligned with ISAs and the Egyptian Standards on Auditing", sub),
    Spacer(1, 12),
    Paragraph("Client & engagement acceptance", h2),
    lst([
        "Client integrity evaluation completed and documented (ISA 220).",
        "Independence confirmations obtained from all engagement team members.",
        "Engagement letter signed and dated before fieldwork begins.",
        "Communication with predecessor auditor obtained where required by professional ethics.",
    ]),
    Paragraph("Risk & planning", h2),
    lst([
        "Preliminary analytical review performed on prior-period and interim data.",
        "Materiality for the financial statements as a whole determined, plus performance materiality.",
        "Risk assessment workshop held; significant risks and fraud risks logged with rationales.",
        "Overall audit strategy and detailed audit plan approved by the engagement partner.",
    ]),
    Paragraph("Egyptian context specifics", h2),
    lst([
        "FRA/CBE regulatory filings relevant to the client reviewed for indications of risk.",
        "Applicable financial reporting framework confirmed (IFRS / Egyptian Accounting Standards).",
        "Tax authority positions and open assessments considered as source of estimates and risk.",
    ]),
    Paragraph("Team & logistics", h2),
    lst([
        "Budget hours allocated by assertion area and staffing plan confirmed.",
        "Specialists (IT, valuation) engaged with documented scope.",
        "Timetable for inventory observation and confirmations agreed with the client.",
    ]),
    Spacer(1, 16),
    Paragraph("Tick and reference to the working paper index. This checklist is not a substitute for professional judgement.", sub),
])

# ---- 3. Ethics summary ----
d = doc("sample-ethics-summary.pdf")
d.build([
    Paragraph("IESBA Code of Ethics — Fundamental Principles Summary Card", title),
    Spacer(1, 4),
    Paragraph("AuditEdge Academy · One-page companion", sub),
    Spacer(1, 12),
    Paragraph("The five fundamental principles", h2),
    lst([
        "Integrity — be straightforward and honest in all professional and business relationships.",
        "Objectivity — do not compromise professional judgement because of bias, conflict of interest, or undue influence.",
        "Professional competence and due care — maintain knowledge and skill at the level required; act diligently.",
        "Confidentiality — respect confidentiality of information acquired through work; do not use it for personal advantage.",
        "Professional behaviour — comply with relevant laws and regulations; avoid conduct that discredits the profession.",
    ]),
    Paragraph("Threats to watch on every engagement", h2),
    lst([
        "Self-interest — financial interest in the client, contingent fees.",
        "Self-review — auditing work you previously prepared or advised on.",
        "Advocacy — promoting the client's position to the point of objectivity loss.",
        "Familiarity — long association leading to excessive sympathy.",
        "Intimidation — actual or perceived pressure, including replacement threats.",
    ]),
    Paragraph("Safeguards: rotate partners, independent reviews, separate teams, and escalate to the ethics partner whenever a threat is more than trivial. When in doubt — document the analysis.", body),
    Spacer(1, 16),
    Paragraph("AuditEdge Academy — internal training material of the office.", sub),
])

for f in os.listdir(OUT):
    p = os.path.join(OUT, f)
    print(f, os.path.getsize(p))
