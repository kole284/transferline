import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxScroll = 600;
  const maxTranslateX = -300; // pomak ulevo
  
  const cappedOffset = Math.min(offsetY, maxScroll);
  const translateX = (cappedOffset / maxScroll) * maxTranslateX;
  const opacity = 1 - cappedOffset / maxScroll;

  return (
    <section id="hero" className={styles.wrapper}>
      <div
        className={styles.slide}
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      <div className={styles.content}>
        <h1
          style={{
            transform: `translateX(${translateX}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          }}
        >
          Transferline
        </h1>
        <p
          style={{
            transform: `translateX(${translateX}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          }}
        >
          Profesionalne usluge prevoza
        </p>
        <Link
          to="/services"
          className={styles.button}
          style={{
            transform: `translateX(${translateX}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          }}
        >
          Zakaži vožnju
        </Link>
      </div>
    </section>
  );
}

export default Hero;
