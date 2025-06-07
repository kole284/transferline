import { useEffect, useState } from 'react';
import styles from './Hero2.module.scss'
import { Link } from 'react-router-dom';
import Card from '../card/Card.tsx'

function Hero2() {
  const [offsetY, setOffsetY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    const handleResize = () => {
      setHeroHeight(window.innerHeight);
    };

    // Postavi početnu visinu
    setHeroHeight(window.innerHeight);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Parallax efekat samo dok je Hero2 sekcija vidljiva
  // Ograničavamo scroll da utiče samo na prvih 50vh skrolovanja
  const maxScroll = heroHeight * 0.5; // Polovina visine ekrana
  const limitedScroll = Math.min(offsetY, maxScroll);
  const scrollProgress = limitedScroll / maxScroll; // 0 do 1

  // Parallax translacija u pikselima - kreću se od minus pozicije ka 0
  const headingTranslate = -100 + (scrollProgress * 100); // od -100px do 0px
  const cardTranslate = -150 + (scrollProgress * 150);     // od -150px do 0px  
  const buttonTranslate = -200 + (scrollProgress * 200);   // od -200px do 0px

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.heading}
        style={{ 
          transform: `translateY(${Math.min(0, headingTranslate)}px)`
        }}
      >
        <h1>Naše najpoznatije usluge:</h1>
      </div>
      
      <div
        className={styles['card-container']}
        style={{ 
          transform: `translateY(${Math.min(0, cardTranslate)}px)`
        }}
      >
        <Card image="/assets/hero2/box.png" title="Prevoz pošiljki" />
        <Card image="/assets/hero2/businessman.png" title="Poslovni prevoz" />
        <Card image="/assets/hero2/destination.png" title="Prevoz putnika" />
      </div>
      
      <div
        className={styles.button}
        style={{ 
          transform: `translateY(${Math.min(0, buttonTranslate)}px)`
        }}
      >
        <Link to="/services" className={styles.Link}>Još usluga</Link>
      </div>
    </div>
  );
}

export default Hero2;
