import Link from "next/link";

export function SiteHeader() {
  const paymentLink = process.env.STRIPE_PAYMENT_LINK || "/intake";

  return (
    <header className="border-b border-line/80 bg-paper/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link className="focus-ring text-sm font-black uppercase tracking-[0.16em]" href="/">
          Fix My Portugal Trip
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4 text-sm font-bold">
          <Link className="focus-ring hidden text-muted hover:text-ink sm:inline" href="/sample">
            Sample
          </Link>
          <Link
            className="focus-ring rounded-full bg-forest px-4 py-2 text-paper transition hover:bg-ink"
            href={paymentLink}
          >
            Start €59
          </Link>
        </nav>
      </div>
    </header>
  );
}
