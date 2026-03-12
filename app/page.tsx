"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Quote,
  Star,
  X,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function PhotographyPortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    sessionType: "Portrait Session",
    preferredDate: "",
    location: "",
    budget: "",
    hearAbout: "",
    details: "",
  });

  const featuredWorks = [
    {
      title: "Graduation Portraits",
      category: "Graduation",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      href: "#contact-page",
      cta: "Book graduation photos",
    },
    {
      title: "Editorial Portrait",
      category: "Portrait",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      href: "#contact-page",
      cta: "Book a portrait session",
    },
    {
      title: "Lifestyle Frames",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      href: "https://instagram.com/hailshcreative",
      cta: "See more on Instagram",
    },
    {
      title: "Private Events",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      href: "#contact-page",
      cta: "Ask about event coverage",
    },
    {
      title: "Brand Storytelling",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      href: "https://instagram.com/hailshcreative",
      cta: "View more brand work",
    },
    {
      title: "Soft Light Portraits",
      category: "Portrait",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
      href: "https://instagram.com/hailshcreative",
      cta: "See more portraits",
    },
    {
      title: "Campus Sessions",
      category: "Graduation",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      href: "https://instagram.com/hailshcreative",
      cta: "More graduation work",
    },
    {
      title: "Celebration Coverage",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      href: "https://instagram.com/hailshcreative",
      cta: "More event coverage",
    },
  ];

  const services = [
    {
      name: "Portrait Sessions",
      detail: "Creative portraits, personal branding, and polished premium edits.",
    },
    {
      name: "Graduation Photos",
      detail: "Campus sessions across the DMV with clean, elevated final galleries.",
    },
    {
      name: "Event Coverage",
      detail: "Private events, birthdays, celebrations, and memorable moments captured naturally.",
    },
    {
      name: "Brand Content",
      detail: "Photo content for businesses, products, creators, and social campaigns.",
    },
  ];

  const pricing = [
    {
      title: "Mini Session",
      price: "$180",
      details: ["30-minute session", "1 location", "10 edited photos"],
    },
    {
      title: "Signature Session",
      price: "$325",
      details: ["1-hour session", "2 outfit options", "25 edited photos"],
    },
    {
      title: "Event Coverage",
      price: "$450+",
      details: ["2-hour minimum", "Candid + posed coverage", "Online gallery delivery"],
    },
  ];

  const testimonials = [
    {
      name: "Portrait Client",
      text: "The whole process felt smooth and professional, and the photos came out clean, sharp, and premium.",
    },
    {
      name: "Graduation Client",
      text: "He helped with posing, found the best light, and delivered images that looked confident and timeless.",
    },
    {
      name: "Event Client",
      text: "Reliable, creative, and easy to work with. The gallery captured the energy of the event beautifully.",
    },
  ];

  const links = [
    {
      label: "Instagram",
      value: "@hailshcreative",
      href: "https://instagram.com/hailshcreative",
      description: "Recent work, reels, behind the scenes, and additional galleries.",
      icon: Instagram,
    },
    {
      label: "Email",
      value: "hailshbusiness@gmail.com",
      href: "mailto:hailshbusiness@gmail.com",
      description: "Bookings, collaborations, and business inquiries.",
      icon: Mail,
    },
    {
      label: "Portfolio",
      value: "Browse featured work",
      href: "#portfolio-page",
      description: "Portrait, graduation, event, and branding highlights.",
      icon: Camera,
    },
    {
      label: "Book a Session",
      value: "Open inquiry form",
      href: "#contact-page",
      description: "Send a detailed inquiry directly from the website.",
      icon: ExternalLink,
    },
  ];

  const categories = useMemo(() => ["All", ...new Set(featuredWorks.map((item) => item.category))], [featuredWorks]);

  const filteredWorks =
    selectedCategory === "All"
      ? featuredWorks
      : featuredWorks.filter((item) => item.category === selectedCategory);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio-page" },
    { label: "Pricing", href: "#pricing-page" },
    { label: "Links", href: "#links-page" },
    { label: "Contact", href: "#contact-page" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setSubmitMessage("The booking form is almost ready. Add your real Formspree endpoint to activate submissions.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          instagram: formData.instagram,
          sessionType: formData.sessionType,
          preferredDate: formData.preferredDate,
          location: formData.location,
          budget: formData.budget,
          hearAbout: formData.hearAbout,
          details: formData.details,
          _subject: `New ${formData.sessionType} Inquiry - ${formData.fullName || "Hailsh Creative Website"}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitMessage("Inquiry sent successfully. I’ll be in touch soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        instagram: "",
        sessionType: "Portrait Session",
        preferredDate: "",
        location: "",
        budget: "",
        hearAbout: "",
        details: "",
      });
    } catch (error) {
      setSubmitMessage("Something went wrong while sending the inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 100 100" className="shrink-0 rounded-full border border-white/20 p-1">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="18" stroke="white" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="6" fill="white" />
            </svg>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-[0.25em] uppercase">Hailsh</p>
              <p className="truncate text-xs text-white/50">Creative</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact-page"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-white hover:bg-white hover:text-black md:inline-flex"
            >
              Book a Session
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-white/15 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-neutral-950 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm text-white/75 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 transition hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm sm:tracking-[0.35em]">
              <MapPin size={14} /> DMV Photographer
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Haileleul Mekonnen
            </h1>
            <p className="mt-3 text-lg text-white/75 sm:text-xl lg:text-2xl">Founder of Hailsh Creative</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
              More than 5 years of experience creating portraits, graduation sessions, events, and brand imagery across the DMV. Premium visuals, polished direction, and a client experience that feels effortless from inquiry to delivery.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#portfolio-page"
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Explore Portfolio
              </a>
              <a
                href="#pricing-page"
                className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                View Pricing
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-2xl font-semibold sm:text-3xl">5+</p>
                <p className="mt-2 text-sm text-white/55">Years of experience</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-2xl font-semibold sm:text-3xl">DMV</p>
                <p className="mt-2 text-sm text-white/55">Based and available locally</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-2xl font-semibold sm:text-3xl">Premium</p>
                <p className="mt-2 text-sm text-white/55">Clean, polished edits</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl sm:rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=1400&q=80"
                alt="Portrait photography"
                className="h-[380px] w-full object-cover sm:h-full"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl sm:rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
                  alt="Creative photography"
                  className="h-52 w-full object-cover sm:h-56"
                />
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-2xl sm:rounded-[2rem] sm:p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 sm:text-sm">Hailsh Creative</p>
                <p className="mt-3 text-3xl font-semibold sm:text-4xl">Photography</p>
                <p className="mt-2 text-sm text-white/60 sm:text-base">
                  Portraits, graduations, events, and branded visuals with a refined modern look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:rounded-[2rem] sm:p-6">
              <Quote className="mb-4 text-white/40" size={20} />
              <p className="text-sm leading-7 text-white/70">{item.text}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-white/90">{item.name}</p>
                <div className="flex shrink-0 gap-1 text-white/70">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio-page" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Portfolio</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">Featured work</h2>
            <p className="mt-4 max-w-2xl text-sm text-white/65 sm:text-base">
              A curated mix of portraits, graduation work, events, and lifestyle imagery.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "border border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:auto-rows-[220px]">
          {filteredWorks.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 sm:rounded-[2rem] ${
                index % 4 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  index % 4 === 0 ? "h-[420px] md:h-full" : "h-[320px] md:h-full"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.category}</p>
                    <h3 className="mt-2 text-lg font-semibold sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{item.cta}</p>
                  </div>
                  <div className="rounded-full border border-white/20 bg-black/20 p-2 text-white/80">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href="https://instagram.com/hailshcreative" className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30 sm:rounded-[2rem]">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">More portraits</p>
            <p className="mt-3 text-xl font-semibold">Instagram gallery</p>
            <p className="mt-2 text-white/60">Browse more recent shoots and additional portfolio updates.</p>
          </a>
          <a href="#pricing-page" className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30 sm:rounded-[2rem]">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">Pricing</p>
            <p className="mt-3 text-xl font-semibold">See packages</p>
            <p className="mt-2 text-white/60">Quick view of starting session rates and coverage options.</p>
          </a>
          <a href="#contact-page" className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30 sm:rounded-[2rem]">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">Inquiry</p>
            <p className="mt-3 text-xl font-semibold">Start your booking</p>
            <p className="mt-2 text-white/60">Send details for your shoot directly through the website.</p>
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">About</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Images that feel polished, emotional, and timeless.</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Haileleul Mekonnen is a DMV-based photographer and the creative force behind Hailsh Creative. With more than 5 years of experience behind the camera, he creates clean, modern, and emotionally engaging imagery across portraits, events, graduations, and lifestyle photography. Every session is shaped with intentional direction, flattering light, and a premium final look.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Why clients book</p>
            <div className="mt-6 space-y-4 text-white/75">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Clean editing with a premium look</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Strong posing direction and natural expressions</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">DMV local knowledge for locations and timing</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Professional, easy client experience</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Services</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-medium">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing-page" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Pricing</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Starting packages</h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Flexible starting rates for portraits, graduation work, and event coverage.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pricing.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 sm:rounded-[2rem]">
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">Package</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-4xl font-semibold">{item.price}</p>
                <div className="mt-6 space-y-3 text-sm text-white/65">
                  {item.details.map((detail) => (
                    <p key={detail} className="rounded-xl border border-white/10 px-3 py-3">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href="#contact-page"
                  className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="links-page" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Links</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Everything in one place</h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              Quick access to recent work, contact details, portfolio highlights, and your booking form.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-[1.75rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30 hover:bg-black/30 sm:rounded-[2rem] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 gap-4">
                      <div className="rounded-2xl border border-white/10 p-3 text-white/75">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm uppercase tracking-[0.25em] text-white/40">{link.label}</p>
                        <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{link.value}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/60">{link.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="shrink-0 text-white/40 transition group-hover:text-white" size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact-page" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Booking</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Book your session</h2>
            <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-base">
              Share your vision, preferred date, and the kind of session you’re planning. Portraits, graduations, events, and brand shoots are all welcome.
            </p>
            <div className="mt-8 space-y-4 text-white/75">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Portrait sessions, graduation shoots, events, and brand content</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Simple inquiry process with room for all the important details</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Replies sent to hailshbusiness@gmail.com</div>
            </div>
          </div>

          <form onSubmit={handleInquirySubmit} className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/60">Full name</label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Phone number</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Instagram handle</label>
                <input name="instagram" value={formData.instagram} onChange={handleInputChange} placeholder="@username" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Session type</label>
                <select name="sessionType" value={formData.sessionType} onChange={handleInputChange} className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30">
                  <option>Portrait Session</option>
                  <option>Graduation Session</option>
                  <option>Event Coverage</option>
                  <option>Brand Shoot</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Preferred date</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Preferred location</label>
                <input name="location" value={formData.location} onChange={handleInputChange} placeholder="DC, Maryland, Virginia, studio, campus..." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Budget range</label>
                <input name="budget" value={formData.budget} onChange={handleInputChange} placeholder="$200-$400" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
            </div>

            <div className="mt-4 grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/60">How did you hear about Hailsh Creative?</label>
                <input name="hearAbout" value={formData.hearAbout} onChange={handleInputChange} placeholder="Instagram, referral, website, friend..." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Project details</label>
                <textarea name="details" value={formData.details} onChange={handleInputChange} rows={6} placeholder="Tell me about the shoot, the vibe you want, number of people, goals, inspiration, and anything else helpful." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none transition focus:border-white/30" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/50">Complete the form and send your inquiry directly from the site.</p>
              <button type="submit" disabled={isSubmitting} className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </div>

            {submitMessage && (
              <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
