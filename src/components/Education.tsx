import React from 'react';
import type { Education as EducationType } from '../types/portfolio';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div id="education" className="py-20 bg-space-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-space-500/10"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-nebula-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-space-400 font-semibold tracking-wide uppercase">Academics</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-space-100 sm:text-4xl">
            Education Background
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-space-300 mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group space-card p-6 relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Accent decoration */}
              <div className="absolute top-0 left-0 w-2 h-full bg-space-500 transform -skew-x-12"></div>
              
              <div className="ml-4">
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="w-6 h-6 text-space-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                  <h4 className="text-xl font-bold text-space-100 group-hover:text-space-400 transition-colors duration-300">
                    {edu.school}
                  </h4>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-space-400">{edu.degree}</span>
                    <span className="mx-2 text-space-500">•</span>
                    <span className="text-space-300">{edu.field}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-space-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-space-300">{edu.duration}</span>
                  </div>
                  
                  {edu.gpa && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-space-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-space-300">GPA: <span className="font-medium text-space-200">{edu.gpa}</span></span>
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