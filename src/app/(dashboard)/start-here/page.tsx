import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Shield,
  Lightbulb,
  Radar,
  DollarSign,
  Receipt,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

const federalLinks = [
  {
    href: "/overview",
    icon: BookOpen,
    title: "Sales Overview",
    description:
      "How federal procurement works, where contracts are posted, which NAICS codes matter, and why Point11\u2019s services are in demand.",
  },
  {
    href: "/competitive-advantage",
    icon: Shield,
    title: "Sales Advantages",
    description:
      "The certifications, contract vehicles, and funding pathways that shift the odds \u2014 and the order Point11 should pursue them.",
  },
  {
    href: "/tactics",
    icon: Lightbulb,
    title: "Sales Tactics",
    description:
      "How to approach primes, respond to RFIs, register on portals, and build relationships with contracting officers.",
  },
  {
    href: "/opportunities",
    icon: Radar,
    title: "Current Opps",
    description:
      "Top 5 federal opportunities for February 2026, plus detailed analysis of direct and channel sales.",
  },
  {
    href: "/raising-capital",
    icon: DollarSign,
    title: "Raising Capital",
    description:
      "Grants, SBA-backed loans, and government-backed equity investment \u2014 capital without giving up equity.",
  },
  {
    href: "/tax-incentives",
    icon: Receipt,
    title: "Tax Incentives",
    description:
      "R&D tax credits, QSBS exclusion, and Florida\u2019s no-income-tax advantage.",
  },
];

const stateLinks = [
  {
    href: "/state-overview",
    icon: BookOpen,
    title: "Sales Overview",
    description:
      "How state procurement differs from federal \u2014 shorter cycles, smaller contracts, and the ADA deadline driving urgency.",
  },
  {
    href: "/state-opportunities",
    icon: Radar,
    title: "Current Opps",
    description:
      "WCAG 2.1 AA compliance deadline, direct sales on state portals, and channel sales through state primes.",
  },
  {
    href: "/state-raising-capital",
    icon: DollarSign,
    title: "Raising Capital",
    description:
      "Florida High Tech Corridor grants, SSBCI programs, and state capital programs across target states.",
  },
];

export default function StartHerePage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="mb-8 overflow-hidden rounded-lg">
        <Image
          src="/whitehouse.jpg"
          alt="The White House"
          width={672}
          height={378}
          className="w-full object-cover"
          priority
        />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">Let&rsquo;s sell to the government!</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          This application is your playbook for selling to the United States
          government. It breaks down how federal procurement actually works, where
          the money flows, and the specific levers Point11 can pull to win
          contracts.
        </p>
      </div>

      <div className="space-y-4 mb-10">
        <p className="text-sm leading-relaxed">
          The federal government is the largest buyer on earth &mdash; $141
          billion a year in IT alone &mdash; but the way it buys is nothing like
          the private sector. There are set-asides, contract vehicles,
          certifications, and procurement channels that most companies never
          learn about until it&rsquo;s too late. This guide lays all of it out
          in plain language so Point11 can move quickly and make the right bets.
        </p>
      </div>

      <div className="space-y-3 mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Federal
        </h2>
        {federalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <link.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="flex-1">
              <p className="font-medium">{link.title}</p>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <div className="space-y-3 mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          State
        </h2>
        {stateLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <link.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="flex-1">
              <p className="font-medium">{link.title}</p>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Action Items
        </h2>
        <Link
          href="/action-items"
          className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
        >
          <CheckSquare className="h-5 w-5 shrink-0 text-muted-foreground" />
          <div className="flex-1">
            <p className="font-medium">Action Items</p>
            <p className="text-sm text-muted-foreground">
              13 numbered steps Point11 needs to take, in order, with progress
              tracking.
            </p>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
}
