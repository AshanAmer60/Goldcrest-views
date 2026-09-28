import { NextResponse } from "next/server";

type Enquiry = {
  full_name?: string;
  phone?: string;
  email?: string;
  city_country?: string;
  unit_type?: string;
  message?: string;
  created_at?: string;
};

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const required = ["full_name", "phone", "email", "city_country", "unit_type"] as const;
  const missing = required.some((key) => !String(body[key] ?? "").trim());
  if (missing || !String(body.email).includes("@")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const record = {
    full_name: String(body.full_name).trim(),
    phone: String(body.phone).trim(),
    email: String(body.email).trim(),
    city_country: String(body.city_country).trim(),
    unit_type: String(body.unit_type).trim(),
    message: String(body.message ?? "").trim(),
    created_at: body.created_at,
  };

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.info("Goldcrest Views enquiry (sheet not connected)", record);
    return NextResponse.json({ ok: true });
  }

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
    redirect: "manual",
  });

  if (response.status >= 400) {
    console.error("Goldcrest Views enquiry sheet write failed", response.status);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
