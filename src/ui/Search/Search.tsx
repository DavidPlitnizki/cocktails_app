import styles from "./Search.module.css";

export const Search = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Cocktails..."
    />
  );
};
