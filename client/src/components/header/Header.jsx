import styles from "./Header.module.scss";
import logo from "../../../../server/public/images/eneba_logo.png";
import SearchBar from "../searchBar/SearchBar.jsx";
import RegionBtn from "../regionBtn/RegionBtn.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="App logo" />
      </a>

      <SearchBar />
      <RegionBtn />

      <div>
        <button>Wishlist</button>
        <button>Cart</button>
        <button>Profile</button>
      </div>
    </header>
  );
}
