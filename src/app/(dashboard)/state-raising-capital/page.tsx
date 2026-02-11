"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StateRaisingCapitalPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Raising Capital</h1>
        <p className="mt-2 text-muted-foreground">
          State governments offer their own capital programs independent of
          federal pass-through money.
        </p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        These tend to be smaller in dollar terms but faster to access, with less
        paperwork. For Point11 in Florida, the most relevant programs span
        grants, loans, and state-backed investment.
      </p>

      <Accordion type="multiple" className="w-full">
        {/* 4.1 Florida-Specific Programs */}
        <AccordionItem value="florida">
          <AccordionTrigger>Florida-Specific Programs</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-medium text-foreground">
                Florida High Tech Corridor Matching Grants
              </h4>
              <p>
                A strong fit for an AI company partnered with a Florida
                university. The Florida High Tech Corridor Council provides
                matching grants of $10K–$150K, up to $250K annually per project,
                for collaborative R&amp;D between high-tech companies and Florida
                universities — the University of Central Florida, the University
                of South Florida, and others. Available across 23 counties.
                Companies with SBIR/STTR awards can receive up to $150K in
                additional matching funds through the SBIR Catalyst program.
                Applications are reviewed first-come, first-served until annual
                funds are exhausted.
              </p>
              <p>
                Point11 would need to partner with a university researcher on a
                joint project — for example, an AI chatbot research
                collaboration with UCF&apos;s computer science department. The
                Corridor also provides access to university talent and
                facilities.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  How to apply:
                </span>{" "}
                Contact the Corridor directly at floridahightech.com or through
                your university partner&apos;s research office. UCF and USF each have
                dedicated Program Directors who review drafts and provide
                feedback before submission. The application must be completed
                collaboratively by the faculty PI — the Principal Investigator,
                the lead researcher on the university side — and industry
                partner.
              </p>
              <p>
                <span className="font-medium text-foreground">FL FAST</span> —
                The Corridor also runs Florida&apos;s first centralized SBIR/STTR
                support system, funded by the SBA&apos;s FAST Partnership Program —
                the Federal and State Technology Partnership Program. FL FAST
                provides free workshops, one-on-one proposal preparation help,
                budget review, and open office hours. The 2026 schedule is to be
                announced. Even before SBIR reauthorizes, FL FAST can help
                Point11 prepare materials. Contact:
                floridahightech.com/innovation-investments/sbir-sttr-support
              </p>

              <h4 className="font-medium text-foreground">
                Florida Small Business Emergency Bridge Loan Program
              </h4>
              <p>
                Short-term, zero-interest loans up to $50K for businesses
                affected by disasters or economic disruption. Activated by the
                Governor on a case-by-case basis. Not a standing program, but
                worth knowing about.
              </p>

              <h4 className="font-medium text-foreground">
                Enterprise Florida Trade Grants
              </h4>
              <p>
                If Point11 ever pursues international markets, Enterprise Florida
                offers matching grants for trade shows, export marketing plans,
                and website localization for foreign markets.
              </p>

              <h4 className="font-medium text-foreground">
                Florida Job Growth Grant Fund
              </h4>
              <p>
                Up to $500K for workforce training and public infrastructure.
                Benefits businesses indirectly through better resources rather
                than direct capital. More relevant for companies with larger
                hiring plans.
              </p>

              <h4 className="font-medium text-foreground">
                SSBCI Florida Programs (Federal Dollars, State-Administered)
              </h4>
              <p>
                Florida&apos;s $488M+ in SSBCI funding flows through five programs:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium text-foreground">
                    Venture Capital Program
                  </span>{" "}
                  — Equity investments through the Florida Opportunity Fund
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Loan Participation Program
                  </span>{" "}
                  — SSBCI funds alongside private lender funds
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Loan Guarantee Program
                  </span>{" "}
                  — Partial guarantees for loans and lines of credit
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Collateral Support Program
                  </span>{" "}
                  — Cash collateral to help businesses qualify for bank loans
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Capital Access Program
                  </span>{" "}
                  — Portfolio insurance for lenders making small business loans
                </li>
              </ul>
              <p>
                These are technically federal dollars but administered entirely
                by Florida. Businesses must be Florida-based with fewer than 500
                employees.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 4.2 Other State Programs */}
        <AccordionItem value="other-states">
          <AccordionTrigger>
            Other State Programs Worth Monitoring
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                For Point11&apos;s five target states (Florida, Texas, Virginia,
                Maryland, Michigan), each state has its own suite of programs:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        State
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Key Programs
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Florida</td>
                      <td className="py-2 pr-4">
                        High Tech Corridor, SSBCI (5 programs), Prospera grants
                      </td>
                      <td className="py-2 pr-4">
                        Home state — primary focus
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Virginia</td>
                      <td className="py-2 pr-4">
                        Virginia Innovation Partnership Corporation (VIPC),
                        SSBCI venture fund, Commonwealth Commercialization Fund
                      </td>
                      <td className="py-2 pr-4">
                        Strong tech ecosystem, proximity to DC
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Maryland</td>
                      <td className="py-2 pr-4">
                        TEDCO (Maryland Technology Development Corporation),
                        Maryland Innovation Initiative, SSBCI programs
                      </td>
                      <td className="py-2 pr-4">
                        Active govtech ecosystem
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Texas</td>
                      <td className="py-2 pr-4">
                        Texas Enterprise Fund, SSBCI programs, Emerging
                        Technology Fund (successor programs)
                      </td>
                      <td className="py-2 pr-4">
                        Large IT budget, active solicitations
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Michigan</td>
                      <td className="py-2 pr-4">
                        SSBCI programs, Michigan Economic Development
                        Corporation grants
                      </td>
                      <td className="py-2 pr-4">
                        Completed major digital modernization
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 4.3 Where to Look */}
        <AccordionItem value="where-to-look">
          <AccordionTrigger>Where to Look</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-medium text-foreground">
                    APEX Accelerators (formerly PTACs)
                  </span>{" "}
                  — Free counseling offices in every state that help small
                  businesses access both state and federal funding. Find your
                  nearest office at apexaccelerators.us.
                </li>
                <li>
                  <span className="font-medium text-foreground">SBDCs</span> —
                  Small Business Development Centers. SBA-funded centers at
                  universities and colleges across the country that provide free
                  one-on-one business counseling, including help identifying and
                  applying for state grants and loans.
                </li>
                <li>
                  <span className="font-medium text-foreground">SCORE</span> — A
                  nationwide network of volunteer business mentors, mostly
                  retired executives, that provides free mentorship, including
                  help with funding applications.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    State economic development agencies
                  </span>{" "}
                  — Enterprise Florida at enterpriseflorida.com, Virginia
                  Economic Development Partnership at vedp.org, Maryland TEDCO
                  at tedco.md, and similar offices in every state.
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 4.4 Timeline */}
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
                    <td className="py-2 pr-4 whitespace-nowrap">Week 1–2</td>
                    <td className="py-2 pr-4">
                      Contact nearest APEX Accelerator and SBDC for free
                      counseling
                    </td>
                    <td className="py-2 pr-4">
                      Expert guidance on state programs
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 1</td>
                    <td className="py-2 pr-4">
                      Apply to Florida High Tech Corridor if university
                      partnership is viable
                    </td>
                    <td className="py-2 pr-4">
                      Up to $150K in matching grants
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 1–2</td>
                    <td className="py-2 pr-4">
                      Contact Florida Opportunity Fund re: SSBCI venture capital
                    </td>
                    <td className="py-2 pr-4">Equity pipeline</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 2–3</td>
                    <td className="py-2 pr-4">
                      Research programs in Virginia and Maryland (if pursuing
                      DC-area work)
                    </td>
                    <td className="py-2 pr-4">Additional state capital</td>
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
