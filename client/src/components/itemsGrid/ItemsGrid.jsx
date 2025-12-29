import styles from "./itemsGrid.module.scss";

export default function ItemsGrid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
