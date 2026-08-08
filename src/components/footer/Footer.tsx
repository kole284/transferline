import { PHONE_DISPLAY, PHONE_HREF } from '../../constants/routes';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a className={styles.brand} href="/#pocetna" aria-label="Transferline 019 početna">
          <img src="/logo.png" alt="" />
          <span>Transferline 019</span>
        </a>
        <div className={styles.info}>
          <span>Zaječar ↔ Beograd</span>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
