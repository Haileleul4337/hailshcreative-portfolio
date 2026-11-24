"use client";

import Image from "next/image";
import { Star, Check } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { reviewRequest } from "../review-data";

export default function ReviewPage() {
  const [status, setStatus] = useState<"ready" | "sending" | "sent" | "error">("ready");
  const [rating, setRating] = useState(0);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const response = await reviewRequest("", {
        method: "POST",
        body: JSON.stringify({
          display_name: String(data.get("name")).trim(),
          rating: Number(data.get("rating")),
          review: String(data.get("review")).trim(),
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <main className="review-page">
      <header className="review-mast">
        <Link href="/" className="brand">
          <Image src="/logo/hailsh-mark.svg" alt="" width={42} height={42} />
          <span>Hailsh Creative</span>
        </Link>
        <Link href="/#reviews" className="review-back">Back to portfolio</Link>
      </header>
      <div className="review-spread">
        <div className="review-photograph">
          <Image src="/portfolio/review-portrait.jpg" alt="Outdoor portrait of a woman wearing a white dress with colorful embroidery" fill priority unoptimized />
        </div>
        <div className="review-sheet">
          {status === "sent" ? <div role="status">
            <Check size={32} aria-hidden="true" />
            <h1>Thank <em>you.</em></h1>
            <p>Your review is awaiting approval. I appreciate you sharing what the shoot was like.</p>
            <Link className="review-back" href="/#reviews">Return to portfolio</Link>
          </div> : <>
            <h1>How was<br /><em>your shoot?</em></h1>
            <form onSubmit={submit}>
              <fieldset>
                <legend>Your rating</legend>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map(n => <label key={n}>
                    <input className="sr-only" type="radio" name="rating" value={n} required checked={rating === n} onChange={() => setRating(n)} aria-label={n + (n === 1 ? " star" : " stars")} />
                    <Star size={28} strokeWidth={1.35} fill={rating >= n ? "currentColor" : "none"} aria-hidden="true" />
                  </label>)}
                </div>
              </fieldset>
              <label className="review-label">Name to display
                <input required name="name" maxLength={60} placeholder="First name or initials" />
              </label>
              <label className="review-label">Your review
                <textarea required name="review" maxLength={1200} rows={3} placeholder="What stood out about your session?" />
              </label>
              <p className="review-note">Your name, rating, and review may appear on the site after approval.</p>
              {status === "error" && <p role="alert">Your review could not be sent. Please check your entries and try again.</p>}
              <button className="review-submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit review"}</button>
            </form>
          </>}
        </div>
      </div>
    </main>
  );
}
