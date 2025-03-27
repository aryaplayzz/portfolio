import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <a href="#home" className={`${styles.logo} ${isScrolled ? styles.logoScrolled : styles.logoTransparent}`}>
              Portfolio
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className={styles.desktopMenu}>
            {['about', 'projects', 'experience', 'education', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={styles.navLink}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuButton}
              aria-expanded="false"
            >
              <span className={styles.srOnly}>Open main menu</span>
              {!isMenuOpen ? (
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileNavContainer}>
            {['about', 'projects', 'experience', 'education', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 