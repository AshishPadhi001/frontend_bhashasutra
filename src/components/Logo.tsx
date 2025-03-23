import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}

export const BhashaShutraLogo: React.FC<LogoProps> = ({ width = 32, height = 32 }) => (
  <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="55" fill="url(#paint0_linear)" />
    <path d="M33 45C33 40.5817 36.5817 37 41 37H79C83.4183 37 87 40.5817 87 45V75C87 79.4183 83.4183 83 79 83H41C36.5817 83 33 79.4183 33 75V45Z" stroke="white" strokeWidth="3"/>
    <path d="M45 65L55 52M55 65L45 52" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M65 52H75M65 65H75M70 52V65" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M27 90H93" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#9333EA"/>
      </linearGradient>
    </defs>
  </svg>
);

export default BhashaShutraLogo; 