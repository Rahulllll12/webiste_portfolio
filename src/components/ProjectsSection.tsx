import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Student ERP System",
      description: "Integrated ML models to predict grades with R² of 0.85 and delivered course recommendations with 92% precision.",
      tech: ["Java", "Machine Learning", "Linear Regression"],
      period: "Apr 2025 - Jun 2025",
      team: "3 members",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Toxicity Prediction: CADD",
      description: "Implemented ADMET multitask modeling achieving 95% validity on toxicity prediction across 12 endpoints.",
      tech: ["Python", "CADD", "Machine Learning"],
      period: "Jan 2025 - Apr 2025",
      team: "6 members",
      image: "https://images.pexels.com/photos/60022/pexels-photo-60022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Deception Detection in Diplomacy",
      description: "Fine-tuned RoBERTa achieving 18-point F1 score increase and 25-point recall boost on diplomatic message analysis.",
      tech: ["NLP", "RoBERTa", "Deep Learning"],
      period: "Jan 2025 - Apr 2025",
      team: "3 members",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "CAFA Challenge",
      description: "Built ensemble pipeline with BLAST and XGBoost, achieving 0.78 F-max score and reducing runtime by 35%.",
      tech: ["Bioinformatics", "XGBoost", "BLAST"],
      period: "Aug 2024 - Dec 2024",
      team: "4 members",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Memory Management System",
      description: "Developed C++ OS simulator with paging and page-replacement algorithms processing 12,645 memory requests.",
      tech: ["C++", "Operating Systems", "Algorithms"],
      period: "Aug 2023 - Dec 2023",
      team: "2 members",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <p>{project.period}</p>
                  <p>Team: {project.team}</p>
                </div>
                
                <a
                  href="https://github.com/Rahulllll12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <Github size={16} className="mr-2" />
                  View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;