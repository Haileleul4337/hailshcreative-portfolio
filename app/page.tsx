"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Instagram, Mail, Menu, X } from "lucide-react";

const portfolioUrl = "https://hailshcreative.pic-time.com/portfolio";
const portfolioEmbed = "https://hailshcreative.pic-time.com/client?headless=true";
const formEndpoint = "https://formspree.io/f/xeergwpg";
const emptyForm = { name: "", email: "", service: "", date: "", details: "" };
const samples = [
  { src: "/portfolio/graduation.webp", alt: "Graduation portrait by Hailsh Creative at the Jefferson Memorial", title: "Milestones" },
  { src: "/portfolio/heritage.webp", alt: "Portrait in Ethiopian dress on a staircase by Hailsh Creative", title: "Personal stories" },
  { src: "/portfolio/portrait.webp", alt: "Portrait in a warm-toned hijab by Hailsh Creative", title: "Portraits" },
];

const services = [
  { number: "01", name: "Portraits", description: "For the moments you want to remember as yourself." },
  { number: "02", name: "Graduations", description: "A milestone worth celebrating beautifully." },
  { number: "03", name: "Events", description: "The people, atmosphere, and details that matter." },
  { number: "04", name: "Lifestyle", description: "Natural images with intention and character." },
];

function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function sendInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "New " + form.service + " inquiry from " + form.name,
        }),
      });
      if (!response.ok) throw new Error("Inquiry failed");
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  function closeAndJump(id: string) {
    setMenuOpen(false);
    jumpTo(id);
  }

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Hailsh Creative home">
            <Image src="/logo/hailsh-mark.svg" alt="" width={48} height={48} className="brand-mark" priority />
            <span className="brand-name"><strong>HAILSH</strong><small>CREATIVE PHOTOGRAPHY</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">The work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </nav>
          <a href="#inquire" className="header-book">Let&apos;s talk <ArrowUpRight size={17} strokeWidth={1.6} /></a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <button onClick={() => closeAndJump("work")}>The work</button>
            <button onClick={() => closeAndJump("services")}>Services</button>
            <button onClick={() => closeAndJump("about")}>About</button>
            <button onClick={() => closeAndJump("inquire")}>Book a session <ArrowUpRight size={19} /></button>
          </nav>
        )}
      </header>

      <section id="top" className="hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <div className="hero-topline"><span className="small-rule" /> Washington, DC · Maryland · Virginia</div>
            <h1>Photographs<br />that feel <em>like you.</em></h1>
            <p>Considered photography for people and moments worth remembering. Relaxed in the moment. Beautiful for years to come.</p>
            <div className="hero-actions">
              <a href="#inquire" className="hero-book">Book a session <ArrowUpRight size={20} strokeWidth={1.6} /></a>
              <a href="#work" className="hero-view">Explore the work <ArrowDown size={17} strokeWidth={1.6} /></a>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/portfolio/cover.webp" alt="Portrait in traditional Ethiopian dress from the Hailsh Creative Pic-Time portfolio" fill sizes="(max-width: 760px) 100vw, 45vw" priority className="hero-image" />
            <div className="hero-media-caption"><span>HAILSH CREATIVE</span><span>01 / SELECTED WORK</span></div>
          </div>
        </div>
        <div className="hero-footer shell"><span>Portraits / Graduations / Events / Lifestyle</span><span>Hailsh Creative — DMV</span></div>
      </section>

      <section id="work" className="work-section section-anchor">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">01 / The work</p><h2>Take a <em>closer look.</em></h2></div>
            <p className="heading-aside">Real moments, thoughtfully seen. Explore the latest images from my Pic-Time portfolio.</p>
          </div>
          <div className="sample-grid">
            {samples.map((sample, index) => (
              <a className="sample-card" href={portfolioUrl} target="_blank" rel="noopener noreferrer" key={sample.src} aria-label={"Explore " + sample.title + " in the Pic-Time portfolio"}>
                <div className="sample-photo"><Image src={sample.src} alt={sample.alt} fill sizes="(max-width: 680px) 85vw, (max-width: 900px) 45vw, 30vw" loading="lazy" /></div>
                <div className="sample-caption"><span>0{index + 1} / {sample.title}</span><ArrowUpRight size={18} /></div>
              </a>
            ))}
          </div>
          <div className="full-gallery-heading"><span>Explore the complete portfolio</span><span>Updated on Pic-Time</span></div>
          <div className="portfolio-frame">
            <iframe title="Hailsh Creative photography portfolio" src={portfolioEmbed} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
          <div className="portfolio-tail">
            <span>New work is added to this collection as the portfolio grows.</span>
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">View portfolio on Pic-Time <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-anchor">
        <div className="shell services-grid">
          <div className="services-intro">
            <p className="eyebrow">02 / What I photograph</p>
            <h2>Every story<br />deserves <em>care.</em></h2>
            <p>Whether it&apos;s a portrait of who you are now or a day you&apos;ll always remember, we&apos;ll make something personal together.</p>
            <a className="text-link" href="#inquire">Tell me what you have in mind <ArrowUpRight size={17} /></a>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <a href="#inquire" className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-copy"><strong>{service.name}</strong><small>{service.description}</small></span>
                <ArrowUpRight size={21} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-anchor">
        <div className="shell about-grid">
          <div className="about-mark" aria-hidden="true"><Image src="/logo/hailsh-mark.svg" alt="" width={170} height={170} /><small>HAILSH CREATIVE<br />PHOTOGRAPHY</small></div>
          <div className="about-copy">
            <p className="eyebrow">03 / Behind the camera</p>
            <h2>Good photos start with <em>feeling comfortable.</em></h2>
            <p>I&apos;m Haileleul, a DMV-based photographer. I create clean, confident images while making the experience feel easy and natural. I&apos;ll guide you when you need it and leave room for the moments that happen on their own.</p>
            <a className="text-link" href="#inquire">Let&apos;s make something together <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="inquire" className="inquire-section section-anchor">
        <div className="shell inquire-grid">
          <div className="inquire-intro">
            <p className="eyebrow">04 / Get in touch</p>
            <h2>Let&apos;s make<br />it <em>happen.</em></h2>
            <p>Tell me what you&apos;re planning. I&apos;ll reply by email with availability and next steps. No long questionnaire to get started.</p>
            <div className="contact-links">
              <a href="mailto:hailshbusiness@gmail.com"><Mail size={19} strokeWidth={1.5} /> hailshbusiness@gmail.com</a>
              <a href="https://instagram.com/hailsh_creative" target="_blank" rel="noopener noreferrer"><Instagram size={19} strokeWidth={1.5} /> @hailsh_creative</a>
            </div>
          </div>
          <form className="inquiry-form" onSubmit={sendInquiry}>
            <div className="form-heading"><span>Start your inquiry</span><span>01 — 05</span></div>
            <div className="form-grid">
              <div className="field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" autoComplete="email" required /></div>
              <div className="field"><label htmlFor="service">What are you booking? <span>*</span></label><select id="service" name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} required><option value="" disabled>Select a session</option><option>Portrait</option><option>Graduation</option><option>Event</option><option>Lifestyle</option><option>Other</option></select></div>
              <div className="field"><label htmlFor="date">Preferred date <span className="optional">(if known)</span></label><input id="date" name="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
              <div className="field field-full"><label htmlFor="details">Tell me a little more <span className="optional">(optional)</span></label><textarea id="details" name="details" rows={3} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Your ideas, location, or anything I should know" /></div>
            </div>
            <button className="submit-button" type="submit" disabled={submitting}>{submitting ? "Sending your inquiry…" : "Send inquiry"} <ArrowRight size={20} strokeWidth={1.7} /></button>
            <p className="form-note">I&apos;ll be in touch by email soon.</p>
            <p className={"form-status " + status} role="status" aria-live="polite">
              {status === "success" && <><Check size={18} /> Thank you! Your inquiry was sent. I&apos;ll be in touch soon.</>}
              {status === "error" && <>The form couldn&apos;t send. Please email me at <a href="mailto:hailshbusiness@gmail.com">hailshbusiness@gmail.com</a>.</>}
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div><strong>Hailsh <em>Creative</em></strong><span>Photography with feeling.</span></div>
          <div><span>Washington, DC · Maryland · Virginia</span><span>© {new Date().getFullYear()} Hailsh Creative</span></div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
