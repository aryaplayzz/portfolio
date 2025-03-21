import React, { useEffect, useState } from 'react';
import { PortfolioData } from '../types/portfolio';

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
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-50 pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100 opacity-50"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-purple-100 opacity-50"></div>
        <div className="absolute -bottom-40 right-20 w-72 h-72 rounded-full bg-indigo-50 opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block text-gray-600">Hello, I'm</span>
              <span className="block mt-2 text-indigo-600 relative">
                {data.name}
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-indigo-600 rounded-full"></span>
              </span>
            </h1>
            <h2 className="mt-6 text-xl md:text-2xl font-medium text-gray-600">
              {data.title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl">
              {data.about}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3 text-base font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-base font-medium rounded-full bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-400 transition-colors duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className={`hidden lg:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-indigo-600/10 mx-auto flex items-center justify-center p-6">
                <div className="w-72 h-72 rounded-full bg-indigo-600/20 flex items-center justify-center p-6">
                  <div className="w-64 h-64 rounded-full bg-indigo-600/30 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                    {data.profileImage ? (
                      <img 
                        src={data.profileImage} 
                        alt={`${data.name}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-8xl text-white">
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