import { Link } from "react-router";
import { routesLinks } from "../../config";
import styles from "./Card.module.css";

interface IProps {
  id: string;
  title: string;
  imgSrc: string;
}

export const Card = ({ id, title, imgSrc }: IProps) => {
  return (
    <Link to={`${routesLinks.details}/${id}`}>
      <div className={`${styles.card} shadow`}>
        <div className={styles.card_image_wrapper}>
          <img className={styles.card_image} src={imgSrc} alt={title} />
        </div>
        <span className={styles.card_title}>{title}</span>
      </div>
    </Link>
  );
};
