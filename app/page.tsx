import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const problemItems = [
  [
    "Lisbon, Porto, Douro, and the Algarve in 7 days",
    "Possible on paper. Mostly transport, packing, and mild regret in real life."
  ],
  [
    "Sintra treated like a quick half-day",
    "It is not a casual add-on when palace timing, hills, crowds, and transfers are involved."
  ],
  [
    "Day trips stacked back to back",
    "Nazaré, Óbidos, Évora, Cascais, and wine country all start to blur when every day is a transfer puzzle."
  ],
  [
    "Wrong neighborhood for the actual trip",
    "Pretty streets can mean bad sleep, steep luggage walks, or a 25-minute ride before every useful thing."
  ],
  [
    "Car rental used as a confidence blanket",
    "A car helps in some regions. In Lisbon and Porto it can become paid anxiety with mirrors."
  ],
  [
    "Generic lists with no route logic",
    "Ten good ideas can still make one bad day if they fight the map, the heat, and opening hours."
  ]
];

const checks = [
  "Route order and backtracking",
  "Night count by city",
  "Transit gaps and car rental logic",
  "Neighborhood fit",
  "Day-trip load",
  "Heat, hills, and mobility friction",
  "Tourist-trap risk",
  "Pacing by travel style"
];

const vibeLayers = [
  "Nightlife",
  "Food/wine",
  "Offbeat",
  "Slow travel",
  "Relocation scouting",
  "Road trip"
];

const faqs = [
  {
    q: "Do you book hotels, restaurants, or tours?",
    a: "No. This is itinerary repair and planning advice. You handle bookings and confirmations."
  },
  {
    q: "What if my trip is longer than 7 days?",
    a: "The launch offer covers up to 7 trip days. Send the full plan and I will focus the repair on the highest-risk stretch."
  },
  {
    q: "Is this only for first-time visitors?",
    a: "No. It works especially well for second trips too, because repeat visitors often need better route logic, not another top-10 list."
  },
  {
    q: "Can you help if flights or hotels are already booked?",
    a: "Yes. I will work around fixed pieces and flag what is still worth changing."
  },
  {
    q: "Can I see what the review looks like before paying?",
    a: "Yes. The sample fix shows the kind of blunt route critique and cleaner version you should expect."
  },
  {
    q: "What is the refund policy?",
    a: "If your review feels generic or does not give you specific changes to make, email within 48 hours and I will refund it. This does not cover ignored advice, changed travel plans, third-party problems, or unavailable bookings."
  },
  {
    q: "Do you give immigration, legal, medical, tax, or emergency advice?",
    a: "No. This is itinerary planning advice only. Those questions need the proper official source or professional."
  }
];

export default function Home() {
  const paymentLink = process.env.STRIPE_PAYMENT_LINK || "/intake";

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Portugal itinerary repair</p>
            <h1 className="mt-5 font-serif text-5xl font-black leading-[0.96] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Planning Portugal? I&apos;ll fix the itinerary before it wastes your trip.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              For Canadians and Americans who already have a draft route. Pay €59,
              send the messy plan, and get a day-by-day critique plus a cleaner
              version within 3 business days.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-black uppercase tracking-[0.08em] text-forest sm:grid-cols-3">
              <p className="rounded-md border border-line bg-white/35 p-3">Up to 7 trip days</p>
              <p className="rounded-md border border-line bg-white/35 p-3">Route and logistics repair</p>
              <p className="rounded-md border border-line bg-white/35 p-3">€59 launch price</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={paymentLink}>Fix My Itinerary — €59</CtaLink>
              <CtaLink href="/sample" variant="secondary">
                See a Sample Fix
              </CtaLink>
            </div>
          </div>
          <aside className="border-l-0 border-t border-line pt-8 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="eyebrow">For draft trips, not blank pages</p>
            <div className="mt-5 space-y-4">
              {[
                ["Who it is for", "North Americans with flights, dates, rough stops, or a half-built Google Doc."],
                ["What you get", "A written itinerary repair: what fails, what to cut, what to move, and a better version."],
                ["What it is not", "Full-service travel planning, booking support, or a glossy list of places everyone already found."]
              ].map(([title, body]) => (
                <div key={title} className="rounded-md border border-line bg-white/35 p-5">
                  <h2 className="text-sm font-black uppercase tracking-[0.08em]">{title}</h2>
                  <p className="mt-2 leading-7 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">The common failure mode</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Most Portugal itineraries fail in boring ways
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              The problem usually is not taste. It is math: hotel nights, train
              times, hills, heat, check-in windows, and day trips that quietly eat the trip.
            </p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problemItems.map(([title, body]) => (
              <div key={title} className="rounded-md border border-line bg-white/35 p-5">
                <h3 className="text-lg font-extrabold leading-7">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">What you get</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              A written repair note you can act on.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Not a vague recommendation list. Not a full booking service. A
              practical pass on whether your actual plan works.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "A day-by-day critique marking what is realistic, rushed, redundant, or out of order.",
              "A cleaner day-by-day version with better route flow and fewer avoidable transfers.",
              "Cut/move/keep notes so you know which parts are worth defending and which parts are not.",
              "Logistics warnings for transit, car rental, hotel location, luggage drag, opening-day risk, and overpacked day trips.",
              "One travel-style layer such as food/wine, nightlife, slow travel, road trip, or relocation scouting."
            ].map((item) => (
              <p key={item} className="border-b border-line pb-4 text-lg font-bold leading-8">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-white/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="eyebrow">Why this exists</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Built by a Canadian living in Portugal.
            </h2>
          </div>
          <div className="space-y-5 text-lg font-bold leading-8 text-muted">
            <p>
              I look at Portugal trips from both sides: the North American habit
              of trying to fit everything in, and the local reality that hills,
              transit friction, check-in timing, restaurant hours, and day-trip
              pacing do not care what Google Maps promised.
            </p>
            <p>
              The most expensive mistake is usually not a bad hotel. It is an
              overpacked schedule built on optimism, screenshots, and no buffer.
              This service is designed to catch that before you land.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">The diagnostic pass</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                What I check
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {checks.map((check) => (
                <div key={check} className="flex items-center gap-3 rounded-md border border-line p-4">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-forest" />
                  <p className="font-extrabold">{check}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-md border border-line bg-forest p-6 text-paper sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-paper/70">
              Optional vibe layer
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {vibeLayers.map((layer) => (
                <span key={layer} className="rounded-full border border-paper/30 px-4 py-2 text-sm font-bold">
                  {layer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="eyebrow">How it works</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Pay €59", "Use the Stripe checkout link. After payment, Stripe sends you to the intake page."],
              ["2", "Submit the draft", "Send dates, route, travel style, fixed bookings, and the part you are worried about."],
              ["3", "Get the repair", "Receive a written itinerary critique and cleaner version within 3 business days."]
            ].map(([number, title, body]) => (
              <div key={title} className="rounded-md border border-line bg-white/35 p-6">
                <p className="text-sm font-black text-forest">{number}</p>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-pad border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-4 font-serif text-5xl font-black">€59</h2>
            <p className="mt-3 text-lg font-bold text-muted">Launch price for one itinerary repair.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <CtaLink href={paymentLink}>Fix My Itinerary — €59</CtaLink>
              <CtaLink href="/sample" variant="secondary">
                See a Sample Fix
              </CtaLink>
            </div>
          </div>
          <div className="rounded-md border border-line bg-white/35 p-6 sm:p-8">
            <h3 className="text-2xl font-black">Included</h3>
            <ul className="mt-5 space-y-3 text-lg font-bold leading-7 text-muted">
              <li>Review of up to 7 trip days</li>
              <li>Day-by-day critique</li>
              <li>Improved version</li>
              <li>Logistics warnings</li>
              <li>One travel-style layer</li>
            </ul>
            <div className="mt-6 rounded-md border border-line bg-paper p-4">
              <h4 className="font-black">Simple refund policy</h4>
              <p className="mt-2 leading-7 text-muted">
                If your review feels generic or does not give you specific
                changes to make, email within 48 hours and I&apos;ll refund it.
                This does not cover ignored advice, changed travel plans,
                third-party problems, or unavailable bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-white/30">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="eyebrow">Scope and boundaries</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight sm:text-5xl">
            Planning advice only. You still own the bookings.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            You are responsible for booking and confirming opening hours,
            schedules, prices, safety conditions, travel documents, entry rules,
            and third-party provider terms. I do not provide legal, immigration,
            tax, medical, or emergency advice.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            The job is narrower and more useful: flag itinerary problems before
            they become expensive, tiring, or annoying.
          </p>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="eyebrow">FAQ</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-md border border-line p-6">
                <h3 className="text-xl font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-muted">{faq.a}</p>
                {faq.q === "Can I see what the review looks like before paying?" ? (
                  <div className="mt-4">
                    <CtaLink href="/sample" variant="secondary">
                      See a Sample Fix
                    </CtaLink>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <p className="eyebrow">Final check before Portugal</p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
            If your plan only works when everything goes perfectly, it does not work.
          </h2>
          <div className="mt-8">
            <CtaLink href={paymentLink}>Fix My Itinerary — €59</CtaLink>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
