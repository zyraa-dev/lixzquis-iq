import crypto from 'node:crypto';
import { sql } from './db.js';

/*
  KEAMANAN:
  - Password di-hash dengan scrypt (bawaan Node.js) dan salt acak per pengguna.
  - Token sesi acak 256-bit. Yang disimpan di database hanya hash SHA-256-nya.
*/
const scrypt = (password, salt) =>
  new Promise((resolve, reject) =>
    crypto.scrypt(password, salt, 64, (err, key) => (err ? reject(err) : resolve(key)))
  );

export async function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = (await scrypt(password, salt)).toString('hex');
  return { salt, hash };
}

export async function verifyPassword(password, salt, hash) {
  const test = await scrypt(password, salt);
  const ref = Buffer.from(hash, 'hex');
  return ref.length === test.length && crypto.timingSafeEqual(test, ref);
}

const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');

export async function createSession(userId) {
  const token = crypto.randomBytes(32).toString('base64url');
  await sql`
    INSERT INTO sessions (token_hash, user_id, expires_at)
    VALUES (${sha256(token)}, ${userId}, now() + interval '30 days')`;
  return token;
}

export async function currentUser(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) return null;
  const rows = await sql`
    SELECT u.id, u.name, u.email, u.created_at
    FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token_hash = ${sha256(token)} AND s.expires_at > now()`;
  if (!rows[0]) return null;
  return { id: rows[0].id, name: rows[0].name, email: rows[0].email, createdAt: rows[0].created_at };
}

export async function requireUser(req, res) {
  const user = await currentUser(req);
  if (!user) {
    res.status(401).json({ error: 'Sesi tidak valid. Silakan masuk kembali.' });
    return null;
  }
  return user;
}

export async function revokeSession(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (token) await sql`DELETE FROM sessions WHERE token_hash = ${sha256(token)}`;
}
