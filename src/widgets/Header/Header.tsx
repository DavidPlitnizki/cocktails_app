import { Link } from "react-router";
import { AddNewCocktailLink } from "../../ui/AddCocktailLink/AddCocktailLink";
import { Logo } from "../../ui/Logo/Logo";
import { Search } from "../../features/Search/Search";
import { routesLinks } from "../../config";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={`${styles.header} shadow`}>
      <div className={`${styles.header_inner} container`}>
        <Link to={routesLinks.home}>
          <Logo />
        </Link>
        <section className={styles.header_search_block}>
          <Search />
          <AddNewCocktailLink />
        </section>
      </div>
    </header>
  );
};
