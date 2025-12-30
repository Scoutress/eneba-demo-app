export async function fetchOffers() {
  const res = await fetch("http://localhost:3001/list");
  if (!res.ok) throw new Error("Failed to load offers");
  return res.json();
}
