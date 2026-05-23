import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IntakeForm } from "./intake-form";

export default function IntakePage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
          <p className="eyebrow">Trip intake</p>
          <h1 className="mt-5 font-serif text-5xl font-black leading-tight sm:text-6xl">
            Send the messy version. That is the point.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            The more honest the draft, the better the repair. Include fixed
            bookings, doubts, and anything you already suspect might be a bad idea.
          </p>
          <div className="mt-6 rounded-md border border-line bg-white/35 p-5">
            <h2 className="text-sm font-black uppercase tracking-[0.1em] text-forest">
              Before you submit
            </h2>
            <p className="mt-3 leading-7 text-muted">
              This is itinerary planning advice only. You are responsible for
              confirming bookings, opening hours, schedules, prices, safety
              conditions, travel documents, entry rules, and provider terms.
              No legal, immigration, tax, medical, or emergency advice is provided.
            </p>
          </div>
        </div>
      </section>
      <IntakeForm />
      <SiteFooter />
    </main>
  );
}
