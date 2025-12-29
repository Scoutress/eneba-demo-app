import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img src={logo} alt="App logo" />
      </a>

      {/* Temp.section */}
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
