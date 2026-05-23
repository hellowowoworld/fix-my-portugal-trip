import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

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

const labels: Record<string, string> = {
  name: "Name",
  email: "Email",
  travelDates: "Travel dates",
  travelers: "Number of travelers",
  ageRange: "Age range",
  firstTime: "First time in Portugal?",
  currentItinerary: "Current itinerary",
  itineraryLink: "Google Doc/link",
  citiesRegions: "Cities/regions planned",
  accommodationBooked: "Accommodation booked?",
  flightsBooked: "Flights booked?",
  travelStyle: "Travel style",
  budgetLevel: "Budget level",
  mobilityConstraints: "Mobility constraints",
  dietaryRestrictions: "Dietary restrictions",
  mustSeePlaces: "Must-see places",
  placesToAvoid: "Places to avoid",
  biggestConcern: "Biggest concern"
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const consent = formData.get("consent") === "on";
  const missing = requiredFields.filter((field) => !String(formData.get(field) || "").trim());

  if (missing.length || !consent) {
    return NextResponse.json(
      { error: "Please complete the required fields and consent checkbox." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!resendApiKey || !ownerEmail) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please contact the site owner." },
      { status: 500 }
    );
  }

  const payload = Object.keys(labels).map((key) => {
    const value =
      key === "travelStyle"
        ? formData.getAll(key).join(", ")
        : String(formData.get(key) || "").trim();

    return {
      label: labels[key],
      value: value || "Not provided"
    };
  });

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; color: #22211d; line-height: 1.55;">
      <h1 style="font-size: 24px;">New Fix My Portugal Trip intake</h1>
      ${payload
        .map(
          (item) => `
            <section style="border-top: 1px solid #ddd2c0; padding: 14px 0;">
              <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #164b37;">${escapeHtml(item.label)}</h2>
              <p style="white-space: pre-wrap; margin: 6px 0 0;">${escapeHtml(item.value)}</p>
            </section>
          `
        )
        .join("")}
      <p style="border-top: 1px solid #ddd2c0; padding-top: 14px; font-weight: 700;">
        Consent confirmed: planning advice only. Customer is responsible for confirming bookings, opening hours, schedules, prices, safety conditions, travel documents, entry rules, and third-party provider terms. No legal, immigration, tax, medical, or emergency advice is provided.
      </p>
    </div>
  `;

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: "Fix My Portugal Trip <onboarding@resend.dev>",
      to: ownerEmail,
      replyTo: String(formData.get("email")),
      subject: `New itinerary intake: ${String(formData.get("name"))}`,
      html: emailHtml
    });
  } catch {
    return NextResponse.json(
      { error: "The intake could not be emailed. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
