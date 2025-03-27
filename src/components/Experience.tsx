import React from 'react';
import type { Experience as ExperienceType } from '../types/portfolio';
import styles from '../styles/Experience.module.css';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div id="experience" className={styles.experienceSection}>
      {/* Decorative background elements */}
      <div className={styles.decorativeBackground}></div>
      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Career</h2>
          <h3 className={styles.title}>
            Professional Experience
          </h3>
          <p className={styles.description}>
            My professional journey and work experience
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={styles.timelineItem}
            >
              {/* Left column - Date */}
              <div className={styles.dateContainer}>
                <div className={styles.dateDot}></div>
                <p className={styles.dateText}>
                  {exp.duration}
                </p>
              </div>
              
              {/* Right column - Content */}
              <div className={styles.content}>
                <div>
                  <h4 className={styles.position}>
                    {exp.position}
                  </h4>
                  <p className={styles.company}>
                    {exp.company}
                  </p>
                  <p className={styles.jobDescription}>
                    {exp.description}
                  </p>
                  <div className={styles.techTags}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={styles.techTag}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Vertical connection line for all but the last item */}
              {index < experiences.length - 1 && (
                <div className={styles.timelineConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 