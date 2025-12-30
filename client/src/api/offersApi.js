export async function fetchOffers({ search = "", page = 1, limit = 20 } = {}) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  params.set("page", String(page));
  params.set("limit", String(limit));

  const res = await fetch(`http://localhost:3001/list?${params.toString()}`);
  if (!res.ok) throw new Error(`Failed to load offers: ${res.status}`);
  return res.json();
}
