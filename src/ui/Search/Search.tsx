import styles from "./Search.module.css";

export const Search = () => {
  return (
    <input
      className={`${styles.search} shadow`}
      type="text"
      placeholder="Search Cocktails..."
    />
  );
};
