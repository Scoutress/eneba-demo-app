import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ReportBtn.module.scss";

export default function ReportBtn() {
  const navigate = useNavigate();

  return createPortal(
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => navigate("/report")}
        type="button"
      >
        Report a problem
      </button>
    </div>,
    document.body
  );
}
