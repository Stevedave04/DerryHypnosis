
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0F172A'; 
  const eyeStroke = variant === 'light' ? '#FFFFFF' : '#0F172A';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 240 180" 
      className={className} 
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="irisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#312e81', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5b21b6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Eye Group */}
      <g transform="translate(120, 45)">
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
          fill="#000000" 
        />
        
        {/* Shine */}
        <circle 
          cx="4" 
          cy="-4" 
          r="3" 
          fill="white" 
          opacity="0.6"
        />
      </g>

      {/* Text Group */}
      <g transform="translate(120, 115)" textAnchor="middle">
        {/* DERRY */}
        <text 
          x="0" 
          y="0" 
          fontFamily="'Playfair Display', serif" 
          fontSize="52" 
          fontWeight="700" 
          fill={textColor}
          letterSpacing="2"
        >
          DERRY
        </text>
        
        {/* HYPNOSIS */}
        <text 
          x="0" 
          y="40" 
          fontFamily="'Plus Jakarta Sans', sans-serif" 
          fontSize="28" 
          fontWeight="400" 
          fill={textColor}
          letterSpacing="10"
        >
          HYPNOSIS
        </text>
      </g>
    </svg>
  );
};

export default Logo;
