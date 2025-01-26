import { Link } from "react-router";
import { AddNewCocktailLink } from "../../ui/AddCocktailLink";
import { Logo } from "../../ui/Logo";
import { Search } from "../../ui/Search";
import styles from "./Header.module.css";
import { routesLinks } from "../../config";

export const Header = () => {
  return (
    <header className={`${styles.header} container shadow`}>
      <Link to={routesLinks.home}>
        <Logo />
      </Link>
      <Search />
      <AddNewCocktailLink />
    </header>
  );
};
