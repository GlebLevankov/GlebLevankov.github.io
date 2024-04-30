import React from 'react';

const logo = require('../assets/logo.png');

interface LogoProps {
  label: string;
}

export function Logo({ label }: LogoProps) {
  return (
    <div>
      <img src={logo} alt={label} />
    </div>
  );
}
