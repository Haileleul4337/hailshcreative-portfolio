"use client";

import { useMemo, useState } from "react";
import { Camera, ExternalLink, Instagram, Mail, MapPin, Menu, Quote, Star, X } from "lucide-react";

export default function PhotographyPortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredWorks = [
    {
      title: "Graduation Glow",
      category: "Graduation",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Studio Portrait",
      category: "Portrait",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "City Motion",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Elegant Event",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Brand Focus",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Soft Light",
      category: "Portrait",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "After Ceremony",
      category: "Graduation",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Night Energy",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
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
      description: "See recent shoots, reels, and portfolio updates.",
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
      label: "Portfolio",
      value: "View Work",
      href: "#portfolio-page",
      description: "Browse portrait, graduation, event, and branding galleries.",
      icon: Camera,
    },
    {
      label: "Contact",
      value: "Book a Session",
      href: "#contact-page",
      description: "Send an inquiry for your next photo session.",
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
              More than 5 years of experience creating portraits, graduation sessions,
              events, and brand imagery across the DMV. Built with a premium,
              modern style that helps your work feel established, trustworthy, and unforgettable.
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
              <img
                src="https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=1200&q=80"
                alt="Featured portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
                  alt="Photographer at work"
                  className="h-52 w-full object-cover"
                />
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
              This section now works like a dedicated portfolio page area, with category filters and a stronger gallery layout.
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
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${
                index % 4 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">About</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Images that feel polished, emotional, and timeless.
            </h2>
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
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">Contact Page</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Let’s create your next set of images.</h2>
            <p className="mt-5 max-w-xl text-white/70">
              Reach out for portraits, graduation sessions, event coverage, branding shoots, or collaborations across DC, Maryland, and Virginia.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/50">Studio</p>
                <p className="mt-2 text-lg font-medium">Hailsh Creative</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-white/50">Based in</p>
                <p className="mt-2 text-lg font-medium">DMV Area</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 md:p-10">
            <p className="text-sm text-white/50">Photographer</p>
            <p className="mt-2 text-lg font-medium">Haileleul Mekonnen</p>
            <p className="mt-6 text-sm text-white/50">Email</p>
            <a href="mailto:hailshbusiness@gmail.com" className="mt-2 block text-lg font-medium hover:text-white/80">
              hailshbusiness@gmail.com
            </a>
            <p className="mt-6 text-sm text-white/50">Instagram</p>
            <a href="https://instagram.com/hailshcreative" className="mt-2 block text-lg font-medium hover:text-white/80">
              @hailshcreative
            </a>
            <a
              href="mailto:hailshbusiness@gmail.com"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Send Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
