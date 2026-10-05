"""Charts for the AuditEdge v38 state-of-project audit PDF.

Palette: Template 07 Crystal Blue body subset (fixed, from typesetting/cover.md).
Chart rules from typesetting/charts.md: no top/right spines, dashed grid at
low opacity, horizontal bars for long labels, value labels at bar ends,
no internal chart title (the external PDF caption serves as identifier).
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
RED = '#b3452d'

OUT = '/home/z/my-project/scripts/audit-pdf-v38'

# ---------------------------------------------------------------- Chart 1
# Regression battery: checks per suite (all passing), v38 = 22 suites.
suites = [
    ('sectors-v15 · audit programs', 515),
    ('v23 · ACCA deep past papers', 382),
    ('v22 · past-paper bank', 366),
    ('v38 · resilience + IFRS 16 + bridge', 87),
    ('v37 · Test of Control', 75),
    ('v24 · CFA/CMA/CPA skills bank', 70),
    ('v27 · podcast courses', 68),
    ('v30 · deep links + exam archive', 67),
    ('v26 · flagship pools', 66),
    ('v32 · IFRS all-41 depth', 57),
    ('v25 · question generator', 51),
    ('v34 · DipIFR past papers', 48),
    ('v20 · exam engine + SRS + ISA spine', 47),
    ('v36 · IFRS 15 flagship depth', 45),
    ('v31 · IFRS Summaries v1', 44),
    ('v35 · in-app exam viewer', 43),
    ('v21 · IFRS 18 + Egypt AR', 32),
    ('v28 · edge TTS voices', 31),
    ('models-v15 · AI registry', 31),
    ('engagement-v12', 28),
    ('analyzer-v11 · trial balance', 27),
    ('v29 · engagement smoke', 24),
]
suites.sort(key=lambda s: s[1])
labels = [s[0] for s in suites]
values = [s[1] for s in suites]

fig, ax = plt.subplots(figsize=(8.6, 6.6), constrained_layout=True)
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
# Content assets by module (v38 census).
assets = [
    ('Question bank (exam questions)', 2685),
    ('IFRS revision blocks (41 standards)', 2160),
    ('Bilingual UI string pairs (EN + AR)', 1064),
    ('Lessons (in-house + curated)', 990),
    ('Test-of-Control questions (45 industries)', 496),
    ('Self-hosted DipIFR exam papers', 27),
    ('Learning materials', 146),
    ('Industry questionnaire modules', 45),
]
assets.sort(key=lambda s: s[1])
labels2 = [a[0] for a in assets]
values2 = [a[1] for a in assets]

fig, ax = plt.subplots(figsize=(8.6, 4.6), constrained_layout=True)
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

# ---------------------------------------------------------------- Chart 3
# CI run history: every GitHub Actions run since 27 Sept 2026 failed.
# X = date, Y = run duration (seconds). Red = failure.
import datetime as dt
runs = [
    ('2026-09-27T10:39', 40), ('2026-09-27T13:32', 46),
    ('2026-09-28T11:35', 50), ('2026-09-28T14:11', 50), ('2026-09-28T14:11', 47),
    ('2026-09-28T17:32', 37), ('2026-09-29T09:33', 51),
    ('2026-10-01T11:47', 43), ('2026-10-01T12:49', 52),
    ('2026-10-02T20:52', 49), ('2026-10-02T21:36', 56), ('2026-10-02T22:56', 40),
    ('2026-10-03T00:36', 42), ('2026-10-03T05:18', 89),
    ('2026-10-03T12:52', 47), ('2026-10-03T14:03', 60), ('2026-10-03T15:16', 55),
    ('2026-10-03T15:55', 39), ('2026-10-05T12:59', 54),
    ('2026-10-05T13:04', 52), ('2026-10-05T13:11', 64),
    ('2026-10-05T20:23', 904), ('2026-10-05T21:05', 904),
]
xs = [dt.datetime.fromisoformat(t) for t, _ in runs]
ys = [d for _, d in runs]

fig, ax = plt.subplots(figsize=(8.6, 3.1), constrained_layout=True)
ax.scatter(xs, ys, s=52, color=RED, zorder=3, edgecolors='none')
# annotate the two long runs (runner never acquired)
ax.annotate('v38 push: 15 min waiting\nfor a hosted runner, then cancelled',
            xy=(xs[-1], ys[-1]), xytext=(dt.datetime(2026, 10, 2, 6), 640),
            fontsize=8.5, color=MUTED,
            arrowprops=dict(arrowstyle='-', color=MUTED, lw=0.7))
ax.annotate('battery fails fast on the\nempty CI database (exit 1)',
            xy=(xs[16], ys[16]), xytext=(dt.datetime(2026, 10, 3, 20), 300),
            fontsize=8.5, color=MUTED,
            arrowprops=dict(arrowstyle='-', color=MUTED, lw=0.7))
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_color(GRID)
ax.spines['bottom'].set_color(GRID)
ax.tick_params(labelsize=8.5, colors=MUTED)
ax.set_ylim(0, 1050)
ax.grid(True, linestyle='--', linewidth=0.5, alpha=0.25, color=GRID, zorder=0)
ax.set_ylabel('Run duration (s)', fontsize=9, color=MUTED)
import matplotlib.dates as mdates
ax.xaxis.set_major_formatter(mdates.DateFormatter('%d %b'))
fig.savefig(f'{OUT}/chart-ci.png', dpi=200)
plt.close(fig)

print('charts written')
