begin;

create table public.client_reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  display_name text not null check (char_length(trim(display_name)) between 1 and 60),
  rating smallint not null check (rating between 1 and 5),
  review text not null check (char_length(trim(review)) between 1 and 1200),
  approved boolean not null default false
);
alter table public.client_reviews enable row level security;
revoke all on public.client_reviews from public, anon, authenticated;
grant insert (display_name, rating, review) on public.client_reviews to anon;
grant select (id, display_name, rating, review, created_at) on public.client_reviews to anon;
create policy "Submit pending reviews" on public.client_reviews for insert to anon
  with check (approved = false);
create policy "Read approved reviews" on public.client_reviews for select to anon
  using (approved = true);

commit;
