import { Filter, UserX, DoorOpen, Hammer } from "lucide-react";

export default function CompetitiveAdvantagePage() {
  return (
    <div className="mx-auto max-w-5xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Competitive Advantages</h1>
        <p className="mt-2 text-muted-foreground">
          A single certification can be the difference between competing against
          50 vendors and being the only one in the room.
        </p>
      </div>

      {/* How these levers work */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">How these levers work</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Every item on this list helps vendors win government deals &mdash; but
          through four fundamentally different mechanisms:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <Filter className="h-5 w-5 mb-2 text-muted-foreground" />
            <p className="font-medium mb-1">Narrows the field</p>
            <p className="text-sm text-muted-foreground">
              Set-asides shrink who can bid. Instead of competing against
              Deloitte and 200 firms, you compete against 5&ndash;15 certified
              firms. You still have to win &mdash; but the odds shift
              dramatically.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <UserX className="h-5 w-5 mb-2 text-muted-foreground" />
            <p className="font-medium mb-1">Clears the field</p>
            <p className="text-sm text-muted-foreground">
              Sole-source authority lets a contracting officer hand you a
              contract with zero competition. You&rsquo;re the only one in the
              room. This is the most powerful mechanism in federal contracting.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <DoorOpen className="h-5 w-5 mb-2 text-muted-foreground" />
            <p className="font-medium mb-1">Gets you in the room</p>
            <p className="text-sm text-muted-foreground">
              Contract vehicles and security gates determine who is even eligible
              to compete. If you&rsquo;re not on the vehicle, you can&rsquo;t
              see or bid on the opportunity. These are access prerequisites, not
              competitive advantages.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <Hammer className="h-5 w-5 mb-2 text-muted-foreground" />
            <p className="font-medium mb-1">Pays you to build</p>
            <p className="text-sm text-muted-foreground">
              The government funds your R&amp;D, and then the thing you build
              becomes your ticket to sole-source follow-on contracts. The
              government is simultaneously your investor and your customer.
            </p>
          </div>
        </div>
      </section>

      {/* Socioeconomic Designations */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Socioeconomic Designations
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Lever</th>
                <th className="px-4 py-3 text-left font-medium">How it helps</th>
                <th className="px-4 py-3 text-left font-medium">Point11?</th>
                <th className="px-4 py-3 text-left font-medium">Annual $ Flow</th>
                <th className="px-4 py-3 text-left font-medium">Power</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">Small Business</td>
                <td className="px-4 py-3">Narrows</td>
                <td className="px-4 py-3 font-medium">Yes</td>
                <td className="px-4 py-3 whitespace-nowrap">$183.5B</td>
                <td className="px-4 py-3">8/10</td>
                <td className="px-4 py-3">
                  The foundation. Every contract under $350K is set aside &mdash;
                  Deloitte, Accenture, Booz Allen can&rsquo;t compete. Opens
                  small business pools on GSA MAS, OASIS+, Polaris, CIO-SP3 SB.
                  Self-certify via SAM.gov, no application needed.
                </td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">HUBZone</td>
                <td className="px-4 py-3 whitespace-nowrap">Narrows + Clears</td>
                <td className="px-4 py-3 font-medium">Yes</td>
                <td className="px-4 py-3 whitespace-nowrap">$17.6B</td>
                <td className="px-4 py-3">9/10</td>
                <td className="px-4 py-3">
                  <strong>Point11&rsquo;s most valuable lever.</strong>{" "}
                  Sole-source up to $5.5M. Unique 10% price preference vs. large
                  businesses. Only ~5&ndash;7K certified firms. Gov has{" "}
                  <em>never</em> met its 3% goal. Dedicated Polaris, OASIS+,
                  SEWP pools. Requires Miami Beach HUBZone office + 35% employee
                  residency.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium whitespace-nowrap">SDB</td>
                <td className="px-4 py-3">Narrows</td>
                <td className="px-4 py-3 text-muted-foreground font-medium">Risky</td>
                <td className="px-4 py-3 whitespace-nowrap">$76.2B</td>
                <td className="px-4 py-3">3/10</td>
                <td className="px-4 py-3">
                  Self-certify as socially + economically disadvantaged. No
                  sole-source. Theoretically available under race-neutral
                  framework, but misrepresentation triggers False Claims Act. Not
                  recommended.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium whitespace-nowrap">8(a)</td>
                <td className="px-4 py-3 whitespace-nowrap">Narrows + Clears</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 whitespace-nowrap">$26B</td>
                <td className="px-4 py-3">10/10</td>
                <td className="px-4 py-3">
                  The gold standard. Sole-source up to $5.5M. Direct-award
                  without competition. The Pentagon awards $100M sole-source 8(a)
                  contracts &ldquo;almost every day.&rdquo; Exclusive vehicles
                  like 8(a) STARS III. Effectively frozen &mdash; only 65 firms
                  admitted in 2025 vs. 2,100+ historically.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium whitespace-nowrap">SDVOSB</td>
                <td className="px-4 py-3 whitespace-nowrap">Narrows + Clears</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 whitespace-nowrap">$32.8B</td>
                <td className="px-4 py-3">9/10</td>
                <td className="px-4 py-3">
                  Sole-source up to $5M. 5% government-wide goal (5.14% in
                  FY2024). Dedicated Polaris pool, VETS 2 GWAC ($6.1B ceiling).
                  Requires 51% ownership by service-disabled veteran.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium whitespace-nowrap">VOSB</td>
                <td className="px-4 py-3">Narrows</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 whitespace-nowrap">~$3B</td>
                <td className="px-4 py-3">4/10</td>
                <td className="px-4 py-3">
                  Weaker sibling of SDVOSB. No sole-source, no government-wide
                  set-asides. Only meaningful at the VA under Veterans First.
                  Requires 51% veteran ownership.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium whitespace-nowrap">WOSB</td>
                <td className="px-4 py-3 whitespace-nowrap">Narrows + Clears</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 whitespace-nowrap">$31.7B</td>
                <td className="px-4 py-3">7/10</td>
                <td className="px-4 py-3">
                  Set-asides and sole-source up to $5M in underrepresented NAICS
                  codes. 5% goal (4.97% in FY2024). Requires 51% women
                  ownership. IT codes are EDWOSB-eligible only.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap">EDWOSB</td>
                <td className="px-4 py-3 whitespace-nowrap">Narrows + Clears</td>
                <td className="px-4 py-3 text-muted-foreground">No</td>
                <td className="px-4 py-3 whitespace-nowrap">Subset of WOSB</td>
                <td className="px-4 py-3">7/10</td>
                <td className="px-4 py-3">
                  Subcategory of WOSB with tighter economic thresholds. IT NAICS
                  541511/541512 are EDWOSB-eligible, not regular WOSB &mdash; so
                  only EDWOSBs access IT set-asides.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contract Vehicles & Market Access */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Contract Vehicles &amp; Market Access
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Lever</th>
                <th className="px-4 py-3 text-left font-medium">How it helps</th>
                <th className="px-4 py-3 text-left font-medium">Point11?</th>
                <th className="px-4 py-3 text-left font-medium">Annual $ Flow</th>
                <th className="px-4 py-3 text-left font-medium">Power</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">GSA MAS Schedule</td>
                <td className="px-4 py-3">Room</td>
                <td className="px-4 py-3 font-medium">Yes</td>
                <td className="px-4 py-3 whitespace-nowrap">$50B+</td>
                <td className="px-4 py-3">8/10</td>
                <td className="px-4 py-3">
                  Pre-negotiated catalog &mdash; any agency can buy from you with
                  simplified ordering. 20-year contract. Cite Startup
                  Springboard if under 2 years old. 3&ndash;6 month process.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap">GWACs / IDIQs</td>
                <td className="px-4 py-3">Room</td>
                <td className="px-4 py-3 text-muted-foreground font-medium">Future</td>
                <td className="px-4 py-3 whitespace-nowrap">$100B+ ceiling</td>
                <td className="px-4 py-3">9/10</td>
                <td className="px-4 py-3">
                  Pre-approved vendor pools (Polaris, OASIS+, CIO-SP4, SEWP,
                  Alliant 3). Where the real buying happens &mdash; task orders
                  never posted publicly. Requires past performance for on-ramps.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Government Funding Pathways */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Government Funding Pathways
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Lever</th>
                <th className="px-4 py-3 text-left font-medium">How it helps</th>
                <th className="px-4 py-3 text-left font-medium">Point11?</th>
                <th className="px-4 py-3 text-left font-medium">Annual $ Flow</th>
                <th className="px-4 py-3 text-left font-medium">Power</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-green-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">SBIR</td>
                <td className="px-4 py-3 whitespace-nowrap">Build + Clears</td>
                <td className="px-4 py-3 text-muted-foreground font-medium">Paused</td>
                <td className="px-4 py-3 whitespace-nowrap">$4B+</td>
                <td className="px-4 py-3">9/10</td>
                <td className="px-4 py-3">
                  Government venture capital. Phase I ($150&ndash;300K) proves
                  concept, then unlocks unlimited sole-source Phase III contracts
                  &mdash; no competition, no dollar cap, no time limit. 20-year
                  data rights. Authority lapsed Oct 2025; reauthorization
                  expected.
                </td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap">STTR</td>
                <td className="px-4 py-3 whitespace-nowrap">Build + Clears</td>
                <td className="px-4 py-3 text-muted-foreground font-medium">Paused</td>
                <td className="px-4 py-3 whitespace-nowrap">~$500M</td>
                <td className="px-4 py-3">7/10</td>
                <td className="px-4 py-3">
                  Sibling of SBIR with identical Phase III sole-source benefits.
                  Requires formal university/research partnership. Same lapse
                  status.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Security & Compliance Gates */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Security &amp; Compliance Gates
        </h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Lever</th>
                <th className="px-4 py-3 text-left font-medium">How it helps</th>
                <th className="px-4 py-3 text-left font-medium">Point11?</th>
                <th className="px-4 py-3 text-left font-medium">Annual $ Flow</th>
                <th className="px-4 py-3 text-left font-medium">Power</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium whitespace-nowrap">FedRAMP</td>
                <td className="px-4 py-3">Room</td>
                <td className="px-4 py-3 text-muted-foreground">When needed</td>
                <td className="px-4 py-3 whitespace-nowrap">~$20B+ cloud</td>
                <td className="px-4 py-3">6/10</td>
                <td className="px-4 py-3">
                  Mandatory for selling any cloud/SaaS product to gov. Agencies
                  cannot buy hosted software without it. $500K+ and 6&ndash;18
                  months. Not needed if selling services &mdash; hard gate if
                  Point11 productizes.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap">CMMC</td>
                <td className="px-4 py-3">Room</td>
                <td className="px-4 py-3 text-muted-foreground">When needed</td>
                <td className="px-4 py-3 whitespace-nowrap">~$400B+ DoD</td>
                <td className="px-4 py-3">6/10</td>
                <td className="px-4 py-3">
                  Required for DoD contracts handling Controlled Unclassified
                  Information. Level 2 for most defense IT. Being enforced
                  2025&ndash;2026. Not needed for civilian agencies (VA, CMS).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Point11's optimal sequencing */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Point11&rsquo;s optimal sequencing
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-4 rounded-lg border p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              1
            </span>
            <div>
              <p className="font-medium">Small Business</p>
              <p className="text-sm text-muted-foreground mt-1">
                Register in SAM.gov now. Zero cost, 2&ndash;3 weeks. Immediate
                access to $183.5B in set-aside contracts.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              2
            </span>
            <div>
              <p className="font-medium">HUBZone</p>
              <p className="text-sm text-muted-foreground mt-1">
                Pursue immediately. 3&ndash;5 months. Verify Miami Beach address
                on SBA HUBZone map first. Unlocks sole-source up to $5.5M, 10%
                price preference, and dedicated GWAC pools.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </span>
            <div>
              <p className="font-medium">GSA Schedule</p>
              <p className="text-sm text-muted-foreground mt-1">
                Apply in parallel with HUBZone. 3&ndash;6 months. Cite Startup
                Springboard if under 2 years old. Gets Point11 into the $50B+
                simplified ordering marketplace.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              4
            </span>
            <div>
              <p className="font-medium">SBIR</p>
              <p className="text-sm text-muted-foreground mt-1">
                Prepare application materials now. Submit the moment program
                authority is reauthorized. A Phase I proving AI chatbot or web
                modernization tech could unlock unlimited sole-source Phase III
                contracts.
              </p>
            </div>
          </li>
          <li className="flex gap-4 rounded-lg border p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              5
            </span>
            <div>
              <p className="font-medium">GWACs</p>
              <p className="text-sm text-muted-foreground mt-1">
                Target Polaris HUBZone pool and OASIS+ small business pool once
                Point11 has contract past performance to qualify for on-ramps.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
