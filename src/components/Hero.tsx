import React, { useEffect, useState } from 'react';
import { PortfolioData } from '../types/portfolio';
import styles from '../styles/Hero.module.css';

interface HeroProps {
  data: Pick<PortfolioData, 'name' | 'title' | 'about' | 'profileImage'>;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className={styles.hero}>
      {/* Background decorative elements */}
      <div className={styles.background}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
            <h1 className={styles.heading}>
              <span className={styles.subtitle}>Hello, I'm</span>
              <span className={styles.title}>
                {data.name}
                <span className={styles.underline}></span>
              </span>
            </h1>
            <h2 className={styles.position}>
              {data.title}
            </h2>
            <p className={styles.description}>
              {data.about}
            </p>
            <div className={styles.buttons}>
              <a
                href="#projects"
                className={styles.primaryButton}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={styles.secondaryButton}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className={`${styles.profileContainer} ${isVisible ? styles.profileVisible : styles.profileHidden}`}>
            <div className={styles.profileWrapper}>
              <div className={styles.profileRing1}>
                <div className={styles.profileRing2}>
                  <div className={styles.profileImageContainer}>
                    {data.profileImage ? (
                      <img 
                        src={data.profileImage} 
                        alt={`${data.name}`}
                        className={styles.profileImage}
                      />
                    ) : (
                      <div className={styles.profileInitial}>
                        {data.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 