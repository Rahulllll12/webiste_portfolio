import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Mail, Linkedin, Github, ExternalLink, MapPin, Calendar, Award, Code, Database, Brain, Palette, Send, ChevronDown } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const texts = [
    'Software Developer',
    'Computer Science Student',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  // Typing animation effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTextIndex, texts]);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:rahul22388@iiitd.ac.in?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Show success message
      alert('Thank you! Your message has been prepared. Your email client should open shortly.');
    } catch (error) {
      alert('Sorry, there was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'
      } backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Rahul Goel
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-200 hover:text-blue-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 transition-colors duration-200 hover:text-blue-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Education Section */}
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

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center mb-4">
                <Code className="text-blue-500 mr-3" size={24} />
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Programming
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'R', 'Assembly'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-blue-500 hover:text-white ${
                      isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center mb-4">
                <Palette className="text-green-500 mr-3" size={24} />
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Web Tech
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-green-500 hover:text-white ${
                      isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center mb-4">
                <Brain className="text-purple-500 mr-3" size={24} />
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ML & AI
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-purple-500 hover:text-white ${
                      isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center mb-4">
                <Database className="text-orange-500 mr-3" size={24} />
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'MySQL', 'VS Code', 'Figma'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-orange-500 hover:text-white ${
                      isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((project, index) => (
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

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </h2>
          
          <div className="space-y-8">
            <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Summer Intern
                  </h3>
                  <p className="text-blue-500 font-semibold">G4S IT Services (India) Private Limited</p>
                </div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  May 2025 - Jun 2025
                </span>
              </div>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Resolved over 50 ERP L1 tickets, maintaining a 98% SLA</li>
                <li>• Designed more than 5 databases and over 30 stored procedures</li>
                <li>• Optimized database queries by 20%</li>
                <li>• Reduced manual tasks by 15%</li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    DSA Teaching Assistant
                  </h3>
                  <p className="text-blue-500 font-semibold">IIIT Delhi</p>
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Jan 2025 - May 2025
                </span>
              </div>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Created 11 comprehensive lab and tutorial guides, improving student scores by 20%</li>
                <li>• Moderated weekly 90-minute doubt-clearing panels for 100+ students</li>
                <li>• Reduced follow-up forum queries by 40%</li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
            } shadow-lg`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    IHCI Teaching Assistant
                  </h3>
                  <p className="text-blue-500 font-semibold">IIIT Delhi</p>
                </div>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Aug 2024 - Mar 2025
                </span>
              </div>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Designed automated chatbot with Dialogflow, reducing response time by 30%</li>
                <li>• Created searchable knowledge base with 75+ FAQs</li>
                <li>• Improved assignment completion rates by 15%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h3>
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always interested in new opportunities and exciting projects. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>rahul22388@iiitd.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</p>
                    <a 
                      href="http://www.linkedin.com/in/rahul-goel-7970aa276"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</p>
                    <a 
                      href="https://github.com/Rahulllll12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      View my work
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={`p-8 rounded-xl ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            } shadow-lg`}>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Awards Section */}
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

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`mb-4 md:mb-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Rahul Goel. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:rahul22388@iiitd.ac.in"
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Email
              </a>
              <a
                href="http://www.linkedin.com/in/rahul-goel-7970aa276"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Rahulllll12"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;