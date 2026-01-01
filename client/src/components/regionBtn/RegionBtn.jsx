import styles from "./RegionBtn.module.scss";

export default function RegionBtn() {
  return (
    <div className={styles.region}>
      <button type="button" className={styles.btn} aria-label="Region settings">
        <span className={styles.flag} aria-hidden="true" />

        <span className={styles.text}>
          <span className={styles.language}>English EU</span>
          <span className={styles.sep} aria-hidden="true">
            {" "}
            |{" "}
          </span>
          <span className={styles.currency}>EUR</span>
        </span>
      </button>
    </div>
  );
}
