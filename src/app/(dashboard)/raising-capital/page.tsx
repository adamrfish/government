"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RaisingCapitalPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Raising Capital</h1>
        <p className="mt-2 text-muted-foreground">
          Save on taxes and get grants: Capital is available without giving up
          equity.
        </p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        The R&D tax credit offsets payroll taxes — up to $500K/year by statute.
        SBIR grants — Small Business Innovation Research, a federal program that
        funds R&amp;D at small companies through competitive grants — provide
        $150K–$300K in Phase I and come with sole-source follow-on rights worth
        far more than the initial award. This is like a government venture
        capital alternative. The SBA — Small Business Administration — is the
        federal agency dedicated to supporting small businesses. And if Point11
        converts from an LLC to a C-corp, QSBS — Qualified Small Business Stock,
        under IRC Section 1202 — gives founders up to $15M in tax-free capital
        gains on exit. Florida&apos;s no-income-tax status means zero state tax on
        top of that.
      </p>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        The federal government doesn&apos;t just buy from small businesses — it funds
        them. Through grants, loans, and government-backed investment programs,
        federal agencies put capital directly into startups and small businesses.
        For an AI/web development company like Point11, the most relevant
        programs fall into three categories: non-dilutive grants, meaning free
        money you don&apos;t pay back; SBA-backed loans with favorable terms; and
        government-backed equity investment through venture capital funds with
        SBA involvement. The key distinction from selling: these programs fund
        your company&apos;s growth and R&amp;D, not specific deliverables for an agency.
        You&apos;re not building a chatbot for the VA — you&apos;re getting capital to
        develop your technology, hire, and scale.
      </p>

      <Accordion type="multiple" className="w-full">
        {/* 3.1 Grants */}
        <AccordionItem value="grants">
          <AccordionTrigger>Grants (Non-Dilutive Funding)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Grants are the most attractive form of government capital: free
                money with no repayment and no equity dilution. The trade-off is
                competition and paperwork.
              </p>

              <h4 className="font-medium text-foreground">
                SBIR/STTR — Small Business Innovation Research and Small Business
                Technology Transfer
              </h4>
              <p>
                A closely related program that requires partnering with a
                university or research institution. The most directly relevant
                federal grant program for an AI startup. Eleven federal agencies
                set aside a portion of their R&amp;D budgets for small businesses
                through SBIR. The structure is phased: Phase I grants
                ($150K–$300K depending on agency) prove a concept over 6–12
                months. Phase II grants ($750K–$1.75M) develop the technology
                over 2 years. Phase III is the commercialization stage — and
                Phase III carries unlimited sole-source contracting rights with
                any federal agency.
              </p>
              <p>
                For Point11, NSF — the National Science Foundation, the federal
                agency that funds basic and applied research — and VA are the
                most relevant agencies. NSF&apos;s SBIR program specifically funds AI,
                NLP, and machine learning startups. The VA funds technology that
                serves veterans. A Phase I proving an AI chatbot or voice agent
                approach would cost the government $250K and could unlock
                millions in Phase III sole-source follow-on work.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Critical caveat (February 2026):
                </span>{" "}
                SBIR/STTR statutory authority lapsed on October 1, 2025 — no new
                solicitations or awards until Congress reauthorizes.
                Reauthorization is expected. Point11 should prepare application
                materials now and monitor sbir.gov.
              </p>

              <h4 className="font-medium text-foreground">
                Other federal grant sources
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    Grants.gov
                  </span>{" "}
                  — The central portal for all federal grant opportunities across
                  26 agencies. Not startup-specific, but the authoritative
                  source. Search for AI, technology, and digital services
                  opportunities.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    NSF Convergence Accelerator
                  </span>{" "}
                  — Larger grants ($750K Phase I, up to $5M Phase II) for
                  use-inspired research. More competitive but larger awards.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    DOD / CDAO Tradewind
                  </span>{" "}
                  — The Chief Digital and AI Office, the Pentagon&apos;s central
                  authority for AI and data, runs challenge-based procurements
                  for AI startups through Other Transaction Authority. Not a
                  traditional grant, but functions similarly — no past
                  performance required, no GSA Schedule needed.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Broad Agency Announcements (BAAs)
                  </span>{" "}
                  — Standing invitations from agencies for innovative solutions.
                  If an agency likes your pitch, they fund a pilot. VA, DHS, and
                  HHS all maintain active BAAs.
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3.2 Loans */}
        <AccordionItem value="loans">
          <AccordionTrigger>Loans (SBA-Backed Debt)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The SBA doesn&apos;t lend directly — it guarantees loans made by
                private lenders, reducing the bank&apos;s risk and making capital
                available to businesses that might not otherwise qualify. SBA
                loans offer lower down payments, longer repayment terms, and more
                flexible requirements than conventional bank loans.
              </p>

              <h4 className="font-medium text-foreground">
                SBA 7(a) Loan Program
              </h4>
              <p>
                The SBA&apos;s primary business loan program. Up to $5M for working
                capital, equipment, hiring, or general business purposes.
                Variable and fixed rate options with terms up to 10 years for
                working capital and 25 years for real estate. The SBA guarantees
                75–85% of the loan, which is why banks will lend to businesses
                they&apos;d otherwise reject.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Key 2025–2026 changes:
                </span>{" "}
                SBA tightened underwriting standards in June 2025 under SOP 50 10
                8, the SBA&apos;s Standard Operating Procedure manual that governs how
                lenders process SBA-guaranteed loans. The &quot;Do What You Do&quot;
                framework that let lenders apply their own standards was
                eliminated. New requirements include a reinstated personal
                resources test where lenders check if owners have liquid assets
                to substitute for the loan, mandatory 10% cash injection for
                startups, minimum SBSS credit score of 165 — SBSS is the Small
                Business Scoring Service, a credit scoring model used
                specifically for SBA loan applications — and tax transcript
                verification for all loans. All owners must be U.S. citizens,
                nationals, or lawful permanent residents. Maximum 7(a) Small Loan
                amount was reduced from $500K to $350K.
              </p>
              <p>
                For a two-person AI startup, the 7(a) is most useful once
                Point11 has some revenue and needs working capital to hire. The
                10% cash injection and personal resources test mean founders need
                skin in the game.
              </p>

              <h4 className="font-medium text-foreground">
                SBA 504 Loan Program
              </h4>
              <p>
                Long-term, fixed-rate financing for major assets — real estate,
                equipment, construction. Less relevant for a software company in
                year one, but useful later if Point11 needs office space or
                significant infrastructure.
              </p>

              <h4 className="font-medium text-foreground">
                SBA Microloan Program
              </h4>
              <p>
                Loans up to $50K through nonprofit intermediary lenders. Designed
                for startups and very small businesses. Lower documentation
                requirements than 7(a). Good for early working capital — a
                $25K–$50K microloan can fund a few months of operations while
                pursuing federal subcontracts. Some microloan intermediaries also
                provide business counseling and technical assistance.
              </p>

              <h4 className="font-medium text-foreground">
                Community Development Financial Institutions (CDFIs)
              </h4>
              <p>
                Not SBA programs, but federally funded. CDFIs are mission-driven
                lenders that serve underserved communities and businesses that
                can&apos;t access conventional financing. They offer small business
                loans, microloans, and sometimes equity investments. Find CDFIs
                at ofn.org.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3.3 Government-Backed Equity */}
        <AccordionItem value="equity">
          <AccordionTrigger>
            Government-Backed Equity Investment
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-medium text-foreground">
                Small Business Investment Company (SBIC) Program
              </h4>
              <p>
                The SBIC program is a public-private partnership where
                SBA-licensed private equity and venture capital funds invest in
                small businesses using a combination of private capital and
                SBA-guaranteed leverage — borrowed money. There are currently
                300+ licensed SBICs managing $53B in combined capital, a record
                as of FY2025. SBICs invest in a broad range of industries,
                stages, and geographies — some specialize in early-stage tech.
              </p>
              <p>
                How it works for Point11: You don&apos;t apply to the SBA for SBIC
                funding. You pitch SBIC-licensed funds the same way you&apos;d pitch
                any VC — but these funds have a mandate to invest in small
                businesses and access to SBA leverage that makes them more
                willing to fund earlier-stage companies. The full directory is at
                sba.gov/sbic; the Small Business Investor Alliance (sbia.org)
                also maintains a searchable list.
              </p>

              <h4 className="font-medium text-foreground">
                SBIC Critical Technologies Initiative (SBICCT)
              </h4>
              <p>
                The highest-fit funds for Point11. The DoD and SBA launched the
                SBICCT Initiative in 2023 to channel private capital into 14
                critical technology areas, including &quot;trusted AI and autonomy&quot;
                and &quot;advanced computing and software.&quot; The first cohort of 18
                SBA-licensed funds collectively plans to invest $4B+ in 1,700+
                portfolio companies. Each fund can access up to $175M in
                SBA-guaranteed leverage. Three funds in the first cohort are
                directly relevant to Point11:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">Fund</th>
                      <th className="py-2 pr-4 font-medium text-foreground">Focus</th>
                      <th className="py-2 pr-4 font-medium text-foreground">Stage</th>
                      <th className="py-2 pr-4 font-medium text-foreground">Check Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">New North Ventures Fund II</td>
                      <td className="py-2 pr-4">AI/ML, cybersecurity, dual-use tech</td>
                      <td className="py-2 pr-4">Pre-seed to Series A</td>
                      <td className="py-2 pr-4">$500K–$3M</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Snowpoint Ventures II</td>
                      <td className="py-2 pr-4">AI/ML, cybersecurity, advanced computing</td>
                      <td className="py-2 pr-4">Pre-seed to Series A</td>
                      <td className="py-2 pr-4">$500K–$3M</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Moonshots Capital</td>
                      <td className="py-2 pr-4">Defensible tech, veteran-led teams</td>
                      <td className="py-2 pr-4">Early stage</td>
                      <td className="py-2 pr-4">Varies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Point11&apos;s AI + government technology focus maps directly to
                SBICCT&apos;s &quot;trusted AI and autonomy&quot; CTA — Critical Technology
                Area, one of 14 technology domains the DoD has identified as
                national security priorities. The pitch angle is strong: Point11
                builds AI tools for federal agencies, which is exactly what these
                funds are mandated to invest in. For program-level questions,
                contact the DoD Office of Strategic Capital at
                osd.pentagon.ousd-r-e.mbx.fundfinance@mail.mil. For investment
                inquiries, contact the individual funds directly.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Recent developments:
                </span>{" "}
                SBA finalized a modernization rule effective February 2, 2026,
                reducing barriers for fund managers and further encouraging
                investment in critical technologies. The rule aligns with
                Executive Orders 14241 and 14272, which prioritize advanced
                technology investment.
              </p>

              <h4 className="font-medium text-foreground">
                State Small Business Credit Initiative (SSBCI) — Venture Capital
                Programs
              </h4>
              <p>
                SSBCI is a nearly $10B federal program, reauthorized under the
                American Rescue Plan Act, that distributes capital to states,
                which then deploy it through locally designed programs including
                venture capital funds. Florida has received $488M+ in SSBCI
                funding and has already deployed over $250M to 220 businesses.
              </p>
              <p>
                Florida&apos;s SSBCI venture capital program is administered through
                the Florida Opportunity Fund. It provides direct equity
                investments to startups, with a focus on underserved communities
                and founders. This is real venture capital backed by federal
                dollars flowing through state channels. Contact:
                FloridaJobs.org/SSBCI or SSBCI@DEO.MyFlorida.com
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3.4 Where to Find */}
        <AccordionItem value="sources">
          <AccordionTrigger>
            Where to Find Federal Capital Opportunities
          </AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto text-sm text-muted-foreground">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-medium text-foreground">Source</th>
                    <th className="py-2 pr-4 font-medium text-foreground">Type</th>
                    <th className="py-2 pr-4 font-medium text-foreground">URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">SBIR.gov</td>
                    <td className="py-2 pr-4">Grants (SBIR/STTR)</td>
                    <td className="py-2 pr-4">sbir.gov</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">Grants.gov</td>
                    <td className="py-2 pr-4">All federal grants</td>
                    <td className="py-2 pr-4">grants.gov</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">SBA Lender Match</td>
                    <td className="py-2 pr-4">Loans (7(a), 504, Microloan)</td>
                    <td className="py-2 pr-4">sba.gov/lendermatch</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">SBA SBIC Directory</td>
                    <td className="py-2 pr-4">Equity investment</td>
                    <td className="py-2 pr-4">sba.gov/sbic</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">CDAO Tradewind</td>
                    <td className="py-2 pr-4">DOD AI funding</td>
                    <td className="py-2 pr-4">tradewindai.com</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4">SSBCI Program List</td>
                    <td className="py-2 pr-4">State-deployed federal capital</td>
                    <td className="py-2 pr-4">home.treasury.gov/ssbci</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 3.5 Timeline */}
        <AccordionItem value="timeline">
          <AccordionTrigger>Timeline</AccordionTrigger>
          <AccordionContent>
            <div className="overflow-x-auto text-sm text-muted-foreground">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 font-medium text-foreground">When</th>
                    <th className="py-2 pr-4 font-medium text-foreground">What</th>
                    <th className="py-2 pr-4 font-medium text-foreground">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Week 1–2</td>
                    <td className="py-2 pr-4">Register on SAM.gov and Grants.gov (required for all federal grants)</td>
                    <td className="py-2 pr-4">In the system</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 1</td>
                    <td className="py-2 pr-4">Research SBIC funds investing in AI/govtech; begin outreach</td>
                    <td className="py-2 pr-4">Equity pipeline</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 1–2</td>
                    <td className="py-2 pr-4">Contact Florida SSBCI venture capital program</td>
                    <td className="py-2 pr-4">State-deployed federal capital</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 1–3</td>
                    <td className="py-2 pr-4">Explore SBA Microloan for early working capital</td>
                    <td className="py-2 pr-4">Bridge funding</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 2–4</td>
                    <td className="py-2 pr-4">Prepare SBIR Phase I application materials (NSF AI topic, VA)</td>
                    <td className="py-2 pr-4">Ready when reauthorized</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 whitespace-nowrap">Month 6+</td>
                    <td className="py-2 pr-4">Evaluate SBA 7(a) once revenue is established</td>
                    <td className="py-2 pr-4">Growth capital</td>
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
