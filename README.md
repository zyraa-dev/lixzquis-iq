# LixzQuis IQ v2.0.0

Deploy ke Vercel dengan database Neon (Postgres).

1. Import repository ke Vercel (tanpa konfigurasi build).
2. Tambahkan database Neon lewat tab Storage. DATABASE_URL otomatis tersedia.
3. Jalankan isi db/schema.sql di Neon SQL Editor.
4. Deploy ulang.

Uji lokal: `npm i -g vercel`, buat `.env.local` berisi DATABASE_URL, lalu jalankan `vercel dev`.
