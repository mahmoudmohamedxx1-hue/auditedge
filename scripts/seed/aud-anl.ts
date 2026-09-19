import { SeedCourse } from "./types"

export const audAnl: SeedCourse = {
  slug: "analytics-driven-auditing",
  code: "AUD-ANL",
  title: "Analytics-Driven Auditing",
  subtitle: "Full-population testing, Benford's law, regression analytics and dashboards that find what sampling misses.",
  description:
    "The audit profession's direction of travel is unambiguous: from samples to populations, from checklists to analytics. This course teaches the practical analytics stack for external auditors — full-population testing design, Benford's law and digital analysis, trend and regression procedures, and dashboard construction for continuous monitoring of clients. Tool-agnostic: everything works in the spreadsheet, IDEA or Python you already have.",
  category: "Analytics",
  level: "Advanced",
  cpeHours: 5,
  instructorName: "Tarek Hassanein",
  instructorTitle: "Former Big-4 Audit Partner · 24 years external audit",
  instructorBio:
    "Tarek led external audit engagements for banks, telecom operators and listed manufacturers across Egypt and the Gulf for over two decades. He served on his firm's audit methodology committee and now trains the next generation of Egyptian auditors.",
  rating: 4.7,
  ratingCount: 156,
  studentsCount: 689,
  icon: "line-chart",
  accent: "teal",
  featured: false,
  order: 8,
  modules: [
    {
      title: "The Analytics Mindset",
      description: "Why populations beat samples, and the maturity ladder from descriptive to predictive audit work.",
      lessons: [
        {
          title: "From Sample to Full Population",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "Sampling exists because auditors historically could not examine everything. That constraint has evaporated: the journal file, the sales population, the payments listing — all of it fits in memory. The question is no longer 'how many items can we test?' but 'what patterns can we see across everything?'",
            sections: [
              {
                heading: "What Populations Change",
                body: "Sampling answers a narrow question: how prevalent is a tested attribute? Population analytics answer different questions entirely: where are the anomalies concentrated? What does the structure of the data itself reveal about the processes behind it? Duplicates, gaps, round-number clusters, weekend postings, sequence breaks — patterns invisible to any sample become headline findings at population scale. A 25-item sample can find a 4% error rate; only full-population analysis can find the EGP 12m entry posted at 23:47 on New Year's Eve.",
                bullets: [
                  "Sampling estimates prevalence; analytics locate anomalies",
                  "Duplicates, gaps, timing clusters, sequence breaks: population-level patterns",
                  "JET (ISA 240) is the flagship population procedure — mandated and analytic",
                ],
              },
              {
                heading: "The Reliability Precondition",
                body: "Population analytics inherit the audit reliability discipline of ISA 500: the population must be complete and reconciled. An analytics run over an unreconciled journal extract proves nothing — the classic failure is analyzing 'the GL we were given' without verifying it ties to the ledger control totals. The professional sequence is always: obtain, reconcile, verify extraction pedigree, THEN analyze. The analytics skill set is 40% data discipline, 40% audit knowledge, 20% tooling.",
              },
              {
                heading: "Egyptian Data Realities",
                body: "Egyptian clients present the full spectrum: entities on modern ERPs with clean journals (banks, telecom, listed manufacturers) and entities on legacy systems with paper-backed processes and rekeyed spreadsheets. The analytics response scales: full-population JET everywhere (it is mandated), but for legacy clients the higher-yield analytics often sit on externally-anchored data — e-invoicing portal extracts, bank statements, tax filings — where the population is anchored outside the client's editable systems.",
              },
            ],
            keyPoints: [
              "Populations locate anomalies that samples can only estimate",
              "Data discipline first: reconcile and verify pedigree before analyzing",
              "Externally-anchored populations (e-invoice portals, bank data) anchor legacy clients",
              "Skill mix: data discipline + audit knowledge > tooling sophistication",
            ],
            example: {
              title: "The Gap in the Sequence",
              context:
                "A distributor's pre-numbered sales invoices run 148,001 to 152,340 for the year. A completeness analysis of the sequence finds 63 gaps — invoice numbers generated but never recorded in the ledger.",
              analysis:
                "Gaps in pre-numbered sequences are population-level findings: some gaps are legitimate (voided invoices — pull the void log and agree), some are process noise, and some are unrecorded sales — cash customers who left with goods. The investigation path is mechanical: match gaps to void documentation, escalate unmatched items to inquiry and physical-evidence procedures. No sample would have found 63 missing numbers; the population hands them to you.",
            },
            takeaway:
              "Stop asking how many items you can test and start asking what the whole population's structure reveals — after reconciling it, always.",
          },
        },
        {
          title: "The Analytics Maturity Ladder",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "Audit analytics are not one capability but a ladder: descriptive, diagnostic, predictive, preventive. Each rung answers a different question, and teams climb them in order — you cannot predict what you have not described.",
            sections: [
              {
                heading: "The Four Rungs",
                body: "Rung 1, descriptive: what happened? — summaries, profiles, distributions (invoice amounts by month, customer concentration, aging). Rung 2, diagnostic: why did it happen? — exception identification, variance decomposition, Benford and duplicate analysis. Rung 3, predictive: what will happen? — regression-based expectations, forecasting models for substantive analytics (payroll expectation, interest expense models). Rung 4, preventive/continuous: what should we watch? — dashboards, thresholds, alerts embedded in recurring monitoring. Most teams operate at rung 2 with aspirations at rung 3; the ladder is a planning tool for where your next skill investment goes.",
                bullets: [
                  "Descriptive → Diagnostic → Predictive → Preventive",
                  "ISA 520 substantive analytics live at rung 3 (predicted values with precision)",
                  "Continuous auditing (rung 4) suits recurring engagements and group monitoring",
                ],
              },
              {
                heading: "Matching Rung to Audit Purpose",
                body: "Risk assessment (ISA 315) mostly uses rung 1-2: profiling and flagging areas for focus. Substantive evidence (ISA 520) requires rung 3: expectations with precision tight enough to detect material misstatement, plus corroborated investigation of breaches. Journal entry testing runs rung 2-3: pattern flags feeding targeted examination. ISA 300 planning benefits from rung 4 in multi-year relationships: dashboards comparing monthly cycles across years surface what changed — and change is where risk lives.",
              },
            ],
            keyPoints: [
              "Climb the ladder in order: describe, diagnose, predict, prevent",
              "Risk assessment analytics ≠ substantive analytics — different rungs, different rigor",
              "Year-over-year dashboards surface change, and change concentrates risk",
            ],
            example: {
              title: "The Right Rung for the Right Question",
              context:
                "A team plans 'analytics' for a FMCG client: month-on-month revenue profiling (rung 1) is proposed as the substantive response to a revenue-occurrence significant risk.",
              analysis:
                "Rung mismatch: profiling describes; it does not predict with precision. The rung-3 response is a revenue expectation model built from volume × price by SKU family (or the production-inverse logic), with a defined precision band, whose breach triggers investigation. Profiling still belongs in the file — at planning. The lesson: name the rung, and match it to the ISA purpose, or the procedure will look like evidence while being decoration.",
            },
            takeaway:
              "Name the rung you are working at and match it to the ISA purpose — descriptive analytics in a substantive costume is the most common analytics failure in files today.",
          },
        },
      ],
    },
    {
      title: "Techniques That Deliver",
      description: "Benford's law, regression-based expectations, and the dashboard patterns that make analytics operational.",
      lessons: [
        {
          title: "Benford's Law & Digital Analysis",
          type: "lesson",
          durationMin: 15,
          xp: 10,
          content: {
            intro:
              "Benford's law is the audit's strangest and most powerful discovery tool: in many naturally-occurring financial populations, leading digits follow a logarithmic distribution — 1 leads ~30% of the time, 9 leads under 5%. Fabricated numbers, biased thresholds and manipulated amounts deviate. Benford will not prove fraud, but it will point.",
            sections: [
              {
                heading: "The Law and Its Logic",
                body: "For populations spanning multiple orders of magnitude (invoice amounts, expense claims, journal entries), first-digit frequencies follow log10(1 + 1/d): digit 1 ≈ 30.1%, digit 2 ≈ 17.6%, declining to digit 9 ≈ 4.6%. The intuition: a number has to double to move its leading digit from 1 to 2, but only increase 11% to move from 8 to 9 — multiplicative processes concentrate low leading digits. Populations that fit: general expense invoices, payments, journal absolute values. Populations that mislead: assigned numbers (prices ending .99, salaries in bands), single-magnitude populations, and accounts with structural clustering.",
                bullets: [
                  "First-digit expectation: log10(1 + 1/d)",
                  "Fits: invoices, claims, journal values — multi-magnitude, unconstrained",
                  "Doesn't fit: assigned prices, banded salaries, structural round numbers",
                ],
              },
              {
                heading: "Running It Properly",
                body: "The procedure: extract positive values above a floor (small values add noise), compute first-digit (and optionally first-two-digit) frequencies, compare against expected with a conformity test (chi-square or mean-absolute-deviation), and — the audit step — investigate the divergences. Excess of high leading digits often signals fabricated 'medium-size' numbers invented to sit under approval thresholds. Excess round numbers signals estimates or manipulated figures. The finding is never 'Benford failed'; it is 'populations of claims 500-999 show 3.4× expected frequency — examine that band'.",
              },
              {
                heading: "Beyond First Digits: The Digital Family",
                body: "The family extends: last-digit analysis (genuine measured values end in all digits uniformly — excess 0s and 5s signal estimation or invention), duplicate testing (same amount, same vendor, split dates), round-amount profiling, and 'just-below-threshold' cluster analysis — the approval-limit dodging pattern. These are cheap to run and devastatingly specific in their pointers. In Egyptian expense populations, the just-below-threshold cluster (amounts ending 990, 950) is a standing audit favourite.",
              },
            ],
            keyPoints: [
              "Benford fits multi-magnitude, unconstrained populations only",
              "The output is a pointer, not a conclusion — investigate divergences by band",
              "Last-digit and threshold-cluster analyses are cheap, high-yield companions",
              "Round-number and just-below-limit patterns are the practical winners",
            ],
            example: {
              title: "The 990 Club",
              context:
                "At an NGO-funded program, approval authority above EGP 10,000 requires a director's sign-off. Expense analysis shows 214 claims of EGP 9,500-9,990 and 41 claims of EGP 10,010-10,500 across the year.",
              analysis:
                "The 5:1 inversion of the natural distribution around the threshold is a structural impossibility absent intent: claimants are splitting purchases or trimming invoices to stay under authority limits. The response: pull the 214 claims, examine supporting documents for splitting patterns (same vendor, same day, adjacent invoices), and test whether the underlying purchases were single transactions. The pattern is not proof of loss by itself, but it converts 'sample expense claims' into 'examine every 9-thousand claim' — analytics as targeting ammunition.",
            },
            takeaway:
              "Benford and its digital cousins are targeting instruments: they do not conclude, they point — and the just-below-threshold cluster is the most reliable pointer in the family.",
          },
        },
        {
          title: "Regression & Trend-Based Expectations",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "The most persuasive substantive analytics build an expectation with regression: a defensible statistical relationship between the tested account and its drivers. Under ISA 520, a well-built regression expectation is not just evidence — it is strong evidence, with quantified precision.",
            sections: [
              {
                heading: "The Regression Workflow",
                body: "The workflow: hypothesize the relationship (interest expense ~ average drawn balance × rate; power cost ~ production MWh × tariff); assemble the monthly data series (36+ observations is the comfortable zone); fit the model (simple linear regression suffices for most audit purposes); evaluate the fit (R² and — more importantly — the residual pattern: no structure, no autocorrelation); set the expectation band (prediction interval at the materiality-tight threshold); compare actuals; investigate breaches with corroboration. Each step is documented; the model IS the working paper.",
                bullets: [
                  "36+ monthly observations for comfortable fitting",
                  "R² matters less than residual structure (no pattern in errors)",
                  "Prediction interval defines the precision band for ISA 520",
                ],
              },
              {
                heading: "Building Relationships That Hold",
                body: "The craft is choosing driver variables that genuinely cause the account: production tonnage for raw-material consumption (not revenue — inventory pooling breaks the link), occupied room-nights for hotel payroll, kilometers for fleet fuel. Beware spurious correlation — two trending series will always correlate; the relationship must make operational sense BEFORE the statistics are consulted. In inflationary Egyptian data, deflate or model with explicit price indices — otherwise the model captures price, not behaviour, and every expectation becomes an inflation forecast.",
              },
              {
                heading: "When the Model Breaks",
                body: "Model breach is the evidence event: investigate the residual, not the R². The investigation needs the same discipline as any exception: corroborated explanation (the factory shutdown log, the tariff change circular, the strike documentation) or a proposed adjustment. Structural breaks (a step-change in the relationship mid-year) deserve special attention — they mark process changes, system migrations, or the boundary where behaviour changed; all three are risk-relevant events that belong in the file's narrative.",
              },
            ],
            keyPoints: [
              "Causal driver selection precedes statistics — operational sense first",
              "Deflate Egyptian series or model prices explicitly",
              "The prediction interval is the ISA 520 precision instrument",
              "Structural breaks mark process change — investigate them as events",
            ],
            example: {
              title: "The Two-Model Year",
              context:
                "A regression of electricity cost on production tonnage (42 months, R² 0.91) shows a clean break from month 31: costs step up 9% at constant production. Management attributes it to 'tariff adjustment'.",
              analysis:
                "The corroboration test: the electricity authority's circular shows a 4% industrial tariff rise — the residual 5% remains unexplained. Investigation found a night-shift lighting installation fault (an efficiency loss, correctly an expense issue once identified) and — separately — an unrecorded sub-letting arrangement where a neighbouring workshop tapped the meter. The regression did not find the fraud; it found the 5% that demanded a story, and the story turned out to be two findings.",
            },
            takeaway:
              "Regression analytics convert relationships into evidence: build causally, document the fit, set the interval — and treat every breach and break as a story the file must be able to tell.",
          },
        },
        {
          title: "Building Your First Audit Dashboard",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "Dashboards operationalize analytics: they turn one-off analyses into standing monitoring that surfaces change, concentration and anomaly across the engagement cycle. The craft is restraint — a few panels that answer standing questions beat a wall of charts that answer none.",
            sections: [
              {
                heading: "The Standing Questions",
                body: "A useful audit dashboard answers the questions reviewers ask every period: Where is money moving? (monthly cash, revenue and margin waterfalls) What changed? (year-over-year cycle overlays, budget-versus-actual bridges) Where is concentration risk? (top customers, vendors, products, geography) Where are the anomaly clusters? (journal flag counts by month, just-below-threshold activity, credit-note patterns) Is anything drifting? (DPO/DSO trends, aging migration, returns ratios). Five panels, five questions — anything beyond that is decoration.",
                bullets: [
                  "Movement: cash / revenue / margin waterfalls",
                  "Change: YoY overlays and budget bridges",
                  "Concentration: top-N everything",
                  "Anomaly: JET flag counts, threshold clusters, credit-note ratios",
                  "Drift: DSO/DPO, aging, returns trends",
                ],
              },
              {
                heading: "From Dashboard to Audit Evidence",
                body: "A dashboard built at planning becomes the year's navigation instrument: each review meeting updates it, each anomaly panel feeds a follow-up procedure, and at completion the dashboard is the analytical review backbone (ISA 520 final analytical procedures run as year-over-year coherence checks). The evidence discipline still applies: data reconciled, extracts pedigreed, thresholds documented — the dashboard is a lens over evidence discipline, not a substitute for it.",
              },
              {
                heading: "Tooling Realism",
                body: "The stack does not matter: Power BI, Tableau, IDEA, Python or a disciplined spreadsheet with pivot discipline all deliver the five panels. What matters is ownership (the audit team, not IT, owns the logic), refresh discipline (monthly, tied to the management accounts cycle), and version control (each month's snapshot preserved — dashboards that overwrite history destroy the trend evidence they exist to create). Start with one client, one dashboard, five panels; expand where it earns its keep.",
              },
            ],
            keyPoints: [
              "Five standing panels beat fifty decorative charts",
              "Planning-built dashboards become the completion analytical backbone",
              "Audit team owns the logic; monthly snapshots preserve trend evidence",
              "Tool-agnostic: discipline transfers, software is interchangeable",
            ],
            example: {
              title: "The Credit-Note Drift That Spent Ten Months",
              context:
                "A distributor dashboard's anomaly panel tracked monthly credit-note value as a percentage of revenue. The series ran 1.8-2.2% for eight months, then drifted: 2.9%, 3.4%, 4.1%.",
              analysis:
                "The drift panel converted an invisible bleed into a trend: investigation found a regional sales manager approving returns beyond authority to placate a key account dispute — a control failure with margin consequences that no monthly close would have surfaced. Ten months of drift cost ~EGP 3.2m in margin. The dashboard did not detect fraud; it detected change — which is the audit question dashboards exist to answer.",
            },
            takeaway:
              "Build the five-panel dashboard your reviews actually need, own its logic, snapshot it monthly — and let drift panels do what humans cannot: notice slow change.",
          },
        },
        {
          title: "Knowledge Check: Analytics-Driven Auditing",
          type: "quiz",
          durationMin: 8,
          xp: 25,
          content: {
            intro: "Test your audit analytics judgement. 70% to pass.",
            sections: [],
            keyPoints: [],
            takeaway: "",
          },
          quiz: {
            title: "Analytics-Driven Auditing — Knowledge Check",
            passScore: 70,
            questions: [
              {
                question:
                  "Before running any full-population analytics, the auditor must FIRST:",
                options: [
                  "Select the visualization tool",
                  "Reconcile the population to the ledger and verify extraction pedigree",
                  "Run Benford's law to validate the data",
                  "Increase materiality to cover analytics risk",
                ],
                correctIndex: 1,
                explanation:
                  "ISA 500 discipline applies to analytics: an unreconciled extract is not evidence. Obtain, reconcile, verify pedigree — then analyze. Analytics amplify whatever data quality you feed them.",
              },
              {
                question:
                  "Benford's law analysis is LEAST appropriate for which population?",
                options: [
                  "General expense invoice amounts",
                  "Journal entry absolute values across a year",
                  "Employee salaries within fixed pay bands",
                  "Petty cash disbursements over multiple years",
                ],
                correctIndex: 2,
                explanation:
                  "Banded/assigned numbers violate Benford's multi-magnitude assumption: salaries cluster at band thresholds, so leading digits are structurally determined, not naturally distributed.",
              },
              {
                question:
                  "A regression expectation model (electricity cost on production volume) shows R² 0.93 with a visible wave pattern in residuals across months. The auditor should:",
                options: [
                  "Accept the model — R² is high",
                  "Investigate the residual structure: seasonality may be missing, making the precision band unreliable",
                  "Reduce the sample size",
                  "Replace the model with a simple average",
                ],
                correctIndex: 1,
                explanation:
                  "Structured residuals (waves, autocorrelation) mean the model is missing a systematic component — often seasonality. Precision bands from a misspecified model are unreliable regardless of R².",
              },
              {
                question:
                  "Expenses just below approval thresholds cluster at 5× the natural rate. The most appropriate audit response is:",
                options: [
                  "Conclude fraud and report immediately",
                  "Ignore — amounts are below threshold by design",
                  "Examine the clustered items for splitting patterns (same vendor, same day, adjacent amounts) and corroborate with documents",
                  "Raise the approval threshold recommendation",
                ],
                correctIndex: 2,
                explanation:
                  "Threshold clusters are pointers, not conclusions: examine the clustered population for splitting signatures — same vendor/day/adjacent amounts — and corroborate with underlying purchase evidence.",
              },
              {
                question:
                  "In an inflationary environment like Egypt's, regression models on cost series should:",
                options: [
                  "Ignore inflation — it affects all periods equally",
                  "Deflate the series or model prices explicitly, or the model measures price change, not behaviour",
                  "Use only two data points to avoid noise",
                  "Avoid regression entirely",
                ],
                correctIndex: 1,
                explanation:
                  "Undeflated trending series produce spurious fits that track price, not operational behaviour. Deflate with indices or model prices explicitly — otherwise every breach is just an inflation forecast error.",
              },
            ],
          },
        },
      ],
    },
  ],
}
