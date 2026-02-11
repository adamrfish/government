export default function StateOverviewPage() {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Sales Overview</h1>
        <p className="mt-2 text-muted-foreground">
          Selling to State Governments
        </p>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          State and local government is a separate, parallel market. The
          procurement mechanics are simpler than federal — shorter cycles, less
          paperwork, no GSA Schedule required. But contracts are smaller —
          typically $25K–$500K compared to $500K–$10M on the federal side — work
          is more commoditized, and state past performance carries less weight in
          federal proposals. It&apos;s a bridge, not the destination.
        </p>
        <p>
          The key similarity: governments buy through structured procurement, and
          small businesses get preference. The key differences: each state runs
          its own procurement system with no SAM.gov equivalent, there are no
          NAICS-based set-asides, and the relationship dynamics are less
          formalized — you&apos;re more likely to win on price and compliance than on
          pre-solicitation positioning.
        </p>
        <p>
          One time-sensitive opportunity makes state work worth pursuing right
          now.
        </p>
      </div>
    </div>
  );
}
