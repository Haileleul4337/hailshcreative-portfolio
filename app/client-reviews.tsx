"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { reviewRequest } from "./review-data";

type Review = { id: string; display_name: string; rating: number; review: string };

export default function ClientReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      const res = await reviewRequest("?select=id,display_name,rating,review&order=created_at.desc,id.desc&limit=6", { signal: controller.signal });
      if (res.ok) setReviews(await res.json());
    }
    load().catch(() => {});
    return () => controller.abort();
  }, []);
  return <section id="reviews" className="shell section-anchor py-12">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <h2 className="text-3xl font-semibold">Client reviews</h2>
      <Link href="/reviews" className="rounded-full border border-[var(--line)] px-5 py-3">Leave a review</Link>
    </div>
    {reviews.length > 0 && <div className="mt-6 grid gap-4 md:grid-cols-3">
      {reviews.map(item => <figure key={item.id} className="min-w-0 rounded-[2rem] border border-[var(--line)] bg-white/40 p-6">
        <p aria-label={item.rating + " out of 5 stars"}>{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</p>
        <blockquote className="my-4 whitespace-pre-line break-words text-[var(--ink)]">{item.review}</blockquote>
        <figcaption className="break-words">{item.display_name}</figcaption>
      </figure>)}
    </div>}
  </section>;
}
