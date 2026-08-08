import { useState } from 'react';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import styles from './Burgermenu.module.scss';
import { NAV_LINKS, PHONE_HREF } from '../../constants/routes';

function Burgermenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.wrapper}>
      <a className={styles.logo} href="/#pocetna" onClick={() => setOpen(false)} aria-label="Transferline 019 početna">
        <img src="/logo.png" alt="" />
        <span>Transferline 019</span>
      </a>
      <button
        className={styles.menuButton}
        type="button"
        onClick={toggleMenu}
        aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={open}
      >
        {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav className={`${styles.navbar} ${open ? styles.open : ''}`}>
        <ul>
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <a href={path} onClick={toggleMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className={styles.action} href={PHONE_HREF} onClick={toggleMenu}>
          Rezerviši
          <FiArrowRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export default Burgermenu;
