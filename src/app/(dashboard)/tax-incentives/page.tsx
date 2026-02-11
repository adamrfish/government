"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TaxIncentivesPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Tax Incentives and Credits</h1>
        <p className="mt-2 text-muted-foreground">
          Reduce what you owe, extend your runway, and make your company more
          attractive to investors.
        </p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Tax incentives don&apos;t put cash in your bank account the way a grant or
        contract does — but they can significantly reduce what you owe, extend
        your runway, and make your company more attractive to investors. For a
        small AI startup, the three most material incentives are the R&amp;D tax
        credit, the QSBS capital gains exclusion, and Florida&apos;s no-income-tax
        advantage.
      </p>

      <Accordion type="multiple" className="w-full">
        {/* 5.1 Federal R&D Tax Credit */}
        <AccordionItem value="rd-credit">
          <AccordionTrigger>Federal R&amp;D Tax Credit</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The most valuable annual tax benefit for an early-stage AI
                startup. The federal R&amp;D tax credit, under IRC §41 of the
                Internal Revenue Code, allows companies to claim a credit of
                6–10% of qualifying research expenditures against their tax
                liability. For a software/AI company, qualifying expenses
                typically include engineer salaries, cloud infrastructure costs,
                contractor costs for development work, and supplies used in
                development.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  The startup payroll tax offset
                </span>{" "}
                is what makes this practical. Most startups aren&apos;t profitable, so
                a credit against income tax isn&apos;t immediately useful. But under
                the PATH Act of 2015 and the Inflation Reduction Act of 2022,
                qualified small businesses can apply up to $500,000 per year of
                R&amp;D credits against the employer portion of FICA payroll taxes
                instead. FICA — the Federal Insurance Contributions Act — covers
                Social Security and Medicare taxes that employers must pay on
                employee wages. This converts R&amp;D spending into immediate cash
                savings even with zero income tax liability.
              </p>
              <p>
                To qualify for the payroll tax offset, Point11 must have less
                than $5M in gross receipts for the current year and no gross
                receipts for more than five years prior. Both criteria are easily
                met by an early-stage startup.
              </p>

              <h4 className="font-medium text-foreground">
                OBBBA changes (July 2025)
              </h4>
              <p>
                The OBBBA — the One Big Beautiful Bill Act, the Trump
                administration&apos;s omnibus tax and spending legislation signed in
                July 2025 — permanently restored immediate expensing for domestic
                R&amp;D costs under Section 174A. From 2022–2024, companies had to
                capitalize and amortize R&amp;D expenses over five years, meaning
                you couldn&apos;t deduct R&amp;D costs in the year you spent them and
                instead had to spread the deduction over five years. That was a
                cash flow disaster for startups. It&apos;s now reversed: 100% of
                domestic R&amp;D costs can be deducted in the year incurred,
                effective January 1, 2025. Small businesses under $31M in
                average annual gross receipts can also amend 2022–2024 returns to
                retroactively claim immediate expensing. Consult a CPA promptly —
                the IRS has set specific compliance deadlines under Rev. Proc.
                2025-28, and the statute of limitations on amended returns runs
                on a rolling basis.
              </p>

              <h4 className="font-medium text-foreground">
                What this means for Point11 — a concrete example
              </h4>
              <p>
                Assume Point11 spends $250K/year on qualifying R&amp;D: two
                engineers at $100K each, $30K in cloud and infrastructure, and
                $20K in contractor development work. The credit amount depends on
                which calculation method you elect. The ASC — Alternative
                Simplified Credit — is the most common. It uses a rolling base
                period instead of a fixed one. For a startup with no prior-year
                base, it yields approximately 6% of current-year qualifying
                expenses. The traditional method can yield up to 20% for a
                first-year company but is more complex. At $250K in qualifying
                expenses:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium text-foreground">
                    ASC method (most common):
                  </span>{" "}
                  ~$15,000–$16,000 credit
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Traditional method (first year, no base period):
                  </span>{" "}
                  potentially higher, up to $25,000+
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Payroll tax offset:
                  </span>{" "}
                  The credit offsets the employer portion of FICA (7.65% of
                  wages), applied quarterly via Form 8974. On $250K in payroll,
                  you&apos;re paying ~$19,125/year in employer FICA — the credit can
                  offset most or all of that.
                </li>
              </ul>
              <p>
                Net effect: $15,000–$25,000 in annual cash savings against
                payroll taxes you&apos;re already paying. Compounding benefit: As
                R&amp;D spending grows, the credit grows with it. These are rough
                estimates — the actual calculation depends on your specific
                qualifying expenses and the method elected. A CPA familiar with
                R&amp;D credits should run the numbers, but the order of magnitude
                is right. Over three years, this is $45K–$75K+ in cash savings
                with no profitability required.
              </p>

              <h4 className="font-medium text-foreground">How to claim</h4>
              <p>
                File Form 6765 with your annual income tax return and elect the
                payroll tax offset. File Form 8974 with quarterly payroll
                returns (Form 941). The election must be made on your original
                return — you cannot add it via amendment. Work with a CPA
                familiar with R&amp;D credits for startups.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5.2 QSBS */}
        <AccordionItem value="qsbs">
          <AccordionTrigger>
            Qualified Small Business Stock (QSBS) Exclusion
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Up to $15M in capital gains, tax-free. Section 1202 of the
                Internal Revenue Code allows founders and investors in qualifying
                C-corporations to exclude a substantial portion of capital gains
                from federal income tax when they sell their stock. This is the
                tax benefit that makes startup equity so valuable on exit.
              </p>

              <h4 className="font-medium text-foreground">
                OBBBA changes (July 2025) — major expansion
              </h4>
              <p>
                For stock issued after July 4, 2025, the rules are significantly
                more favorable:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium text-foreground">
                    Tiered exclusion:
                  </span>{" "}
                  50% exclusion after 3 years, 75% after 4 years, 100% after 5
                  years. Previously, you needed 5+ years for any exclusion.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Higher cap:
                  </span>{" "}
                  Exclude the greater of $15M or 10 times your adjusted basis
                  per issuer, up from $10M, indexed for inflation after 2026.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Higher asset threshold:
                  </span>{" "}
                  The issuing corporation can have up to $75M in gross assets, up
                  from $50M, meaning more growth-stage companies qualify.
                </li>
              </ul>
              <p>
                <span className="font-medium text-foreground">
                  Requirements:
                </span>{" "}
                The company must be a domestic C-corporation with gross assets
                under $75M, actively using 80%+ of assets in a qualified trade
                or business. Software/AI development qualifies. Excluded
                businesses include professional services like law, accounting,
                and health, as well as banking and hospitality. Stock must be
                acquired at original issuance, meaning directly from the company.
              </p>

              <h4 className="font-medium text-foreground">
                Florida advantage
              </h4>
              <p>
                Florida has no state income tax, so QSBS gains are taxed only at
                the federal level. In a conforming no-income-tax state, a
                founder holding QSBS for 5+ years pays zero federal and state
                capital gains tax on up to $15M in gains. This is a significant
                advantage over founders in California, where the state taxes the
                full gain at 13.3% regardless of QSBS, or Pennsylvania at
                3.07%.
              </p>

              <h4 className="font-medium text-foreground">
                What this means for Point11
              </h4>
              <p>
                Point11 is currently structured as an LLC, which does not qualify
                for QSBS. To unlock this benefit, Point11 would need to either
                convert to a C-corporation or elect C-corp tax treatment by
                filing Form 8832 with the IRS. The strategic case for doing so
                is strong: QSBS exclusion of up to $15M per founder on a future
                exit, easier equity issuance to employees and investors, and
                alignment with how most venture-backed startups are structured.
                The trade-off is double taxation — corporate income tax on
                profits, then personal income tax on distributions — but for a
                pre-revenue startup burning cash, that&apos;s a theoretical cost, not
                an immediate one. The conversion or election needs to happen
                before qualifying stock is issued. Consult a startup attorney and
                CPA.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5.3 Florida No-Income-Tax */}
        <AccordionItem value="florida-tax">
          <AccordionTrigger>
            Florida&apos;s No-Income-Tax Advantage
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Florida levies no personal income tax and no state corporate
                income tax on the first $50K of corporate income, with 5.5%
                above that for C-corps. For a startup that&apos;s pre-revenue or
                operating at a loss, this means:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  No state tax on R&amp;D credit savings — the federal payroll tax
                  offset flows directly to cash with no state clawback
                </li>
                <li>
                  No state tax on QSBS gains — 100% exclusion at both federal
                  and state level
                </li>
                <li>
                  No state tax on founder/employee compensation — lower cost of
                  living for the same take-home pay
                </li>
                <li>
                  Simpler multi-state tax situation — one less state filing to
                  worry about
                </li>
              </ul>
              <p>
                This is a genuine competitive advantage over startups in
                California, New York, or other high-tax states, particularly on
                exit.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5.4 Other Tax Benefits */}
        <AccordionItem value="other-benefits">
          <AccordionTrigger>Other Tax Benefits to Evaluate</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium text-foreground">
                    Opportunity Zones
                  </span>{" "}
                  — If Point11 locates in a designated Opportunity Zone,
                  investors can defer and reduce capital gains by investing in
                  the company through a Qualified Opportunity Fund. Several areas
                  in Miami-Dade, Broward, and other Florida counties are
                  designated Opportunity Zones.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Work Opportunity Tax Credit (WOTC)
                  </span>{" "}
                  — A credit of $2,400–$9,600 per eligible hire for employing
                  individuals from targeted groups such as veterans and the
                  long-term unemployed. Relevant if Point11 hires veterans — and
                  it aligns well with VA-focused contracting.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Section 179D
                  </span>{" "}
                  — Energy-Efficient Commercial Buildings. Less relevant for a
                  software company, but worth noting if Point11 ever occupies
                  office space and invests in energy efficiency.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    State-level R&amp;D credits
                  </span>{" "}
                  — Florida does not currently offer a state R&amp;D tax credit,
                  unlike roughly 35 other states. However, the absence of state
                  income tax makes this moot — there&apos;s no state income tax
                  liability to offset.
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5.5 Summary Table */}
        <AccordionItem value="summary">
          <AccordionTrigger>Summary Table</AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto text-sm text-muted-foreground">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-medium text-foreground">
                      Incentive
                    </th>
                    <th className="py-2 pr-4 font-medium text-foreground">
                      Benefit
                    </th>
                    <th className="py-2 pr-4 font-medium text-foreground">
                      Eligibility
                    </th>
                    <th className="py-2 pr-4 font-medium text-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">
                      Federal R&amp;D Tax Credit (payroll offset)
                    </td>
                    <td className="py-2 pr-4">
                      Up to $500K/yr against payroll taxes
                    </td>
                    <td className="py-2 pr-4">
                      &lt;$5M gross receipts, &lt;5 years of revenue
                    </td>
                    <td className="py-2 pr-4">
                      Claim on Form 6765 annually
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">QSBS (Section 1202)</td>
                    <td className="py-2 pr-4">
                      Up to $15M capital gains tax-free
                    </td>
                    <td className="py-2 pr-4">
                      C-corp required (Point11 must convert or elect), &lt;$75M
                      gross assets, 3–5 year hold
                    </td>
                    <td className="py-2 pr-4">
                      Convert to C-corp, then structure correctly
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">
                      Immediate R&amp;D Expensing (Section 174A)
                    </td>
                    <td className="py-2 pr-4">
                      100% deduction of R&amp;D costs in year incurred
                    </td>
                    <td className="py-2 pr-4">All domestic R&amp;D</td>
                    <td className="py-2 pr-4">
                      Deduct on annual return; consult CPA on amending 2022–2024
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">Florida no income tax</td>
                    <td className="py-2 pr-4">
                      $0 state tax on income, gains, QSBS
                    </td>
                    <td className="py-2 pr-4">
                      Florida resident / Florida-based business
                    </td>
                    <td className="py-2 pr-4">Maintain Florida domicile</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">Opportunity Zones</td>
                    <td className="py-2 pr-4">
                      Deferred/reduced capital gains for investors
                    </td>
                    <td className="py-2 pr-4">
                      Business located in designated OZ
                    </td>
                    <td className="py-2 pr-4">Evaluate location strategy</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">WOTC</td>
                    <td className="py-2 pr-4">
                      $2,400–$9,600 per qualifying hire
                    </td>
                    <td className="py-2 pr-4">
                      Hire from targeted groups (veterans, etc.)
                    </td>
                    <td className="py-2 pr-4">
                      Certify hires through state workforce agency
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 5.6 Timeline */}
        <AccordionItem value="timeline">
          <AccordionTrigger>Timeline</AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto text-sm text-muted-foreground">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-medium text-foreground">
                      When
                    </th>
                    <th className="py-2 pr-4 font-medium text-foreground">
                      What
                    </th>
                    <th className="py-2 pr-4 font-medium text-foreground">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Now</td>
                    <td className="py-2 pr-4">
                      Evaluate C-corp conversion or election (Form 8832) to
                      unlock QSBS eligibility
                    </td>
                    <td className="py-2 pr-4">Tax-free exit potential</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Now</td>
                    <td className="py-2 pr-4">
                      Begin tracking R&amp;D expenses by project (engineer time,
                      cloud costs, contractors)
                    </td>
                    <td className="py-2 pr-4">
                      Documentation for R&amp;D credit
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">
                      Tax filing (Year 1)
                    </td>
                    <td className="py-2 pr-4">
                      File Form 6765 and elect payroll tax offset on original
                      return
                    </td>
                    <td className="py-2 pr-4">Cash back on payroll taxes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">
                      By July 4, 2026
                    </td>
                    <td className="py-2 pr-4">
                      Evaluate amending 2022–2024 returns for retroactive R&amp;D
                      expensing (if applicable) — consult CPA on deadlines
                    </td>
                    <td className="py-2 pr-4">Potential refund</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Ongoing</td>
                    <td className="py-2 pr-4">
                      Maintain records supporting QSBS qualification (gross
                      asset test, active business test)
                    </td>
                    <td className="py-2 pr-4">Preserve exit benefit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
