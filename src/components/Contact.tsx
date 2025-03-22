import React from 'react';
import type { PortfolioData } from '../types/portfolio';

interface ContactProps {
  data: Pick<PortfolioData, 'name' | 'email' | 'github' | 'linkedin'>;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <div id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-space-500/10"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-nebula-500/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-space-400 font-semibold tracking-wide uppercase">Contact</h2>
          <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-space-100 sm:text-4xl">
            Get In Touch
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-space-300 mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-card rounded-2xl shadow-glow overflow-hidden relative z-20">
            <div className="p-8 text-center relative z-30">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <svg className="h-8 w-8 text-space-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3 text-xl text-space-200">{data.email}</span>
                </div>

                <a
                  href={`mailto:${data.email}?subject=${encodeURIComponent('Portfolio Contact')}&body=${encodeURIComponent(`Hello ${data.name},\n\nI am reaching out regarding your portfolio...`)}`}
                  className="inline-flex items-center px-8 py-4 text-lg font-medium bg-space-600 hover:bg-space-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative z-40"
                >
                  <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-space-200">Connect with me</h3>
                  <div className="mt-4 flex justify-center space-x-4">
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-space-500 hover:bg-space-400 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-space-500 hover:bg-space-400 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
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

export default Contact; 