import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="App logo" />
      </a>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search for games, top-ups and more"
          aria-label="Search"
        />
        <button type="button" aria-label="Search">
          🔍
        </button>
      </div>

      <div className={styles.region}>
        <button className={styles.btn}>
          <span className={styles.region_icon}>X </span>
          <span className={styles.text}>
            <span className={styles.language}>LT</span>
            <span> |</span>
            <span className={styles.currency}> EUR</span>
          </span>
        </button>
      </div>

      <div>
        <button>Wishlist</button>
        <button>Cart</button>
        <button>Profile</button>
      </div>
    </header>
  );
}
