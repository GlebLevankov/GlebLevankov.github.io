import React from 'react';
import './logo.css';

const logo = require('../assets/logo.png');

interface LogoProps {
  label: string;
}

export function Logo({ label }: LogoProps) {
  return (
    <div className="logo">
      <img src={logo} alt={label} />
    </div>
  );
}
