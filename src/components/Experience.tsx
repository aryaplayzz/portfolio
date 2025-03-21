import React from 'react';
import type { Experience as ExperienceType } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-50 opacity-50"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 rounded-full bg-purple-50 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Career</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Professional Experience
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            My professional journey and work experience
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative lg:grid lg:grid-cols-8 lg:gap-8 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Left column - Date */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-indigo-600 group-hover:animate-pulse"></div>
                  <p className="text-lg font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                    {exp.duration}
                  </p>
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="mt-3 lg:mt-0 lg:col-span-6">
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {exp.position}
                  </h4>
                  <p className="mt-1 text-lg font-medium text-gray-600">
                    {exp.company}
                  </p>
                  <p className="mt-4 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Vertical connection line for all but the last item */}
              {index < experiences.length - 1 && (
                <div className="hidden lg:block absolute left-[2.5rem] top-12 bottom-0 w-px bg-indigo-200 group-hover:bg-indigo-300 transition-colors duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 