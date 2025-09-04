import React from 'react';

interface EducationSectionProps {
  isDarkMode: boolean;
}

const EducationSection: React.FC<EducationSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Education
        </h2>
        
        <div className="space-y-8">
          <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          } shadow-lg`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Bachelor of Technology - Computer Science
                </h3>
                <p className="text-blue-500 font-semibold">
                  Indraprastha Institute of Information Technology Delhi (IIIT Delhi)
                </p>
              </div>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Nov 2022 - Jun 2026
              </span>
            </div>
            <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              CGPA: 7.48 (till 6th Semester)
            </p>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
              Enrollment ID: 2022388
            </p>
          </div>

          <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          } shadow-lg`}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  DPS Ruby Park, Kolkata
                </h3>
                <p className="text-blue-500">CBSE Board</p>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                93.4%
              </span>
            </div>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
              Apr 2020 - Mar 2021
            </p>
          </div>

          <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          } shadow-lg`}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Mangalam Vidya Niketan, Kolkata
                </h3>
                <p className="text-blue-500">ICSE Board</p>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                92%
              </span>
            </div>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
              Apr 2018 - Mar 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;