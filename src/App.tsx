import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import Home from './pages/home/Home.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import BurgerMenu from './components/burgermenu/Burgermenu.tsx';
import Footer from './components/footer/Footer.tsx';

type LegacyAnchorPageProps = {
  hash: string;
};

function LegacyAnchorPage({ hash }: LegacyAnchorPageProps) {
  useLayoutEffect(() => {
    window.history.replaceState(null, '', `/#${hash}`);
    document.getElementById(hash)?.scrollIntoView({ behavior: 'auto' });
  }, [hash]);

  return <Home />;
}

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.desktopNav}>
        <Navbar />
      </div>
      <div className={styles.mobileNav}>
        <BurgerMenu />
      </div>
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LegacyAnchorPage hash="o-nama" />} />
          <Route path="/services" element={<LegacyAnchorPage hash="usluge" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
