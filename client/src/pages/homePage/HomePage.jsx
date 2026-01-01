import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.scss";
import ItemsGrid from "../../components/itemsGrid/ItemsGrid.jsx";
import ShopItemCard from "../../components/shopItemCard/ShopItemCard.jsx";

const HomePage = () => {
  const { searchValue } = useOutletContext();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = "http://localhost:3001";

  useEffect(() => {
    const controller = new AbortController();

    const id = setTimeout(async () => {
      setLoading(true);
      setError(null);

      const q = searchValue.trim();
      const url = q
        ? `${API_BASE}/list?search=${encodeURIComponent(q)}`
        : `${API_BASE}/list`;

      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(`Failed to load items (${res.status})`);
        }

        const data = await res.json();
        setItems(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error(err);
        setError("Failed to load offers");
        setItems([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 0);

    return () => {
      clearTimeout(id);
      controller.abort();
    };
  }, [searchValue]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.gridBlock}>
          <div className={styles.text}>
            {error && error}

            {!error && items.length === 0 && loading && "Loading offers…"}

            {!error && items.length > 0 && (
              <span>
                Results found: {items.length}
                {loading && <span className={styles.spinner} />}
              </span>
            )}

            {!error && !loading && items.length === 0 && "No results"}
          </div>

          <ItemsGrid>
            {items.map((item) => (
              <ShopItemCard
                key={item.id}
                photo={
                  item.photo?.startsWith("http")
                    ? item.photo
                    : `${API_BASE}${item.photo}`
                }
                platformIcon={item.platformIcon}
                platform={item.platform}
                title={item.title}
                regionLabel={item.regionLabel}
                regionOk={item.regionOk}
                hasDiscount={item.hasDiscount}
                basePrice={item.basePrice}
                discount={item.discount}
                currentPrice={item.currentPrice}
                priceInfo={item.priceInfo}
                hasCashback={item.hasCashback}
                cashback={item.cashback}
                wishlisted={item.wishlisted}
                available={item.available}
              />
            ))}
          </ItemsGrid>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
