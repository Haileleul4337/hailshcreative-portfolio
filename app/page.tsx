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

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeergwpg";

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
      title: "Graduation Glow",
      category: "Graduation",
      image: "/images/graduation1.jpg",
      href: "#contact-page",
      cta: "Book graduation session",
    },
    {
      title: "Studio Portrait",
      category: "Portrait",
      image: "/images/portrait1.jpg",
      href: "#contact-page",
      cta: "Book portrait session",
    },
    {
      title: "City Motion",
      category: "Lifestyle",
      image: "/images/lifestyle1.jpg",
      href: "https://instagram.com/hailshcreative",
      cta: "See more on Instagram",
    },
    {
      title: "Elegant Event",
      category: "Events",
      image: "/images/event1.jpg",
      href: "#contact-page",
      cta: "Book event coverage",
    },
    {
      title: "Brand Focus",
      category: "Branding",
      image: "/images/branding1.jpg",
      href: "https://instagram.com/hailshcreative",
      cta: "View more brand work",
    },
    {
      title: "Soft Light",
      category: "Portrait",
      image: "/images/portrait2.jpg",
      href: "https://instagram.com/hailshcreative",
      cta: "See more portraits",
    },
    {
      title: "After Ceremony",
      category: "Graduation",
      image: "/images/graduation2.jpg",
      href: "https://instagram.com/hailshcreative",
      cta: "More graduation photos",
    },
    {
      title: "Night Energy",
      category: "Events",
      image: "/images/event2.jpg",
      href: "https://instagram.com/hailshcreative",
      cta: "More event coverage",
    },
  ];

  const services = [
    {
      name: "Portrait Sessions",
      detail: "Personal branding, creative portraits, and polished studio-style edits.",
    },
    {
      name: "Graduation Photos",
      detail: "Campus sessions across the DMV with premium, share-worthy results.",
    },
    {
      name: "Event Coverage",
      detail: "Birthdays, private events, launches, and memorable celebrations.",
    },
    {
      name: "Brand Content",
      detail: "Content for businesses, products, creators, and social campaigns.",
    },
  ];

  const pricing = [
    {
      title: "Mini Session",
      price: "$250",
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
      name: "Client Review",
      text: "The whole experience felt professional and easy, and the final photos looked premium from start to finish.",
    },
    {
      name: "Graduation Client",
      text: "He knew exactly how to pose me, find the best light, and deliver photos that looked clean, natural, and high-end.",
    },
    {
      name: "Event Client",
      text: "Super reliable, creative, and easy to work with. The gallery captured the energy of the event perfectly.",
    },
  ];

  const links = [
    {
      label: "Instagram",
      value: "@hailshcreative",
      href: "https://instagram.com/hailshcreative",
      description: "See recent shoots, reels, more galleries, and portfolio updates.",
      icon: Instagram,
    },
    {
      label: "Email",
      value: "hailshbusiness@gmail.com",
      href: "mailto:hailshbusiness@gmail.com",
      description: "For bookings, collaborations, and business inquiries.",
      icon: Mail,
    },
    {
      label: "Portfolio Highlights",
      value: "Jump to portfolio",
      href: "#portfolio-page",
      description: "Browse portrait, graduation, event, and branding galleries on the site.",
      icon: Camera,
    },
    {
      label: "Book a Session",
      value: "Open inquiry form",
      href: "#contact-page",
      description: "Fill out the detailed booking form and send your inquiry instantly.",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage("");

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setSubmitMessage("Add your real Formspree endpoint first, then the form will send directly to your email.");
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

      setSubmitMessage("Inquiry sent successfully. Check your email for the new lead.");
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 100 100" className="rounded-full border border-white/20 p-1">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="18" stroke="white" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="6" fill="white" />
            </svg>
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase">Hailsh</p>
              <p className="text-xs text-white/50">Creative</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
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
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm text-white/75">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-white/50">
              <MapPin size={14} /> DMV Photographer
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
              Haileleul Mekonnen
            </h1>
            <p className="mt-3 text-xl text-white/75 md:text-2xl">Founder of Hailsh Creative</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              More than 5 years of experience creating portraits, graduation sessions, events, and brand imagery across the DMV. Built with a premium, modern style that helps your work feel established, trustworthy, and unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio-page"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Explore Portfolio
              </a>
              <a
                href="#pricing-page"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                View Pricing
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">5+</p>
                <p className="mt-2 text-sm text-white/55">Years of experience</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">DMV</p>
                <p className="mt-2 text-sm text-white/55">Based and available locally</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">Premium</p>
                <p className="mt-2 text-sm text-white/55">Clean, polished edits</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <img src="/images/hero-main.jpg" alt="Featured portrait" className="h-full w-full object-cover" />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                <img src="/images/hero-side.jpg" alt="Photographer at work" className="h-52 w-full object-cover" />
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">Hailsh Creative</p>
                <p className="mt-4 text-4xl font-semibold">Photography</p>
                <p className="mt-2 text-white/60">
                  A refined digital home for portraits, graduations, events, and brand visuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <Quote className="mb-4 text-white/40" size={20} />
              <p className="text-sm leading-7 text-white/70">{item.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-medium text-white/90">{item.name}</p>
                <div className="flex gap-1 text-white/70">
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

      <section id="portfolio-page" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Portfolio Page</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Featured galleries</h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Every card can now link somewhere useful, like a booking section, your Instagram, or a future full gallery page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
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

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
          {filteredWorks.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${
                index % 4 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
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
          <a href="https://instagram.com/hailshcreative" className="rounded-[2rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">More portraits</p>
            <p className="mt-3 text-xl font-semibold">Instagram gallery</p>
            <p className="mt-2 text-white/60">Use this for additional photos until you add full portfolio pages.</p>
          </a>
          <a href="#pricing-page" className="rounded-[2rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">Ready to book</p>
            <p className="mt-3 text-xl font-semibold">See packages</p>
            <p className="mt-2 text-white/60">Guide visitors straight to pricing after they like your work.</p>
          </a>
          <a href="#contact-page" className="rounded-[2rem] border border-white/10 bg-black/20 p-5 transition hover:border-white/30">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">Start inquiry</p>
            <p className="mt-3 text-xl font-semibold">Open booking form</p>
            <p className="mt-2 text-white/60">Send them directly to your detailed session inquiry section.</p>
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">About</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Images that feel polished, emotional, and timeless.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Haileleul Mekonnen is a DMV-based photographer and the creative force behind Hailsh Creative. With more than 5 years of experience behind the camera, he specializes in creating clean, modern, and emotionally engaging imagery. His work focuses on portraits, events, graduations, and lifestyle photography, combining professional lighting, intentional composition, and natural expression. Above all, Haileleul loves what he does and brings that passion into every shoot and every final gallery.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
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

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
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

      <section id="pricing-page" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Pricing Page</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Starting packages</h2>
            <p className="mt-4 text-white/70">
              These are starter packages you can edit anytime. They make the site feel more complete and help clients understand your booking options fast.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pricing.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
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

      <section id="links-page" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Links Page</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">All your important links</h2>
            <p className="mt-4 text-white/70">
              This works like a dedicated bio-links page section and is perfect for Instagram traffic, inquiries, and quick portfolio access.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-[2rem] border border-white/10 bg-black/20 p-6 transition hover:border-white/30 hover:bg-black/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="rounded-2xl border border-white/10 p-3 text-white/75">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/40">{link.label}</p>
                        <h3 className="mt-2 text-2xl font-semibold">{link.value}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/60">{link.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="text-white/40 transition group-hover:text-white" size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact-page" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Booking Page</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Book your session</h2>
            <p className="mt-5 max-w-xl text-white/70">
              Fill out the inquiry form with as much detail as you can. Once your Formspree endpoint is added, the form sends directly from the website to your email without opening the visitor’s email app.
            </p>
            <div className="mt-8 space-y-4 text-white/75">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Best for portraits, graduation sessions, events, and brand shoots</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Includes contact info, session type, date, location, and project details</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Replace the Formspree placeholder once, and it keeps working on your live site</div>
            </div>
          </div>

          <form onSubmit={handleInquirySubmit} className="rounded-[2rem] border border-white/10 bg-black/20 p-8 md:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/60">Full name</label>
                <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Phone number</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Instagram handle</label>
                <input name="instagram" value={formData.instagram} onChange={handleInputChange} placeholder="@username" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Session type</label>
                <select name="sessionType" value={formData.sessionType} onChange={handleInputChange} className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30">
                  <option>Portrait Session</option>
                  <option>Graduation Session</option>
                  <option>Event Coverage</option>
                  <option>Brand Shoot</option>
                  <option>Otherssss</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Preferred date</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Preferred location</label>
                <input name="location" value={formData.location} onChange={handleInputChange} placeholder="DC, Maryland, Virginia, studio, campus..." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Budget range</label>
                <input name="budget" value={formData.budget} onChange={handleInputChange} placeholder="$200-$400" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
            </div>

            <div className="mt-4 grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/60">How did you hear about Hailsh Creative?</label>
                <input name="hearAbout" value={formData.hearAbout} onChange={handleInputChange} placeholder="Instagram, referral, website, friend..." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/60">Project details</label>
                <textarea name="details" value={formData.details} onChange={handleInputChange} rows={6} placeholder="Tell me about the shoot, the vibe you want, number of people, goals, inspiration, and anything else helpful." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white/30" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/50">Form goes directly to your inbox after you replace the Formspree endpoint placeholder.</p>
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
