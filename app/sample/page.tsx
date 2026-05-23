import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const flags = [
  [
    "You lose too much time to repositioning.",
    "Lisbon to Algarve to Porto to Douro to Lisbon is not a route. It is a triangle with penalties."
  ],
  [
    "Sintra is underbuilt.",
    "Doing it after an arrival day or pairing it with Cascais turns the day into queues, hills, and clock-watching."
  ],
  [
    "The Algarve is the wrong sacrifice for this version.",
    "One night in Lagos gives you the transport pain of the Algarve without the payoff."
  ],
  [
    "The Douro is being treated like a checkbox.",
    "A rushed Douro day between Porto and a Lisbon return is possible, but it is not the relaxed wine-country day people imagine."
  ],
  [
    "The car is solving the wrong problem.",
    "Renting early creates Lisbon parking stress and city driving before it creates freedom."
  ]
];

const after = [
  ["Day 1", "Arrive Lisbon. Stay central but practical. Dinner close to the hotel. No major sightseeing."],
  ["Day 2", "Lisbon: Baixa/Chiado/Príncipe Real or Alfama/Graça, not every viewpoint in one day."],
  ["Day 3", "Sintra as a dedicated early-start day. Cap it at two major stops. Skip Cascais unless Sintra is cut."],
  ["Day 4", "Train to Porto. Check in, then do a contained Ribeira/Vitória evening."],
  ["Day 5", "Porto full day. Add the food/wine layer here instead of chasing another region."],
  ["Day 6", "Douro Valley from Porto only if you accept the long day. Otherwise make it a slower Porto day."],
  ["Day 7", "Train back to Lisbon for departure buffer, or fly open-jaw from Porto if flights can change."]
];

const decisions = [
  ["Cut", "One-night Algarve. It is too far for this trip length unless the whole itinerary pivots south."],
  ["Move", "Douro after Porto, not from Lisbon and not squeezed between long transfers."],
  ["Keep", "Lisbon, Sintra, Porto. This is already a full first Portugal trip."],
  ["Change", "Return-to-Lisbon day becomes a buffer, not a sightseeing day with luggage."]
];

export default function SamplePage() {
  const paymentLink = process.env.STRIPE_PAYMENT_LINK || "/intake";

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-20 lg:px-8">
          <p className="eyebrow">Sample fix</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-[0.98] sm:text-6xl">
            Sample itinerary repair: 7 days, 6 places, too much confidence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            This is a realistic before/after critique for a common North
            American first draft: Lisbon, Sintra, Porto, Douro, Algarve, and
            back to Lisbon. The places are good. The sequence is the problem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href={paymentLink}>Fix My Itinerary — €59</CtaLink>
            <CtaLink href="/" variant="secondary">
              Back to the offer
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-md border border-line bg-white/35 p-6">
            <h2 className="text-2xl font-black">Before: the draft</h2>
            <div className="mt-4 space-y-3 leading-8 text-muted">
              <p><strong className="text-ink">Day 1:</strong> Arrive Lisbon, explore Alfama, dinner in Bairro Alto.</p>
              <p><strong className="text-ink">Day 2:</strong> Sintra in the morning, Cascais in the afternoon, sleep Lisbon.</p>
              <p><strong className="text-ink">Day 3:</strong> Pick up car, drive to Lagos, beach afternoon.</p>
              <p><strong className="text-ink">Day 4:</strong> Algarve caves or beaches, sleep Lagos.</p>
              <p><strong className="text-ink">Day 5:</strong> Drive to Porto with stops, late dinner.</p>
              <p><strong className="text-ink">Day 6:</strong> Douro Valley day trip, sleep Porto.</p>
              <p><strong className="text-ink">Day 7:</strong> Train to Lisbon, fly home that evening.</p>
            </div>
          </div>
          <div className="rounded-md border border-line bg-forest p-6 text-paper">
            <h2 className="text-2xl font-black">Main diagnosis</h2>
            <p className="mt-4 leading-8 text-paper/80">
              This itinerary is trying to buy range with fatigue. It technically
              touches Lisbon, Sintra, Porto, Douro, and the Algarve. It does not
              give most of them enough time to be worth the move.
            </p>
            <p className="mt-4 leading-8 text-paper/80">
              The fix is not adding secret stops. The fix is cutting the part
              that makes the route collapse.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Flags</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight">What I would call out</h2>
          </div>
          <div className="space-y-3">
            {flags.map(([title, body]) => (
              <div key={title} className="rounded-md border border-line p-4">
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="mt-2 leading-7 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line bg-white/30">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="eyebrow">Repair decisions</p>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {decisions.map(([label, body]) => (
              <div key={label} className="rounded-md border border-line bg-paper p-5">
                <h2 className="text-sm font-black uppercase tracking-[0.1em] text-forest">{label}</h2>
                <p className="mt-3 font-bold leading-7 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="eyebrow">Better version</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight">
            Lisbon, Sintra, Porto, and maybe Douro. Algarve waits for another trip.
          </h2>
          <div className="mt-6 overflow-hidden rounded-md border border-line">
            {after.map(([day, plan]) => (
              <div key={day} className="grid gap-2 border-b border-line bg-white/30 p-5 last:border-b-0 sm:grid-cols-[8rem_1fr]">
                <p className="font-black text-forest">{day}</p>
                <p className="font-bold leading-7">{plan}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href={paymentLink}>Fix My Itinerary — €59</CtaLink>
              <Link
                className="focus-ring inline-flex justify-center rounded-full border border-ink/20 px-5 py-3 text-sm font-black transition hover:border-forest hover:text-forest"
                href="/"
              >
                Back to the service
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
