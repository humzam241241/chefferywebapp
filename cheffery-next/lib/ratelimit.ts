const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10;

type Record = { count: number; expiresAt: number };
const store = new Map<string, Record>();

export function rateLimit(key: string) {
  const now = Date.now();
  const rec = store.get(key);
  if (!rec || rec.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return { ok: true } as const;
  }
  if (rec.count >= MAX_REQUESTS) {
    return { ok: false, retryAfter: Math.ceil((rec.expiresAt - now) / 1000) } as const;
  }
  rec.count += 1;
  store.set(key, rec);
  return { ok: true } as const;
}


