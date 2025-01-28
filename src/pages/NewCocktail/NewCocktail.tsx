import { AddNewCocktail } from "../../features/AddNewCocktail/AddNewCocktail";
import styles from "./NewCocktail.module.css";

export const NewCocktail = () => {
  return (
    <div className={styles.wrapper}>
      <AddNewCocktail />
    </div>
  );
};
