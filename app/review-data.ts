const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function reviewRequest(query: string, options: RequestInit = {}) {
  if (!base || !key) throw new Error("Reviews are unavailable");
  return fetch(base.replace(/\/$/, "") + "/rest/v1/client_reviews" + query, {
    ...options,
    headers: { apikey: key, "Content-Type": "application/json" },
    cache: "no-store",
  });
}
