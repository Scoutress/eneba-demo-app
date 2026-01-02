import styles from "./AddToWishlistBtn.module.scss";

export default function AddToWishlistBtn({ onClick }) {
  return (
    <button
      type="button"
      className={styles.btn}
      aria-label="Add to wishlist"
      onClick={onClick}
    >
      <svg className={styles.frame} viewBox="0 0 96 96" aria-hidden="true">
        <path
          d="M16 0 H80 V88 L48 68 L16 88 Z"
          fill="var(--frame-fill)"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="miter"
        />
      </svg>

      <svg className={styles.heart} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="
            M12 21
            C12 21 4 14.6 4 9.5
            C4 7 6 5 8.5 5
            C10.1 5 11.5 5.9 12 7
            C12.5 5.9 13.9 5 15.5 5
            C18 5 20 7 20 9.5
            C20 14.6 12 21 12 21
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
