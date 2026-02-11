"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StateOpportunitiesPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Current Opportunities</h1>
        <p className="mt-2 text-muted-foreground">
          State and local government contracts worth pursuing right now.
        </p>
      </div>

      <Accordion type="multiple" className="w-full">
        {/* Opportunity Size */}
        <AccordionItem value="opportunity-size">
          <AccordionTrigger>Opportunity Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Every state and local government website must be WCAG 2.1 AA
                compliant by April 24, 2026. That&apos;s 10 weeks away. Many
                aren&apos;t compliant. This is driving a wave of redesign,
                migration, and accessibility contracts right now.
              </p>
              <p className="font-medium text-foreground">
                Three reasons to pursue it selectively:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    It&apos;s faster.
                  </span>{" "}
                  Procurement cycles are weeks to months, not months to years.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    The ADA deadline creates real urgency.
                  </span>{" "}
                  Governments over 50,000 population face April 24, 2026.
                  Non-compliance means lawsuits. Many aren&apos;t compliant yet.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    It generates cash flow.
                  </span>{" "}
                  Two or three $50K–$150K state contracts fund the overhead of
                  pursuing federal work.
                </li>
              </ol>

              <h4 className="font-medium text-foreground">Service Areas</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Service
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Fit
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Typical Contract
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">WCAG 2.1 AA remediation</td>
                      <td className="py-2 pr-4">
                        Immediate — deadline-driven
                      </td>
                      <td className="py-2 pr-4">$25K–$100K</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">
                        Website modernization / CMS migration
                      </td>
                      <td className="py-2 pr-4">
                        Strong — same legacy CMS problem
                      </td>
                      <td className="py-2 pr-4">$50K–$500K</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">
                        AI chatbots for citizen services
                      </td>
                      <td className="py-2 pr-4">
                        Growing — 311 (non-emergency government helplines),
                        permits, benefits
                      </td>
                      <td className="py-2 pr-4">$50K–$250K</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">What This Is Not</h4>
              <p>
                The growth market. A $75K WCAG contract doesn&apos;t build
                federal past performance. It&apos;s a bridge — fast revenue and
                proof of government delivery. The destination is federal, where
                one VA task order can run $5M–$15M over 3–5 years.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Direct Sales */}
        <AccordionItem value="direct-sales">
          <AccordionTrigger>Direct Sales</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Won through direct bids on state procurement portals. No GSA
                Schedule equivalent — each state has its own system.
              </p>

              <h4 className="font-medium text-foreground">
                Where to Register
              </h4>
              <p>Five states. Don&apos;t spread across 50 portals.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        State
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Why
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Portal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Florida</td>
                      <td className="py-2 pr-4">
                        Home state. Active website RFPs. Large population =
                        urgent ADA deadline.
                      </td>
                      <td className="py-2 pr-4">
                        MyFloridaMarketPlace (MFMP)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Texas</td>
                      <td className="py-2 pr-4">
                        Active web dev and AI solicitations. Large IT budget.
                      </td>
                      <td className="py-2 pr-4">
                        Texas SmartBuy / ESBD
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Virginia</td>
                      <td className="py-2 pr-4">
                        Active redesign RFPs. Proximity to DC primes. Wins carry
                        federal weight.
                      </td>
                      <td className="py-2 pr-4">eVA</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Maryland</td>
                      <td className="py-2 pr-4">
                        Procurement Reform Act (2025). Actively modernizing.
                      </td>
                      <td className="py-2 pr-4">
                        eMaryland Marketplace Advantage
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Michigan</td>
                      <td className="py-2 pr-4">
                        Completed 170K-page migration. Follow-on work available.
                      </td>
                      <td className="py-2 pr-4">SIGMA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                Where to Find Opportunities
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  BidPrime, GovCB, RFPMart — Aggregated RFP monitoring
                  (~$100–$300/mo)
                </li>
                <li>State portals listed above (free)</li>
              </ul>

              <h4 className="font-medium text-foreground">Timeline</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
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
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Weeks 1–2
                      </td>
                      <td className="py-2 pr-4">
                        Register on MFMP (FL) and eVA (VA)
                      </td>
                      <td className="py-2 pr-4">
                        Access to top two markets
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Weeks 2–4
                      </td>
                      <td className="py-2 pr-4">
                        Set up daily monitoring (BidPrime or GovCB)
                      </td>
                      <td className="py-2 pr-4">
                        Visibility into active RFPs
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 1–3
                      </td>
                      <td className="py-2 pr-4">
                        Bid on 3–5 RFPs, $50K–$150K range, ADA urgency
                      </td>
                      <td className="py-2 pr-4">First state wins</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 3–6
                      </td>
                      <td className="py-2 pr-4">
                        Use wins as cash flow + supplementary past performance
                      </td>
                      <td className="py-2 pr-4">Bridge revenue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Channel Sales */}
        <AccordionItem value="channel-sales">
          <AccordionTrigger>
            Channel Sales (as Subcontractor to Primes)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Thinner opportunity than federal. Contracts are smaller and the
                prime/sub structure is less formalized. But large IT integrators
                hold statewide contracts and sub out specialized web and AI work.
              </p>

              <h4 className="font-medium text-foreground">How It Works</h4>
              <p>
                Firms like Deloitte, Accenture, NTT Data, Conduent, and Maximus
                hold multi-year state IT modernization contracts. When those
                include web or AI components, they sub to specialists —
                especially now, with primes scrambling to meet April 2026 ADA
                deadlines.
              </p>

              <h4 className="font-medium text-foreground">Where to Look</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    State IT vendor lists
                  </span>{" "}
                  — Most states publish pre-qualified vendors on their portals.
                  Find who holds master IT contracts in your five target states.
                </li>
                <li>
                  <span className="font-medium text-foreground">NASCIO</span> —
                  the National Association of State Chief Information Officers —
                  publishes annual state IT priorities. Web modernization and AI
                  have been top 5 for three straight years.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    APEX Accelerators
                  </span>{" "}
                  — formerly called PTACs, or Procurement Technical Assistance
                  Centers — are free counseling offices funded by the DoD and SBA
                  that help small businesses navigate government contracting at
                  both the state and federal level. Contact nearest office for
                  introductions.
                </li>
              </ul>

              <h4 className="font-medium text-foreground">Timeline</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
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
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Weeks 2–4
                      </td>
                      <td className="py-2 pr-4">
                        Identify prime IT vendors on FL and VA master contracts
                      </td>
                      <td className="py-2 pr-4">
                        Know who holds the deals
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">Month 2</td>
                      <td className="py-2 pr-4">
                        Contact APEX Accelerator for state introductions
                      </td>
                      <td className="py-2 pr-4">
                        Warm intros to state primes
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 2–4
                      </td>
                      <td className="py-2 pr-4">
                        Reach out to state primes re: ADA compliance and web
                        modernization
                      </td>
                      <td className="py-2 pr-4">State sub pipeline</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
