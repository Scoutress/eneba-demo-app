import styles from "./ItemsGrid.module.scss";

export default function ItemsGrid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
