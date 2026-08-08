import { FiArrowRight } from 'react-icons/fi';
import styles from './Navbar.module.scss';
import { NAV_LINKS, PHONE_HREF } from '../../constants/routes';

function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Glavna navigacija">
      <a className={styles.logo} href="/#pocetna" aria-label="Transferline 019 početna">
        <img src="/logo.png" alt="" />
        <span>Transferline 019</span>
      </a>
      <ul className={styles.navList}>
        {NAV_LINKS.map(({ path, label }) => (
          <li key={path}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
      <a className={styles.action} href={PHONE_HREF}>
        Rezerviši
        <FiArrowRight aria-hidden="true" />
      </a>
    </nav>
  );
}

export default Navbar;

