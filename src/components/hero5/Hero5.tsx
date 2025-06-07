import { useEffect, useState } from 'react';
import styles from './Hero5.module.scss';

function Hero5() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxScroll = 600;
  const maxTranslateY = -300; // pomak ulevo
  
  const cappedOffset = Math.min(offsetY, maxScroll);
  const translateY = (cappedOffset / maxScroll) * maxTranslateY;
  const opacity = 1 - cappedOffset / maxScroll;
  const handleClick = () => {
  const hero6 = document.getElementById('hero6');
  if (hero6) {
    hero6.scrollIntoView({ behavior: 'smooth' });
  }
};



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
            transform: `translateY(${translateY}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          }}
        >
          Naše usluge
        </h1>
        <div 
          className={styles.button} style={{
            transform: `translateY(${translateY}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'}} onClick={handleClick}>
          Prikaži
        </div>
      </div>
    </section>
  );
}

export default Hero5;


