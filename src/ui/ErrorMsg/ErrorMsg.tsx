import styles from "./ErrorMsg.module.css";

interface IProps {
  msg: string;
}

export const ErrorMsg = ({ msg }: IProps) => (
  <div className={styles.error}>
    <h1>Something Wrong</h1>
    <p className={styles.message}>{msg}</p>
  </div>
);
