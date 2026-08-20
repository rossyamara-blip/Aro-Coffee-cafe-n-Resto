-- Tabel reservasi untuk Aro Coffee Cafe & Resto
create table if not exists public.reservasi (
  id uuid primary key default gen_random_uuid(),
  nama_lengkap text not null,
  nomor_meja text not null,
  tanggal date not null,
  waktu text not null,
  jumlah_tamu text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.reservasi enable row level security;

create policy "Allow public insert reservasi"
  on public.reservasi for insert
  to public
  with check (true);

create policy "Allow public read reservasi"
  on public.reservasi for select
  to public
  using (true);
