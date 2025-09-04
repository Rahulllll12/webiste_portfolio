import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a dedicated Computer Science student at IIIT Delhi with a passion for technology 
              and innovation. My journey in computer science has led me to explore various domains 
              including software development, machine learning, and bioinformatics.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With a CGPA of 7.48 and hands-on experience in both industry and academia, I believe 
              in continuous learning and staying updated with the latest technological advancements.
            </p>
            
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-500" size={20} />
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                IIIT Delhi, India
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Calendar className="text-blue-500" size={20} />
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Graduating June 2026
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Years Experience</div>
            </div>
            
            <div className={`p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</div>
            </div>
            
            <div className={`p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-500 mb-2">7.48</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>CGPA</div>
            </div>
            
            <div className={`p-6 rounded-xl text-center transition-transform duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="text-3xl font-bold text-blue-500 mb-2">10+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;