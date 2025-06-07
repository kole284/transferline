import styles from './Hero4.module.scss';
import { Link } from 'react-router-dom';

function Hero4() {
  return (
    <div className={styles.wrapper} id="hero4">
      <div className={styles.content}>
        <h1>O nama</h1>
        <p>
          Transferline je pouzdana firma za prevoz iz Zaječara, specijalizovana za raznovrsne usluge prevoza putnika i pošiljki, sa ciljem da vam obezbedimo komforno, bezbedno i tačno putovanje – bilo gde da krenete.
        </p>
        <p>
          Naša misija je da svaki vaš put učinimo lakšim i prijatnijim, bilo da se radi o svakodnevnim relacijama ili posebnim prilikama. Naš tim čine profesionalni vozači sa iskustvom, a vozila su moderna, redovno održavana i prilagođena svim vrstama putovanja.
        </p>
        <ul>
          <li><strong>Poslovna putovanja</strong> – Pouzdan i diskretan prevoz za firme i poslovne klijente.</li>
          <li><strong>Putovanja u inostranstvo</strong> – Siguran i organizovan međunarodni prevoz.</li>
          <li><strong>Prevoz do aerodroma</strong> – Dolazak i povratak sa svih većih aerodroma u zemlji i regionu.</li>
          <li><strong>Grupna putovanja</strong> – Ekskurzije, izleti, tim bildinzi i putovanja po vašoj meri.</li>
          <li><strong>Prevoz pošiljki</strong> – Brz, bezbedan i tačan transport važnih pošiljki i dokumenata.</li>
          <li><strong>Redovne relacije Zaječar – Beograd / Beograd – Zaječar</strong> – Udoban prevoz sa fiksnim terminima i pristupačnim cenama.</li>
        </ul>
        <p>
          Bez obzira da li putujete sami, sa porodicom, prijateljima ili poslovnim partnerima – Transferline vam garantuje profesionalnu uslugu i bezbrižno iskustvo.
        </p>
        <p><strong>Transferline – Vaša destinacija, naša odgovornost.</strong></p>
        <p>Kontaktirajte nas i rezervišite svoje mesto već danas!</p>
          <Link to="/services" className={styles.linkButton}>
            Rezerviši
          </Link>
      </div>
    </div>
  );
}

export default Hero4;

