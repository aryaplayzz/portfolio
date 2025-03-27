import React from 'react';
import type { PortfolioData } from '../types/portfolio';
import styles from '../styles/About.module.css';

interface AboutProps {
  data: Pick<PortfolioData, 'about' | 'skills'>;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div id="about" className={styles.aboutSection}>
      {/* Decorative elements */}
      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>About Me</h2>
          <h3 className={styles.title}>
            Who I Am
          </h3>
          <p className={styles.description}>
            Get to know me and my technical skills
          </p>
        </div>

        <div className={styles.content}>
          {/* Left column - About text */}
          <div className={styles.aboutContent}>
            <h4 className={styles.contentTitle}>My Background</h4>
            <div className={styles.text}>
              <p className={styles.paragraph}>{data.about}</p>
              <p className={styles.paragraph}>
                I'm passionate about building elegant, user-friendly solutions that solve real-world problems. 
                My goal is to create software that not only functions flawlessly but also provides an exceptional user experience.
              </p>
            </div>
            
            <div className={styles.buttonContainer}>
              <a
                href="#contact"
                className={styles.primaryButton}
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div>
            <div className={styles.skillsCard}>
              <h4 className={styles.skillsHeader}>
                <svg className={styles.skillsIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Technical Skills
              </h4>
              
              <div className={styles.skillsTags}>
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={styles.skillTag}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 