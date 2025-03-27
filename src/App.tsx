import React from 'react';
import './styles/global.css';
import styles from './styles/App.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.mainContent}>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects projects={portfolioData.projects} />
        <Experience experiences={portfolioData.experience} />
        <Education education={portfolioData.education} />
        <Contact data={portfolioData} />
      </main>
    </div>
  );
};

export default App;
