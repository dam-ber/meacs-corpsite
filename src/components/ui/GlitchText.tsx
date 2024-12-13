import React, { useEffect, useState } from 'react';
import '../../styles/animations.css';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [delay, setDelay] = useState(Math.random() * 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setDelay(Math.random() * 2);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`glitch-text inline-block ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${2 + Math.random()}s`
      }}
    >
      {text}
    </span>
  );
}