"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OpportunitiesPage() {
  return (
    <div className="mx-auto max-w-3xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Current Opportunities</h1>
        <p className="mt-2 text-muted-foreground">
          Top 5 Opportunities — February 2026
        </p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        The first three are subcontracting plays — approach the prime, offer to
        do a portion of the work. The last two are emerging procurements to
        track.
      </p>

      <Accordion type="multiple" className="w-full">
        {/* Top 5 Opportunities */}
        <AccordionItem value="spruce-oddball">
          <AccordionTrigger>
            1. VA SPRUCE — AI Chatbot &amp; Voicebot (Sub to Oddball)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Oddcore JV holds $15M for VA.gov Chatbot and $14M for VA.gov
                Voicebot on SPRUCE. A JV — Joint Venture — is a formal
                partnership between two or more companies that bid and perform on
                government contracts together. Oddcore is Oddball + Wilcore. They
                also won $6.1M in VBS — Veterans Benefits Services — follow-on
                work in December 2025 and $13M for MyVA/Profile Digital Services.
                This is the highest-fit opportunity for Point11&apos;s AI
                capabilities. Oddball is a ~100-person SDVOSB that runs like a
                tech startup. They need AI and NLP engineering talent — NLP is
                Natural Language Processing, the branch of AI that enables
                computers to understand and generate human language.
              </p>
              <p className="text-xs text-muted-foreground/70">
                → Prime: Oddball · Vehicle: SPRUCE IDIQ, 36C10B24R0005 · Awards:
                OrangeSlices AI
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cms-wecms">
          <AccordionTrigger>
            2. CMS WECMS 2.0 — Web Modernization (Sub to CivicActions)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                CivicActions holds $72M for CMS.gov, Healthcare.gov, and
                Medicare.gov maintenance and modernization, plus $44M for NSF.
                The current stack is Drupal-heavy — Drupal is an open-source
                content management system widely used in government. But CMS is
                moving toward headless architectures, where the front-end website
                is decoupled from the back-end content system, allowing modern
                frameworks like React. That shift means they need React and
                modern frontend developers. CivicActions is a ~100-person
                remote-first firm.
              </p>
              <p className="text-xs text-muted-foreground/70">
                → Prime: CivicActions · Contract details: FPDS
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="spruce-benefits">
          <AccordionTrigger>
            3. VA SPRUCE — Benefits &amp; Digital Experience (Sub to Agile Six,
            Coforma, or Bixal)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Three SPRUCE primes have won $80M+ in recent task orders for VA
                benefits platforms and digital experience: Agile Six with $26M
                for Cross Benefits and $15M for Financial Management, Coforma
                with $32M for Lifestage Benefits, and Bixal through the AVB
                Digital II JV. All need React/Next.js developers, accessibility
                specialists, and AI capability. All are small firms actively
                hiring subs.
              </p>
              <p className="text-xs text-muted-foreground/70">
                → Primes: Agile Six · Coforma · Bixal · Vehicle: SPRUCE IDIQ
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="america-by-design-top5">
          <AccordionTrigger>
            4. America by Design — Federal Website Modernization (Track — with
            caveats)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                EO 14338 — an Executive Order, which is a directive from the
                President to federal agencies that carries the force of law
                within the executive branch but can be rescinded by a future
                president — was signed August 21, 2025. It created the National
                Design Studio and directed modernization of federal .gov
                websites, with &quot;initial results&quot; by July 4, 2026. Joe
                Gebbia, Airbnb co-founder, leads the effort as Chief Design
                Officer.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Important reality check:
                </span>{" "}
                as of February 2026, no centralized RFPs, BPAs, or SAM.gov
                solicitations exist for this initiative. NDS is a ~30-person
                in-house team using direct hires, Silicon Valley recruits, and AI
                automation through Figma Make — an AI-powered design tool that
                generates website layouts from text prompts — not traditional
                procurement. Gebbia has narrowed the practical focus to the
                &quot;10 most-visited sites.&quot;
              </p>
              <p>
                The real opportunity is not centralized NDS contracts. It&apos;s
                agency-level panic procurement — individual agencies scrambling
                to show compliance by July 4. Monitor SAM.gov under NAICS
                541511/541512/541519 and target the HISPs with the worst web
                performance. HISPs — High Impact Service Providers — are the 38
                agencies OMB has designated as delivering the most critical
                public-facing services. See the America by Design deep dive
                section below for full analysis.
              </p>

              <h4 className="font-medium text-foreground text-xs mt-4">
                Chief Design Officer of the United States
              </h4>
              <p>
                On August 21, 2025, President Trump signed EO 14338,
                establishing the &quot;America by Design&quot; initiative and
                creating a brand-new federal role: Chief Design Officer (CDO).
                Airbnb co-founder Joe Gebbia was appointed as the inaugural CDO.
                The position reports directly to White House Chief of Staff Susie
                Wiles, with an office in the Eisenhower Executive Office
                Building. The National Design Studio (NDS) operates under the CDO
                within the Executive Office of the President and is authorized
                for three years, sunsetting August 2028.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  What&apos;s actually happening:
                </span>{" "}
                The &quot;26,000+&quot; website figure comes from public
                statements by David Sacks and Gebbia, not the EO text. A formal
                inventory found ~7,200 agency websites; the rest are sub-sites
                and microsites. By November 2025, Gebbia had narrowed the
                practical focus to the &quot;10 most-visited sites.&quot;
              </p>
              <p>
                NDS has ~30 people. For context, the UK&apos;s Government Digital
                Service took a decade to modernize a smaller government&apos;s
                digital services with a much larger team. And the agency that
                would normally help execute a mandate like this is gone: 18F —
                the 90-person GSA team that created USWDS and completed 450+
                projects — was eliminated in March 2025.
              </p>
              <p>
                NDS is bypassing traditional procurement. Work is done by an
                in-house team of direct hires and Silicon Valley IPA recruits —
                IPA stands for Intergovernmental Personnel Act, a mechanism that
                lets the government temporarily hire private-sector employees —
                supplemented by AI-automated redesigns. No centralized RFPs or
                SAM.gov solicitations exist. Early output has been promotional
                landing pages like TrumpCard.gov and SafeDC.gov rather than core
                service redesigns — and these sites failed their own Section 508
                accessibility audits. The EO has no dedicated budget or
                congressional appropriation.
              </p>
              <p className="text-xs text-muted-foreground/70">
                → Track: SAM.gov Opportunities · Background: National Design
                Studio · Federal News Network
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hhs-swift">
          <AccordionTrigger>
            5. HHS SWIFT BPA — Grants.gov Modernization (Track)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                The $100M SWIFT BPA covers Grants.gov and HHS digital services. A
                BPA — Blanket Purchase Agreement — is a simplified contract
                vehicle that establishes terms with multiple vendors, then issues
                individual &quot;call orders&quot; as needs arise. Six primes were
                awarded: Agile Six, Nava, Ad Hoc, and others. First call order:
                Agile Six, $10.6M. Second: Nava, $39M. More call orders are
                coming over the 5-year BPA. Sub to any of these primes, or
                monitor for on-ramps — periodic opportunities for new vendors to
                join an existing contract vehicle that was previously closed to
                new entrants.
              </p>
              <p className="text-xs text-muted-foreground/70">
                → Primes: Nava PBC (Public Benefit Corporation) · Ad Hoc · Agile
                Six · Awards: OrangeSlices AI
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 1.5.1 Opportunity Size */}
        <AccordionItem value="opportunity-size">
          <AccordionTrigger>Federal Detailed Analysis — Opportunity Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Two White House directives are driving federal IT spend: AI
                adoption and website modernization. The AI mandate is producing
                task orders now through existing contract vehicles. The website
                modernization mandate under EO 14338 faces a July 4, 2026
                deadline but has no dedicated budget and is not generating
                centralized procurements — instead, individual agencies are
                scrambling to show compliance using their own IT budgets and
                existing vehicles.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-lg border p-3 text-center">
                  <p className="text-lg font-bold text-foreground">$141B</p>
                  <p className="text-xs">Federal IT Spend (FY2025)</p>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <p className="text-lg font-bold text-foreground">1,757</p>
                  <p className="text-xs">Agency AI Use Cases (2024)</p>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <p className="text-lg font-bold text-foreground">$740M</p>
                  <p className="text-xs">Small Biz AI Contracts (FY24)</p>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <p className="text-lg font-bold text-foreground">~7,200</p>
                  <p className="text-xs">Agency Websites (26K+ cited)</p>
                </div>
              </div>

              <h4 className="font-medium text-foreground">AI Adoption</h4>
              <p>
                OMB M-25-21 and M-25-22, issued in April 2025, direct agencies
                to designate Chief AI Officers, publish AI strategies, and
                maximize use of American AI systems. Federal AI use cases more
                than doubled in one year — from 710 reported in 2023 to 1,757 in
                2024 across 37 agencies, per OMB&apos;s consolidated inventory.
                DHS reported a 136% increase in disclosed use cases and
                introduced DHSChat, an internal generative AI chatbot. The VA has
                $29M in active task orders for AI chatbots and voicebots on
                VA.gov — contracts signed, work executing today. GSA purchased AI
                models from OpenAI, Anthropic, Google, and xAI for every agency —
                but agencies now need someone to build and deploy the interfaces
                on top of them. The majority of federal AI spend is
                defense-focused — civilian agencies are underserved and growing
                rapidly.
              </p>

              <h4 className="font-medium text-foreground">
                Website Modernization
              </h4>
              <p>
                The 21st Century IDEA Act requires all executive branch websites
                to be mobile-friendly, accessible, USWDS-compliant, and
                encrypted. EO 14338, signed in August 2025, created the National
                Design Studio and directed modernization of federal .gov websites
                with initial results due July 4, 2026. Current state: fewer than
                20% of federal sites use USWDS, only 6% score &quot;good&quot; on
                mobile, and 45% aren&apos;t mobile-friendly at all. A September
                2024 report from GAO — the Government Accountability Office —
                found only one-third of major agencies had made progress on all
                eight IDEA Act requirements.
              </p>
              <p>
                <span className="font-medium text-foreground">
                  Critical context:
                </span>{" "}
                No centralized RFPs or SAM.gov solicitations exist for America by
                Design. NDS is bypassing traditional procurement with a
                ~30-person in-house team, direct hires from Silicon Valley, and
                AI-automated redesigns. 18F was eliminated in March 2025, and GSA
                TTS was cut by 50%. The opportunity for Point11 is agency-level —
                individual agencies will need help meeting the deadline using
                existing contract vehicles. CMS awarded $50M+ for cloud
                migration. USDA, Education, and NSF have active rebuilds. See the
                America by Design deep dive below.
              </p>

              <h4 className="font-medium text-foreground">Why Now</h4>
              <p>
                DOGE-driven contract cancellations have disrupted incumbents.
                DOGE — the Department of Government Efficiency — is the Trump
                administration&apos;s initiative to cut federal spending and
                reduce the size of government. Accenture reported losing federal
                contracts, and DOD alone canceled roughly $5B across its
                contractor base. But the disruption is broad: an estimated 37% of
                de-obligated dollars were small business contracts. De-obligation
                means the government pulled back funds that had been committed to
                a contract. New procurement actions have slowed across agencies.
                The administration favors measurable outcomes over advisory-heavy
                consulting, which could benefit small firms delivering working
                software.
              </p>

              <h4 className="font-medium text-foreground">
                Relevant Service Areas
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Service Area
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Active Contracts
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Typical Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">AI Agent Deployment</td>
                      <td className="py-2 pr-4">
                        $29M VA chatbot/voicebot, $81M SSA automation, $40M+ HHS
                        AI
                      </td>
                      <td className="py-2 pr-4">$500K – $15M</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Web Modernization</td>
                      <td className="py-2 pr-4">
                        CMS $72M WECMS 2.0, NSF $44M, USDA/Education rebuilds
                      </td>
                      <td className="py-2 pr-4">$500K – $10M+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">
                        Site Speed &amp; Core Web Vitals
                      </td>
                      <td className="py-2 pr-4">
                        Bundled with web modernization
                      </td>
                      <td className="py-2 pr-4">Included above</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <span className="font-medium text-foreground">FedRAMP:</span>{" "}
                Required if deploying proprietary AI tools on federal systems.
                FedRAMP 20x is prioritizing AI authorizations. Near-term: build
                on already-authorized platforms like AWS GovCloud and Azure
                Government to inherit security controls.
              </p>

              <h4 className="font-medium text-foreground">Target Agencies</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">VA</span> —
                  Largest civilian IT budget: $6.2B. Actively rebuilding VA.gov.
                  $29M in active AI chatbot/voicebot contracts under the SPRUCE
                  IDIQ — a $2.4B vehicle set aside 100% for SDVOSBs, with $200M+
                  in active task orders. VA earned an &quot;A&quot; on SBA&apos;s
                  FY2024 Scorecard: $10.2B — 23% — to small businesses.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    HHS / CMS
                  </span>{" "}
                  — Runs HealthCare.gov, Medicare.gov, and dozens of health
                  program sites. CivicActions holds $72M for WECMS 2.0. ICF
                  holds $50M+ for digital modernization. Active subcontracting
                  needs for modern frontend and AI capabilities.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    GSA / TTS
                  </span>{" "}
                  — TTS is Technology Transformation Services. It historically
                  ran the federal web modernization mission and built USWDS.
                  However, 18F was eliminated in March 2025, and TTS was cut by
                  50%. GSA is now focused on OneGov, centralizing procurement and
                  negotiating directly with OEMs. Reduced capacity creates
                  opportunities for outside contractors.
                </li>
              </ol>

              <h4 className="font-medium text-foreground">
                Compliance Requirements
              </h4>
              <p className="font-medium text-foreground text-xs">
                Pass/fail. Meet them or you&apos;re disqualified.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">USWDS</span> —
                  The government&apos;s standardized design framework. All new
                  federal websites must use it.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Section 508 / WCAG 2.1 AA
                  </span>{" "}
                  — Federal accessibility law. Must produce a VPAT. Get 1–2
                  people Trusted Tester certified (free DHS certification).
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    FISMA / NIST 800-53
                  </span>{" "}
                  — Must work within agency security boundaries. No ATO needed
                  yet but must speak the language in proposals.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    AI Governance — NIST AI RMF
                  </span>{" "}
                  — AI impact assessments and inventories required under
                  M-25-21/M-25-22. Growing differentiator.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    FedRAMP 20x
                  </span>{" "}
                  — Required for proprietary AI on federal systems. Near-term:
                  build on pre-authorized platforms.
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 1.5.2 Direct Sales */}
        <AccordionItem value="direct-sales">
          <AccordionTrigger>Direct Sales</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Point11 bids on and wins contracts directly — no prime
                contractor. Requires a GSA Schedule or responding to open
                solicitations on SAM.gov. Slower to start, but eliminates the
                15–30% prime markup and builds the strongest past performance.
              </p>

              <h4 className="font-medium text-foreground">Contract Vehicles</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Vehicle
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Ceiling
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Status
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">GSA MAS (54151S)</td>
                      <td className="py-2 pr-4">$45B+/yr</td>
                      <td className="py-2 pr-4">Open enrollment</td>
                      <td className="py-2 pr-4">
                        Essential entry point. Apply now.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">OASIS+ Phase II</td>
                      <td className="py-2 pr-4">No ceiling</td>
                      <td className="py-2 pr-4">
                        Launched Jan 2026, continuous on-ramp
                      </td>
                      <td className="py-2 pr-4">
                        &quot;Best-in-class&quot; — OMB encourages agencies to
                        use it. All agencies including DoD.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Polaris GWAC</td>
                      <td className="py-2 pr-4">No ceiling</td>
                      <td className="py-2 pr-4">
                        SB pool awarded Dec 2024
                      </td>
                      <td className="py-2 pr-4">
                        102 vendors. AI, cloud, software dev. Monitor for
                        on-ramps.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">CIO-SP3</td>
                      <td className="py-2 pr-4">Extended</td>
                      <td className="py-2 pr-4">Active through April 2027</td>
                      <td className="py-2 pr-4">
                        CIO-SP4 ($50B successor) was canceled January 2026.
                        CIO-SP3 extended as bridge.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Alliant 2</td>
                      <td className="py-2 pr-4">$50B</td>
                      <td className="py-2 pr-4">Active</td>
                      <td className="py-2 pr-4">
                        Many task orders recompeting 2026. Sub to Alliant 2
                        primes for access.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">VA T4NG2</td>
                      <td className="py-2 pr-4">$60.7B</td>
                      <td className="py-2 pr-4">Final RFP expected 2026</td>
                      <td className="py-2 pr-4">
                        Requires past performance. Build via subcontracting
                        first.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">8(a) STARS III</td>
                      <td className="py-2 pr-4">$50B</td>
                      <td className="py-2 pr-4">Active</td>
                      <td className="py-2 pr-4">
                        8(a) firms only. Sole-source up to $5.5M.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">SEWP VI</td>
                      <td className="py-2 pr-4">$60B est.</td>
                      <td className="py-2 pr-4">Forthcoming</td>
                      <td className="py-2 pr-4">
                        Expanding to 1,000+ primes, adding standalone IT
                        services.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">CDAO Tradewind</td>
                      <td className="py-2 pr-4">Varies</td>
                      <td className="py-2 pr-4">Active</td>
                      <td className="py-2 pr-4">
                        DOD OTA pathway for AI startups. No GSA Schedule
                        required.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">Certifications</h4>
              <p>
                Evaluate: 8(a), WOSB, SDVOSB, HUBZone. 8(a) enables sole-source
                up to $5.5M — most powerful if you qualify. Pursue
                Mentor-Protégé with an established prime — an SBA program where a
                large established contractor formally partners with a small
                business to provide guidance, resources, and joint venture
                opportunities.
              </p>

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
                      <td className="py-2 pr-4 whitespace-nowrap">Week 1</td>
                      <td className="py-2 pr-4">
                        SAM.gov registration. UEI and CAGE code. Select NAICS:
                        541511, 541512, 541519, 541810, 518210.
                      </td>
                      <td className="py-2 pr-4">In the system</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Month 2–3
                      </td>
                      <td className="py-2 pr-4">
                        GSA MAS application (SIN 54151S + 541810)
                      </td>
                      <td className="py-2 pr-4">In process</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 2–6
                      </td>
                      <td className="py-2 pr-4">
                        Evaluate set-aside certifications
                      </td>
                      <td className="py-2 pr-4">Decision made</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 2–4
                      </td>
                      <td className="py-2 pr-4">
                        Train on USWDS, Section 508, FISMA, AI RMF
                      </td>
                      <td className="py-2 pr-4">Compliance ready</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 6–9
                      </td>
                      <td className="py-2 pr-4">GSA MAS awarded</td>
                      <td className="py-2 pr-4">
                        GSA eBuy access + direct sales
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 8–12
                      </td>
                      <td className="py-2 pr-4">
                        Bid first prime contracts (VA, HHS, GSA)
                      </td>
                      <td className="py-2 pr-4">Building pipeline</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 12–18
                      </td>
                      <td className="py-2 pr-4">Win first prime contract</td>
                      <td className="py-2 pr-4">Federal prime contractor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                Where to Find Opportunities
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>SAM.gov — All solicitations, updated daily</li>
                <li>
                  GSA eBuy — Task orders on GSA/GWAC vehicles
                </li>
                <li>
                  USAspending.gov — Historical data: who won what, from whom, for
                  how much
                </li>
                <li>
                  GovWin IQ ($13K–$29K/yr), GovTribe, HigherGov —
                  Pre-solicitation intel
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 1.5.3 Channel Sales */}
        <AccordionItem value="channel-sales">
          <AccordionTrigger>
            Channel Sales (as Subcontractor to Primes)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Point11 works under a prime that already holds a contract
                vehicle. Fastest path to revenue — 2–6 months vs. 6–18 for
                direct. Since 2022, primes must give past performance evaluations
                to small business subs, so this builds the track record needed
                for future prime bids.
              </p>

              <h4 className="font-medium text-foreground">Key Vehicle</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Vehicle
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Ceiling
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Status
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">VA SPRUCE</td>
                      <td className="py-2 pr-4">$2.4B</td>
                      <td className="py-2 pr-4">
                        Active, $200M+ in task orders
                      </td>
                      <td className="py-2 pr-4">
                        100% SDVOSB set-aside (primes must be SDVOSBs, but subs
                        do not). AI and web modernization work executing now. #1
                        channel vehicle.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                Tier 1 Primes — Call This Week
              </h4>
              <p>
                Small digital services firms, typically 50–200 employees,
                executing AI and web modernization on SPRUCE and CMS vehicles.
                Same tech stack, same language. Far more likely to take a meeting
                than Booz Allen. These are the most likely path to revenue in
                2026.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Prime
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Active Contracts
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Sub Need
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">Oddball / Oddcore JV</td>
                      <td className="py-2 pr-4">
                        SPRUCE: $15M chatbot + $14M voicebot on VA.gov
                      </td>
                      <td className="py-2 pr-4">
                        AI voice/chat. Top target.
                      </td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">CivicActions</td>
                      <td className="py-2 pr-4">
                        CMS WECMS 2.0 ($72M), NSF ($44M)
                      </td>
                      <td className="py-2 pr-4">
                        Modern frontend for Healthcare.gov, CMS.gov, Medicare.gov
                      </td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">Fearless</td>
                      <td className="py-2 pr-4">
                        SBA.gov, CMS CyberGeek, GSA TTS ($120M+)
                      </td>
                      <td className="py-2 pr-4">Growing AI practice</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">Agile Six</td>
                      <td className="py-2 pr-4">
                        SPRUCE: benefits, facilities, design systems
                      </td>
                      <td className="py-2 pr-4">AI + modern web talent</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">Coforma</td>
                      <td className="py-2 pr-4">SPRUCE: VA benefits crew</td>
                      <td className="py-2 pr-4">AI + design system work</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <span className="font-medium text-foreground">
                  Getting in the door:
                </span>{" "}
                No formal supplier portals. They run like startups. Email
                leadership directly, reference their specific contracts, say you
                want to sub. BD contacts at these firms are typically on
                LinkedIn.
              </p>

              <h4 className="font-medium text-foreground">
                Tier 2 Primes — Outreach Month 2–3
              </h4>
              <p>
                Large federal IT primes. Slower cycle of 3–6 months, more
                bureaucratic, but bigger dollars. Legally required to sub 23%+ to
                small businesses. One relationship can be $500K+/yr. Many
                contacts listed below are SBLOs — Small Business Liaison
                Officers.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Prime
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Key Contact
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Phone / Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Booz Allen Hamilton</td>
                      <td className="py-2 pr-4">
                        Yuri Cruz, Mgr, Small Business Office
                      </td>
                      <td className="py-2 pr-4">
                        (703) 902-5807 / cruz_yuri@bah.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">CGI Federal</td>
                      <td className="py-2 pr-4">
                        Tyler Brooks-Craft, Dir, Strategic Ops &amp; SB
                      </td>
                      <td className="py-2 pr-4">
                        tyler.brooks-craft@cgifederal.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">SAIC</td>
                      <td className="py-2 pr-4">
                        Rita Brooks, Dir, Small Business Programs
                      </td>
                      <td className="py-2 pr-4">
                        (571) 203-6832 / marguerite.brooks@saic.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">ICF</td>
                      <td className="py-2 pr-4">Supplier Hub</td>
                      <td className="py-2 pr-4">
                        icf.com/company/about/partners/suppliers
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Maximus</td>
                      <td className="py-2 pr-4">
                        SB &amp; Strategic Partnership Office
                      </td>
                      <td className="py-2 pr-4">maximus.com (Smartsheet form)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">CACI</td>
                      <td className="py-2 pr-4">
                        Wayne Pizer, Exec Dir, SB Advocacy
                      </td>
                      <td className="py-2 pr-4">wpizer@caci.com</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Leidos</td>
                      <td className="py-2 pr-4">Shaun K. Smith</td>
                      <td className="py-2 pr-4">
                        (703) 664-4270 / shaun.k.smith@leidos.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">GDIT</td>
                      <td className="py-2 pr-4">
                        Jeffery Willis, Dir of Growth, Fed Civilian
                      </td>
                      <td className="py-2 pr-4">
                        (571) 533-3076 / jeffery.willis@GDIT.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Peraton</td>
                      <td className="py-2 pr-4">Ashley Sanders, SBLO</td>
                      <td className="py-2 pr-4">
                        (410) 988-3200 / peratonsmallbusiness@peraton.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">ManTech</td>
                      <td className="py-2 pr-4">Amy Dawson, SBLO</td>
                      <td className="py-2 pr-4">
                        (571) 446-9496 / Amy.Dawson@MANTECH.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Accenture Federal</td>
                      <td className="py-2 pr-4">Irene Rivera, SBLO</td>
                      <td className="py-2 pr-4">
                        irene.c.rivera@accenturefederal.com
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Deloitte GPS</td>
                      <td className="py-2 pr-4">Tracey Thompson, SBLO</td>
                      <td className="py-2 pr-4">trthompson@deloitte.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <span className="font-medium text-foreground">
                  Supplier portals (free, register now):
                </span>{" "}
                SAIC (suppliers.saic.com) · Booz Allen (doingbusiness.bah.com) ·
                CACI (supplier.caci.com) · GDIT (suppliers.gendyn.com) · Deloitte
                GPS (vendorportal.gps.deloitte.com) · Peraton
                (peraton.com/suppliers/prospective-supplier-intake-form)
              </p>

              <h4 className="font-medium text-foreground">
                Contact Center AI Primes
              </h4>
              <p>
                Maximus runs AI contact centers for the IRS, OPM, VA, and CMS on
                its FedRAMP-authorized TXM platform, built on AWS Bedrock, Lex,
                and Textract. ICF launched Fathom — AI agents for federal
                agencies — and holds $40M+ at HHS and NIH. Both have formal
                small business sub programs.
              </p>

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
                      <td className="py-2 pr-4 whitespace-nowrap">Week 1</td>
                      <td className="py-2 pr-4">
                        SAM.gov registration + capabilities statement
                      </td>
                      <td className="py-2 pr-4">In the system</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Weeks 1–2
                      </td>
                      <td className="py-2 pr-4">
                        Email Oddball, CivicActions, Fearless, Agile Six
                      </td>
                      <td className="py-2 pr-4">
                        Pipeline via SPRUCE and CMS
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Weeks 2–4
                      </td>
                      <td className="py-2 pr-4">
                        Register on 6 Tier 2 supplier portals
                      </td>
                      <td className="py-2 pr-4">Visible to large primes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 2–4
                      </td>
                      <td className="py-2 pr-4">
                        Tier 2 outreach (Booz Allen, SAIC, CGI Federal, etc.)
                      </td>
                      <td className="py-2 pr-4">Larger sub pipeline</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Months 4–8
                      </td>
                      <td className="py-2 pr-4">
                        Win first sub work (likely Tier 1 / SPRUCE)
                      </td>
                      <td className="py-2 pr-4">
                        Revenue + past performance
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 1.5.4 America by Design Deep Dive */}
        <AccordionItem value="america-by-design">
          <AccordionTrigger>America by Design — Deep Dive</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">
                This section is the most important reference for understanding
                the federal website modernization opportunity.
              </p>

              <h4 className="font-medium text-foreground">
                What EO 14338 Actually Says — and What It Doesn&apos;t
              </h4>
              <p>
                EO 14338, signed August 21, 2025, created the National Design
                Studio within the White House and the first-ever Chief Design
                Officer role, filled by Airbnb co-founder Joe Gebbia. The EO
                mandates USWDS adoption and 21st Century IDEA Act compliance
                across federal digital services, with &quot;initial results&quot;
                by July 4, 2026 — not full completion. NDS sunsets in August
                2028, signaling a multi-year effort, not a five-month sprint.
              </p>
              <p>
                What the EO does not include: a dedicated budget — it says
                &quot;subject to availability of appropriations&quot; — specific
                agency deliverables, or any procurement mechanism. The
                &quot;26,000+&quot; number is misleading. A formal inventory
                found approximately 7,200 agency websites. The remaining ~19,000
                are sub-sites, microsites, and campaign pages.
              </p>

              <h4 className="font-medium text-foreground">
                Who Runs It — and Why Capacity Is the Real Story
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Person
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Role
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Background
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        What It Means
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Joe Gebbia</td>
                      <td className="py-2 pr-4">Chief Design Officer</td>
                      <td className="py-2 pr-4">Airbnb co-founder</td>
                      <td className="py-2 pr-4">
                        Narrowed focus to &quot;10 most-visited sites&quot;
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Greg Barbaccia</td>
                      <td className="py-2 pr-4">Federal CIO, OMB</td>
                      <td className="py-2 pr-4">Ex-Palantir</td>
                      <td className="py-2 pr-4">
                        Champions AI-driven redesigns with &quot;very low human
                        interaction&quot;
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Thomas Shedd</td>
                      <td className="py-2 pr-4">Director, GSA TTS</td>
                      <td className="py-2 pr-4">Ex-Tesla</td>
                      <td className="py-2 pr-4">
                        Cut TTS by 50%, eliminated 18F entirely
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Stephen Ehikian</td>
                      <td className="py-2 pr-4">GSA Administrator</td>
                      <td className="py-2 pr-4">—</td>
                      <td className="py-2 pr-4">
                        Driving OneGov — centralizing procurement with OEMs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The capacity problem is severe. 18F — the 90-person GSA team
                that created USWDS, completed 450+ projects — was eliminated in
                March 2025. An estimated 13,000 IT managers and approximately
                317,000 total federal workers departed agencies in 2025. GSA TTS
                was cut by 50%.
              </p>

              <h4 className="font-medium text-foreground">
                Procurement Reality — What Exists and What Doesn&apos;t
              </h4>
              <p>
                <span className="font-medium text-foreground">
                  What doesn&apos;t exist (as of February 2026):
                </span>{" "}
                No SAM.gov solicitations, RFPs, BPAs, or industry days tied to
                America by Design. No task orders on any GWAC connected to the
                initiative. No dedicated budget or congressional appropriation.
                CIO-SP4, the $50B GWAC that would have been the natural vehicle,
                was canceled in January 2026. CIO-SP3 was extended to April 2027
                as a bridge.
              </p>

              <h4 className="font-medium text-foreground">
                The OneGov Disruption
              </h4>
              <p>
                GSA is fundamentally changing how the government buys technology.
                Under OneGov, GSA now negotiates directly with OEMs, bypassing
                the traditional VAR model:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        OEM
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Discount Negotiated
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        What It Covers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Broadcom / VMware</td>
                      <td className="py-2 pr-4">Up to 64%</td>
                      <td className="py-2 pr-4">Cloud portfolio</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Salesforce / Slack</td>
                      <td className="py-2 pr-4">90%</td>
                      <td className="py-2 pr-4">Enterprise Grid</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Adobe</td>
                      <td className="py-2 pr-4">70%</td>
                      <td className="py-2 pr-4">
                        Paperless Government initiative
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Microsoft</td>
                      <td className="py-2 pr-4">Billions projected</td>
                      <td className="py-2 pr-4">M365 Copilot + Azure AI</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">
                        OpenAI / Anthropic / Google
                      </td>
                      <td className="py-2 pr-4">Negotiated</td>
                      <td className="py-2 pr-4">Frontier AI model access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The implication: resellers and integrators are being demoted to
                subcontractor and service partner roles. The winning position is{" "}
                <span className="font-medium text-foreground">
                  implementation arm for OEMs
                </span>{" "}
                — the company that deploys, configures, customizes, and maintains
                the software. For Point11: don&apos;t try to sell the platform;
                sell the hands that deploy it.
              </p>

              <h4 className="font-medium text-foreground">
                Where the Actual Opportunities Are
              </h4>
              <p>
                The opportunities are at the agency level, not at NDS. Individual
                agencies face the July 4, 2026 deadline, have lost internal
                capacity, and will use their own IT budgets and existing contract
                vehicles to buy help.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Vehicle
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Status
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">CIO-SP3</td>
                      <td className="py-2 pr-4">Extended to April 2027</td>
                      <td className="py-2 pr-4">IT services</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Alliant 2</td>
                      <td className="py-2 pr-4">Recompeting 2026</td>
                      <td className="py-2 pr-4">
                        Large integration — sub to primes
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">OASIS+</td>
                      <td className="py-2 pr-4">Recently expanded</td>
                      <td className="py-2 pr-4">Design consulting, advisory</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">GSA MAS</td>
                      <td className="py-2 pr-4">Active, open enrollment</td>
                      <td className="py-2 pr-4">
                        Fastest path for smaller firms like Point11
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Agency BPAs</td>
                      <td className="py-2 pr-4">
                        IRS, VA, DHS most active
                      </td>
                      <td className="py-2 pr-4">
                        Rapid task orders — monitor SAM.gov
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                Verified Funding Streams
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  TMF — Technology Modernization Fund — revolving fund for CX
                  modernization
                </li>
                <li>Agency IT budgets with FY2026 CX line items</li>
                <li>
                  H.R. 3417 provides $35.15M/year for FY2026–2035, specifically
                  for accessibility compliance
                </li>
                <li>OBBBA includes IT provisions</li>
                <li>GSA working capital funds</li>
              </ul>

              <h4 className="font-medium text-foreground">
                Target the 38 HISPs with the Worst Web Performance
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Target Agency
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Key Need
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Why Now
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4">DHS — USCIS / FEMA / TSA</td>
                      <td className="py-2 pr-4">
                        Multi-language, mobile-first, accessibility
                      </td>
                      <td className="py-2 pr-4">
                        Complex user base, high visibility, active BPAs
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">IRS</td>
                      <td className="py-2 pr-4">
                        Direct File portal, online accounts, plain language
                      </td>
                      <td className="py-2 pr-4">
                        Ongoing modernization, dedicated IT budget
                      </td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="py-2 pr-4">VA</td>
                      <td className="py-2 pr-4">
                        Claims automation, RPA / AI integration
                      </td>
                      <td className="py-2 pr-4">
                        July 2026 deadline, SPRUCE vehicle active
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">SSA</td>
                      <td className="py-2 pr-4">
                        Task-oriented redesign, self-service portals
                      </td>
                      <td className="py-2 pr-4">
                        Major service delivery gaps, mobile failures
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">State (Consular Affairs)</td>
                      <td className="py-2 pr-4">
                        Passport portal stability, mobile access
                      </td>
                      <td className="py-2 pr-4">
                        High public visibility, frequent outages
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4">Education — FSA</td>
                      <td className="py-2 pr-4">
                        FAFSA portal stability, loan service portals
                      </td>
                      <td className="py-2 pr-4">
                        Chronic technical issues, political scrutiny
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                Technical Requirements — Non-Negotiable
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    USWDS 3.0:
                  </span>{" "}
                  Mandatory for all new federal web work. Custom designs that
                  deviate will be rejected.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Section 508 / WCAG:
                  </span>{" "}
                  NDS&apos;s own failures make this a strong selling point.
                  H.R. 3417 provides $35.15M/year specifically for this.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Mobile-first:
                  </span>{" "}
                  45% of federal websites not mobile-friendly. Only 6% score
                  &quot;good.&quot;
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    AI use cases being purchased now:
                  </span>{" "}
                  Chatbots, COBOL refactoring, content simplification, automated
                  design deployment.
                </li>
              </ul>

              <h4 className="font-medium text-foreground">
                The Playbook for Point11
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Play
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Strategy
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Why It Works
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium text-foreground">
                        OEM Partner
                      </td>
                      <td className="py-2 pr-4">
                        Position as implementation partner for Microsoft,
                        Salesforce, or Adobe
                      </td>
                      <td className="py-2 pr-4">
                        OEMs can&apos;t deploy alone — sell the deployment, not
                        the license
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Compliance Audit Sprint
                      </td>
                      <td className="py-2 pr-4">
                        Package &quot;USWDS 3.0 + EO 14338 Compliance
                        Audit&quot; — 90–180 day delivery
                      </td>
                      <td className="py-2 pr-4">
                        Agencies need a visible win by July 4
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Accessibility
                      </td>
                      <td className="py-2 pr-4">
                        Lead with Section 508/WCAG. Cite H.R. 3417 funding.
                      </td>
                      <td className="py-2 pr-4">
                        Demand exists regardless of whether the EO survives
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium text-foreground">
                        AI Multiplier
                      </td>
                      <td className="py-2 pr-4">
                        Pitch measurable cost reduction, not
                        &quot;innovation&quot;
                      </td>
                      <td className="py-2 pr-4">
                        Aligns with DOGE&apos;s emphasis on efficiency
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium text-foreground">
                        Vehicle Targeting
                      </td>
                      <td className="py-2 pr-4">
                        Monitor Alliant 2 recompetes, OASIS+, GSA MAS, HISP
                        BPAs
                      </td>
                      <td className="py-2 pr-4">
                        SAM.gov weekly: NAICS 541511/541512/541519
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                Risk-Adjusted Timeline
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-medium text-foreground">
                        Phase
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        When
                      </th>
                      <th className="py-2 pr-4 font-medium text-foreground">
                        What Point11 Should Do
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium">Sprint</td>
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Now – July 4, 2026
                      </td>
                      <td className="py-2 pr-4">
                        Rapid compliance audits, accessibility remediations,
                        &quot;front door&quot; redesign sprints for agencies
                        panicking about the deadline
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium">Reckoning</td>
                      <td className="py-2 pr-4 whitespace-nowrap">
                        Q3–Q4 2026
                      </td>
                      <td className="py-2 pr-4">
                        Agencies that missed the deadline need remediation at
                        scale. USWDS retrofitting becomes the dominant workload.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-medium">Sustained</td>
                      <td className="py-2 pr-4 whitespace-nowrap">
                        2027–2028
                      </td>
                      <td className="py-2 pr-4">
                        Full-stack modernization, CMS migration, ongoing
                        maintenance. NDS sunsets August 2028 — the work transfers
                        entirely to agencies and contractors.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-foreground">
                What to Monitor Weekly
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    SAM.gov:
                  </span>{" "}
                  Search NAICS 541511/541512/541519 for new solicitations, RFIs,
                  and sources-sought notices from HISPs.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    GSA eBuy:
                  </span>{" "}
                  Task orders on GSA MAS, Alliant 2, and OASIS+ related to web
                  modernization or design services.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Federal News Network and FedScoop:
                  </span>{" "}
                  Policy updates on NDS, OneGov, and agency compliance status.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    USAJobs:
                  </span>{" "}
                  U.S. Tech Force hiring patterns — when an agency posts for web
                  developers or designers, it signals a capacity gap you can fill
                  as a contractor.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Potomac Officers Club Digital Transformation Summit
                  </span>{" "}
                  (April 22, 2026) — key event for the website modernization
                  community.
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
