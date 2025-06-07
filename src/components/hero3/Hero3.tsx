import { useEffect, useState } from 'react';
import styles from './Hero3.module.scss';

function Hero3() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxScroll = 600;
  const maxTranslateX = +300; // pomak ulevo
  
  const cappedOffset = Math.min(offsetY, maxScroll);
  const translateX = (cappedOffset / maxScroll) * maxTranslateX;
  const opacity = 1 - cappedOffset / maxScroll;
  const handleClick = () => {
  const hero4 = document.getElementById('hero4');
  if (hero4) {
    hero4.scrollIntoView({ behavior: 'smooth' });
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
            transform: `translateX(${translateX}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          }}
        >
          O nama
        </h1>
        <div 
          className={styles.button} style={{
            transform: `translateX(${translateX}px)`,
            opacity,
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'}} onClick={handleClick}>
          Prikaži
        </div>
      </div>
    </section>
  );
}

export default Hero3;

