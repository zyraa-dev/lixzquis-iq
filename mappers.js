export const mapUser = (r) => ({
  id: r.id, name: r.name, email: r.email, createdAt: r.created_at
});

export const mapAttempt = (r) => ({
  id: r.id,
  quizId: r.quiz_id,
  quizTitle: r.quiz_title,
  category: r.category,
  attemptNo: r.attempt_no,
  score: r.score,
  correct: r.correct,
  wrong: r.wrong,
  answered: r.answered,
  total: r.total,
  durationSec: r.duration_sec,
  predicate: r.predicate,
  passed: r.passed,
  finishedAt: r.finished_at,
  certificateId: r.certificate_id ?? null
});

// Data sertifikat publik: email pemilik tidak pernah ikut dikirim.
export const mapCert = (r) => ({
  id: r.id,
  ownerName: r.owner_name,
  quizTitle: r.quiz_title,
  score: r.score,
  predicate: r.predicate,
  issuedAt: r.issued_at,
  attemptId: r.attempt_id ?? null
});
