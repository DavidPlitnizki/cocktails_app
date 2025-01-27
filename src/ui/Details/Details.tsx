import styles from "./Details.module.css";

interface IProps {
  [key: string]: string;
}

export const Details = ({ details }: IProps) => {
  const imgSrc = details?.["strDrinkThumb"];
  return (
    <div className={styles.details}>
      <div className={`${styles.details_content} shadow`}>
        <div className={styles.details_img_block}>
          <img src={imgSrc} alt="cocktail image" />
        </div>
        <div className={styles.details_info_block}>
          {Object.entries(details).map(([key, value]) => {
            return value ? (
              <div key={key}>{`${key.replace("str", "")} : ${value}`}</div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};
