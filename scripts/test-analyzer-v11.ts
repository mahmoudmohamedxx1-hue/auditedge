/** Engine smoke test: build a JE CSV with KNOWN anomalies and verify the
 *  analyzer finds each one (test fixture only — never shipped as app data). */
import { analyze, detectColumns, parseCsv, toNumber } from "../src/lib/tb-analysis"

let failures = 0
const check = (name: string, cond: boolean) => {
  console.log(`${cond ? "✓" : "✗ FAIL"} ${name}`)
  if (!cond) failures++
}

// ---------- JE fixture: balanced double-entry vouchers with planted anomalies ----------
function jeCsv(): string {
  const rows: string[] = ["Voucher,Date,Account,Description,Debit,Credit"]
  let v = 1
  const voucher = (d: string, drAcc: string, crAcc: string, desc: string, amt: number, unbalanced = false) => {
    const id = `JV-2025-${String(v++).padStart(4, "0")}`
    rows.push(`${id},${d},${drAcc},${desc},${amt},0`)
    rows.push(`${id},${d},${crAcc},${desc},0,${unbalanced ? Math.round(amt * 0.9) : amt}`)
  }

  // 100 normal weekday entries through Jan–Nov 2025
  const iso = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}` // local, TZ-safe
  for (let i = 0; i < 100; i++) {
    const day = new Date(2025, 0, 2 + i * 3) // every 3rd day from 2 Jan
    if ([5, 6].includes(day.getDay())) continue
    voucher(iso(day), "5010 Salaries expense", "1010 Cash on hand", `Routine ${i}`, 1234.56 + i)
  }
  // 3 weekend vouchers (2025-01-03 Friday, 2025-01-04 Saturday, 2025-01-10 Friday)
  voucher("2025-01-03", "5010 Salaries expense", "1010 Cash on hand", "Weekend 1", 9000)
  voucher("2025-01-04", "1010 Cash on hand", "4010 Sales revenue", "Weekend 2", 7500)
  voucher("2025-01-10", "5010 Salaries expense", "1010 Cash on hand", "Weekend 3", 4200)
  // 2 duplicate (account, amount, date) vouchers
  voucher("2025-02-10", "2010 Accounts receivable", "4010 Sales revenue", "Dup A", 5000)
  voucher("2025-02-10", "2010 Accounts receivable", "4010 Sales revenue", "Dup A repeat", 5000)
  // large voucher above threshold 100000 near year end
  voucher("2025-12-30", "1210 Inventory", "1010 Cash on hand", "Big year-end", 250000)
  // just-below-threshold cluster (90k–100k)
  voucher("2025-12-28", "5020 Repairs expense", "1010 Cash on hand", "Just below 1", 95000)
  voucher("2025-12-29", "5020 Repairs expense", "1010 Cash on hand", "Just below 2", 92000)
  voucher("2025-12-30", "5020 Repairs expense", "1010 Cash on hand", "Just below 3", 91000)
  // round numbers (Mon/Tue — deliberately NOT weekend)
  voucher("2025-03-17", "1010 Cash on hand", "4010 Sales revenue", "Round 1", 40000)
  voucher("2025-03-18", "1010 Cash on hand", "4010 Sales revenue", "Round 2", 30000)
  // ONE deliberately unbalanced voucher
  voucher("2025-06-15", "1210 Inventory", "5010 Salaries expense", "Broken", 8000, true)
  return rows.join("\n")
}

const je = parseCsv(jeCsv())
const jeCols = detectColumns(je)
console.log("JE columns:", JSON.stringify(jeCols))
check("JE voucher column detected", jeCols.voucher === "Voucher")
check("JE date column detected", jeCols.date === "Date")
check("JE debit column detected", jeCols.debit === "Debit")
check("JE credit column detected", jeCols.credit === "Credit")
check("JE account column detected", jeCols.account === "Account")

const jeRes = analyze(je, jeCols, { threshold: 100000, weekend: [5, 6], tailDays: 7 })
console.log(
  `JE mode=${jeRes.summary.mode} rows=${jeRes.summary.rows} findings:`,
  jeRes.findings.map((f) => `${f.id}(${f.severity},×${f.count})`).join(" ")
)
const byId = Object.fromEntries(jeRes.findings.map((f) => [f.id, f]))
check("JE mode detected", jeRes.summary.mode === "je")
check("weekend postings found (3 vouchers = 6 lines)", byId.weekend?.count === 6)
check("duplicates found (2 groups × 2 lines = 4 rows)", byId.duplicates?.count === 4)
check("large entries above threshold (2 lines)", byId.large?.count === 2)
check("just-below-threshold cluster (6 lines)", byId["below-threshold"]?.count === 6)
check("unbalanced voucher detected (1)", byId["vouchers-unbalanced"]?.count === 1)
check("TB imbalance NOT fired on JE listing", !byId["tb-imbalance"])
check("benford computed", !!jeRes.summary.benford && jeRes.summary.benford.n > 100)
check("date range detected", !!jeRes.summary.dateRange)

// ---------- TB fixture ----------
function tbCsv(): string {
  const rows: string[] = ["Account,Description,Balance"]
  rows.push("1010 Cash on hand,Cash,2000000")
  rows.push("1020 Bank CIB,Bank,8000000")
  rows.push("1210 Inventory,Inventory,5000000")
  rows.push("2010 AR,Receivables,3000000")
  for (let i = 0; i < 36; i++)
    rows.push(`3${String(i).padStart(3, "0")} Other ${i},Misc,${i % 5 === 0 ? -1000 : 500 + i}`)
  return rows.join("\n")
}

const tb = parseCsv(tbCsv())
const tbCols = detectColumns(tb)
console.log("TB columns:", JSON.stringify(tbCols))
const tbRes = analyze(tb, tbCols, { threshold: null, weekend: [5, 6], tailDays: 7 })
console.log(`TB mode=${tbRes.summary.mode} findings:`, tbRes.findings.map((f) => f.id).join(","))
check("TB mode detected", tbRes.summary.mode === "tb")
check("TB balance column detected", tbCols.amount === "Balance")
const tbBy = Object.fromEntries(tbRes.findings.map((f) => [f.id, f]))
check("negative balances found", (tbBy["negative-balances"]?.count ?? 0) >= 8)
check("concentration finding present", !!tbBy.concentration)
check("TB net-zero check fired (fixture does not net)", !!tbBy["tb-net"])

// unbalanced debit/credit TB
const tbBad = parseCsv("Account,Description,Debit,Credit\n1010 Cash,Cash,1000,0\n4010 Sales,Sales,0,900\n3010 Capital,Capital,0,0\n5010 Rent,Rent,200,0\n1210 Stock,Stock,100,0")
const tbBadRes = analyze(tbBad, detectColumns(tbBad), { threshold: null, weekend: [5, 6], tailDays: 7 })
check(
  "TB imbalance detected (dr 1300 vs cr 900)",
  tbBadRes.findings.some((f) => f.id === "tb-imbalance" && f.value === 400)
)

// ---------- helpers & Arabic ----------
check("toNumber('(1,234)') = -1234", toNumber("(1,234)") === -1234)
check("toNumber('1,234.5') = 1234.5", toNumber("1,234.5") === 1234.5)

const arabic = parseCsv(
  "التاريخ,الحساب,البيان,مدين,دائن\n2025-01-15,1010,دفعة,5000,0\n2025-01-15,4010,دفعة,0,5000\n2025-01-16,1020,دفعة,3000,0\n2025-01-16,4010,دفعة,0,3000\n2025-01-17,1030,دفعة,2000,0\n2025-01-17,4010,دفعة,0,2000\n2025-01-18,1040,دفعة,1000,0\n2025-01-18,4010,دفعة,0,1000\n2025-01-19,1050,دفعة,900,0\n2025-01-19,4010,دفعة,0,900"
)
const arCols = detectColumns(arabic)
console.log("Arabic headers detected:", JSON.stringify(arCols))
check("Arabic date column detected", arCols.date === "التاريخ")
check("Arabic debit column detected", arCols.debit === "مدين")
check("Arabic credit column detected", arCols.credit === "دائن")

// quoted CSV with semicolons
const semis = parseCsv('Account;Amount\n"1010 Cash";"1,500.25"\n"1020 Bank";"2,000.00"\n"1030 AR";"500.00"\n"1040 Stock";"250.00"\n"1050 Prepaid";"100.00"\n"1060 Land";"10,000.00"')
check("semicolon + quoted CSV parsed (6 rows)", semis.rows.length === 6)
check("quoted number parsed", toNumber(semis.rows[0]["Amount"]) === 1500.25)

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECKS FAILED`)
process.exit(failures === 0 ? 0 : 1)
