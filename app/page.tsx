"use client";

import { useState } from "react";
import { ArrowUpRight, Instagram, Mail, Menu, X } from "lucide-react";

const portfolioUrl = "https://hailshcreative.pic-time.com/portfolio";
const embeddedPortfolioUrl = "https://hailshcreative.pic-time.com/client?headless=true";
const formEndpoint = "https://formspree.io/f/xeergwpg";
const initialForm = {
  name: "",
  email: "",
  service: "",
  date: "",
  details: "",
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New ${form.service} inquiry from ${form.name}`,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setForm(initialForm);
      setMessage("Thanks! Your inquiry is on its way. I’ll be in touch soon.");
    } catch {
      setMessage("The form could not send right now. Please email hailshbusiness@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-white/15 bg-black/35 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#f3c94b]";
  const labelClass = "mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/70";

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 text-left">
            <img src="/logo/hailsh-creative-logo.png" alt="" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-xl font-black italic tracking-tight">Hailsh <span className="text-[#f3c94b]">Creative</span></span>
          </button>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            <button onClick={() => scrollTo("portfolio")} className="text-sm font-bold uppercase tracking-widest text-white/75 hover:text-[#f3c94b]">Portfolio</button>
            <button onClick={() => scrollTo("about")} className="text-sm font-bold uppercase tracking-widest text-white/75 hover:text-[#f3c94b]">About</button>
            <button onClick={() => scrollTo("booking")} className="rounded-full bg-[#f3c94b] px-5 py-2.5 text-sm font-black uppercase tracking-wider text-black">Book a session</button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} className="rounded-full border border-white/20 p-2 md:hidden">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="flex flex-col border-t border-white/10 px-6 py-2 md:hidden">
            {([["Portfolio", "portfolio"], ["About", "about"], ["Book a session", "booking"]] as const).map(([label, id]) => (
              <button key={id} onClick={() => { setMenuOpen(false); scrollTo(id); }} className="py-3 text-left font-bold uppercase tracking-wider">{label}</button>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:min-h-[65vh]">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">DMV photographer</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">Images that feel like you.</h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">Portraits, graduations, events, and lifestyle photography with a personal touch.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <button onClick={() => scrollTo("booking")} className="rounded-full bg-[#f3c94b] px-7 py-3.5 font-black uppercase tracking-wider text-black">Book your session</button>
          <button onClick={() => scrollTo("portfolio")} className="rounded-full border border-white/25 px-7 py-3.5 font-black uppercase tracking-wider hover:border-[#f3c94b]">See the work</button>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-20 border-t border-white/10 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">Selected work</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">The portfolio</h2>
              <p className="mt-3 max-w-2xl text-white/65">Explore the latest work directly from my Pic-Time gallery. New photos appear here as the portfolio grows.</p>
            </div>
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#f3c94b] hover:underline">Open full gallery <ArrowUpRight size={17} /></a>
          </div>
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#151515]">
            <iframe
              title="Hailsh Creative Pic-Time portfolio"
              src={embeddedPortfolioUrl}
              loading="lazy"
              className="block h-[640px] w-full bg-white sm:h-[780px] lg:h-[880px]"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="mt-4 text-sm text-white/50">If the gallery does not appear, <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-[#f3c94b] underline">view it on Pic-Time</a>.</p>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">About</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">Hailsh Creative</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">I’m a DMV-based photographer creating clean, confident, timeless images. I’ll guide you through the session so you can feel comfortable, be yourself, and leave with photographs you love to share and keep.</p>
        </div>
      </section>

      <section id="booking" className="scroll-mt-20 border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f3c94b]">Let’s create</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">Book a session</h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/65">Tell me a little about your shoot. I’ll follow up by email to discuss availability and the next steps.</p>
            <div className="mt-8 flex flex-col gap-4">
              <a href="https://instagram.com/hailsh_creative" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/75 hover:text-[#f3c94b]"><Instagram size={20} /> @hailsh_creative</a>
              <a href="mailto:hailshbusiness@gmail.com" className="flex items-center gap-3 text-white/75 hover:text-[#f3c94b]"><Mail size={20} /> hailshbusiness@gmail.com</a>
            </div>
          </div>
          <form onSubmit={submitInquiry} className="rounded-[2rem] border border-white/10 bg-[#111] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="name" className={labelClass}>Name</label><input id="name" name="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} /></div>
              <div><label htmlFor="email" className={labelClass}>Email</label><input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className={inputClass} /></div>
              <div><label htmlFor="service" className={labelClass}>What are you booking?</label><select id="service" name="service" required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass}><option value="" disabled>Choose a session</option><option>Portrait</option><option>Graduation</option><option>Event</option><option>Lifestyle</option><option>Other</option></select></div>
              <div><label htmlFor="date" className={labelClass}>Preferred date</label><input id="date" name="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} /></div>
            </div>
            <div className="mt-5"><label htmlFor="details" className={labelClass}>Anything else? <span className="normal-case tracking-normal text-white/40">(optional)</span></label><textarea id="details" name="details" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Tell me about your ideas or location" className={inputClass} /></div>
            <button type="submit" disabled={submitting} className="mt-6 w-full rounded-full bg-[#f3c94b] px-7 py-3.5 font-black uppercase tracking-wider text-black transition hover:opacity-90 disabled:opacity-60">{submitting ? "Sending…" : "Send inquiry"}</button>
            <p role="status" aria-live="polite" className="mt-4 min-h-6 text-sm text-white/70">{message}</p>
          </form>
        </div>
      </section>
    </main>
  );
}
