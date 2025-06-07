import styles from './Card.module.scss';

type CardProps = {
  image: string;
  title: string;
};

function Card({ image, title}: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt="Card" className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default Card;

