import { useEffect, useMemo, useState } from "react";

function useDebouncedValue(value, delayMs = 250) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}

export default function useGameSearch(searchValue, { debounceMs = 250 } = {}) {
  const debounced = useDebouncedValue(searchValue, debounceMs);

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = useMemo(() => {
    const q = debounced.trim();
    if (!q) return "/list";
    return `/list?search=${encodeURIComponent(q)}`;
  }, [debounced]);

  useEffect(() => {
    const controller = new AbortController();

    async function run() {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);

        const data = await res.json();

        setGames(Array.isArray(data) ? data : data.items ?? []);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "Something went wrong");
          setGames([]);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    run();
    return () => controller.abort();
  }, [url]);

  return { games, loading, error, debouncedQuery: debounced.trim() };
}
