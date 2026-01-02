import { useNavigate } from "react-router-dom";
import styles from "./DemoPage.module.scss";

export default function DemoPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.icon} aria-hidden="true">
        ⚠️
      </div>

      <p className={styles.text}>
        This is only a demo version.
        <br />
        Functionality is not implemented.
      </p>

      <button
        type="button"
        className={styles.btn}
        onClick={() => navigate("/")}
      >
        Back to home
      </button>
    </div>
  );
}
