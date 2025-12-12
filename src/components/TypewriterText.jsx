import { useState, useEffect } from 'react';

export default function TypewriterText({ words = ["Crece", "Aprender", "Evolucionar", "Capacitarte"], speed = 100 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? speed / 2 : speed;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <span className="typewriter-text">
      <span className="text-[#442e7d] font-bold text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[4.9rem] leading-tight">
        {currentText}
      </span>
      <span className="cursor-blink">|</span>
    </span>
  );
}
