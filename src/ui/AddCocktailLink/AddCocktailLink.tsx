import { Link } from "react-router";
import styles from "./AddCocktailLink.module.css";
import { routesLinks } from "../../config";

export const AddNewCocktailLink = () => {
  return (
    <Link to={routesLinks.newCocktail}>
      <div className={`${styles.add_link} shadow`} />
    </Link>
  );
};
