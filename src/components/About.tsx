import React from 'react';
import type { PortfolioData } from '../types/portfolio';

interface AboutProps {
  data: Pick<PortfolioData, 'about' | 'skills'>;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-space-500/10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-nebula-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-space-400 font-semibold tracking-wide uppercase">About Me</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-space-100 sm:text-4xl">
            Who I Am
          </h3>
          <p className="mt-4 max-w-3xl text-xl text-space-300 mx-auto">
            Get to know me and my technical skills
          </p>
        </div>

        <div className="mt-16 md:grid md:grid-cols-5 md:gap-12">
          {/* Left column - About text */}
          <div className="md:col-span-3 mb-12 md:mb-0">
            <h4 className="text-2xl font-bold text-space-100 mb-6">My Background</h4>
            <div className="prose prose-lg text-space-300 max-w-none">
              <p className="mb-6 leading-relaxed">{data.about}</p>
              <p className="leading-relaxed">
                I'm passionate about building elegant, user-friendly solutions that solve real-world problems. 
                My goal is to create software that not only functions flawlessly but also provides an exceptional user experience.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="#contact"
                className="button-primary"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div className="md:col-span-2">
            <div className="space-card p-8">
              <h4 className="text-xl font-bold text-space-100 mb-6 flex items-center">
                <svg className="w-6 h-6 text-space-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Technical Skills
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-dark-800 text-space-300 border border-space-700/30 shadow-glow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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