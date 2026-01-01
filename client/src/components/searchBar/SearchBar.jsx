import { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function HeaderSearch() {
  const [value, setValue] = useState("");

  const hasText = value.trim().length > 0;

  return (
    <div className={styles.search}>
      <span className={styles.iconLeft} aria-hidden="true">
        <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="11"
            cy="11"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="16.5"
            y1="16.5"
            x2="21"
            y2="21"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <input
        className={styles.input}
        type="text"
        placeholder="Search for games, top-ups and more"
        aria-label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {hasText && (
        <button
          type="button"
          className={styles.clearBtn}
          aria-label="Clear search"
          onClick={() => setValue("")}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={styles.clearIcon}
          >
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
