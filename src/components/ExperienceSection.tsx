import React from 'react';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDarkMode }) => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "G4S IT Services (India) Private Limited",
      period: "May 2025 - Jun 2025",
      color: "blue",
      achievements: [
        "Resolved over 50 ERP L1 tickets, maintaining a 98% SLA",
        "Designed more than 5 databases and over 30 stored procedures",
        "Optimized database queries by 20%",
        "Reduced manual tasks by 15%"
      ]
    },
    {
      title: "DSA Teaching Assistant",
      company: "IIIT Delhi",
      period: "Jan 2025 - May 2025",
      color: "green",
      achievements: [
        "Created 11 comprehensive lab and tutorial guides, improving student scores by 20%",
        "Moderated weekly 90-minute doubt-clearing panels for 100+ students",
        "Reduced follow-up forum queries by 40%"
      ]
    },
    {
      title: "IHCI Teaching Assistant",
      company: "IIIT Delhi",
      period: "Aug 2024 - Mar 2025",
      color: "purple",
      achievements: [
        "Designed automated chatbot with Dialogflow, reducing response time by 30%",
        "Created searchable knowledge base with 75+ FAQs",
        "Improved assignment completion rates by 15%"
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
              } shadow-lg`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <p className="text-blue-500 font-semibold">{exp.company}</p>
                </div>
                <span className={`bg-${exp.color}-500 text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {exp.period}
                </span>
              </div>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>• {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;