import React from 'react';
import './header.css';

const logo = require('../assets/logo.png');

interface LogoProps {
  label: string;
}

export function Logo({ label }: LogoProps) {
  return (
    <div className="storybook-header">
      <img src={logo} alt={label} />
    </div>
  );
}
