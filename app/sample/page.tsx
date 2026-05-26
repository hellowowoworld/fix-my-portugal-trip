import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const experienceNotes = [
  "Day 1 asks a jet-lagged traveler to land, get bags, reach the hotel, handle check-in timing, climb Alfama, and still make Bairro Alto dinner feel fun.",
  "Day 2 turns Sintra into a speed errand. Palace queues, hills, transfers, and Cascais in the same day means you spend the day watching the clock.",
  "Days 3-5 pretend long drives are neutral. They are not. They are luggage, parking, tolls, fatigue, and less useful time in the places you came to see.",
  "Day 7 depends on every train, transfer, bag drop, and airport step behaving perfectly. That is not a plan. That is a bet."
];

const flags = [
  [
    "False efficiency",
    "Google Maps makes Lisbon to Lagos to Porto look like a solvable driving problem. It leaves out bathroom stops, toll decisions, parking, check-in windows, and the fact that nobody enjoys arriving tired at 9 p.m."
  ],
  [
    "Sintra is underbuilt",
    "Sintra needs an early start, clear priorities, and crowd tolerance. Pairing it with Cascais is how you turn two good places into one rushed day."
  ],
  [
    "The Algarve is too expensive in time",
    "Two Algarve nights can work. One useful Algarve day between Lisbon and Porto mostly buys you road time, luggage handling, and a beach you may barely use."
  ],
  [
    "The Douro is being treated like a checkbox",
    "A Douro day from Porto can be worth it, but not when it is squeezed between a late arrival and a return-to-Lisbon departure day."
  ],
  [
    "The car solves the wrong problem",
    "A rental car is useful for some rural routing. Here it adds city driving, parking stress, and one-way logistics to a route that trains handle better."
  ]
];

const after = [
  [
    "Day 1",
    "Arrive Lisbon. Stay central but practical. Dinner close to the hotel. No major sightseeing.",
    "Reason: arrival days are for absorbing delays, jet lag, luggage, and check-in. Alfama can wait until legs and patience work again."
  ],
  [
    "Day 2",
    "Lisbon: choose one hill-heavy zone and one flatter zone. Example: Baixa/Chiado plus Príncipe Real, or Alfama/Graça if you are ready for stairs.",
    "Reason: Lisbon rewards wandering, but the hills punish overconfidence. Build one coherent route instead of bouncing between viewpoints."
  ],
  [
    "Day 3",
    "Sintra as a dedicated early-start day. Cap it at two major stops. Skip Cascais unless Sintra is cut.",
    "Reason: Sintra is not a casual morning errand. The win is fewer priorities done properly, not four half-experiences and a late train back."
  ],
  [
    "Day 4",
    "Train to Porto. Check in, then do a contained Ribeira/Vitória evening with dinner planned near the route.",
    "Reason: this becomes a real transfer day, not a fake sightseeing day. You still get Porto that evening without pretending the move costs nothing."
  ],
  [
    "Day 5",
    "Porto full day. Add the food/wine layer here instead of chasing another region.",
    "Reason: Porto has enough texture for a full day. This is where the trip starts feeling chosen instead of collected."
  ],
  [
    "Day 6",
    "Douro Valley from Porto only if you accept the long day. Otherwise make it a slower Porto day with Vila Nova de Gaia.",
    "Reason: the Douro is the optional stretch, not the structural beam. If the trip is already tiring, do not add a prestige day just to say you went."
  ],
  [
    "Day 7",
    "Return to Lisbon as a departure buffer, or better, change flights to leave from Porto if possible.",
    "Reason: same-day long-distance travel before an international flight is where small delays become expensive."
  ]
];

const decisions = [
  ["Cut", "The Algarve from this version. It is too far south for a 7-day Lisbon/Porto trip unless the whole itinerary pivots around it."],
  ["Move", "Douro after a full Porto day, and only if the traveler accepts the long-day tradeoff."],
  ["Keep", "Lisbon, Sintra, and Porto. Those three already make a complete first Portugal trip."],
  ["Change", "The final Lisbon return becomes a buffer, not a bonus sightseeing day with luggage."]
];

const whyBetter = [
  "It removes the longest north-south driving mistake.",
  "It turns transfer days into honest transfer days.",
  "It gives Sintra enough structure to be worth doing.",
  "It keeps one optional stretch instead of three competing ones.",
  "It lowers the chance that a small delay breaks the departure day."
];

const bluntWarnings = [
  "Do not add Cascais back unless you cut something else. It is not free.",
  "Do not rent a car in Lisbon for this version. The train is cleaner for the main moves.",
  "Do not make Day 7 ambitious if your flight leaves Lisbon. That is the day for margin.",
  "If the Algarve is non-negotiable, rebuild the trip around Lisbon plus Algarve and drop Porto/Douro."
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
            This is the kind of written judgment the paid review is built to provide.
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
            <p className="text-sm font-black uppercase tracking-[0.12em] text-paper/70">Quick verdict</p>
            <h2 className="mt-3 text-2xl font-black">Good places, bad sequence.</h2>
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
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Lived experience</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight">
                What this trip would actually feel like
              </h2>
            </div>
            <div className="space-y-3">
              {experienceNotes.map((note) => (
                <p key={note} className="rounded-md border border-line bg-white/35 p-4 font-bold leading-7 text-muted">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Biggest problems</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight">The failure points are practical, not mysterious.</h2>
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
            {after.map(([day, plan, reason]) => (
              <div key={day} className="grid gap-3 border-b border-line bg-white/30 p-5 last:border-b-0 sm:grid-cols-[8rem_1fr]">
                <p className="font-black text-forest">{day}</p>
                <div>
                  <p className="font-bold leading-7">{plan}</p>
                  <p className="mt-2 leading-7 text-muted">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-white/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">Why it works better</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight">
              Less geography. More usable trip.
            </h2>
          </div>
          <div className="space-y-3">
            {whyBetter.map((item) => (
              <p key={item} className="rounded-md border border-line bg-paper p-4 text-lg font-extrabold">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Final blunt warnings</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight">
              The repaired version only works if you stop reloading the mistake.
            </h2>
          </div>
          <div className="space-y-3">
            {bluntWarnings.map((warning) => (
              <p key={warning} className="rounded-md border border-line bg-white/35 p-4 font-bold leading-7 text-muted">
                {warning}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-forest text-paper">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-paper/70">CTA</p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
            If your itinerary has the same problem — good places, bad sequence — I&apos;ll fix it before you build the trip around it.
          </h2>
          <p className="mt-5 text-lg font-bold leading-8 text-paper/80">
            Send the draft. I&apos;ll flag what fails, what to cut, what to move,
            and the cleaner version that gives the trip a real chance.
          </p>
          <div className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex min-h-12 justify-center rounded-full bg-paper px-5 py-3 text-sm font-black text-forest transition hover:bg-white sm:text-base"
                href={paymentLink}
              >
                Fix My Itinerary — €59
              </Link>
              <Link
                className="focus-ring inline-flex justify-center rounded-full border border-paper/30 px-5 py-3 text-sm font-black transition hover:border-paper"
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
