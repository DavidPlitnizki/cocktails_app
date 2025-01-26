import { Logo } from "../../ui/Logo";
import { Search } from "../../ui/Search";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <Search />
    </header>
  );
};
