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
      <img
        src="/images/icons/profile.svg"
        alt=""
        aria-hidden="true"
        className={styles.icon}
      />
    </button>
  );
}
