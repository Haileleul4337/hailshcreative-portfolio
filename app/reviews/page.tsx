"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { reviewRequest } from "../review-data";

export default function ReviewPage() {
  const [status, setStatus] = useState<"ready" | "sending" | "sent" | "error">("ready");
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
  const field = "mt-2 block w-full rounded-xl border border-[var(--line)] bg-white p-3 text-[var(--ink)]";
  return <main className="min-h-screen bg-[var(--paper)] px-6 py-12 text-[var(--ink)]">
    <div className="mx-auto max-w-lg">
      <Link href="/#reviews" className="underline underline-offset-4">Hailsh Creative</Link>
      <h1 className="mt-12 text-4xl font-semibold">How was your shoot?</h1>
      {status === "sent" ? <p role="status" className="mt-6">Thank you for sharing your experience. Your review is awaiting approval.</p> :
        <form onSubmit={submit} className="mt-8 space-y-6">
          <label className="block">Name to display<input required name="name" maxLength={60} className={field} /></label>
          <label className="block">Your rating<select required name="rating" defaultValue="" className={field}>
            <option value="" disabled>Choose a rating</option>
            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} {n === 1 ? "star" : "stars"}</option>)}
          </select></label>
          <label className="block">Your review<textarea required name="review" maxLength={1200} rows={5} className={field} /></label>
          <p className="text-sm text-[var(--muted)]">After approval, your name, rating, and review may appear on this website.</p>
          {status === "error" && <p role="alert">Your review could not be sent. Check your entries and try again.</p>}
          <button disabled={status === "sending"} className="rounded-full bg-[var(--ink)] px-6 py-3 font-medium text-white disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Submit review"}
          </button>
        </form>}
    </div>
  </main>;
}
