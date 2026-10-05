"""Charts for the AuditEdge v37 state-of-project audit PDF.

Palette: Template 07 Crystal Blue body subset (fixed, from typesetting/cover.md).
Chart rules from typesetting/charts.md: no top/right spines, dashed grid at
low opacity, horizontal bars for long labels, value labels at bar ends,
no internal chart title (external PDF caption serves as identifier).
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.font_manager as fm
fm.fontManager.addfont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')

import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

ACCENT = '#2d7ab3'
DEEP = '#1a4a7a'
MUTED = '#5a7a96'
TEXT = '#142840'
GRID = '#c0d0e2'

OUT = '/home/z/my-project/scripts/audit-pdf'

# ---------------------------------------------------------------- Chart 1
# Regression battery: checks per suite (all passing).
suites = [
    ('sectors-v15 · audit programs', 515),
    ('v23 · ACCA deep past papers', 382),
    ('v22 · past-paper bank', 366),
    ('v24 · CFA/CMA/CPA skills bank', 70),
    ('v37 · Test of Control', 75),
    ('v27 · podcast courses', 68),
    ('v30 · deep links + exam archive', 67),
    ('v26 · flagship pools', 66),
    ('v20 · exam engine + SRS + ISA spine', 47),
    ('v32 · IFRS all-41 depth', 57),
    ('v25 · question generator', 51),
    ('v34 · DipIFR past papers', 48),
    ('v36 · IFRS 15 flagship depth', 45),
    ('v31 · IFRS Summaries v1', 44),
    ('v35 · in-app exam viewer', 43),
    ('v21 · IFRS 18 + Egypt AR', 32),
    ('v28 · edge TTS voices', 31),
    ('models-v15 · AI registry', 31),
    ('v29 · engagement smoke', 24),
    ('engagement-v12', 28),
    ('analyzer-v11 · trial balance', 27),
]
suites.sort(key=lambda s: s[1])
labels = [s[0] for s in suites]
values = [s[1] for s in suites]

fig, ax = plt.subplots(figsize=(8.6, 6.4), constrained_layout=True)
colors = [DEEP if v >= 300 else ACCENT for v in values]
bars = ax.barh(labels, values, color=colors, height=0.62, edgecolor='none', zorder=3)
for b, v in zip(bars, values):
    ax.text(v + 6, b.get_y() + b.get_height() / 2, str(v),
            va='center', ha='left', fontsize=9, color=TEXT)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['bottom'].set_color(GRID)
ax.tick_params(axis='y', length=0, labelsize=9, colors=TEXT)
ax.tick_params(axis='x', labelsize=9, colors=MUTED)
ax.set_xlim(0, max(values) * 1.12)
ax.grid(axis='x', linestyle='--', linewidth=0.5, alpha=0.25, color=GRID, zorder=0)
ax.set_xlabel('Automated checks (all passing)', fontsize=9.5, color=MUTED)
fig.savefig(f'{OUT}/chart-battery.png', dpi=200)
plt.close(fig)

# ---------------------------------------------------------------- Chart 2
# Content assets by module.
assets = [
    ('Question bank (exam questions)', 2685),
    ('IFRS revision blocks (41 standards)', 2125),
    ('i18n dictionary keys (EN + AR)', 1275),
    ('Lessons (in-house + curated)', 990),
    ('Test-of-Control questions (45 industries)', 496),
    ('Industry questionnaire modules', 45),
    ('Self-hosted DipIFR exam papers', 30),
]
assets.sort(key=lambda s: s[1])
labels2 = [a[0] for a in assets]
values2 = [a[1] for a in assets]

fig, ax = plt.subplots(figsize=(8.6, 4.4), constrained_layout=True)
colors2 = [DEEP if v >= 2000 else ACCENT for v in values2]
bars = ax.barh(labels2, values2, color=colors2, height=0.58, edgecolor='none', zorder=3)
for b, v in zip(bars, values2):
    ax.text(v + 32, b.get_y() + b.get_height() / 2, f'{v:,}',
            va='center', ha='left', fontsize=9, color=TEXT)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['bottom'].set_color(GRID)
ax.tick_params(axis='y', length=0, labelsize=9.5, colors=TEXT)
ax.tick_params(axis='x', labelsize=9, colors=MUTED)
ax.set_xlim(0, max(values2) * 1.14)
ax.grid(axis='x', linestyle='--', linewidth=0.5, alpha=0.25, color=GRID, zorder=0)
ax.set_xlabel('Content items', fontsize=9.5, color=MUTED)
fig.savefig(f'{OUT}/chart-assets.png', dpi=200)
plt.close(fig)

print('charts written')
