import { useNavigate } from "react-router-dom";
import styles from "./UserMenuBtn.module.scss";

export default function UserMenuBtn() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={styles.btn}
      aria-label="User menu"
      onClick={() => navigate("/demo")}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="8"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 20c1.8-3.5 5-5 8-5s6.2 1.5 8 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
