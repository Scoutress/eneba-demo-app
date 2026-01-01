import { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function HeaderSearch() {
  const [value, setValue] = useState("");

  const hasText = value.trim().length > 0;

  return (
    <div className={styles.search}>
      <span className={styles.iconLeft} aria-hidden="true">
        <svg viewBox="0 0 24 24" className={styles.iconSvg}>
          <path
            d="M10.5 3a7.5 7.5 0 105.05 13.05l3.2 3.2a1 1 0 001.42-1.42l-3.2-3.2A7.5 7.5 0 0010.5 3zm0 2a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
            fill="currentColor"
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
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  );
}
