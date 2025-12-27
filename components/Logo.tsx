
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#1e293b'; 
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
          <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#db2777', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="eyeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Eye Group */}
      <g transform="translate(120, 50)">
        {/* Eye Outline */}
        <path 
          d="M-60,0 C-30,-35 30,-35 60,0 C30,35 -30,35 -60,0 Z" 
          fill="none" 
          stroke={eyeStroke} 
          strokeWidth="1.5" 
        />
        
        {/* Iris Background (White part of eye) */}
        <path 
          d="M-58,0 C-28,-33 28,-33 58,0 C28,33 -28,33 -58,0 Z" 
          fill="white" 
          opacity={variant === 'light' ? '0.1' : '1'}
        />

        {/* Iris */}
        <circle 
          cx="0" 
          cy="0" 
          r="22" 
          fill="url(#irisGradient)" 
          filter="url(#eyeShadow)"
        />
        
        {/* Pupil */}
        <circle 
          cx="0" 
          cy="0" 
          r="10" 
          fill="#0f172a" 
        />
        
        {/* Inner Glint */}
        <circle 
          cx="3" 
          cy="-3" 
          r="4" 
          fill="white" 
          opacity="0.4"
        />
        
        {/* Outer Highlight */}
        <circle 
          cx="-8" 
          cy="-8" 
          r="3" 
          fill="white" 
          opacity="0.8"
        />
      </g>

      {/* Text Group */}
      <g transform="translate(120, 115)" textAnchor="middle">
        {/* DERRY */}
        <text 
          x="0" 
          y="-10" 
          fontFamily="'Playfair Display', serif" 
          fontSize="46" 
          fontWeight="700" 
          fill={textColor}
          letterSpacing="1"
        >
          DERRY
        </text>
        
        {/* HYPNOSIS */}
        <text 
          x="0" 
          y="35" 
          fontFamily="'Plus Jakarta Sans', sans-serif" 
          fontSize="26" 
          fontWeight="400" 
          fill={textColor}
          letterSpacing="8"
        >
          HYPNOSIS
        </text>
      </g>
    </svg>
  );
};

export default Logo;
