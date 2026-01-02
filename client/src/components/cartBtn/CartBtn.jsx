import { useNavigate } from "react-router-dom";
import styles from "./CartBtn.module.scss";

export default function CartBtn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={styles.btn}
      aria-label="Shopping cart"
      onClick={() => navigate("/demo")}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 6h15l-1.5 9h-12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.5" fill="currentColor" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
        <path
          d="M6 6L5 3H2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
