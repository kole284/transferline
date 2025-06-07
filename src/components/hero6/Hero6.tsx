import styles from './Hero6.module.scss';
import { Link } from 'react-router-dom';

function Hero6() {
  return (
    <div className={styles.wrapper} id="hero6">
      <div className={styles.content}>
        <div className={styles.topSection}>
          <h1>Rute i polasci</h1>
          <Link to="tel:+381631844786" className={styles.linkButton}>
            Rezerviši
          </Link>
        </div>

        <div className={styles.right}>
          <p><strong>Polasci:</strong></p>
          <ul>
            <li>Pon – Pet: <strong>Zaječar – Beograd</strong> u 5:30h</li>
            <li>Pon – Pet: <strong>Beograd – Zaječar</strong> u 14:00h</li>
            <li>Petak dodatno: <strong>Zaječar – Beograd</strong> u 15:00h</li>
            <li>Petak dodatno: <strong>Beograd – Zaječar</strong> u 19:30h</li>
            <li>Nedelja: <strong>Zaječar – Beograd</strong> u 15:00h</li>
            <li>Nedelja: <strong>Beograd – Zaječar</strong> u 19:30h</li>
          </ul>

          <p>Info i rezervacije: 
            <a href="tel:+381631844786" className={styles.phone}> +381 63 184 47 86</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero6;

