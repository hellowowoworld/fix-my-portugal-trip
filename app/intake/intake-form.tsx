"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const travelStyles = [
  "classic sightseeing",
  "food/wine",
  "nightlife",
  "offbeat/alternative",
  "beaches",
  "history/culture",
  "nature/hiking",
  "romantic",
  "solo travel",
  "family-friendly",
  "luxury-light",
  "budget-conscious",
  "road trip",
  "relocation scouting",
  "slow travel",
  "avoid tourist traps"
];

const requiredFields = [
  "name",
  "email",
  "travelDates",
  "travelers",
  "ageRange",
  "firstTime",
  "currentItinerary",
  "citiesRegions",
  "flightsBooked",
  "budgetLevel",
  "biggestConcern"
];

type FormStatus = "idle" | "submitting" | "error";

export function IntakeForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const missing = requiredFields.filter((field) => !String(formData.get(field) || "").trim());
    const consent = formData.get("consent") === "on";

    if (missing.length || !consent) {
      setStatus("error");
      setError("Please complete the required fields and confirm the planning-advice consent.");
      return;
    }

    const response = await fetch("/api/intake", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      setStatus("error");
      setError(body?.error || "Something went wrong. Please try again.");
      return;
    }

    form.reset();
    router.push("/success");
  }

  return (
    <section className="section-pad">
      <form
        className="mx-auto grid max-w-4xl gap-8 px-5 sm:px-6 lg:px-8"
        onSubmit={onSubmit}
      >
        {error ? (
          <div className="rounded-md border border-clay bg-clay/10 p-4 font-bold text-clay" role="alert">
            {error}
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" required type="email" />
          <Field label="Travel dates" name="travelDates" required placeholder="May 4-12, 2026" />
          <Field label="Number of travelers" name="travelers" required />
          <Field label="Age range" name="ageRange" required placeholder="30s, 40s, mixed family ages..." />
          <Select label="First time in Portugal?" name="firstTime" required options={["yes", "no"]} />
        </div>

        <TextArea
          label="Current itinerary"
          name="currentItinerary"
          required
          rows={8}
          placeholder="Paste the draft day by day. Rough is fine."
        />
        <Field label="Google Doc/link to itinerary optional" name="itineraryLink" type="url" />
        <TextArea label="Cities/regions planned" name="citiesRegions" required rows={4} />
        <TextArea label="Accommodation booked?" name="accommodationBooked" rows={4} />
        <Select label="Flights booked?" name="flightsBooked" required options={["yes", "no"]} />

        <fieldset className="rounded-md border border-line p-5">
          <legend className="px-2 text-sm font-black uppercase tracking-[0.1em] text-forest">
            Travel style
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {travelStyles.map((style) => (
              <label key={style} className="flex items-start gap-3 rounded-md border border-line bg-white/30 p-3 font-bold">
                <input className="mt-1 accent-forest" type="checkbox" name="travelStyle" value={style} />
                <span>{style}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <Select
          label="Budget level"
          name="budgetLevel"
          required
          options={["budget", "mid-range", "comfortable", "luxury-light"]}
        />
        <TextArea label="Mobility constraints" name="mobilityConstraints" rows={4} />
        <TextArea label="Dietary restrictions" name="dietaryRestrictions" rows={4} />
        <TextArea label="Must-see places" name="mustSeePlaces" rows={4} />
        <TextArea label="Places you want to avoid" name="placesToAvoid" rows={4} />
        <TextArea label="Biggest concern" name="biggestConcern" required rows={4} />

        <label className="flex items-start gap-3 rounded-md border border-line bg-white/35 p-5 text-sm font-bold leading-6">
          <input className="mt-1 accent-forest" type="checkbox" name="consent" required />
          <span>
            I understand this is planning advice only. I am responsible for
            confirming bookings, opening hours, schedules, prices, safety
            conditions, travel documents, entry rules, and third-party provider
            terms. I understand this does not include legal, immigration, tax,
            medical, or emergency advice.
          </span>
        </label>

        <button
          className="focus-ring min-h-12 rounded-full bg-forest px-6 py-3 text-base font-black text-paper transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Submit itinerary"}
        </button>
      </form>
    </section>
  );
}

function Field({
  label,
  name,
  required = false,
  type = "text",
  placeholder
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-black uppercase tracking-[0.08em] text-forest">
      {label}
      <input
        className="focus-ring rounded-md border border-line bg-white/45 px-4 py-3 text-base font-semibold normal-case tracking-normal text-ink placeholder:text-muted"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  required = false,
  rows,
  placeholder
}: {
  label: string;
  name: string;
  required?: boolean;
  rows: number;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-black uppercase tracking-[0.08em] text-forest">
      {label}
      <textarea
        className="focus-ring rounded-md border border-line bg-white/45 px-4 py-3 text-base font-semibold normal-case leading-7 tracking-normal text-ink placeholder:text-muted"
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </label>
  );
}

function Select({
  label,
  name,
  required = false,
  options
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="grid gap-2 text-sm font-black uppercase tracking-[0.08em] text-forest">
      {label}
      <select
        className="focus-ring rounded-md border border-line bg-white/45 px-4 py-3 text-base font-semibold normal-case tracking-normal text-ink"
        name={name}
        required={required}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
