import { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import SearchBar from "../searchBar/SearchBar.jsx";
import RegionBtn from "../regionBtn/RegionBtn.jsx";
import WishlistBtn from "../wishlistBtn/WishlistBtn.jsx";
import CartBtn from "../cartBtn/CartBtn.jsx";
import UserMenuBtn from "../userMenuBtn/UserMenuBtn.jsx";
import MobileSearchBar from "../mobileSearchBar/MobileSearchBar.jsx";

function useIsMobile(breakpointPx = 880, { onExitMobile } = {}) {
  const getMatches = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpointPx}px)`).matches;
  }, [breakpointPx]);

  const [isMobile, setIsMobile] = useState(() => getMatches());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);

    const handleChange = (e) => {
      if (!e.matches) onExitMobile?.();
      setIsMobile(e.matches);
    };

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, [breakpointPx, onExitMobile]);

  return isMobile;
}

function SearchIconBtn({ onClick }) {
  return (
    <button
      type="button"
      className={styles.iconBtn}
      aria-label="Open search"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
        <circle
          cx="11"
          cy="11"
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <line
          x1="16.5"
          y1="16.5"
          x2="21"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export default function Header() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const closeMobileSearch = useCallback(() => setMobileSearchOpen(false), []);
  const openMobileSearch = useCallback(() => setMobileSearchOpen(true), []);

  const isMobile = useIsMobile(880, { onExitMobile: closeMobileSearch });

  useEffect(() => {
    if (!isMobile) return;
    if (!mobileSearchOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobile, mobileSearchOpen]);

  if (isMobile) {
    return (
      <header
        className={
          mobileSearchOpen ? styles.headerMobileSearch : styles.headerMobile
        }
      >
        {mobileSearchOpen ? (
          <div className={styles.mobileSearchField}>
            <MobileSearchBar
              value={searchValue}
              onChange={setSearchValue}
              onClose={closeMobileSearch}
            />
          </div>
        ) : (
          <>
            <a href="/" className={styles.logoMobile} aria-label="Home">
              <img src="/images/eneba_logo.png" alt="App logo" />
            </a>

            <div className={styles.rightMobile}>
              <SearchIconBtn onClick={openMobileSearch} />
              <WishlistBtn />
              <CartBtn />
              <UserMenuBtn />
            </div>
          </>
        )}
      </header>
    );
  }

  return (
    <header className={styles.headerDesktop}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="/" className={styles.logo} aria-label="Home">
            <img src="/images/eneba_logo.png" alt="App logo" />
          </a>

          <div className={styles.searchWrap}>
            <SearchBar
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search for games, top-ups and more"
              fullWidth
            />
          </div>

          <div className={styles.regionWrap}>
            <RegionBtn />
          </div>
        </div>

        <div className={styles.right}>
          <WishlistBtn />
          <CartBtn />
          <UserMenuBtn />
        </div>
      </div>
    </header>
  );
}
