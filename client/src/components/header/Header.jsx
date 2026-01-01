import styles from "./Header.module.scss";
import SearchBar from "../searchBar/SearchBar.jsx";
import RegionBtn from "../regionBtn/RegionBtn.jsx";
import WishlistBtn from "../wishlistBtn/WishlistBtn.jsx";
import CartBtn from "../cartBtn/CartBtn.jsx";
import UserMenuBtn from "../userMenuBtn/UserMenuBtn.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a href="/" className={styles.logo} aria-label="Home">
          <img src="/images/eneba_logo.png" alt="App logo" />
        </a>

        <div className={styles.searchWrap}>
          <SearchBar />
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
    </header>
  );
}
