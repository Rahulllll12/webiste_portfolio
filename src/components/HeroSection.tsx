import React from 'react';
import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
  typedText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode, typedText }) => {
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className="text-blue-500">Rahul Goel</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a <span className="text-blue-500 font-semibold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Computer Science student at IIIT Delhi passionate about software development, 
            machine learning, and creating innovative solutions to complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:rahul22388@iiitd.ac.in"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-lg hover:shadow-xl`}
            >
              <Mail size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/rahul-goel-7970aa276"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-lg hover:shadow-xl`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Rahulllll12"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow-lg hover:shadow-xl`}
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </div>
    </section>
  );
};

export default HeroSection;