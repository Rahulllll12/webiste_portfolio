import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, typedText.length + 1));
        if (typedText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setTypedText(currentText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTextIndex, texts, typeSpeed, deleteSpeed, pauseTime]);

  return typedText;
};