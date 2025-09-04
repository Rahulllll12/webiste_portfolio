import React from 'react';
import { Award } from 'lucide-react';

interface AwardsSectionProps {
  isDarkMode: boolean;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ isDarkMode }) => {
  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Awards & Leadership
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <div className="flex items-center mb-4">
              <Award className="text-yellow-500 mr-3" size={24} />
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Awards
              </h3>
            </div>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• Gold Medal - International Mathematics Olympiad (Class 7)</li>
              <li>• Gold Medal & Man of the Match - SPL Cricket Tournament (U-14)</li>
              <li>• First Runners Up - Competitive Programming Challenge (Class 9)</li>
            </ul>
          </div>

          <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-gray-700' : 'bg-white'
          } shadow-lg`}>
            <div className="flex items-center mb-4">
              <Award className="text-blue-500 mr-3" size={24} />
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Leadership
              </h3>
            </div>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• Lead Organiser - TEDxIIITDelhi (Nov 2024 - Jun 2025)</li>
              <li>• Student Council Member - IIIT Delhi (May 2024 - Apr 2025)</li>
              <li>• Convenor - IIIT Delhi Summer Camp (Mar 2024 - Aug 2024)</li>
              <li>• Operations Committee - Research Showcase RIISE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;