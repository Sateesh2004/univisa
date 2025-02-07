import React from 'react';

const WaveText = (prop) => {
    const text = prop.text
  
  const delay = 0;

  return (
    <span className="wave-text">
      {text.split('').map((char, index) => (
        <span 
          key={index}
          className={`wave-letter ${char=="g"?"pb-2":""}  text-white`}
          style={{
            animationDelay: `${delay + index * 20}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default WaveText;
