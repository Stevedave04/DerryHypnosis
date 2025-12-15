
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1e293b'; // White or Slate-800
  const eyeStroke = variant === 'light' ? '#FFFFFF' : '#1e293b';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 240 160" 
      className={className} 
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="irisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Eye Group */}
      <g transform="translate(120, 50)">
        {/* Eye Outline */}
        <path 
          d="M-50,0 C-25,-30 25,-30 50,0 C25,30 -25,30 -50,0 Z" 
          fill="none" 
          stroke={eyeStroke} 
          strokeWidth="2.5" 
        />
        
        {/* Iris */}
        <circle 
          cx="0" 
          cy="0" 
          r="18" 
          fill="url(#irisGradient)" 
        />
        
        {/* Pupil */}
        <circle 
          cx="0" 
          cy="0" 
          r="8" 
          fill="#1e293b" 
        />
        
        {/* Reflection */}
        <circle 
          cx="-6" 
          cy="-6" 
          r="3" 
          fill="white" 
          opacity="0.6"
        />
      </g>

      {/* Text Group */}
      <g transform="translate(120, 110)" textAnchor="middle">
        {/* DERRY */}
        <text 
          x="0" 
          y="-15" 
          fontFamily="'Playfair Display', serif" 
          fontSize="38" 
          fontWeight="400" 
          fill={textColor}
          letterSpacing="2"
        >
          DERRY
        </text>
        
        {/* HYPNOSIS */}
        <text 
          x="0" 
          y="25" 
          fontFamily="'Source Sans Pro', sans-serif" 
          fontSize="28" 
          fontWeight="300" 
          fill={textColor}
          letterSpacing="4"
        >
          HYPNOSIS
        </text>
      </g>
    </svg>
  );
};

export default Logo;
