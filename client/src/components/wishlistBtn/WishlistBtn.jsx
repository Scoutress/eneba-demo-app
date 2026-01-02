import { useNavigate } from "react-router-dom";
import styles from "./WishlistBtn.module.scss";

export default function WishlistBtn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={styles.btn}
      aria-label="Wishlist"
      onClick={() => navigate("/demo")}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20.5
       L4.5 12.8
       C2.5 10.9 2.5 7.9 4.5 6
       C6.4 4.2 9.3 4.5 11 6.3
       L12 7.3
       L13 6.3
       C14.7 4.5 17.6 4.2 19.5 6
       C21.5 7.9 21.5 10.9 19.5 12.8
       L12 20.5 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
