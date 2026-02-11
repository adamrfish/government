"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="mt-2 text-muted-foreground">
          How the federal procurement ecosystem works and where Point11 fits in.
        </p>
      </div>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="market-size">
          <AccordionTrigger className="text-base">
            The US Government is the largest customer on earth
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The federal government spends $141 billion a year on IT &mdash;
              $76.8B on the civilian side and roughly $66B on defense.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="small-biz-setaside">
          <AccordionTrigger className="text-base">
            23% of federal contracts are set aside for small businesses
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The Small Business Act (SBA) sets a goal of federal prime contract
              dollars going to small businesses. Agencies are publicly graded on
              it and consistently meet it. A small business is one under $35M in
              annual revenue.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="350k-setaside">
          <AccordionTrigger className="text-base">
            Contracts under $350K are set aside for small businesses entirely
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Contracts under $350K are set aside for small businesses entirely
              and don&rsquo;t have to compete with giants like Deloitte and
              General Dynamics.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="decentralized">
          <AccordionTrigger className="text-base">
            Spending is decentralized across federal agencies
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Each agency has its own Chief Information Officer (CIO), its own IT
              budget, and its own procurement office. Congress funds agencies at
              the program and account level: Only a few agencies have a dedicated
              IT account. Most IT spend is discretionary to achieve the
              agency&rsquo;s mission.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contract-vehicles">
          <AccordionTrigger className="text-base">
            Anyone can sell to the federal government, but vendors can gain
            competitive advantages
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The broadest is the
              GSA MAS (Multiple Award Schedule), a pre-negotiated commercial
              catalog run by the General Services Administration that any agency
              can buy from &mdash; think of it as a government Amazon
              marketplace. For more specialized, mission-driven work, agencies
              can set up their own IDIQs (Indefinite Delivery/Indefinite Quantity
              contracts), which establish curated vendor pools in a specific
              domain; these are harder to win because they weight technical
              capability and past performance heavily. GWACs (Government-Wide
              Acquisition Contracts) are a special type of IDIQ limited to IT by
              statute, operated by only a few agencies like GSA and NIH, but
              available for any federal agency to order from &mdash; well-known
              examples include Alliant 2 and 8(a) STARS III. The system is
              deliberately diverse. (See table)
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="agency-vehicles">
          <AccordionTrigger className="text-base">
            Many agencies buy off their own contract vehicles
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Large agencies often prefer to buy from their own pre-competed
              contracts rather than the open market or the GSA Schedule. The Navy
              uses SeaPort-NxG &mdash; if you don&rsquo;t have this contract or
              a partner who does, you&rsquo;re effectively locked out of most
              Navy professional service work. NASA uses SEWP (Solutions for
              Enterprise-Wide Procurement). The FAA uses eFAST. The VA uses T4NG2
              (Transformation Twenty-One Total Technology Next Generation).
              Always ask your target agency: &ldquo;What vehicle do you use for
              this type of IT service?&rdquo; Don&rsquo;t assume they use GSA.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sam-gov">
          <AccordionTrigger className="text-base">
            Some contracts are posted publicly on SAM.gov
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              While SAM.gov lists major solicitations, the actual interaction and
              proposal submission often happen on separate, third-party sites.
              Civilian agencies (DHS, Energy, EPA) often use FedConnect or Unison
              Marketplace &mdash; you must register on these specific sites to
              view full bid documents or submit questions. The Department of
              Defense uses the PIEE (Procurement Integrated Enterprise
              Environment) suite, a secure, closed loop for the military. The
              Intelligence Community (NSA, CIA) typically doesn&rsquo;t use
              SAM.gov for sensitive work at all &mdash; they use the ARC
              (Acquisition Resource Center), which requires specific registration
              and often classified sponsorship to even view opportunities. GSA
              eBuy is another major closed channel &mdash; an online portal where
              agencies post task orders and RFQs specifically for vendors who
              already hold a GSA Schedule or GWAC (Government-Wide Acquisition
              Contract).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="usaspending">
          <AccordionTrigger className="text-base">
            All spend can be reverse engineered from USAspending.gov
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Nearly every award over $25K is reported publicly after the fact:
              vendor name, award amount, awarding agency, contracting office,
              NAICS code, contract type, period of performance, place of
              performance, whether it was competitive or sole-source, and often
              the contracting officer&rsquo;s name. The only exceptions are
              classified contracts.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="competition">
          <AccordionTrigger className="text-base">
            Not all projects go through a competitive bidding process
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Micropurchases under $15K require no competition at all, between
              $15K and $350K, simplified acquisitions are posted on SAM.gov with
              streamlined requirements and a mandatory small business set-aside.
              Task orders on existing IDIQs are competed only among vendors
              already on the vehicle and are never posted publicly &mdash; SPRUCE
              task orders for AI and web modernization, for example, are competed
              among just 10 primes. Sole-source contracts skip competition
              entirely and are available through certifications (more below).
              Finally, Other Transaction Authorities (OTAs) bypass traditional
              procurement altogether and are increasingly used for AI and
              emerging tech &mdash; no past performance required.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="subcontracting">
          <AccordionTrigger className="text-base">
            Vendors can sell direct or subcontract through a prime
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The two highest-fit opportunities right now are subcontracting on
              the $29M VA AI chatbot project, where Oddball and CivicActions are
              primes. CMS (Centers for Medicare and Medicaid services) has $122M+
              in active web modernization contracts. On the VA project, the
              primes are required to be veteran owned businesses, but their
              subcontractors do not need to be, which means Point11 can
              subcontract in.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="naics">
          <AccordionTrigger className="text-base">
            NAICS Codes classify what you sell to the government
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The North American Industry Classification System &mdash; is the
              classification system for the entire U.S. economy, contracting
              officers must assign exactly one NAICS code to every solicitation,
              contract, and task order above the $10K micro-purchase threshold.
              The ones relevant to Point11 are below and account for roughly
              $5.85B in annual small business spend.
            </p>
            <div className="overflow-x-auto rounded-lg border mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">
                      NAICS Code
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Est. Annual Value
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      3-Year Growth
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      Largest Primes (Est. Revenue)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono">541519</td>
                    <td className="px-4 py-3">
                      Other Computer Related Services
                    </td>
                    <td className="px-4 py-3">$25&ndash;35B</td>
                    <td className="px-4 py-3 text-muted-foreground">&minus;8%</td>
                    <td className="px-4 py-3">
                      <ul className="list-none space-y-0.5">
                        <li>Leidos ($4&ndash;5B)</li>
                        <li>SAIC ($4&ndash;5B)</li>
                        <li>General Dynamics IT ($3&ndash;3.5B)</li>
                        <li>Peraton ($2.5&ndash;3B)</li>
                        <li>ManTech ($1.5&ndash;2B)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono">541512</td>
                    <td className="px-4 py-3">
                      Computer Systems Design Services
                    </td>
                    <td className="px-4 py-3">$20&ndash;30B</td>
                    <td className="px-4 py-3 text-muted-foreground">+62%</td>
                    <td className="px-4 py-3">
                      <ul className="list-none space-y-0.5">
                        <li>Booz Allen Hamilton ($4&ndash;5B)</li>
                        <li>Leidos ($2.5&ndash;3B)</li>
                        <li>CACI International ($2&ndash;2.5B)</li>
                        <li>Accenture Federal Services ($2&ndash;2.5B)</li>
                        <li>Deloitte Federal ($1.5&ndash;2B)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">541511</td>
                    <td className="px-4 py-3">
                      Custom Computer Programming Services
                    </td>
                    <td className="px-4 py-3">$18&ndash;25B</td>
                    <td className="px-4 py-3 text-muted-foreground">+43%</td>
                    <td className="px-4 py-3">
                      <ul className="list-none space-y-0.5">
                        <li>Booz Allen Hamilton ($2.5&ndash;3B)</li>
                        <li>CACI International ($2&ndash;2.5B)</li>
                        <li>Accenture Federal Services ($1.5&ndash;2B)</li>
                        <li>SAIC ($1.5&ndash;2B)</li>
                        <li>Leidos ($1.5&ndash;2B)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="demand">
          <AccordionTrigger className="text-base">
            Point11 services are in high demand
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              An August 2025 executive order, EO 14338, launched
              &ldquo;America by Design&rdquo; and directed federal agencies to
              begin modernizing federal .gov websites, with initial results due
              by July 4, 2026. It isn&rsquo;t producing centralized procurements
              from NDS (the National Design Studio, which Trump created and
              guides agencies and is run by AirBnb cofounder), but it is creating
              agency-level buying pressure. In April 2025, OMB &mdash; the
              Office of Management and Budget, &mdash; directed every agency to
              accelerate AI deployment. The AI mandate is actively funded through
              agency IT budgets.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fiscal-year">
          <AccordionTrigger className="text-base">
            Spending is &ldquo;use it or lose it&rdquo; at fiscal year end
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The federal fiscal year runs October through September, and
              appropriated funds expire if unspent.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="state-opportunities">
          <AccordionTrigger className="text-base">
            Federal mandates create state level opportunities
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              By April 24, 2026, the Americans with Disabilities Act requires
              all state and local government websites to meet WCAG 2.1 AA
              accessibility standards. WCAG &mdash; Web Content Accessibility
              Guidelines &mdash; is the international standard for making
              websites usable by people with disabilities. Many state sites
              aren&rsquo;t compliant yet.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="go-to-market">
          <AccordionTrigger className="text-base">
            Point11 can start with subcontracting and help primes meet
            requirements
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Agencies evaluate bidders on what they&rsquo;ve already done for
              the government. Subcontracting solves this. For subcontracting, the
              relationship is with the prime, not the government. Identify which
              primes hold spots on the vehicles you care about. This is done
              through a &ldquo;Teaming&rdquo; agreement. Start as a
              subcontractor on existing IDIQs while pursuing a GSA Schedule in
              parallel. Reach out directly to their business development or
              partnerships team. Primes are generally looking for subs with niche
              capabilities, especially to meet their small business
              subcontracting goals, which are contractually required on large
              contracts.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
