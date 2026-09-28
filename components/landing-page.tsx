"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Baby,
  Banknote,
  Building2,
  CalendarRange,
  CalendarDays,
  CarFront,
  ConciergeBell,
  Globe,
  KeyRound,
  Landmark,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  Plus,
  Route,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  TowerControl,
  Trees,
  Waves,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";

const PHONE = "+92 (51) 111 786 123";
const TEL = "tel:+9251111786123";
const WHATSAPP = "https://wa.me/9251111786123";

const NAV = [
  { href: "#project", label: "Project" },
  { href: "#lifestyle", label: "Lifestyle" },
  { href: "#pricing", label: "Ownership" },
  { href: "#gallery", label: "Gallery" },
  { href: "#verify", label: "Verify" },
  { href: "#faq", label: "FAQ" },
];

const UNIT_OPTIONS = [
  "Studio",
  "1 Bedroom",
  "2 Bedroom",
  "3 Bedroom",
  "4 Bedroom",
  "Penthouse / Duplex",
  "Request current official details",
];

const HIGHLIGHTS: { icon: LucideIcon; text: string }[] = [
  { icon: MapPin, text: "DHA Phase II location" },
  { icon: Building2, text: "Adjacent to Giga Mall" },
  { icon: CalendarDays, text: "Flexible 5-year plan" },
  { icon: Landmark, text: "Seven planned towers" },
];

const TRUST: { icon: LucideIcon; text: string }[] = [
  { icon: TowerControl, text: "Seven planned 40-storey residential towers" },
  {
    icon: LayoutGrid,
    text: "Studios, 1–4 bedroom apartments, penthouses and duplexes",
  },
  {
    icon: ShieldCheck,
    text: "Smart-home features, rooftop pools, concierge and 24/7 security",
  },
  {
    icon: Route,
    text: "Giga City location with GT Road / Islamabad Highway connectivity",
  },
];

const FEATURES: { icon: LucideIcon; title: string }[] = [
  { icon: Waves, title: "Rooftop infinity-style pools and panoramic views" },
  { icon: Smartphone, title: "Smart-home automation" },
  { icon: Wind, title: "Central HVAC and high-speed elevators" },
  { icon: Trees, title: "Landscaped podium gardens" },
  { icon: Baby, title: "Children’s play and daycare areas" },
  { icon: ConciergeBell, title: "Concierge and advanced security" },
  { icon: CarFront, title: "Covered parking" },
  { icon: ShoppingBag, title: "Direct proximity to Giga Mall" },
  { icon: KeyRound, title: "Rental-management proposition for overseas investors" },
];

const PRICE_CARDS: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Banknote, label: "Booking amount", value: "Request current official schedule" },
  {
    icon: CalendarDays,
    label: "Installments",
    value: "Flexible plan available; subject to official sales schedule",
  },
  {
    icon: CalendarRange,
    label: "Quarterly / biannual options",
    value: "Confirm with an authorized advisor",
  },
  { icon: Globe, label: "Overseas buyer support", value: "Speak with an advisor" },
];

const GALLERY_FILTERS = [
  { id: "all", label: "All views" },
  { id: "exterior", label: "Exterior Architecture" },
  { id: "interior", label: "Model Apartments" },
  { id: "leisure", label: "Rooftop & Leisure" },
  { id: "podium", label: "Podium Gardens" },
  { id: "construction", label: "Progress" },
  { id: "surroundings", label: "Giga City / Mall" },
];

const GALLERY = [
  {
    id: "exterior",
    src: "https://images.pexels.com/photos/38548576/pexels-photo-38548576.jpeg",
    alt: "Sleek modern architectural towers under clear skies.",
    label: "Exterior Architecture",
  },
  {
    id: "interior",
    src: "https://images.pexels.com/photos/34989208/pexels-photo-34989208.jpeg",
    alt: "Luxurious dining and living room with modern decor and ambient lighting.",
    label: "Model Apartments and Interiors",
  },
  {
    id: "leisure",
    src: "https://images.pexels.com/photos/1870774/pexels-photo-1870774.jpeg",
    alt: "Rooftop infinity pool with city skyline and lounge chairs offering a tranquil escape.",
    label: "Rooftop and Leisure Spaces",
  },
  {
    id: "podium",
    src: "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg",
    alt: "A modern apartment complex featuring green urban park with pathways and recreational structures.",
    label: "Podium Gardens and Social Areas",
  },
  {
    id: "construction",
    src: "https://images.pexels.com/photos/9346038/pexels-photo-9346038.jpeg",
    alt: "High-rise buildings under construction with tower cranes in a cityscape.",
    label: "Construction Progress",
  },
  {
    id: "surroundings",
    src: "https://images.pexels.com/photos/15488418/pexels-photo-15488418.jpeg",
    alt: "Urban modern shopping mall with reflective facade and unique design elements in daylight.",
    label: "Giga City / Giga Mall Surroundings",
  },
];

const VERIFY_ITEMS = [
  "✓ Approved plans / NOC status",
  "✓ Land and project documentation",
  "✓ Booking forms and terms",
  "✓ Authority approvals",
  "✓ Developer authorization letters and authorized sales representative verification",
];

const LEGACY = [
  {
    title: "Giga Group",
    copy: "The group states it has operated since 1956 and has business activity across Pakistan, UAE, South Africa and other markets.",
  },
  {
    title: "Al-Ghurair Giga",
    copy: "Project branding identifies Goldcrest Views as an Al-Ghurair Giga development.",
  },
  {
    title: "Emaar context",
    copy: "Giga Group’s portfolio says it collaborated with Emaar on Canyon Views in DHA Islamabad Phase II Extension; this is not presented as a Goldcrest Views partnership.",
  },
  {
    title: "World Trade Center Islamabad",
    copy: "Al-Ghurair Giga states it developed this project through a joint venture with Al-Ghurair Group, licensed by the World Trade Centers Association, New York.",
  },
];

const EXPERIENCES = [
  "Kubra Khan",
  "Ushna Shah",
  "Chef Gulzar",
  "Faisal Qureshi",
];

const FAQS = [
  {
    q: "Where is Goldcrest Views located?",
    a: "Goldcrest Views is presented as being in Giga City, DHA Phase II Islamabad, adjacent to Giga Mall.",
  },
  {
    q: "What unit types are available?",
    a: "Developer information describes studios, 1–4 bedroom apartments, penthouses and duplexes. Availability should be confirmed with the official sales team.",
  },
  {
    q: "Is a payment plan available?",
    a: "The project is marketed with a flexible five-year payment plan. Request the current official schedule before booking.",
  },
  {
    q: "What amenities are planned?",
    a: "Developer materials reference rooftop pools, smart-home features, concierge, security, landscaped podium areas and parking. Confirm final specifications in the official documentation.",
  },
  {
    q: "Can overseas Pakistanis inquire or invest?",
    a: "The project is marketed with rental-management support for overseas investors. Eligibility, payment channels and documentation should be confirmed directly with authorized representatives.",
  },
  {
    q: "What is the construction status?",
    a: "The official indexed listing marks the project as in progress and includes updates dated July 2026. Request the latest dated update before making a decision.",
  },
  {
    q: "How can I verify approvals and booking documents?",
    a: "Request the exact authority name, approval or NOC number, issue date, valid document, booking form, terms, and authorized representative confirmation before booking.",
  },
];

type Status = { ok: boolean; text: string } | null;

function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm text-muted ${className}`}>{children}</p>;
}

function Photo({
  src,
  alt,
  className,
  preload,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  preload?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={preload}
      className={className ?? "object-cover"}
    />
  );
}

function LeadForm({
  id,
  submitLabel,
  presetMessage,
  showContact,
}: {
  id: "hero" | "modal";
  submitLabel: string;
  presetMessage?: string;
  showContact?: boolean;
}) {
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    let valid = true;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]").forEach((field) => {
      const ok =
        field.value.trim().length > 0 &&
        (field.type !== "email" || field.checkValidity());
      field.closest(".form-field")?.classList.toggle("has-error", !ok);
      if (!ok) valid = false;
    });
    if (!valid) {
      setStatus({ ok: false, text: "Please complete the highlighted fields." });
      return;
    }

    setPending(true);
    const data = new FormData(form);
    const visible = String(data.get("message_visible") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const record = {
      full_name: String(data.get("full_name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      city_country: String(data.get("city_country") ?? "").trim(),
      unit_type: String(data.get("unit_type") ?? ""),
      message: visible || message,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!response.ok) {
        setStatus({
          ok: false,
          text: "We could not confirm your enquiry. Please try again.",
        });
        return;
      }
      setStatus({
        ok: true,
        text: "Thank you. Your enquiry has been saved. An authorized sales team member can share current official details.",
      });
      form.reset();
    } catch {
      setStatus({
        ok: false,
        text: "We could not confirm your enquiry. Please try again.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form id={`${id}LeadForm`} className="mt-5 space-y-3" noValidate onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor={`${id}-name`} className="font-display text-xs font-bold text-navy">
          Full Name
        </label>
        <input
          id={`${id}-name`}
          name="full_name"
          required
          type="text"
          className="mt-1 w-full border border-navy/20 bg-white px-3 py-2.5 text-sm"
        />
        <p className="field-error text-xs text-red-700">Please enter your name.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="form-field">
          <label htmlFor={`${id}-phone`} className="font-display text-xs font-bold text-navy">
            Phone / WhatsApp
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            required
            type="tel"
            className="mt-1 w-full border border-navy/20 bg-white px-3 py-2.5 text-sm"
          />
          <p className="field-error text-xs text-red-700">Required.</p>
        </div>
        <div className="form-field">
          <label htmlFor={`${id}-email`} className="font-display text-xs font-bold text-navy">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            required
            type="email"
            className="mt-1 w-full border border-navy/20 bg-white px-3 py-2.5 text-sm"
          />
          <p className="field-error text-xs text-red-700">Enter a valid email.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="form-field">
          <label htmlFor={`${id}-city`} className="font-display text-xs font-bold text-navy">
            City / Country
          </label>
          <input
            id={`${id}-city`}
            name="city_country"
            required
            type="text"
            className="mt-1 w-full border border-navy/20 bg-white px-3 py-2.5 text-sm"
          />
          <p className="field-error text-xs text-red-700">Required.</p>
        </div>
        <div className="form-field">
          <label htmlFor={`${id}-unit`} className="font-display text-xs font-bold text-navy">
            Preferred Unit Type
          </label>
          <select
            id={`${id}-unit`}
            name="unit_type"
            required
            defaultValue=""
            className="mt-1 w-full border border-navy/20 bg-white px-3 py-2.5 text-sm"
          >
            <option value="">Select</option>
            {UNIT_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <p className="field-error text-xs text-red-700">Please choose an option.</p>
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="font-display text-xs font-bold text-navy">
          Optional message
        </label>
        <textarea
          id={`${id}-message`}
          name={id === "modal" ? "message_visible" : "message"}
          rows={id === "modal" ? 3 : 2}
          key={presetMessage}
          defaultValue={presetMessage}
          className="mt-1 w-full border border-navy/20 bg-white px-3 py-2.5 text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="btn-gold w-full text-sm disabled:opacity-70"
      >
        {pending ? "Sending enquiry…" : submitLabel}
      </button>
      {showContact ? (
        <>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-navy/15 px-4 py-3 text-center text-sm font-semibold text-navy"
          >
            Chat on WhatsApp
          </a>
          <p className="font-display text-center text-xs font-semibold text-navy">
            Direct contact: {PHONE}
          </p>
          <p className="text-xs leading-4 text-muted">
            By submitting, you consent to an authorized sales follow-up regarding this enquiry.
            Official details remain subject to confirmation.
          </p>
        </>
      ) : null}
      {status ? (
        <p className={`text-sm font-bold ${status.ok ? "text-green-800" : "text-red-700"}`} aria-live="polite">
          {status.text}
        </p>
      ) : null}
    </form>
  );
}

export function LandingPage() {
  const [filter, setFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalIntent, setModalIntent] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const locked = modalIntent !== null || lightbox !== null;
    document.body.classList.toggle("overflow-hidden", locked);
    return () => document.body.classList.remove("overflow-hidden");
  }, [modalIntent, lightbox]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setModalIntent(null);
        setLightbox(null);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!modalIntent) return;
    document.getElementById("modal-name")?.focus();
  }, [modalIntent]);

  const visibleGallery = GALLERY.filter((item) => filter === "all" || item.id === filter);

  return (
    <div className="bg-ivory text-muted">
      <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3" aria-label="Goldcrest Views home">
            <Image src="/logo.svg" alt="Giga Group mark" width={40} height={40} className="h-11 w-11" />
            <span className="font-display text-sm font-semibold tracking-[0.14em] text-navy">
              GOLDCREST VIEWS
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-navy/80 lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden text-sm font-semibold text-navy md:inline">
              {PHONE}
            </a>
            <button
              type="button"
              onClick={() => setModalIntent("Request Prices & Payment Plan")}
              className="btn-gold btn-nav px-5 py-3 text-sm"
            >
              Request details
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-navy">
          <Image
            src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="A stunning view of the Dubai Marina skyline illuminated at sunset, showcasing urban city life."
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/50 lg:bg-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(13,8,69,0.88)_0%,rgba(13,8,69,0.62)_36%,rgba(13,8,69,0.28)_68%,rgba(13,8,69,0.4)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
            <div className="reveal flex flex-col justify-center text-white">
              <p className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase">
                <span className="h-px w-8 bg-gold" aria-hidden />
                Goldcrest Views · Giga City
              </p>
              <h1 className="max-w-xl text-[2.65rem] font-medium leading-[1.02] tracking-[-0.03em] text-white [text-shadow:0_8px_32px_rgba(13,8,69,0.45)] sm:text-6xl lg:text-[4.15rem]">
                Elevate Your Life
                <span className="mt-1 block">at Goldcrest Views</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg font-medium leading-snug text-white sm:text-xl">
                Luxury 1, 2 & 3 Bedroom Apartments
                <span className="block">in DHA Phase 2, Islamabad</span>
              </p>
              <p className="mt-3 max-w-lg text-base leading-7 text-white/80">
                Next to Giga Mall · Margalla Hills views · Flexible payment plan
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalIntent("Book a Private Site Visit")}
                  className="btn-gold text-sm"
                >
                  Book a Private Site Visit
                </button>
                <a
                  href="#project"
                  className="border border-white/75 px-7 py-[14px] text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
                >
                  Explore the project
                </a>
              </div>
              <p className="mt-4 text-sm leading-5 text-white/70">
                Indicative architectural imagery shown for atmosphere and direction.
              </p>
              <div className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-white/25 pt-6">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.text}>
                    <item.icon className="mb-2 h-4 w-4 text-gold" aria-hidden />
                    <p className="text-sm font-semibold leading-5 text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside
              className="reveal self-start border border-white/70 bg-white/65 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl backdrop-saturate-150 lg:p-8"
              style={{ animationDelay: "0.16s" }}
            >
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-navy">
                Private sales enquiry
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-navy">Request current official details</h2>
              <p className="mt-2 text-sm leading-5 text-muted">
                Receive verified availability, prices and payment-plan information from an authorized sales team.
              </p>
              <LeadForm id="hero" submitLabel="GET PRICE & PAYMENT PLAN" showContact />
            </aside>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="font-display mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Developer-presented / planned information — request current official details
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TRUST.map((item) => (
                <article
                  key={item.text}
                  className="group border border-transparent bg-white p-6 shadow-[0_12px_40px_rgba(13,8,69,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_40px_rgba(13,8,69,0.14)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center bg-gold/12 text-gold transition duration-300 group-hover:bg-gold group-hover:text-white">
                    <item.icon className="h-6 w-6 transition duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden />
                  </span>
                  <p className="font-display mt-4 text-sm font-bold leading-5 text-navy">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <Kicker>The address</Kicker>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy lg:text-[2.6rem]">
              A landmark address in Islamabad’s evolving skyline
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted">
              Goldcrest Views is presented by Al-Ghurair Giga as a luxury residential community in Giga City,
              Islamabad, with seven planned high-rise towers beside Giga Mall and a mix of apartments, penthouses
              and duplexes.
            </p>
            <button
              type="button"
              onClick={() => setModalIntent("Explore the project")}
              className="btn-gold mt-7 inline-flex cursor-pointer items-center gap-2 text-sm"
            >
              Explore the project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <figure className="relative">
            <div className="relative h-[340px] w-full">
              <Photo
                src="https://images.pexels.com/photos/33528643/pexels-photo-33528643.jpeg"
                alt="Close-up of a luxurious glass facade on a modern high-rise residential building with balconies."
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-muted">
              Developer-presented vision. Request current official details and approved media.
            </figcaption>
          </figure>
        </section>

        <section className="bg-white py-20 text-muted">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative h-[330px] w-full">
              <Photo
                src="https://images.pexels.com/photos/13722886/pexels-photo-13722886.jpeg"
                alt="Sleek modern living room featuring dark tones and elegant furnishings with ambient lighting."
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <div>
              <Kicker>Design philosophy</Kicker>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy lg:text-[2.6rem]">
                Dubai inspiration, Islamabad perspective
              </h2>
              <p className="mt-5 leading-7 text-muted">
                The concept is presented around modern vertical living, refined interiors, smart technology,
                sustainable design principles and city-facing spaces with views toward the Margalla Hills.
              </p>
              <p className="mt-5 border-l-2 border-gold pl-4 text-sm leading-6 text-muted">
                Visuals and specifications are indicative unless confirmed in the current official project
                documentation.
              </p>
            </div>
          </div>
        </section>

        <section id="lifestyle" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <Kicker>Planned lifestyle</Kicker>
            <h2 className="mt-4 text-3xl font-semibold text-navy lg:text-4xl">
              Thoughtfully composed for life above the ordinary
            </h2>
            <p className="mt-3 text-sm text-muted">
              Planned features, as presented by the developer. Confirm final specifications through authorized
              project documents.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="group border border-transparent bg-white p-7 shadow-[0_12px_40px_rgba(13,8,69,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_40px_rgba(13,8,69,0.14)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center bg-gold/12 text-gold transition duration-300 group-hover:bg-gold group-hover:text-white">
                  <feature.icon
                    className="h-6 w-6 transition duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-4 text-[1.2rem] font-semibold text-navy">{feature.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Kicker>Ownership</Kicker>
            <h2 className="mt-4 text-3xl font-semibold text-navy lg:text-4xl">
              A flexible route to premium ownership
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              Official project information promotes a flexible five-year payment plan. Unit-wise booking amounts,
              installment percentages, exact prices and the full payment schedule must be requested from the
              authorized sales team.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {PRICE_CARDS.map((card) => (
                <article
                  key={card.label}
                  className="group border border-navy/10 bg-ivory p-6 shadow-[0_10px_28px_rgba(13,8,69,0.12)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-[0_18px_40px_rgba(13,8,69,0.16)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center bg-gold/12 text-gold transition duration-300 group-hover:bg-gold group-hover:text-white">
                    <card.icon
                      className="h-5 w-5 transition duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                  <p className="font-display mt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {card.label}
                  </p>
                  <p className="font-display mt-2 text-base font-semibold leading-6 text-navy">{card.value}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setModalIntent("Get the Official Price List")}
                className="btn-gold inline-flex cursor-pointer items-center gap-2 text-sm"
              >
                Get the Official Price List
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setModalIntent("Talk to a Goldcrest Views Advisor")}
                className="btn-line inline-flex cursor-pointer items-center gap-2 text-sm"
              >
                Talk to a Goldcrest Views Advisor
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </section>

        <section className="min-h-svh">
          <div className="mx-auto grid min-h-svh max-w-7xl items-stretch gap-9 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">
            <div className="flex flex-col">
              <Kicker>Construction update</Kicker>
              <h2 className="mt-4 text-3xl font-semibold text-navy lg:text-4xl">Follow construction progress</h2>
              <p className="mt-4 leading-7 text-muted">
                The indexed official project information lists Goldcrest Views as in progress and displays
                construction updates dated July 2026. Request the latest dated update before making a decision.
              </p>
              <button
                type="button"
                onClick={() => setModalIntent("View Latest Construction Update")}
                className="btn-gold group mt-7 inline-flex w-fit cursor-pointer items-center gap-2 text-sm"
              >
                View Latest Construction Update
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="grid h-full min-h-[32rem] gap-6 sm:grid-cols-[1.2fr_0.8fr] lg:min-h-0">
              <div className="relative min-h-[24rem] w-full sm:min-h-full">
                <Photo
                  src="https://images.pexels.com/photos/16997259/pexels-photo-16997259.jpeg"
                  alt="A construction site with skyscrapers and cranes in an urban setting, capturing modern architecture."
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
              <div className="flex flex-col border-l border-navy/10 pl-5">
                <article className="mb-7">
                  <p className="text-sm font-semibold text-navy">July 2026</p>
                  <p className="font-display mt-2 font-semibold text-navy">
                    Indexed official project information displays construction updates. Request the current dated
                    source.
                  </p>
                </article>
                <article>
                  <p className="text-sm font-semibold text-navy">Current status</p>
                  <p className="font-display mt-2 font-semibold text-navy">
                    In progress, as listed in indexed official project information. Subject to official confirmation.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="scroll-mt-24 bg-ivory py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Kicker>Visual direction</Kicker>
            <h2 className="mt-3 text-3xl font-semibold text-navy lg:text-[2.6rem]">A considered view of Goldcrest living</h2>
            <p className="mt-3 text-sm text-muted">
              Images are indicative unless marked as completed-site photography.
            </p>
            <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
              {GALLERY_FILTERS.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(item.id)}
                    className={`px-4 py-2 text-sm font-semibold ${
                      active ? "bg-gold text-white" : "border border-navy/15 bg-white text-navy"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleGallery.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="text-left transition duration-200 hover:-translate-y-1"
                  onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                >
                  <span className="relative block h-60 w-full">
                    <Photo src={item.src} alt={item.alt} sizes="(min-width: 1024px) 30vw, 100vw" />
                  </span>
                  <span className="font-display mt-3 block text-base font-semibold text-navy">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="verify" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Kicker>Authorization and documentation</Kicker>
              <h2 className="mt-4 text-3xl font-semibold text-navy lg:text-4xl">
                Buy with confidence. Verify before you book.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                A premium purchase deserves a document-led decision. Request the exact authority name, approval
                number, issue date and valid document before booking.
              </p>
              <button
                type="button"
                onClick={() => setModalIntent("Request Verified Project Documents")}
                className="btn-gold mt-7 text-sm"
              >
                Request Verified Project Documents
              </button>
            </div>
            <div className="soft-card p-8">
              <p className="font-display text-xl font-semibold text-navy">Verification checklist</p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {VERIFY_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 border-t border-navy/10 pt-5 text-sm leading-6 text-navy">
                Do not rely on unsupported badges or verbal assurances. Request valid documents directly before
                booking.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Kicker>Credibility and network</Kicker>
            <h2 className="mt-4 text-3xl font-semibold text-navy lg:text-4xl">Built on a cross-border legacy</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {LEGACY.map((item) => (
                <article key={item.title} className="soft-card p-6">
                  <h3 className="text-[1.2rem] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-muted">
              Displayed affiliations and company references are provided for context and are not presented as
              Goldcrest Views project partners unless explicitly confirmed. Use third-party logos only after written
              brand permission and current partnership verification.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Kicker>Visitor experiences</Kicker>
          <h2 className="mt-4 text-3xl font-semibold text-navy lg:text-4xl">Experiences at Goldcrest Views</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            The following are visitor experience / endorsement placeholders associated with Goldcrest Views model
            apartments. Publish only approved, attributable content with source, date and consent.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((name) => (
              <article key={name} className="soft-card p-6">
                <p className="font-display font-semibold text-navy">{name}</p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  Approved quote, source, date and consent required before publication.
                </p>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setModalIntent("Watch Project Experiences")}
            className="btn-line mt-7 text-sm"
          >
            Watch Project Experiences
          </button>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Kicker>Customer voices</Kicker>
            <h2 className="mt-3 text-3xl font-semibold text-navy lg:text-4xl">What happy customers say</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              These are approval-safe placeholders, not customer reviews. No testimonial is represented as genuine
              until approved content and permission are received.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {["one", "two", "three"].map((key) => (
                <article
                  key={key}
                  className="soft-card p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-sm font-semibold text-navy">
                    —
                  </div>
                  <p className="font-display font-semibold text-navy">Approved customer testimonial will appear here.</p>
                  <p className="mt-3 text-xs leading-5 text-muted">
                    Customer name / city — add only with written permission. Source, date and consent record required.
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-4xl text-xs leading-5 text-muted">
              Customer testimonials are published only with the customer’s permission and may be edited for length
              without changing their meaning.
            </p>
            <button
              type="button"
              onClick={() => setModalIntent("Share Your Goldcrest Views Experience")}
              className="btn-gold mt-7 text-sm"
            >
              Share Your Goldcrest Views Experience
            </button>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-ivory py-20">
          <div className="mx-auto max-w-4xl px-5">
            <Kicker className="text-center">Answers, clearly stated</Kicker>
            <h2 className="mt-4 text-center text-3xl font-semibold text-navy lg:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 divide-y divide-navy/15 border-y border-navy/15">
              {FAQS.map((item, index) => {
                const open = openFaq === index;
                return (
                  <article key={item.q} className="py-4">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : index)}
                    >
                      <span className="font-display font-semibold text-navy">{item.q}</span>
                      <Plus className={`h-5 w-5 shrink-0 text-navy transition-transform ${open ? "rotate-45" : ""}`} />
                    </button>
                    {open ? <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{item.a}</p> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="text-sm text-muted">Begin with verified information</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy lg:text-[2.6rem]">
                Your next address deserves a considered decision.
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Request current official details, availability, documentation and a private project discussion.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setModalIntent("Talk to a Goldcrest Views Advisor")}
              className="btn-gold text-sm"
            >
              Talk to a Goldcrest Views Advisor
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#141414] py-16 pb-28 text-white lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
          <div>
            <Image src="/logo.svg" alt="Giga Group" width={56} height={56} className="h-14 w-14" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Goldcrest Views is a Giga Group residential address in Giga City, DHA Phase II Islamabad. Project
              details remain subject to official confirmation.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Goldcrest Views</p>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/85" aria-label="Footer navigation">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-gold">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Contact</p>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-white/85">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                <span>Downtown Giga, Defence Housing Authority, Phase II, G.T. Road, Islamabad</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a href={TEL} className="hover:text-gold">{PHONE}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a href="mailto:info@gigagroup.com" className="hover:text-gold">info@gigagroup.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 lg:px-8">
          <p className="max-w-5xl text-xs leading-5 text-white/50">
            Project information, availability, prices, payment plans, imagery, amenities, construction status,
            approvals and affiliations are subject to official confirmation and change. This page is for information
            and enquiry purposes and is not a booking or investment guarantee.
          </p>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => setModalIntent("Request Prices & Payment Plan")}
        className="btn-gold fixed bottom-0 left-0 z-40 w-full text-sm shadow-[0_-6px_24px_rgba(0,0,0,0.16)] lg:hidden"
      >
        Request Prices & Payment Plan
      </button>

      {modalIntent ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={() => setModalIntent(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white p-7 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted">Goldcrest Views enquiry</p>
                <h2 id="modalTitle" className="mt-2 text-2xl font-semibold text-navy">
                  Request verified sales information
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setModalIntent(null)}
                className="p-1 text-navy"
                aria-label="Close enquiry form"
              >
                <X />
              </button>
            </div>
            <LeadForm id="modal" submitLabel="Send enquiry" presetMessage={modalIntent} />
          </div>
        </div>
      ) : null}

      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 rounded-full bg-white p-2 text-navy"
            aria-label="Close image viewer"
          >
            <X />
          </button>
          <Image
            src={lightbox.src}
            alt={lightbox.alt}
            width={1600}
            height={1000}
            className="max-h-[80vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
