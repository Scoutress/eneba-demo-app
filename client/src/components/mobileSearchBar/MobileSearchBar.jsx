import { useEffect } from "react";
import styles from "./MobileSearchBar.module.scss";

export default function MobileSearchBar({
  value,
  onChange,
  onClose,
  placeholder = "Games, top-ups and more",
}) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const hasText = value.trim().length > 0;

  return (
    <div className={styles.wrap} role="search">
      <button
        type="button"
        className={styles.iconBtn}
        aria-label="Back"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
          <path
            d="M14.5 6.5L9 12l5.5 5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />

      {hasText && (
        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Clear search"
          onClick={() => onChange("")}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={styles.iconSvg}
          >
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
