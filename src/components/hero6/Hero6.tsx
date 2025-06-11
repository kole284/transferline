import { useState, useRef } from 'react';
import styles from './Hero6.module.scss';
import { Link } from 'react-router-dom';

function Hero6() {
  const totalImages = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageClass, setCurrentImageClass] = useState('');
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) nextSlide(); // swipe levo
      else prevSlide(); // swipe desno
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageClass(styles['fade-out']);
    
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
      setCurrentImageClass(styles['fade-in']);
      
      setTimeout(() => {
        setCurrentImageClass('');
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageClass(styles['fade-out']);
    
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % totalImages);
      setCurrentImageClass(styles['fade-in']);
      
      setTimeout(() => {
        setCurrentImageClass('');
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const currentImage = `/assets/hero6/image${currentIndex + 1}.jpg`;

  return (
    <div className={styles.wrapper} id="hero6">
      <div className={styles.content}>
        <div className={styles.topSection}>
          <h1>Rute i polasci</h1>
          <Link to="tel:+381631844786" className={styles.linkButton}>
            Rezerviši
          </Link>
        </div>
        
        <div className={styles.mainContent}>
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

          <div
            className={styles.gallery}
            tabIndex={-1}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.imageWrapper}>
              <img
                src={currentImage}
                alt={`Slika ${currentIndex + 1}`}
                className={`${styles.image} ${currentImageClass}`}
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className={styles.controls}>
              <button onClick={prevSlide} aria-label="Prethodna slika" disabled={isAnimating}>&#10094;</button>
              <button onClick={nextSlide} aria-label="Sledeća slika" disabled={isAnimating}>&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero6;
