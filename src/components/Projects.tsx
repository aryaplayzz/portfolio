import React from 'react';
import type { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div id="projects" className="py-20 bg-space-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-space-400 font-semibold tracking-wide uppercase">Portfolio</h2>
          <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-space-100 sm:text-4xl">
            Featured Projects
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-space-300 mx-auto">
            A showcase of my recent work and technical abilities
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative space-card overflow-hidden shadow-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <h4 className="text-xl font-bold text-space-100 group-hover:text-space-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="mt-3 text-space-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-800 text-space-300 border border-space-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex space-x-4 items-center">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-space-300 hover:text-space-400 transition-colors duration-300 cursor-pointer"
                      aria-label="GitHub repository"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-space-300 hover:text-space-400 transition-colors duration-300 cursor-pointer"
                      aria-label="Live demo"
                    >
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  
                  <div className="ml-auto">
                    <span className="inline-flex items-center text-sm font-medium text-space-400 hover:text-space-300 cursor-pointer">
                      <span className="group-hover:underline">Details</span>
                      <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 