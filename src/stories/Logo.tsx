import React from 'react';

const logo = require('../assets/logo.png');

interface LogoProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export function Logo({ label, ...props }: LogoProps) {
  return (
    <div {...props}>
      <img src={logo} alt={label} />
    </div>
  );
}

export default Logo;
