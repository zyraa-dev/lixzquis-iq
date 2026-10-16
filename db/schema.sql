CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE,
  pass_salt   TEXT NOT NULL,
  pass_hash   TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Token sesi disimpan dalam bentuk hash SHA-256, bukan teks biasa.
CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at  TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS attempts (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  quiz_id      TEXT NOT NULL,
  quiz_title   TEXT NOT NULL,
  category     TEXT NOT NULL,
  attempt_no   INT  NOT NULL,
  score        INT  NOT NULL,
  correct      INT  NOT NULL,
  wrong        INT  NOT NULL,
  answered     INT  NOT NULL,
  total        INT  NOT NULL,
  duration_sec INT  NOT NULL,
  predicate    TEXT NOT NULL,
  passed       BOOLEAN NOT NULL,
  started_at   TIMESTAMPTZ NOT NULL,
  finished_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS attempts_user_idx ON attempts (user_id, finished_at DESC);

CREATE TABLE IF NOT EXISTS certificates (
  id           TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  attempt_id   TEXT NOT NULL UNIQUE REFERENCES attempts(id) ON DELETE CASCADE,
  owner_name   TEXT NOT NULL,
  owner_email  TEXT NOT NULL,
  quiz_id      TEXT NOT NULL,
  quiz_title   TEXT NOT NULL,
  score        INT  NOT NULL,
  predicate    TEXT NOT NULL,
  issued_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS certificates_user_idx ON certificates (user_id, issued_at DESC);
