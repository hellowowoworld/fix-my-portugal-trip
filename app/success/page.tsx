import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SuccessPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <p className="eyebrow">Intake received</p>
          <h1 className="mt-5 font-serif text-5xl font-black leading-tight sm:text-6xl">
            Good. Your itinerary is in the repair queue.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            You will receive the review within 3 business days. If anything is
            missing, I will email you instead of guessing.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted">
            Reminder: the review is planning advice only. Confirm bookings,
            schedules, prices, entry rules, travel documents, and provider terms
            before you rely on them.
          </p>
          <Link
            className="focus-ring mt-8 inline-flex rounded-full border border-ink/20 px-5 py-3 text-sm font-black transition hover:border-forest hover:text-forest"
            href="/"
          >
            Return home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
