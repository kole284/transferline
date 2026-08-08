import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiPackage,
  FiPhone,
  FiSend,
  FiUsers,
} from 'react-icons/fi';
import { PHONE_DISPLAY, PHONE_HREF } from '../../constants/routes';
import styles from './Home.module.scss';

const departures = [
  {
    route: 'Zaječar → Beograd',
    rows: [
      { days: 'Pon–Pet', time: '05:30' },
      { days: 'Petak dodatno', time: '15:00' },
      { days: 'Nedelja', time: '15:00' },
    ],
  },
  {
    route: 'Beograd → Zaječar',
    rows: [
      { days: 'Pon–Pet', time: '14:00' },
      { days: 'Petak dodatno', time: '19:30' },
      { days: 'Nedelja', time: '19:30' },
    ],
  },
];

const services = [
  {
    icon: FiUsers,
    title: 'Prevoz putnika',
    text: 'Komforan prevoz za svakodnevne relacije i posebne dogovore.',
  },
  {
    icon: FiBriefcase,
    title: 'Poslovna putovanja',
    text: 'Pouzdan i diskretan prevoz za firme i poslovne klijente.',
  },
  {
    icon: FiGlobe,
    title: 'Putovanja u inostranstvo',
    text: 'Organizovan međunarodni prevoz po dogovoru.',
  },
  {
    icon: FiSend,
    title: 'Prevoz do aerodroma',
    text: 'Dolazak i povratak sa većih aerodroma u zemlji i regionu.',
  },
  {
    icon: FiUsers,
    title: 'Grupna putovanja',
    text: 'Ekskurzije, izleti, tim bildinzi i putovanja po meri grupe.',
  },
  {
    icon: FiPackage,
    title: 'Prevoz pošiljki',
    text: 'Transport važnih pošiljki i dokumenata uz redovne relacije.',
  },
];

const gallery = [
  { src: '/assets/hero6/image1.jpg', alt: 'Crno putničko vozilo u garaži' },
  { src: '/assets/hero6/image2.jpg', alt: 'Svetlo porodično vozilo na putu' },
  { src: '/assets/hero6/image3.jpg', alt: 'Putničko vozilo za transfer' },
  { src: '/assets/hero6/image4.jpg', alt: 'Putničko vozilo spolja' },
];

function Home() {
  return (
    <>
      <section className={styles.hero} id="pocetna">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Transferline 019</p>
          <h1>Prevoz putnika između Zaječara i Beograda.</h1>
          <p className={styles.lead}>
            Redovne relacije, poslovni prevoz, aerodromski transferi i vožnje po dogovoru.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href={PHONE_HREF}>
              <FiPhone aria-hidden="true" />
              Rezerviši vožnju
            </a>
            <a className={styles.secondaryAction} href="/#polasci">
              Pogledaj polaske
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <img src="/assets/hero6/image1.jpg" alt="Putničko vozilo za transfer" />
          <div className={styles.mediaPanel} aria-label="Kratke informacije">
            <span>Zaječar ↔ Beograd</span>
            <strong>Pon–Pet 05:30 / 14:00</strong>
          </div>
        </div>
      </section>

      <section className={styles.section} id="polasci">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Rute i polasci</p>
          <h2>Jasan raspored za redovnu relaciju.</h2>
        </div>
        <div className={styles.timetableGrid}>
          {departures.map((departure) => (
            <article className={styles.timetable} key={departure.route}>
              <div className={styles.routeTitle}>
                <FiMapPin aria-hidden="true" />
                <h3>{departure.route}</h3>
              </div>
              <div className={styles.rows}>
                {departure.rows.map((row) => (
                  <div className={styles.row} key={`${departure.route}-${row.days}`}>
                    <span>{row.days}</span>
                    <strong>{row.time}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className={styles.scheduleCta}>
          <FiClock aria-hidden="true" />
          <span>Za mesto u vozilu pozovite</span>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </div>
      </section>

      <section className={`${styles.section} ${styles.servicesSection}`} id="usluge">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Usluge</p>
          <h2>Prevoz za redovne i dogovorene potrebe.</h2>
        </div>
        <div className={styles.serviceList}>
          {services.map(({ icon: Icon, title, text }) => (
            <article className={styles.serviceItem} key={title}>
              <Icon aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.aboutSection}`} id="o-nama">
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>O nama</p>
          <h2>Pouzdan prevoz iz Zaječara.</h2>
          <p>
            Transferline je firma za prevoz iz Zaječara, specijalizovana za prevoz putnika i
            pošiljki na redovnim i dogovorenim relacijama.
          </p>
          <p>
            Tim čine profesionalni vozači sa iskustvom, a vozila su moderna, redovno održavana i
            prilagođena različitim vrstama putovanja.
          </p>
        </div>
        <div className={styles.aboutNote}>
          <span>Redovna relacija</span>
          <strong>Zaječar ↔ Beograd</strong>
          <p>Fiksni termini tokom radne nedelje, petkom i nedeljom.</p>
        </div>
      </section>

      <section className={styles.section} id="vozila">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Vozila</p>
          <h2>Fotografije vozila.</h2>
        </div>
        <div className={styles.gallery}>
          <figure className={styles.featuredImage}>
            <img src={gallery[0].src} alt={gallery[0].alt} loading="lazy" />
          </figure>
          <div className={styles.galleryRail}>
            {gallery.slice(1).map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contactSection}`} id="kontakt">
        <div>
          <p className={styles.eyebrow}>Rezervacija</p>
          <h2>Rezervišite vožnju.</h2>
          <p>
            Za rezervaciju mesta i dogovor oko vožnje najbrže je da pozovete direktno.
          </p>
        </div>
        <a className={styles.phoneAction} href={PHONE_HREF}>
          <FiPhone aria-hidden="true" />
          Pozovi {PHONE_DISPLAY}
        </a>
      </section>
    </>
  );
}

export default Home;
