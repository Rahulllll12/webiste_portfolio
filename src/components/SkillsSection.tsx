import React from 'react';
import { Code, Database, Brain, Palette } from 'lucide-react';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'blue',
      skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'R', 'Assembly']
    },
    {
      title: 'Web Tech',
      icon: Palette,
      color: 'green',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      title: 'ML & AI',
      icon: Brain,
      color: 'purple',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Tools',
      icon: Database,
      color: 'orange',
      skills: ['Git', 'Docker', 'MySQL', 'VS Code', 'Figma']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-500 hover:bg-blue-500',
      green: 'text-green-500 hover:bg-green-500',
      purple: 'text-purple-500 hover:bg-purple-500',
      orange: 'text-orange-500 hover:bg-orange-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <category.icon className={`mr-3 ${getColorClasses(category.color).split(' ')[0]}`} size={24} />
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:text-white ${
                      getColorClasses(category.color)
                    } ${
                      isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;