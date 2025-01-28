import { Link } from "react-router";
import { routesLinks } from "../../config";
import styles from "./AddCocktailLink.module.css";

export const AddNewCocktailLink = () => {
  return (
    <Link to={routesLinks.newCocktail}>
      <div className={styles.add_link} />
    </Link>
  );
};
