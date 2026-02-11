"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TacticsPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Sales Tactics</h1>
        <p className="mt-2 text-muted-foreground">
          Practical moves for winning federal contracts.
        </p>
      </div>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="lead-compliance">
          <AccordionTrigger className="text-base">
            Lead with compliance, not aspiration
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The pitch: &ldquo;We can audit your sites against EO 14338 and
              USWDS 3.0 and deliver a compliant front door in 90 days.&rdquo;
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="timelines">
          <AccordionTrigger className="text-base">
            Direct federal contracts take 6&ndash;18 months from registration to
            first revenue
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Subcontracting compresses that to 2&ndash;6 months. GSA Schedule
              approval runs 3&ndash;6 months, and once in hand, task order
              competitions move in 30&ndash;90 days.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cio-relationships">
          <AccordionTrigger className="text-base">
            Selling requires relationships with both the CIO and agency leaders
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              IT spending inside an agency is a negotiation between two power
              centers. The CIO has statutory authority over IT decisions, granted
              by FITARA &mdash; the Federal Information Technology Acquisition
              Reform Act of 2014, which gave agency CIOs authority over IT
              budgets and investments, but in practice it&rsquo;s still
              distributed &mdash; the CIO has oversight and approval authority,
              but a program office that needs a new system is often the one with
              the money. The sales implication is direct: Point11 needs
              relationships with both the CIO shop and program offices.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="invoicing">
          <AccordionTrigger className="text-base">
            Invoicing systems vary by agency
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              How you submit an invoice is strictly segregated. Most civilian
              agencies use IPP (Invoice Processing Platform), a centralized
              Treasury system. The Department of Defense strictly uses WAWF (Wide
              Area Workflow), which is complex and requires specific routing
              codes called DoDAACs. If you try to invoice the Navy using a
              standard PDF or the IPP system, you will not get paid. Know your
              agency&rsquo;s invoicing system before you start work.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cpars">
          <AccordionTrigger className="text-base">
            All vendors get a performance rating
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Agencies use a central database called CPARS to rate your
              performance. A good rating from one agency is visible to and valued
              by other agencies &mdash; which is why even small subcontracting
              engagements matter. Every completed project builds a track record
              that follows you across the federal market.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="prime-relationships">
          <AccordionTrigger className="text-base">
            Build relationships with the primes
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The largest primes in Point11&rsquo;s NAICS codes are Booz Allen
              Hamilton, Leidos, CACI International, Accenture Federal Services,
              SAIC, Deloitte Federal, General Dynamics IT, Peraton, and ManTech.
              For SPRUCE specifically, identify the 10 primes on that vehicle.
              Reach out to their business development or small business liaison
              teams &mdash; they have contractual subcontracting goals to meet
              and are actively looking for capable small business partners.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dc-events">
          <AccordionTrigger className="text-base">
            Go to events in DC
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Industry days and RFI responses are intelligence tools as much as
              relationship tools. Paid platforms like GovWin IQ
              ($13K&ndash;$29K/yr), GovTribe, and HigherGov that aggregate
              pre-solicitation signals. Agency procurement forecasts on SAM.gov
              are free and worth checking, though inconsistently published. Meet
              with program offices and show them what&rsquo;s possible &mdash;
              if Point11 demos an AI chatbot to a VA program manager who
              didn&rsquo;t know the technology was this good or this affordable,
              they might create a requirement that didn&rsquo;t exist before.
              BAAs &mdash; Broad Agency Announcements &mdash; are standing
              invitations from agencies for innovative solutions. Pitch your
              technology, and if they like it, they fund a pilot with no RFP
              needed. OTA consortia are another path. OTA stands for Other
              Transaction Authority &mdash; a streamlined contracting mechanism
              that lets agencies buy technology without the usual years-long
              procurement process. Consortia like NSTXL, the National Security
              Technology Accelerator, and ASTRO, the Accelerating the Speed of
              Technology for Rapid Operations consortium, run challenge-based
              procurements for emerging tech that bypass traditional procurement
              entirely.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="linkedin">
          <AccordionTrigger className="text-base">
            LinkedIn is a good networking channel
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              In govcon &mdash; &ldquo;government contracting,&rdquo; the
              industry shorthand for the ecosystem of companies selling to the
              federal government. Program managers and contracting officers are
              active there. SBA matchmaking events are specifically designed to
              connect small businesses with primes and agencies. Agency-specific
              industry days at VA and CMS happen regularly and are free. Industry
              associations host conferences where primes recruit subs and
              agencies brief upcoming work &mdash; the most relevant are
              ACT-IAC, the American Council for Technology&ndash;Industry
              Advisory Council and the most tech-focused; AFCEA, the Armed
              Forces Communications &amp; Electronics Association; and the
              Professional Services Council.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="procurement-relationships">
          <AccordionTrigger className="text-base">
            Procurement is influenced by relationships
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Federal procurement is formally structured around RFPs and
              competitive bidding. An RFP &mdash; Request for Proposal &mdash;
              is the government&rsquo;s equivalent of sending a detailed spec to
              vendors and asking them to bid. Most large IT purchases flow
              through pre-competed contract vehicles: umbrella contracts called
              IDIQs &mdash; Indefinite Delivery/Indefinite Quantity &mdash; or
              GWACs, Government-Wide Acquisition Contracts, which are IDIQs that
              any agency can use, not just the one that created them. A
              pre-approved pool of vendors competes for individual task orders as
              needs arise. To access these vehicles, a vendor either wins a spot
              directly or holds a GSA Schedule, a pre-negotiated agreement with
              GSA that lets any federal agency buy from you. The prerequisite for
              all of it: register on SAM.gov &mdash; it&rsquo;s free &mdash; and
              select the right NAICS codes, the government&rsquo;s system for
              categorizing what contractors do. NAICS codes don&rsquo;t drive
              how agencies allocate budgets &mdash; no agency says &ldquo;we&rsquo;re
              allocating $50M to NAICS 541511.&rdquo; But they have real
              operational consequences. The code assigned to a solicitation
              determines the size standard &mdash; the revenue threshold below
              which a company qualifies as &ldquo;small.&rdquo; Point11&rsquo;s
              primary codes &mdash; 541511, 541512, and 541519 &mdash; all use a
              $34M threshold, but other codes range from $16.5M to $47M. Same
              company, different NAICS code, potentially different eligibility.
              When a contracting officer restricts a contract to small
              businesses, it&rsquo;s the code&rsquo;s size standard that gates
              who can compete. NAICS codes also control vendor discovery:
              contracting officers search SAM.gov by code when doing market
              research, so if Point11 isn&rsquo;t registered under the right
              codes, it&rsquo;s invisible to buyers looking for exactly what it
              does. Get the registration right &mdash; then track programs, not
              codes.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shape-rfps">
          <AccordionTrigger className="text-base">
            Vendors who helped shape RFPs have a massive advantage
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Not through anything corrupt, but through a legitimate
              pre-solicitation process the government actively encourages. Before
              a solicitation is posted, the government goes through a
              &ldquo;capture&rdquo; phase where they&rsquo;re figuring out what
              they need. During this window, communication between government and
              industry is not only legal &mdash; it&rsquo;s expected. Requests
              for Information, or RFIs, are formal invitations for industry to
              submit white papers explaining how they&rsquo;d solve the problem;
              these directly shape how the eventual RFP gets written.
            </p>
            <p>
              Industry days are agency-hosted events, often virtual, where
              upcoming procurements are briefed and vendors give feedback.
              One-on-one meetings with program managers and even contracting
              officers are routine &mdash; you can request them to discuss your
              capabilities and understand the agency&rsquo;s needs. All of this
              is legal and encouraged before a solicitation is posted. Once the
              solicitation drops, a &ldquo;quiet period&rdquo; begins and all
              communication goes through formal written Q&amp;A. That&rsquo;s
              why everything happens before. &ldquo;Capture management&rdquo; is
              the formal term for this whole process. Large contractors have
              entire capture teams tracking opportunities 12&ndash;24 months
              before an RFP drops. Point11 obviously can&rsquo;t run that kind
              of operation with two people &mdash; which is another reason
              subcontracting is the right entry point.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gsa-springboard">
          <AccordionTrigger className="text-base">
            If Point11 is under two years old, cite the GSA Startup Springboard
            program
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              The application must explicitly cite the GSA Startup Springboard
              program, which allows executive and investor experience to
              substitute for corporate track record. Without citing Springboard,
              the application will likely be rejected on experience grounds. The
              IDEA Act &mdash; the Integrated Digital Experience Act &mdash; is
              the federal law requiring all executive branch websites to be
              mobile-friendly, accessible, and use the U.S. Web Design System.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cybersecurity">
          <AccordionTrigger className="text-base">
            Cybersecurity should not be a blocker &mdash; deploy inside existing
            cloud enclaves
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Point11 doesn&rsquo;t need its own FedRAMP authorization in year
              one. Deploy inside the agency&rsquo;s existing authorized
              environment &mdash; AWS GovCloud, Azure Government, or whatever
              they already run. These are cloud enclaves: security-approved
              environments that already have government authorization. The pitch:
              &ldquo;We deploy inside your existing cloud enclave and inherit
              your security controls.&rdquo;
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="liaison-officers">
          <AccordionTrigger className="text-base">
            Build relationships with agency small business liaison officers
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-sm leading-relaxed">
            <p>
              They are literally paid to tell small businesses what&rsquo;s
              coming &mdash; free, legal, and underused.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
