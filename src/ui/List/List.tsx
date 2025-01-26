import styles from "./List.module.css";

interface IProps {
  children: JSX.Element[];
}

export const List = ({ children }: IProps) => {
  return (
    <div className="container">
      <div className={styles.list}>{children}</div>
    </div>
  );
};
