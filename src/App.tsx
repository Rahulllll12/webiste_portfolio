import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import AwardsSection from './components/AwardsSection';
import Footer from './components/Footer';
import { useTypingEffect } from './hooks/useTypingEffect';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const texts = [
    'Software Developer',
    'Computer Science Student',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const typedText = useTypingEffect(texts);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navigation
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <HeroSection isDarkMode={isDarkMode} typedText={typedText} />
      <AboutSection isDarkMode={isDarkMode} />
      <EducationSection isDarkMode={isDarkMode} />
      <SkillsSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <ExperienceSection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      <AwardsSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;