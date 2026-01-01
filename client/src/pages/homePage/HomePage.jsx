import { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import ItemsGrid from "../../components/itemsGrid/ItemsGrid.jsx";
import ShopItemCard from "../../components/shopItemCard/ShopItemCard.jsx";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_BASE = "http://localhost:3001";

  useEffect(() => {
    let alive = true;

    const loadItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("http://localhost:3001/list");
        if (!res.ok) {
          throw new Error(`Failed to load items (${res.status})`);
        }

        const data = await res.json();
        if (alive) setItems(data);
      } catch (err) {
        console.error(err);
        if (alive) setError("Failed to load offers");
      } finally {
        if (alive) setLoading(false);
      }
    };

    loadItems();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <div>
        {loading && "Loading offers…"}
        {error && error}
        {!loading && !error && `Results found: ${items.length}`}
      </div>

      <div className={styles.page}>
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
    </>
  );
};

export default HomePage;
