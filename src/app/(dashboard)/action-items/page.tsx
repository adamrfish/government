"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const ACTION_ITEMS = [
  {
    id: "sam-gov",
    title: "1. Register on SAM.gov — nothing works without it",
    badge: "Federal vendor registration",
    body: "SAM.gov is the System for Award Management — the federal government's central contractor registration database. You must be registered here to receive any federal contract or grant. During registration you'll be assigned a Unique Entity ID (UEI) and a CAGE code — your universal ID cards for federal work. You'll also self-select your NAICS codes (541511, 541512, 541519) and designate one as your primary code — contracting officers search SAM.gov by NAICS code during market research, so if you're not registered under the right codes, you're invisible. For each code listed, you must indicate whether you qualify as \"small\" under its corresponding SBA size standard. Also create a capability statement — a one-page PDF that summarizes who you are, what you do, your NAICS codes, certifications, and past work. This is the document you'll attach to every introduction email and every teaming inquiry. Registration is free and takes 2–3 weeks to process.",
  },
  {
    id: "small-biz",
    title: "2. Self-certify as a small business on our SAM application",
    badge: "Unlocks set-asides",
    body: "Point11 qualifies — just check the box during your SAM registration. Under NAICS codes 541511, 541512, and 541519, the small business size standard is $34M in average annual revenue. This is a self-certification: no application, no approval process, no fee. But it's the gate to everything — set-asides, small business pools on GWACs, and subcontracting opportunities where primes need small business partners to meet their contractual goals.",
  },
  {
    id: "usaspending",
    title: "3. Reverse engineer current contracts from USAspending.gov",
    badge: "Competitive intelligence",
    body: "Pull data for Point11's NAICS codes over the last 2–3 years and export to a spreadsheet. Filter by the SPRUCE contract number and you can see every task order — which prime won it, how much, when. You can see the pace of issuance accelerating or slowing. Every award has a period of performance. A contract ending in 8 months means a recompetition is likely being planned right now. That's your signal to start positioning. Filter by small business awards at VA and CMS. You'll see typical deal sizes, whether they prefer set-asides or full-and-open competition — where any qualified company, large or small, can bid — and which contracting offices are most active. The data often includes names and offices. These are the people you'd meet at an industry day. They're also the people a small business liaison officer could introduce you to. FPDS tracks whether an award has a small business subcontracting plan. If a large prime won a $50M contract with a subcontracting plan, they're required to use small business subs — and you now know the contract to ask about. If a vehicle has a $3B ceiling and $800M has been obligated in 2 years, you can estimate the pace and remaining runway. SPRUCE with $2B+ remaining and active task orders tells you the pipeline is alive. Sort by vendor, deal size, and contract vehicle. You'll see Oddball's chatbot awards, CivicActions' CMS work, and dozens of other contracts. Cross-reference the contract numbers with SAM.gov to find any related solicitations. This is free competitive intelligence that takes a few hours of spreadsheet work — and most new entrants never bother to do it.",
  },
  {
    id: "accessibility",
    title: "4. Pursue state and federal website accessibility opportunities",
    badge: "Revenue stream",
    body: "Section 508 of the Rehabilitation Act requires that all federal digital services and software be accessible to people with disabilities — it's non-negotiable across every agency. The April 2026 ADA deadline extends this to all state and local government websites under WCAG 2.1 AA. Many aren't compliant yet. This is a concrete, deadline-driven sales opportunity: agencies and state governments need audits, remediation, and ongoing compliance monitoring. Point11 can position accessibility as a service line that pairs naturally with web modernization and AI work.",
  },
  {
    id: "certifications",
    title: "5. Get all of the competitive advantages we are eligible for",
    badge: "Certifications",
    body: "Start with HUBZone — Point11's most valuable lever. Sole-source authority up to $5.5M, a unique 10% price preference, and only ~5–7K certified firms nationwide. The government has never met its 3% HUBZone goal, so agencies are actively looking for certified firms. Verify the Miami Beach office address on the SBA HUBZone map and ensure 35% employee residency. Processing takes 3–5 months. See the Advantages tab for the full list of certifications and the recommended sequencing.",
  },
  {
    id: "linkedin",
    title: "6. Set up LinkedIn to speak federal",
    badge: "Online presence",
    body: "Update company and personal profiles to mention your NAICS codes, SAM registration status, UEI number, and the agencies you're targeting (VA, CMS). Use govcon terminology — \"small business,\" \"HUBZone,\" \"subcontracting partner,\" \"GSA Schedule.\" Follow and engage with contracting officers, program managers, and small business liaison officers at target agencies. Post about your capabilities in terms the government cares about: compliance, security posture, accessibility, and past performance. This is where BD leads at primes will check you out before responding to your outreach.",
  },
  {
    id: "primes",
    title: "7. Reach out to primes with current large contracts (AI chatbots for VA)",
    badge: "Subcontracting",
    body: "On any contract over $750K, primes are legally required to commit to subcontracting a percentage of the work to small businesses and report on their progress. They need small business partners. You're not cold-calling; you're offering something they need. The largest primes in Point11's NAICS codes are Booz Allen Hamilton, Leidos, CACI International, Accenture Federal Services, SAIC, Deloitte Federal, General Dynamics IT, Peraton, and ManTech. For SPRUCE specifically, identify the 10 primes on that vehicle. Start with LinkedIn messages to BD leads. Something like: \"We're a small AI/web development firm, we see you're on the VA SPRUCE vehicle, we'd like to explore subcontracting opportunities.\" Attach the capability statement. It's that direct.",
  },
  {
    id: "liaison-officers",
    title: "8. Look up the small business liaison officers at VA and CMS",
    badge: "Agency contacts",
    body: "Every major agency has a small business liaison officer — a government employee whose specific job is to connect small businesses with contracting opportunities. Their contact info is public on SBA.gov. They can tell you what procurements are coming, which program offices are buying, and which primes hold the relevant vehicles. This is free, legal, and underused. Also check for expiring contracts — any award with a period of performance ending in the next 6–12 months likely has a recompetition being planned now. The liaison officer can confirm whether a follow-on is expected and how to position for it.",
  },
  {
    id: "sba-matchmaking",
    title: "9. Register for SBA matchmaking events",
    badge: "Face-to-face meetings",
    body: "These are structured speed-dating sessions between small businesses and primes/agencies, organized by the SBA and held virtually and in-person throughout the year. You get 10–15 minute one-on-one meetings with procurement decision-makers and prime contractor BD teams. Come with your capability statement, your SAM registration details, and a clear pitch: what you do, which agencies you target, and what vehicles or certifications you hold. These events are free and often the fastest way to get a face-to-face with someone who can actually give you work.",
  },
  {
    id: "industry-days",
    title: "10. Sign up for VA and CMS industry days",
    badge: "Procurement intel",
    body: "Industry days are posted on SAM.gov or agency websites when upcoming procurements are being briefed. You'll hear directly from program managers what they need, and you'll be in a room with primes who are forming teams. These are free and open to any registered vendor. Also join ACT-IAC — the American Council for Technology–Industry Advisory Council — the most tech-focused govcon association. Their events are specifically designed for government and industry to mix. Not cheap, but the signal-to-noise ratio is high. AFCEA and the Professional Services Council are also worth tracking for defense-adjacent opportunities.",
  },
  {
    id: "rfis",
    title: "11. Start responding to every relevant RFI on SAM.gov for VA and CMS",
    badge: "Name recognition",
    body: "RFIs — Requests for Information — aren't contracts. You won't win anything from them directly. But your response gets read by the program office and contracting officer who are shaping the eventual solicitation. A well-written RFI response puts Point11 on their radar, demonstrates capability, and can influence how the requirements get written. It's also practice for proposal writing. Set up saved searches on SAM.gov for your NAICS codes filtered to VA and CMS so you're notified when new RFIs drop. Responding consistently builds name recognition with the people who decide what gets bought and from whom.",
  },
  {
    id: "gsa-sbir",
    title: "12. Cite GSA Startup Springboard and monitor SBIR reauthorization",
    badge: "Funding pathways",
    body: "If Point11 is under two years old, the GSA Schedule application must explicitly cite the Startup Springboard program, which allows executive and investor experience to substitute for corporate track record. Without citing Springboard, the application will likely be rejected on experience grounds. Separately, monitor sbir.gov for SBIR/STTR reauthorization — program authority lapsed in October 2025 but reauthorization is expected. When new solicitations reopen, a Phase I application ($150–300K) for Point11's AI technology could prove the concept and unlock unlimited sole-source Phase III contracts — no competition, no dollar cap, no time limit, and 20 years of data rights.",
  },
  {
    id: "dc-presence",
    title: "13. Build a presence in the DC metro area",
    badge: "Relationship building",
    body: "The govcon ecosystem is heavily concentrated in Northern Virginia especially. Most primes are headquartered there, agency program offices are there, and the conferences and happy hours where deals start are disproportionately there. You don't need a full office, but regular travel for industry days, SBA events, ACT-IAC meetings, and prime partner visits will accelerate relationship-building significantly. Many introductions and teaming conversations happen informally at these events — being physically present matters more in govcon than in most industries.",
  },
];

const STORAGE_KEY = "point11-action-items-checked";

export default function ActionItemsPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  const completedCount = Object.values(checked).filter(Boolean).length;

  if (!loaded) return null;

  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Action Items</h1>
        <p className="mt-2 text-muted-foreground">
          What Point11 needs to do, in order.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {completedCount} of {ACTION_ITEMS.length} completed
        </p>
      </div>

      <div className="space-y-4">
        {ACTION_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg border p-4 transition-colors ${
              checked[item.id] ? "bg-green-50 border-green-200" : ""
            }`}
          >
            <div className="flex gap-3">
              <Checkbox
                id={item.id}
                checked={!!checked[item.id]}
                onCheckedChange={() => toggle(item.id)}
                className="mt-1 shrink-0"
              />
              <div className="space-y-2">
                <label
                  htmlFor={item.id}
                  className={`text-base font-medium cursor-pointer ${
                    checked[item.id] ? "line-through" : ""
                  }`}
                >
                  {item.title}
                </label>
                <Badge
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {item.badge}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
