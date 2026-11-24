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
  return (
    <section id="reviews" className="review-band section-anchor">
      <div className="shell">
        <div className="review-heading">
          <div>
            <h2>Client <em>reviews.</em></h2>
            <p>Had a session with me? I’d love to hear how it went.</p>
          </div>
          <Link href="/reviews" className="review-invite">Leave a review</Link>
        </div>
        {reviews.length > 0 && <div className="review-quotes">
          {reviews.map(item => <figure key={item.id}>
            <span role="img" aria-label={item.rating + " out of 5 stars"}>{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</span>
            <blockquote>{item.review}</blockquote>
            <figcaption>{item.display_name}</figcaption>
          </figure>)}
        </div>}
      </div>
    </section>
  );
}
