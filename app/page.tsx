"use client";

import { useMemo, useState } from "react";
import { Instagram, Mail, Menu, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type CategoryKey = "All" | "Portrait" | "Graduation" | "Events" | "Lifestyle";

type GalleryImage = {
  src: string;
  alt: string;
  category: Exclude<CategoryKey, "All">;
};

type LightboxImage = {
  src: string;
  alt: string;
} | null;

const brandLogo = "/logo/hailsh-creative-logo.png";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeergwpg";

const galleryImages: GalleryImage[] = [
  { src: "/images/hero/hero1.jpg", alt: "Event photography", category: "Events" },
  { src: "/images/hero/hero3.jpg", alt: "Event photography", category: "Events" },
  { src: "/images/hero/hero4.jpg", alt: "Event photography", category: "Events" },
  { src: "/images/hero/hero5.jpg", alt: "Graduation photography", category: "Graduation" },
  { src: "/images/portraits/portrait1.jpg", alt: "Portrait session 1", category: "Portrait" },
  { src: "/images/portraits/portrait2.jpg", alt: "Portrait session 2", category: "Portrait" },
  { src: "/images/portraits/portrait3.jpg", alt: "Portrait session 3", category: "Portrait" },
  { src: "/images/portraits/portrait4.jpg", alt: "Portrait session 4", category: "Portrait" },
  { src: "/images/portraits/portrait5.jpg", alt: "Portrait session 5", category: "Portrait" },
  { src: "/images/portraits/portrait6.jpg", alt: "Portrait session 6", category: "Portrait" },
  { src: "/images/portraits/portrait7.jpg", alt: "Portrait session 7", category: "Portrait" },
  { src: "/images/portraits/portrait8.jpg", alt: "Portrait session 8", category: "Portrait" },
  { src: "/images/portraits/portrait9.jpg", alt: "Portrait session 9", category: "Portrait" },
  { src: "/images/graduations/graduation1.jpg", alt: "Graduation session 1", category: "Graduation" },
  { src: "/images/graduations/graduation2.jpg", alt: "Graduation session 2", category: "Graduation" },
  { src: "/images/graduations/graduation3.jpg", alt: "Graduation session 3", category: "Graduation" },
  { src: "/images/graduations/graduation4.jpg", alt: "Graduation session 4", category: "Graduation" },
  { src: "/images/graduations/graduation5.jpg", alt: "Graduation session 5", category: "Graduation" },
  { src: "/images/graduations/graduation6.jpg", alt: "Graduation session 6", category: "Graduation" },
  { src: "/images/graduations/graduation7.jpg", alt: "Graduation session 7", category: "Graduation" },
  { src: "/images/events/event1.jpg", alt: "Event coverage 1", category: "Events" },
  { src: "/images/events/event2.jpg", alt: "Event coverage 2", category: "Events" },
  { src: "/images/events/event3.jpg", alt: "Event coverage 3", category: "Events" },
  { src: "/images/events/event4.jpg", alt: "Event coverage 4", category: "Events" },
  { src: "/images/events/event5.jpg", alt: "Event coverage 5", category: "Events" },
  { src: "/images/events/event6.jpg", alt: "Event coverage 6", category: "Events" },
  { src: "/images/events/event7.jpg", alt: "Event coverage 7", category: "Events" },
  { src: "/images/events/event8.jpg", alt: "Event coverage 8", category: "Events" },
  { src: "/images/events/event9.jpg", alt: "Event coverage 9", category: "Events" },
  { src: "/images/events/event10.jpg", alt: "Event coverage 10", category: "Events" },
  { src: "/images/events/event11.jpg", alt: "Event coverage 11", category: "Events" },
  { src: "/images/lifestyle/lifestyle1.jpg", alt: "Lifestyle shoot 1", category: "Lifestyle" },
  { src: "/images/lifestyle/lifestyle2.jpg", alt: "Lifestyle shoot 2", category: "Lifestyle" },
  { src: "/images/lifestyle/lifestyle3.jpg", alt: "Lifestyle shoot 3", category: "Lifestyle" },
  { src: "/images/lifestyle/lifestyle4.jpg", alt: "Lifestyle shoot 4", category: "Lifestyle" },
  { src: "/images/lifestyle/lifestyle5.jpg", alt: "Lifestyle shoot 5", category: "Lifestyle" },
  { src: "/images/lifestyle/lifestyle6.jpg", alt: "Lifestyle shoot 6", category: "Lifestyle" },
];

const heroSlides = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg",
  "/images/hero/hero6.jpg",
];

const categories: CategoryKey[] = ["All", "Portrait", "Graduation", "Events", "Lifestyle"];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((current) => (current + 1) % heroSlides.length);

  return (
    <div className="relative h-[66vh] min-h-[540px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black sm:h-[72vh] lg:h-[82vh]">
      {heroSlides.map((src, slideIndex) => (
        <img
          key={src}
          src={src}
          alt={`Featured work ${slideIndex + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            index === slideIndex ? "opacity-100" : "opacity-0"
          }`}
          loading={slideIndex === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />

      <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
        <button
          onClick={prev}
          className="rounded-full border border-white/20 bg-black/40 p-3 text-white backdrop-blur transition hover:border-[#f3c94b] hover:text-[#f3c94b]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="rounded-full border border-white/20 bg-black/40 p-3 text-white backdrop-blur transition hover:border-[#f3c94b] hover:text-[#f3c94b]"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {heroSlides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
            className={`h-2.5 rounded-full transition-all ${index === dotIndex ? "w-8 bg-[#f3c94b]" : "w-2.5 bg-white/55"}`}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryPage({
  category,
  onBack,
}: {
  category: Exclude<CategoryKey, "All">;
  onBack: () => void;
}) {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage>(null);
  const images = galleryImages.filter((image) => image.category === category);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="flex items-center gap-3 text-left">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f3c94b]/35 bg-[#f3c94b]/10">
              <img src={brandLogo} alt="Hailsh Creative logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-[1.35rem] font-black italic tracking-tight text-white sm:text-[1.55rem]">
                Hailsh <span className="text-[#f3c94b]">Creative</span>
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Photography Portfolio</p>
            </div>
          </button>

          <button
            onClick={onBack}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-[#f3c94b] hover:text-[#f3c94b]"
          >
            Back Home
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">Portfolio Category</p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">{category}</h1>
          </div>
          <p className="max-w-md text-sm font-semibold text-white/65"></p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxImage({ src: image.src, alt: image.alt })}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] text-left"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/50 p-3 text-white transition hover:border-[#f3c94b] hover:text-[#f3c94b]"
            aria-label="Close full screen image"
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-h-[92vh] max-w-[95vw] rounded-[1.5rem] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default function PhotographyPortfolioWebsite() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    sessionType: "Portrait Session",
    preferredDate: "",
    location: "",
    budget: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New ${formData.sessionType} Inquiry - ${formData.fullName || "Hailsh Creative"}`,
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitMessage("Inquiry sent successfully. I will get back to you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        instagram: "",
        sessionType: "Portrait Session",
        preferredDate: "",
        location: "",
        budget: "",
        details: "",
      });
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("All");

  const featuredImages = useMemo(() => galleryImages.slice(0, 8), []);

  if (selectedCategory !== "All") {
    return <CategoryPage category={selectedCategory} onBack={() => setSelectedCategory("All")} />;
  }

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex min-w-0 items-center gap-3 text-left">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f3c94b]/35 bg-[#f3c94b]/10">
              <img src={brandLogo} alt="Hailsh Creative logo" className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-[1.35rem] font-black italic tracking-tight text-white sm:text-[1.55rem]">
                Hailsh <span className="text-[#f3c94b]">Creative</span>
              </p>
              <p className="truncate text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">Photography Portfolio</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              { label: "Portfolio", href: "portfolio" },
              { label: "Categories", href: "categories" },
              { label: "Contact", href: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-black uppercase tracking-[0.18em] text-white/75 transition hover:text-[#f3c94b]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden rounded-full bg-[#f3c94b] px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-black md:inline-flex"
            >
              Book
            </button>
            <button
              onClick={() => setMenuOpen((current) => !current)}
              className="rounded-full border border-white/15 p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {[
                { label: "Portfolio", href: "portfolio" },
                { label: "Categories", href: "categories" },
                { label: "Contact", href: "contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(item.href);
                  }}
                  className="py-3 text-left text-sm font-black uppercase tracking-[0.16em] text-white/80"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
        <HeroCarousel />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 pt-3 sm:px-6 lg:px-8 lg:pb-12">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#f3c94b]">DMV Photographer</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            Capturing real presence.
            <br />
            Framing bold stories.
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-bold uppercase tracking-[0.12em] text-white/72 sm:text-base">
            Portrait photography, graduation sessions, event coverage, and lifestyle imagery created to feel polished, confident, and timeless.
          </p>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">Selected Work</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Featured Portfolio</h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold text-white/65">
              A curated first look at the kind of images clients book Hailsh Creative for most — clean portraits, graduation highlights, event moments, and lifestyle frames.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featuredImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">Browse</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Categories</h2>
          <p className="mt-3 max-w-2xl text-sm font-semibold text-white/65">
            Open each gallery to view a focused collection of work by session type.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories
            .filter((category) => category !== "All")
            .map((category) => {
              const preview = galleryImages.find((image) => image.category === category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] text-left transition hover:border-[#f3c94b]/45"
                >
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <img
                      src={preview?.src}
                      alt={category}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f3c94b]">Open Gallery</p>
                        <h3 className="mt-2 text-2xl font-black uppercase">{category}</h3>
                      </div>
                      <div className="rounded-full border border-white/15 bg-black/35 p-3 text-white transition group-hover:border-[#f3c94b] group-hover:text-[#f3c94b]">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <img
                src="/images/about-me.jpg"
                alt="Hailsh Creative photographer portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">About</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Hailsh Creative</h2>

            <div className="mt-5 space-y-4 text-sm font-semibold leading-7 text-white/75">
              <p>
                I’m a DMV-based photographer focused on capturing clean, confident, and timeless images. My work is built around helping people feel natural in front of the camera while still delivering strong, polished visuals.
              </p>
              <p>
                I specialize in portraits, graduation sessions, events, and lifestyle content. Every shoot is approached with attention to lighting, composition, and detail so your photos feel intentional and high quality.
              </p>
              <p>
                Whether it’s your first time in front of a camera or you shoot often, my goal is simple: create images that you actually want to use, post, and keep.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60">Portraits</span>
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60">Graduations</span>
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60">Events</span>
              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60">Lifestyle</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">Get In Touch</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">Book A Session</h2>
          <p className="mt-3 max-w-2xl text-sm font-semibold text-white/65">
            Share your vision, preferred date, and session details. Portraits, graduations, events, and creative shoots are all welcome.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-6 sm:p-8">
            <h3 className="text-2xl font-black uppercase">Why clients book Hailsh Creative</h3>
            <div className="mt-6 space-y-5 text-sm font-semibold leading-7 text-white/70">
              <p>
                Sessions are designed to feel comfortable and guided, so you can focus on the moment while the final images still look strong, clean, and professional.
              </p>
              <p>
                Whether you need solo portraits, graduation photos, event coverage, or lifestyle content, the goal is always the same: make the work feel personal and visually sharp.
              </p>
              <p>
                For direct inquiries, you can also reach out on Instagram or by email.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              <a
                href="https://instagram.com/hailshcreative"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 transition hover:border-[#f3c94b]/45"
              >
                <Instagram className="text-[#f3c94b]" size={22} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/50">Instagram</p>
                <h3 className="mt-2 text-xl font-black">@hailshcreative</h3>
              </a>

              <a
                href="mailto:hailshbusiness@gmail.com"
                className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5 transition hover:border-[#f3c94b]/45"
              >
                <Mail className="text-[#f3c94b]" size={22} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-white/50">Email</p>
                <h3 className="mt-2 break-words text-xl font-black">hailshbusiness@gmail.com</h3>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#111111] p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Best number to reach you"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Instagram Handle</label>
                <input
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  placeholder="@yourinstagram"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Session Type</label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-[#f3c94b]/45"
                >
                  <option>Portrait Session</option>
                  <option>Graduation Session</option>
                  <option>Event Coverage</option>
                  <option>Lifestyle Session</option>
                  <option>Creative Shoot</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-[#f3c94b]/45"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, venue, or preferred area"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Budget Range</label>
                <input
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="Your estimated budget"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-white/55">Tell Me About Your Shoot</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={6}
                placeholder="Describe the kind of photos you want, the mood, outfits, location ideas, event details, or anything important for your session."
                className="w-full rounded-[1.5rem] border border-white/10 bg-black/30 px-4 py-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/28 focus:border-[#f3c94b]/45"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-white/45">Your inquiry will be submitted directly to hailshbusiness@gmail.com.</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#f3c94b] px-7 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Booking Inquiry"}
              </button>
            </div>

            {submitMessage && (
              <p className="mt-4 rounded-[1.25rem] border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-white/80">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
