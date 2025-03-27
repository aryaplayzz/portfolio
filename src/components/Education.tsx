import React from 'react';
import type { Education as EducationType } from '../types/portfolio';
import styles from '../styles/Education.module.css';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div id="education" className={styles.educationSection}>
      {/* Decorative elements */}
      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Academics</h2>
          <h3 className={styles.title}>
            Education Background
          </h3>
          <p className={styles.description}>
            My academic journey and qualifications
          </p>
        </div>

        <div className={styles.educationGrid}>
          {education.map((edu, index) => (
            <div
              key={index}
              className={styles.educationCard}
            >
              {/* Accent decoration */}
              <div className={styles.accentBar}></div>
              
              <div className={styles.cardContent}>
                <div className={styles.schoolHeader}>
                  <svg className={styles.educationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                  <h4 className={styles.schoolName}>
                    {edu.school}
                  </h4>
                </div>
                
                <div className={styles.infoContainer}>
                  <div className={styles.degreeInfo}>
                    <span className={styles.degree}>{edu.degree}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.field}>{edu.field}</span>
                  </div>
                  
                  <div className={styles.durationInfo}>
                    <svg className={styles.calendarIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className={styles.duration}>{edu.duration}</span>
                  </div>
                  
                  {edu.gpa && (
                    <div className={styles.gpaInfo}>
                      <svg className={styles.gpaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className={styles.gpaText}>GPA: <span className={styles.gpaValue}>{edu.gpa}</span></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 