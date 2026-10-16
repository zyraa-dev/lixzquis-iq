import { neon } from '@neondatabase/serverless';

// DATABASE_URL otomatis tersedia jika Neon dihubungkan lewat Vercel Storage.
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL belum diatur di environment variables Vercel.');
}

export const sql = neon(process.env.DATABASE_URL);
