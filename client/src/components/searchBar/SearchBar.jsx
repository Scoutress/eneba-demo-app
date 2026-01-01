import { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search for games, top-ups and more",
  autoFocus = false,
  hideLeftIcon = false,
  fullHeight = false,
  fullWidth = false,
}) {
  const [internal, setInternal] = useState("");

  const controlled =
    typeof value === "string" && typeof onChange === "function";
  const v = controlled ? value : internal;

  const setV = (next) => (controlled ? onChange(next) : setInternal(next));
  const hasText = v.trim().length > 0;

  return (
    <div
      className={[
        styles.search,
        fullHeight ? styles.fullHeight : "",
        fullWidth ? styles.fullWidth : "",
      ].join(" ")}
    >
      {!hideLeftIcon && (
        <span className={styles.iconLeft} aria-hidden="true">
          <svg
            className={styles.iconSvg}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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
      )}

      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        value={v}
        onChange={(e) => setV(e.target.value)}
        autoFocus={autoFocus}
      />

      {hasText && (
        <button
          type="button"
          className={styles.clearBtn}
          aria-label="Clear search"
          onClick={() => setV("")}
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
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
