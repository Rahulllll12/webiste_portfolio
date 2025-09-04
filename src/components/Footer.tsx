import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
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
  );
};

export default Footer;