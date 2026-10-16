export function methodGuard(req, res, allowed) {
  if (!allowed.includes(req.method)) {
    res.setHeader('Allow', allowed.join(', '));
    res.status(405).json({ error: 'Metode tidak diizinkan.' });
    return false;
  }
  return true;
}

export function fail(res, status, error, field) {
  return res.status(status).json({ error, field });
}
