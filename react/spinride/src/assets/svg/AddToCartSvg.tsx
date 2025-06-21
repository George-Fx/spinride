import * as React from 'react';

export const AddToCartSvg: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} fill="none">
      <rect width={32} height={32} x={0.5} y={0.5} fill="#fff" rx={16} />
      <rect width={32} height={32} x={0.5} y={0.5} stroke="#EEE" rx={16} />
      <path
        stroke="#161E2F"
        strokeLinecap="round"
        d="M16.677 11.5v10M11.5 16.323h10"
      />
    </svg>
  );
};
