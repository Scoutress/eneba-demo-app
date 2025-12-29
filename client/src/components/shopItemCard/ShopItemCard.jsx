import styles from "./ShopItemCard.module.scss";

export default function ShopItemCard({ title }) {
  return <div className={styles.card}>{title}</div>;
}
